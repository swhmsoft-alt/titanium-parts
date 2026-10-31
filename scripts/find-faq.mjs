import { readFile, writeFile } from 'node:fs/promises';
const html = await readFile('scripts/product-data-json/titanium-bolts.html', 'utf8');
// Find the FAQ section
const idx = html.indexOf('id="anode-faq"') > 0 ? html.indexOf('id="anode-faq"') : html.indexOf('FAQ');
const faqStart = html.indexOf('id="', idx);
const faqBlock = html.slice(faqStart, faqStart + 8000);
await writeFile('scripts/faq-bolts-sample.txt', faqBlock, 'utf8');
console.log('Saved', faqBlock.length, 'chars');
