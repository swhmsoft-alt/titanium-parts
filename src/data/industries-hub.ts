/**
 * Content model for the industry hub page (`/industries/`).
 *
 * Single source of truth for the hub: technical routes, industry matrix,
 * cross-industry selection table, qualification boundary, RFQ parameter
 * groups and FAQ.
 *
 * The industry matrix and the comparison table are generated from
 * `industries-data.ts` — the same array that builds the industry detail
 * pages — so a card, a table row and a detail route cannot drift apart.
 * A missing entry fails the build instead of silently dropping a sector.
 */

import { industries } from './industries-data';
import routes from './routes.json';

/** Every route that exists in the build. Internal links are validated against it. */
export const routeWhitelist: ReadonlySet<string> = new Set(routes);

/**
 * Resolve the link for an industry detail page.
 *
 * Falls back to the RFQ anchor of the hub page when the route is not part of
 * the build, so the page can never emit a dead internal link.
 */
export function industryHref(slug: string): string {
  const href = `/industries/${slug}/`;
  return routeWhitelist.has(href) ? href : '#rfq';
}

/** Fail the build when a link target is missing from the build. */
function assertRoute(href: string, label: string): string {
  if (!routeWhitelist.has(href)) {
    throw new Error(`industries-hub: ${label} points at ${href}, which is not part of the build`);
  }
  return href;
}

export const hubMeta = {
  eyebrow: 'Industries',
  h1: 'Titanium, Electrochemical & Hydrogen Solutions by Industry',
  /** SEO title — the rendered <title> must stay at 70 characters or fewer. */
  title: 'Titanium & Hydrogen Solutions by Industry | Titanium Parts',
  description:
    'Engineering-led supply of titanium materials, electrochemical anodes and PEM hydrogen systems across nine industrial sectors, matched to media, duty and failure risk.',
  lede: 'Every enquiry starts with the medium, the duty and the way the part fails in service. We review those three things first, because they decide the material, the coating and the geometry long before a product name does. The sectors below are the ones where we already know which questions control the outcome.',
};

/** A technical route: one of the three product families the site sells into. */
export interface TechnicalRoute {
  slug: string;
  title: string;
  href: string;
  summary: string;
  points: string[];
}

export const technicalRoutes: TechnicalRoute[] = [
  {
    slug: 'titanium-products',
    title: 'Titanium Products & Machined Parts',
    href: assertRoute('/titanium-products/', 'technical route'),
    summary:
      'Mill forms, semi-finished products and machined components for corrosive, high-load and high-purity duty.',
    points: [
      'Plate, sheet, coil, bar, tube, wire and mesh',
      'Fittings, flanges, forgings and titanium-clad copper',
      'CNC machined parts to drawing, with datums and inspection scope defined',
    ],
  },
  {
    slug: 'titanium-anodes',
    title: 'Electrochemical Anodes',
    href: assertRoute('/titanium-anode/', 'technical route'),
    summary:
      'Coated and uncoated anodes for electrolysis, plating and cathodic protection duty.',
    points: [
      'MMO titanium anodes by geometry, from linear to wire',
      'Platinised and specialty coated anodes',
      'Cathodic protection, reference electrodes and anti-fouling systems',
    ],
  },
  {
    slug: 'pem-electrolyzer',
    title: 'Hydrogen & Electrolysis Systems',
    href: assertRoute('/pem-electrolyzer/', 'technical route'),
    summary:
      'PEM stacks, packaged generators and on-site electrolysis packages for hydrogen and chlorine duty.',
    points: [
      'PEM electrolyzer stacks, bipolar plates and frames',
      'Laboratory, mid-range and industrial packaged systems',
      'On-site hydrogen, salt chlorination and hypochlorite generation',
    ],
  },
];

/**
 * Per-industry content that the hub adds on top of the shared industry data.
 *
 * `industries-data.ts` holds what is true of a sector. This map holds what
 * the hub needs to say about it: the operating pain point, the matched
 * solution and the RFQ inputs that control the decision. Keyed by the
 * industry slug so a new industry cannot be added without its hub content.
 */
export interface IndustryMatrixEntry {
  /** The industry slug this entry belongs to. */
  slug: string;
  /** Operating pain point — the failure mode the sector actually sees. */
  pain: string;
  /** Typical matched solution — the route, not the part number. */
  solution: string;
  /** Primary medium or electrolyte for the comparison table. */
  medium: string;
  /** The failure risk that governs selection in this sector. */
  failureRisk: string;
  /** RFQ parameters that must be supplied for this sector. */
  rfqParameters: string[];
}

