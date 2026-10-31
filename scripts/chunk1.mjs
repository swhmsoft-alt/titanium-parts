// Chunk 1: imports + getStaticPaths + variable setup
import { writeFile } from 'node:fs/promises';
const CHUNK1 = String.raw`---
import BaseLayout from '../../layouts/BaseLayout.astro';
import RFQForm from '../../components/RFQForm.astro';
import Icon from '../../components/Icon.astro';
import productDetails from '../../data/titanium-product-details/all.json';
import { productRange } from '../../data/titanium-products-page-1';
import { productRangeExtra } from '../../data/titanium-products-page-2';
import { productRangeTail } from '../../data/titanium-products-page-3';
const allProducts = [...productRange, ...productRangeExtra, ...productRangeTail];
export function getStaticPaths() {
  return allProducts.map((p) => {
    const slug = p.href.replace(/^\/(titanium-products\/)?/, '').replace(/\/$/, '');
    const jsonKey = slug === 'titanium-machined-parts' ? 'titanium-machining-parts' : slug;
    return { params: { slug }, props: { product: p, jsonKey } };
  });
}
const { product, jsonKey } = Astro.props;
const data = productDetails[jsonKey] || { hero: {}, cards: [], h3ps: [], faq: [] };
const hero = data.hero || {};
const h3ps = data.h3ps || [];
const cards = data.cards || [];
const faq = data.faq || [];
const orderBasis = h3ps.slice(0, 4);
const grades = h3ps.slice(4, 8);
const M = product.title;
---
<BaseLayout title={hero.title ? M + ' | ' + hero.title.slice(0, 60) : M} description={(hero.desc || M).slice(0, 160)}>
  <section id="hero" class="tp-hero">
    <div class="tp-hero-bg">{hero.img && <img src={hero.img} alt={hero.title} loading="eager" />}<div class="tp-hero-overlay"></div></div>
    <div class="tp-hero-inner">
      {hero.eyebrow && <p class="tp-eyebrow">{hero.eyebrow}</p>}
      <h1>{hero.title || M}</h1>
      {hero.desc && <p class="tp-lede tp-hero-lede">{hero.desc}</p>}
      <div class="tp-hero-cta">
        <a href="#tp-rfq" class="tp-btn-primary">Send {M} Inquiry</a>
        <a href="/titanium-products/" class="tp-btn-secondary">All Products</a>
      </div>
    </div>
  </section>
  <section class="tp-section tp-warning-sec"><div class="tp-inner"><p>Before requesting a quote: industry or product names alone do not define the supply scope. Review grade, drawing, dimensions, processing, inspection and documentation before sending the inquiry.</p></div></section>
  {orderBasis.length >= 4 && (
    <section class="tp-section"><div class="tp-inner">
      <h2 class="tp-h2">Order Basis</h2>
      <p class="tp-lede">Four inputs to align the order basis before comparing price or lead time.</p>
      <div class="tp-grid-4">
        {orderBasis.map((c) => <article class="tp-card"><Icon name="check-circle" size={28} className="tp-icon-blue" /><h3>{c.title}</h3><p>{c.body}</p></article>)}
      </div>
    </div></section>
  )}
  {grades.length >= 4 && (
    <section class="tp-section tp-alt"><div class="tp-inner">
      <h2 class="tp-h2">Common Grades</h2>
      <p class="tp-lede">{M} grades reviewed against ASTM / ASME / project specifications.</p>
      <div class="tp-grid-4">
        {grades.map((g) => <article class="tp-card tp-grade-card"><h3>{g.title}</h3><p>{g.body}</p></article>)}
      </div>
    </div></section>
  )}
`;
await writeFile('scripts/c1.txt', CHUNK1, 'utf8');
console.log('Chunk1:', CHUNK1.length, 'bytes');
