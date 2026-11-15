/**
 * Scan the source tree for image slots that still point at third-party
 * assets, and emit `scripts/media/media-map.json` as a work order.
 *
 * Two kinds of slots are detected:
 *   remote — absolute URLs to the source site's WordPress media library
 *   local  — paths under /images/ that resolve to files copied from the
 *            source site
 *
 * The generated map is the single human-maintained file that drives
 * `replace-media.mjs`. Re-running this script refreshes the skeleton
 * without discarding entries already filled in by hand.
 *
 *   node scripts/media/scan-slots.mjs          # write media-map.json
 *   node scripts/media/scan-slots.mjs --dry    # report only
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const SRC = path.join(ROOT, 'src');
const MAP_FILE = path.join(__dirname, 'media-map.json');

const REMOTE_RE = /https?:\/\/[a-z0-9.-]+\/[^\s"'`<>)]*?\.(?:webp|png|jpe?g|mp4)/gi;
const LOCAL_RE = /\/images\/[A-Za-z0-9\-_/.]+/g;

/** Brand assets and third-party logos are handled separately, not batched. */
const BRAND_SKIP = new Set([
  '/images/logos/titanium-parts-logo.svg',
  '/images/logos/titanium-parts-logo-white.svg',
  '/images/logos/electra.png',
  '/images/logos/gonvarri.png',
  '/images/logos/h2o.png',
  '/images/logos/mainfraim.png',
  '/images/logos/pss.png',
  '/images/logos/sespi.png',
  '/images/logos/ventil-aqua.png',
  '/images/logos/waterair.png',
]);

/** Map a source file to the public/images sub-folder its assets belong to. */
function targetDirFor(relFile) {
  if (relFile.startsWith('pages/titanium-products/')) return 'titanium-products';
  if (relFile.startsWith('pages/titanium-anode/')) return 'titanium-anode';
  if (relFile.startsWith('pages/applications/')) return 'applications';
  if (relFile.startsWith('pages/industries/')) return 'industries';
  if (relFile.startsWith('pages/titanium-service/')) return 'service';
  if (relFile.startsWith('pages/quality/')) return 'quality';
  if (relFile.startsWith('pages/contact/')) return 'contact';
  if (relFile.startsWith('pages/manufacturing-capabilities/')) return 'machining';
  return '';
}

function slugify(name) {
  return name
    .replace(/\.[a-z0-9]+$/i, '')
    .replace(/hele[- ]?titanium/gi, '')
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(astro|ts|json)$/.test(entry.name)) out.push(full);
  }
  return out;
}

/** Collect the alt attribute that sits nearest to an image reference. */
function altNear(text, index) {
  const start = Math.max(0, index - 400);
  const window = text.slice(start, index + 400);
  const alts = [...window.matchAll(/alt=["']([^"']*)["']/g)];
  if (!alts.length) return '';
  let best = alts[0];
  let bestDist = Infinity;
  for (const a of alts) {
    const d = Math.abs(a.index - (index - start));
    if (d < bestDist) {
      bestDist = d;
      best = a;
    }
  }
  return best[1].trim();
}

const files = walk(SRC);
const remote = new Map();
const local = new Map();

for (const file of files) {
  const rel = path.relative(SRC, file).replace(/\\/g, '/');
  const text = fs.readFileSync(file, 'utf8');
  const dir = targetDirFor(rel);

  for (const m of text.matchAll(REMOTE_RE)) {
    const url = m[0];
    if (!remote.has(url)) {
      remote.set(url, {
        file: `products/${slugify(path.basename(url))}.webp`,
        alt: altNear(text, m.index),
        target: `${dir ? dir + '/' : ''}${slugify(path.basename(url))}.webp`,
        usedIn: [],
      });
    }
    remote.get(url).usedIn.push(rel);
  }

  for (const m of text.matchAll(LOCAL_RE)) {
    const p = m[0];
    if (BRAND_SKIP.has(p)) continue;
    if (!local.has(p)) {
      local.set(p, {
        file: `products/${slugify(path.basename(p))}.webp`,
        alt: altNear(text, m.index),
        target: p.replace(/^\/images\//, ''),
        usedIn: [],
      });
    }
    local.get(p).usedIn.push(rel);
  }
}

/** Merge in any entries the operator has already filled in. */
let existing = { remote: {}, local: {} };
if (fs.existsSync(MAP_FILE)) {
  try {
    existing = JSON.parse(fs.readFileSync(MAP_FILE, 'utf8'));
  } catch {
    console.warn('! media-map.json is not valid JSON; regenerating from scratch.');
  }
}

function merge(fresh, prev) {
  const out = {};
  for (const [key, val] of fresh) {
    const old = prev?.[key];
    out[key] = {
      ...val,
      // Preserve operator-supplied values.
      file: old?.file ?? val.file,
      alt: old?.alt !== undefined && old.alt !== '' ? old.alt : val.alt,
      target: old?.target ?? val.target,
    };
  }
  return out;
}

const map = {
  _comment:
    'Media replacement work order. For each slot: set `file` to the incoming ' +
    'asset path relative to assets-incoming/, set `alt` to original copy, and ' +
    'keep `target` as the destination path under public/images/.',
  remote: merge(remote, existing.remote),
  local: merge(local, existing.local),
};

const total = Object.keys(map.remote).length + Object.keys(map.local).length;

if (process.argv.includes('--dry')) {
  console.log(`remote slots: ${Object.keys(map.remote).length}`);
  console.log(`local  slots: ${Object.keys(map.local).length}`);
  console.log(`total        : ${total}`);
} else {
  fs.writeFileSync(MAP_FILE, JSON.stringify(map, null, 2) + '\n');
  console.log(`Wrote ${path.relative(ROOT, MAP_FILE)}`);
  console.log(`remote slots: ${Object.keys(map.remote).length}`);
  console.log(`local  slots: ${Object.keys(map.local).length}`);
  console.log(`total        : ${total}`);
}
