/**
 * Point the industries listing at the shared industry data source.
 *
 * The listing previously carried its own hard-coded copy of the sector
 * list, with slugs that did not match the sector pages. This replaces
 * that with `src/data/industries-data.ts` and links each card to its
 * detail page.
 *
 *   node scripts/media/apply-industries-listing.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const FILE = path.join(ROOT, 'src', 'pages', 'industries', 'index.astro');

const source = fs.readFileSync(FILE, 'utf8');
let text = source;

// 1. Drop the inline industryData array.
const arrStart = text.indexOf('const industryData = [');
if (arrStart !== -1) {
  const arrEnd = text.indexOf('];', arrStart);
  if (arrEnd === -1) {
    console.error('! could not find the end of the inline array');
    process.exit(1);
  }
  text = text.slice(0, arrStart) + text.slice(arrEnd + 3);
}

// 2. Add the Icon import if the card markup needs it.
if (!text.includes("import Icon from '../../components/Icon.astro'")) {
  const iconImport = "import Icon from '../../components/Icon.astro';\n";
  const anchor = "import { industries } from '../../data/industries-data';\n";
  const at = text.indexOf(anchor) + anchor.length;
  text = text.slice(0, at) + iconImport + text.slice(at);
}

// 3. Replace the card markup so it reads from the shared data and links
//    to the sector detail page.
const cardOld = /\{industryData\.map\(\(ind\) => \(\s*<div class="ind-card">[\s\S]*?<\/div>\s*\)\)\}/;
const cardNew = `{industries.map((ind) => (
          <a href={\`/industries/\${ind.slug}/\`} class="ind-card ind-card-link">
            <div class="ind-image"><img src={ind.image} alt={ind.title} loading="lazy" /></div>
            <div class="ind-body">
              <h3>{ind.title}</h3>
              <p>{ind.summary}</p>
              <ul class="ind-list">
                <li>Application-specific engineering</li>
                <li>Material / coating selection</li>
                <li>Drawing-based quotation</li>
                <li>Order-specific documentation</li>
              </ul>
              <span class="ind-link">View Industry <Icon name="arrow-right" size={14} /></span>
            </div>
          </a>
        ))}`;

if (!cardOld.test(text)) {
  console.error('! could not locate the industry card markup');
  process.exit(1);
}
text = text.replace(cardOld, cardNew);

// 4. Make the card a link visually.
if (!text.includes('.ind-card-link')) {
  const styleAnchor = '\n  .ind-card-link { display: block; text-decoration: none; color: inherit; transition: all 0.25s; }\n  .ind-card-link:hover { transform: translateY(-4px); box-shadow: 0 12px 24px -8px rgba(15, 23, 42, 0.15); border-color: var(--color-primary); }\n  .ind-link { display: inline-flex; align-items: center; gap: 0.375rem; margin-top: 0.75rem; color: var(--color-primary); font-weight: 600; font-size: 0.875rem; }\n';
  const styleAt = text.lastIndexOf('</style>');
  text = text.slice(0, styleAt) + styleAnchor + text.slice(styleAt);
}

fs.writeFileSync(FILE, text);
console.log('Industries listing now uses the shared data source');
