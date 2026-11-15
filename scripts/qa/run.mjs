/**
 * Deterministic command runner.
 *
 * The terminal integration on this machine cannot reliably capture the exit
 * code of a long running command, so the exit code returned by the tool is
 * not trustworthy. This runner writes the result to files instead, and those
 * files are the only source of truth:
 *
 *   tmp/qa/<label>.log      full stdout + stderr
 *   tmp/qa/<label>.status   one line: EXIT=<code>
 *   tmp/qa/invocations.log  one line per execution, for auditing
 *
 * Usage:
 *   node scripts/qa/run.mjs <label> -- <cmd> [args...]
 *
 * A missing `.status` file means the command is still running. It does not
 * mean the command failed, and it is never a reason to run it again.
 */

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const OUT_DIR = path.join(ROOT, 'tmp', 'qa');

const argv = process.argv.slice(2);
const sep = argv.indexOf('--');

if (argv.length < 2 || sep === -1 || sep === argv.length - 1) {
  console.error('Usage: node scripts/qa/run.mjs <label> -- <cmd> [args...]');
  process.exit(2);
}

const label = argv[0];
const command = argv.slice(sep + 1);

if (!/^[A-Za-z0-9._-]+$/.test(label)) {
  console.error(`Invalid label "${label}" — use letters, digits, dot, dash or underscore.`);
  process.exit(2);
}

fs.mkdirSync(OUT_DIR, { recursive: true });

const logFile = path.join(OUT_DIR, `${label}.log`);
const statusFile = path.join(OUT_DIR, `${label}.status`);
const invocationsFile = path.join(OUT_DIR, 'invocations.log');

/** How many times this label has been executed before, including now. */
function priorRuns() {
  if (!fs.existsSync(invocationsFile)) return 0;
  const lines = fs.readFileSync(invocationsFile, 'utf8').split('\n');
  return lines.filter((l) => l.split('\t')[1] === label).length;
}

const attempt = priorRuns() + 1;
fs.appendFileSync(
  invocationsFile,
  `${new Date().toISOString()}\t${label}\tattempt=${attempt}\t${command.join(' ')}\n`
);

if (attempt > 2) {
  console.warn(
    `[run] WARNING: label "${label}" has now run ${attempt} times. ` +
      'The execution budget in .clinerules allows two runs per label — ' +
      'the third run has to be justified in the task report.'
  );
}

const result = spawnSync(command[0], command.slice(1), {
  cwd: ROOT,
  encoding: 'utf8',
  shell: true,
  maxBuffer: 64 * 1024 * 1024,
});

const output = `${result.stdout || ''}${result.stderr || ''}`;
fs.writeFileSync(logFile, output, 'utf8');

// A process killed by a signal has no status; treat it as a failure.
const exitCode = typeof result.status === 'number' ? result.status : 1;
fs.writeFileSync(statusFile, `EXIT=${exitCode}\n`, 'utf8');

process.stdout.write(
  `[run] label=${label} attempt=${attempt} EXIT=${exitCode}\n` +
    `[run] status=${path.relative(ROOT, statusFile)}\n` +
    `[run] log=${path.relative(ROOT, logFile)}\n`
);

process.exit(exitCode);
