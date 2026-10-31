/**
 * Industry sectors served.
 *
 * Single source of truth for the industries listing and the industry
 * detail pages. The slug is the URL segment, so it must stay stable.
 */

export interface Industry {
  slug: string;
  title: string;
  /** Meta description, 70-175 characters. */
  description: string;
  /** Short positioning line. */
  summary: string;
  /** Longer description of the sector and how titanium applies in it. */
  detail: string;
  /** Image path under public/images. */
  image: string;
  /** What a buyer in this sector typically specifies. */
  reviewBasis: string[];
  /** Typical titanium product forms used in this sector. */
  productForms: string[];
  /** Typical documentation and inspection scope. */
  evidence: string[];
}

export const industries: Industry[] = [
  {
    slug: 'chemical-processing',
    description:
      'Titanium plate, tube, fittings and clad copper for corrosive chemical service, selected against media, concentration, temperature and the governing design specification.',
    title: 'Chemical & Industrial Processing',
    summary: 'Corrosive process service, heat exchange and containment equipment.',
    detail:
      'Chemical plant equipment is designed around the media, its concentration and its temperature rather than around a material name. Titanium is specified where chloride or reducing conditions make carbon steel unsuitable, but the grade still has to be confirmed against the actual process before it is ordered.',
    image: '/images/products/titanium-fittings.webp',
    reviewBasis: [
      'Media composition, concentration and contamination risk',
      'Operating temperature, pressure and phase behaviour',
      'Chloride content, oxidising or reducing conditions',
      'Design pressure, code basis and governing specification',
      'Weld joint design, corrosion allowance and inspection scope',
    ],
    productForms: [
      'Plate, sheet and cut blanks',
      'Seamless and welded tube',
      'Pipe fittings and flanges',
      'Clad copper bimetal',
    ],
    evidence: [
      'EN 10204 3.1 material certificate',
      'Heat and lot traceability',
      'Dimensional inspection report',
      'PMI verification where grades differ within an assembly',
    ],
  },
  {
    slug: 'marine-offshore',
    title: 'Marine & Offshore',
    summary: 'Seawater systems, ballast, hulls and offshore structures.',
    description:
      'Titanium materials, fasteners and sacrificial anodes for seawater service, selected against galvanic compatibility, hydrostatic load and cathodic protection strategy.',
    detail:
      'Marine service combines continuous chloride exposure, hydrostatic pressure and vibration. Titanium is used where seawater corrosion, galvanic compatibility or weight matters, and where the design has to combine material properties with cathodic protection strategy.',
    image: '/images/industries/marine-offshore.webp',
    reviewBasis: [
      'Seawater exposure, immersion depth and splash zone conditions',
      'Galvanic coupling, isolation and electrical bonding',
      'Design pressure, hydrostatic load and vibration duty',
      'Preheat, welding and distortion control for seawater service',
      'Cathodic protection strategy and anode-bed design basis',
    ],
    productForms: [
      'Marine grade plate and sheet',
      'Seamless tube for seawater systems',
      'Fasteners and threaded components',
      'MGPS and sacrificial anodes',
    ],
    evidence: [
      'Grade and heat traceability',
      'Weld procedure and welder qualification records',
      'Dimensional and surface inspection report',
      'Anode coating loading verified by XRF where specified',
    ],
  },
  {
    slug: 'aerospace',
    description:
      'Ti-6Al-4V plate, bar, forgings and fasteners to AMS and ASTM specifications, with full heat traceability and first-article inspection records.',
    title: 'Aerospace & Advanced Engineering',
    summary: 'Structural, engine and high-performance components.',
    detail:
      'Aerospace supply is defined by the governing specification and the revision of the drawing, not by a generic titanium grade name. Alloy selection, billet traceability and the inspection regime all follow the customer-approved process.',
    image: '/images/industries/aerospace.webp',
    reviewBasis: [
      'AMS, ASTM or customer specification and revision',
      'Alloy, temper and billet size against the approved process',
      'Microstructure, machinability and allowance for finishing',
      'Fatigue, fracture and stress-corrosion requirements',
      'First-article inspection and source approval conditions',
    ],
    productForms: [
      'Ti-6Al-4V plate, sheet, bar and billet',
      'Aerospace fasteners and threaded parts',
      'Closed die forgings and ring forgings',
      'Machined structural components',
    ],
    evidence: [
      'Full heat and lot traceability',
      'Mechanical testing to the governing specification',
      'Microstructure verification where required',
      'First-article inspection report and dimensional records',
    ],
  },
  {
    slug: 'medical',
    description:
      'Grade 23 ELI plate, bar, wire and precision balls for implant and bioprocess use, with surface condition, cleaning and packaging evidence to order.',
    title: 'Medical & Bioprocessing',
    summary: 'Implant, instrument and bioprocess components.',
    detail:
      'Medical titanium is specified as an implant or device material, which means the material certificate alone does not close the requirement. Surface condition, cleaning, packaging and biocompatibility evidence sit alongside the alloy specification.',
    image: '/images/titanium-products/industry-medical-precision.webp',
    reviewBasis: [
      'ASTM F136 / F348 alloy and condition requirement',
      'Surface finish, roughness and passivation route',
      'Cleaning, packaging and sterilisation compatibility',
      'Biocompatibility and surface-treatment evidence required',
      'Traceability from melt to delivered part',
    ],
    productForms: [
      'Grade 23 ELI plate, sheet, bar and wire',
      'Precision balls and spheres',
      'Formed diaphragms and drawn tube',
      'Mesh and welded components',
    ],
    evidence: [
      'EN 10204 3.1 or 3.2 material certificate',
      'Full melt-to-part traceability',
      'Surface roughness and passivation records',
      'Dimensional inspection against the drawing',
    ],
  },
  {
    slug: 'cathodic-protection',
    description:
      'MMO linear, ribbon, tubular and disc anodes for impressed-current protection, designed from the protection criterion, design current and anode-bed geometry.',
    title: 'Cathodic Protection & Infrastructure',
    summary: 'Pipelines, tanks, concrete and buried assets.',
    detail:
      'Cathodic protection supply starts from the protection criterion and the anode-bed geometry, not from an anode dimension. MMO coating selection, substrate design and the installation environment all affect whether the design current is met over the intended life.',
    image: '/images/industries/cathodic-protection.webp',
    reviewBasis: [
      'Protection criterion, design current and environment resistivity',
      'Anode-bed geometry, soil and installation conditions',
      'Coating system, substrate grade and geometry',
      'Cable, connection and electrical continuity requirement',
      'Polarisation behaviour and the operating electrolyte',
    ],
    productForms: [
      'MMO linear and ribbon anodes',
      'Tubular, rod and disc anodes',
      'Platinised titanium anodes',
      'Reference and monitoring electrodes',
    ],
    evidence: [
      'Substrate grade and traceability',
      'Coating loading verified by XRF',
      'Surface elemental composition report',
      'Dimensional and electrical continuity checks',
    ],
  },
  {
    slug: 'water-treatment',
    description:
      'Salt chlorination cells, MMO anodes and electrolysis packages for water treatment and desalination, sized from chemistry, flow and current duty.',
    title: 'Water Treatment & Desalination',
    summary: 'Disinfection, desalination and electrochemical water treatment.',
    detail:
      'Water treatment combines a chemical duty with a mechanical duty. The anode has to survive the chemistry, and the cell has to be designed around flow, current density and scale behaviour rather than around tank volume.',
    image: '/images/industries/water-treatment.webp',
    reviewBasis: [
      'Feedwater or brine chemistry, chloride and impurity load',
      'Production target, flow rate and cell configuration',
      'Current density, current efficiency and power basis',
      'Scaling, fouling and gas release behaviour',
      'Cell construction, electrodes and intercell spacing',
    ],
    productForms: [
      'Salt chlorination and hypochlorite cells',
      'MMO anodes for electrolysis',
      'Electrolysis cells and cell packages',
      'PEM electrolyzer stacks for on-site hydrogen',
    ],
    evidence: [
      'Electrode grade and traceability',
      'Coating loading and surface composition report',
      'Cell build and dimensional inspection records',
      'Functional test records where agreed',
    ],
  },
  {
    slug: 'electroplating',
    description:
      'Platinised and MMO titanium anodes, baskets and racks for plating lines, selected against bath chemistry, current density and contact design.',
    title: 'Electroplating & Surface Finishing',
    summary: 'Decorative, functional and advanced plating lines.',
    detail:
      'Plating anodes have to hold a stable current density without shedding into the bath. Substrate grade, geometry and coating type are chosen together, because the anode is only one part of the cell.',
    image: '/images/products/titanium-anodes.webp',
    reviewBasis: [
      'Plating chemistry, bath temperature and contaminants',
      'Required current density and anode-to-workpiece ratio',
      'Anode geometry, surface area and spacing',
      'Platinum loading or MMO coating specification',
      'Contact design and current distribution',
    ],
    productForms: [
      'Platinised titanium anodes',
      'MMO anodes for hard and precious plating',
      'Anode baskets and cathodic baskets',
      'Titanium racks, jigs and contacts',
    ],
    evidence: [
      'Substrate grade certificate',
      'Platinum loading or coating thickness report',
      'Surface elemental composition by XRF',
      'Dimensional inspection of the finished anode',
    ],
  },
  {
    slug: 'electrowinning',
    description:
      'MMO anodes, cathode baskets and clad copper anodes for metal recovery, selected against electrolyte composition, impurities and current distribution.',
    title: 'Mining, Electrowinning & Metals',
    summary: 'Hydrometallurgy and metal recovery operations.',
    detail:
      'Electrowinning cells deposit metal from solution, which makes electrolyte purity and current distribution decisive. Anode selection has to account for the impurity species that will concentrate in the anolyte.',
    image: '/images/industries/metal-electrowinning.webp',
    reviewBasis: [
      'Electrolyte composition, impurity species and target metal',
      'Current density, current efficiency and cell voltage basis',
      'Anode surface area, spacing and flow arrangement',
      'Impurity control and anolyte management',
      'Sludge, deposit and suspension handling',
    ],
    productForms: [
      'MMO anodes for electrowinning',
      'Titanium cathode baskets',
      'Titanium-clad copper anodes',
      'Cell busbar and contact components',
    ],
    evidence: [
      'Grade and heat traceability',
      'Coating loading verification',
      'Dimensional inspection report',
      'Anode surface condition on delivery',
    ],
  },
  {
    slug: 'hydrogen-energy',
    description:
      'PEM electrolyzer stacks and packaged systems for green hydrogen, sized from required output, purity, pressure and the available power supply.',
    title: 'Hydrogen & Energy',
    summary: 'Green hydrogen production, fuel cells and energy storage.',
    detail:
      'Hydrogen projects are decided by the required output, the available power and the operating profile. Stack sizing, gas purity, pressure and the balance of plant all have to be specified together before a system can be quoted.',
    image: '/images/industries/energy-hydrogen.webp',
    reviewBasis: [
      'Required hydrogen output, purity and pressure',
      'Available power supply and operating profile',
      'Stack format, cell count and system scale',
      'Balance of plant, control scope and safety requirements',
      'Factory testing, acceptance criteria and site conditions',
    ],
    productForms: [
      'PEM electrolyzer stacks',
      'Packaged laboratory and mid-range systems',
      'Containerised industrial-scale systems',
      'Titanium bipolar plates, frames and fittings',
    ],
    evidence: [
      'Stack assembly and pressure test records',
      'Performance and purity test data',
      'Component traceability for the build',
      'Factory acceptance test report as agreed',
    ],
  },
];
