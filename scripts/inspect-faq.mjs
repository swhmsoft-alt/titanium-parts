import { readFile, writeFile } from 'node:fs/promises';
const data = JSON.parse(await readFile('src/data/titanium-product-details/all.json', 'utf8'));
const out = [];
for (const [slug, p] of Object.entries(data)) {
  out.push(`${slug}: ${p.faq.length} FAQs`);
  if (p.faq.length > 0) p.faq.forEach(f => out.push(`  Q: ${f.q.slice(0, 70)}`));
}
await writeFile('scripts/faq-check.txt', out.join('\n'), 'utf8');
console.log('Written');
