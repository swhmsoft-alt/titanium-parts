/**
 * Content model of the PEM electrolyzer page.
 *
 * The subject is a machine rather than a component, so the page has to help a
 * reader decide whether a PEM electrolyzer is the right route for their duty
 * at all, before it talks about configuration. That is why the route
 * comparison comes early and why the boundary of the supply scope is stated
 * rather than implied.
 */

import { pemSections, pemFaq } from './pem-electrolyzer-sections';
import type { PageModel } from './coating-page-model';

/** The page model of the PEM electrolyzer page. */
export type PemElectrolyzerPage = PageModel;

export const pemElectrolyzerPage: PemElectrolyzerPage = {
  slug: 'pem-electrolyzer',
  name: 'PEM Electrolyzer Systems',
  seoTitle: 'PEM Electrolyzer Manufacturer | Hydrogen Systems',
  description:
    'PEM electrolyzer systems from laboratory supply to containerised plants: PEM vs alkaline route, stack sizing, feed water quality, purity, safety interlock and RFQ scope.',
  hero: {
    eyebrow: 'PEM Electrolyzer · System Engineering',
    title: 'PEM Electrolyzers for Hydrogen That Has to Be Produced on Demand',
    lead:
      'We supply proton exchange membrane electrolyzers from bench generators for laboratory supply through to containerised plants for production-scale hydrogen. The stack is the part everyone asks about, but what decides whether a system works for you is the load profile it has to follow, the water it is fed, the purity the downstream process needs, and the safety chain around it. Those are the questions this page answers before it shows you a configuration.',
    boundary:
      'Engineering boundary: a PEM electrolyzer is not a hydrogen supply in general — it is one route, and it is the right one when the electrical input varies, when the product has to be clean, or when the footprint is short. It is the wrong one for a steady large-tonnage duty where the cost per kilogram is the only measure that matters, and for that case we will tell you so and explain the alternative. Equally, a system specified only by output and by electrical input is not yet a specification: it leaves the current density open, and the current density decides the cost, the size and the life.',
    image: '/images/products/pem-electrolyzer.webp',
    imageAlt: 'PEM electrolyzer system for hydrogen production',
    thumbs: [
      {
        src: '/images/scenarios/green-hydrogen.webp',
        alt: 'Green hydrogen production plant using PEM electrolysis',
      },
      {
        src: '/images/industries/energy-hydrogen.webp',
        alt: 'Energy and hydrogen production equipment',
      },
      {
        src: '/images/service/engineering-review.webp',
        alt: 'Engineering review of an electrolyzer system in the workshop',
      },
      {
        src: '/images/service/inspection-docs.webp',
        alt: 'Inspection and documentation of the supplied system',
      },
    ],
    stats: [
      { value: '6 configurations', label: 'From compact laboratory units to containerised plants' },
      { value: 'PEM vs alkaline', label: 'Route compared against load profile, purity and cost' },
      { value: '> 99.99 %', label: 'Typical stack outlet purity, before purification' },
      { value: 'Demineralised feed', label: 'Water quality that the membrane actually needs' },
    ],
    primaryCta: 'Send Your Project Data',
    secondaryCta: 'View Technical Data',
  },
  nav: [
    { href: '#definition', label: 'Definition' },
    { href: '#chemistry', label: 'PEM vs Alkaline' },
    { href: '#technical-data', label: 'Technical Data' },
    { href: '#performance', label: 'Performance' },
    { href: '#families', label: 'Configurations' },
    { href: '#applications', label: 'Applications' },
    { href: '#quality', label: 'Quality' },
    { href: '#before-quote-boundary', label: 'Before a Quote' },
    { href: '#faq', label: 'FAQ' },
    { href: '#rfq', label: 'Request a Quote' },
  ],
  sections: pemSections,
  faq: pemFaq,
  faqHeading: 'PEM Electrolyzer FAQs',
  faqLead:
    'The questions asked before a PEM electrolyzer is specified, answered with the reasoning rather than with a feature list.',
  bandClass: 'scroll-mt-24 bg-slate-950 py-20 text-white lg:py-28',
  product: true,
  category: 'PEM Electrolyzers',
  rfq: {
    eyebrow: 'Project Review',
    title: 'Send the Duty, the Output and the Acceptance Basis',
    lead:
      'A comparable quotation starts with the electrical input and how it varies, the required output and pressure, the purity and what the gas is used for, the feed water available at site, the installation conditions and the acceptance plan. Give us those and we answer with the stack configuration, the balance of plant, the delivery format and the document scope.',
    points: [
      'The electrical supply: the peak and the continuous power, and how the input varies',
      'The required hydrogen output, the delivery pressure and the purity the process needs',
      'The feed water quality at site, or the treatment that can be sustained',
      'The installation footprint, the enclosure, the ambient conditions and the cooling water',
      'The control system, the safety requirements and the interface to the site',
      'The acceptance plan, the inspection hold points and the document scope',
    ],
    formTitle: 'Request a PEM Electrolyzer Technical Quote',
    formSubtitle: 'We review configuration, delivery boundary, and acceptance plan.',
  },
};
