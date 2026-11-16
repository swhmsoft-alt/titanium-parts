/**
 * Content model of the titanium grade hub page.
 *
 * The hub is the entry point for the material-driven half of the site: a
 * buyer who searches by grade arrives here, compares the grades and then
 * either follows the grade page or follows the product the grade is made
 * into. The application matrix and the standards table are the two sections
 * that make the hub a working tool rather than a list of links.
 */

import routes from './routes.json';

/** Every route that exists in the build. Internal links are validated against it. */
const routeWhitelist: ReadonlySet<string> = new Set(routes as string[]);

/** Fail the build when a link target is missing from the build. */
function assertRoute(href: string, label: string): string {
  if (!routeWhitelist.has(href)) {
    throw new Error(`titanium-grades-hub: ${label} points at ${href}, which is not part of the build`);
  }
  return href;
}

/** Metadata of the hub page. */
export const hubMeta = {
  title: 'Titanium Grades: Composition, Properties & Uses',
  description:
    'A technical reference for the nine titanium grades we supply: chemical composition, mechanical properties, ASTM, ASME, AMS and EN standards, and the products per grade.',
  eyebrow: 'Titanium Grades · Technical Reference',
  h1: 'Nine Titanium Grades, Compared on the Numbers That Decide the Order',
  lede:
    'A titanium grade is not a product. It is a chemistry and a property window, and everything downstream — the forming route, the weld procedure, the corrosion behaviour, the coating life — follows from it. This library sets out the composition and the mechanical windows for the grades we work with, the standards that carry them, and the products and electrochemical applications each grade is normally chosen for.',
};

/** The two selection routes through the titanium families. */
export const selectionRoutes = [
  {
    label: 'Commercially pure',
    title: 'CP Grades: Grade 1, 2, 3, 4, 7 and 12',
    body:
      'Commercially pure titanium carries no alloying element in its name, or only a small one. That is what makes it the best corrosion-resistant titanium in oxidising media, and it is why it forms so easily. The family splits by strength: Grade 1 for forming, Grade 2 as the general default, Grade 3 and Grade 4 where load is the problem, and Grade 7 and Grade 12 where a reducing acid is the problem.',
    href: assertRoute('/titanium-products/titanium-plate/', 'CP route plate'),
  },
  {
    label: 'Alloy',
    title: 'Alloy Grades: Grade 5, Grade 9 and Grade 23',
    body:
      'Adding aluminium and vanadium raises the strength far above the CP family, at the cost of formability, weldability and price. Grade 5 is the default engineering alloy, Grade 9 is the version that still forms and welds, and Grade 23 is the extra-low-interstitial form written into implant standards. The decision is a load decision, not a corrosion decision.',
    href: assertRoute('/titanium-machining-parts/', 'alloy route parts'),
  },
];

/** One row of the grade-to-application matrix. */
export interface ApplicationRow {
  /** The application duty. */
  application: string;
  /** The grade normally written for it. */
  primary: string;
  /** The grade to review when the duty is more severe. */
  review: string;
  /** Why the primary grade is written. */
  reason: string;
  /** The route that shows the products made from the grade. */
  href: string;
}

/** The grade-to-application matrix of the hub page. */
export const applicationMatrix: ApplicationRow[] = [
  {
    application: 'Chemical process equipment, oxidising media',
    primary: 'Grade 2',
    review: 'Grade 1 when forming dominates the design',
    reason: 'Grade 2 is the reference CP grade for nitric and mixed oxidising acids.',
    href: assertRoute('/titanium-products/titanium-plate/', 'matrix chemical plate'),
  },
  {
    application: 'Reducing acid service, including sulphuric acid',
    primary: 'Grade 12',
    review: 'Grade 7',
    reason: 'The molybdenum and nickel additions, or palladium, slow anodic dissolution.',
    href: assertRoute('/titanium-products/titanium-tubing/', 'matrix acid tube'),
  },
  {
    application: 'Marine, desalination and seawater service',
    primary: 'Grade 2',
    review: 'Grade 12 where chloride temperature is high',
    reason: 'General CP corrosion performance with the widest product-form coverage.',
    href: assertRoute('/industries/marine-offshore/', 'matrix marine'),
  },
  {
    application: 'Heat exchangers and thin-wall tube',
    primary: 'Grade 2',
    review: 'Grade 12 for aggressive condensate',
    reason: 'Formability and weldability in thin sections with clean corrosion behaviour.',
    href: assertRoute('/titanium-products/titanium-tubing/', 'matrix heat exchanger'),
  },
  {
    application: 'High-strength machined and forged parts',
    primary: 'Grade 5',
    review: 'Grade 9 where formability is the constraint',
    reason: 'The strength-to-weight ratio that the CP family cannot reach.',
    href: assertRoute('/titanium-products/titanium-rod-bar/', 'matrix strength rod'),
  },
  {
    application: 'Fasteners and fatigue-critical fixing',
    primary: 'Grade 5',
    review: 'Grade 23 for implant-grade fatigue duty',
    reason: 'Strength with the corrosion resistance that a steel fastener cannot offer.',
    href: assertRoute('/titanium-products/titanium-bolts/', 'matrix fasteners'),
  },
  {
    application: 'Medical and dental implant stock',
    primary: 'Grade 23',
    review: 'Grade 5 for non-implant medical hardware',
    reason: 'Extra-low interstitials for ductility and fatigue life under cyclic load.',
    href: assertRoute('/industries/medical/', 'matrix medical'),
  },
  {
    application: 'Titanium anodes, mesh and coated electrode substrate',
    primary: 'Grade 1',
    review: 'Grade 2 for rigid forms, Grade 7 for reducing acid',
    reason: 'Formability for expanded mesh and coating survival on the active surface.',
    href: assertRoute('/titanium-anode/', 'matrix anode'),
  },
  {
    application: 'PEM electrolyzer stack components',
    primary: 'Grade 1 and Grade 2',
    review: 'Grade 12 for balance-of-plant cooling parts',
    reason: 'Formability and ion cleanliness in the anode compartment, strength in the stack frame.',
    href: assertRoute('/pem-electrolyzer/', 'matrix pem'),
  },
];

