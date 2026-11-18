/**
 * Stop-gate for the handoff automation.
 *
 * The failure mode this file exists to prevent: an agent that keeps finding
 * "one more thing to clean up" and therefore never ends the task. The gate
 * turns "done" from a narrative into a state:
 *
 *   PLAN -> EDIT -> VERIFY -> DONE
 *
 * Commands
 *   node scripts/handoff/gate.mjs status
 *   node scripts/handoff/gate.mjs phase <PLAN|EDIT|VERIFY|DONE> [--dod "a; b"] [--task id]
 *   node scripts/handoff/gate.mjs write <file> [<file> ...]   -- pre-flight a write
 *   node scripts/handoff/gate.mjs audit                        -- receipt pre-flight
 *   node scripts/handoff/gate.mjs exec -- <cmd> [args...]      -- guarded build / verify
 *   node scripts/handoff/gate.mjs reset                        -- clear counters
 *
 * Exit codes
 *   0   allowed
 *   2   usage error
 *   11  write blocked: the task is in DONE phase (needs user approval)
 *   12  write blocked: tool-call budget exhausted (needs a new atomic task)
 *   13  audit failed: a modified file has no write token
 *   14  audit failed: probe files are still in tmp/
 *   15  exec blocked: same locks as write
 *
 * State: tmp/handoff/gate.json   (phase, DoD checklist, write tokens)
 * Budget: tmp/handoff/budget.json (tool-call counter owned by budget.mjs)
 */

import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const STATE_DIR = path.join(ROOT, 'tmp', 'handoff');
const GATE_FILE = path.join(STATE_DIR, 'gate.json');
const BUDGET_FILE = path.join(STATE_DIR, 'budget.json');
const LOCK_FILE = path.join(STATE_DIR, 'LOCKDOWN');

const PHASES = ['PLAN', 'EDIT', 'VERIFY', 'DONE'];
const MAX_CALLS = 8;
const MAX_EXEC_CALLS = 12;
const MAX_WALL_MINUTES = Number(process.env.GATE_MAX_MINUTES || 20);
const EXEC_ALLOW = [
  /^npm run (build|qa|gate|budget|task:verify|gen:products)/,
  /^astro build/,
  /^node scripts[\\/](qa|handoff)[\\/]/,
];
const IGNORED_DIRS = ['tmp', 'dist', '.astro', 'node_modules', '.git'];

function fail(message, code) {
  console.error(`[gate] ${message}`);
  process.exit(code);
}

function emptyState() {
  return {
    phase: 'PLAN',
    task: null,
    dod: [],
    tokens: {},
    calls: 0,
    execCalls: 0,
    startedAt: new Date().toISOString(),
    updatedAt: null,
  };
}

function loadState() {
  const base = emptyState();
  if (!fs.existsSync(GATE_FILE)) return base;
  try {
    const parsed = JSON.parse(fs.readFileSync(GATE_FILE, 'utf8').replace(/^\uFEFF/, ''));
    for (const key of Object.keys(base)) if (parsed[key] !== undefined) base[key] = parsed[key];
    return base;
  } catch {
    return base;
  }
}

function saveState(state) {
  state.updatedAt = new Date().toISOString();
  fs.mkdirSync(STATE_DIR, { recursive: true });
  fs.writeFileSync(GATE_FILE, `${JSON.stringify(state, null, 2)}\n`, 'utf8');
}

function budgetToolCalls() {
  if (!fs.existsSync(BUDGET_FILE)) return 0;
  try {
    const parsed = JSON.parse(fs.readFileSync(BUDGET_FILE, 'utf8').replace(/^\uFEFF/, ''));
    return Number(parsed.toolCalls) || 0;
  } catch {
    return 0;
  }
}

function effectiveCalls(state) {
  return Math.max(budgetToolCalls(), state.calls);
}

function parseArgs(argv) {
  const args = { command: null, positional: [], dod: null, task: null, reopen: false, after: [] };
  const rest = [...argv];
  const sep = rest.indexOf('--');
  const head = sep === -1 ? rest : rest.slice(0, sep);
  if (sep !== -1) args.after = rest.slice(sep + 1);
  for (let i = 0; i < head.length; i += 1) {
    const flag = head[i];
    const value = function () {
      const v = head[i + 1];
      if (v === undefined) fail(`missing value for ${flag}`, 2);
      i += 1;
      return v;
    };
    switch (flag) {
      case '--dod': args.dod = value(); break;
      case '--task': args.task = value(); break;
      case '--reopen': args.reopen = true; break;
      default:
        if (flag.startsWith('--')) fail(`unknown flag ${flag}`, 2);
        if (args.command === null) args.command = flag;
        else args.positional.push(flag);
    }
  }
  return args;
}

