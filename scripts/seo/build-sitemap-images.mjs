/**
 * Add `image:image` entries to the generated sitemap.
 *
 * Google reads image annotations from the sitemap to index the images that
 * belong to a page. The image for a page is its own main image, so it is
 * read back from the built HTML rather than maintained in a second table
 * that could drift away from the page content.
 *
 * Used as an Astro integration, so every build regenerates it:
 *
 *   // astro.config.mjs
 *   import { sitemapImages } from './scripts/seo/build-sitemap-images.mjs';
 *   integrations: [sitemapImages()]
 *
 * It can also be run on its own against an existing build:
 *
 *   node scripts/seo/build-sitemap-images.mjs [distDir]
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const SITE_URL = 'https://titanium-parts.com';

/**
 * Annotate the generated sitemap with the main image of each page.
 *
 * @param {string} distDir absolute path of the build output directory
 * @returns {{ annotated: number, total: number }}
 */
function annotateSitemap(distDir) {
const DIST = distDir;

if (!fs.existsSync(DIST)) {
  console.error('dist/ not found — run `npm run build` first.');
  process.exit(1);
}

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

/** Route of a built HTML file, e.g. "contact/index.html" -> "/contact/". */
function routeOf(file) {
  const rel = path.relative(DIST, file).replace(/\\/g, '/');
  return '/' + rel.replace(/index\.html$/, '');
}

/**
 * The main image of a page: the first image inside the content area.
 *
 * The layout renders the page image inside `main`, so the search stays
 * inside that block and skips icons or logos declared in the header.
 */
function mainImageOf(html) {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
  const scope = main ? main[1] : html;
  const img = scope.match(/<img\b[^>]*\bsrc="(\/images\/[^"]+)"/i);
  if (!img) return null;
  const alt = scope.match(/<img\b[^>]*\balt="([^"]*)"/i);
  return { src: img[1], alt: alt ? alt[1] : '' };
}

/** Escape the characters that are not allowed in XML text nodes. */
function xmlEscape(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Route -> main image, taken from the pages that were actually built.
const images = new Map();
for (const file of walk(DIST).filter((f) => f.endsWith('.html'))) {
  const image = mainImageOf(fs.readFileSync(file, 'utf8'));
  if (image) images.set(routeOf(file), image);
}

// The sitemap is split into numbered parts when it grows past 50k URLs.
const sitemaps = walk(DIST).filter((f) => /^sitemap-\d+\.xml$/.test(path.basename(f)));
if (!sitemaps.length) {
  console.error('no sitemap-<n>.xml found in dist/ — run `npm run build` first.');
  process.exit(1);
}

let annotated = 0;
let total = 0;

for (const file of sitemaps) {
  let xml = fs.readFileSync(file, 'utf8');

  xml = xml.replace(/<url>([\s\S]*?)<\/url>/g, (block, inner) => {
    const loc = inner.match(/<loc>([^<]+)<\/loc>/);
    if (!loc) return block;
    total++;

    const route = new URL(loc[1]).pathname;
    const image = images.get(route);
    if (!image) return block;

    const annotation = `<image:image><image:loc>${SITE_URL}${xmlEscape(image.src)}</image:loc>` +
      (image.alt ? `<image:title>${xmlEscape(image.alt)}</image:title>` : '') +
      '</image:image>';

    annotated++;
    // The image annotation has to precede the closing tag of the url entry.
    return `<url>${inner}${annotation}</url>`;
  });

  fs.writeFileSync(file, xml, 'utf8');
}

console.log(`Annotated ${annotated}/${total} sitemap URLs with image:image`);
return { annotated, total };
}

/**
 * Astro integration that annotates the sitemap after every build.
 */
export function sitemapImages() {
  return {
    name: 'sitemap-images',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const outDir = new URL(dir).pathname.replace(/^\/([A-Za-z]:)/, '$1');
        const { annotated, total } = annotateSitemap(outDir);
        logger.info(`sitemap-images: annotated ${annotated}/${total} URLs`);
      },
    },
  };
}

// Run standalone when invoked directly, not when imported by the config.
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const distDir = path.resolve(process.argv[2] || path.join(ROOT, 'dist'));
  annotateSitemap(distDir);
}
