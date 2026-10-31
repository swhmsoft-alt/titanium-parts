/**
 * Run every acceptance check and report the result in one place.
 *
 * Individual checks are run as separate processes so a failure in one
 * does not hide the others. The script exits non-zero when any blocking
 * check fails, which makes it usable as a build gate.
 *
 *   node scripts/qa/run-all.mjs
 */

import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');

const CHECKS = [
  { name: 'Content & legal audit', script: 'scripts/qa/audit.mjs' },
  { name: 'SEO metadata', script: 'scripts/qa/verify-seo.mjs' },
  { name: 'Internal links', script: 'scripts/qa/list-dead-links.mjs' },
];

let failed = 0;
const results = [];

for (const check of CHECKS) {
  process.stdout.write(`\n=== ${check.name} ===\n`);
  const res = spawnSync(process.execPath, [path.join(ROOT, check.script)], {
    cwd: ROOT,
    encoding: 'utf8',
  });
  const output = (res.stdout || '') + (res.stderr || '');
  process.stdout.write(output);

  const ok = res.status === 0;
  if (!ok) failed++;
  results.push({ name: check.name, ok });
}

console.log('\n========================================');
for (const r of results) {
  console.log(`  ${r.ok ? 'PASS' : 'FAIL'}  ${r.name}`);
}
console.log('========================================');
console.log(
  failed
    ? `${failed} of ${results.length} check groups reported problems.`
    : `All ${results.length} check groups passed.`
);

process.exit(failed ? 1 : 0);
