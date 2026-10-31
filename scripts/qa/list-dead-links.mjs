/**
 * List every internal link in the built site that does not resolve to a
 * page, so broken navigation can be fixed before publishing.
 *
 *   node scripts/qa/list-dead-links.mjs
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

const htmlFiles = walk(DIST).filter((f) => f.endsWith('.html'));

/** Route set, e.g. "contact/index.html" -> "/contact/" */
const routes = new Set(
  htmlFiles.map((f) => {
    const rel = path.relative(DIST, f).replace(/\\/g, '/');
    return '/' + rel.replace(/index\.html$/, '');
  })
);

/** Static assets that exist under public/, plus the built asset bundle. */
const assets = new Set([
  ...walk(path.join(ROOT, 'public')).map(
    (f) => '/' + path.relative(path.join(ROOT, 'public'), f).replace(/\\/g, '/')
  ),
  ...walk(path.join(DIST, '_astro')).map(
    (f) => '/' + path.relative(DIST, f).replace(/\\/g, '/')
  ),
]);

const dead = new Map();

for (const file of htmlFiles) {
  const rel = path.relative(DIST, file).replace(/\\/g, '/');
  const html = fs.readFileSync(file, 'utf8');
  for (const m of html.matchAll(/href="([^"]*)"/g)) {
    const href = m[1];
    if (!href.startsWith('/')) continue;
    const clean = href.split('#')[0].split('?')[0];
    if (!clean) continue;

    // Static asset link.
    if (/\.[a-z0-9]{2,5}$/i.test(clean)) {
      if (!assets.has(clean)) {
        if (!dead.has(clean)) dead.set(clean, new Set());
        dead.get(clean).add(rel);
      }
      continue;
    }

    // Page link — normalise to the trailing-slash form.
    const route = clean.endsWith('/') ? clean : clean + '/';
    if (!routes.has(route)) {
      if (!dead.has(route)) dead.set(route, new Set());
      dead.get(route).add(rel);
    }
  }
}

if (!dead.size) {
  console.log('No dead internal links found.');
} else {
  console.log(`${dead.size} dead internal link(s):\n`);
  for (const [link, sources] of [...dead.entries()].sort()) {
    console.log(`  ${link}`);
    for (const s of [...sources].slice(0, 4)) console.log(`      <- ${s}`);
    if (sources.size > 4) console.log(`      ... and ${sources.size - 4} more`);
  }
  process.exitCode = 1;
}
