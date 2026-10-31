/**
 * Apply the shared page metadata to the non-product routes.
 *
 * Each page keeps its own template but pulls title and description from
 * `src/data/page-meta.ts`, so lengths can be reviewed in one place.
 *
 *   node scripts/media/apply-page-meta.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');

/** file path (relative to src/pages) -> key in page-meta.ts */
const targets = [
  ['404.astro', 'notFound'],
  ['index.astro', 'home'],
  ['applications/index.astro', 'applications'],
  ['cathodic-protection/index.astro', 'cathodicProtection'],
  ['hydrogen-generators/index.astro', 'hydrogenGenerators'],
  ['manufacturing-capabilities/index.astro', 'manufacturingCapabilities'],
  ['pem-electrolyzer/index.astro', 'pemElectrolyzer'],
  ['salt-chlorinator-for-pool/index.astro', 'saltChlorinator'],
  ['terms/index.astro', 'terms'],
  ['titanium-anode/index.astro', 'titaniumAnode'],
  ['titanium-machining-parts.astro', 'titaniumMachiningParts'],
  ['titanium-products/index.astro', 'titaniumProducts'],
  ['titanium-service/index.astro', 'titaniumService'],
];

let changed = 0;

for (const [rel, key] of targets) {
  const full = path.join(ROOT, 'src', 'pages', rel);
  if (!fs.existsSync(full)) {
    console.warn(`! missing ${rel}`);
    continue;
  }
  const source = fs.readFileSync(full, 'utf8');
  let text = source;

  // 1. Import the shared metadata (inside the frontmatter block).
  if (!text.includes("data/page-meta'")) {
    const depth = rel.split('/').length - 1;
    const prefix = depth === 0 ? '../' : '../../';
    const importLine = `import { pageMeta } from '${prefix}data/page-meta';\n`;
    // The last import statement inside the frontmatter block.
    const fmStart = text.indexOf('---');
    const fmEnd = text.indexOf('\n---', fmStart + 3);
    if (fmStart === -1 || fmEnd === -1) {
      console.warn(`! no frontmatter block in ${rel}`);
      continue;
    }
    const frontmatter = text.slice(fmStart, fmEnd);
    const importMatch = frontmatter.match(/^import .*?;\r?\n/gm);
    if (!importMatch) {
      console.warn(`! no imports in ${rel}`);
      continue;
    }
    const last = importMatch[importMatch.length - 1];
    const at = fmStart + frontmatter.lastIndexOf(last) + last.length;
    text = text.slice(0, at) + importLine + text.slice(at);
  }

  // 2. Replace the BaseLayout opening tag.
  const replaced = text.replace(
    /<BaseLayout\s+title=(?:"[^"]*"|\{[^}]*\})\s+description=(?:"[^"]*"|\{[^}]*\})([^>]*)>/,
    (_m, rest) =>
      `<BaseLayout\n    title={meta.title}\n    description={meta.description}${rest ? ' ' + rest.trim() : ''}\n  >`
  );
  if (replaced === text) {
    console.warn(`! could not match BaseLayout in ${rel}`);
    continue;
  }
  text = replaced;

  // 3. Resolve the metadata object inside the frontmatter block.
  if (!text.includes('const meta = pageMeta')) {
    // Find the end of the frontmatter block (the second `---` line).
    const fmEnd = text.indexOf('\n---', text.indexOf('---') + 3);
    if (fmEnd === -1) {
      console.warn(`! no frontmatter block in ${rel}`);
      continue;
    }
    const insertAt = fmEnd + 1;
    text =
      text.slice(0, insertAt) +
      `\nconst meta = pageMeta['${key}'];\n` +
      text.slice(insertAt);
  }

  if (text !== source) {
    fs.writeFileSync(full, text);
    changed++;
    console.log(`updated ${rel}`);
  }
}

console.log(`\n${changed} page(s) updated`);