function relPath(file) {
  return path.relative(ROOT, path.resolve(ROOT, file)).replace(/\\/g, '/');
}

function gitStatus() {
  const result = spawnSync('git', ['status', '--porcelain'], { cwd: ROOT, encoding: 'utf8', shell: true });
  if (result.status !== 0) return [];
  return result.stdout
    .split('\n')
    .filter((line) => line.trim() !== '')
    .map((line) => {
      const rel = line.slice(3).trim().replace(/"/g, '');
      const p = rel.indexOf(' -> ');
      return p === -1 ? rel : rel.slice(p + 4);
    });
}

function isIgnored(rel) {
  return IGNORED_DIRS.includes(rel.split('/')[0]);
}

function probeFiles(state) {
  const tmpDir = path.join(ROOT, 'tmp');
  if (!fs.existsSync(tmpDir)) return [];
  const startedAt = Date.parse(state.startedAt) || 0;
  return fs
    .readdirSync(tmpDir, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .filter((entry) => /^_.*\.(mjs|txt|log)$/.test(entry.name))
    .map((entry) => path.join(tmpDir, entry.name))
    // Only probes created during this task count; legacy leftovers are reported, not blocked.
    .filter((abs) => fs.statSync(abs).mtimeMs > startedAt)
    .map((abs) => path.relative(ROOT, abs).replace(/\\/g, '/'));
}


/**
 * Hard wall #1 - wall clock. An atomic task may not live longer than
 * MAX_WALL_MINUTES. After that every write and every guarded exec is refused
 * (EXIT 16), so an unattended run cannot keep spending tokens indefinitely.
 */
function wallClockExceeded(state) {
  const started = Date.parse(state.startedAt);
  if (!Number.isFinite(started)) return false;
  const minutes = (Date.now() - started) / 60000;
  return !(minutes <= MAX_WALL_MINUTES);
}

/**
 * Hard wall #2 - readonly lock. Once the context budget reached the readonly
 * threshold (60%) or budget.mjs dropped a LOCKDOWN file, the gate refuses
 * further writes (EXIT 17). The agent may still read and report.
 */
function readonlyLock() {
  if (fs.existsSync(LOCK_FILE)) return true;
  if (!fs.existsSync(BUDGET_FILE)) return false;
  try {
    const parsed = JSON.parse(fs.readFileSync(BUDGET_FILE, 'utf8').replace(/^\uFEFF/, ''));
    const pct = Number(parsed.pct) || 0;
    return !(pct < 0.6) || parsed.verdict === 'handoff';
  } catch {
    return false;
  }
}

function cmdStatus(state) {
  console.log(
    JSON.stringify(
      {
        phase: state.phase,
        task: state.task,
        dod: state.dod,
        calls: effectiveCalls(state),
        execCalls: state.execCalls,
        maxCalls: MAX_CALLS,
        maxExecCalls: MAX_EXEC_CALLS,
        startedAt: state.startedAt,
      },
      null,
      2
    )
  );
}

function cmdPhase(state, args) {
  const phase = args.positional[0];
  if (!phase || !PHASES.includes(phase)) fail(`phase must be one of ${PHASES.join(' | ')}`, 2);
  if (phase === 'DONE' && state.dod.length === 0 && !args.dod) {
    fail('refusing to enter DONE without a DoD checklist (--dod "item; item")', 2);
  }
  if (state.phase === 'DONE' && phase !== 'DONE' && !args.reopen) {
    console.error('[gate] BLOCKED: this task is DONE.');
    console.error('[gate] Leaving DONE requires an explicit --reopen (new user instruction).');
    process.exit(11);
  }
  // A different --task means a new atomic task: reset counters and tokens.
  const newTask = args.task && state.task && args.task !== state.task;
  const reopenEdit = phase === 'EDIT' && state.phase === 'DONE';
  if (newTask || reopenEdit) {
    state.calls = 0;
    state.execCalls = 0;
    state.tokens = {};
    state.dod = [];
  }
  state.phase = phase;
  if (args.task) state.task = args.task;
  if (args.dod) state.dod = args.dod.split(';').map((s) => s.trim()).filter(Boolean);
  saveState(state);
  console.log(`[gate] phase=${state.phase} dod=${state.dod.length} task=${state.task ?? '-'}`);
}

function cmdWrite(state, args) {
  const files = args.positional.map(relPath);
  if (files.length === 0) fail('write needs at least one file path', 2);

  if (state.phase === 'DONE' && !args.reopen) {
    console.error('[gate] BLOCKED: this task is already DONE.');
    console.error('[gate] Any further write needs a new, explicit instruction from the user.');
    process.exit(11);
  }
  if (wallClockExceeded(state)) {
    console.error('[gate] BLOCKED: wall-clock limit exceeded ('+MAX_WALL_MINUTES+' min).');
    process.exit(16);
  }
  if (readonlyLock() && !args.reopen) {
    console.error('[gate] BLOCKED: readonly mode (60 percent threshold or lockdown file).');
    process.exit(17);
  }
  if (effectiveCalls(state) >= MAX_CALLS && !args.reopen) {
    console.error(`[gate] BLOCKED: tool-call budget exhausted (${effectiveCalls(state)} >= ${MAX_CALLS}).`);
    console.error('[gate] Stop, report the state, and wait for a new atomic task.');
    process.exit(12);
  }

  state.calls += 1;
  const stamp = new Date().toISOString();
  for (const file of files) state.tokens[file] = { at: stamp, phase: state.phase };
  saveState(state);
  console.log(`[gate] write allowed (${files.length} file(s)), phase=${state.phase}, calls=${effectiveCalls(state)}`);
}

function cmdAudit(state) {
  const problems = [];
  const startedAt = Date.parse(state.startedAt) || 0;

  for (const rel of gitStatus()) {
    if (isIgnored(rel)) continue;
    const abs = path.resolve(ROOT, rel);
    if (!fs.existsSync(abs)) continue;
    if (fs.statSync(abs).mtimeMs <= startedAt) continue;
    if (!state.tokens[rel]) problems.push(`no write token for ${rel}`);
  }

  const probes = probeFiles(state);
  if (probes.length > 0) problems.push(`probe files still present: ${probes.join(', ')}`);

  if (problems.length > 0) {
    console.error('[gate] AUDIT FAILED');
    for (const problem of problems) console.error(`[gate]   - ${problem}`);
    process.exit(problems.some((p) => p.startsWith('no write token')) ? 13 : 14);
  }
  console.log(`[gate] AUDIT OK (phase=${state.phase}, ${Object.keys(state.tokens).length} token(s))`);
}

function cmdExec(state, args) {
  const command = args.after;
  if (command.length === 0) fail('exec needs a command after --', 2);
  if (state.phase === 'DONE') {
    console.error('[gate] BLOCKED: this task is DONE.');
    console.error('[gate] Start a new atomic task first: npm run budget -- --reset --task <id>');
    process.exit(15);
  }
  if (wallClockExceeded(state)) {
    console.error('[gate] BLOCKED: wall-clock limit exceeded ('+MAX_WALL_MINUTES+' min).');
    process.exit(16);
  }
  const execLine = command.join(' ');
  if (!EXEC_ALLOW.some((re) => re.test(execLine))) {
    console.error('[gate] BLOCKED: command not on the allow-list: '+execLine);
    process.exit(18);
  }
  if (state.execCalls >= MAX_EXEC_CALLS) {
    console.error(`[gate] BLOCKED: exec budget exhausted (${state.execCalls} >= ${MAX_EXEC_CALLS}).`);
    process.exit(15);
  }
  state.execCalls += 1;
  state.calls += 1;
  saveState(state);
  const result = spawnSync(command[0], command.slice(1), { cwd: ROOT, encoding: 'utf8', shell: true });
  process.stdout.write(result.stdout || '');
  process.stderr.write(result.stderr || '');
  process.exit(typeof result.status === 'number' ? result.status : 1);
}

function cmdReset(state) {
  const fresh = emptyState();
  fresh.task = state.task;
  saveState(fresh);
  console.log('[gate] counters reset');
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const state = loadState();
  if (!args.command) {
    cmdStatus(state);
    return;
  }
  switch (args.command) {
    case 'status': cmdStatus(state); break;
    case 'phase': cmdPhase(state, args); break;
    case 'write': cmdWrite(state, args); break;
    case 'audit': cmdAudit(state); break;
    case 'exec': cmdExec(state, args); break;
    case 'reset': cmdReset(state); break;
    default: fail(`unknown command ${args.command}`, 2);
  }
}

main();
