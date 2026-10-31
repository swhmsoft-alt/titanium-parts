/**
 * Produce the photo shooting work order.
 *
 * Reads the media manifest and writes a CSV that can be handed to
 * whoever is responsible for photography. One row per image slot, with
 * the target filename, the pages it appears on and a suggested alt text.
 *
 *   node scripts/media/shooting-order.mjs
 *   node scripts/media/shooting-order.mjs --out docs/photo-work-order.csv
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const MAP_FILE = path.join(__dirname, 'media-map.json');

const outIndex = process.argv.indexOf('--out');
const OUT = path.join(
  ROOT,
  outIndex !== -1 ? process.argv[outIndex + 1] : 'docs/photo-work-order.csv'
);

const map = JSON.parse(fs.readFileSync(MAP_FILE, 'utf8'));

/** Human-readable grouping derived from the target folder. */
function groupOf(target) {
  const dir = target.includes('/') ? target.split('/')[0] : 'root';
  const map = {
    'titanium-products': 'Product photography',
    'titanium-anode': 'Anode & coating photography',
    applications: 'Application scenes',
    industries: 'Industry scenes',
    machining: 'Machining & workshop',
    service: 'Fabrication services',
    quality: 'Quality & inspection',
    products: 'Product category tiles',
    scenarios: 'Scenario scenes',
    manufacturing: 'Manufacturing',
    contact: 'Contact',
    logos: 'Brand',
    root: 'General',
  };
  return map[dir] || dir;
}

/** CSV cell escaping. */
function csv(value) {
  const s = String(value ?? '');
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

const rows = [['group', 'target_file', 'incoming_file', 'pages', 'page_count', 'suggested_alt', 'status']];

for (const [kind, entries] of [
  ['remote', map.remote],
  ['local', map.local],
]) {
  for (const [key, entry] of Object.entries(entries || {})) {
    const pages = [...new Set(entry.usedIn || [])];
    const group = groupOf(entry.target || '');
    const isVideo = /\.(mp4|mov|webm)$/i.test(entry.file || '');
    rows.push([
      group,
      entry.target || '',
      entry.file || '',
      pages.join(' | '),
      pages.length,
      entry.alt || '',
      isVideo ? 'video' : 'photo',
    ]);
  }
}

// Sort by group, then by how widely the asset is reused.
rows.sort((a, b) => {
  if (a[0] !== b[0]) return a[0].localeCompare(b[0]);
  return Number(b[4]) - Number(a[4]);
});

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, rows.map((r) => r.map(csv).join(',')).join('\n') + '\n');

const photos = rows.length - 1;
const videos = rows.filter((r) => r[6] === 'video').length;

console.log(`Wrote ${path.relative(ROOT, OUT)}`);
console.log(`  total slots : ${photos}`);
console.log(`  photos      : ${photos - videos}`);
console.log(`  videos      : ${videos}`);

const byGroup = {};
for (const r of rows.slice(1)) byGroup[r[0]] = (byGroup[r[0]] || 0) + 1;
console.log('\nBy group:');
for (const [g, n] of Object.entries(byGroup).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${String(n).padStart(4)}  ${g}`);
}
