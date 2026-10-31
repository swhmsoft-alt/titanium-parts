/**
 * Materialise every remote image slot as a local file.
 *
 * The site currently hotlinks images from the source site's WordPress
 * media library. Those references cannot simply be overwritten with the
 * company's own photography, because no local file exists to overwrite.
 *
 * This script resolves each remote slot to a local path under
 * `public/images/`, downloads the current file so the page keeps
 * working, and rewrites every reference in `src/` to the local path.
 *
 * After this runs, every image on the site is a local file, and replacing
 * the photography is a plain file overwrite — no configuration involved.
 *
 *   node scripts/media/localise-remote-media.mjs
 *   node scripts/media/localise-remote-media.mjs --dry
 */

import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const SRC = path.join(ROOT, 'src');
const PUBLIC_IMAGES = path.join(ROOT, 'public', 'images');
const MAP_FILE = path.join(__dirname, 'media-map.json');

const DRY = process.argv.includes('--dry');

/** Video extensions are preserved rather than converted to WebP. */
function isVideo(url) {
  return /\.(mp4|mov|webm)$/i.test(url);
}

function download(url) {
  return new Promise((resolve) => {
    const req = https.get(
      url,
      { headers: { 'User-Agent': 'Mozilla/5.0' } },
      (res) => {
        if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307) {
          res.resume();
          resolve(download(res.headers.location));
          return;
        }
        if (res.statusCode !== 200) {
          res.resume();
          resolve({ ok: false, reason: `http ${res.statusCode}` });
          return;
        }
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () => resolve({ ok: true, buffer: Buffer.concat(chunks) }));
      }
    );
    req.on('error', (e) => resolve({ ok: false, reason: e.message }));
    req.setTimeout(30000, () => {
      req.destroy();
      resolve({ ok: false, reason: 'timeout' });
    });
  });
}

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

const map = JSON.parse(fs.readFileSync(MAP_FILE, 'utf8'));
const remote = map.remote || {};

/**
 * Decide the local path for a remote slot.
 * Videos keep their extension; everything else becomes WebP.
 */
function localPathFor(url, entry) {
  const base = path.basename(url);
  const ext = path.extname(base);
  const stem = base
    .slice(0, -ext.length)
    .replace(/hele[-_]?titanium/gi, '')
    .replace(/[^A-Za-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();

  const folder = entry.target && entry.target.includes('/')
    ? entry.target.split('/')[0]
    : 'titanium-products';

  const finalExt = isVideo(url) ? ext.toLowerCase() : '.webp';
  return `${folder}/${stem}${finalExt}`;
}

/** Run tasks with a bounded number in flight. */
async function pool(items, limit, worker) {
  const results = [];
  let index = 0;

  const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (index < items.length) {
      const current = index++;
      results[current] = await worker(items[current]);
    }
  });

  await Promise.all(runners);
  return results;
}

const report = { localised: [], skipped: [], failed: [] };
const urlToLocal = new Map();

for (const [url, entry] of Object.entries(remote)) {
  const local = localPathFor(url, entry);
  urlToLocal.set(url, `/images/${local}`);
}

/**
 * Download one slot.
 * Retries once with a short delay, because the source host rate-limits.
 */
async function fetchSlot(url, local) {
  const dest = path.join(PUBLIC_IMAGES, local);

  // A file may already sit at the destination from an earlier run.
  if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
    return { status: 'skipped', url, local, reason: 'already present' };
  }

  for (let attempt = 0; attempt < 2; attempt++) {
    const res = await download(url);
    if (res.ok) {
      if (!DRY) {
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        fs.writeFileSync(dest, res.buffer);
      }
      return { status: 'localised', url, local, bytes: res.buffer.length };
    }
    if (attempt === 0) await new Promise((r) => setTimeout(r, 800));
    else return { status: 'failed', url, local, reason: res.reason };
  }
  return { status: 'failed', url, local, reason: 'unknown' };
}

const entries = [...urlToLocal.entries()];
const outcomes = await pool(entries, 6, ([url, local]) => fetchSlot(url, local));

for (const outcome of outcomes) {
  if (!outcome) continue;
  if (outcome.status === 'localised') report.localised.push(outcome);
  else if (outcome.status === 'skipped') report.skipped.push(outcome);
  else report.failed.push(outcome);
}

/* ------------------------------------------------------------------ */
/* Rewrite every reference in src/ to the local path                   */
/* ------------------------------------------------------------------ */
let filesChanged = 0;
let refsRewritten = 0;

for (const file of walk(SRC).filter((f) => /\.(astro|ts|json)$/.test(f))) {
  const source = fs.readFileSync(file, 'utf8');
  let text = source;

  for (const [url, local] of urlToLocal) {
    if (!text.includes(url)) continue;
    const count = text.split(url).length - 1;
    text = text.split(url).join(local);
    refsRewritten += count;
  }

  if (text !== source) {
    if (!DRY) fs.writeFileSync(file, text);
    filesChanged++;
  }
}

/* ------------------------------------------------------------------ */
/* Update the manifest so the slots now point at local files            */
/* ------------------------------------------------------------------ */
for (const [url, local] of urlToLocal) {
  const entry = remote[url];
  if (!entry) continue;
  entry.localisedTo = local;
  // The slot is now a local file: move it out of the remote bucket.
  delete entry.file;
  if (!map.local[local]) {
    map.local[local] = {
      file: `local/${path.basename(local)}`,
      alt: entry.alt || '',
      target: local.replace(/^\/images\//, ''),
      usedIn: entry.usedIn || [],
    };
  }
}
for (const url of Object.keys(remote)) delete remote[url];

if (!DRY) fs.writeFileSync(MAP_FILE, JSON.stringify(map, null, 2) + '\n');

console.log(DRY ? '[dry run]' : '[applied]');
console.log(`  localised files   : ${report.localised.length}`);
console.log(`  already present   : ${report.skipped.length}`);
console.log(`  failed            : ${report.failed.length}`);
console.log(`  references rewritten: ${refsRewritten} in ${filesChanged} file(s)`);
if (report.failed.length) {
  console.log('\nFailed:');
  for (const f of report.failed.slice(0, 20)) {
    console.log(`  ${f.local}  (${f.reason})`);
  }
}
