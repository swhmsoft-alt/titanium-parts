/**
 * Per-product page metadata.
 *
 * Each product page needs its own search title and description. Generating
 * them by truncating the hero copy produced awkward, sometimes cut-off
 * titles, so they are written explicitly here instead.
 *
 * Title budget: the layout appends " | Titanium Parts", so the value here
 * should stay under ~52 characters to land inside the 70-character search
 * result limit. Description budget: 70-175 characters.
 *
 * `sku` is used for the Product structured data node.
 */

export interface ProductMeta {
  /** Title without the brand suffix. */
  title: string;
  /** Meta description, 70-175 characters. */
  description: string;
  /** Internal reference used for Product structured data. */
  sku: string;
  /** Product family, e.g. "Titanium Plate & Sheet". */
  category?: string;
  /** Grades and UNS numbers the page offers, e.g. "Grade 2 Titanium / UNS R50400". */
  material?: string;
  /** The shape the page sells, e.g. "Plate & Sheet". */
  additionalType?: string;
  /** The page's own product picture. */
  image?: string;
}

export const productMeta: Record<string, ProductMeta> = {
  'titanium-plate': {
    title: 'Titanium Plate & Sheet Manufacturer',
    description:
      'Titanium plate and sheet in Grade 2, Grade 5, Grade 23 ELI and project grades, supplied cut to size with material certificates and inspection records.',
    sku: 'TP-PLATE-SHEET',
    category: 'Titanium Plate & Sheet',
    material: 'Grade 2 Titanium / UNS R50400 · Grade 5 / Ti-6Al-4V / UNS R56400 · Grade 7 Titanium / UNS R52400 · Grade 23 / Ti-6Al-4V ELI / UNS R56407',
    additionalType: 'Plate & Sheet',
    image: '/images/titanium-products/titanium-plates-sheets-manufacturer.webp',
  },
  'titanium-rod-bar': {
    title: 'Titanium Rod & Bar Manufacturer',
    description:
      'Commercially pure and alloy titanium rod and bar in round, hex, square and hollow sections, ground to size and supplied with full traceability.',
    sku: 'TP-ROD-BAR',
    category: 'Titanium Rod & Bar',
    material: 'Grade 2 Titanium / UNS R50400 · Grade 5 / Ti-6Al-4V / UNS R56400 · Grade 7 Titanium / UNS R52400 · Grade 23 / Ti-6Al-4V ELI / UNS R56407',
    additionalType: 'Rod & Bar',
    image: '/images/titanium-products/precision-titanium-rods-bars-manufacturer.webp',
  },
  'titanium-tubing': {
    title: 'Titanium Tube & Pipe Manufacturer',
    description:
      'Seamless and welded titanium tube and pipe to ASTM B338, B861 and B862, including heat exchanger, capillary and custom sizes with documented testing.',
    sku: 'TP-TUBE-PIPE',
    category: 'Titanium Tube & Pipe',
    material: 'Common CP and alloy grades by service duty',
    additionalType: 'Tube & Pipe',
    image: '/images/titanium-products/titanium-tube-pipe-manufacturer-1.webp',
  },
  'titanium-wire': {
    title: 'Titanium Wire Manufacturer',
    description:
      'Titanium wire in commercially pure, Ti-6Al-4V and Grade 23 ELI, supplied on coil, spool or straight length for forming, springs and medical use.',
    sku: 'TP-WIRE',
    category: 'Titanium Wire',
    material: 'Grade 2 Titanium / UNS R50400 · Grade 5 / Ti-6Al-4V / UNS R56400 · Grade 7 Titanium / UNS R52400 · Grade 23 / Ti-6Al-4V ELI / UNS R56407',
    additionalType: 'Wire',
    image: '/images/titanium-products/titanium-wire-manufacturer.webp',
  },
  'titanium-mesh': {
    title: 'Titanium Mesh Manufacturer',
    description:
      'Titanium mesh in woven, expanded, perforated and welded constructions, with strand, aperture and grade specified against your filtration or screening duty.',
    sku: 'TP-MESH',
    category: 'Titanium Mesh',
    material: 'Grade 2 Titanium / UNS R50400 · Grade 5 / Ti-6Al-4V / UNS R56400 · Grade 7 Titanium / UNS R52400 · Grade 23 / Ti-6Al-4V ELI / UNS R56407',
    additionalType: 'Mesh',
    image: '/images/titanium-products/titanium-mesh-manufacturer.webp',
  },
  'titanium-bolts': {
    title: 'Titanium Fasteners Manufacturer',
    description:
      'Titanium bolts, screws, nuts, washers and studs in Grade 2, 5, 7 and 23, supplied to drawing with thread, finish and inspection requirements confirmed.',
    sku: 'TP-FASTENERS',
    category: 'Titanium Fasteners',
    material: 'Grade 2 Titanium / UNS R50400 · Grade 5 / Ti-6Al-4V / UNS R56400 · Grade 7 Titanium / UNS R52400 · Grade 23 / Ti-6Al-4V ELI / UNS R56407',
    additionalType: 'Fasteners',
    image: '/images/titanium-products/industrial-titanium-fastener.webp',
  },
  'titanium-fittings': {
    title: 'Titanium Pipe Fittings Manufacturer',
    description:
      'Titanium pipe fittings in Grade 2, 5, 7 and 12 for butt weld, socket weld and flanged connections, produced to ASME dimensions and project specifications.',
    sku: 'TP-FITTINGS',
    category: 'Titanium Fittings',
    material: 'Grade 2 Titanium / UNS R50400 · Grade 5 / Ti-6Al-4V / UNS R56400 · Grade 7 Titanium / UNS R52400 · Grade 12 Titanium / UNS R53400',
    additionalType: 'Fittings',
    image: '/images/titanium-products/titanium-pipe-fittings.webp',
  },
  'titanium-flanges': {
    title: 'Titanium Pipe Flanges Manufacturer',
    description:
      'Titanium pipe flanges to ASME B16.5 and B16.47 in Grade 2, 5, 7 and 12, available with raised face, flat face and custom facing dimensions.',
    sku: 'TP-FLANGES',
    category: 'Titanium Flanges',
    material: 'Grade 2 Titanium / UNS R50400 · Grade 5 / Ti-6Al-4V / UNS R56400 · Grade 7 Titanium / UNS R52400 · Grade 12 Titanium / UNS R53400',
    additionalType: 'Flanges',
    image: '/images/titanium-products/titanium-pipe-flange.webp',
  },
  'titanium-foil-2': {
    title: 'Titanium Foil Manufacturer',
    description:
      'Titanium foil and thin strip in commercially pure and project alloys, supplied as coil, precision-slit strip or cut pieces for sealing and shielding.',
    sku: 'TP-FOIL',
    category: 'Titanium Foil',
    material: 'Grade 1 Titanium / UNS R50250 · Grade 2 Titanium / UNS R50400 · Grade 5 / Ti-6Al-4V / UNS R56400 · Grade 23 / Ti-6Al-4V ELI / UNS R56407',
    additionalType: 'Foil',
    image: '/images/titanium-products/titanium-foil-manufacturer.webp',
  },
  'titanium-coil': {
    title: 'Titanium Coil & Strip Manufacturer',
    description:
      'Titanium coil and strip in Grade 2, Ti-6Al-4V and Grade 23 ELI, precision slit to width and supplied with coil weight, surface and packaging to requirement.',
    sku: 'TP-COIL-STRIP',
    category: 'Titanium Coil & Strip',
    material: 'Grade 2 Titanium / UNS R50400 · Grade 5 / Ti-6Al-4V / UNS R56400 · Grade 7 Titanium / UNS R52400 · Grade 23 / Ti-6Al-4V ELI / UNS R56407',
    additionalType: 'Coil & Strip',
    image: '/images/titanium-products/titanium-foil-manufacturer.webp',
  },
  'titanium-forgings': {
    title: 'Titanium Forgings Manufacturer',
    description:
      'Titanium forgings produced by ring rolling and closed die forging in Grade 2, 5, 7 and 23, machined to drawing with heat and inspection traceability.',
    sku: 'TP-FORGINGS',
    category: 'Titanium Forgings',
    material: 'Grade 2 Titanium / UNS R50400 · Grade 5 / Ti-6Al-4V / UNS R56400 · Grade 7 Titanium / UNS R52400 · Grade 23 / Ti-6Al-4V ELI / UNS R56407',
    additionalType: 'Forgings',
    image: '/images/titanium-products/custom-titanium-forgings.webp',
  },
  'titanium-balls': {
    title: 'Titanium Balls & Spheres Manufacturer',
    description:
      'Precision titanium balls, spheres and hollow buoyancy spheres in Grade 2, 5, 7 and 23, finished to diameter tolerance with surface finish confirmed.',
    sku: 'TP-BALLS',
    category: 'Titanium Balls',
    material: 'Grade 2 Titanium / UNS R50400 · Grade 5 / Ti-6Al-4V / UNS R56400 · Grade 7 Titanium / UNS R52400 · Grade 23 / Ti-6Al-4V ELI / UNS R56407',
    additionalType: 'Balls',
    image: '/images/titanium-products/titanium-balls-spheres.webp',
  },
  'titanium-baskets': {
    title: 'Titanium Anode Baskets Manufacturer',
    description:
      'Titanium anode baskets and cathodic baskets for electroplating, pickling, cleaning and electrowinning, in Grade 1, 2, 7 and 12 with mesh or sheet construction.',
    sku: 'TP-BASKETS',
    category: 'Titanium Baskets',
    material: 'Grade 1 Titanium / UNS R50250 · Grade 2 Titanium / UNS R50400 · Grade 7 Titanium / UNS R52400 · Grade 12 Titanium / UNS R53400',
    additionalType: 'Baskets',
    image: '/images/titanium-products/titanium-anode-basket.webp',
  },
  'titanium-diaphragm': {
    title: 'Titanium Diaphragms Manufacturer',
    description:
      'Titanium diaphragms formed and welded to drawing for pumps, sensors, speakers and pressure equipment, with thickness, profile and leak testing specified.',
    sku: 'TP-DIAPHRAGMS',
    category: 'Titanium Diaphragms',
    material: 'Grade 1 Titanium / UNS R50250 · Grade 2 Titanium / UNS R50400 · Grade 5 / Ti-6Al-4V / UNS R56400 · Grade 23 / Ti-6Al-4V ELI / UNS R56407',
    additionalType: 'Diaphragms',
    image: '/images/titanium-products/titanium-diaphragm.webp',
  },
  'titanium-clad-copper': {
    title: 'Titanium-Clad Copper Manufacturer',
    description:
      'Titanium-clad copper bimetal in Grade 1, 2, 7 and 12 for chlor-alkali, electroplating, cathodic protection and heat transfer service.',
    sku: 'TP-CLAD-COPPER',
    category: 'Titanium-Clad Copper',
    material: 'Grade 2 Cladding / UNS R50400 · Grade 7 Cladding / UNS R52400 · Grade 12 Cladding / UNS R53400 · Grade 1 Cladding / UNS R50250',
    additionalType: 'Titanium-Clad Copper',
    image: '/images/titanium-products/titanium-clad-copper.webp',
  },
};
