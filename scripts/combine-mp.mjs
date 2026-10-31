import { readFile, writeFile } from 'node:fs/promises';
const c1 = await readFile('scripts/mp1.txt', 'utf8');
const c2 = await readFile('scripts/mp2.txt', 'utf8');
const c3 = await readFile('scripts/mp3.txt', 'utf8');
const out = c1 + c2 + c3;
const F = 'C:/Users/User/Desktop/titanium-cnc/src/pages/titanium-machining-parts.astro';
await writeFile(F, out, 'utf8');
console.log('Wrote', out.length, 'bytes to', F);
