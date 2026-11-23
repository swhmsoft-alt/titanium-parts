/**
 * Titanium product catalogue — the single source of truth for the
 * "Titanium Products" navigation taxonomy.
 *
 * The sixteen product pages are grouped by process route and degree of
 * finishing instead of being listed as one flat sequence, so a buyer can
 * tell mill material, forgings, piping components, electrochemical
 * fabrications and precision parts apart before opening a single page.
 *
 * Groups:
 *
 *   1. Mill Products                        — rolled raw material
 *   2. Forgings & Clad Materials            — forgings and clad composite
 *   3. Piping Components                    — fittings and flanges
 *   4. Electrochemical & Mesh Fabrications  — mesh, baskets, diaphragms
 *   5. Fasteners & Precision Machined Parts — fasteners, balls, machined parts
 *
 * Every href points at an existing route; no new URL is introduced here.
 */

export interface TitaniumProductNavChild {
  /** Menu label. */
  label: string;
  /** Route the label points at. Always trailing-slash terminated. */
  href: string;
}

export interface TitaniumProductNavGroup {
  /** Stable key used for lookups and analytics. */
  key: string;
  /** Group heading shown in the mega menu. */
  label: string;
  /** Landing page of the group — the first product page it contains. */
  href: string;
  /** One-line positioning line for the group. */
  description: string;
  /** Child entries listed under the group heading. */
  children: TitaniumProductNavChild[];
}

/**
 * The five navigation groups of the "Titanium Products" menu.
 *
 * The mega menu renders five columns, so the taxonomy is deliberately
 * grouped into five columns rather than a flat list of sixteen entries.
 */
export const titaniumProductNavGroups: TitaniumProductNavGroup[] = [
  {
    key: 'mill',
    label: 'Mill Products',
    href: '/titanium-products/titanium-plate/',
    description: 'Rolled mill forms for converters and distributors.',
    children: [
      { label: 'Plate & Sheet', href: '/titanium-products/titanium-plate/' },
      { label: 'Coil & Strip', href: '/titanium-products/titanium-coil/' },
      { label: 'Foil', href: '/titanium-products/titanium-foil-2/' },
      { label: 'Rod & Bar', href: '/titanium-products/titanium-rod-bar/' },
      { label: 'Tube & Pipe', href: '/titanium-products/titanium-tubing/' },
      { label: 'Wire', href: '/titanium-products/titanium-wire/' },
    ],
  },
  {
    key: 'forgings',
    label: 'Forgings & Clad Materials',
    href: '/titanium-products/titanium-forgings/',
    description: 'Forged rings, discs and blocks plus titanium-clad copper for heavy equipment, pressure vessels and electrochemical assemblies.',
    children: [
      { label: 'Forgings', href: '/titanium-products/titanium-forgings/' },
      { label: 'Clad Copper', href: '/titanium-products/titanium-clad-copper/' },
    ],
  },
  {
    key: 'piping',
    label: 'Piping Components',
    href: '/titanium-products/titanium-fittings/',
    description: 'Fittings and flanges for chemical, offshore and fluid-handling engineering.',
    children: [
      { label: 'Fittings', href: '/titanium-products/titanium-fittings/' },
      { label: 'Flanges', href: '/titanium-products/titanium-flanges/' },
    ],
  },
  {
    key: 'electrochemical',
    label: 'Electrochemical & Mesh Fabrications',
    href: '/titanium-products/titanium-mesh/',
    description: 'Mesh, anode baskets and diaphragms for plating, electrolysis cells and filtration systems.',
    children: [
      { label: 'Mesh', href: '/titanium-products/titanium-mesh/' },
      { label: 'Baskets', href: '/titanium-products/titanium-baskets/' },
      { label: 'Diaphragms', href: '/titanium-products/titanium-diaphragm/' },
    ],
  },
  {
    key: 'fasteners',
    label: 'Fasteners & Precision Machined Parts',
    href: '/titanium-products/titanium-bolts/',
    description: 'Fasteners, balls and drawing-based machined parts for OEM assembly and custom production.',
    children: [
      { label: 'Fasteners', href: '/titanium-products/titanium-bolts/' },
      { label: 'Balls & Spheres', href: '/titanium-products/titanium-balls/' },
      { label: 'Machined Parts', href: '/titanium-machining-parts/' },
    ],
  },
];
