/**
 * Content model of the Ir-Ta coated titanium anode page.
 *
 * The page is rendered by `src/components/anode/ProductPage.astro` with the
 * same utilities the MMO family pages use (`src/styles/mmo-reference.css`,
 * scoped under `.mmo-page`), so the iridium page reads as one member of the
 * same product cluster.
 *
 * The subject is the oxygen-evolution side of the coating family, which is a
 * different engineering problem from the chlorine side covered by the
 * ruthenium page: the deciding variables here are the pH of the electrolyte,
 * the contaminant behaviour, the shutdown and re-start behaviour and the
 * mass transfer, not the chloride level.
 *
 * Writing rules applied to the copy:
 *   - people first: the hero states the buyer's problem, not the product;
 *   - experience: every claim is tied to a condition (current density, pH,
 *     temperature, duty cycle, contaminant behaviour);
 *   - accuracy: reference figures are labelled as reference windows and are
 *     confirmed against the actual duty;
 *   - no invented company metrics.
 */

import { irTaSections, irTaFaq } from './ir-ta-anode-sections';
import type { PageModel } from './coating-page-model';

/** The page model of the Ir-Ta coated titanium anode page. */
export type IrTaPage = PageModel;

export const irTaPage: IrTaPage = {
  slug: 'iridium-oxide-coated-titanium-anodes',
  name: 'Ir-Ta Coated Titanium Anode',
  seoTitle: 'Ir-Ta Coated Titanium Anodes for Oxygen Evolution',
  description:
    'Ir-Ta and iridium-based MMO titanium anodes for oxygen evolution and advanced oxidation: coating system, substrate, loading, geometries and the data needed to quote.',
  hero: {
    eyebrow: 'Ir-Ta Coated Titanium Anode Manufacturer · Oxygen Evolution',
    title: 'Iridium Oxide Coated Titanium Anodes for Oxygen Evolution',
    lead:
      'We manufacture iridium-based mixed metal oxide coated titanium anodes for oxygen evolution, advanced oxidation and electrolysis duties where chlorine is not the product. Which iridium system is right depends on the pH of the electrolyte, the contaminants it carries, what happens when the cell is shut down and how much oxygen the downstream step has to remove — not on the name of the coating.',
    boundary:
      'Engineering boundary: “iridium oxide coated” does not define an anode on its own. IrO₂ with Ta₂O₅, with SnO₂ and with ZrO₂ behave differently in acid and in alkali, at different contaminant loads and under different duty cycles. The pH, the electrolyte chemistry, the current density, the shutdown behaviour and the required service life are confirmed against your duty before anything is released for manufacture.',
    image: '/images/titanium-anode/ir-ta-mmo-anodes.webp',
    imageAlt: 'Ir-Ta mixed metal oxide coated titanium anodes',
    thumbs: [
      {
        src: '/images/titanium-anode/electrowinning-surface-finishing.webp',
        alt: 'Anode surface finishing for an oxygen-evolution duty',
      },
      {
        src: '/images/titanium-anode/iccp-marine-protection.webp',
        alt: 'Titanium anodes in a marine installation',
      },
      {
        src: '/images/titanium-anode/disc-special-geometry.webp',
        alt: 'Special geometry titanium anode for a project-specific cell',
      },
      {
        src: '/images/titanium-anode/titanium-anode-manufacturer.webp',
        alt: 'Custom coated titanium anodes for a project-specific duty',
      },
    ],
    stats: [
      { value: 'IrO₂ – Ta₂O₅', label: 'Primary coating system for oxygen evolution' },
      { value: 'Acid + alkali', label: 'Media the coating system is selected against' },
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
  sections: irTaSections,
  faq: irTaFaq,
  faqHeading: 'Ir-Ta Coated Titanium Anode FAQs',
  faqLead:
    'The questions a process engineer asks before an iridium coating is released for manufacture, answered with the reasoning rather than with a catalogue line.',
  bandClass: 'scroll-mt-24 bg-slate-950 py-20 text-white lg:py-28',
  product: true,
  category: 'Titanium Anodes',
  rfq: {
    eyebrow: 'Engineering Review',
    title: 'Send the Electrolyte, Not Just the Anode Size',
    lead:
      'Tell us what the cell actually sees. We review the electrolyte, the pH, the current density, the duty cycle and the geometry, then answer with a coating definition, a substrate grade, a geometry proposal and the documentation scope that goes with it.',
    points: [
      'Electrolyte composition, pH, temperature and the contaminant species present',
      'Operating current or current-density basis and the daily schedule',
      'Shutdown, standby and re-start behaviour of the cell',
      'Required service life and the maintenance window you can accept',
      'Geometry, active surface area and the mechanical installation',
      'Electrical connection, masking zones and the available space',
    ],
    formTitle: 'Request an Ir-Ta Anode Quotation',
    formSubtitle: 'A project engineer responds within 1 business day.',
  },
};
