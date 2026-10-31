import { readFile } from 'node:fs/promises';
const html = await readFile('scripts/product-data-json/titanium-plate.html', 'utf8');
// Find first 500 chars of each major section
const samples = {
  'forms-section': html.match(/<section[^>]*id="[^"]*forms"[\s\S]*?<\/section>/)?.[0]?.slice(0, 2500),
  'selection-section': html.match(/<section[\s\S]*?Solution Selection Guide[\s\S]*?<\/section>/)?.[0]?.slice(0, 2500),
  'process-section': html.match(/<section[^>]*bg-slate-950[\s\S]*?From Substrate[\s\S]*?<\/section>/)?.[0]?.slice(0, 2500),
  'apps-section': html.match(/<section[\s\S]*?Application[\s\S]*?<\/section>/)?.[0]?.slice(0, 2500),
  'guard-section': html.match(/<section[\s\S]*?Purchase Guard[\s\S]*?<\/section>/)?.[0]?.slice(0, 2000),
  'faq-section': html.match(/<section[\s\S]*?FAQ[\s\S]*?<\/section>/)?.[0]?.slice(0, 2000),
  'rfq-section': html.match(/<section[^>]*id="[^"]*-rfq"[\s\S]*?<\/section>/)?.[0]?.slice(0, 3000),
};
for (const [k, v] of Object.entries(samples)) console.log('=== ' + k + ' ===\n' + (v || 'NOT FOUND') + '\n');
