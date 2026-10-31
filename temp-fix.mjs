// Script to generate dedicated 1:1 product page files from all.json
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const jsonFile = 'src/data/titanium-product-details/all.json';
const data = JSON.parse(readFileSync(jsonFile, 'utf-8'));

// Product-specific configurations
const configs = {
  'titanium-rod-bar': {
    title: 'Titanium Bar & Rod',
    hero: {
      eyebrow: 'ASTM B348 Titanium Bar & Rod',
      tags: ['Round · Ground · Hollow · Custom', 'Grades 2 · 5 · 7 · 23', 'Order-Specific MTC & Inspection'],
      ctaPrimary: 'Review Grades & Profiles'
    },
    hasSpecMapping: false
  },
  'titanium-coil': {
    title: 'Titanium Coil & Strip',
    hero: {
      eyebrow: 'ASTM B265 Coil · Slit Strip · Cut Sheet',
      tags: ['Master Coil · Slit Strip · Cut Sheet', 'Order-Specific MTC & Inspection'],
      ctaPrimary: 'Choose Coil Form'
    },
    hasSpecMapping: false
  },
  'titanium-wire': {
    title: 'Titanium Wire',
    hero: {
      eyebrow: 'ASTM B863 · AWS A5.16 Welding Wire & Rod',
      tags: ['ASTM B863 · AWS A5.16', 'Coil · Spool · Cut Length', 'Order-Specific MTC & Inspection'],
      ctaPrimary: 'Review Wire Grades'
    },
    hasSpecMapping: false
  },
  'titanium-mesh': {
    title: 'Titanium Mesh',
    hero: {
      eyebrow: 'Woven · Expanded · Perforated · Welded',
      tags: ['Woven · Expanded · Perforated · Welded', 'Order-Specific MTC & Inspection'],
      ctaPrimary: 'Review Mesh Types'
    },
    hasSpecMapping: false
  },
  'titanium-foil-2': {
    title: 'Titanium Foil',
    hero: {
      eyebrow: 'ASTM B265 Foil · Slit Strip · Cut Sheet',
      tags: ['Ultra-Thin Coil · Slit Strip', 'Order-Specific MTC & Inspection'],
      ctaPrimary: 'Review Foil Grades'
    },
    hasSpecMapping: false
  },
  'titanium-balls': {
    title: 'Titanium Balls & Spheres',
    hero: {
      eyebrow: 'Solid · Hollow · Hemispheres · Float',
      tags: ['Solid · Hollow · Float · Custom', 'Order-Specific MTC & Inspection'],
      ctaPrimary: 'Review Ball Forms'
    },
    hasSpecMapping: false
  },
  'titanium-baskets': {
    title: 'Titanium Anode Baskets',
    hero: {
      eyebrow: 'Mesh · Perforated · Framed · Custom Hooks',
      tags: ['Plating Line Compatible', 'Custom Hooks · Mesh · Frames', 'Order-Specific MTC & Inspection'],
      ctaPrimary: 'Review Basket Types'
    },
    hasSpecMapping: false
  },
  'titanium-bolts': {
    title: 'Titanium Fasteners',
    hero: {
      eyebrow: 'Bolts · Screws · Nuts · Studs · Custom',
      tags: ['Bolts · Screws · Nuts · Studs', 'Drawing-Based Custom', 'Order-Specific MTC & Inspection'],
      ctaPrimary: 'Review Fastener Types'
    },
    hasSpecMapping: false
  },
  'titanium-clad-copper': {
    title: 'Titanium-Clad Copper',
    hero: {
      eyebrow: 'Bar · Rod · Tube · Busbar',
      tags: ['Bar · Rod · Tube · Connector', 'Drawing-Based Custom', 'Order-Specific MTC & Inspection'],
      ctaPrimary: 'Review Clad Forms'
    },
    hasSpecMapping: false
  },
  'titanium-diaphragm': {
    title: 'Titanium Diaphragms',
    hero: {
      eyebrow: 'Audio · Sensor · Pressure · Formed',
      tags: ['Tweeter · Sensor · Pressure', 'Drawing-Based Custom', 'Order-Specific MTC & Inspection'],
      ctaPrimary: 'Review Diaphragm Types'
    },
    hasSpecMapping: false
  },
  'titanium-fittings': {
    title: 'Titanium Pipe Fittings',
    hero: {
      eyebrow: 'ASTM B363 · ASME B16.9',
      tags: ['Elbows · Tees · Reducers', 'ASME B16.9 · B363', 'Order-Specific MTC & Inspection'],
      ctaPrimary: 'Review Fitting Types'
    },
    hasSpecMapping: false
  },
  'titanium-flanges': {
    title: 'Titanium Pipe Flanges',
    hero: {
      eyebrow: 'ASTM B381 · ASME B16.5 · B16.47',
      tags: ['Weld Neck · Slip-On · Blind', 'Forged In-House', 'Order-Specific MTC & Inspection'],
      ctaPrimary: 'Review Flange Types'
    },
    hasSpecMapping: false
  },
  'titanium-forgings': {
    title: 'Titanium Forgings',
    hero: {
      eyebrow: 'ASTM B381 · Custom Drawing-Based',
      tags: ['Rings · Discs · Shafts · Blocks', 'Drawing-Based Custom', 'Order-Specific MTC & Inspection'],
      ctaPrimary: 'Review Forging Types'
    },
    hasSpecMapping: false
  }
};

