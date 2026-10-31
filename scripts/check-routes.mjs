// EXACT slugs from the 3 data files
const slugs = [
  'titanium-plate', 'titanium-coil', 'titanium-rod-bar', 'titanium-tubing', 'titanium-wire',
  'titanium-foil', 'titanium-mesh',
  'titanium-fasteners', 'titanium-fittings', 'titanium-flanges', 'titanium-forgings', 'titanium-machined-parts',
  'titanium-balls', 'titanium-baskets', 'titanium-diaphragm', 'titanium-clad-copper',
];
const results = await Promise.all(slugs.map(async (slug) => {
  const url = `http://localhost:4321/titanium-products/${slug}/`;
  try {
    const r = await fetch(url);
    return { slug, status: r.status, url };
  } catch (e) {
    return { slug, error: e.message, url };
  }
}));
console.log('Product detail pages:');
for (const r of results) console.log(`  [${r.status || 'ERR'}] ${r.slug}`);
console.log('\nHome page:');
const home = await fetch('http://localhost:4321/');
console.log(`  [${home.status}] /`);
const tp = await fetch('http://localhost:4321/titanium-products/');
console.log(`  [${tp.status}] /titanium-products/`);
