import { readdirSync, existsSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import path from 'node:path';
const dir = 'scripts/product-data-json';
const files = readdirSync(dir).filter(f => f.endsWith('.html'));
const want = ['titanium-foil-2', 'titanium-bolts', 'titanium-machining-parts', 'titanium-machined-parts'];
const out = want.map(w => `${w}.html: ${existsSync(path.join(dir, w + '.html')) ? 'EXISTS' : 'MISSING'}`).join('\n');
await writeFile('scripts/files-check.txt', out, 'utf8');
console.log('Total HTML files:', files.length);
