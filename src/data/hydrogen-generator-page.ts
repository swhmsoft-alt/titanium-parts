/**
 * Content model of the PEM hydrogen generator page.
 *
 * The subject is laboratory and OEM supply. The page is written around the
 * gas rather than around the machine: what the downstream instrument needs,
 * what the delivery point has to deliver, and the case where a cylinder is
 * the better answer. That honesty is the part a supplier has to earn, and it
 * is why the page states the limits instead of only the benefits.
 */

import { hydrogenSections, hydrogenFaq } from './hydrogen-generator-sections';
import type { PageModel } from './coating-page-model';

/** The page model of the PEM hydrogen generator page. */
export type HydrogenGeneratorPage = PageModel;

export const hydrogenGeneratorPage: HydrogenGeneratorPage = {
  slug: 'hydrogen-generators',
  name: 'PEM Hydrogen Generators',
  seoTitle: 'PEM Hydrogen Generator | High-Purity Lab Supply',
  description:
    'On-site PEM hydrogen generators for laboratory, GC-MS, fuel cell testing and OEM supply: purity, oxygen content, dew point, pressure stability and stack life.',
  hero: {
    eyebrow: 'PEM Hydrogen Generator · Laboratory & OEM Supply',
    title: 'On-Site Hydrogen Without a Cylinder in the Room',
    lead:
      'We supply PEM hydrogen generators for laboratories, analytical instruments, fuel cell test rigs and OEM product lines. The machine makes the gas on site, so there is no delivery schedule, no stored compressed gas and no interruption when a cylinder runs out at the wrong moment. What it does introduce is a specification of its own: the gas at your instrument has to meet a purity, an oxygen limit, a dew point and a pressure stability, and the machine has to be able to hold them.',
    boundary:
      'Engineering boundary: an on-site generator is not automatically the better answer. It earns its place where the gas is consumed continuously, where cylinder deliveries interrupt the work, or where stored compressed gas is a safety or regulatory burden. For occasional use, for an instrument with its own buffering, or where no demineralised water is available, a cylinder is simpler and cheaper — and we will tell you so rather than supply a machine that is not the right instrument. The other boundary is that the gas specification belongs to the downstream process, not to the generator: state the instrument and the method, and the machine follows from that.',
    image: '/images/products/pem-electrolyzer.webp',
    imageAlt: 'PEM hydrogen generator for laboratory supply',
    thumbs: [
      {
        src: '/images/scenarios/green-hydrogen.webp',
        alt: 'On-site hydrogen generation system',
      },
      {
        src: '/images/service/oem-supply.webp',
        alt: 'OEM supply of hydrogen generation modules',
      },
      {
        src: '/images/service/inspection-docs.webp',
        alt: 'Inspection and documentation of the supplied generator',
      },
      {
        src: '/images/industries/energy-hydrogen.webp',
        alt: 'Hydrogen production equipment for energy applications',
      },
    ],
    stats: [
      { value: '> 99.99 %', label: 'Typical purity at the outlet, after purification' },
      { value: 'At the outlet', label: 'Where every gas figure is measured and quoted' },
      { value: 'Dew point stated', label: 'Moisture control, not assumed' },
      { value: 'Stack as consumable', label: 'Life and replacement quoted with the basis' },
    ],
    primaryCta: 'Send Your Instrument Details',
    secondaryCta: 'View Technical Data',
  },
  nav: [
    { href: '#definition', label: 'Definition' },
    { href: '#chemistry', label: 'Purity' },
    { href: '#technical-data', label: 'Technical Data' },
    { href: '#performance', label: 'Behaviour' },
    { href: '#applications', label: 'Applications' },
    { href: '#families', label: 'Configurations' },
    { href: '#quality', label: 'Quality' },
    { href: '#before-quote-boundary', label: 'Before a Quote' },
    { href: '#faq', label: 'FAQ' },
    { href: '#rfq', label: 'Request a Quote' },
  ],
  sections: hydrogenSections,
  faq: hydrogenFaq,
  faqHeading: 'PEM Hydrogen Generator FAQs',
  faqLead:
    'The questions asked before a laboratory hydrogen generator is specified, answered with the reasoning rather than with a feature list.',
  bandClass: 'scroll-mt-24 bg-slate-950 py-20 text-white lg:py-28',
  product: true,
  category: 'Hydrogen Generators',
  rfq: {
    eyebrow: 'Application Review',
    title: 'Send the Instrument, the Flow and the Duty Cycle',
    lead:
      'A comparable quotation starts with the instrument the gas serves, the flow and the duty cycle, the purity and oxygen content the process needs, the dew point, the delivery pressure and the outlet interface. Give us those and we answer with the configuration, the gas specification at the delivery point and the document scope.',
    points: [
      'The instrument or process the gas serves, and the method it has to satisfy',
      'The flow required and the duty cycle, including how often the machine is idle',
      'The purity and the oxygen content the process needs',
      'The dew point requirement and the humidity the instrument is sensitive to',
      'The delivery pressure and how stable it has to be at the outlet',
      'The outlet fitting, the tubing route and the distance to the instrument',
      'The demineralised water and the utilities available at site',
      'The acceptance criteria and the document scope at delivery',
    ],
    formTitle: 'Send Inquiry',
    formSubtitle: 'Tell us the required hydrogen flow, where the gas will be used and which utilities are available.',
  },
};
