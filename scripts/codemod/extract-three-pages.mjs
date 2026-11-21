/**
 * One-off extraction: read the frontmatter of the three product pages that
 * still carry their own markup and dump their data objects as JSON so the
 * data can be moved into src/data/product-pages/ without hand-copying.
 */
import fs from 'node:fs';

const PAGES = ['titanium-baskets', 'titanium-plate', 'titanium-tubing'];
const KEYS = [
  'M', 'slug', 'hero', 'cta', 'orderBasis', 'grades', 'forms', 'processSteps',
  'mfgVideo', 'applications', 'evidence', 'controls', 'faq',
  'cuttingPrepList', 'cuttingPrepImg', 'cuttingPrepNote', 'specMapping',
  'engineeringInputs', 'boundaryLinks', 'boundaryHeading', 'boundaryLede',
];

for (const p of PAGES) {
  const src = fs.readFileSync(`src/pages/titanium-products/${p}.astro`, 'utf8');
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) throw new Error(`no frontmatter in ${p}`);
  const body = m[1]
    .split(/\r?\n/)
    .filter((l) => !/^\s*import\s/.test(l) && !/^\s*const\s+meta\s*=/.test(l))
    .join('\n');
  const picks = KEYS.map((k) => `${k}: typeof ${k} !== 'undefined' ? ${k} : undefined`).join(',');
  const data = new Function(`${body}\nreturn {${picks}};`)();
  fs.mkdirSync('tmp', { recursive: true });
  fs.writeFileSync(`tmp/raw-${p}.json`, JSON.stringify(data, null, 2));
  console.log(p, Object.keys(data).filter((k) => data[k] !== undefined).join(','));
}
