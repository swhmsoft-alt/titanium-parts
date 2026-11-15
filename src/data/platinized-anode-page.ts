/**
 * Content model of the platinized titanium anode page.
 *
 * The subject is the platinized titanium anode: a titanium substrate with a
 * platinum layer, used where the duty is dimensional stability, a very low
 * contamination load or a chemistry that no mixed metal oxide coating
 * tolerates.
 *
 * The writing rules are the same as for the rest of the family: the hero
 * states the buyer's problem, every claim is tied to a condition, reference
 * figures are labelled as reference windows, and no company metric is
 * invented.
 */

import { platinizedSections, platinizedFaq } from './platinized-anode-sections';
import type { PageModel } from './coating-page-model';

/** The page model of the platinized titanium anode page. */
export type PlatinizedPage = PageModel;

export const platinizedPage: PlatinizedPage = {
  slug: 'platinized-anode',
  name: 'Platinized Titanium Anode',
  seoTitle: 'Platinized Titanium Anodes for Electrochemistry',
  description:
    'Platinized titanium anodes: platinum coating on a titanium substrate, coverage and loading specification, geometries and the electrochemistry data needed to quote.',
  hero: {
    eyebrow: 'Platinized Titanium Anode Manufacturer · Platinum Coated',
    title: 'Platinized Titanium Anodes',
    lead:
      'We manufacture platinized titanium anodes — a titanium substrate carrying a platinum layer — for the duties where the coating has to stay dimensionally stable, where the treated stream cannot accept a metal ion, or where the electrolyte is one that no mixed metal oxide coating survives. Which platinum system is right depends on the electrolyte, the current density and how much of the surface you need covered.',
    boundary:
      'Engineering boundary: "platinized" describes a family, not a specification. Platinum is applied by electroplating, by electrodeposition from a molecular precursor, or as a combination, and each route gives a different adhesion, a different surface morphology and a different behaviour at a pinhole. The application method, the loading, the coverage and the electrolyte decide which one you need.',
    image: '/images/titanium-anode/platinized-titanium-anodes.webp',
    imageAlt: 'Platinized titanium anodes',
    thumbs: [
      {
        src: '/images/titanium-anode/mesh-anodes.webp',
        alt: 'Mesh titanium anodes before the platinum layer is applied',
      },
      {
        src: '/images/titanium-anode/rod-anodes.webp',
        alt: 'Rod titanium anodes as substrate for a platinum coating',
      },
      {
        src: '/images/titanium-anode/ribbon-strip-anodes.webp',
        alt: 'Ribbon titanium anodes for a platinized electrode assembly',
      },
      {
        src: '/images/titanium-anode/tubular-anodes.webp',
        alt: 'Tubular titanium anodes prepared for platinum coating',
      },
    ],
    stats: [
      { value: 'Pt on Ti', label: 'Platinum layer on a titanium substrate' },
      { value: 'Coverage', label: 'Specified against the working face' },
      { value: 'µm or g/cm²', label: 'Loading stated in the unit you order in' },
      { value: 'Grade 1 / 2 Ti', label: 'Titanium substrate grades supplied' },
    ],
    primaryCta: 'Send Your Electrolyte Data',
    secondaryCta: 'View Technical Data',
  },
  nav: [
    { href: '#definition', label: 'Definition' },
    { href: '#chemistry', label: 'Coating Chemistry' },
    { href: '#technical-data', label: 'Technical Data' },
    { href: '#performance', label: 'Performance' },
    { href: '#applications', label: 'Applications' },
    { href: '#geometries', label: 'Geometries' },
    { href: '#quality', label: 'Quality Records' },
    { href: '#faq', label: 'FAQ' },
    { href: '#rfq', label: 'Request a Quote' },
  ],
  sections: platinizedSections,
  faq: platinizedFaq,
  faqHeading: 'Platinized Titanium Anode FAQs',
  faqLead:
    'The questions engineers ask before a platinum coating is specified, answered with the reasoning rather than with a catalogue line.',
  bandClass: 'scroll-mt-24 bg-slate-950 py-20 text-white lg:py-28',
  product: true,
  category: 'Titanium Anodes',
  rfq: {
    eyebrow: 'Engineering Review',
    title: 'Send the Electrolyte, Not Just the Anode Size',
    lead:
      'Tell us what the cell actually sees. We review the electrolyte, the current density, the geometry and the duty, then answer with a coating method, a loading, a substrate grade, a geometry proposal and the documentation scope that goes with it.',
    points: [
      'Electrolyte composition, pH, temperature and the contaminants present',
      'Operating current or current-density basis and the daily schedule',
      'Whether the treated stream may see a platinum ion, and to what limit',
      'Required service life and the maintenance window you can accept',
      'Geometry, active surface area and the mechanical installation',
      'Electrical connection, masking zones and the available space',
    ],
    formTitle: 'Request a Platinized Anode Quotation',
    formSubtitle: 'A project engineer responds within 1 business day.',
  },
};