export const industryMatrix: IndustryMatrixEntry[] = [
  {
    slug: 'chemical-processing',
    pain: 'Chloride-bearing or reducing process media attack carbon steel and stainless within one process cycle, and weld heat tint opens the corrosion path.',
    solution: 'Grade 2 titanium plate, seamless tube and fittings selected against the actual medium, with clad copper bimetal where the duty needs a copper-backed approach.',
    medium: 'Chloride-bearing and reducing process media',
    failureRisk: 'Pitting and crevice corrosion at welds and gasket faces',
    rfqParameters: ['Media composition and concentration', 'Operating temperature and pressure', 'Chloride content and oxidising/reducing condition', 'Design code and governing specification'],
  },
  {
    slug: 'marine-offshore',
    pain: 'Continuous seawater exposure couples titanium to dissimilar metals, and splash-zone duty adds hydrostatic load and vibration on top of the corrosion duty.',
    solution: 'Marine grade plate and seamless tube with fastener and sacrificial anode packages reviewed against galvanic isolation and the cathodic protection basis.',
    medium: 'Seawater, ballast and splash zone',
    failureRisk: 'Galvanic corrosion at mixed-metal joints',
    rfqParameters: ['Immersion depth and exposure regime', 'Galvanic coupling and isolation detail', 'Design pressure and vibration duty', 'Cathodic protection strategy and anode-bed basis'],
  },
  {
    slug: 'aerospace',
    pain: 'Supply is governed by the specification revision and the drawing, not by a generic grade name, and the approved process has to survive every lot.',
    solution: 'Ti-6Al-4V plate, bar, billet and closed-die forgings with full heat traceability and first-article inspection to the customer-approved process.',
    medium: 'Structural, engine and fastener duty',
    failureRisk: 'Fatigue and stress-corrosion cracking below design life',
    rfqParameters: ['AMS/ASTM specification and revision', 'Alloy, temper and billet size', 'Microstructure and machinability requirement', 'First-article and source-approval conditions'],
  },
  {
    slug: 'medical',
    pain: 'An implant or bioprocess requirement is not closed by a material certificate — surface condition, cleaning and packaging carry equal weight.',
    solution: 'Grade 23 ELI plate, bar, wire and precision balls supplied with surface condition, cleaning and packaging evidence agreed to order.',
    medium: 'Implant, instrument and bioprocess contact',
    failureRisk: 'Surface contamination and packaging-induced contamination',
    rfqParameters: ['ASTM F136/F348 alloy and condition', 'Surface finish, roughness and passivation route', 'Cleaning and sterilisation compatibility', 'Traceability from melt to delivered part'],
  },
  {
    slug: 'cathodic-protection',
    pain: 'The protection criterion and the anode-bed geometry decide the design, and an anode dimension on its own does not meet either.',
    solution: 'MMO linear, ribbon, tubular and disc anodes designed from the design current, with substrate grade and coating loading verified to order.',
    medium: 'Soil, seawater and concrete electrolytes',
    failureRisk: 'Insufficient design current over the protection life',
    rfqParameters: ['Protection criterion and design current', 'Environment resistivity and installation conditions', 'Anode-bed geometry and substrate grade', 'Cable, connection and continuity requirement'],
  },
  {
    slug: 'water-treatment',
    pain: 'Water treatment is a chemical duty and a mechanical duty at once — the anode has to survive the chemistry and the cell has to survive the flow.',
    solution: 'Salt chlorination and hypochlorite cells with MMO anodes, sized from chemistry, flow and current density rather than from tank volume.',
    medium: 'Brine, seawater and industrial wastewater',
    failureRisk: 'Scaling and fouling on the electrode surface',
    rfqParameters: ['Feedwater or brine chemistry and impurity load', 'Production target, flow rate and cell configuration', 'Current density, efficiency and power basis', 'Scaling, fouling and gas-release behaviour'],
  },
  {
    slug: 'electroplating',
    pain: 'A plating anode has to hold a stable current density without shedding into the bath, and the anode is only one part of the cell.',
    solution: 'Platinised and MMO titanium anodes with baskets, racks and jigs, where substrate grade, geometry and coating type are selected together.',
    medium: 'Plating baths: decorative, functional and precious metal',
    failureRisk: 'Coating shedding and bath contamination',
    rfqParameters: ['Plating chemistry and bath temperature', 'Required current density and anode-to-workpiece ratio', 'Anode geometry, surface area and spacing', 'Platinum loading or MMO coating specification'],
  },
  {
    slug: 'electrowinning',
    pain: 'Electrowinning deposits metal from solution, so electrolyte purity and current distribution decide the outcome more than the metal does.',
    solution: 'MMO anodes, titanium cathode baskets and clad copper anodes, selected against the impurity species that concentrate in the anolyte.',
    medium: 'Hydrometallurgical electrolyte and anolyte',
    failureRisk: 'Impurity build-up and uneven current distribution',
    rfqParameters: ['Electrolyte composition and impurity species', 'Target metal and current efficiency basis', 'Anode surface area, spacing and flow arrangement', 'Impurity control and anolyte management'],
  },
  {
    slug: 'hydrogen-energy',
    pain: 'A hydrogen project is decided by required output, available power and operating profile — the stack catalogue comes after those three answers.',
    solution: 'PEM electrolyzer stacks and packaged systems sized from output, purity and pressure, with titanium bipolar plates, frames and fittings.',
    medium: 'Deionised water feed and high-purity hydrogen product',
    failureRisk: 'Degradation from start-stop cycling and feed quality',
    rfqParameters: ['Required hydrogen output, purity and pressure', 'Available power supply and operating profile', 'Stack format, cell count and system scale', 'Balance of plant and safety requirements'],
  },
];

