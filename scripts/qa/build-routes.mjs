/**
 * Generate the route manifest consumed by the navigation filter.
 *
 * The manifest is written to `src/data/routes.json` and imported by the
 * header so menu entries pointing at pages that do not exist are removed
 * automatically instead of producing 404s for crawlers.
 *
 *   node scripts/qa/build-routes.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const DIST = path.join(ROOT, 'dist');
const OUT = path.join(ROOT, 'src', 'data', 'routes.json');

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

fs.writeFileSync(OUT, JSON.stringify(routes, null, 2) + '\n');
console.log(`Wrote ${path.relative(ROOT, OUT)} (${routes.length} routes)`);
