/**
 * Build the image replacement sheet.
 *
 * Produces a table of every image slot the site needs:
 *
 *   file     — the path under public/images/ to drop the photo into
 *   pages    — where the photo appears
 *   alt      — the description to use
 *   status   — whether a file is already there, or the slot is still empty
 *
 * The workflow is a plain file overwrite: save the photo under the file
 * name in the table, over the existing file, and rebuild. No
 * configuration file has to be touched.
 *
 *   node scripts/media/image-sheet.mjs
 *   node scripts/media/image-sheet.mjs --md-only
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const PUBLIC_IMAGES = path.join(ROOT, 'public', 'images');
const DOCS = path.join(ROOT, 'docs');

const MD_FILE = path.join(DOCS, 'image-sheet.md');
const CSV_FILE = path.join(DOCS, 'image-sheet.csv');

/** Group headings for the sheet, keyed by the folder under public/images. */
const GROUPS = {
  'titanium-products': { title: 'Product Photography', note: 'Grade and form shots used across the product pages.' },
  'titanium-anode': { title: 'Anodes & Coatings', note: 'Anode shapes, coating families and the anode production line.' },
  products: { title: 'Product Category Tiles', note: 'Category images used on the home and product index pages.' },
  applications: { title: 'Application Scenes', note: 'Chlor-alkali, water treatment, marine and electrolysis applications.' },
  industries: { title: 'Industry Scenes', note: 'Chemical, marine, aerospace, medical, hydrogen and other sectors.' },
  machining: { title: 'Machining & Workshop', note: 'CNC turning, milling, precision components and the workshop.' },
  service: { title: 'Fabrication Services', note: 'Cutting, forming, welding, finishing and inspection.' },
  quality: { title: 'Quality & Inspection', note: 'Measurement, PMI, coating checks, certificates and packing.' },
  scenarios: { title: 'Scenario Scenes', note: 'Oxidation, hydrogen and system integration scenes.' },
  team: { title: 'Team', note: 'Staff photography for the team page.' },
  manufacturing: { title: 'Manufacturing', note: 'Production floor overview.' },
  contact: { title: 'Contact', note: 'Contact page imagery.' },
  root: { title: 'General', note: 'Site-wide imagery.' },
};

/**
 * Collect every image the built site references.
 * The built output is the source of truth — it reflects what is actually
 * on the page, including images that come from data files.
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

/** slot path -> { pages:Set, alt:string } */
const slots = new Map();

for (const file of walk(DIST).filter((f) => f.endsWith('.html'))) {
  const rel = path.relative(DIST, file).replace(/\\/g, '/');
  const html = fs.readFileSync(file, 'utf8');

  for (const m of html.matchAll(/<img\b([^>]*)>/g)) {
    const attrs = m[1];
    const src = (attrs.match(/src=["']([^"']+)["']/) || [])[1];
    if (!src || !src.startsWith('/images/')) continue;
    const alt = (attrs.match(/alt=["']([^"']*)["']/) || [])[1] || '';

    if (!slots.has(src)) slots.set(src, { pages: new Set(), alt });
    slots.get(src).pages.add(rel);
  }

  // <source src="..."> inside <video> is an image reference too.
  for (const m of html.matchAll(/<source\b[^>]*src=["']([^"']+)["']/g)) {
    const src = m[1];
    if (!src.startsWith('/images/')) continue;
    if (!slots.has(src)) slots.set(src, { pages: new Set(), alt: '' });
    slots.get(src).pages.add(rel);
  }
}

