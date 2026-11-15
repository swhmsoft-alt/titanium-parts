/**
 * Content model of the reference electrode page.
 *
 * The subject is the measuring element of a cathodic protection system, not
 * an anode. The page therefore has to make one boundary unmistakable: a
 * reference electrode carries no protection current and does no protective
 * work — it measures the potential of the structure so that the control
 * system knows where the structure stands.
 */

import { referenceElectrodeSections, referenceElectrodeFaq } from './reference-electrode-sections';
import type { PageModel } from './coating-page-model';

/** The page model of the reference electrode page. */
export type ReferenceElectrodePage = PageModel;

export const referenceElectrodePage: ReferenceElectrodePage = {
  slug: 'reference-electrodes',
  name: 'Reference Electrodes for Cathodic Protection',
  seoTitle: 'Reference Electrodes for Cathodic Protection',
  description:
    'Reference electrodes for cathodic protection: Ag/AgCl, zinc, MnO2 and copper/copper sulphate types, electrolyte compatibility, IR drop and installation.',
  hero: {
    eyebrow: 'Cathodic Protection · Potential Measurement',
    title: 'Reference Electrodes for Cathodic Protection Systems',
    lead:
      'A reference electrode is the instrument that tells a cathodic protection system where the structure stands. We supply the electrode families used for that measurement — silver/silver chloride, zinc, manganese dioxide and the copper/copper sulphate permanent type — and we specify them against the electrolyte, the required accuracy, the temperature and the access for installation.',
    boundary:
      'Engineering boundary: this is not an anode. A reference electrode carries no protection current and does no protective work of its own. It measures the potential of the structure so that the control system can hold the criterion, and a measured potential that is wrong, or an electrode that drifts, moves the whole system away from the protection it was designed to deliver.',
    image: '/images/industries/cathodic-protection.webp',
    imageAlt: 'Cathodic protection system with a reference electrode for potential measurement',
    thumbs: [
      {
        src: '/images/titanium-anode/geometry-electrical-connection-inspection.webp',
        alt: 'Inspection of the electrical connection on a protection electrode',
      },
      {
        src: '/images/titanium-anode/titanium-substrate-traceability.webp',
        alt: 'Substrate traceability for a reference electrode body',
      },
      {
        src: '/images/quality/dimensional-inspection.webp',
        alt: 'Dimensional inspection of a manufactured electrode',
      },
      {
        src: '/images/quality/pmi.webp',
        alt: 'Positive material identification of a reference electrode body',
      },
    ],
    stats: [
      { value: '4 families', label: 'Ag/AgCl, zinc, MnO₂ and copper/copper sulphate' },
      { value: 'This is not an anode', label: 'It measures; it does not protect' },
      { value: 'IR drop', label: 'The measurement error that has to be designed out' },
      { value: 'Ti / polymer body', label: 'Body materials selected against the electrolyte' },
    ],
    primaryCta: 'Send Your Monitoring Duty',
    secondaryCta: 'View Technical Data',
  },
  nav: [
    { href: '#definition', label: 'Definition' },
    { href: '#families', label: 'Electrode Families' },
    { href: '#technical-data', label: 'Technical Data' },
    { href: '#performance', label: 'Accuracy and IR Drop' },
    { href: '#installation', label: 'Installation' },
    { href: '#before-quote-boundary', label: 'Before a Quote' },
    { href: '#faq', label: 'FAQ' },
    { href: '#rfq', label: 'Request a Quote' },
  ],
  sections: referenceElectrodeSections,
  faq: referenceElectrodeFaq,
  faqHeading: 'Reference Electrode FAQs',
  faqLead:
    'The questions asked before a measuring electrode is specified, answered with the reasoning rather than with a type list.',
  bandClass: 'scroll-mt-24 bg-slate-950 py-20 text-white lg:py-28',
  product: false,
  category: 'Cathodic Protection',
  rfq: {
    eyebrow: 'Monitoring Review',
    title: 'Describe the Monitoring Duty, Not Just the Electrode Type',
    lead:
      'A reference electrode is selected against the electrolyte, the accuracy the control system needs, the temperature, the installation access and the maintenance regime. Give us that and we answer with the type, the body material, the construction, the installation detail and the document scope.',
    points: [
      'The electrolyte: seawater, soil, concrete, tank internals, or a mixed medium',
      'The measurement duty and the accuracy the control system depends on',
      'The temperature range and the chemistry at the electrode position',
      'Whether the electrode is permanent, retrieveable or permanently installed',
      'The installation access, the mounting and the cable run',
      'The reference electrode housing, the cable length and the termination',
    ],
    formTitle: 'Request a Reference Electrode Quotation',
    formSubtitle: 'A project engineer responds within 1 business day.',
  },
};
