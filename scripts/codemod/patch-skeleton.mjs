// One-shot patch: let the shared product skeleton render the page-specific
// catalog blocks and the page-specific extra blocks.
import fs from 'node:fs';

const FILE = 'src/components/product/ProductPage.astro';
const lines = fs.readFileSync(FILE, 'utf8').split(/\r?\n/);

const start = lines.findIndex((l) => l.includes('<!-- 2. FORMS / GRADES -->'));
const end = lines.findIndex((l) => l.includes('<!-- 3. PROCESS -->'));
if (start < 0 || end < 0 || end < start) throw new Error('anchors not found');

const block = `  <!-- 2. FORMS / GRADES -->
  {p.catalogSections
    ? <ProductCatalog sections={p.catalogSections} M={M} />
    : ((p.catalog.grades.length >= 4 || p.catalog.forms.length >= 4) && (
    <section id="forms-section" class="tp-section">
      <div class="tp-inner">
        <p class="tp-eyebrow">{p.catalog.eyebrow}</p>
        <h2 class="tp-h2">{p.catalog.heading}</h2>
        <p class="tp-lede">{p.catalog.lede}</p>
        <div class="tp-grid-4">
          {p.catalog.grades.length >= 4 ? (
            p.catalog.grades.map((g) => (
              <article class="tp-card tp-form-card">
                {g.img && <div class="tp-form-img"><img src={g.img} alt={g.alt || g.title} loading="lazy" /></div>}
                <div class="tp-form-body">
                  <h3>{g.title}</h3>
                  {g.spec && <p class="tp-form-spec"><strong>Standard:</strong> {g.spec}</p>}
                  {g.body && <p class="tp-form-text">{g.body}</p>}
                </div>
              </article>
            ))
          ) : (
            p.catalog.forms.map((f) => (
              <article class="tp-form-pure">
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  ))}

  <!-- 2b. PAGE-SPECIFIC BLOCKS -->
  {p.extras && p.extras.length > 0 && <ProductExtras extras={p.extras} />}
`;

const out = [...lines.slice(0, start), ...block.split('\n'), ...lines.slice(end)];
fs.writeFileSync(FILE, out.join('\n'));
console.log('patched', FILE);
