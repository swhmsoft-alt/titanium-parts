/**
 * Task verifier — answers one question: is this task finished?
 *
 * The answer is a single exit code, so it can be checked mechanically instead
 * of being judged from a log by hand.
 *
 *   node scripts/qa/verify-task.mjs <task-id>
 *   node scripts/qa/verify-task.mjs --list
 *
 * The task file declares a list of assertions, evaluated against the built
 * site in `dist/`. On top of the task specific assertions three project wide
 * gates always run: SEO metadata, internal links and the content audit.
 * Failures the project has explicitly accepted live in
 * `docs/qa/baseline.json` and are reported as known, not as new problems.
 *
 * Exit code 0 means every assertion and every gate passed.
 */

import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { handlers } from './assertions.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const DIST = path.join(ROOT, 'dist');
const TASK_DIR = path.join(ROOT, 'docs', 'tasks');
const BASELINE_FILE = path.join(ROOT, 'docs', 'qa', 'baseline.json');

/* ------------------------------------------------------------------ */
/* helpers                                                             */
/* ------------------------------------------------------------------ */

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function listTasks() {
  if (!fs.existsSync(TASK_DIR)) return [];
  return fs
    .readdirSync(TASK_DIR)
    .filter((f) => f.endsWith('.json'))
    .map((f) => f.replace(/\.json$/, ''));
}

function loadBaseline() {
  if (!fs.existsSync(BASELINE_FILE)) return {};
  try {
    return JSON.parse(fs.readFileSync(BASELINE_FILE, 'utf8'));
  } catch {
    return {};
  }
}

/** Every built page, keyed by its route. */
function loadPages() {
  const pages = new Map();
  for (const file of walk(DIST).filter((f) => f.endsWith('.html'))) {
    const rel = path.relative(DIST, file).replace(/\\/g, '/');
    const route = '/' + rel.replace(/index\.html$/, '');
    pages.set(route, fs.readFileSync(file, 'utf8'));
  }
  return pages;
}

/** Newest source change compared with the newest built page. */
function distIsStale() {
  let newestSrc = 0;
  for (const entry of ['src', 'astro.config.mjs']) {
    const target = path.join(ROOT, entry);
    if (!fs.existsSync(target)) continue;
    const files = fs.statSync(target).isDirectory() ? walk(target) : [target];
    for (const file of files) {
      if (!/\.(astro|ts|css|mjs|json)$/.test(file)) continue;
      const m = fs.statSync(file).mtimeMs;
      if (m > newestSrc) newestSrc = m;
    }
  }
  let newestDist = 0;
  for (const html of walk(DIST).filter((f) => f.endsWith('.html'))) {
    const m = fs.statSync(html).mtimeMs;
    if (m > newestDist) newestDist = m;
  }
  return newestSrc > newestDist;
}

/** Run one of the existing QA scripts and capture its report. */
function runGate(script) {
  const res = spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'qa', script)], {
    cwd: ROOT,
    encoding: 'utf8',
  });
  return { output: `${res.stdout || ''}${res.stderr || ''}`, status: res.status };
}

/**
 * Split an audit report into failure blocks: a `[FAIL] check` line followed by
 * its indented detail lines.
 */
function auditFailures(output) {
  const blocks = [];
  let current = null;
  for (const line of output.split('\n')) {
    const fail = line.match(/^\[FAIL\]\s+(.+)$/);
    if (fail) {
      current = { check: fail[1].trim(), details: [] };
      blocks.push(current);
      continue;
    }
    if (/^\[WARN\]/.test(line)) {
      current = null;
      continue;
    }
    if (current && /^\s{2,}\S/.test(line)) {
      current.details.push(line.trim());
    } else if (!/^\s*$/.test(line)) {
      current = null;
    }
  }
  return blocks;
}

/* ------------------------------------------------------------------ */
/* gates                                                               */
/* ------------------------------------------------------------------ */

function seoGate() {
  const { output, status } = runGate('verify-seo.mjs');
  const problems = output
    .split('\n')
    .filter((l) => l.trim().startsWith('FAIL'))
    .map((l) => l.trim());
  return {
    pass: status === 0,
    detail: status === 0 ? 'all pages carry unique, well formed metadata' : problems.join(' | '),
  };
}

