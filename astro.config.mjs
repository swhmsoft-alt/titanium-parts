// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import imageDimensions from './scripts/media/image-dimensions.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Site origin. Keep in sync with `src/data/site.ts` — the site config is
 * the canonical source, this value is what Astro needs at config time.
 */
const SITE_URL = 'https://titanium-parts.com';

/**
 * Last-modified timestamp per route, taken from the source file that
 * generates it.
 *
 * A fixed `new Date()` would mark every URL as changed on every build,
 * which tells crawlers the whole site is new and wastes crawl budget.
 */
const SRC_DIR = path.join(__dirname, 'src', 'pages');

function collectPageFiles(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) collectPageFiles(full, out);
    else if (entry.name.endsWith('.astro')) out.push(full);
  }
  return out;
}

/** Map a page source file to the route it produces. */
function routeFor(file) {
  const rel = path.relative(SRC_DIR, file).replace(/\\/g, '/');
  const base = rel.replace(/\.astro$/, '');
  if (base === 'index') return '/';
  if (base.endsWith('/index')) return '/' + base.slice(0, -'index'.length);
  return '/' + base + '/';
}

const pageLastmod = {};
for (const file of collectPageFiles(SRC_DIR)) {
  pageLastmod[routeFor(file)] = fs.statSync(file).mtime;
}

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    imageDimensions({ root: __dirname }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      serialize(item) {
        const stamp = pageLastmod[item.url.replace(SITE_URL, '')] ?? item.lastmod;
        return { ...item, lastmod: stamp };
      },
    }),
  ],
  vite: {
    ssr: { noExternal: ['astro/*'] },
    resolve: {
      alias: {
        '@data': path.resolve(__dirname, 'src/data'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@layouts': path.resolve(__dirname, 'src/layouts'),
      },
    },
  },
});
