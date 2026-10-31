import { existsSync, readdirSync } from 'node:fs';
import path from 'node:path';

const PAGES = 'C:/Users/User/Desktop/titanium-cnc/src/pages';
const items = readdirSync(PAGES, { withFileTypes: true });
console.log('=== src/pages/ ===');
for (const i of items) {
  const full = path.join(PAGES, i.name);
  if (i.isDirectory()) {
    const sub = readdirSync(full);
    console.log(`[DIR]  ${i.name}/  (${sub.length} files)`);
    for (const f of sub) console.log(`       - ${f}`);
  } else {
    console.log(`[FILE] ${i.name}`);
  }
}

console.log('\n=== src/data/ ===');
const DATA = 'C:/Users/User/Desktop/titanium-cnc/src/data';
for (const f of readdirSync(DATA)) console.log(`- ${f}`);

console.log('\n=== Check products dir GONE ===');
console.log('existsSync src/pages/products:', existsSync('C:/Users/User/Desktop/titanium-cnc/src/pages/products'));
console.log('existsSync [slug].astro in titanium-products:', existsSync('C:/Users/User/Desktop/titanium-cnc/src/pages/titanium-products/[slug].astro'));
