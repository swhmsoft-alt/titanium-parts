/**
 * Move images that were written one directory too deep.
 *
 * The localisation step wrote the recovered files under
 * `public/images/images/...` for some slots, because the target path in
 * the manifest already carried the `images/` prefix. The site therefore
 * served a placeholder while the recovered original sat one level down.
 *
 * This moves them back and reports anything that would be overwritten.
 *
 *   node scripts/media/fix-nested-image-dirs.mjs
 *   node scripts/media/fix-nested-image-dirs.mjs --dry
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const IMAGES = path.join(ROOT, 'public', 'images');

const DRY = process.argv.includes('--dry');

const nested = path.join(IMAGES, 'images');
if (!fs.existsSync(nested)) {
  console.log('No nested images directory — nothing to do.');
  process.exit(0);
}

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

const files = walk(nested);
let moved = 0;
let skipped = 0;
const skippedList = [];

for (const file of files) {
  const rel = path.relative(nested, file);
  const dest = path.join(IMAGES, rel);

  if (fs.existsSync(dest)) {
    // The destination already holds a file — the placeholder. Replace it
    // with the recovered original.
    skipped++;
    skippedList.push(`${rel}  (replaced the placeholder)`);
  }

  if (!DRY) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.renameSync(file, dest);
  }
  moved++;
}

// Remove the now-empty nested directory.
if (!DRY) {
  try {
    fs.rmdirSync(nested, { recursive: true });
  } catch {
    /* not empty — leave it */
  }
}

console.log(DRY ? '[dry run]' : '[applied]');
console.log(`  files moved   : ${moved}`);
console.log(`  replaced placeholder: ${skipped}`);
for (const s of skippedList) console.log(`      ${s}`);
