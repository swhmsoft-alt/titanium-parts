/**
 * Deterministic launcher for a new session.
 *
 * `/newtask` is a launcher, not a scheduler. The task to work on is named by
 * the handoff document and nowhere else:
 *
 *   1. read the root `HANDOFF.md` (once) and take its `Task: <id>` line
 *   2. open the context ledger: budget.mjs --reset --task <id>
 *   3. that id is the one and only task of `docs/tasks/*.json` to work on
 *   4. work on its assertions only
 *
 * A missing, ambiguous or unknown id is a hard error. There is no fallback
 * and no automatic pick: guessing a task is how scope leaks.
 *
 * The other task files are listed for the report only. Their failures are
 * never fixed here.
 *
 *   node scripts/handoff/newtask.mjs
 *   node scripts/handoff/newtask.mjs --handoff <path>   # test only
 *
 * Output: stdout plus tmp/handoff/newtask.status holding EXIT=<code>.
 * Exit codes: 0 = started, 1 = the ledger could not be opened,
 *             2 = the handoff does not name exactly one usable task.
 */

import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const STATE_DIR = path.join(ROOT, 'tmp', 'handoff');
const STATUS_FILE = path.join(STATE_DIR, 'newtask.status');
const TASK_DIR = path.join(ROOT, 'docs', 'tasks');
const BUDGET_SCRIPT = path.join(ROOT, 'scripts', 'handoff', 'budget.mjs');

/** The machine readable line of the handoff document. */
const TASK_LINE = /^Task:[ \t]*(.*\S)[ \t]*$/;

/** The markers that delimit the machine readable block of the handoff. */
const BLOCK_START = '<!-- newtask -->';
const BLOCK_END = '<!-- /newtask -->';

/** A task id is a lower case slug. */
const TASK_ID = /^[a-z0-9][a-z0-9-]*$/;

/* ------------------------------------------------------------------ */
/* helpers                                                             */
/* ------------------------------------------------------------------ */

function writeStatus(code) {
  fs.mkdirSync(STATE_DIR, { recursive: true });
  fs.writeFileSync(STATUS_FILE, `EXIT=${code}\n`, 'utf8');
}

function fail(message, code) {
  console.error(`[newtask] ${message}`);
  writeStatus(code);
  process.exit(code);
}

/** The task ids of every task file, sorted. */
function allTaskIds() {
  if (!fs.existsSync(TASK_DIR)) return [];
  return fs
    .readdirSync(TASK_DIR)
    .filter((f) => f.endsWith('.json'))
    .map((f) => f.replace(/\.json$/, ''))
    .sort();
}

/* ------------------------------------------------------------------ */
/* arguments                                                           */
/* ------------------------------------------------------------------ */

const argv = process.argv.slice(2);
let handoffFile = path.join(ROOT, 'HANDOFF.md');

for (let i = 0; i < argv.length; i += 1) {
  if (argv[i] === '--handoff') {
    const value = argv[i + 1];
    if (value === undefined) fail('--handoff needs a path', 2);
    handoffFile = path.resolve(ROOT, value);
    i += 1;
  } else {
    fail(`unknown argument "${argv[i]}"`, 2);
  }
}


/* ------------------------------------------------------------------ */
/* 1. the handoff names exactly one task                               */
/* ------------------------------------------------------------------ */

if (!fs.existsSync(handoffFile)) {
  fail(`handoff document not found: ${path.relative(ROOT, handoffFile)}`, 2);
}

const handoffText = fs.readFileSync(handoffFile, 'utf8');
const allLines = handoffText.split(/\r?\n/);

/**
 * The task line is read from the marked block only.
 *
 * The rest of the handoff is prose that grows with every round. A sentence
 * like "Task: something" in an archived round must not be able to break the
 * launcher, and a second block must not be able to smuggle in a second task.
 */
const blockStart = allLines.findIndex((line) => line.trim() === BLOCK_START);
const blockEnd = allLines.findIndex((line) => line.trim() === BLOCK_END);

if (blockStart === -1 || blockEnd === -1) {
  fail(
    `no "${BLOCK_START}" block in ${path.relative(ROOT, handoffFile)} — ` +
      'the handoff must carry the marked block',
    2
  );
}

