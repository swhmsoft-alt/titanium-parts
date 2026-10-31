/**
 * Emit the list of routes the build produces.
 *
 * Used by the navigation filter so the header can never link to a page
 * that does not exist.
 *
 *   node scripts/qa/list-routes.mjs            # human readable
 *   node scripts/qa/list-routes.mjs --json     # JSON array
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const DIST = path.join(ROOT, 'dist');

if (!fs.existsSync(DIST)) {
  console.error('dist/ not found — run `npm run build` first.');
  process.exit(1);
}

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

const routes = walk(DIST)
  .filter((f) => f.endsWith('.html'))
  .map((f) => {
    const rel = path.relative(DIST, f).replace(/\\/g, '/');
    return '/' + rel.replace(/index\.html$/, '');
  })
  .sort();

if (process.argv.includes('--json')) {
  console.log(JSON.stringify(routes, null, 2));
} else {
  for (const r of routes) console.log(r);
}
