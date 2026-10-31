import { readFile, writeFile } from 'node:fs/promises';
const F = 'C:/Users/User/Desktop/titanium-cnc/src/pages/titanium-products/index.astro';
const text = await readFile(F, 'utf8');
const lines = text.split(/\r?\n/);
console.log('Total lines:', lines.length);
const trimmed = lines.slice(0, 269).join('\n');
await writeFile(F, trimmed, 'utf8');
console.log('Truncated to 269 lines, wrote', trimmed.length, 'bytes');