/** One row of the standards cross-reference. */
export interface StandardRow {
  /** The standard family. */
  standard: string;
  /** What it covers. */
  covers: string;
  /** The grades it carries in this library. */
  grades: string;
  /** The note that keeps the standard from being read as a purchase order. */
  note: string;
}

/** The standards cross-reference of the hub page. */
export const standardRows: StandardRow[] = [
  {
    standard: 'ASTM B265',
    covers: 'Titanium sheet, plate and strip',
    grades: 'Grade 1, 2, 3, 4, 5, 7, 9, 12',
    note: 'The revision named on the certificate is the one that governs.',
  },
  {
    standard: 'ASTM B348',
    covers: 'Titanium bar, rod and billets',
    grades: 'Grade 1, 2, 3, 4, 5, 7, 9, 12, 23',
    note: 'Bar and sheet carry different strength windows; the form decides the table.',
  },
  {
    standard: 'ASTM B861 / B338',
    covers: 'Seamless and welded titanium tube and pipe',
    grades: 'Grade 1, 2, 7, 12',
    note: 'Wall condition and weld route change the delivered tolerances.',
  },
  {
    standard: 'ASME SB-265',
    covers: 'Pressure equipment plate and strip',
    grades: 'Grade 1, 2, 3, 4, 9, 12',
    note: 'The ASME edition carries its own qualification and marking rules.',
  },
  {
    standard: 'AMS 4900A / 4944',
    covers: 'Aerospace sheet, plate, bar and billet',
    grades: 'Grade 5, Grade 23',
    note: 'Aerospace specifications add process and inspection requirements.',
  },
  {
    standard: 'ASTM F136 / ISO 5832-3',
    covers: 'Implant material',
    grades: 'Grade 23',
    note: 'Material compliance is not finished-device approval.',
  },
  {
    standard: 'EN 3.1 / 3.2 and EN ISO 4941-1',
    covers: 'European designations for the CP and alloy families',
    grades: 'Grade 1, 2, 3, 4, 5, 7, 9, 12',
    note: 'The European number and the ASTM grade are not always interchangeable.',
  },
];

/** The questions the hub answers. */
export const hubFaqs = [
  {
    question: 'Which titanium grade should I specify for a general chemical application?',
    answer:
      'Grade 2 is the starting point for a general chemical application because it carries the best balance of corrosion behaviour, mechanical properties and availability in every product form. If the medium is a strongly reducing acid, the review moves to Grade 12 or Grade 7. If the component has to be deep drawn, the review moves to Grade 1. The medium and the forming route together decide it, not the grade name.',
  },
  {
    question: 'Is Grade 5 automatically better than Grade 2?',
    answer:
      'No. Grade 5 is stronger, and that is the only axis on which it wins. It forms less easily, welds more critically, costs more and does not resist strongly oxidising media as well as the CP grades. For a formed or a welded component with no structural load requirement, Grade 2 or Grade 1 is usually the correct material and Grade 5 is simply a costlier answer.',
  },
  {
    question: 'What is the difference between Grade 7 and Grade 12?',
    answer:
      'Both add small alloying quantities to a commercially pure base to improve resistance to reducing acids. Grade 7 uses palladium at around 0.2 percent and gives the strongest performance in the most aggressive reducing media. Grade 12 uses molybdenum and nickel at a fraction of the cost and covers a wider range of duties. Where the duty is genuinely severe, Grade 7 is the answer; where it is moderate, Grade 12 is usually sufficient.',
  },
  {
    question: 'Can I buy Grade 23 for a chemical application instead of Grade 2?',
    answer:
      'Technically yes, and it is usually a poor decision. Grade 23 is an implant alloy with tightened interstitial limits, so it carries a premium that buys nothing in most chemical duties, and its corrosion behaviour is not the target of the grade. Write Grade 2 or Grade 12 for the service and reserve Grade 23 for implant and medical device work.',
  },
  {
    question: 'Which grade do you use for titanium anodes?',
    answer:
      'Grade 1 for expanded mesh and formed electrode bodies, because the mesh is stretched during manufacture and the coating has to survive the formed surface. Grade 2 for rigid tubular, rod and plate anodes and for the current feed, because those parts carry mechanical load. Grade 7 is the review route when the electrolyte is a strongly reducing acid. The medium and the geometry decide it before the grade does.',
  },
  {
    question: 'Which grade do you use for PEM electrolyzer components?',
    answer:
      'Grade 1 for the porous transport layer and the platinised anode-side components, because they are formed into a fine porous structure and have to release no metal ions into the membrane. Grade 2 for the bipolar plate, the end plate and the structural parts, because those are loaded and bolted. Grade 12 is reviewed for balance-of-plant cooling and gas-handling parts that see acidic process water outside the stack.',
  },
  {
    question: 'Do the numbers on this page make an order?',
    answer:
      'No. The figures on this page are reference windows drawn from the published standard families, so that you can narrow the field quickly. An order is defined by the standard revision, the product form, the condition, the dimensions, the inspection scope and the certificate requirement. Those are confirmed against the standard and the drawing during the quotation review.',
  },
];
