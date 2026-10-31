// Combine chunks and write final file
import { readFile, writeFile } from 'node:fs/promises';
const c1 = await readFile('scripts/c1.txt', 'utf8');
const c2 = await readFile('scripts/c2.txt', 'utf8');
const c3 = await readFile('scripts/c3.txt', 'utf8');
const out = c1 + c2 + c3;
const F = 'C:/Users/User/Desktop/titanium-cnc/src/pages/titanium-products/[slug].astro';
await writeFile(F, out, 'utf8');
console.log('Combined:', out.length, 'bytes ->', F);
