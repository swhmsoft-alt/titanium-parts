/**
 * Self-test for the scope wall (DoD 6 of the scope-enforcement task).
 *
 * It proves that the four enforcement points actually refuse what they claim:
 *   1. `gate -- scope` persists the whitelist in tmp/handoff/gate.json
 *   2. `gate -- write` refuses a file outside the write scope (EXIT 19)
 *   3. `budget --read` records a read outside the read scope as `scope-read`
 *   4. `scripts/grep.mjs` refuses a missing `--path` (EXIT 2) and a path
 *      outside the grep scope (EXIT 19), and passes inside it
 *   5. `.clinerules/.clinerules.md` carries the whitelist rule
 *
 * The gate state is saved and restored, so the test leaves no trace.
 */

import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const GATE_FILE = path.join(ROOT, 'tmp', 'handoff', 'gate.json');

function run(args) {
  const result = spawnSync(process.execPath, args, { cwd: ROOT, encoding: 'utf8', shell: false });
  return { code: result.status, out: result.stdout || '', err: result.stderr || '' };
}

const results = [];
function check(name, ok, detail) {
  results.push({ name, ok, detail });
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? ` - ${detail}` : ''}`);
}

const backup = fs.existsSync(GATE_FILE) ? fs.readFileSync(GATE_FILE, 'utf8') : null;
try {
  // 1. the scope command persists the whitelist
  const scopeArgs = 'read=src/data/product-pages/titanium-rod-bar.ts,src/components/product;write=src/data/product-pages/titanium-rod-bar.ts;grep=src/data/product-pages';
  const scopeRun = run(['scripts/handoff/gate.mjs', 'scope', '--scope', scopeArgs]);
  const state = JSON.parse(fs.readFileSync(GATE_FILE, 'utf8'));
  check('1 scope persists read/write/grep', scopeRun.code === 0 && state.scope.read.length === 2 && state.scope.write.length === 1 && state.scope.grep.length === 1, `code=${scopeRun.code}`);

  // 2. a write outside the write scope is refused
  const outside = run(['scripts/handoff/gate.mjs', 'write', 'src/components/product/ProductCatalog.astro']);
  check('2 write outside scope exits 19', outside.code === 19, `code=${outside.code}`);
  const inside = run(['scripts/handoff/gate.mjs', 'write', 'src/data/product-pages/titanium-rod-bar.ts']);
  check('2b write inside scope is allowed', inside.code === 0, `code=${inside.code}`);

  // 3. a read outside the read scope is a violation
  const budget = run(['scripts/handoff/budget.mjs', '--read', 'docs/seo/execution-plan.md']);
  const report = JSON.parse(fs.readFileSync(path.join(ROOT, 'tmp', 'handoff', 'budget.json'), 'utf8'));
  check('3 read outside scope is a violation', report.violations.some((v) => v.startsWith('scope-read:')), JSON.stringify(report.violations));
  check('3b out-of-scope read drops verdict to readonly', report.verdict === 'readonly', report.verdict);
  void budget;

  // 4. the grep entry point
  const noPath = run(['scripts/grep.mjs', '--kw', 'catalogSections']);
  check('4 grep without --path exits 2', noPath.code === 2, `code=${noPath.code}`);
  const outsideGrep = run(['scripts/grep.mjs', '--kw', 'catalogSections', '--path', 'docs/seo']);
  check('4b grep outside scope exits 19', outsideGrep.code === 19, `code=${outsideGrep.code}`);
  const insideGrep = run(['scripts/grep.mjs', '--kw', 'catalogSections', '--path', 'src/data/product-pages']);
  check('4c grep inside scope succeeds and caps hits', insideGrep.code === 0 && insideGrep.out.split('\n').filter((l) => l.includes(':')).length <= 21, `code=${insideGrep.code}`);

  // 5. the rule is written down
  const rules = fs.readFileSync(path.join(ROOT, '.clinerules', '.clinerules.md'), 'utf8');
  check('5 clinerules carries the whitelist rule', rules.includes('gate -- scope') && rules.includes('EXIT 19'));

  // 6. a task without a declared scope cannot pass the audit
  const scopeLess = { ...state, scope: { read: [], write: [], grep: [] } };
  fs.writeFileSync(GATE_FILE, JSON.stringify(scopeLess, null, 2), 'utf8');
  const audit = run(['scripts/handoff/gate.mjs', 'audit']);
  check('6 audit refuses a task without a scope', audit.code === 13 && audit.err.includes('scope-not-declared'), `code=${audit.code}`);
} finally {
  if (backup !== null) fs.writeFileSync(GATE_FILE, backup, 'utf8');
  else if (fs.existsSync(GATE_FILE)) fs.unlinkSync(GATE_FILE);
}

const failed = results.filter((r) => !r.ok);
console.log(`\n${results.length - failed.length}/${results.length} passed`);
process.exit(failed.length === 0 ? 0 : 1);
