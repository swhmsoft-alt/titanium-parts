/**
 * Content model of the cathodic protection page.
 *
 * The subject is a system rather than a product: the page has to help a
 * reader decide which protection method applies to the asset in front of
 * them, and then hand the enquiry over with enough information that the
 * anode can be specified rather than merely quoted.
 *
 * The three families are kept distinct — impressed current, sacrificial and
 * reference electrodes — because confusing them is the most expensive
 * mistake in this field, and the page says so explicitly.
 */

import { cathodicProtectionSections, cathodicProtectionFaq } from './cathodic-protection-sections';
import type { PageModel } from './coating-page-model';

/** The page model of the cathodic protection page. */
export type CathodicProtectionPage = PageModel;

export const cathodicProtectionPage: CathodicProtectionPage = {
  slug: 'cathodic-protection',
  name: 'Cathodic Protection Systems',
  seoTitle: 'Cathodic Protection Anodes | ICCP & Sacrificial',
  description:
    'Cathodic protection anodes and reference electrodes for soil, marine, concrete and tank-bottom duty: ICCP, sacrificial and reference families, design inputs and RFQ scope.',
  hero: {
    eyebrow: 'Cathodic Protection · System Engineering',
    title: 'Cathodic Protection Anodes for Soil, Marine, Concrete and Tanks',
    lead:
      'We supply the anode side of cathodic protection systems — the impressed current anodes, the reference electrodes that tell the rectifier where the structure stands, and the titanium geometries used in marine and buried installations. The right system depends on the protected asset, the exposure, the environment and the protection criterion the structure has to meet, not on the anode that happens to be available.',
    boundary:
      'Engineering boundary: cathodic protection is not corrosion protection in general — it is one method of it, and it has to be designed against a stated criterion for a stated structure. The anode is the last step of that design, not the first. Where a structure is outside its design envelope — high resistivity soil, shielding, stray-current interference, an undefined reference electrode — no anode fixes the outcome.',
    image: '/images/industries/cathodic-protection.webp',
    imageAlt: 'Cathodic protection installation on a steel structure',
    thumbs: [
      {
        src: '/images/titanium-anode/iccp-marine-protection.webp',
        alt: 'Titanium anode in a marine cathodic protection installation',
      },
      {
        src: '/images/titanium-anode/mmo-rod-anode-mmo-rod-anode-1.webp',
        alt: 'Rod anode for a cathodic protection installation',
      },
      {
        src: '/images/titanium-anode/mmo-linear-anode-buried-pipeline.webp',
        alt: 'Linear anode along a buried pipeline',
      },
      {
        src: '/images/titanium-anode/geometry-electrical-connection-inspection.webp',
        alt: 'Inspection of the electrical connection on a protection anode',
      },
    ],
    stats: [
      { value: '3 families', label: 'Impressed current, sacrificial and reference' },
      { value: '8 geometries', label: 'MMO titanium anode geometries for ICCP' },
      { value: 'Soil · Marine · Concrete', label: 'Exposure environments the anodes are supplied for' },
      { value: 'Grade 1 / 2 Ti', label: 'Titanium substrate grades supplied' },
    ],
    primaryCta: 'Send Your CP Project Data',
    secondaryCta: 'View Technical Data',
  },
  nav: [
    { href: '#definition', label: 'Definition' },
    { href: '#families', label: 'Anode Families' },
    { href: '#technical-data', label: 'Technical Data' },
    { href: '#performance', label: 'Design Criteria' },
    { href: '#geometries', label: 'MMO Geometries' },
    { href: '#before-quote-boundary', label: 'Before a Quote' },
    { href: '#faq', label: 'FAQ' },
    { href: '#rfq', label: 'Request a Quote' },
  ],
  sections: cathodicProtectionSections,
  faq: cathodicProtectionFaq,
  faqHeading: 'Cathodic Protection Anode FAQs',
  faqLead:
    'The questions asked before a protection system is specified, answered with the reasoning rather than with a product list.',
  bandClass: 'scroll-mt-24 bg-slate-950 py-20 text-white lg:py-28',
  product: false,
  category: 'Cathodic Protection',
  rfq: {
    eyebrow: 'System Review',
    title: 'Send the Protection Problem, Not Just the Anode Size',
    lead:
      'A comparable quotation starts with the protected asset, the exposure, the environment, the protection criterion, the current demand and the design life. Give us those and we answer with the anode family, the quantity, the layout, the mounting, the cable and backfill, and the inspection and commissioning scope.',
    points: [
      'The protected asset: pipeline, tank bottom, reinforced concrete, hull, offshore structure or buried asset',
      'The exposure: soil, seawater, concrete, tank internals and the resistivity of the environment',
      'The protection criterion the structure has to meet and the current it will take to meet it',
      'The design life and the maintenance access available',
      'The anode family, the quantity, the layout, the mounting and the cabling',
      'Whether the rectifier, the reference electrode and the interference assessment are in scope',
    ],
    formTitle: 'Request a Cathodic Protection Anode Review',
    formSubtitle: 'A project engineer responds within 1 business day.',
  },
};