// HTML escape function
function escape(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function generatePage(slug) {
  const config = configs[slug];
  if (!config) {
    console.log(`No config for ${slug}, skipping`);
    return;
  }
  const d = data[slug];
  if (!d) {
    console.log(`No data for ${slug}, skipping`);
    return;
  }
  const outFile = `src/pages/titanium-products/${slug}.astro`;

  const hero = d.hero || {};
  const h3ps = d.h3ps || [];
  const cards = d.cards || [];
  const faq = d.faq || [];
  const rfqOptions = d.rfqOptions || [];

  // Extract data slices
  const orderBasis = h3ps.slice(0, 4);
  const forms = h3ps.slice(8, 12);
  const processSteps = h3ps.slice(16, 21);
  const applications = h3ps.slice(21, 25);
  const evidence = h3ps.slice(25, 29);
  const controls = h3ps.slice(29, 33);

  // Use cards for image-based sections
  const gradeCards = cards.slice(0, 4);
  const processCards = cards.slice(4, 9);
  const appCards = cards.slice(9, 13);

  const title = config.title;
  const lcTitle = title.toLowerCase();

  const M = title;

  // Build content
  let page = `---
import BaseLayout from '../../layouts/BaseLayout.astro';
import Icon from '../../components/Icon.astro';

const M = ${JSON.stringify(title)};

const hero = {
  eyebrow: ${JSON.stringify(hero.eyebrow || '')},
  title: ${JSON.stringify(hero.title || title)},
  desc: ${JSON.stringify(hero.desc || '')},
  img: ${JSON.stringify(hero.img || '')},
  tags: ${JSON.stringify(config.hero.tags)}
};

const orderBasis = ${JSON.stringify(orderBasis)};

// Forms (text-only cards)
const forms = ${JSON.stringify(forms)};

const processSteps = ${JSON.stringify(processCards.length >= 4 ? processCards : [
  { img: 'https://heletitanium.com/wp-content/uploads/2026/09/Requirement-Review-Titanium-Supply.webp', alt: 'Requirement Review', title: 'Requirement Review', body: 'Grade, specification, condition, dimensions, quantity and document scope aligned before supply.' },
  { img: 'https://heletitanium.com/wp-content/uploads/2026/09/Material-Identity-Verification.webp', alt: 'Material and Route Confirmation', title: 'Material & Route Confirmation', body: 'Source form, condition, identity and applicable specification confirmed against the quotation.' },
  { img: 'https://heletitanium.com/wp-content/uploads/2026/09/Processing-Interface-Confirmation.webp', alt: 'Processing & Surface Control', title: 'Processing & Surface Control', body: 'Cut route, allowance, edge condition and surface requirements controlled to the agreed scope.' },
  { img: 'https://heletitanium.com/wp-content/uploads/2026/09/Inspection-Documentation-Records.webp', alt: 'Inspection & Records', title: 'Inspection & Records', body: 'Order-specific dimensional, surface, material or third-party checks completed as agreed.' },
  { img: 'https://heletitanium.com/wp-content/uploads/2026/09/Marking-Packing-Release.webp', alt: 'Marking, Packing and Release', title: 'Marking, Packing & Release', body: 'Identification, document set, protective packing and delivery basis checked before release.' }
])};

const mfgVideo = {
  poster: 'https://heletitanium.com/wp-content/uploads/2026/09/Titanium-Plates-Sheets-Manufacturer.webp',
  src: 'https://heletitanium.com/wp-content/uploads/2026/09/Titanium-Products-Manufacturer-Hele-Titanium.mp4'
};

const applications = ${JSON.stringify(appCards.length >= 4 ? appCards : [
  { img: 'https://heletitanium.com/wp-content/uploads/2026/09/Chemical-Processing01.webp', alt: 'Chemical Processing', title: 'Chemical Processing', spec: 'Define media, concentration, contaminants, temperature, pressure and fabrication duty before selecting Grade 2, 7 or another material.', href: '/industries/chemical-processing/' },
  { img: 'https://heletitanium.com/wp-content/uploads/2026/09/Marine-Offshore02.webp', alt: 'Marine & Offshore', title: 'Marine & Offshore', spec: 'Review seawater exposure, crevice conditions, mechanical loading, joining and maintenance access.', href: '/industries/marine-offshore/' },
  { img: 'https://heletitanium.com/wp-content/uploads/2026/09/Aerospace-High-Performance-Engineering04.webp', alt: 'Aerospace & High-Performance', title: 'Aerospace & High-Performance', spec: 'Confirm the approved material specification, condition, source and traceability requirements; general Grade 5 supply is not automatic aerospace approval.', href: '/industries/aerospace/' },
  { img: 'https://heletitanium.com/wp-content/uploads/2026/09/Medical-Precision-Engineering03.webp', alt: 'Medical & Precision', title: 'Medical & Precision', spec: 'Separate raw-material specification from finished-device qualification and regulatory responsibilities.', href: '/industries/medical/' }
])};

const evidence = ${JSON.stringify(evidence)};

const controls = ${JSON.stringify(controls)};

const faq = ${JSON.stringify(faq.length >= 6 ? faq.slice(0, 6) : faq)};

const rfqOptions = ${JSON.stringify(rfqOptions)};
const grades = ${JSON.stringify(gradeCards)};
---
<BaseLayout title={M + ' | ' + (hero.title || '').slice(0, 80)} description={(hero.desc || M).slice(0, 160)}>
  <!-- HERO -->
  <section class="tp-hero">
    {hero.img && <img src={hero.img} alt={hero.title} class="tp-hero-img" fetchpriority="high" decoding="async" loading="eager" />}
    <div class="tp-hero-overlay"></div>
    <div class="tp-hero-inner">
      {hero.eyebrow && <p class="tp-hero-eyebrow">{hero.eyebrow}</p>}
      <h1>{hero.title || M}</h1>
      {hero.desc && <p class="tp-hero-lede">{hero.desc}</p>}
      <div class="tp-hero-tags">
        {hero.tags.map((t) => <span class="tp-hero-tag">{t}</span>)}
      </div>
      <div class="tp-hero-cta">
        <a href="#forms-section" class="tp-btn-primary">${config.hero.ctaPrimary}</a>
        <a href="#tp-rfq" class="tp-btn-secondary">Request a Quote</a>
      </div>
    </div>
  </section>

  <!-- 1. ORDER BASIS -->
  {orderBasis.length >= 4 && (
    <section class="tp-section tp-blue-bg">
      <div class="tp-inner tp-orderbasis-v2">
        <div class="tp-orderbasis-head">
          <p class="tp-eyebrow">Buying Essentials</p>
          <h2 class="tp-h2">Freeze the Order Basis Before Comparing Price</h2>
        </div>
        <div class="tp-grid-2">
          {orderBasis.map((c) => (
            <div class="tp-ob-card">
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )}

  <!-- 2. FORMS / GRADES -->
  {(grades.length >= 4 || forms.length >= 4) && (
    <section id="forms-section" class="tp-section">
      <div class="tp-inner">
        <p class="tp-eyebrow">{slug.includes('titanium-rod-bar') ? 'Grades & Supply Review' : slug.includes('titanium-coil') || slug.includes('titanium-foil') ? 'Product Form' : 'Grade Reference'}</p>
        <h2 class="tp-h2">{M} Grades &amp; Forms</h2>
        <p class="tp-lede">{M} grades and product forms reviewed against ASTM / ASME / project specifications.</p>
        <div class="tp-grid-4">
          {grades.length >= 4 ? (
            grades.map((g) => (
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
            forms.map((f) => (
              <article class="tp-form-pure">
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  )}

  <!-- 3. PROCESS -->
  <section class="tp-section tp-dark">
    <div class="tp-inner">
      <div class="tp-process-head">
        <p class="tp-eyebrow tp-eyebrow-light">Process Review</p>
        <h2 class="tp-h2 tp-h-light">Coordinate the Order from Specification to Release</h2>
        <p class="tp-lede tp-lede-light">Each step closes one part of the order basis. {M} preparation, processing and inspection scope are confirmed by quotation against the approved order basis.</p>
      </div>
      <div class="tp-grid-5">
        {processSteps.slice(0, 5).map((c, i) => (
          <article class="tp-process-card-v2">
            {c.img && <div class="tp-process-img"><img src={c.img} alt={c.alt || c.title} loading="lazy" /></div>}
            <div class="tp-process-body">
              <span class="tp-process-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>

  <!-- 4. MANUFACTURING ENVIRONMENT -->
  <section class="tp-section">
    <div class="tp-inner tp-mfg-grid">
      <div>
        <p class="tp-eyebrow">Inside HELE Titanium</p>
        <h2 class="tp-h2">{M} Manufacturing Environment</h2>
        <p class="tp-lede">{M} preparation, processing and inspection are carried out in our own facility. The inspection scope and documentation for a specific order are agreed in the quotation.</p>
      </div>
      <div class="tp-mfg-video">
        <video controls preload="metadata" playsinline poster={mfgVideo.poster}>
          <source src={mfgVideo.src} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
    </div>
  </section>

  <!-- 5. APPLICATIONS -->
  {applications.length >= 4 && (
    <section class="tp-section tp-alt">
      <div class="tp-inner">
        <p class="tp-eyebrow">Application Context</p>
        <h2 class="tp-h2">Match Material Decisions to the Actual Service</h2>
        <p class="tp-lede">Grade, condition and documentation choices follow from the operating environment, not from the section name. Each context below sets the typical qualification conversation before the first quotation.</p>
        <div class="tp-grid-4">
          {applications.slice(0, 4).map((c) => (
            <article class="tp-card tp-form-card tp-app-card">
              {c.img && <div class="tp-form-img"><img src={c.img} alt={c.alt || c.title} loading="lazy" /></div>}
              <div class="tp-form-body">
                <h3>{c.title}</h3>
                {c.spec && <p class="tp-form-spec">{c.spec}</p>}
                {c.href && <a href={c.href} class="tp-app-link">Review the industry context �?/a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )}

  <!-- 6. EVIDENCE -->
  {evidence.length >= 4 && (
    <section class="tp-section">
      <div class="tp-inner tp-evidence-grid">
        <div>
          <p class="tp-eyebrow">Supply Scope &amp; Qualification</p>
          <h2 class="tp-h2">Specify the Evidence Needed for Acceptance</h2>
          <p class="tp-lede">A certificate name alone does not define the complete acceptance package. State the traceability level, inspection characteristics, test reports, marking, third-party involvement and release documents required by the order.</p>
        </div>
        <div class="tp-evidence-cards">
          {evidence.slice(0, 4).map((c) => (
            <div class="tp-evidence-card">
              <Icon name="badge-check" size={22} className="tp-icon-blue" />
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )}

  <!-- 7. CONTROLS -->
  {controls.length >= 4 && (
    <section class="tp-section tp-dark">
      <div class="tp-inner">
        <p class="tp-eyebrow tp-eyebrow-light">Before You Order</p>
        <h2 class="tp-h2 tp-h-light">Confirm Four Controls Before You Buy</h2>
        <p class="tp-lede tp-lede-light">Four checks that catch most order-basis errors before they become commercial or quality problems.</p>
        <div class="tp-grid-4">
          {controls.slice(0, 4).map((c) => (
            <article class="tp-control-card">
              <Icon name="badge-check" size={28} className="tp-icon-blue" />
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )}

  <!-- 8. FAQ -->
  {faq.length > 0 && (
    <section class="tp-section tp-alt">
      <div class="tp-inner">
        <p class="tp-eyebrow">Questions</p>
        <h2 class="tp-h2">{M} FAQ</h2>
        <p class="tp-lede">Common questions before sending the inquiry.</p>
        <div class="tp-faq-grid">
          {faq.slice(0, 6).map((f) => (
            <details class="tp-faq">
              <summary>
                <span>{f.q}</span>
                <span class="tp-faq-icon">+</span>
              </summary>
              <div class="tp-faq-a"><p>{f.a}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )}

  <!-- 9. RFQ -->
  <section id="tp-rfq" class="tp-section tp-dark tp-rfq-sec">
    <div class="tp-inner tp-rfq-grid">
      <aside class="tp-rfq-side">
        <h2 class="tp-h2 tp-h-light">Send the Order Basis for Supply Review</h2>
        <p class="tp-lede tp-lede-light">Share the available grade, specification, dimensions, quantity, processing and evidence requirements. A drawing is helpful for cut blanks and controlled tolerances, but it is optional for the first enquiry.</p>
        <ul class="tp-rfq-checks">
          <li><Icon name="check" size={18} className="tp-icon-light" /> Grade and specification review</li>
          <li><Icon name="check" size={18} className="tp-icon-light" /> {M} scope review</li>
          <li><Icon name="check" size={18} className="tp-icon-light" /> Processing and inspection requirements</li>
          <li><Icon name="check" size={18} className="tp-icon-light" /> Quotation-specific availability and delivery basis</li>
        </ul>
        <p class="tp-rfq-prefer">Prefer email? <a href="mailto:sales@heletitanium.com">sales@heletitanium.com</a></p>
        <p class="tp-rfq-hq">HQ: Titanium Valley, Baoji City, Shaanxi Province, China</p>
      </aside>
      <form class="tp-rfq-form" data-variant="titanium-product">
        <h3 class="tp-rfq-form-title">{M} Inquiry</h3>
        <div class="tp-rfq-row">
          <div class="tp-rfq-field">
            <label>Full Name <span>*</span></label>
            <input type="text" name="fullName" required />
          </div>
          <div class="tp-rfq-field">
            <label>Business Email <span>*</span></label>
            <input type="email" name="email" required />
          </div>
        </div>
        <div class="tp-rfq-field">
          <label>Product of Interest <span>*</span></label>
          <select name="interest" required>
            <option value="">Select an option...</option>
            {rfqOptions.map((opt) => <option value={opt}>{opt}</option>)}
          </select>
        </div>
        <div class="tp-rfq-field">
          <label>Grade / Specification Review</label>
          <input type="text" name="grade" placeholder="e.g. Grade 2, ASTM B348, 10mm × 1000mm" />
        </div>
        <div class="tp-rfq-field">
          <label>Drawing / Specification (Optional)</label>
          <div class="tp-rfq-upload">
            <Icon name="upload" size={32} className="tp-rfq-upload-icon" />
            <span class="tp-rfq-upload-text">Supported formats: PDF, JPG, PNG, STEP, IGES, STL, DWG (Max 20MB)</span>
            <input type="file" name="attachment" multiple accept=".pdf,.jpg,.jpeg,.png,.step,.iges,.stl,.dwg" />
          </div>
          <p class="tp-rfq-upload-hint">PDF, image and common CAD formats are accepted.</p>
        </div>
        <div class="tp-rfq-field">
          <label>Message / Specifications <span>*</span></label>
          <textarea name="message" rows="5" required></textarea>
        </div>
        <button type="submit" class="tp-btn-primary tp-btn-block">Send {M} Inquiry</button>
        <p class="tp-rfq-privacy">Your information will only be used to respond to your inquiry and support your project review. We respect your privacy.</p>
      </form>
    </div>
  </section>
</BaseLayout>

<style>
/* ===== HERO ===== */
.tp-hero { position: relative; min-height: 680px; padding: 5rem 0 4rem; color: #fff; overflow: hidden; display: flex; align-items: center; justify-content: flex-start; }
.tp-hero-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1; }
.tp-hero-overlay { position: absolute; inset: 0; background: linear-gradient(90deg, #020617 0%, rgba(2,6,23,0.9) 50%, rgba(23,37,84,0.45) 100%); z-index: 2; }
.tp-hero-inner { position: relative; z-index: 3; max-width: 1024px; margin: 0 auto; padding: 0 1.5rem; width: 100%; }
.tp-hero-eyebrow { display: inline-block; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #93c5fd; margin: 0 0 1.25rem; }
.tp-hero h1 { font-size: clamp(2.25rem, 5vw, 3.75rem); font-weight: 800; color: #fff; line-height: 1.1; letter-spacing: -0.025em; margin: 0 0 1.25rem; }
.tp-hero-lede { font-size: clamp(1rem, 1.6vw, 1.25rem); color: #cbd5e1; line-height: 1.65; max-width: 900px; margin: 0 0 1.5rem; }
.tp-hero-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem; }
.tp-hero-tag { display: inline-block; padding: 0.5rem 1rem; border: 1px solid rgba(255,255,255,0.25); background: rgba(255,255,255,0.08); color: #fff; font-size: 0.875rem; font-weight: 600; border-radius: 999px; }
.tp-hero-cta { display: flex; flex-wrap: wrap; gap: 0.85rem; margin-top: 1rem; }
.tp-btn-primary { display: inline-flex; align-items: center; justify-content: center; background: #2563eb; color: #fff; padding: 0.875rem 1.75rem; border-radius: 8px; font-weight: 700; text-decoration: none; border: none; cursor: pointer; font-size: 0.9375rem; transition: background-color 0.2s; min-height: 48px; }
.tp-btn-primary:hover { background: #1d4ed8; }
.tp-btn-secondary { display: inline-flex; align-items: center; justify-content: center; background: transparent; color: #fff; padding: 0.875rem 1.75rem; border: 1px solid rgba(255,255,255,0.6); border-radius: 8px; font-weight: 700; text-decoration: none; transition: all 0.2s; min-height: 48px; }
.tp-btn-secondary:hover { background: rgba(255,255,255,0.1); border-color: #fff; }
.tp-btn-block { display: flex; width: 100%; justify-content: center; padding: 1rem 1.75rem; font-size: 1.0625rem; }

.tp-section { padding: 5rem 0; background: #fff; }
.tp-section.tp-alt { background: #f8fafc; }
.tp-section.tp-blue-bg { background: #eff6ff; }
.tp-section.tp-dark { background: #020617; color: #fff; }
.tp-inner { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
.tp-h2 { font-size: clamp(1.75rem, 3.2vw, 2.625rem); font-weight: 800; color: #0f172a; margin: 0.5rem 0 1rem; line-height: 1.15; letter-spacing: -0.02em; }
.tp-h-light { color: #fff; }
.tp-lede { font-size: 1.0625rem; color: #475569; line-height: 1.65; margin: 0 0 2.5rem; max-width: 800px; }
.tp-lede-light { color: #cbd5e1; }
.tp-eyebrow { display: inline-block; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #2563eb; margin: 0 0 0.5rem; }
.tp-eyebrow-light { color: #93c5fd; }

.tp-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
.tp-grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
.tp-grid-5 { display: grid; grid-template-columns: repeat(5, 1fr); gap: 1.25rem; }
@media (max-width: 1280px) { .tp-grid-5 { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 1024px) { .tp-grid-4 { grid-template-columns: repeat(2, 1fr); } .tp-grid-5 { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px)  { .tp-grid-4, .tp-grid-2, .tp-grid-5 { grid-template-columns: 1fr; } }

.tp-orderbasis-v2 { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 3rem; align-items: start; }
@media (max-width: 1024px) { .tp-orderbasis-v2 { grid-template-columns: 1fr; } }
.tp-orderbasis-head { padding-top: 0.25rem; }
.tp-orderbasis-head .tp-h2 { font-size: clamp(1.75rem, 3vw, 2.25rem); }
.tp-ob-card { background: #fff; padding: 1.25rem; border-radius: 16px; }
.tp-ob-card h3 { font-size: 1.125rem; font-weight: 700; color: #0f172a; margin: 0 0 0.5rem; }
.tp-ob-card p { font-size: 0.9375rem; color: #475569; line-height: 1.55; margin: 0; }

.tp-card { padding: 0; background: #fff; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; transition: all 0.2s; display: flex; flex-direction: column; }
.tp-card:hover { box-shadow: 0 10px 25px -5px rgba(15,23,42,0.08); }
.tp-icon-blue { color: #2563eb; flex-shrink: 0; }
.tp-icon-light { color: #93c5fd; flex-shrink: 0; }
.tp-form-card { padding: 0; }
.tp-form-img { aspect-ratio: 4/3; background: #f1f5f9; overflow: hidden; }
.tp-form-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
.tp-form-card:hover .tp-form-img img { transform: scale(1.05); }
.tp-form-body { padding: 1.25rem 1.5rem 1.5rem; flex: 1; display: flex; flex-direction: column; }
.tp-form-body h3 { font-size: 1.125rem; font-weight: 700; color: #0f172a; margin: 0 0 0.5rem; }
.tp-form-spec { font-size: 0.8125rem; color: #475569; line-height: 1.5; margin: 0 0 0.5rem; }
.tp-form-spec strong { color: #0f172a; }
.tp-form-text { font-size: 0.875rem; color: #64748b; line-height: 1.6; margin: 0; }
.tp-app-link { display: inline-flex; align-items: center; font-size: 0.875rem; font-weight: 700; color: #2563eb; margin-top: 0.85rem; text-decoration: none; }
.tp-app-link:hover { color: #1d4ed8; }
.tp-form-pure { background: #fff; padding: 1.5rem; border-radius: 16px; border: 1px solid #e2e8f0; transition: all 0.2s; }
.tp-form-pure:hover { box-shadow: 0 10px 25px -5px rgba(15,23,42,0.08); }
.tp-form-pure h3 { font-size: 1.125rem; font-weight: 700; color: #0f172a; margin: 0 0 0.5rem; }
.tp-form-pure p { font-size: 0.9375rem; color: #475569; line-height: 1.6; margin: 0 0 0.85rem; }

.tp-process-head { max-width: 768px; margin-bottom: 2.5rem; }
.tp-process-card-v2 { background: #fff; border-radius: 16px; overflow: hidden; transition: all 0.2s; }
.tp-process-card-v2:hover { transform: translateY(-4px); box-shadow: 0 18px 35px -12px rgba(0,0,0,0.4); }
.tp-process-img { aspect-ratio: 16/10; background: #f1f5f9; overflow: hidden; }
.tp-process-img img { width: 100%; height: 100%; object-fit: cover; }
.tp-process-body { padding: 1.25rem 1.5rem 1.5rem; }
.tp-process-num { display: inline-block; font-size: 0.875rem; font-weight: 700; color: #2563eb; margin-bottom: 0.5rem; }
.tp-process-body h3 { font-size: 1.125rem; font-weight: 700; color: #0f172a; margin: 0.5rem 0 0.5rem; }
.tp-process-body p { font-size: 0.875rem; color: #475569; line-height: 1.55; margin: 0; }

.tp-mfg-grid { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 3rem; align-items: center; }
@media (max-width: 1024px) { .tp-mfg-grid { grid-template-columns: 1fr; } }
.tp-mfg-video { background: #020617; border-radius: 20px; overflow: hidden; box-shadow: 0 18px 50px -24px rgba(15,23,42,0.28); }
.tp-mfg-video video { aspect-ratio: 16/9; width: 100%; height: auto; display: block; }

.tp-evidence-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 3rem; align-items: start; }
@media (max-width: 1024px) { .tp-evidence-grid { grid-template-columns: 1fr; } }
.tp-evidence-cards { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
@media (max-width: 640px) { .tp-evidence-cards { grid-template-columns: 1fr; } }
.tp-evidence-card { background: #f8fafc; padding: 1.5rem; border-radius: 16px; }
.tp-evidence-card :global(svg) { margin-bottom: 0.75rem; }
.tp-evidence-card h3 { font-size: 1.0625rem; font-weight: 700; color: #0f172a; margin: 0 0 0.5rem; }
.tp-evidence-card p { font-size: 0.875rem; color: #475569; line-height: 1.55; margin: 0; }

.tp-control-card { padding: 1.75rem 1.5rem; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; transition: all 0.2s; }
.tp-control-card:hover { background: rgba(255,255,255,0.06); border-color: rgba(96,165,250,0.3); transform: translateY(-3px); }
.tp-control-card :global(svg) { margin-bottom: 0.85rem; }
.tp-control-card h3 { color: #fff; font-size: 1.0625rem; margin: 0 0 0.5rem; }
.tp-control-card p { color: #cbd5e1; font-size: 0.9375rem; line-height: 1.55; margin: 0; }

.tp-faq-grid { display: grid; grid-template-columns: 1fr; gap: 0.75rem; max-width: 920px; }
.tp-faq { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; transition: all 0.2s; }
.tp-faq[open] { box-shadow: 0 10px 25px -5px rgba(15,23,42,0.06); border-color: #2563eb; }
.tp-faq summary { display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 1.25rem 1.5rem; cursor: pointer; font-size: 1.0625rem; font-weight: 600; color: #0f172a; list-style: none; }
.tp-faq summary::-webkit-details-marker { display: none; }
.tp-faq-icon { color: #2563eb; font-size: 1.5rem; flex-shrink: 0; transition: transform 0.3s; font-weight: 300; }
.tp-faq[open] .tp-faq-icon { transform: rotate(45deg); }
.tp-faq-a { padding: 0 1.5rem 1.25rem; border-top: 1px solid #f1f5f9; }
.tp-faq-a p { margin: 0; padding-top: 1rem; font-size: 0.9375rem; color: #475569; line-height: 1.7; }

.tp-rfq-sec { padding: 5rem 0; }
.tp-rfq-grid { display: grid; grid-template-columns: 1fr 1.15fr; gap: 3rem; align-items: start; }
@media (max-width: 1024px) { .tp-rfq-grid { grid-template-columns: 1fr; gap: 2rem; } }
.tp-rfq-side h2 { margin: 0 0 1rem; }
.tp-rfq-checks { list-style: none; padding: 0; margin: 1.5rem 0; display: flex; flex-direction: column; gap: 0.85rem; }
.tp-rfq-checks li { display: flex; align-items: center; gap: 0.6rem; color: rgba(255,255,255,0.9); font-size: 0.9375rem; }
.tp-rfq-prefer { color: rgba(255,255,255,0.85); font-size: 0.9375rem; margin: 1rem 0 0.5rem; }
.tp-rfq-prefer a { color: #93c5fd; font-weight: 600; text-decoration: underline; }
.tp-rfq-hq { color: rgba(255,255,255,0.7); font-size: 0.875rem; margin: 0.5rem 0 0; }

.tp-rfq-form { background: #fff; border-radius: 16px; padding: 2.5rem; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }
.tp-rfq-form-title { font-size: 1.5rem; font-weight: 700; color: #0f172a; margin: 0 0 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid #e2e8f0; }
.tp-rfq-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 0; }
@media (max-width: 640px) { .tp-rfq-row { grid-template-columns: 1fr; } }
.tp-rfq-field { margin-bottom: 1.25rem; }
.tp-rfq-field label { display: block; font-size: 0.875rem; font-weight: 600; color: #0f172a; margin-bottom: 0.5rem; }
.tp-rfq-field label span { color: #dc2626; margin-left: 2px; }
.tp-rfq-field input[type=text], .tp-rfq-field input[type=email], .tp-rfq-field select, .tp-rfq-field textarea {
  width: 100%; padding: 0.75rem 1rem; font-size: 0.9375rem; color: #0f172a; background: #fff;
  border: 1px solid #cbd5e1; border-radius: 8px; transition: all 0.15s; font-family: inherit;
}
.tp-rfq-field input:focus, .tp-rfq-field select:focus, .tp-rfq-field textarea:focus {
  outline: none; border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37,99,235,0.15);
}
.tp-rfq-field textarea { resize: vertical; min-height: 120px; }
.tp-rfq-field select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%236B7280'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd' /%3E%3C/svg%3E");
  background-repeat: no-repeat; background-position: right 0.75rem center; background-size: 1.25rem; padding-right: 2.5rem;
}
.tp-rfq-upload { position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2rem; background: #f8fafc; border: 2px dashed #cbd5e1; border-radius: 12px; text-align: center; cursor: pointer; transition: all 0.15s; }
.tp-rfq-upload:hover { border-color: #2563eb; background: #eff6ff; }
.tp-rfq-upload input[type=file] { position: absolute; inset: 0; opacity: 0; cursor: pointer; }
.tp-rfq-upload-icon { color: #2563eb; margin-bottom: 0.5rem; }
.tp-rfq-upload-text { font-size: 0.8125rem; color: #64748b; }
.tp-rfq-upload-hint { font-size: 0.75rem; color: #94a3b8; margin: 0.5rem 0 0; }
.tp-rfq-privacy { font-size: 0.75rem; color: #64748b; text-align: center; margin: 1rem 0 0; }
</style>
`;

  writeFileSync(outFile, page);
  console.log(`�?Generated: ${outFile}`);
}

// Generate all product pages
for (const slug of Object.keys(configs)) {
  generatePage(slug);
}

console.log('\n�?All product pages generated!');

