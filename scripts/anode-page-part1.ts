// Part 1: frontmatter + hero + warning + reaction-selection + coating-families
const heroAndTop = `---
import BaseLayout from '../../layouts/BaseLayout.astro';
import RFQForm from '../../components/RFQForm.astro';
import Icon from '../../components/Icon.astro';
import { reactionRows, coatings, scopeSteps } from '../../data/titanium-anode-page-1';
import { forms } from '../../data/titanium-anode-page-2';
import { risks, processSteps } from '../../data/titanium-anode-page-3';
import { evidenceCards, applications } from '../../data/titanium-anode-page-4';
import { beforeQuoteDo, beforeQuoteDont, recoatingCards } from '../../data/titanium-anode-page-5';
import { faqItems } from '../../data/titanium-anode-page-6';
import { faqItemsExtra, quickPoints, rfqChecks } from '../../data/titanium-anode-page-7';
const allFaq = [...faqItems, ...faqItemsExtra];
---
<BaseLayout title="Titanium Anode Manufacturer | MMO, Pt/Ti & Custom | HELE" description="Source custom MMO, Ru-Ir, Ir-Ta and platinized titanium anodes by reaction, electrolyte, current density, geometry and design-life requirements. Send your process data for engineering review.">

  <!-- HERO ====================================================== -->
  <section id="anode-hero" class="anode-hero">
    <div class="anode-hero-bg" aria-hidden="true">
      <img src="/images/titanium-anode/titanium-anode-manufacturer.webp" alt="Custom MMO, platinized and specialty coated titanium anodes" loading="eager" decoding="async" />
      <div class="anode-hero-overlay"></div>
    </div>
    <div class="anode-hero-inner">
      <div class="anode-hero-text">
        <p class="anode-eyebrow-light">MMO · Ru-Ir · Ir-Ta · Platinized Titanium · Custom Assemblies</p>
        <h1 class="anode-hero-title">Custom Titanium Anodes for Industrial Electrochemical Systems</h1>
        <p class="anode-hero-lede">Engineered MMO, Ru-Ir, Ir-Ta, and Platinized titanium electrodes matched to your exact electrolyte, current density, and design-life targets to minimize replacement risks and operational downtime.</p>
        <div class="anode-hero-cta">
          <a href="#reaction-selection" class="btn btn-primary">Start with the Target Reaction</a>
          <a href="#anode-rfq" class="btn btn-secondary-outline">Send Drawing or Process Data</a>
        </div>
      </div>
      <ul class="anode-quick-list">
        {quickPoints.map((p) => (
          <li>
            <span class="anode-quick-tag">{p.tag}</span>
            <span class="anode-quick-text">{p.text}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>

  <!-- WARNING BAR ================================================ -->
  <section class="anode-warning" aria-label="Important note">
    <div class="anode-warning-inner">
      <strong>Before requesting a quote:</strong> an industry name alone does not define an anode. "MMO for water treatment," "high coating," "long life" or a current-density value without an active-area basis cannot be used to compare products reliably.
    </div>
  </section>

  <!-- SOLUTION SELECTION GUIDE (reaction-selection) ============== -->
  <section id="reaction-selection" class="anode-section">
    <div class="anode-section-inner">
      <header class="anode-section-head">
        <p class="anode-eyebrow">Solution Selection Guide</p>
        <h2>Choose the Starting Point by Target Reaction</h2>
        <p class="anode-section-lede">The table is an engineering-review starting point, not an automatic coating recommendation. Final selection depends on the full process window, electrical duty, geometry, life basis and qualification plan.</p>
      </header>
      <div class="anode-table-wrap" role="region" aria-label="Anode selection by target reaction" tabindex="0">
        <table class="anode-decision-table">
          <thead><tr><th>Target reaction or process</th><th>Candidate family for review</th><th>Inputs that change the decision</th><th>Common geometry and connection questions</th><th>Qualification to agree</th></tr></thead>
          <tbody>
            {reactionRows.map((r) => (
              <tr>
                <td><strong>{r.target}</strong></td>
                <td>{r.family}</td>
                <td>{r.inputs}</td>
                <td>{r.geometry}</td>
                <td>{r.qualification}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p class="anode-section-foot">The customer or system designer remains responsible for confirming the complete cell and process design. HELE's review covers the agreed anode supply and qualification boundary.</p>
    </div>
  </section>

  <!-- COATING FAMILIES ============================================ -->
  <section id="coating-families" class="anode-section anode-section-alt">
    <div class="anode-section-inner">
      <header class="anode-section-head">
        <p class="anode-eyebrow">Coating Families</p>
        <h2>Compare the Active Surface Against the Process Window</h2>
        <p class="anode-section-lede">Coating names are not interchangeable specifications. Exact composition, loading or thickness basis, active area, service conditions and inspection requirements are confirmed for each order.</p>
      </header>
      <div class="anode-coatings-grid">
        {coatings.map((c) => (
          <a href={c.href} class="anode-coating-card">
            <div class="anode-coating-img"><img src={c.img} alt={c.alt} loading="lazy" decoding="async" /></div>
            <div class="anode-coating-body">
              <h3>{c.title}</h3>
              <p class="anode-coating-review">Review: {c.review}</p>
              <p class="anode-coating-text">{c.body}</p>
              <span class="anode-card-link">Review {c.title.replace(' Anodes','').replace('Anodes','').trim()} →</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
`;
console.log('part1 size:', heroAndTop.length);