/** One hub card per industry, generated from the shared industry array. */
export interface IndustryCard {
  slug: string;
  title: string;
  summary: string;
  image: string;
  href: string;
  pain: string;
  solution: string;
}

/**
 * Build the industry cards.
 *
 * The list is derived from `industries`, so the card count can never drift
 * away from the set of industry detail pages that are actually built.
 */
/** Lookup of the hub content by industry slug. */
const industryMatrixBySlug: ReadonlyMap<string, IndustryMatrixEntry> = new Map(
  industryMatrix.map((entry) => [entry.slug, entry]),
);

// The matrix content and the shared industry array must describe the same set
// of sectors in both directions — a mismatch fails the build.
if (industryMatrix.length !== industries.length) {
  throw new Error(
    `industries-hub: industryMatrix has ${industryMatrix.length} entries but industries has ${industries.length}`,
  );
}
for (const industry of industries) {
  if (!industryMatrixBySlug.has(industry.slug)) {
    throw new Error(
      `industries-hub: industryMatrix has no entry for industry "${industry.slug}"`,
    );
  }
}

/**
 * The industry matrix content, aligned with the shared industry array.
 *
 * A new industry without hub content fails the build instead of silently
 * dropping a sector from the page.
 */
export const industryCards: IndustryCard[] = industries.map((industry) => {
  const content = industryMatrixBySlug.get(industry.slug);
  if (!content) {
    throw new Error(
      `industries-hub: industry "${industry.slug}" has no hub content in industryMatrix`,
    );
  }
  return {
    slug: industry.slug,
    title: industry.title,
    summary: industry.summary,
    image: industry.image,
    href: industryHref(industry.slug),
    pain: content.pain,
    solution: content.solution,
  };
});
/** One row of the cross-industry selection table. */
export interface ComparisonRow {
  industry: string;
  medium: string;
  failureRisk: string;
  rfqParameters: string;
}

/** The comparison table, generated from the same industries array. */
export const comparisonRows: ComparisonRow[] = industries.map((industry) => {
  const content = industryMatrixBySlug.get(industry.slug);
  if (!content) {
    throw new Error(
      `industries-hub: industry "${industry.slug}" has no hub content in industryMatrix`,
    );
  }
  return {
    industry: industry.title,
    medium: content.medium,
    failureRisk: content.failureRisk,
    rfqParameters: content.rfqParameters.join('; '),
  };
});

/**
 * The qualification boundary.
 *
 * Industry relevance means the duty is familiar, not that the order is
 * already approved. These two blocks state where that line sits.
 */
