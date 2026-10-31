// Verify that the navigation links in Header.astro are now correctly pointing to real pages
import { readFile, readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';

const DIST = 'c:/Users/User/Desktop/titanium-cnc/dist';

// Expected href values after the fix (must exist in dist/)
const expected = [
  '/titanium-products/titanium-plate/',
  '/titanium-products/titanium-rod-bar/',
  '/titanium-products/titanium-tubing/',
  '/titanium-products/titanium-wire/',
  '/titanium-products/titanium-mesh/',
  '/titanium-products/titanium-fittings/',
  '/titanium-products/titanium-flanges/',
  '/titanium-products/titanium-bolts/',
  '/titanium-machining-parts/',
  '/manufacturing-capabilities/',
  '/knowledge-center/',
];

// Old (broken) href values that must NOT appear in the header navigation
const broken = [
  '/titanium-plate/',
  '/titanium-rod-bar/',
  '/titanium-tube-pipe/',
  '/titanium-wire/',
  '/titanium-mesh/',
  '/titanium-fittings/',
  '/titanium-flange/',
  '/titanium-fasteners/',
  '/titanium-machined-parts/',
  '/titanium-parts/',
];

// Check that each expected href corresponds to an existing dist file/dir
console.log('=== 1) Verifying expected URLs exist on disk ===');
for (const href of expected) {
  const filePath = join(DIST, href, 'index.html');
  try {
    const s = await stat(filePath);
    console.log(`  OK   ${href}  (${s.size} bytes)`);
  } catch {
    console.log(`  MISS ${href}  <-- NOT FOUND`);
  }
}

console.log('\n=== 2) Verifying header navigation HTML in dist/index.html ===');
const html = await readFile(join(DIST, 'index.html'), 'utf8');

// Extract only the <header>...</header> block to avoid footer false positives
const headerMatch = html.match(/<header[\s\S]*?<\/header>/);
if (!headerMatch) {
  console.log('  ERROR: could not locate <header>...</header> in dist/index.html');
  process.exit(1);
}
const headerHtml = headerMatch[0];

// Also extract the mobile-menu block since Header.astro uses navItems for both
const mobileMatch = html.match(/<div class="mobile-menu"[\s\S]*?<\/div>\s*<script>/);
const mobileHtml = mobileMatch ? mobileMatch[0] : '';
const headerScope = headerHtml + mobileHtml;

for (const href of expected) {
  const re = new RegExp(`href="${href.replace(/\//g, '\\/')}"`);
  const found = re.test(headerScope);
  console.log(`  ${found ? 'OK  ' : 'MISS'} ${href}  ${found ? 'appears in nav' : 'MISSING from nav'}`);
}

console.log('\n=== 3) Verifying old broken URLs are NOT in the header ===');
for (const href of broken) {
  // only check href= form, to avoid false positives inside random text
  const re = new RegExp(`href="${href.replace(/\//g, '\\/')}"`);
  const found = re.test(headerScope);
  console.log(`  ${found ? 'STILL ' : 'GONE '} ${href}  ${found ? '<-- STILL PRESENT (problem!)' : 'removed from nav'}`);
}

console.log('\nDone.');
