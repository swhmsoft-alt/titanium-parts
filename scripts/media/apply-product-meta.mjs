/**
 * Rewrite the product pages so each one uses its own metadata from
 * `src/data/product-meta.ts` and declares Product structured data.
 *
 * The previous pattern generated titles by truncating the hero copy
 * (`(hero.title || '').slice(0, 80)`), which produced cut-off and
 * duplicated titles. This script replaces that with explicit per-page
 * metadata and adds the `product` prop for the Product JSON-LD node.
 *
 *   node scripts/media/apply-product-meta.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const PAGES = path.join(ROOT, 'src', 'pages', 'titanium-products');

const files = fs
  .readdirSync(PAGES)
  .filter((f) => f.endsWith('.astro') && f !== 'index.astro');

let changed = 0;

for (const file of files) {
  const full = path.join(PAGES, file);
  const source = fs.readFileSync(full, 'utf8');
  let original = source;
  const slug = path.basename(file, '.astro');

  // 1. Add the metadata import after the last existing import.
  if (!original.includes("data/product-meta'")) {
    const importLine = "import { productMeta } from '../../data/product-meta';\n";
    // Work inside the frontmatter block only.
    const fmStart = original.indexOf('---');
    const fmEnd = original.indexOf('\n---', fmStart + 3);
    if (fmStart === -1 || fmEnd === -1) {
      console.warn(`! no frontmatter block in ${file} — skipped`);
      continue;
    }
    const frontmatter = original.slice(fmStart, fmEnd);
    const importMatch = frontmatter.match(/^import .*?;\r?\n/gm);
    if (!importMatch) {
      console.warn(`! no imports found in ${file} — skipped`);
      continue;
    }
    const last = importMatch[importMatch.length - 1];
    const at = fmStart + frontmatter.lastIndexOf(last) + last.length;
    original = original.slice(0, at) + importLine + original.slice(at);
  }

  // 2. Replace the BaseLayout opening tag with the explicit metadata.
  const layoutRe = /<BaseLayout\s+title=\{[^}]*\}\s+description=\{[^}]*\}\s*>/;
  if (layoutRe.test(original)) {
    original = original.replace(
      layoutRe,
      `<BaseLayout\n    title={meta.title}\n    description={meta.description}\n    product={{ name: M, description: meta.description, sku: meta.sku }}\n  >`
    );
  } else {
    // Pages that already use a static title string.
    const staticRe = /<BaseLayout\s+title="([^"]*)"\s+description="([^"]*)"\s*>/;
    if (staticRe.test(original)) {
      original = original.replace(
        staticRe,
        `<BaseLayout\n    title={meta.title}\n    description={meta.description}\n    product={{ name: M, description: meta.description, sku: meta.sku }}\n  >`
      );
    } else {
      console.warn(`! could not match BaseLayout in ${file} — skipped`);
      continue;
    }
  }

  // 3. Resolve the metadata object inside the frontmatter block.
  if (!original.includes('const meta =')) {
    const fmStart = original.indexOf('---');
    const fmEnd = original.indexOf('\n---', fmStart + 3);
    if (fmStart === -1 || fmEnd === -1) {
      console.warn(`! no frontmatter block in ${file} — skipped`);
      continue;
    }
    const at = fmEnd + 1;
    original =
      original.slice(0, at) +
      `\nconst meta = productMeta['${slug}'] ?? { title: M, description: M, sku: '${slug.toUpperCase()}' };\n` +
      original.slice(at);
  }

  if (original !== source) {
    fs.writeFileSync(full, original);
    changed++;
    console.log(`updated ${file}`);
  }
}

console.log(`\n${changed} product page(s) updated`);
