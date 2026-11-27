/**
 * The only legal code search entry point.
 *
 *   npm run grep -- --kw "catalogSections" --path src/data/product-pages
 *
 * Machine rules (a violation is an exit code, not a comment):
 * - `--path` is mandatory. EXIT 2 without it: a search without a path is a
 *   whole-repository search, which is how the context gets burned.
 * - the path must sit inside the scope declared with `npm run gate -- scope`.
 *   EXIT 19 otherwise.
 * - at most `--max` hits (default 20) are printed; the remainder is counted
 *   only, so a wide search can never flood the context.
 * - the search never descends into node_modules, .git, .astro, dist, build,
 *   tmp, coverage or the deploy folders.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const GATE_FILE = path.join(ROOT, 'tmp', 'handoff', 'gate.json');

const IGNORED_DIRS = ['node_modules', '.git', '.astro', 'dist', 'build', 'tmp', 'coverage', '.vercel', '.netlify'];
const TEXT_EXT = new Set(['.ts', '.tsx', '.astro', '.js', '.mjs', '.cjs', '.json', '.md', '.css', '.csv', '.html', '.txt', '.yml', '.yaml']);
const MAX_FILE_BYTES = 200000;

function fail(message, code) {
  console.error(`[grep] ${message}`);
  process.exit(code);
}

function parseArgs(argv) {
  const args = { kw: null, path: null, max: 20 };
  for (let i = 0; i < argv.length; i += 1) {
    const flag = argv[i];
    const value = function () {
      const v = argv[i + 1];
      if (v === undefined) fail(`missing value for ${flag}`, 2);
      i += 1;
      return v;
    };
    if (flag === '--kw') args.kw = value();
    else if (flag === '--path') args.path = value();
    else if (flag === '--max') args.max = Number(value());
    else fail(`unknown flag ${flag}`, 2);
  }
  return args;
}

function loadScope() {
  if (!fs.existsSync(GATE_FILE)) return null;
  try {
    const parsed = JSON.parse(fs.readFileSync(GATE_FILE, 'utf8').replace(/^\uFEFF/, ''));
    return parsed.scope ?? null;
  } catch {
    return null;
  }
}

function within(rel, entries) {
  return entries.some(function (entry) {
    const clean = entry.replace(/\\/g, '/').replace(/\/+$/, '');
    return rel === clean || rel.startsWith(`${clean}/`);
  });
}

/** The directories and files a search may touch, given the declared scope. */
function allowedRoots(scope) {
  if (!scope) return null;
  const list = scope.grep ?? [];
  if (list.length > 0) return list;
  const derived = [];
  for (const entry of [...(scope.read ?? []), ...(scope.write ?? [])]) {
    const clean = entry.replace(/\\/g, '/');
    derived.push(clean.includes('/') ? clean.slice(0, clean.lastIndexOf('/')) : '.');
  }
  return derived.length > 0 ? derived : [];
}

function collectFiles(target, out) {
  const stat = fs.statSync(target);
  if (stat.isFile()) {
    if (TEXT_EXT.has(path.extname(target).toLowerCase()) && stat.size <= MAX_FILE_BYTES) out.push(target);
    return;
  }
  for (const entry of fs.readdirSync(target, { withFileTypes: true })) {
    if (entry.isDirectory() && IGNORED_DIRS.includes(entry.name)) continue;
    const abs = path.join(target, entry.name);
    if (entry.isDirectory()) collectFiles(abs, out);
    else if (entry.isFile() && TEXT_EXT.has(path.extname(entry.name).toLowerCase()) && fs.statSync(abs).size <= MAX_FILE_BYTES) out.push(abs);
  }
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.kw) fail('usage: npm run grep -- --kw "<keyword>" --path <dir-or-file> [--max 20]', 2);
  if (!args.path) fail('--path is mandatory: a search without a path is a whole-repository search', 2);
  if (!Number.isFinite(args.max) || args.max <= 0) fail('--max must be a positive number', 2);

  const target = path.resolve(ROOT, args.path);
  const relTarget = path.relative(ROOT, target).replace(/\\/g, '/');
  if (relTarget.startsWith('..')) fail(`--path must stay inside the project: ${args.path}`, 2);
  if (!fs.existsSync(target)) fail(`--path does not exist: ${args.path}`, 2);

  const scope = loadScope();
  const roots = allowedRoots(scope);
  if (roots && !within(relTarget, roots)) {
    fail(`--path is outside the declared scope (${roots.join(', ')}): ${args.path}`, 19);
  }

  const files = [];
  collectFiles(target, files);
  const needle = args.kw.toLowerCase();
  let hits = 0;
  let extra = 0;
  for (const file of files) {
    const rel = path.relative(ROOT, file).replace(/\\/g, '/');
    const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
    for (let i = 0; i < lines.length; i += 1) {
      if (!lines[i].toLowerCase().includes(needle)) continue;
      if (hits < args.max) {
        hits += 1;
        console.log(`${rel}:${i + 1}: ${lines[i].trim().slice(0, 200)}`);
      } else {
        extra += 1;
      }
    }
  }
  console.log(`[grep] ${hits} hit(s) printed, ${extra} more, ${files.length} file(s) scanned under ${relTarget}`);
}

main();
