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
}

export const productMeta: Record<string, ProductMeta> = {
  'titanium-plate': {
    title: 'Titanium Plate & Sheet Manufacturer',
    description:
      'Titanium plate and sheet in Grade 2, Grade 5, Grade 23 ELI and project grades, supplied cut to size with material certificates and inspection records.',
    sku: 'TP-PLATE-SHEET',
  },
  'titanium-rod-bar': {
    title: 'Titanium Rod & Bar Manufacturer',
    description:
      'Commercially pure and alloy titanium rod and bar in round, hex, square and hollow sections, ground to size and supplied with full traceability.',
    sku: 'TP-ROD-BAR',
  },
  'titanium-tubing': {
    title: 'Titanium Tube & Pipe Manufacturer',
    description:
      'Seamless and welded titanium tube and pipe to ASTM B338, B861 and B862, including heat exchanger, capillary and custom sizes with documented testing.',
    sku: 'TP-TUBE-PIPE',
  },
  'titanium-wire': {
    title: 'Titanium Wire Manufacturer',
    description:
      'Titanium wire in commercially pure, Ti-6Al-4V and Grade 23 ELI, supplied on coil, spool or straight length for forming, springs and medical use.',
    sku: 'TP-WIRE',
  },
  'titanium-mesh': {
    title: 'Titanium Mesh Manufacturer',
    description:
      'Titanium mesh in woven, expanded, perforated and welded constructions, with strand, aperture and grade specified against your filtration or screening duty.',
    sku: 'TP-MESH',
  },
  'titanium-bolts': {
    title: 'Titanium Fasteners Manufacturer',
    description:
      'Titanium bolts, screws, nuts, washers and studs in Grade 2, 5, 7 and 23, supplied to drawing with thread, finish and inspection requirements confirmed.',
    sku: 'TP-FASTENERS',
  },
  'titanium-fittings': {
    title: 'Titanium Pipe Fittings Manufacturer',
    description:
      'Titanium pipe fittings in Grade 2, 5, 7 and 12 for butt weld, socket weld and flanged connections, produced to ASME dimensions and project specifications.',
    sku: 'TP-FITTINGS',
  },
  'titanium-flanges': {
    title: 'Titanium Pipe Flanges Manufacturer',
    description:
      'Titanium pipe flanges to ASME B16.5 and B16.47 in Grade 2, 5, 7 and 12, available with raised face, flat face and custom facing dimensions.',
    sku: 'TP-FLANGES',
  },
  'titanium-foil-2': {
    title: 'Titanium Foil Manufacturer',
    description:
      'Titanium foil and thin strip in commercially pure and project alloys, supplied as coil, precision-slit strip or cut pieces for sealing and shielding.',
    sku: 'TP-FOIL',
  },
  'titanium-coil': {
    title: 'Titanium Coil & Strip Manufacturer',
    description:
      'Titanium coil and strip in Grade 2, Ti-6Al-4V and Grade 23 ELI, precision slit to width and supplied with coil weight, surface and packaging to requirement.',
    sku: 'TP-COIL-STRIP',
  },
  'titanium-forgings': {
    title: 'Titanium Forgings Manufacturer',
    description:
      'Titanium forgings produced by ring rolling and closed die forging in Grade 2, 5, 7 and 23, machined to drawing with heat and inspection traceability.',
    sku: 'TP-FORGINGS',
  },
  'titanium-balls': {
    title: 'Titanium Balls & Spheres Manufacturer',
    description:
      'Precision titanium balls, spheres and hollow buoyancy spheres in Grade 2, 5, 7 and 23, finished to diameter tolerance with surface finish confirmed.',
    sku: 'TP-BALLS',
  },
  'titanium-baskets': {
    title: 'Titanium Anode Baskets Manufacturer',
    description:
      'Titanium anode baskets and cathodic baskets for electroplating, pickling, cleaning and electrowinning, in Grade 1, 2, 7 and 12 with mesh or sheet construction.',
    sku: 'TP-BASKETS',
  },
  'titanium-diaphragm': {
    title: 'Titanium Diaphragms Manufacturer',
    description:
      'Titanium diaphragms formed and welded to drawing for pumps, sensors, speakers and pressure equipment, with thickness, profile and leak testing specified.',
    sku: 'TP-DIAPHRAGMS',
  },
  'titanium-clad-copper': {
    title: 'Titanium-Clad Copper Manufacturer',
    description:
      'Titanium-clad copper bimetal in Grade 1, 2, 7 and 12 for chlor-alkali, electroplating, cathodic protection and heat transfer service.',
    sku: 'TP-CLAD-COPPER',
  },
};
