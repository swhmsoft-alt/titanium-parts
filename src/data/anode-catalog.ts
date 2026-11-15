/**
 * Titanium anode catalogue — the single source of truth for the taxonomy.
 *
 * Four independent dimensions are kept apart on purpose:
 *
 *   1. Coating system   — MMO, Ru-Ir, Ir-Ta, Platinized, Specialty
 *   2. Geometry        — Linear, Wire, Ribbon, Mesh Ribbon, Canister, Tubular, Disc, Rod
 *   3. Application     — Cathodic protection, anti-fouling, electrolysis, water treatment
 *   4. Accessories     — baskets, reference electrodes, system components
 *
 * The navigation menu, the catalogue hubs and the homepage product-family
 * block all read from this module, so the menu can never drift away from
 * the pages that actually exist.
 */

export interface AnodeNavChild {
  /** Menu label. */
  label: string;
  /** Route the label points at. Always trailing-slash terminated. */
  href: string;
  /** Optional one-line description shown under the label. */
  description?: string;
}

export interface AnodeNavGroup {
  /** Stable key used for lookups and analytics. */
  key: string;
  /** Group heading shown in the mega menu. */
  label: string;
  /** Landing page of the group. */
  href: string;
  /** One-line positioning line for the group. */
  description: string;
  /** Child entries listed under the group heading. */
  children: AnodeNavChild[];
}

/** Image used on the homepage product-family card. */
export interface AnodeFamilyCard {
  key: string;
  title: string;
  body: string;
  href: string;
  image: string;
  imageAlt: string;
}

/**
 * The four navigation groups of the "Titanium Anodes" menu.
 *
 * The mega menu renders four columns, so the taxonomy is deliberately
 * grouped into four columns rather than a flat list of twenty entries.
 */
export const anodeNavGroups: AnodeNavGroup[] = [
  {
    key: 'mmo',
    label: 'MMO Titanium Anodes',
    href: '/titanium-anode/mmo-anode/',
    description: 'Mixed metal oxide product family by geometry',
    children: [
      { label: 'MMO Linear Anode', href: '/titanium-anode/mmo-anode/mmo-linear-anode/' },
      { label: 'MMO Wire Anode', href: '/titanium-anode/mmo-anode/mmo-wire-anode/' },
      { label: 'MMO Ribbon Anode', href: '/titanium-anode/mmo-anode/mmo-ribbon-anode/' },
      { label: 'MMO Mesh Ribbon Anode', href: '/titanium-anode/mmo-anode/mmo-mesh-ribbon-anode/' },
      { label: 'MMO Canister Anode', href: '/titanium-anode/mmo-anode/mmo-canister-anode/' },
      { label: 'MMO Tubular Anode', href: '/titanium-anode/mmo-anode/mmo-tubular-anode/' },
      { label: 'MMO Disc Anode', href: '/titanium-anode/mmo-anode/mmo-disc-anode/' },
      { label: 'MMO Rod Anode', href: '/titanium-anode/mmo-anode/mmo-rod-anode/' },
    ],
  },
  {
    key: 'coatings',
    label: 'Coating Systems',
    href: '/titanium-anode/coating-systems/',
    description: 'Ru-Ir, Ir-Ta, platinized and specialty surfaces',
    children: [
      { label: 'Ru-Ir MMO Titanium Anodes', href: '/titanium-anode/ruthenium-coated-titanium-anodes/' },
      { label: 'Ir-Ta & Ir-Based MMO Anodes', href: '/titanium-anode/iridium-oxide-coated-titanium-anodes/' },
      { label: 'Platinized Titanium Anodes', href: '/titanium-anode/platinized-anode/' },
      { label: 'Specialty Coated Titanium Anodes', href: '/titanium-anode/lead-dioxide-anode/' },
    ],
  },
  {
    key: 'protection',
    label: 'Cathodic Protection',
    href: '/cathodic-protection/',
    description: 'Impressed current systems and monitoring components',
    children: [
      { label: 'Cathodic Protection Anodes', href: '/cathodic-protection/' },
      { label: 'Reference Electrodes', href: '/cathodic-protection/reference-electrodes/' },
    ],
  },
  {
    key: 'systems',
    label: 'Systems & Components',
    href: '/titanium-anode/anti-fouling-system/',
    description: 'Electrolysis systems and supporting components',
    children: [
      { label: 'Marine Anti-Fouling Systems', href: '/titanium-anode/anti-fouling-system/' },
      { label: 'Electrochemical Applications', href: '/applications/' },
      { label: 'Titanium Anode Baskets', href: '/titanium-products/titanium-baskets/' },
    ],
  },
];

/**
 * The four product-family cards shown on the titanium anode hub.
 *
 * They mirror the navigation groups one to one so the homepage entry
 * point and the menu always describe the same taxonomy.
 */
export const anodeFamilyCards: AnodeFamilyCard[] = [
  {
    key: 'mmo',
    title: 'MMO Titanium Anodes',
    body: 'Mixed metal oxide anodes in eight geometries — flexible linear, wire, ribbon, mesh ribbon, canister, tubular, disc and rod — for impressed current protection and electrochemical cells.',
    href: '/titanium-anode/mmo-anode/',
    image: '/images/titanium-anode/mesh-anodes.webp',
    imageAlt: 'MMO coated titanium mesh anodes',
  },
  {
    key: 'coatings',
    title: 'Coating Systems',
    body: 'Compare the active surface against the process window: Ru-Ir for chlorine evolution, Ir-Ta for oxygen evolution, platinized titanium for plating and specialty systems reviewed per project.',
    href: '/titanium-anode/coating-systems/',
    image: '/images/titanium-anode/coating-process-loading-control.webp',
    imageAlt: 'Titanium anode coating process control',
  },
  {
    key: 'protection',
    title: 'Cathodic Protection',
    body: 'Impressed current titanium anode systems for pipelines, storage tank bottoms, reinforced concrete and marine structures, with the reference electrodes that close the control loop.',
    href: '/cathodic-protection/',
    image: '/images/titanium-anode/iccp-marine-protection.webp',
    imageAlt: 'MMO titanium anodes for ICCP and marine protection',
  },
  {
    key: 'systems',
    title: 'Systems & Components',
    body: 'Marine electrolytic anti-fouling systems, the wider electrochemical application range and titanium anode baskets for soluble anode containment — each with its own design basis.',
    href: '/titanium-anode/anti-fouling-system/',
    image: '/images/products/titanium-anodes.webp',
    imageAlt: 'Titanium anodes and supporting components',
  },
];

/** Look up a single navigation group by key. */
export function anodeNavGroup(key: string): AnodeNavGroup | undefined {
  return anodeNavGroups.find((g) => g.key === key);
}
