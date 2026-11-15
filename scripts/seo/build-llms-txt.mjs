/**
 * Generate `llms.txt` — a plain-text map of the site for AI retrieval.
 *
 * The file follows the llms.txt convention: an H1 with the site name, a
 * blockquote with the one-line summary, and a section per product family
 * listing every page with its title and URL. It is written into the build
 * output so it can never drift from the routes that were actually built.
 *
 * Used as an Astro integration, so every build regenerates it:
 *
 *   // astro.config.mjs
 *   import { llmsTxt } from './scripts/seo/build-llms-txt.mjs';
 *   integrations: [llmsTxt()]
 *
 * It can also be run on its own against an existing build:
 *
 *   node scripts/seo/build-llms-txt.mjs [distDir]
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const SITE_URL = 'https://titanium-parts.com';

/**
 * Write llms.txt into the build output.
 *
 * @param {string} distDir absolute path of the build output directory
 * @returns {number} the number of pages listed
 */
function writeLlmsTxt(distDir) {
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

/** The page title declared in the built HTML. */
function titleOf(html) {
  const m = html.match(/<title>([^<]*)<\/title>/);
  return m ? m[1].replace(/\s*\|\s*Titanium Parts$/, '').trim() : '';
}

/** The meta description declared in the built HTML. */
function descriptionOf(html) {
  const m = html.match(/<meta name="description" content="([^"]*)"/);
  return m ? m[1].trim() : '';
}

/**
 * Sections of the file. A route that matches no section is still listed
 * under "Other Pages", so no built page is left unlisted.
 */
const SECTIONS = [
  {
    heading: 'MMO Titanium Anodes',
    match: (route) => route.startsWith('/titanium-anode/mmo-anode/'),
  },
  {
    heading: 'Titanium Anodes And Coatings',
    match: (route) => route.startsWith('/titanium-anode/'),
  },
  {
    heading: 'Cathodic Protection',
    match: (route) => route.startsWith('/cathodic-protection/'),
  },
  {
    heading: 'Titanium Products',
    match: (route) => route.startsWith('/titanium-products/'),
  },
  {
    heading: 'PEM Electrolyzer',
    match: (route) => route.startsWith('/pem-electrolyzer/'),
  },
];

const pages = walk(DIST)
  .filter((f) => f.endsWith('.html'))
  .map((file) => {
    const html = fs.readFileSync(file, 'utf8');
    return {
      route: routeOf(file),
      title: titleOf(html),
      description: descriptionOf(html),
    };
  })
  // The 404 page is not part of the site map.
  .filter((p) => p.route !== '/404.html')
  .sort((a, b) => a.route.localeCompare(b.route));

const buckets = new Map(SECTIONS.map((s) => [s.heading, []]));
const other = [];

for (const page of pages) {
  const section = SECTIONS.find((s) => s.match(page.route));
  if (section) buckets.get(section.heading).push(page);
  else other.push(page);
}

const lines = [
  '# Titanium Parts',
  '',
  '> Factory-direct manufacturer and engineering supplier of titanium products, titanium anodes, and PEM electrolyzer systems for global OEMs, EPC contractors, and system integrators.',
  '',
  'All pages below are listed with their title and description. Contact: sales@titanium-parts.com',
  '',
];

for (const section of SECTIONS) {
  const list = buckets.get(section.heading);
  if (!list.length) continue;
  lines.push(`## ${section.heading}`, '');
  for (const page of list) {
    lines.push(`- [${page.title || page.route}](${SITE_URL}${page.route}): ${page.description}`);
  }
  lines.push('');
}

if (other.length) {
  lines.push('## Other Pages', '');
  for (const page of other) {
    lines.push(`- [${page.title || page.route}](${SITE_URL}${page.route}): ${page.description}`);
  }
  lines.push('');
}

const out = path.join(DIST, 'llms.txt');
fs.writeFileSync(out, lines.join('\n'), 'utf8');
console.log(`Wrote ${path.relative(ROOT, out)} (${pages.length} pages)`);
return pages.length;
}

/**
 * Astro integration that regenerates llms.txt after every build.
 */
export function llmsTxt() {
  return {
    name: 'llms-txt',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const outDir = new URL(dir).pathname.replace(/^\/([A-Za-z]:)/, '$1');
        const count = writeLlmsTxt(outDir);
        logger.info(`llms-txt: listed ${count} pages`);
      },
    },
  };
}

// Run standalone when invoked directly, not when imported by the config.
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const distDir = path.resolve(process.argv[2] || path.join(ROOT, 'dist'));
  if (!fs.existsSync(distDir)) {
    console.error('dist/ not found — run `npm run build` first.');
    process.exit(1);
  }
  writeLlmsTxt(distDir);
}
