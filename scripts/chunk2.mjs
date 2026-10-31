import { writeFile } from 'node:fs/promises';
const CHUNK2 = String.raw`  {cards.length > 0 && (
    <section class="tp-section"><div class="tp-inner">
      <h2 class="tp-h2">Forms &amp; Grades</h2>
      <p class="tp-lede">Product forms, dimensions and acceptance criteria relevant to the {M.toLowerCase()} order basis.</p>
      <div class="tp-grid-4">
        {cards.map((c) => <article class="tp-card tp-form-card">
          <div class="tp-form-img"><img src={c.img} alt={c.alt} loading="lazy" /></div>
          <div class="tp-form-body"><h3>{c.title}</h3>{c.spec && <p class="tp-form-spec"><strong>Specify:</strong> {c.spec}</p>}<p class="tp-form-text">{c.body}</p></div>
        </article>)}
      </div>
    </div></section>
  )}
  {faq.length > 0 && (
    <section class="tp-section tp-alt"><div class="tp-inner">
      <h2 class="tp-h2">{M} FAQ</h2>
      <p class="tp-lede">Common questions before sending the inquiry.</p>
      <div class="tp-faq-grid">
        {faq.map((f) => <details class="tp-faq"><summary><span>{f.q}</span><span class="tp-faq-icon">+</span></summary><div class="tp-faq-a"><p>{f.a}</p></div></details>)}
      </div>
    </div></section>
  )}
  <section id="tp-rfq" class="tp-section tp-dark"><div class="tp-inner">
    <h2 class="tp-h2 tp-h-light">Send Your {M} Inquiry</h2>
    <p class="tp-lede tp-lede-light">Share your grade, dimensions, quantity, drawing and delivery target.</p>
    <div class="tp-rfq-grid">
      <aside class="tp-side-card"><h3>Related</h3>
        <a href="/titanium-products/" class="tp-related">All Titanium Products →</a>
        <a href="/contact/" class="tp-related">Engineering Support →</a>
      </aside>
      <div><RFQForm title={M + ' Inquiry'} subtitle="We respond within 1 business day." variant="titanium" /></div>
    </div>
  </div></section>
</BaseLayout>
`;
await writeFile('scripts/c2.txt', CHUNK2, 'utf8');
console.log('Chunk2:', CHUNK2.length, 'bytes');
