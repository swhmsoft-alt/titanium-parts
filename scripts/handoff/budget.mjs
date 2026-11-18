/**
 * Context budget monitor for the Cline handoff automation.
 *
 * Single source of truth for "how full is the context window": the agent runs
 * this script and reads `verdict` instead of guessing the ratio.
 *
 *   npm run budget -- --reset --task <id>
 *   npm run budget -- --calls 6 --read src/components/Foo.astro
 *   npm run budget -- --pct 72
 *
 * Flags
 *   --reset          start a new atomic task (clears the ledger)
 *   --task <id>      label the ledger (docs/tasks/<id>.json)
 *   --calls <n>      cumulative tool calls of the current atomic task
 *   --read <p1,p2>   files whose content entered the context
 *   --log <label>    size of tmp/qa/<label>.log (command output)
 *   --chars <n>      cumulative conversation characters
 *   --pct <n>        real context percentage from the UI (0-1 or 0-100)
 *   --window <n>     context window in tokens (default 256000)
 *
 * Output: JSON on stdout and in tmp/handoff/budget.json.
 * tmp/handoff/budget.status holds EXIT=<code>; the JSON `verdict` wins.
 * Exit codes: 0 = ok or warn, 10 = handoff required, 2 = usage error.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const STATE_DIR = path.join(ROOT, 'tmp', 'handoff');
const STATE_FILE = path.join(STATE_DIR, 'budget.json');
const STATUS_FILE = path.join(STATE_DIR, 'budget.status');
const GATE_FILE = path.join(STATE_DIR, 'gate.json');
/** Hard wall #2b - presence of this file locks the gate down for good. */
const LOCK_FILE = path.join(STATE_DIR, 'LOCKDOWN');

/**
 * A new atomic task clears the stop-gate as well: the DONE lock and the write
 * tokens belong to the previous task, never to the next one.
 */
function resetGateState() {
  if (!fs.existsSync(GATE_FILE)) return;
  fs.writeFileSync(
    GATE_FILE,
    `${JSON.stringify(
      { phase: 'PLAN', task: null, dod: [], tokens: {}, calls: 0, execCalls: 0, startedAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
      null,
      2
    )}\n`,
    'utf8'
  );
}

const DEFAULTS = {
  window: 200000,
  warn: 0.5,
  /** Hard wall #2a - readonly band: at/above this ratio the gate refuses writes. */
  readonly: 0.6,
  handoff: 0.7,
  /** Hard wall #2b - at/above this ratio the gate is locked down entirely. */
  lockdown: 0.75,
  maxToolCalls: 8,
  maxFileReads: 2,
  charsPerToken: 4,
  baseTokens: 6000,
};

const STATE_KEYS = ['task', 'window', 'toolCalls', 'bytesRead', 'chars', 'steps', 'fileReads', 'logBytes', 'reportedPct', 'startedAt', 'updatedAt'];

function atLeast(a, b) {
  return !(a < b);
}

function ratio(a, b) {
  return 0 < b ? a / b : 0;
}

function fail(message) {
  console.error(`[budget] ${message}`);
  console.error('[budget] usage: budget.mjs [--reset] [--task <id>] [--calls <n>] [--read <p1,p2>] [--log <label>] [--chars <n>] [--pct <n>] [--window <n>]');
  process.exit(2);
}

function parseArgs(argv) {
  const args = { reset: false, task: null, calls: null, read: [], log: [], chars: null, pct: null, window: null };
  for (let i = 0; i < argv.length; i += 1) {
    const flag = argv[i];
    const value = function () {
      const v = argv[i + 1];
      if (v === undefined) fail(`missing value for ${flag}`);
      i += 1;
      return v;
    };
    switch (flag) {
      case '--reset': args.reset = true; break;
      case '--task': args.task = value(); break;
      case '--calls': args.calls = Number(value()); break;
      case '--read': args.read.push.apply(args.read, value().split(',').map(function (s) { return s.trim(); }).filter(Boolean)); break;
      case '--log': args.log.push(value()); break;
      case '--chars': args.chars = Number(value()); break;
      case '--pct': args.pct = value(); break;
      case '--window': args.window = Number(value()); break;
      default: fail(`unknown flag ${flag}`);
    }
  }
  return args;
}

function parsePct(raw) {
  const n = Number(String(raw).replace('%', '').trim());
  if (!Number.isFinite(n) || n < 0) fail(`invalid --pct "${raw}"`);
  return 1 < n ? n / 100 : n;
}

function emptyState() {
  return {
    task: null,
    window: DEFAULTS.window,
    toolCalls: 0,
    bytesRead: 0,
    chars: 0,
    steps: 0,
    fileReads: {},
    logBytes: {},
    reportedPct: null,
    startedAt: new Date().toISOString(),
    updatedAt: null,
  };
}

