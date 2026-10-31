/**
 * Apply the media replacement work order.
 *
 * Reads `scripts/media/media-map.json`, then for every slot that has a
 * matching incoming asset:
 *   1. copies the asset into assets-incoming/<file>
 *   2. normalises it with sharp (WebP, size cap, metadata stripped)
 *   3. writes the result to public/images/<target>
 *   4. rewrites every reference in src/ to point at the new local path
 *   5. rewrites the alt text when the map provides one
 *
 * Slots whose incoming asset is missing are reported and left untouched,
 * so the script is safe to run repeatedly while photos arrive in batches.
 *
 *   node scripts/media/replace-media.mjs           # apply
 *   node scripts/media/replace-media.mjs --dry     # report only
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const SRC = path.join(ROOT, 'src');
const PUBLIC_IMAGES = path.join(ROOT, 'public', 'images');
const INCOMING = path.join(ROOT, 'assets-incoming');
const MAP_FILE = path.join(__dirname, 'media-map.json');
const REPORT_FILE = path.join(__dirname, 'media-report.json');

const DRY = process.argv.includes('--dry');
const MAX_EDGE = 1600;
const QUALITY = 82;

/** Video assets are copied verbatim, never re-encoded. */
function isVideo(file) {
  return /\.(mp4|mov|webm)$/i.test(file);
}

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(astro|ts|json)$/.test(entry.name)) out.push(full);
  }
  return out;
}

/** Escape a string for safe use inside a RegExp. */
function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const map = JSON.parse(fs.readFileSync(MAP_FILE, 'utf8'));

/** Resolve the incoming asset for a slot, if it has been delivered. */
function incomingFor(entry) {
  if (!entry.file) return null;
  const p = path.join(INCOMING, entry.file);
  return fs.existsSync(p) ? p : null;
}

const report = {
  generatedAt: new Date().toISOString(),
  applied: [],
  missing: [],
  skipped: [],
  filesTouched: [],
};

const sourceFiles = walk(SRC);
let touched = new Set();

/** Build the replacement table shared by every source file. */
const repls = [];

for (const [key, entry] of Object.entries(map.remote || {})) {
  const incoming = incomingFor(entry);
  if (!incoming) {
    report.missing.push({ slot: key, expected: entry.file });
    continue;
  }
  const targetRel = entry.target || path.basename(entry.file);
  repls.push({
    from: key,
    to: `/images/${targetRel.replace(/\\/g, '/')}`,
    alt: entry.alt || '',
    altOrig: '',
    incoming,
    target: targetRel.replace(/\\/g, '/'),
    isVideo: isVideo(entry.file),
  });
}

for (const [key, entry] of Object.entries(map.local || {})) {
  const incoming = incomingFor(entry);
  if (!incoming) {
    report.missing.push({ slot: key, expected: entry.file });
    continue;
  }
  const targetRel = entry.target || key.replace(/^\/images\//, '');
  repls.push({
    from: key,
    to: `/images/${targetRel.replace(/\\/g, '/')}`,
    alt: entry.alt || '',
    altOrig: '',
    incoming,
    target: targetRel.replace(/\\/g, '/'),
    isVideo: isVideo(entry.file),
  });
}

for (const file of sourceFiles) {
  const original = fs.readFileSync(file, 'utf8');
  let text = original;

  for (const rep of repls) {
    if (!text.includes(rep.from)) continue;

    // Replace every occurrence of this reference.
    const parts = text.split(rep.from);
    text = parts.join(rep.to);

    // Then fix the alt attributes that now surround the new paths.
    if (rep.alt) {
      const re = new RegExp(
        `(<img[^>]*?src=["'])${escapeRe(rep.to)}(["'][^>]*?)alt=["'][^"']*(["'])`,
        'g'
      );
      text = text.replace(re, (m, a, b, c) => `${a}${rep.to}${b}alt="${rep.alt}"${c}`);
    }
  }

  if (text !== original) {
    if (!DRY) fs.writeFileSync(file, text);
    touched.add(path.relative(ROOT, file).replace(/\\/g, '/'));
  }
}

/** Copy and normalise every delivered asset into public/images. */
for (const rep of repls) {
  const dest = path.join(PUBLIC_IMAGES, rep.target);
  if (!DRY) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    if (rep.isVideo) {
      fs.copyFileSync(rep.incoming, dest);
    } else {
      await sharp(rep.incoming)
        .rotate()
        .resize({
          width: MAX_EDGE,
          height: MAX_EDGE,
          fit: 'inside',
          withoutEnlargement: true,
        })
        .webp({ quality: QUALITY })
        .toFile(dest);
    }
  }
  report.applied.push({ from: rep.from, to: rep.to, target: rep.target });
}

report.filesTouched = [...touched].sort();
fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2) + '\n');

console.log(DRY ? '[dry run]' : '[applied]');
console.log(`  replaced slots : ${report.applied.length}`);
console.log(`  awaiting assets: ${report.missing.length}`);
console.log(`  files touched  : ${report.filesTouched.length}`);
console.log(`  report         : ${path.relative(ROOT, REPORT_FILE)}`);
