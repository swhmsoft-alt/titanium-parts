/**
 * Content model of the marine electrolytic anti-fouling system page.
 *
 * The subject is a system rather than a coating: an electrolytic anti-fouling
 * arrangement in which a titanium anode generates an oxidising agent
 * directly in the sea water, so that the organisms that settle on the hull
 * are oxidised instead of being kept away by a barrier coat.
 *
 * The page therefore has to work at system level — the electrochemistry, the
 * dose, the chlorine chemistry in sea water, the installation and the
 * maintenance — and it has to be explicit about the boundary between this
 * system and impressed current cathodic protection, because the two are
 * constantly confused.
 */

import { antiFoulingSections, antiFoulingFaq } from './anti-fouling-sections';
import type { PageModel } from './coating-page-model';

/** The page model of the anti-fouling system page. */
export type AntiFoulingPage = PageModel;

export const antiFoulingPage: AntiFoulingPage = {
  slug: 'anti-fouling-system',
  name: 'Marine Electrolytic Anti-Fouling System',
  seoTitle: 'Electrolytic Anti-Fouling Systems for Marine Anodes',
  description:
    'Electrolytic anti-fouling systems for marine hulls and structures: oxidant generation, dose, chlorine chemistry, installation and the difference from ICCP.',
  hero: {
    eyebrow: 'Marine Electrolytic Anti-Fouling · System Engineering',
    title: 'Electrolytic Anti-Fouling Systems',
    lead:
      'We supply the titanium anode side of electrolytic anti-fouling systems: the electrode that generates the oxidising agent in the sea water, the current source that drives it, and the installation detail that decides whether it works. The system keeps a hull or a structure clean by oxidising the organisms that settle on it, so the answer depends on the flow over the surface, the chlorine chemistry at that flow, and how the vessel actually operates.',
    boundary:
      'Engineering boundary: an electrolytic anti-fouling system is not a coating and it is not a cathodic protection system. It protects against biological fouling by an oxidising agent generated at the electrode; it does nothing for corrosion, and it must not be credited with that. A vessel that needs both needs both systems, sized separately.',
    image: '/images/industries/marine-offshore.webp',
    imageAlt: 'Marine vessel and offshore structure',
    thumbs: [
      {
        src: '/images/titanium-anode/iccp-marine-protection.webp',
        alt: 'Titanium anodes in a marine installation',
      },
      {
        src: '/images/titanium-anode/mesh-anodes.webp',
        alt: 'Mesh titanium anode for a marine anti-fouling installation',
      },
      {
        src: '/images/titanium-anode/geometry-electrical-connection-inspection.webp',
        alt: 'Inspection of the electrical connection on a marine titanium anode',
      },
      {
        src: '/images/titanium-anode/titanium-substrate-traceability.webp',
        alt: 'Substrate traceability for a marine titanium anode',
      },
    ],
    stats: [
      { value: 'Cl₂ / HOCl', label: 'Oxidising agent generated at the electrode' },
      { value: '0.2–1.0 ppm', label: 'Reference residual oxidant range in the boundary layer' },
      { value: 'Flow dependent', label: 'The dose is set by the flow over the hull' },
      { value: 'Grade 1 / 2 Ti', label: 'Titanium substrate grades supplied' },
    ],
    primaryCta: 'Send Your Vessel Data',
    secondaryCta: 'View Technical Data',
  },
  nav: [
    { href: '#definition', label: 'Definition' },
    { href: '#chemistry', label: 'Chemistry' },
    { href: '#technical-data', label: 'Technical Data' },
    { href: '#performance', label: 'Dosing and Performance' },
    { href: '#installation', label: 'Installation' },
    { href: '#comparison', label: 'Anti-Fouling vs ICCP' },
    { href: '#maintenance', label: 'Maintenance' },
    { href: '#faq', label: 'FAQ' },
    { href: '#rfq', label: 'Request a Quote' },
  ],
  sections: antiFoulingSections,
  faq: antiFoulingFaq,
  faqHeading: 'Electrolytic Anti-Fouling System FAQs',
  faqLead:
    'The questions asked before an anti-fouling system is specified for a vessel, answered with the reasoning rather than with a brochure line.',
  bandClass: 'scroll-mt-24 bg-slate-950 py-20 text-white lg:py-28',
  product: false,
  category: 'Cathodic Protection',
  rfq: {
    eyebrow: 'System Review',
    title: 'Send the Vessel Data, Not Just the Electrode Size',
    lead:
      'An anti-fouling system is sized from the vessel, not from the electrode. Tell us the hull form, the speed and the service pattern, the seawater temperature and salinity, and the corrosion allowance of the structure, and we answer with a current requirement, an electrode arrangement, an installation detail and the documentation scope.',
    points: [
      'Vessel type, length, speed range and the percentage of time under way',
      'Hull form, the areas to be protected and the flow over them',
      'Seawater temperature, salinity and the fouling pressure at the route',
      'The corrosion protection already fitted and the current it draws',
      'The available space, the connection route and the electrical supply',
      'Maintenance access, and the frequency the operator can accept',
    ],
    formTitle: 'Request an Anti-Fouling System Quotation',
    formSubtitle: 'A project engineer responds within 1 business day.',
  },
};
