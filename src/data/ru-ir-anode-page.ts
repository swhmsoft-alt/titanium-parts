/**
 * Content model of the Ru-Ir coated titanium anode page.
 *
 * The page is rendered by `src/components/anode/RuIrAnodePage.astro` with the
 * same utilities the MMO family pages use (`src/styles/mmo-reference.css`,
 * scoped under `.mmo-page`), so the ruthenium page reads as one member of the
 * same product cluster.
 *
 * Writing rules applied to the copy:
 *   - people first: the hero states the buyer's problem, not the product;
 *   - experience: every claim is tied to a condition (current density,
 *     chloride level, pH, temperature, duty cycle) instead of a slogan;
 *   - no invented company metrics: reference figures are labelled as
 *     reference windows and are confirmed against the actual duty.
 */

import { ruIrSections, ruIrFaq, type RuIrSection } from './ru-ir-anode-sections';
import type { PageModel } from './coating-page-model';

export type { RuIrBlock, RuIrSection } from './ru-ir-anode-sections';

/** The page model of the Ru-Ir coated titanium anode page. */
export type RuIrPage = PageModel;

export const ruIrPage: RuIrPage = {
  slug: 'ruthenium-coated-titanium-anodes',
  name: 'Ru-Ir Coated Titanium Anode',
  seoTitle: 'Ru-Ir Coated Titanium Anodes for Chlorine Evolution',
  description:
    'Ru-Ir MMO coated titanium anodes for chlorine evolution: coating ratio, loading, substrate grade, geometries, inspection records and the data needed to quote.',
  hero: {
    eyebrow: 'Ru-Ir Coated Titanium Anode Manufacturer · Chlorine Evolution',
    title: 'Ruthenium Coated Titanium Anodes for Chlorine Evolution',
    lead:
      'We manufacture ruthenium–iridium mixed metal oxide coated titanium anodes for chlorine evolution, electrochlorination and hypochlorite generation. The Ru:Ir ratio, the coating loading, the titanium grade and the geometry are set against your electrolyte and current density — not against a product name.',
    boundary:
      'Engineering boundary: “ruthenium coated” does not define an anode on its own. Chloride concentration, pH, temperature, current density, duty cycle and the required service life decide the coating ratio, the loading and the substrate grade. We confirm those against your duty before anything is released for manufacture.',
    image: '/images/titanium-anode/ru-ir-mmo-anodes.webp',
    imageAlt: 'Ru-Ir mixed metal oxide coated titanium anodes',
    thumbs: [
      {
        src: '/images/titanium-anode/coating-process-loading-control.webp',
        alt: 'Coating process and loading control on a titanium substrate',
      },
      {
        src: '/images/titanium-anode/surface-preparation-control.webp',
        alt: 'Surface preparation of the titanium substrate before coating',
      },
      {
        src: '/images/titanium-anode/titanium-substrate-traceability.webp',
        alt: 'Titanium substrate traceability and batch record review',
      },
      {
        src: '/images/titanium-anode/geometry-electrical-connection-inspection.webp',
        alt: 'Geometrical and electrical connection inspection of a coated anode',
      },
    ],
    stats: [
      { value: 'RuO₂ – IrO₂', label: 'Mixed metal oxide coating system' },
      { value: '1–10 A/dm²', label: 'Reference chlorine-evolution current window' },
      { value: 'Grade 1 / 2 Ti', label: 'Titanium substrate grades supplied' },
      { value: 'g/cm²', label: 'Coating loading basis, defined per order' },
    ],
    primaryCta: 'Send Your Electrolyte Data',
    secondaryCta: 'View Technical Data',
  },
  nav: [
    { href: '#definition', label: 'Definition' },
    { href: '#chemistry', label: 'Coating Chemistry' },
    { href: '#technical-data', label: 'Technical Data' },
    { href: '#performance', label: 'Service Life' },
    { href: '#applications', label: 'Applications' },
    { href: '#geometries', label: 'Geometries' },
    { href: '#quality', label: 'Quality Records' },
    { href: '#faq', label: 'FAQ' },
    { href: '#rfq', label: 'Request a Quote' },
  ],
  sections: ruIrSections,
  faq: ruIrFaq,
  faqHeading: 'Ru-Ir Coated Titanium Anode FAQs',
  faqLead:
    'These are the questions engineers ask before an order is released, answered with the reasoning rather than with a catalogue line.',
  bandClass: 'scroll-mt-24 bg-slate-950 py-20 text-white lg:py-28',
  product: true,
  category: 'Titanium Anodes',
  rfq: {
    eyebrow: 'Engineering Review',
    title: 'Send Us the Electrolyte, Not Just the Anode Size',
    lead:
      'Tell us what the cell actually sees. We review the electrolyte, the current density, the geometry and the duty, then answer with a coating definition, a substrate grade, a geometry proposal and the documentation scope that goes with it.',
    points: [
      'Electrolyte chemistry, chloride level, pH and temperature',
      'Operating current or current-density basis and the daily schedule',
      'Required service life and the maintenance window you can accept',
      'Geometry, active surface area and the mechanical installation',
      'Electrical connection, masking zones and the available space',
      'Inspection, certificate and document scope for acceptance',
    ],
    formTitle: 'Request a Ru-Ir Anode Quotation',
    formSubtitle: 'A project engineer responds within 1 business day.',
  },
};
