/**
 * Draft alt text for every image slot that does not have one yet.
 *
 * Alt text is an accessibility requirement and also the signal search
 * engines use to understand an image. Leaving 256 of 267 slots blank
 * wastes both.
 *
 * The draft is derived from the file name and the page the asset is used
 * on, so it describes what the photograph shows rather than repeating a
 * keyword. Review and refine before publishing — the operator can edit
 * any value in media-map.json and re-run this script; existing entries
 * are never overwritten.
 *
 *   node scripts/media/draft-alt-text.mjs
 *   node scripts/media/draft-alt-text.mjs --dry
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const MAP_FILE = path.join(__dirname, 'media-map.json');

const DRY = process.argv.includes('--dry');
const map = JSON.parse(fs.readFileSync(MAP_FILE, 'utf8'));

/** Turn a kebab-case file name into readable words. */
function words(name) {
  return name
    .replace(/\.[a-z0-9]+$/i, '')
    .replace(/hele[- ]?titanium/gi, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Map a folder to the subject the photo shows. */
function subjectFor(target) {
  const dir = target.includes('/') ? target.split('/')[0] : 'root';
  switch (dir) {
    case 'team':
      return 'team member';
    case 'quality':
      return 'quality inspection';
    case 'machining':
      return 'CNC machining';
    case 'service':
      return 'titanium fabrication';
    case 'applications':
      return 'electrode application';
    case 'industries':
      return 'industrial application';
    case 'scenarios':
      return 'industrial process';
    case 'products':
      return 'titanium product';
    case 'manufacturing':
      return 'titanium manufacturing';
    case 'titanium-anode':
      return 'titanium anode';
    case 'titanium-products':
      return 'titanium product';
    default:
      return 'titanium component';
  }
}

/**
 * Build a descriptive alt from the file name and the page it appears on.
 */
function draftAlt(entry) {
  const target = entry.target || '';
  const name = words(path.basename(target));

  if (target.startsWith('team/')) {
    return 'Titanium Parts team member';
  }

  // Video posters are described as stills, not as the video itself.
  if (/video|poster/i.test(name)) {
    return `${cleanTitle(name)} — production video still`;
  }

  // Process-step names describe an action rather than an object.
  if (
    /^(requirement review|material identity|processing interface|inspection documentation|marking packing|final dimension|precision processing|rolling|seamless welded|sizing fabrication|surface finishing|material route confirmation|inspection records|marking release)/i.test(
      name
    )
  ) {
    return `${cleanTitle(name)} at the Titanium Parts workshop`;
  }

  // Application scenes describe a duty, not a product.
  if (
    /^(aerospace|chemical|marine|medical|pharma|power|electroplating|electrowinning|electrochemical|electronics|energy|heat|plate heat|industrial|architectural|audio|pressure|bearing|buoyancy|valve|square|custom|have a non|speaker)/i.test(
      name
    )
  ) {
    return `${cleanTitle(name)} — titanium component in service`;
  }

  // Grade-specific product names keep the grade intact.
  const productish = /^(grade|titanium|clad|pickled|forged|welded|seamless|precision|rolled|expanded|woven|perforated|electro)/i.test(
    name
  );
  if (productish) {
    return `${cleanTitle(name)}`;
  }

  const subject = subjectFor(target);
  if (!name) return `${subject} supplied by Titanium Parts`;
  return `${cleanTitle(name)} — ${subject}`;
}

/**
 * Turn the readable words into a clean noun phrase: first letter
 * capitalised, no trailing punctuation, no dangling connector.
 */
function cleanTitle(text) {
  let t = text.trim();
  t = t.replace(/[-–—]+/g, ', ').replace(/\s*,\s*/g, ', ');
  t = t.replace(/\s+/g, ' ').trim();
  t = t.charAt(0).toUpperCase() + t.slice(1);
  t = t.replace(/[,;:]\s*$/, '');
  return t;
}

let drafted = 0;
let kept = 0;

for (const group of ['remote', 'local']) {
  for (const [key, entry] of Object.entries(map[group] || {})) {
    if (entry.alt && entry.alt.trim()) {
      kept++;
      continue;
    }
    const alt = draftAlt(entry);
    if (!alt) continue;
    entry.alt = alt;
    drafted++;
  }
}

if (!DRY) fs.writeFileSync(MAP_FILE, JSON.stringify(map, null, 2) + '\n');

console.log(DRY ? '[dry run]' : '[applied]');
console.log(`  alt drafted : ${drafted}`);
console.log(`  alt kept    : ${kept}`);

// Report a sample so the wording can be reviewed.
const samples = [];
for (const group of ['remote', 'local']) {
  for (const entry of Object.values(map[group] || {})) {
    if (entry.alt) samples.push(`${entry.target}  ->  ${entry.alt}`);
  }
}
console.log('\nSample:');
for (const s of samples.slice(0, 15)) console.log(`  ${s}`);
