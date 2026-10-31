import { readFile, writeFile } from 'node:fs/promises';
const html = await readFile('scripts/product-data-json/titanium-clad-copper.html', 'utf8');
// Find the section starting with "Product Forms" h2 and dump 2000 chars
const m = html.match(/<h2[^>]*>\s*Match the Composite Form[\s\S]{0,3500}/);
const out = m ? m[0] : 'NOT FOUND';
await writeFile('scripts/forms-sample.txt', out, 'utf8');
console.log('Saved ' + out.length + ' chars');