const rows = [];
for (const [src, info] of slots) {
  const rel = src.replace(/^\/images\//, '');
  const abs = path.join(PUBLIC_IMAGES, rel);
  const exists = fs.existsSync(abs);
  const bytes = exists ? fs.statSync(abs).size : 0;
  const folder = rel.includes('/') ? rel.split('/')[0] : 'root';

  // A placeholder is generated with a fixed palette and a "photograph
  // required" caption, so it can be told apart from a real photograph.
  let placeholder = false;
  if (exists && /\.webp$/.test(rel)) {
    try {
      const meta = await sharp(abs).metadata();
      placeholder = meta.width === 1200 && meta.height === 800;
    } catch {
      placeholder = false;
    }
  }

  rows.push({
    file: rel,
    folder,
    pages: [...info.pages].sort(),
    alt: info.alt,
    status: !exists ? 'missing' : placeholder ? 'placeholder' : 'ready',
    bytes,
  });
}

rows.sort((a, b) => {
  const ga = GROUPS[a.folder]?.title ?? a.folder;
  const gb = GROUPS[b.folder]?.title ?? b.folder;
  if (ga !== gb) return ga.localeCompare(gb);
  return a.file.localeCompare(b.file);
});

/* ------------------------------------------------------------------ */
/* Markdown sheet                                                      */
/* ------------------------------------------------------------------ */
const md = [];
md.push('# Image Replacement Sheet');
md.push('');
md.push(
  'Every image slot on the site. Save the photograph under the file name in',
  'the first column, over the existing file in `public/images/`, then rebuild.',
  'No configuration file needs to be edited.'
);
md.push('');
md.push('| | File (under `public/images/`) | Used on | Alt text |');
md.push('|---|---|---|---|');

/** Status marker shown in the sheet. */
const MARK = {
  ready: '·',
  placeholder: '○',
  missing: '×',
};

const STATUS_TEXT = {
  ready: 'a real photograph is already in place',
  placeholder: 'a placeholder is in place — needs your photograph',
  missing: 'no file yet — needs your photograph',
};

let currentGroup = '';
for (const r of rows) {
  const g = GROUPS[r.folder];
  const groupTitle = g?.title ?? r.folder;
  if (groupTitle !== currentGroup) {
    currentGroup = groupTitle;
    md.push('');
    md.push(`## ${groupTitle}`);
    if (g?.note) md.push(`*${g.note}*`);
    md.push('');
    md.push('| | File | Used on | Alt text |');
    md.push('|---|---|---|---|');
  }
  const pages = r.pages.join('<br>');
  const alt = r.alt || '_(to be written)_';
  md.push(`| ${MARK[r.status]} | \`${r.file}\` | ${pages} | ${alt} |`);
}

md.push('');
md.push('---');
md.push('');
md.push(`\`·\` — ${STATUS_TEXT.ready}.`);
md.push(`\`○\` — ${STATUS_TEXT.placeholder}.`);
md.push(`\`×\` — ${STATUS_TEXT.missing}.`);
md.push('');

fs.mkdirSync(DOCS, { recursive: true });
fs.writeFileSync(MD_FILE, md.join('\n'));

/* ------------------------------------------------------------------ */
/* CSV sheet                                                           */
/* ------------------------------------------------------------------ */
function csv(v) {
  const s = String(v ?? '');
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

const csvRows = [['group', 'file', 'status', 'pages', 'alt']];
for (const r of rows) {
  csvRows.push([
    GROUPS[r.folder]?.title ?? r.folder,
    r.file,
    r.status,
    r.pages.join(' | '),
    r.alt,
  ]);
}
fs.writeFileSync(CSV_FILE, csvRows.map((r) => r.map(csv).join(',')).join('\n') + '\n');

/* ------------------------------------------------------------------ */
/* Report                                                              */
/* ------------------------------------------------------------------ */
const missing = rows.filter((r) => r.status === 'missing');
const placeholder = rows.filter((r) => r.status === 'placeholder');
const ready = rows.filter((r) => r.status === 'ready');

console.log('Wrote docs/image-sheet.md');
console.log('Wrote docs/image-sheet.csv');
console.log('');
console.log(`  total slots : ${rows.length}`);
console.log(`  real photo  : ${ready.length}   (from the original site — replace it)`);
console.log(`  placeholder : ${placeholder.length}   (waiting for your photograph)`);
console.log(`  missing     : ${missing.length}   (needs a file)`);
console.log('');
console.log('By group:');
const byGroup = {};
for (const r of rows) {
  const t = GROUPS[r.folder]?.title ?? r.folder;
  byGroup[t] = byGroup[t] || { total: 0, waiting: 0 };
  byGroup[t].total++;
  if (r.status !== 'ready') byGroup[t].waiting++;
}
for (const [g, n] of Object.entries(byGroup).sort((a, b) => b[1].waiting - a[1].waiting)) {
  console.log(`  ${String(n.total).padStart(4)} slots  ${String(n.waiting).padStart(4)} waiting   ${g}`);
}
