/**
 * Astro integration that adds intrinsic width and height to every <img>
 * that is missing them.
 *
 * The site ships images from public/, so Astro's image pipeline cannot
 * measure them and the browser cannot reserve space before the image
 * loads — which shows up as layout shift (CLS).
 *
 * This plugin measures each referenced file with sharp and writes the
 * real dimensions into the generated markup. Because it runs on the
 * built HTML, it also covers images that are referenced through
 * variables and inline data arrays.
 *
 *   // astro.config.mjs
 *   import imageDimensions from './scripts/media/image-dimensions.mjs';
 *   integrations: [imageDimensions(), sitemap({ ... })]
 */

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

/** @param {{ root: string }} options */
export default function imageDimensions(options = {}) {
  const root = options.root || process.cwd();
  const publicDir = path.join(root, 'public');

  /** Cache of measured dimensions, keyed by public-relative path. */
  const cache = new Map();

  async function measure(publicPath) {
    if (cache.has(publicPath)) return cache.get(publicPath);

    const full = path.join(publicDir, publicPath.replace(/^\//, ''));
    if (!fs.existsSync(full)) {
      cache.set(publicPath, null);
      return null;
    }
    try {
      const meta = await sharp(full).metadata();
      const value = meta.width && meta.height ? { w: meta.width, h: meta.height } : null;
      cache.set(publicPath, value);
      return value;
    } catch {
      cache.set(publicPath, null);
      return null;
    }
  }

  return {
    name: 'image-dimensions',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const outDir = new URL(dir).pathname.replace(/^\/([A-Za-z]:)/, '$1');
        let patched = 0;
        let scanned = 0;

        const walk = (dirPath, out = []) => {
          for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
            const full = path.join(dirPath, entry.name);
            if (entry.isDirectory()) walk(full, out);
            else if (entry.name.endsWith('.html')) out.push(full);
          }
          return out;
        };

        for (const file of walk(outDir)) {
          const html = fs.readFileSync(file, 'utf8');
          const tags = [...html.matchAll(/<img\b[^>]*>/g)];
          if (!tags.length) continue;
          scanned += tags.length;

          let text = html;
          for (const tag of tags) {
            if (/\bwidth=/.test(tag[0]) && /\bheight=/.test(tag[0])) continue;

            const srcMatch = tag[0].match(/src=["']([^"']+)["']/);
            if (!srcMatch) continue;

            const src = srcMatch[1];
            if (/^https?:\/\//.test(src)) continue;
            if (!src.startsWith('/images/')) continue;

            const dims = await measure(src);
            if (!dims) continue;

            const patchedTag = tag[0]
              .replace(/\s+width=["'][^"']*["']/g, '')
              .replace(/\s+height=["'][^"']*["']/g, '')
              .replace(/<img\b/, `<img width="${dims.w}" height="${dims.h}"`);

            text = text.split(tag[0]).join(patchedTag);
            patched++;
          }

          if (text !== html) fs.writeFileSync(file, text);
        }

        logger.info(`image-dimensions: ${patched}/${scanned} <img> tags given explicit width and height`);
      },
    },
  };
}
