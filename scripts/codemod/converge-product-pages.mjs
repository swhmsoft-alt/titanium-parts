/**
 * EX-E1c codemod.
 *
 * Converges the 12 standard titanium product pages onto
 * src/components/product/ProductPage.astro:
 *   - the per-page frontmatter data moves to src/data/product-pages/<slug>.ts
 *   - the shared page stylesheet moves to src/styles/titanium-product.css
 *   - each page becomes a thin shell that renders <ProductPage {...page} />
 *
 * The rendered markup and the visible copy stay unchanged.
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const ROOT = process.cwd();
const PAGE_DIR = path.join(ROOT, 'src/pages/titanium-products');
const DATA_DIR = path.join(ROOT, 'src/data/product-pages');

const STD = [
  'titanium-balls', 'titanium-bolts', 'titanium-clad-copper', 'titanium-coil',
  'titanium-diaphragm', 'titanium-fittings', 'titanium-flanges', 'titanium-foil-2',
  'titanium-forgings', 'titanium-mesh', 'titanium-rod-bar', 'titanium-wire',
];

const read = (p) => fs.readFileSync(p, 'utf8');
const write = (p, s) => { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, s); };

/** the pristine page source, so the codemod stays re-runnable */
const readOriginal = (slug) =>
  execFileSync('git', ['show', `HEAD:src/pages/titanium-products/${slug}.astro`], { encoding: 'utf8' });

function splitFM(src) {
  const end = src.indexOf('\n---', 4);
  return { fm: src.slice(src.indexOf('\n', 3) + 1, end), body: src.slice(end + 4) };
}

function evalConsts(fm) {
  const code = fm
    .split('\n')
    .filter((l) => !/^\s*import\s/.test(l) && !/^\s*const\s+meta\s*=/.test(l))
    .join('\n');
  const names = [...fm.matchAll(/^const\s+(\w+)\s*=/gm)].map((m) => m[1]).filter((n) => n !== 'meta');
  return new Function(`${code}\nreturn { ${names.join(', ')} };`)();
}

const wireSrc = readOriginal('titanium-wire');
const styleStart = wireSrc.indexOf('<style>');
const styleEnd = wireSrc.lastIndexOf('</style>');
const css = wireSrc.slice(styleStart + '<style>'.length, styleEnd).replace(/^\n/, '');

// The shared stylesheet lives in the component's own scoped <style> block, so it
// keeps exactly the same scope behaviour the per-page <style> blocks had.
const COMPONENT = path.join(ROOT, 'src/components/product/ProductPage.astro');
const componentSrc = read(COMPONENT);
if (componentSrc.includes('/*__STYLES__*/')) {
  write(COMPONENT, componentSrc.replace('/*__STYLES__*/', css.trimEnd()));
} else if (!componentSrc.includes('.tp-hero {')) {
  throw new Error('component has no shared stylesheet');
}

for (const slug of STD) {
  const file = path.join(PAGE_DIR, `${slug}.astro`);
  const { fm, body } = splitFM(readOriginal(slug));
  const d = evalConsts(fm);

  const primary = body.match(/<a href="([^"]+)" class="tp-btn-primary">([^<]*)<\/a>/);
  const secondary = body.match(/<a href="([^"]+)" class="tp-btn-secondary">([^<]*)<\/a>/);
  if (!primary || !secondary) throw new Error(`CTA not found in ${slug}`);

  // the CTA labels keep their original markup byte for byte

  const sku = (fm.match(/sku:\s*'([^']+)'/) || [])[1] ?? slug.toUpperCase();

  const raw = {
    M: d.M,
    slug: d.slug ?? slug,
    sku,
    hero: d.hero,
    cta: {
      primary: { href: primary[1], label: primary[2] },
      secondary: { href: secondary[1], label: secondary[2] },
    },
    orderBasis: d.orderBasis,
    grades: d.grades,
    forms: d.forms,
    processSteps: d.processSteps,
    mfgVideo: d.mfgVideo,
    applications: d.applications,
    evidence: d.evidence,
    controls: d.controls,
    faq: d.faq,
  };

  write(
    path.join(DATA_DIR, `${slug}.ts`),
    `// Per-product data for /titanium-products/${slug}/.\n` +
    `// Moved here by scripts/tmp-gen-product-pages.mjs; the visible copy is unchanged.\n` +
    `import { buildStandardPage } from './standard';\n\n` +
    `const raw = ${JSON.stringify(raw, null, 2)};\n\n` +
    `export const page = buildStandardPage(raw);\n`
  );

  write(
    file,
    `---\nimport ProductPage from '../../components/product/ProductPage.astro';\nimport { page } from '../../data/product-pages/${slug}';\n---\n\n<ProductPage {...page} />\n`
  );
}

console.log(`converged ${STD.length} standard product pages`);
