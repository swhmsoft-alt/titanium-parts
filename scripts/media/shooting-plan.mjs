/**
 * Reduce the image replacement sheet to the shots that actually need to
 * be taken.
 *
 * The source site arranged product photography as a grade-by-form matrix:
 * Grade 2, 5, 7 and 23 ELI each got a photograph of every product form.
 * A real workshop holds one or two pieces of each form, so the matrix
 * collapses to a single representative shot per form.
 *
 * This script groups the slots by what they depict and reports:
 *   - reusable shots (used on several pages) — take once
 *   - matrix shots (one per grade of the same form) — take one per form
 *   - unique shots (a specific application) — take one each
 *
 *   node scripts/media/shooting-plan.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const CSV_FILE = path.join(ROOT, 'docs', 'image-sheet.csv');
const OUT = path.join(ROOT, 'docs', 'shooting-plan.md');

/** Parse the CSV produced by image-sheet.mjs. */
function parseCsv(text) {
  const rows = [];
  let current = null;
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else inQuotes = false;
      } else field += ch;
      continue;
    }
    if (ch === '"') {
      inQuotes = true;
    } else if (ch === ',') {
      (current ??= []).push(field);
      field = '';
    } else if (ch === '\n') {
      if (current) {
        current.push(field);
        rows.push(current);
        current = null;
      }
      field = '';
    } else if (ch !== '\r') {
      field += ch;
    }
  }
  if (current) {
    current.push(field);
    rows.push(current);
  }

  const header = rows.shift();
  return rows.map((r) => Object.fromEntries(header.map((h, i) => [h, r[i] ?? ''])));
}

const rows = parseCsv(fs.readFileSync(CSV_FILE, 'utf8'));

/**
 * Classify a slot.
 *
 *   video     — a video clip
 *   matrix    — one of several grades of the same product form
 *   process   — a shared production/inspection step
 *   form      — a product form, photographed once and reused across the
 *               sectors it appears in (a titanium sheet shot serves both
 *               the chemical and the marine page)
 *   unique    — a shot that genuinely stands on its own
 */

/** Product forms, matched from the tail of the file name. */
const FORMS = [
  'sheet',
  'plate',
  'coil',
  'strip',
  'bar',
  'rod',
  'tube',
  'pipe',
  'wire',
  'mesh',
  'ball',
  'sphere',
  'bolt',
  'fastener',
  'basket',
  'diaphragm',
  'fitting',
  'flange',
  'forging',
  'foil',
  'clad-copper',
  'basket',
];

/** Sector prefixes that describe the application rather than the form. */
const SECTORS = [
  'aerospace',
  'chemical',
  'marine',
  'medical',
  'pharma',
  'power',
  'electro',
  'electroplating',
  'electrowinning',
  'electrochemical',
  'electronics',
  'energy',
  'heat',
  'bearing',
  'buoyancy',
  'valve',
  'speaker',
  'industrial',
  'architectural',
  'audio',
  'pressure',
  'oil',
  'gas',
  'paper',
  'food',
];

function classify(file, pageCount) {
  const name = file.split('/').pop();

  if (/\.mp4$/.test(name)) return 'video';

  // grade-<n>-<form>.webp  ->  form
  const grade = name.match(/^grade-(?:\d+(?:-eli)?|5-ti-6al-4v)-(.+)\.webp$/);
  if (grade) return `matrix:${grade[1].replace(/\.webp$/, '')}`;

  // Shared production and inspection steps, identifiable by their subject
  // rather than by how many pages they happen to sit on.
  const process = name.match(
    /^(requirement-review|material-identity|processing-interface-confirmation|inspection-documentation-records|inspection-documentation|marking-packing-release|marking-release|precision-processing-cutting|rolling-precision|seamless-welded-route|sizing-fabrication-tube|square-rectangular-tube|welding-fabrication-wire|spring-forming-wire|surface-finishing-basket|pickling-cleaning-basket|final-dimension-packaging|inspection-tests-tube|thermal-surface-integrity|titanium-slab-preparation)/
  );
  if (process) return `process:${process[1]}`;

  // A shot used on several pages is a shared one.
  if (pageCount >= 2) return `shared:${name.replace(/\.\w+$/, '')}`;

  // "<sector>-<form>" — one photograph of the form serves every sector
  // that shows the same product in a different setting.
  const stem = name.replace(/\.\w+$/, '');
  for (const sector of SECTORS) {
    if (!stem.startsWith(sector + '-')) continue;
    const rest = stem.slice(sector.length + 1);
    for (const form of FORMS) {
      if (rest === form || rest.endsWith('-' + form)) {
        return `form:${form}`;
      }
    }
    return `unique:${stem}`;
  }

  // Everything else is its own shot, keyed by file name so that two
  // different application photographs are never merged.
  return `unique:${stem}`;
}

/** Group slots by classification key. */
const groups = new Map();
for (const row of rows) {
  const pageCount = row.pages ? row.pages.split('|').length : 0;
  const key = classify(row.file, pageCount);

  if (!groups.has(key)) {
    groups.set(key, {
      kind: key.split(':')[0],
      subject: key.includes(':') ? key.split(':')[1] : '',
      slots: [],
      pages: new Set(),
    });
  }
  const g = groups.get(key);
  g.slots.push(row);
  for (const p of (row.pages || '').split('|')) if (p.trim()) g.pages.add(p.trim());
}

const buckets = {
  video: [],
  process: [],
  shared: [],
  matrix: [],
  form: [],
  unique: [],
};
for (const [key, g] of groups) {
  if (buckets[g.kind]) buckets[g.kind].push(g);
}

