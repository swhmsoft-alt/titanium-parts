import { writeFile } from 'node:fs/promises';
const C1 = String.raw`---
import BaseLayout from '../layouts/BaseLayout.astro';
import RFQForm from '../components/RFQForm.astro';
import Icon from '../components/Icon.astro';
import productDetails from '../data/titanium-product-details/all.json';
import { productRange } from '../data/titanium-products-page-1';
import { productRangeExtra } from '../data/titanium-products-page-2';
import { productRangeTail } from '../data/titanium-products-page-3';
const allProducts = [...productRange, ...productRangeExtra, ...productRangeTail];
const product = allProducts.find((p) => p.href === '/titanium-machining-parts/');
const jsonKey = 'titanium-machining-parts';
const data = productDetails[jsonKey] || { hero: {}, cards: [], h3ps: [], faq: [] };
const hero = data.hero || {};
const h3ps = data.h3ps || [];
const cards = data.cards || [];
const faq = data.faq || [];
const orderBasis = h3ps.slice(0, 4);
const grades = h3ps.slice(4, 8);
const M = product?.title || 'Titanium Machined Parts';
---
<BaseLayout title={hero.title ? M + ' | ' + hero.title.slice(0, 60) : M} description={(hero.desc || M).slice(0, 160)}>
  <section id="hero" class="mp-hero">
    <div class="mp-hero-bg">{hero.img && <img src={hero.img} alt={hero.title} loading="eager" />}<div class="mp-hero-overlay"></div></div>
    <div class="mp-hero-inner">
      {hero.eyebrow && <p class="mp-eyebrow">{hero.eyebrow}</p>}
      <h1>{hero.title || M}</h1>
      {hero.desc && <p class="mp-lede mp-hero-lede">{hero.desc}</p>}
      <div class="mp-hero-cta">
        <a href="#mp-rfq" class="mp-btn-primary">Send {M} Inquiry</a>
        <a href="/titanium-products/" class="mp-btn-secondary">All Titanium Products</a>
      </div>
    </div>
  </section>
  <section class="mp-section mp-warning-sec"><div class="mp-inner"><p>Before requesting a quote: a drawing, sample or interface spec helps define the supply scope. Review grade, dimensions, tolerance, surface, processing, inspection and documentation before sending the inquiry.</p></div></section>
  {orderBasis.length >= 4 && (
    <section class="mp-section"><div class="mp-inner">
      <h2 class="mp-h2">Order Basis</h2>
      <p class="mp-lede">Four inputs to align the order basis before comparing price or lead time.</p>
      <div class="mp-grid-4">
        {orderBasis.map((c) => <article class="mp-card"><Icon name="check-circle" size={28} className="mp-icon-blue" /><h3>{c.title}</h3><p>{c.body}</p></article>)}
      </div>
    </div></section>
  )}
  {grades.length >= 4 && (
    <section class="mp-section mp-alt"><div class="mp-inner">
      <h2 class="mp-h2">Common Grades</h2>
      <p class="mp-lede">{M} grades reviewed against ASTM / ASME / project specifications.</p>
      <div class="mp-grid-4">
        {grades.map((g) => <article class="mp-card mp-grade-card"><h3>{g.title}</h3><p>{g.body}</p></article>)}
      </div>
    </div></section>
  )}
`;
await writeFile('scripts/mp1.txt', C1, 'utf8');
console.log('mp1:', C1.length, 'bytes');
