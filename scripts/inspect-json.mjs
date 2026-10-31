import { readFile } from 'node:fs/promises';
const data = JSON.parse(await readFile('src/data/titanium-product-details/all.json', 'utf8'));
// Show full structure for one product
const slug = 'titanium-plate';
const p = data[slug];
console.log('=== HERO ===');
console.log(JSON.stringify(p.hero, null, 2));
console.log('\n=== H2 TITLES (' + p.h2Titles.length + ') ===');
console.log(p.h2Titles.join('\n'));
console.log('\n=== H3+P PAIRS (' + p.h3ps.length + ') ===');
p.h3ps.slice(0, 15).forEach((x, i) => console.log(`${i+1}. ${x.title.slice(0, 50)} => ${x.body.slice(0, 80)}`));
console.log('\n=== CARDS (' + p.cards.length + ') ===');
p.cards.forEach((c, i) => console.log(`${i+1}. ${c.title} (img: ${c.img?.split('/').pop()}) spec: ${c.spec.slice(0, 40)}`));
console.log('\n=== FAQ (' + p.faq.length + ') ===');
p.faq.forEach((f, i) => console.log(`Q: ${f.q.slice(0, 80)}`));
console.log('\n=== RFQ OPTIONS (' + p.rfqOptions.length + ') ===');
console.log(p.rfqOptions.join(' | '));