if (blockEnd < blockStart) {
  fail(
    `the "${BLOCK_END}" marker comes before the "${BLOCK_START}" marker in ` +
      path.relative(ROOT, handoffFile),
    2
  );
}

const matches = allLines
  .slice(blockStart + 1, blockEnd)
  .map((line, index) => ({ line, number: blockStart + 2 + index }))
  .filter((entry) => TASK_LINE.test(entry.line));

if (matches.length === 0) {
  fail(
    `no "Task: <id>" line inside the "${BLOCK_START}" block of ` +
      `${path.relative(ROOT, handoffFile)} — the handoff must name exactly one task`,
    2
  );
}

if (matches.length > 1) {
  const where = matches.map((m) => `line ${m.number}`).join(', ');
  fail(
    `${matches.length} "Task: <id>" lines inside the block (${where}) — ` +
      'the task of a new session has to be unique',
    2
  );
}

const taskId = TASK_LINE.exec(matches[0].line)[1];

/**
 * A task line outside the block is a conflict, not noise.
 *
 * It is reported with its line number so that the mistake can be found
 * instead of guessed at.
 */
const outside = allLines
  .map((line, index) => ({ line, number: index + 1 }))
  .filter(
    (entry) =>
      (entry.number <= blockStart + 1 || entry.number >= blockEnd + 1) &&
      TASK_LINE.test(entry.line)
  );

if (outside.length > 0) {
  const where = outside.map((entry) => `line ${entry.number}`).join(', ');
  fail(
    `${outside.length} "Task: <id>" line(s) outside the "${BLOCK_START}" block (${where}) — ` +
      'the task of a new session has to be unique and inside the block',
    2
  );
}

if (!TASK_ID.test(taskId)) {
  fail(`"${taskId}" is not a valid task id`, 2);
}

const taskFile = path.join(TASK_DIR, `${taskId}.json`);
if (!fs.existsSync(taskFile)) {
  fail(`task definition not found: docs/tasks/${taskId}.json`, 2);
}

let task;
try {
  task = JSON.parse(fs.readFileSync(taskFile, 'utf8'));
} catch (error) {
  fail(`task definition is not valid JSON: docs/tasks/${taskId}.json (${error.message})`, 2);
}

if (task.id !== taskId) {
  fail(
    `task definition declares id "${task.id}" but lives in ${taskId}.json — ` +
      'the file name and the id have to match',
    2
  );
}

/* ------------------------------------------------------------------ */
/* 2. open the context ledger                                          */
/* ------------------------------------------------------------------ */

const budget = spawnSync(
  process.execPath,
  [BUDGET_SCRIPT, '--reset', '--task', taskId],
  { cwd: ROOT, encoding: 'utf8' }
);

if (budget.error || budget.status !== 0) {
  fail(
    `could not open the context ledger for "${taskId}" — ` +
      `budget.mjs exited with ${budget.status === null ? 'no code' : budget.status}`,
    1
  );
}

process.stdout.write(budget.stdout || '');

/* ------------------------------------------------------------------ */
/* 3. the opening contract                                             */
/* ------------------------------------------------------------------ */

const assertions = Array.isArray(task.assertions) ? task.assertions : [];
const others = allTaskIds().filter((id) => id !== taskId);

console.log('');
console.log('[newtask] opening contract');
console.log(`  目标   : ${task.title || taskId}`);
console.log(`  入场   : ${path.relative(ROOT, handoffFile)} — Task: ${taskId}`);
console.log(`  操作   : npm run budget -- --reset --task ${taskId}`);
console.log(`  出场   : 只做 docs/tasks/${taskId}.json 的 ${assertions.length} 条断言`);
console.log(`  完成   : npm run task:verify -- ${taskId} 全绿`);
console.log('');
console.log(`[newtask] task of this session: ${taskId}`);
if (task.summary) console.log(`  ${task.summary}`);
console.log('');
console.log('[newtask] other tasks — report only, do not touch:');
if (others.length === 0) console.log('  (none)');
for (const id of others) console.log(`  - ${id}`);

writeStatus(0);
process.exit(0);
