/**
 * Content model of the lead dioxide coated titanium anode page.
 *
 * The subject is the PbO₂ coated titanium anode — a legacy coating family
 * with a specific profile of use: it is still the reference for a number of
 * acidic, oxidising duties where the alternative coatings did not hold up.
 *
 * The subject makes the copy different from the rest of the family. A lead
 * dioxide anode is not a normal purchase. It carries a heavy-metal hazard
 * profile, it puts an obligation on the buyer and the supplier around
 * handling, disposal and end of life, and it is only the right answer for a
 * defined set of duties. The page therefore spends most of its space on the
 * boundaries: what the coating does, where it is still selected, what the
 * lead profile means for the installation and for the end of life, and what
 * we need before we will quote it.
 */

import { pbO2Sections, pbO2Faq } from './pb-o2-anode-sections';
import type { PageModel } from './coating-page-model';

/** The page model of the PbO₂ coated titanium anode page. */
export type PbO2Page = PageModel;

export const pbO2Page: PbO2Page = {
  slug: 'lead-dioxide-anode',
  name: 'Lead Dioxide Coated Titanium Anode',
  seoTitle: 'Lead Dioxide Coated Titanium Anodes',
  description:
    'PbO2 coated titanium anodes for acidic oxidising duties: coating performance, the lead hazard profile, handling and end-of-life obligations, and the data needed to quote.',
  hero: {
    eyebrow: 'PbO₂ Coated Titanium Anode · Legacy Coating, Reviewed Case by Case',
    title: 'Lead Dioxide Coated Titanium Anodes',
    lead:
      'We supply lead dioxide coated titanium anodes, and we review every application individually before we will quote one. PbO₂ is still the reference coating for a defined set of acidic, strongly oxidising duties. It also carries a heavy-metal hazard profile that puts an obligation on the installer, on the operator and on the end of life of the electrode — and that obligation has to be settled before the anode is made, not after it is in the cell.',
    boundary:
      'Engineering and compliance boundary: this is not a coating to specify by analogy with a mixed metal oxide anode. The electrolyte, the duty, the lead exposure route, the handling regime, the disposal route and the end-of-life plan are reviewed together. If the duty can be met by a lead-free coating, we will say so — that is part of the review, not a sales position.',
    image: '/images/titanium-anode/pbo2-coated-anodes.webp',
    imageAlt: 'Lead dioxide coated titanium anodes',
    thumbs: [
      {
        src: '/images/titanium-anode/coating-process-loading-control.webp',
        alt: 'Coating loading control during the PbO₂ coating process',
      },
      {
        src: '/images/titanium-anode/surface-preparation-control.webp',
        alt: 'Surface preparation before the PbO₂ layer is applied',
      },
      {
        src: '/images/titanium-anode/geometry-electrical-connection-inspection.webp',
        alt: 'Inspection of the electrical connection on a coated titanium anode',
      },
      {
        src: '/images/titanium-anode/titanium-substrate-traceability.webp',
        alt: 'Substrate traceability for a coated titanium anode',
      },
    ],
    stats: [
      { value: 'PbO₂ on Ti', label: 'Lead dioxide layer on a titanium substrate' },
      { value: 'Case by case', label: 'Every application reviewed before quoting' },
      { value: 'Acidic + oxidising', label: 'The medium where this coating is selected' },
      { value: 'Full records', label: 'Batch traceability and inspection documentation' },
    ],
    primaryCta: 'Request a Case Review',
    secondaryCta: 'View Technical Data',
  },
  nav: [
    { href: '#definition', label: 'Definition' },
    { href: '#chemistry', label: 'Coating Chemistry' },
    { href: '#technical-data', label: 'Technical Data' },
    { href: '#hazard', label: 'Lead Profile' },
    { href: '#applications', label: 'Applications' },
    { href: '#geometries', label: 'Geometries' },
    { href: '#end-of-life', label: 'End of Life' },
    { href: '#faq', label: 'FAQ' },
    { href: '#rfq', label: 'Request a Quote' },
  ],
  sections: pbO2Sections,
  faq: pbO2Faq,
  faqHeading: 'PbO₂ Coated Titanium Anode FAQs',
  faqLead:
    'The questions asked before a lead dioxide anode is specified, answered with the reasoning and with the obligations stated plainly.',
  bandClass: 'scroll-mt-24 bg-slate-950 py-20 text-white lg:py-28',
  product: true,
  category: 'Titanium Anodes',
  rfq: {
    eyebrow: 'Case Review',
    title: 'Send the Electrolyte and the Handling Regime',
    lead:
      'A lead dioxide anode is quoted against a duty and against a handling regime, not against a size. Tell us what the cell sees, how the electrodes are handled and removed, how they are disposed of, and what your local rules require — then we answer with a coating definition, a substrate grade, a geometry proposal and the documentation scope.',
    points: [
      'Electrolyte composition, acidity, temperature and the contaminants present',
      'Operating current or current-density basis and the daily schedule',
      'How the electrodes are installed, removed, cleaned and stored',
      'The occupational hygiene regime in place around the cell',
      'The disposal or recycling route available at end of life',
      'Required documentation for your own compliance file',
    ],
    formTitle: 'Request a PbO₂ Anode Case Review',
    formSubtitle: 'A project engineer responds within 1 business day.',
  },
};
