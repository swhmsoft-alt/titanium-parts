/**
 * Generate placeholder images for every empty image slot.
 *
 * The source site's media URLs have expired, so the product pages
 * reference image files that do not exist locally. A page with missing
 * images shows broken-image icons and scores badly on Core Web Vitals.
 *
 * This script writes a neutral placeholder for each empty slot, tagged
 * with the slot name so it is obvious what still needs a photograph.
 * Replacing a placeholder is a plain file overwrite — the build picks
 * up the new dimensions automatically.
 *
 *   node scripts/media/make-placeholders.mjs
 *   node scripts/media/make-placeholders.mjs --dry
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const PUBLIC_IMAGES = path.join(ROOT, 'public', 'images');

const DRY = process.argv.includes('--dry');

const WIDTH = 1200;
const HEIGHT = 800;

/** Folder -> short label shown on the placeholder. */
const FOLDER_LABEL = {
  'titanium-products': 'Product',
  'titanium-anode': 'Anode',
  products: 'Product',
  applications: 'Application',
  industries: 'Industry',
  machining: 'Machining',
  service: 'Service',
  quality: 'Quality',
  scenarios: 'Scenario',
  manufacturing: 'Manufacturing',
  contact: 'Contact',
  team: 'Team',
  root: 'Image',
  logos: 'Brand',
};

function escapeXml(s) {
  return s.replace(/[<>&'"]/g, (c) =>
    ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[c]
  );
}

/** Build a placeholder SVG for one slot. */
function placeholderSvg(slotFile) {
  const base = path.basename(slotFile).replace(/\.\w+$/, '');
  const folder = slotFile.includes('/') ? slotFile.split('/')[0] : 'root';
  const label = FOLDER_LABEL[folder] ?? 'Image';

  // Break the name into readable lines.
  const words = base.replace(/[-_]+/g, ' ').trim();
  const words1 = words.split(' ').slice(0, 4).join(' ');
  const words2 = words.split(' ').slice(4, 8).join(' ');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f1f5f9"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <rect x="20" y="20" width="${WIDTH - 40}" height="${HEIGHT - 40}" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="10 8"/>
  <g transform="translate(${WIDTH / 2}, ${HEIGHT / 2 - 60})" opacity="0.45">
    <circle cx="0" cy="-30" r="34" fill="none" stroke="#64748b" stroke-width="4"/>
    <path d="M -60 60 L -18 -8 L 14 34 L 38 6 L 60 60 Z" fill="none" stroke="#64748b" stroke-width="4" stroke-linejoin="round"/>
  </g>
  <text x="${WIDTH / 2}" y="${HEIGHT / 2 + 70}" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="700" fill="#475569" text-anchor="middle" letter-spacing="2">${escapeXml(label.toUpperCase())}</text>
  <text x="${WIDTH / 2}" y="${HEIGHT / 2 + 112}" font-family="Inter, Arial, sans-serif" font-size="26" font-weight="600" fill="#334155" text-anchor="middle">${escapeXml(words1)}</text>
  ${words2 ? `<text x="${WIDTH / 2}" y="${HEIGHT / 2 + 146}" font-family="Inter, Arial, sans-serif" font-size="26" font-weight="600" fill="#334155" text-anchor="middle">${escapeXml(words2)}</text>` : ''}
  <text x="${WIDTH / 2}" y="${HEIGHT - 52}" font-family="Inter, Arial, sans-serif" font-size="17" font-weight="500" fill="#64748b" text-anchor="middle">Photograph required</text>
</svg>`;
}

/**
 * Collect the slots referenced by the built site.
 */
function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

const DIST = path.join(ROOT, 'dist');
if (!fs.existsSync(DIST)) {
  console.error('dist/ not found — run `npm run build` first.');
  process.exit(1);
}

const slots = new Set();
for (const file of walk(DIST).filter((f) => f.endsWith('.html'))) {
  const html = fs.readFileSync(file, 'utf8');
  for (const m of html.matchAll(/<img\b[^>]*src=["'](\/images\/[^"']+)["']/g)) {
    slots.add(m[1].replace(/^\/images\//, ''));
  }
  for (const m of html.matchAll(/<source\b[^>]*src=["'](\/images\/[^"']+)["']/g)) {
    slots.add(m[1].replace(/^\/images\//, ''));
  }
}

let created = 0;
let existing = 0;
const skippedVideo = [];

for (const slot of [...slots].sort()) {
  if (/\.(mp4|mov|webm)$/i.test(slot)) {
    skippedVideo.push(slot);
    continue;
  }
  const dest = path.join(PUBLIC_IMAGES, slot);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
    existing++;
    continue;
  }
  if (!DRY) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    await sharp(Buffer.from(placeholderSvg(slot)))
      .webp({ quality: 82 })
      .toFile(dest);
  }
  created++;
}

console.log(DRY ? '[dry run]' : '[applied]');
console.log(`  placeholders created : ${created}`);
console.log(`  already had a file   : ${existing}`);
if (skippedVideo.length) {
  console.log(`  video (needs a clip) : ${skippedVideo.length}`);
  for (const v of skippedVideo) console.log(`      ${v}`);
}
