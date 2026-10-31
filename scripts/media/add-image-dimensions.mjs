/**
 * Add intrinsic width and height to every <img> that is missing them.
 *
 * The site ships its images from public/, so Astro's image pipeline cannot
 * measure them. Without explicit dimensions the browser cannot reserve
 * space before the image loads, which shows up as layout shift (CLS).
 *
 * The dimensions are read from the actual file with sharp and written into
 * the markup, so they always match the delivered asset.
 *
 *   node scripts/media/add-image-dimensions.mjs
 *   node scripts/media/add-image-dimensions.mjs --dry
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const SRC = path.join(ROOT, 'src');
const PUBLIC = path.join(ROOT, 'public');

const DRY = process.argv.includes('--dry');

/** Cache of measured dimensions, keyed by public-relative path. */
const dimensions = new Map();

async function measure(publicPath) {
  if (dimensions.has(publicPath)) return dimensions.get(publicPath);
  const full = path.join(PUBLIC, publicPath.replace(/^\//, ''));
  if (!fs.existsSync(full)) {
    dimensions.set(publicPath, null);
    return null;
  }
  try {
    const meta = await sharp(full).metadata();
    const value = meta.width && meta.height ? { w: meta.width, h: meta.height } : null;
    dimensions.set(publicPath, value);
    return value;
  } catch {
    dimensions.set(publicPath, null);
    return null;
  }
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

const files = walk(SRC).filter((f) => f.endsWith('.astro'));
let totalImages = 0;
let patchedImages = 0;
const unresolved = new Set();

for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  const tags = [...source.matchAll(/<img\b[^>]*>/g)];
  if (!tags.length) continue;

  let text = source;
  for (const tag of tags) {
    totalImages++;
    if (/\bwidth=/.test(tag[0]) && /\bheight=/.test(tag[0])) continue;

    const srcMatch = tag[0].match(/src=["']([^"']+)["']/);
    if (!srcMatch) continue;

    const src = srcMatch[1];
    // Skip remote references — they are replaced before publication.
    if (/^https?:\/\//.test(src)) continue;
    if (!src.startsWith('/images/')) continue;

    const dims = await measure(src);
    if (!dims) {
      unresolved.add(src);
      continue;
    }

    const patched = tag[0]
      .replace(/\s+width=["'][^"']*["']/g, '')
      .replace(/\s+height=["'][^"']*["']/g, '')
      .replace(/<img\b/, `<img width="${dims.w}" height="${dims.h}"`);

    text = text.split(tag[0]).join(patched);
    patchedImages++;
  }

  if (text !== source && !DRY) fs.writeFileSync(file, text);
}

console.log(DRY ? '[dry run]' : '[applied]');
console.log(`  images found     : ${totalImages}`);
console.log(`  dimensions added : ${patchedImages}`);
if (unresolved.size) {
  console.log(`  unresolved       : ${unresolved.size}`);
  for (const u of [...unresolved].slice(0, 10)) console.log(`      ${u}`);
}
