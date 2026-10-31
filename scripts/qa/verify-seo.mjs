/**
 * Validate the generated JSON-LD and the metadata emitted on each page.
 *
 *   node scripts/qa/verify-seo.mjs
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

const pages = walk(DIST).filter((f) => f.endsWith('.html'));
const ORIGIN = 'https://titanium-parts.com';

let errors = 0;
const fail = (msg) => {
  errors++;
  console.log(`  FAIL  ${msg}`);
};

const titles = new Map();
const descriptions = new Map();

for (const file of pages) {
  const rel = path.relative(DIST, file).replace(/\\/g, '/');
  const html = fs.readFileSync(file, 'utf8');

  // --- title / description -------------------------------------------
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1];
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1];

  if (!title) fail(`${rel}: missing <title>`);
  else if (title.length > 70) fail(`${rel}: title too long (${title.length})`);
  else if (titles.has(title)) fail(`${rel}: duplicate title with ${titles.get(title)}`);
  else titles.set(title, rel);

  if (!desc) fail(`${rel}: missing meta description`);
  else if (desc.length < 70 || desc.length > 175) {
    fail(`${rel}: description length ${desc.length} outside 70-175`);
  } else if (descriptions.has(desc)) {
    fail(`${rel}: duplicate description with ${descriptions.get(desc)}`);
  } else descriptions.set(desc, rel);

  // --- canonical -----------------------------------------------------
  const canonical = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
  if (!canonical) fail(`${rel}: missing canonical`);
  else if (!canonical.startsWith(ORIGIN)) fail(`${rel}: canonical not absolute on origin -> ${canonical}`);

  // --- json-ld -------------------------------------------------------
  const ldMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!ldMatch) {
    fail(`${rel}: missing JSON-LD`);
  } else {
    try {
      const data = JSON.parse(ldMatch[1]);
      const types = (data['@graph'] || []).map((n) => n['@type']);
      for (const required of ['Organization', 'WebSite', 'BreadcrumbList']) {
        if (!types.includes(required)) fail(`${rel}: JSON-LD missing ${required}`);
      }
    } catch (e) {
      fail(`${rel}: JSON-LD is not valid JSON — ${e.message}`);
    }
  }

  // --- og ------------------------------------------------------------
  const ogUrl = (html.match(/<meta property="og:url" content="([^"]*)"/) || [])[1];
  if (ogUrl && !ogUrl.startsWith(ORIGIN)) fail(`${rel}: og:url not on origin -> ${ogUrl}`);
  const ogImage = (html.match(/<meta property="og:image" content="([^"]*)"/) || [])[1];
  if (!ogImage) fail(`${rel}: missing og:image`);
}

console.log(`\nChecked ${pages.length} pages`);
console.log(`  unique titles      : ${titles.size}`);
console.log(`  unique descriptions: ${descriptions.size}`);
console.log(`  origin             : ${ORIGIN}`);
console.log(errors ? `\n${errors} problem(s) found.` : '\nAll checks passed.');
process.exit(errors ? 1 : 0);