function loadState() {
  const base = emptyState();
  if (!fs.existsSync(STATE_FILE)) return base;
  try {
    const raw = fs.readFileSync(STATE_FILE, 'utf8').replace(/^\uFEFF/, '');
    const parsed = JSON.parse(raw);
    for (const key of STATE_KEYS) if (parsed[key] !== undefined) base[key] = parsed[key];
    return base;
  } catch {
    return base;
  }
}

function round(n) {
  return Math.round(n * 1000) / 1000;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const state = args.reset ? emptyState() : loadState();

  if (args.task !== null) state.task = args.task;
  if (args.window !== null) {
    if (!Number.isFinite(args.window) || !(0 < args.window)) fail('--window must be a positive number');
    state.window = args.window;
  }
  if (args.calls !== null) {
    if (!Number.isFinite(args.calls) || args.calls < 0) fail('--calls must be >= 0');
    state.toolCalls = Math.max(state.toolCalls, Math.floor(args.calls));
  }
  if (args.chars !== null) {
    if (!Number.isFinite(args.chars) || args.chars < 0) fail('--chars must be >= 0');
    state.chars = Math.max(state.chars, Math.floor(args.chars));
  }
  if (args.pct !== null) state.reportedPct = parsePct(args.pct);

  const violations = [];
  for (const rel of args.read) {
    const abs = path.resolve(ROOT, rel);
    if (!fs.existsSync(abs) || !fs.statSync(abs).isFile()) {
      violations.push(`read-missing:${rel}`);
      continue;
    }
    state.bytesRead += fs.statSync(abs).size;
    state.fileReads[rel] = (state.fileReads[rel] ?? 0) + 1;
    if (atLeast(state.fileReads[rel], DEFAULTS.maxFileReads + 1)) violations.push(`file-read-limit:${rel}`);
  }
  for (const label of args.log) {
    const logPath = path.join(ROOT, 'tmp', 'qa', `${label}.log`);
    if (!fs.existsSync(logPath)) {
      violations.push(`log-missing:${label}`);
      continue;
    }
    const size = fs.statSync(logPath).size;
    state.bytesRead += size;
    state.logBytes[label] = (state.logBytes[label] ?? 0) + size;
  }
  state.steps += 1;
  state.updatedAt = new Date().toISOString();

  const contentTokens = Math.round((state.bytesRead + state.chars) / DEFAULTS.charsPerToken);
  const estTokens = DEFAULTS.baseTokens + contentTokens;
  const proxyPct = ratio(estTokens, state.window);
  const reportedPct = state.reportedPct;
  const pct = Math.max(proxyPct, reportedPct ?? 0);

  let verdict = 'ok';
  if (atLeast(pct, DEFAULTS.handoff) || atLeast(state.toolCalls, DEFAULTS.maxToolCalls)) verdict = 'handoff';
  else if (atLeast(pct, DEFAULTS.readonly)) verdict = 'readonly';
  else if (atLeast(pct, DEFAULTS.warn)) verdict = 'warn';

  const report = {
    task: state.task,
    window: state.window,
    estTokens,
    proxyPct: round(proxyPct),
    reportedPct: reportedPct === null ? null : round(reportedPct),
    pct: round(pct),
    toolCalls: state.toolCalls,
    bytesRead: state.bytesRead,
    chars: state.chars,
    steps: state.steps,
    fileReads: state.fileReads,
    logBytes: state.logBytes,
    violations,
    verdict,
    thresholds: {
      warn: DEFAULTS.warn,
      readonly: DEFAULTS.readonly,
      handoff: DEFAULTS.handoff,
      lockdown: DEFAULTS.lockdown,
      maxToolCalls: DEFAULTS.maxToolCalls,
      maxFileReads: DEFAULTS.maxFileReads,
    },
    startedAt: state.startedAt,
    updatedAt: state.updatedAt,
  };

  fs.mkdirSync(STATE_DIR, { recursive: true });
  fs.writeFileSync(STATE_FILE, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
  if (args.reset) resetGateState();
  // Hard wall #2b: at/above the lockdown ratio the gate is closed until the
  // next `npm run budget -- --reset --task <id>` clears the file.
  if (atLeast(pct, DEFAULTS.lockdown)) {
    fs.writeFileSync(LOCK_FILE, `locked at ${new Date().toISOString()}\n`, 'utf8');
  } else if (args.reset) {
    if (fs.existsSync(LOCK_FILE)) fs.unlinkSync(LOCK_FILE);
  }
  const exitCode = verdict === 'handoff' ? 10 : 0;
  fs.writeFileSync(STATUS_FILE, `EXIT=${exitCode}\n`, 'utf8');
  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
  process.exitCode = exitCode;
}

main();