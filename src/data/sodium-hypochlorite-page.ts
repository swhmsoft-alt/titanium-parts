/**
 * Content model of the sodium hypochlorite generator page.
 *
 * The subject is a plant rather than a component, and the buyer is usually a
 * process engineer with a demand to meet and a plant room to fit it into. The
 * page is written around the three figures that decide whether the plant
 * works — the production rate, the current efficiency and the delivery
 * strength — and it states the supply boundary explicitly, because on a
 * system page that boundary is where projects most often go wrong.
 */

import { hypochloriteSections, hypochloriteFaq } from './sodium-hypochlorite-sections';
import type { PageModel } from './coating-page-model';

/** The page model of the sodium hypochlorite generator page. */
export type HypochloritePage = PageModel;

export const hypochloritePage: HypochloritePage = {
  slug: 'sodium-hypochlorite-generator',
  name: 'Sodium Hypochlorite Generators',
  seoTitle: 'Sodium Hypochlorite Generator | On-Site Plants',
  description:
    'On-site sodium hypochlorite generators for water treatment and disinfection: cell sizing, current efficiency, production strength, delivery strength, cooling and storage.',
  hero: {
    eyebrow: 'Sodium Hypochlorite Generator · On-Site Chlorine',
    title: 'Chlorine Made On Site, Without Delivering A Hazardous Chemical',
    lead:
      'We supply sodium hypochlorite generators for water treatment, food processing, chemical production and disinfection systems. The plant makes the disinfectant on site as a liquid, which removes the delivery, the storage and the handling of compressed chlorine gas. What it adds instead is a set of chemical realities that have to be managed: the product decays, the brine sets the ceiling, hydrogen has to be vented and the storage decides what strength actually reaches the process.',
    boundary:
      'Engineering boundary: an on-site generator is not automatically the better answer. It earns its place where the chlorine demand is continuous and moderate, where the delivered chemical carries a real handling and storage burden, and where the site can keep a routine of brine preparation, plate cleaning and strength testing. For an intermittent small demand, or for a very large and steady demand, purchased hypochlorite is simpler and often cheaper — and we will tell you so. The other boundary is that the useful measure of the plant is the available chlorine at the dosing point, not the chlorine produced at the cell.',
    image: '/images/applications/electrochlorination.webp',
    imageAlt: 'On-site sodium hypochlorite generation plant',
    thumbs: [
      {
        src: '/images/applications/water-treatment.webp',
        alt: 'Water treatment plant using on-site generated chlorine',
      },
      {
        src: '/images/industries/water-treatment.webp',
        alt: 'Water treatment equipment for an industrial installation',
      },
      {
        src: '/images/service/inspection-docs.webp',
        alt: 'Inspection and documentation of the supplied cell',
      },
      {
        src: '/images/titanium-anode/platinized-titanium-anodes.webp',
        alt: 'Platinized titanium anodes used in electrolysis cells',
      },
    ],
    stats: [
      { value: 'Rate at conditions', label: 'Quoted with the brine concentration and the cell temperature' },
      { value: 'Titanium substrate', label: 'Bipolar plate cell with a coated anode and an uncoated cathode' },
      { value: 'Delivery strength', label: 'The strength at the dosing point, after the decay of the storage' },
      { value: 'Cell life in hours', label: 'Quoted with the running hours, not with the calendar' },
    ],
    primaryCta: 'Send Your Demand And Brine Data',
    secondaryCta: 'View Technical Data',
  },
  nav: [
    { href: '#definition', label: 'Definition' },
    { href: '#chemistry', label: 'Chemistry' },
    { href: '#technical-data', label: 'Technical Data' },
    { href: '#performance', label: 'Behaviour' },
    { href: '#applications', label: 'Applications' },
    { href: '#quality', label: 'Quality' },
    { href: '#before-quote-boundary', label: 'Before a Quote' },
    { href: '#faq', label: 'FAQ' },
    { href: '#rfq', label: 'Request a Quote' },
  ],
  sections: hypochloriteSections,
  faq: hypochloriteFaq,
  faqHeading: 'Sodium Hypochlorite Generator FAQs',
  faqLead:
    'The questions asked before an on-site hypochlorite plant is specified, answered with the reasoning rather than with a feature list.',
  bandClass: 'scroll-mt-24 bg-slate-950 py-20 text-white lg:py-28',
  product: true,
  category: 'Hypochlorite Generators',
  rfq: {
    eyebrow: 'Application Review',
    title: 'Send the Demand, the Brine and the Storage You Actually Have',
    lead:
      'A comparable quotation starts with the chlorine demand and its daily profile, the brine concentration and the salt quality, the strength required at the dosing point, the storage volume and the residence time, the cooling available and the hydrogen venting requirement. Give us those and we answer with the cell, the coating, the production rate at the stated conditions, the expected delivery strength and the document scope.',
    points: [
      'The chlorine demand in kilograms a day and the daily and seasonal profile',
      'The brine concentration available, the salt grade and the make-up water source',
      'The required production strength and the strength needed at the dosing point',
      'The storage volume, the residence time and the ambient temperature of the plant room',
      'The cooling available and the maximum temperature you can hold at the cell',
      'The dosing method, the instrumentation and the control signal the plant has to follow',
      'Whether the plant is new or an addition to an existing installation, and the drawing',
      'The inspection and the document scope expected at acceptance',
    ],
    formTitle: 'Request a Hypochlorite Generator Quote',
    formSubtitle: 'Tell us the chlorine demand, the brine you have and the strength you need at the dosing point.',
  },
};
