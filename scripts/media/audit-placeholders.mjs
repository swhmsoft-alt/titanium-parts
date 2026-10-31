/**
 * Classify the images under public/images as placeholder or real.
 *
 *   node scripts/media/audit-placeholders.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const IMAGES = path.join(ROOT, 'public', 'images');

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

const files = walk(IMAGES);
const placeholders = [];
const real = [];
const other = [];

for (const f of files) {
  const rel = path.relative(IMAGES, f).replace(/\\/g, '/');
  if (!/\.webp$/i.test(f)) {
    other.push(rel);
    continue;
  }
  try {
    const m = await sharp(f).metadata();
    if (m.width === 1200 && m.height === 800) placeholders.push(rel);
    else real.push(rel);
  } catch {
    other.push(rel);
  }
}

console.log(`placeholders : ${placeholders.length}`);
console.log(`real photos  : ${real.length}`);
console.log(`other formats: ${other.length}`);
console.log('');
console.log('--- non-webp ---');
other.forEach((f) => console.log('  ' + f));
console.log('');
console.log('--- real photos (kept from the original site) ---');
real.forEach((f) => console.log('  ' + f));