const totalSlots = rows.length;
const shotsNeeded =
  buckets.video.length +
  buckets.process.length +
  buckets.shared.length +
  buckets.matrix.length +
  buckets.form.length +
  buckets.unique.length;

/* ------------------------------------------------------------------ */
/* Write the plan                                                      */
/* ------------------------------------------------------------------ */
const out = [];
out.push('# Shooting Plan');
out.push('');
out.push(
  'The image sheet lists every slot on the site. This plan collapses them',
  'into the photographs that actually need to be taken.'
);
out.push('');
out.push('| | Slots | Photographs |');
out.push('|---|---|---|');
out.push(`| Shared production steps (one shot, used across pages) | ${countSlots(buckets.process)} | ${buckets.process.length} |`);
out.push(`| Product form shots (one per form, covering every grade) | ${countSlots(buckets.matrix)} | ${buckets.matrix.length} |`);
out.push(`| Form shots reused across sectors | ${countSlots(buckets.form)} | ${buckets.form.length} |`);
out.push(`| Shots used on several pages | ${countSlots(buckets.shared)} | ${buckets.shared.length} |`);
out.push(`| Application shots (one each) | ${countSlots(buckets.unique)} | ${buckets.unique.length} |`);
out.push(`| Video | ${countSlots(buckets.video)} | ${buckets.video.length} |`);
out.push(`| **Total** | **${totalSlots}** | **${shotsNeeded}** |`);
out.push('');

function countSlots(list) {
  return list.reduce((n, g) => n + g.slots.length, 0);
}

out.push('---');
out.push('');

if (buckets.process.length) {
  out.push('## 1. Shared Production Steps');
  out.push('');
  out.push(
    'These are the production and inspection steps shown across the product',
    'pages. Photograph each step once.'
  );
  out.push('');
  out.push('| Step | Save as | Covers |');
  out.push('|---|---|---|');
  for (const g of buckets.process) {
    const r = g.slots[0];
    out.push(`| ${title(g.subject)} | \`${r.file}\` | ${g.slots.length} slots |`);
  }
  out.push('');
}

if (buckets.matrix.length) {
  out.push('## 2. Product Form Shots');
  out.push('');
  out.push(
    'The source site used one photograph per grade of each form. Photograph the',
    'form once, then reuse that file for every grade slot in the sheet.'
  );
  out.push('');
  out.push('| Form | Save as | Covers |');
  out.push('|---|---|---|');
  for (const g of buckets.matrix) {
    const r = g.slots[0];
    out.push(`| ${title(g.subject)} | \`${r.file}\` | ${g.slots.length} grade slots |`);
  }
  out.push('');
}

if (buckets.form.length) {
  out.push('## 3. Form Shots Reused Across Sectors');
  out.push('');
  out.push(
    'The same product form is photographed once and used for each sector it',
    'appears in, so one sheet shot covers the chemical, marine and medical pages.'
  );
  out.push('');
  out.push('| Form | Save as | Covers |');
  out.push('|---|---|---|');
  for (const g of buckets.form) {
    const r = g.slots[0];
    out.push(`| ${title(g.subject)} | \`${r.file}\` | ${g.slots.length} sector slots |`);
  }
  out.push('');
}

if (buckets.shared.length) {
  out.push('## 4. Shots Used On Several Pages');
  out.push('');
  out.push('| Photograph | Save as | Appears on |');
  out.push('|---|---|---|');
  for (const g of buckets.shared) {
    const r = g.slots[0];
    out.push(`| ${title(g.subject)} | \`${r.file}\` | ${g.pages.size} pages |`);
  }
  out.push('');
}

if (buckets.unique.length) {
  out.push('## 5. Application Shots');
  out.push('');
  out.push('One photograph each, used on a single page.');
  out.push('');
  out.push('| Photograph | Save as | Page |');
  out.push('|---|---|---|');
  for (const g of buckets.unique) {
    const r = g.slots[0];
    out.push(`| ${title(r.file.split('/').pop().replace(/\.\w+$/, ''))} | \`${r.file}\` | ${[...g.pages][0] ?? ''} |`);
  }
  out.push('');
}

if (buckets.video.length) {
  out.push('## 6. Video');
  out.push('');
  out.push('| Clip | Save as | Appears on |');
  out.push('|---|---|---|');
  for (const g of buckets.video) {
    const r = g.slots[0];
    out.push(`| ${title(r.file.split('/').pop().replace(/\.\w+$/, ''))} | \`${r.file}\` | ${g.pages.size} pages |`);
  }
  out.push('');
}

out.push('---');
out.push('');
out.push(
  'Save each photograph under the file name shown, over the existing file in',
  '`public/images/`, then run `npm run build`. No configuration file needs to',
  'be edited.'
);
out.push('');

function title(s) {
  const t = s
    .replace(/[-_]+/g, ' ')
    .replace(/\.\w+$/, '')
    .trim();
  return t.charAt(0).toUpperCase() + t.slice(1);
}

fs.writeFileSync(OUT, out.join('\n'));

console.log('Wrote docs/shooting-plan.md');
console.log('');
console.log(`  slots in sheet   : ${totalSlots}`);
console.log(`  photographs needed: ${shotsNeeded}`);
console.log('');
console.log('  shared steps    :', buckets.process.length);
console.log('  product forms   :', buckets.matrix.length);
console.log('  form shots      :', buckets.form.length);
console.log('  shared pages    :', buckets.shared.length);
console.log('  application     :', buckets.unique.length);
console.log('  videos          :', buckets.video.length);
