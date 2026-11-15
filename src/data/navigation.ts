/**
 * Main navigation — single source of truth.
 *
 * `filterAvailable` removes entries whose target route does not exist in
 * the build, so the menu can never link to a 404. Regenerate the route
 * list with:
 *
 *   node scripts/qa/list-routes.mjs > src/data/routes.json
 */

import { anodeNavGroups } from './anode-catalog';

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/company/',
    children: [
      { label: 'About', href: '/company/', description: 'Company and manufacturing profile' },
      { label: 'Manufacturing & Capabilities', href: '/manufacturing-capabilities/', description: 'Production network and equipment' },
      { label: 'Our Team', href: '/our-team/', description: 'Roles and responsibilities' },
      { label: 'Quality Control', href: '/quality/', description: 'Inspection and testing' },
    ],
  },
  {
    label: 'Titanium Products',
    href: '/titanium-products/',
    children: [
      { label: 'Titanium Products', href: '/titanium-products/', description: 'Industrial titanium forms' },
      { label: 'Plate & Sheet', href: '/titanium-products/titanium-plate/' },
      { label: 'Rod & Bar', href: '/titanium-products/titanium-rod-bar/' },
      { label: 'Tube & Pipe', href: '/titanium-products/titanium-tubing/' },
      { label: 'Wire', href: '/titanium-products/titanium-wire/' },
      { label: 'Mesh', href: '/titanium-products/titanium-mesh/' },
      { label: 'Foil', href: '/titanium-products/titanium-foil-2/' },
      { label: 'Coil & Strip', href: '/titanium-products/titanium-coil/' },
      { label: 'Fittings', href: '/titanium-products/titanium-fittings/' },
      { label: 'Flanges', href: '/titanium-products/titanium-flanges/' },
      { label: 'Balls & Spheres', href: '/titanium-products/titanium-balls/' },
      { label: 'Baskets', href: '/titanium-products/titanium-baskets/' },
      { label: 'Diaphragms', href: '/titanium-products/titanium-diaphragm/' },
      { label: 'Forgings', href: '/titanium-products/titanium-forgings/' },
      { label: 'Clad Copper', href: '/titanium-products/titanium-clad-copper/' },
      { label: 'Fasteners', href: '/titanium-products/titanium-bolts/' },
      { label: 'Machined Parts', href: '/titanium-machining-parts/' },
    ],
  },
  {
    label: 'Titanium Anodes',
    href: '/titanium-anode/',
    // Four groups, one per taxonomy dimension: geometry, coating system,
    // application and supporting components. The mega menu renders four
    // columns, so the grouping matches the layout exactly.
    children: anodeNavGroups.map((group) => ({
      label: group.label,
      href: group.href,
      children: group.children.map((child) => ({
        label: child.label,
        href: child.href,
      })),
    })),
  },
  {
    label: 'PEM Electrolyzer',
    href: '/pem-electrolyzer/',
    children: [
      { label: 'PEM Electrolyzer', href: '/pem-electrolyzer/', description: 'Stacks and packaged systems' },
      { label: 'Hydrogen Generator', href: '/hydrogen-generators/', description: 'Laboratory and OEM duty' },
      { label: 'Water Treatment', href: '/salt-chlorinator-for-pool/', description: 'Salt chlorination systems' },
      { label: 'Sodium Hypochlorite', href: '/sodium-hypochlorite-generator/', description: 'On-site generation' },
    ],
  },
  {
    label: 'Support',
    href: '/industries/',
    children: [
      { label: 'Industries', href: '/industries/', description: 'Solutions by industry' },
      { label: 'Applications', href: '/applications/', description: 'Process and equipment duties' },
      { label: 'Services', href: '/titanium-service/', description: 'Fabrication and OEM supply' },
      { label: 'Knowledge Center', href: '/knowledge-center/', description: 'Guides and references' },
      { label: 'FAQ', href: '/faq/', description: 'Common questions' },
    ],
  },
  { label: 'Contact', href: '/contact/' },
];

/**
 * Remove entries whose route is not part of the build.
 *
 * @param items  navigation tree
 * @param routes set of available routes, e.g. ['/', '/company/', ...]
 */
export function filterAvailable(items: NavItem[], routes: Set<string>): NavItem[] {
  const out: NavItem[] = [];
  for (const item of items) {
    if (item.href !== '#' && !routes.has(item.href)) {
      // Drop the whole branch when its landing page does not exist.
      if (!item.children) continue;
      const children = filterAvailable(item.children, routes);
      if (!children.length) continue;
      // A group whose own landing page is missing falls back to its first
      // reachable child, so the branch stays in the menu instead of
      // disappearing silently after an incomplete build.
      out.push({ ...item, href: children[0].href, children });
      continue;
    }
    if (item.children) {
      const children = filterAvailable(item.children, routes);
      out.push({ ...item, children });
    } else {
      out.push(item);
    }
  }
  return out;
}
