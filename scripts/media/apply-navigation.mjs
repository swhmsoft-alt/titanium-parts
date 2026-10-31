/**
 * Replace the header's inline navigation with the shared data source.
 *
 *   node scripts/media/apply-navigation.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const HEADER = path.join(ROOT, 'src', 'components', 'Header.astro');

const source = fs.readFileSync(HEADER, 'utf8');

// Replace everything between the imports and `const currentPath`.
const startMarker = '// Real navigation structure from titanium-parts.com';
const endMarker = 'const currentPath = Astro.url.pathname;';

const start = source.indexOf(startMarker);
const end = source.indexOf(endMarker);

if (start === -1 || end === -1) {
  console.error('! could not locate the inline navigation block');
  process.exit(1);
}

const replacement = `import { mainNav, filterAvailable } from '@data/navigation';
import routes from '@data/routes.json';

// Only surface menu entries whose target page exists in the build.
const navItems = filterAvailable(
  mainNav,
  new Set(routes as string[])
);

${endMarker}`;

const updated =
  source.slice(0, start) + replacement + source.slice(end + endMarker.length);

// Add the navigation import next to the other imports.
if (!updated.includes("from '@data/navigation'")) {
  const importLine = "import { mainNav, filterAvailable } from '@data/navigation';\n";
  const importMatch = updated.match(/^import .*?;\r?\n/gm);
  const last = importMatch[importMatch.length - 1];
  const at = updated.lastIndexOf(last) + last.length;
  updated = updated.slice(0, at) + importLine + updated.slice(at);
}

fs.writeFileSync(HEADER, updated);
console.log('Header navigation now reads from @data/navigation');