export const qualification = {
  fromInquiry: {
    title: 'From Technical Inquiry to Qualified Scope',
    body: 'An inquiry becomes a qualified scope through a fixed sequence. The application basis is confirmed first, then the material or coating, then the manufacturing and inspection route. Nothing is committed to a specification until the buyer has approved the basis in writing, and any responsibility not stated in the quotation stays with the buyer or the system integrator.',
    steps: [
      'Application basis confirmed: medium, temperature, pressure, duty and failure risk',
      'Material, coating or system route selected against that basis',
      'Manufacturing route, tolerance and inspection scope agreed',
      'Documentation, marking, packing and delivery scope written into the order',
      'Deviations and buyer-side responsibilities listed explicitly',
    ],
  },
  specialized: {
    title: 'Specialized Applications Requiring Qualification Review',
    body: 'Some applications carry an approval chain that sits above a normal purchase order. A material certificate is a starting point for those duties, never the approval itself. Each of the sectors below is reviewed case by case before a quotation is issued, and the evidence required is agreed before production starts.',
    items: [
      {
        sector: 'Aerospace',
        note: 'Specification revision, approved process, source approval and first-article inspection define the order.',
      },
      {
        sector: 'Medical',
        note: 'Implant and bioprocess duty requires surface condition, cleaning, packaging and biocompatibility evidence.',
      },
      {
        sector: 'Transportation',
        note: 'Rail, road and transit equipment are governed by customer specifications and qualification history.',
      },
    ],
  },
};
/** The three RFQ parameter groups of the inquiry section. */
export interface RfqGroup {
  title: string;
  summary: string;
  parameters: string[];
}

export const rfqGroups: RfqGroup[] = [
  {
    title: 'Material, Coating and Geometry',
    summary: 'What the part has to be, and what it has to be made of.',
    parameters: [
      'Grade, alloy, condition and governing specification with revision',
      'Coating system and loading metric with units and measurement method',
      'Product form and nominal dimensions',
      'Tolerance, surface finish and datum scheme',
      'Quantity, marking and packaging requirement',
    ],
  },
  {
    title: 'Service Condition and Duty',
    summary: 'What the part will actually meet in service.',
    parameters: [
      'Medium composition, concentration and impurity load',
      'Operating temperature, pressure and phase behaviour',
      'Current density, voltage, duty cycle and start-stop frequency',
      'Exposure regime, immersion depth and environment resistivity',
      'Design life and the failure mode being engineered out',
    ],
  },
  {
    title: 'Evidence, Delivery and Responsibility',
    summary: 'What has to be proven, and where the boundary sits.',
    parameters: [
      'Required documents: MTC, inspection report, test results, PMI',
      'Third-party inspection, witness points and FAT acceptance criteria',
      'Delivery destination, packing, marking and export documentation',
      'Required schedule and the commercial basis',
      'Governing design code, approval route and named responsibilities',
    ],
  },
];

/**
 * The FAQ of the decision section.
 *
 * The accordion on the page and the FAQPage JSON-LD are both rendered from
 * this one array, so the visible copy and the structured data cannot drift
 * apart.
 */
export interface HubFaq {
  question: string;
  answer: string;
}

export const hubFaqs: HubFaq[] = [
  {
    question: 'Should I start from an industry or from a specification?',
    answer: 'Start from the operating condition, not the industry name and not a product code. The medium, the temperature, the current density and the way the part fails in service determine the material and the coating. The industry sector only tells you which of those parameters usually dominates, which is why it is a useful starting point rather than an answer.',
  },
  {
    question: 'Which titanium grade is used for a corrosive chemical service?',
    answer: 'There is no default grade for chemical service. Grade 2 is frequently suitable, but the grade has to be confirmed against the actual media, its concentration, the temperature and the oxidising or reducing condition. Chloride content and contamination risk decide the outcome as much as the base metal does.',
  },
  {
    question: 'Does the industry selection guarantee the right product?',
    answer: 'No. Selecting an industry route narrows the problem to the parameters that usually control it, but it does not confirm material, coating or geometry. Every order still goes through the same technical review, and the material certificate confirms conformity to the stated order basis rather than fitness for the final application.',
  },
  {
    question: 'What does an RFQ for a titanium anode need to include?',
    answer: 'Include the reaction and electrolyte, the operating current density, the required anode geometry and surface area, the coating type and loading metric with units and measurement method, and the connection requirement. Service life cannot be guaranteed from loading alone, so the operating profile, impurities and shutdown practice have to be stated as well.',
  },
  {
    question: 'How much information is needed for a first quotation?',
    answer: 'Enough to identify the application basis: the medium, the temperature or duty, the dimensions or drawing, the material or coating requirement and the quantity. A complete specification is not required for the first review. Unknown items are identified during technical communication and confirmed before the order is released.',
  },
];
