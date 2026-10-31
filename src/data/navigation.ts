export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About', href: '/company/',
    children: [
      { label: 'About', href: '/company/', description: 'About Titanium Parts' },
      { label: 'Manufacturing & Capabilities', href: '/manufacturing-capabilities/', description: 'Our production network' },
      { label: 'Our Team', href: '/our-team/', description: 'Engineers and specialists' },
      { label: 'Quality Control', href: '/quality/', description: 'Inspection and testing' },
    ],
  },
  {
    label: 'Titanium Products', href: '/titanium-products/',
    children: [
      { label: 'Titanium Products', href: '/titanium-products/', description: 'Industrial titanium forms' },
      { label: 'Titanium Plate / Sheet', href: '/titanium-products/titanium-plate/' },
      { label: 'Titanium Rod / Bar', href: '/titanium-products/titanium-rod-bar/' },
      { label: 'Titanium Tube & Pipe', href: '/titanium-products/titanium-tubing/' },
      { label: 'Titanium Wire', href: '/titanium-products/titanium-wire/' },
      { label: 'Titanium Mesh', href: '/titanium-products/titanium-mesh/' },
      { label: 'Titanium Foil', href: '/titanium-products/titanium-foil-2/' },
      { label: 'Titanium Coil', href: '/titanium-products/titanium-coil/' },
      { label: 'Titanium Fittings', href: '/titanium-products/titanium-fittings/' },
      { label: 'Titanium Flange', href: '/titanium-products/titanium-flanges/' },
      { label: 'Titanium Balls', href: '/titanium-products/titanium-balls/' },
      { label: 'Titanium Basket', href: '/titanium-products/titanium-baskets/' },
      { label: 'Titanium Machined Parts', href: '/titanium-machining-parts/' },
      { label: 'Titanium Diaphragm', href: '/titanium-products/titanium-diaphragm/' },
      { label: 'Titanium Forgings', href: '/titanium-products/titanium-forgings/' },
      { label: 'Titanium Clad Copper', href: '/titanium-products/titanium-clad-copper/' },
      { label: 'Titanium Fasteners', href: '/titanium-products/titanium-bolts/' },
    ],
  },
];
