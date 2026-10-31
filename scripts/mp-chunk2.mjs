import { writeFile } from 'node:fs/promises';
const C2 = String.raw`  {cards.length > 0 && (
    <section class="mp-section"><div class="mp-inner">
      <h2 class="mp-h2">Forms &amp; Grades</h2>
      <p class="mp-lede">Product forms, dimensions and acceptance criteria relevant to the {M.toLowerCase()} order basis.</p>
      <div class="mp-grid-4">
        {cards.map((c) => <article class="mp-card mp-form-card">
          <div class="mp-form-img"><img src={c.img} alt={c.alt} loading="lazy" /></div>
          <div class="mp-form-body"><h3>{c.title}</h3>{c.spec && <p class="mp-form-spec"><strong>Specify:</strong> {c.spec}</p>}<p class="mp-form-text">{c.body}</p></div>
        </article>)}
      </div>
    </div></section>
  )}
  {faq.length > 0 && (
    <section class="mp-section mp-alt"><div class="mp-inner">
      <h2 class="mp-h2">{M} FAQ</h2>
      <p class="mp-lede">Common questions before sending the inquiry.</p>
      <div class="mp-faq-grid">
        {faq.map((f) => <details class="mp-faq"><summary><span>{f.q}</span><span class="mp-faq-icon">+</span></summary><div class="mp-faq-a"><p>{f.a}</p></div></details>)}
      </div>
    </div></section>
  )}
  <section id="mp-rfq" class="mp-section mp-dark"><div class="mp-inner">
    <h2 class="mp-h2 mp-h-light">Send Your {M} Inquiry</h2>
    <p class="mp-lede mp-lede-light">Share your grade, dimensions, quantity, drawing and delivery target.</p>
    <div class="mp-rfq-grid">
      <aside class="mp-side-card"><h3>Related</h3>
        <a href="/titanium-products/" class="mp-related">All Titanium Products →</a>
        <a href="/contact/" class="mp-related">Engineering Support →</a>
      </aside>
      <div><RFQForm title={M + ' Inquiry'} subtitle="We respond within 1 business day." variant="titanium" /></div>
    </div>
  </div></section>
</BaseLayout>
`;
await writeFile('scripts/mp2.txt', C2, 'utf8');
console.log('mp2:', C2.length, 'bytes');