function linksGate() {
  const { output, status } = runGate('list-dead-links.mjs');
  const problems = output
    .split('\n')
    .filter((l) => /^\s{2}\//.test(l))
    .map((l) => l.trim());
  return {
    pass: status === 0,
    detail: status === 0 ? 'no dead internal links' : problems.join(' | '),
  };
}

function auditGate(baseline) {
  const { output, status } = runGate('audit.mjs');
  if (status === 0) {
    return { pass: true, detail: 'content and legal audit passed' };
  }

  const known = (baseline.audit && baseline.audit.knownFailures) || [];
  const blocks = auditFailures(output);
  const unexplained = [];

  for (const block of blocks) {
    const entry = known.find((k) => k.check === block.check);
    if (!entry) {
      unexplained.push(`${block.check}: ${block.details.join(', ') || '(no detail)'}`);
      continue;
    }
    const allowed = Array.isArray(entry.paths) ? entry.paths : [entry.path];
    const uncovered = block.details.filter((d) => !allowed.includes(d));
    if (uncovered.length) {
      unexplained.push(`${block.check}: new failure(s) ${uncovered.join(', ')}`);
    }
  }

  const knownCount = blocks.length - unexplained.length;
  return {
    pass: unexplained.length === 0,
    detail: unexplained.length
      ? unexplained.join(' | ')
      : `${knownCount} known failure(s) accepted by docs/qa/baseline.json, no new failures`,
  };
}

/* ------------------------------------------------------------------ */
/* main                                                                */
/* ------------------------------------------------------------------ */

const args = process.argv.slice(2);

if (args.includes('--list')) {
  const tasks = listTasks();
  console.log(tasks.length ? tasks.join('\n') : 'no task files found');
  process.exit(0);
}

const taskId = args.find((a) => !a.startsWith('--'));
if (!taskId) {
  console.error('Usage: node scripts/qa/verify-task.mjs <task-id> | --list');
  process.exit(2);
}

const taskFile = path.join(TASK_DIR, `${taskId}.json`);
if (!fs.existsSync(taskFile)) {
  console.error(`Task file not found: ${path.relative(ROOT, taskFile)}`);
  console.error(`Available tasks: ${listTasks().join(', ') || 'none'}`);
  process.exit(2);
}

const task = JSON.parse(fs.readFileSync(taskFile, 'utf8'));
const baseline = loadBaseline();
const pages = loadPages();

console.log(`TASK-VERIFY: ${task.id}  —  ${task.title}`);
if (task.summary) console.log(`  ${task.summary}`);

const results = [];

/* --- global gates ---------------------------------------------------- */
if (pages.size === 0) {
  console.log('  [FAIL] build            no pages in dist/ — run the build first');
  results.push({ pass: false, detail: 'no pages in dist/' });
} else if (distIsStale()) {
  console.log('  [FAIL] build            dist/ is older than src/ — rebuild before verifying');
  results.push({ pass: false, detail: 'dist/ is stale' });
} else {
  console.log(`  [PASS] build            ${pages.size} pages, up to date`);
  results.push({ pass: true, detail: 'build is current' });

  for (const gate of [seoGate(), linksGate(), auditGate(baseline)]) {
    console.log(`  [${gate.pass ? 'PASS' : 'FAIL'}] gate             ${gate.detail}`);
    results.push(gate);
  }
}

/* --- task assertions ------------------------------------------------ */
const ctx = { root: ROOT, pages, dist: DIST };
const assertions = task.assertions || [];

assertions.forEach((assertion, index) => {
  const handler = handlers[assertion.type];
  const position = `(${index + 1}/${assertions.length})`;
  if (!handler) {
    console.log(`  [FAIL] ${assertion.type.padEnd(18)} unknown assertion type — ${position}`);
    results.push({ pass: false, detail: `unknown assertion type "${assertion.type}"` });
    return;
  }
  const outcome = handler(assertion, ctx);
  console.log(
    `  [${outcome.pass ? 'PASS' : 'FAIL'}] ${assertion.type.padEnd(18)} ${outcome.detail} — ${position}`
  );
  results.push(outcome);
});

const passed = results.filter((r) => r.pass).length;
const total = results.length;

console.log('  ' + '─'.repeat(72));
console.log(`  ${passed}/${total} checks passed`);
console.log(`TASK-VERIFY: ${passed === total ? 'PASS' : 'FAIL'}`);

process.exit(passed === total ? 0 : 1);
