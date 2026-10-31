import { readFile } from 'node:fs/promises';
const html = await readFile('scripts/product-data-json/titanium-plate.html', 'utf8');
// Find all section tags with their IDs
const sectionRe = /<section[^>]*?id="([^"]+)"[^>]*?>/g;
let m;
while ((m = sectionRe.exec(html))) console.log('SECTION ID:', m[1]);
// Find all H1/H2/H3 with their text
console.log('\n--- HEADINGS ---');
const headingRe = /<(h1|h2|h3)[^>]*>([^<]+)</g;
while ((m = headingRe.exec(html))) console.log(m[1].toUpperCase() + ':', m[2].replace(/&amp;/g, '&').replace(/閳?/g, '|').trim());
