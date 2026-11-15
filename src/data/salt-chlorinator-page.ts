/**
 * Content model of the salt chlorinator page.
 *
 * The subject is a cell rather than a machine, and the buyer is usually an
 * operator with an existing installation. The page is therefore written around
 * the questions that decide whether the equipment works — the brine, the
 * water chemistry, the residual and the maintenance — and it states plainly
 * where the supply boundary sits, because that is where pool projects most
 * often go wrong.
 */

import { saltChlorinatorSections, saltChlorinatorFaq } from './salt-chlorinator-sections';
import type { PageModel } from './coating-page-model';

/** The page model of the salt chlorinator page. */
export type SaltChlorinatorPage = PageModel;

export const saltChlorinatorPage: SaltChlorinatorPage = {
  slug: 'salt-chlorinator-for-pool',
  name: 'Salt Chlorinators For Pools',
  seoTitle: 'Salt Chlorinator for Pool | Titanium Cells',
  description:
    'Salt chlorinators for pools and water treatment: titanium electrolytic cells, replacement cells, brine output, pH and residual limits, polarity reversal and OEM supply.',
  hero: {
    eyebrow: 'Salt Chlorinator · Pool & Water Treatment',
    title: 'Chlorine Made On Site, From A Cell You Can Actually Verify',
    lead:
      'We supply salt chlorinators for commercial pools, water parks, hotels and aquatic facilities, together with replacement cells for existing installations and platforms for OEM brands. The cell is what most buyers ask about, but whether the pool holds its residual depends on the brine, the water chemistry, the dosing and the maintenance — and a cell quotation that says none of those is not yet a specification.',
    boundary:
      'Engineering boundary: on-site electrolysis is not automatically the better answer. It earns its place where the chlorine demand is continuous and moderate, where delivered chemical handling is a real burden, and where there is a maintenance routine that will keep the cell clean. For occasional use, for a small domestic pool, or for a large plant with a steady and high demand, bought-in hypochlorite is simpler and often cheaper — and we will tell you so. The other boundary is that a cell is not a chlorination system: the pump, the probe, the controller and the pool chemistry are a separate supply, and the page keeps them apart.',
    image: '/images/applications/electrochlorination.webp',
    imageAlt: 'Electrochlorination cell for on-site chlorine generation',
    thumbs: [
      {
        src: '/images/applications/water-treatment.webp',
        alt: 'Water treatment plant using on-site generated chlorine',
      },
      {
        src: '/images/industries/water-treatment.webp',
        alt: 'Water treatment equipment for a commercial installation',
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
      { value: 'Output at conditions', label: 'Grams per hour quoted with the brine concentration and temperature' },
      { value: 'Titanium substrate', label: 'Bipolar plate cell with a coated anode and an uncoated cathode' },
      { value: 'pH stated', label: 'Every chlorine figure is stated with the pH range it applies to' },
      { value: 'Cell life in hours', label: 'Quoted with the running hours, not with the calendar' },
    ],
    primaryCta: 'Send Your Pool And Brine Data',
    secondaryCta: 'View Technical Data',
  },
  nav: [
    { href: '#definition', label: 'Definition' },
    { href: '#chemistry', label: 'Chemistry' },
    { href: '#technical-data', label: 'Technical Data' },
    { href: '#performance', label: 'Behaviour' },
    { href: '#families', label: 'Configurations' },
    { href: '#applications', label: 'Applications' },
    { href: '#quality', label: 'Quality' },
    { href: '#before-quote-boundary', label: 'Before a Quote' },
    { href: '#faq', label: 'FAQ' },
    { href: '#rfq', label: 'Request a Quote' },
  ],
  sections: saltChlorinatorSections,
  faq: saltChlorinatorFaq,
  faqHeading: 'Salt Chlorinator FAQs',
  faqLead:
    'The questions asked before a salt chlorinator is specified, answered with the reasoning rather than with a feature list.',
  bandClass: 'scroll-mt-24 bg-slate-950 py-20 text-white lg:py-28',
  product: true,
  category: 'Salt Chlorinators',
  rfq: {
    eyebrow: 'Application Review',
    title: 'Send the Pool, the Brine and the Duty You Actually Run',
    lead:
      'A comparable quotation starts with the pool volume and the circulation flow, the residual you have to hold, the pH and the calcium, the brine available at site, the output required and the hours of running. Give us those and we answer with the cell, the coating, the output at the stated conditions, the connection and the document scope.',
    points: [
      'The pool volume, the circulation flow and the pipework the cell has to work with',
      'The free chlorine residual to be held and the pH range you operate to',
      'The water chemistry: the calcium hardness, the alkalinity and the fill water source',
      'The brine concentration available and how the saturator is arranged',
      'The output required and the number of running hours per day',
      'Whether the cell is a new installation or a replacement, and the existing drawing',
      'The control signal, the connection and the space available for the cell',
      'The inspection and the document scope expected at acceptance',
    ],
    formTitle: 'Request a Salt Chlorinator Quote',
    formSubtitle: 'Tell us the pool volume, the brine available and the residual you need to hold.',
  },
};
