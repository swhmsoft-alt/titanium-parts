/**
 * Titanium grade technical reference data.
 *
 * Single source of truth for the grade library at `/titanium-grades/`. The hub
 * page and every grade page are rendered from this array, so a comparison
 * table, a chemical composition table and a grade detail route cannot drift
 * apart.
 *
 * The figures below are reference windows taken from the published standard
 * families (ASTM B265 / B348 / B861 / F136, ASME, AMS, EN and JIS). They are
 * the ranges a supplier quotes against, not a substitute for the standard
 * revision named in the purchase order. Every grade page states this boundary
 * again, because a grade name alone never becomes an order basis.
 *
 * Product links are validated against the built route list at module load, so
 * a link to a page that does not exist fails the build instead of shipping a
 * dead internal link.
 */

import routes from './routes.json';

/** Every route that exists in the build. Internal links are validated against it. */
const routeWhitelist: ReadonlySet<string> = new Set(routes as string[]);

/** Fail the build when a link target is missing from the build. */
function assertRoute(href: string, label: string): string {
  if (!routeWhitelist.has(href)) {
    throw new Error(`titanium-grades: ${label} points at ${href}, which is not part of the build`);
  }
  return href;
}

/** One line of the chemical composition table. */
export interface GradeChemistry {
  /** Element symbol with the element name. */
  element: string;
  /** Upper limit in weight percent, when the standard states one. */
  max?: string;
  /** Lower limit in weight percent, when the standard states one. */
  min?: string;
  /** Why the element is controlled, or what it does in the material. */
  note?: string;
}

/** One line of the mechanical property table. */
export interface GradeMechanical {
  /** Property name as it appears on the certificate. */
  property: string;
  /** Reference window with its unit. */
  value: string;
  /** Condition the window belongs to. */
  note?: string;
}

/** A product page that is normally made in this grade. */
export interface GradeProductLink {
  href: string;
  label: string;
  /** Why this product form and this grade meet each other. */
  note: string;
}

/** The full technical content of one grade. */
export interface GradeSpec {
  /** URL segment of the grade page. */
  slug: string;
  /** Commercial grade designation, e.g. `Grade 2`. */
  grade: string;
  /** The designation used in Chinese and European mill practice. */
  unisteady: string;
  /** Material family: `CP`, `Alpha`, `Alpha-Beta` or `Near-Alpha`. */
  family: string;
  /** The alloy name of the grade. */
  name: string;
  /** The one-paragraph answer a buyer is looking for. */
  intro: string;
  /** The chemical composition reference window. */
  chemistry: GradeChemistry[];
  /** The mechanical property reference window. */
  mechanical: GradeMechanical[];
  /** The standards that carry this grade. */
  standards: string[];
  /** How the grade is normally processed into product. */
  processing: string[];
  /** Where the grade is normally used. */
  applications: string[];
  /** The products we supply in this grade. */
  productLinks: GradeProductLink[];
  /** The role this grade plays in titanium anode substrate selection. */
  anodeUse: string;
  /** The role this grade plays in PEM electrolyzer component selection. */
  pemUse: string;
}

/** The page route of a grade. */
export function gradeHref(slug: string): string {
  return `/titanium-grades/${slug}/`;
}

/**
 * The nine grades published in the library.
 *
 * The commercially pure grades come first because they carry most of the
 * volume in both mill products and electrochemical components; the alloys
 * follow in the order they are usually specified.
 */
export const grades: GradeSpec[] = [
  {
    slug: 'grade-1',
    grade: 'Grade 1',
    unisteady: 'TA1',
    family: 'CP',
    name: 'Commercially pure titanium, the most ductile CP grade',
    intro:
      'Grade 1 is the commercially pure grade with the lowest interstitial content, so it carries the highest ductility and the lowest strength of the CP family. It is the grade that can be deeply drawn, spun or expanded without cracking, which is why it is the standard choice for expanded mesh, foil, strip and formed shells. Its corrosion behaviour in oxidising media is excellent; in reducing acids it is no better than Grade 2, and in chloride service it is the more vulnerable of the two CP grades.',
    chemistry: [
      { element: 'Titanium (Ti)', min: 'Balance', note: 'The balance is stated in the standard, not as a figure.' },
      { element: 'Oxygen (O)', max: '0.25 %', note: 'Interstitial; raises strength and lowers ductility.' },
      { element: 'Nitrogen (N)', max: '0.15 %', note: 'Interstitial; strengthens and reduces formability.' },
      { element: 'Carbon (C)', max: '0.30 %', note: 'Limits differ by product form and standard revision.' },
      { element: 'Hydrogen (H)', max: '0.015 %', note: 'Controlled through melting and annealing practice.' },
      { element: 'Iron (Fe)', max: '0.30 %', note: 'Ferrous contamination limit from the melt.' },
    ],
    mechanical: [
      { property: 'Tensile strength', value: '≥ 276 MPa (40 ksi)', note: 'Minimum, annealed sheet and strip.' },
      { property: 'Yield strength', value: '≥ 172 MPa (25 ksi)', note: 'Minimum, annealed sheet and strip.' },
      { property: 'Elongation', value: '≥ 24 %', note: 'Minimum, annealed sheet and strip.' },
      { property: 'Hardness', value: '≈ 145 HB typical', note: 'Annealed; ASTM B265 sets no hardness requirement.' },
      { property: 'Density', value: '4.51 g/cm³', note: 'Constant for commercially pure titanium.' },
    ],
    standards: [
      'ASTM B265 — sheet, plate and strip',
      'ASTM B348 — bar, rod and billets',
      'ASTM B861 — seamless tube and pipe',
      'ASTM B338 — welded tube',
      'ASME SB-265 — plate and strip',
      'EN 3.1 / EN 3.2 and EN ISO 4941-1 — European designations',
      'JIS H 4000 and GB/T 3624 — Japanese and Chinese equivalents',
    ],
    processing: [
      'Deep drawing, spinning and hydroforming for formed shells and headers',
      'Cold rolling to foil, strip and coil',
      'Expanding into mesh, which is why the grade is the mesh standard',
      'Argon-arc welding with matching filler for fabricated assemblies',
    ],
    applications: [
      'Chemical process vessels, liners and formed components',
      'Deep-drawn and spun shells, funnels and hoppers',
      'Electrolytic cell hardware and expanded mesh',
      'Marine and desalination fabricated parts',
    ],
    productLinks: [
      { href: assertRoute('/titanium-products/titanium-mesh/', 'grade 1 mesh'), label: 'Titanium Mesh', note: 'Expanded mesh needs the ductility of Grade 1.' },
      { href: assertRoute('/titanium-products/titanium-foil-2/', 'grade 1 foil'), label: 'Titanium Foil', note: 'Foil and strip are cold rolled from the most ductile CP grade.' },
      { href: assertRoute('/titanium-products/titanium-coil/', 'grade 1 coil'), label: 'Titanium Coil & Strip', note: 'Cold rolled coil and slit strip in Grade 1.' },
      { href: assertRoute('/titanium-products/titanium-plate/', 'grade 1 plate'), label: 'Titanium Plate & Sheet', note: 'Plate and sheet in Grade 1 for forming work.' },
    ],
    anodeUse:
      'Grade 1 is the substrate of choice for expanded mesh anodes and for thin, formed or coated electrode bodies, because the mesh is stretched during manufacture and the coating has to survive a formed surface. Where the anode is a rigid tube, rod or current feed, Grade 2 is normally preferred instead.',
    pemUse:
      'Grade 1 is the substrate of the porous transport layer and of the platinised titanium components in the anode compartment of a PEM stack, because the component is formed into a fine porous structure and has to survive an acidic, high-potential anode environment without releasing metal ions into the membrane.',
  },
  {
    slug: 'grade-2',
    grade: 'Grade 2',
    unisteady: 'TA2',
    family: 'CP',
    name: 'Commercially pure titanium, the general industrial workhorse',
    intro:
      'Grade 2 is the commercially pure grade most industrial orders are written against. It carries more strength than Grade 1 at a small cost in ductility, and it is the grade with the widest product-form and size coverage in the mill market. In corrosion terms it is the reference grade for oxidising media such as nitric acid and for general chemical service; in seawater and reducing acids it is not the preferred CP grade, and neither is its strength an advantage there.',
    chemistry: [
      { element: 'Titanium (Ti)', min: 'Balance', note: 'The balance is stated in the standard, not as a figure.' },
      { element: 'Oxygen (O)', max: '0.25 %', note: 'Interstitial; the main strength contributor in CP grades.' },
      { element: 'Nitrogen (N)', max: '0.15 %', note: 'Interstitial; strengthens and reduces formability.' },
      { element: 'Carbon (C)', max: '0.08 %', note: 'Kept low to protect corrosion performance.' },
      { element: 'Hydrogen (H)', max: '0.015 %', note: 'Controlled through melting and annealing practice.' },
      { element: 'Iron (Fe)', max: '0.30 %', note: 'Ferrous contamination limit from the melt.' },
    ],
    mechanical: [
      { property: 'Tensile strength', value: '≥ 345 MPa (50 ksi)', note: 'Minimum, annealed sheet and strip.' },
      { property: 'Yield strength', value: '≥ 275 MPa (40 ksi)', note: 'Minimum, annealed sheet and strip.' },
      { property: 'Elongation', value: '≥ 20 %', note: 'Minimum, annealed sheet and strip.' },
      { property: 'Hardness', value: '≈ 145–160 HB typical', note: 'Annealed; no hardness requirement in ASTM B265.' },
      { property: 'Density', value: '4.51 g/cm³', note: 'Constant for commercially pure titanium.' },
    ],
    standards: [
      'ASTM B265 — sheet, plate and strip',
      'ASTM B348 — bar, rod and billets',
      'ASTM B861 — seamless tube and pipe',
      'ASTM B338 — welded tube',
      'ASME SB-265 — plate and strip',
      'EN 3.1 — the European designation for this grade',
      'JIS H 4000 and GB/T 3624 — Japanese and Chinese equivalents',
    ],
    processing: [
      'Rolling and drawing into sheet, plate, bar, tube and wire',
      'Machining of forgings, flanges and fittings from bar or plate',
      'Forming and welding with matching filler for fabricated assemblies',
      'Surface finishing and pickling to the agreed condition',
    ],
    applications: [
      'Chemical processing equipment and heat exchangers',
      'Piping, tube, fittings and flanges for process service',
      'Electrolytic cell hardware, baskets and electrode bodies',
      'Marine, desalination and water treatment components',
    ],
    productLinks: [
      { href: assertRoute('/titanium-products/titanium-plate/', 'grade 2 plate'), label: 'Titanium Plate & Sheet', note: 'The widest-specified CP product form.' },
      { href: assertRoute('/titanium-products/titanium-tubing/', 'grade 2 tubing'), label: 'Titanium Tube & Pipe', note: 'Grade 2 tube for chemical and heat-transfer duty.' },
      { href: assertRoute('/titanium-products/titanium-rod-bar/', 'grade 2 rod'), label: 'Titanium Rod & Bar', note: 'Rod and bar for machined and turned parts.' },
      { href: assertRoute('/titanium-products/titanium-fittings/', 'grade 2 fittings'), label: 'Titanium Fittings', note: 'Fittings and flanges machined from Grade 2 bar.' },
    ],
    anodeUse:
      'Grade 2 is the standard substrate for rigid titanium anodes — tubular, rod and plate geometries — and for the current feed and support structure around a coated element, because those parts carry mechanical load and heat rather than needing to be stretched. Grade 7 is the review route when the electrolyte is a strongly reducing acid.',
    pemUse:
      'Grade 2 is used for the bipolar plate, the end plate and the structural and current-collection parts of a PEM stack, where the component is loaded, bolted and dimensionally stable. The anode-side porous transport layer stays on Grade 1 for formability and ion cleanliness.',
  },
  {
    slug: 'grade-3',
    grade: 'Grade 3',
    unisteady: 'TA3',
    family: 'CP',
    name: 'Commercially pure titanium with a higher oxygen allowance',
    intro:
      'Grade 3 sits between Grade 2 and Grade 4 in the commercially pure family. Its oxygen allowance is higher, which raises the strength of the material without adding an alloying element. It is the grade to look at when a cold-formed component also has to carry load, and it is less commonly stocked than Grade 2, so availability has to be confirmed against the required form and size.',
    chemistry: [
      { element: 'Titanium (Ti)', min: 'Balance', note: 'The balance is stated in the standard, not as a figure.' },
      { element: 'Oxygen (O)', max: '0.35 %', note: 'Higher than Grade 2; this is what raises the strength.' },
      { element: 'Nitrogen (N)', max: '0.15 %', note: 'Interstitial; strengthens and reduces formability.' },
      { element: 'Carbon (C)', max: '0.08 %', note: 'Kept low to protect corrosion performance.' },
      { element: 'Hydrogen (H)', max: '0.015 %', note: 'Controlled through melting and annealing practice.' },
      { element: 'Iron (Fe)', max: '0.30 %', note: 'Ferrous contamination limit from the melt.' },
    ],
    mechanical: [
      { property: 'Tensile strength', value: '≥ 380 MPa (55 ksi)', note: 'Minimum, annealed sheet and strip.' },
      { property: 'Yield strength', value: '≥ 310 MPa (45 ksi)', note: 'Minimum, annealed sheet and strip.' },
      { property: 'Elongation', value: '≥ 18 %', note: 'Minimum, annealed sheet and strip.' },
      { property: 'Hardness', value: '≈ 160–175 HB typical', note: 'Annealed; no hardness requirement in ASTM B265.' },
      { property: 'Density', value: '4.51 g/cm³', note: 'Constant for commercially pure titanium.' },
    ],
    standards: [
      'ASTM B265 — sheet, plate and strip',
      'ASTM B348 — bar, rod and billets',
      'ASME SB-265 — plate and strip',
      'EN 3.2 series and EN ISO 4941-1 — European designations',
      'JIS H 4000 and GB/T 3624 — Japanese and Chinese equivalents',
    ],
    processing: [
      'Rolling and drawing into sheet, plate and bar',
      'Cold forming for load-bearing formed parts',
      'Machining from bar or plate to drawing',
    ],
    applications: [
      'Formed structural parts that also need corrosion resistance',
      'Chemical and process equipment of moderate load',
      'Components where a higher-strength CP grade is specified',
    ],
    productLinks: [
      { href: assertRoute('/titanium-products/titanium-plate/', 'grade 3 plate'), label: 'Titanium Plate & Sheet', note: 'Plate and sheet in the higher-strength CP grade.' },
      { href: assertRoute('/titanium-products/titanium-rod-bar/', 'grade 3 rod'), label: 'Titanium Rod & Bar', note: 'Rod and bar for machined components.' },
      { href: assertRoute('/titanium-machining-parts/', 'grade 3 parts'), label: 'Titanium Machined Parts', note: 'Drawing-based parts made to the specified grade.' },
    ],
    anodeUse:
      'Grade 3 is not a default anode substrate. It is reviewed when a coated electrode body has to carry mechanical load as well as current, but the coating life and the process chemistry normally decide the substrate before the strength does.',
    pemUse:
      'Grade 3 has no established role in the PEM stack. The load-bearing stack components are normally written in Grade 2 and the formed anode-side components in Grade 1, so Grade 3 is not a substitute for either.',
  },
  {
    slug: 'grade-4',
    grade: 'Grade 4',
    unisteady: 'TA4',
    family: 'CP',
    name: 'Commercially pure titanium, the highest-strength CP grade',
    intro:
      'Grade 4 is the strongest of the commercially pure grades. Its higher oxygen and nitrogen allowances raise the strength while the chemistry stays free of alloying elements, so the corrosion behaviour remains that of a CP grade. It is the grade for CP components that carry real mechanical load — pressure equipment, fasteners, springs and high-strength formed parts — and the grade to review when Grade 5 is stronger than the design needs.',
    chemistry: [
      { element: 'Titanium (Ti)', min: 'Balance', note: 'The balance is stated in the standard, not as a figure.' },
      { element: 'Oxygen (O)', max: '0.40 %', note: 'The highest CP allowance; the main strength contributor.' },
      { element: 'Nydrogen (N)', max: '0.30 %', note: 'Highest CP allowance; strengthens and reduces formability.' },
      { element: 'Carbon (C)', max: '0.08 %', note: 'Kept low to protect corrosion performance.' },
      { element: 'Hydrogen (H)', max: '0.015 %', note: 'Controlled through melting and annealing practice.' },
      { element: 'Iron (Fe)', max: '0.30 %', note: 'Ferrous contamination limit from the melt.' },
    ],
    mechanical: [
      { property: 'Tensile strength', value: '≥ 483 MPa (70 ksi)', note: 'Minimum, annealed sheet and strip.' },
      { property: 'Yield strength', value: '≥ 414 MPa (60 ksi)', note: 'Minimum, annealed sheet and strip.' },
      { property: 'Elongation', value: '≥ 15 %', note: 'Minimum, annealed sheet and strip.' },
      { property: 'Hardness', value: '≈ 170–190 HB typical', note: 'Annealed; no hardness requirement in ASTM B265.' },
      { property: 'Density', value: '4.51 g/cm³', note: 'Constant for commercially pure titanium.' },
    ],
    standards: [
      'ASTM B265 — sheet, plate and strip',
      'ASTM B348 — bar, rod and billets',
      'ASME SB-265 — plate and strip',
      'EN 3.2 series and EN ISO 4941-1 — European designations',
      'JIS H 4000 and GB/T 3624 — Japanese and Chinese equivalents',
    ],
    processing: [
      'Rolling and forging into plate, sheet and bar',
      'Cold forming of higher-strength CP parts',
      'Machining and fastener manufacture from bar',
    ],
    applications: [
      'Pressure equipment and load-bearing CP components',
      'Fasteners and springs requiring CP corrosion resistance',
      'Chemical service where strength and corrosion resistance are both needed',
    ],
    productLinks: [
      { href: assertRoute('/titanium-products/titanium-plate/', 'grade 4 plate'), label: 'Titanium Plate & Sheet', note: 'High-strength CP plate and sheet.' },
      { href: assertRoute('/titanium-products/titanium-rod-bar/', 'grade 4 rod'), label: 'Titanium Rod & Bar', note: 'High-strength CP bar for fasteners and shafts.' },
      { href: assertRoute('/titanium-products/titanium-bolts/', 'grade 4 bolts'), label: 'Titanium Fasteners', note: 'Fasteners in the strongest CP grade.' },
    ],
    anodeUse:
      'Grade 4 is not an anode substrate grade. It is reviewed only when an anode assembly needs a structural member in CP material, for example a support or hanger in a strongly oxidising service where an alloy would not be acceptable.',
    pemUse:
      'Grade 4 has no standard place in a PEM stack. Structural stack parts are normally specified in Grade 2 for availability and cost, so Grade 4 is not the default for the bipolar plate or the end plate.',
  },
  {
    slug: 'grade-5',
    grade: 'Grade 5',
    unisteady: 'Ti-6Al-4V',
    family: 'Alpha-Beta',
    name: 'Ti-6Al-4V, the alpha-beta workhorse alloy',
    intro:
      'Grade 5 is the alpha-beta alloy that carries most of the titanium engineering load: roughly six weight percent aluminium stabilises the alpha phase and four weight percent vanadium stabilises the beta phase, and the two phases together give a strength-to-weight ratio far above the CP grades. It is the default answer for a titanium component that has to be machined, forged or fastened rather than formed. Its corrosion behaviour is good but not as good as the CP grades in strongly oxidising media, and it can be difficult to weld without a procedure that controls the cooling rate.',
    chemistry: [
      { element: 'Titanium (Ti)', min: 'Balance', note: 'The balance is stated in the standard, not as a figure.' },
      { element: 'Aluminium (Al)', min: '5.5 %', max: '6.75 %', note: 'Alpha stabiliser; raises modulus and lowers density.' },
      { element: 'Vanadium (V)', min: '3.5 %', max: '4.5 %', note: 'Beta stabiliser; the main source of the strength increase.' },
      { element: 'Oxygen (O)', max: '0.20 %', note: 'Interstitial; limited more tightly than in the CP grades.' },
      { element: 'Nitrogen (N)', max: '0.05 %', note: 'Interstitial; tightly limited to protect ductility.' },
      { element: 'Carbon (C)', max: '0.08 %', note: 'Kept low; carbides reduce fatigue performance.' },
      { element: 'Hydrogen (H)', max: '0.015 %', note: 'Controlled through melting, forming and heat treatment.' },
      { element: 'Iron (Fe)', max: '0.30 %', note: 'Ferrous contamination limit from the melt.' },
    ],
    mechanical: [
      { property: 'Tensile strength', value: '≥ 895 MPa (130 ksi)', note: 'Minimum, annealed bar and sheet per ASTM B348 and F136.' },
      { property: 'Yield strength', value: '≥ 828 MPa (120 ksi)', note: 'Minimum, annealed bar and sheet.' },
      { property: 'Elongation', value: '≥ 10 %', note: 'Minimum, annealed bar and sheet.' },
      { property: 'Reduction of area', value: '≥ 25 %', note: 'Minimum, annealed bar.' },
      { property: 'Density', value: '4.43 g/cm³', note: 'Lower than CP titanium because of the aluminium.' },
    ],
    standards: [
      'ASTM B348 — bar, rod and billets',
      'ASTM B265 — sheet, plate and strip',
      'ASTM F136 — for medical implant material',
      'AMS 4900A — sheet, plate and strip',
      'AMS 4944 — bar and billet',
      'AMS 4911 and AMS 4948 — welds and tubing',
      'EN ISO 5832-3 and EN 3.1 / 3.2 series — European designations',
    ],
    processing: [
      'Forging with controlled alpha-beta working and defined reduction ratios',
      'Machining from bar, plate or billet to drawing',
      'Solution treatment and ageing for the higher-strength condition where specified',
      'Electron-beam welding with a procedure that controls the cooling rate',
    ],
    applications: [
      'Aerospace and defence structural and fastener parts',
      'High-load shafts, fasteners and downhole components',
      'Medical and dental implant stock',
      'Chemical equipment where CP grades are not available in the required form',
    ],
    productLinks: [
      { href: assertRoute('/titanium-products/titanium-rod-bar/', 'grade 5 rod'), label: 'Titanium Rod & Bar', note: 'Grade 5 bar for machining and fasteners.' },
      { href: assertRoute('/titanium-products/titanium-bolts/', 'grade 5 bolts'), label: 'Titanium Fasteners', note: 'The standard alloy for high-strength titanium fasteners.' },
      { href: assertRoute('/titanium-machining-parts/', 'grade 5 parts'), label: 'Titanium Machined Parts', note: 'Drawing-based machined parts in Grade 5.' },
      { href: assertRoute('/titanium-products/titanium-forgings/', 'grade 5 forgings'), label: 'Titanium Forgings', note: 'Closed-die forgings in Grade 5.' },
    ],
    anodeUse:
      'Grade 5 is not an anode substrate. It appears in an anode installation only where a non-electrode structural part, such as a frame or a hanger, has to carry a load in a service where the CP grades are not available in the required section.',
    pemUse:
      'Grade 5 has no role in the anode compartment of a PEM stack. It is occasionally reviewed for a loaded structural part of a stack frame or an end cover, where the strength advantage outweighs the higher cost, but never as a substitute for Grade 1 or Grade 2 in the electrochemical path.',
  },
  {
    slug: 'grade-7',
    grade: 'Grade 7',
    unisteady: 'Ti-0.2Pd',
    family: 'CP',
    name: 'Ti-0.2Pd, palladium-stabilised commercially pure titanium',
    intro:
      'Grade 7 is the palladium-stabilised CP grade. A small palladium addition — around 0.2 weight percent — markedly improves resistance to reducing acids, and it does so without turning the material into an alloy with a different strength profile. The cost of the palladium is the obvious trade-off, and the grade is specified where reducing acid corrosion, not strength, is the deciding failure mode. It is also the grade most often written into an anode substrate when the electrolyte is a reducing acid.',
    chemistry: [
      { element: 'Titanium (Ti)', min: 'Balance', note: 'The balance is stated in the standard, not as a figure.' },
      { element: 'Palladium (Pd)', min: '0.12 %', max: '0.25 %', note: 'The corrosion-resistant addition; the reason the grade exists.' },
      { element: 'Oxygen (O)', max: '0.25 %', note: 'Interstitial; comparable to Grade 2.' },
      { element: 'Nitrogen (N)', max: '0.15 %', note: 'Interstitial; comparable to Grade 2.' },
      { element: 'Carbon (C)', max: '0.08 %', note: 'Kept low to protect corrosion performance.' },
      { element: 'Hydrogen (H)', max: '0.015 %', note: 'Controlled through melting and annealing practice.' },
      { element: 'Iron (Fe)', max: '0.30 %', note: 'Ferrous contamination limit from the melt.' },
    ],
    mechanical: [
      { property: 'Tensile strength', value: '≥ 345 MPa (50 ksi)', note: 'Minimum, annealed sheet and strip.' },
      { property: 'Yield strength', value: '≥ 275 MPa (40 ksi)', note: 'Minimum, annealed sheet and strip.' },
      { property: 'Elongation', value: '≥ 20 %', note: 'Minimum, annealed sheet and strip.' },
      { property: 'Hardness', value: '≈ 145–160 HB typical', note: 'Annealed; strength is comparable to Grade 2.' },
      { property: 'Density', value: '4.51 g/cm³', note: 'Constant for commercially pure titanium.' },
    ],
    standards: [
      'ASTM B265 — sheet, plate and strip',
      'ASTM B348 — bar, rod and billets',
      'ASTM B861 — seamless tube and pipe',
      'ASTM B338 — welded tube',
      'ASME SB-265 — plate and strip',
      'EN 3.1 — the European designation for the CP family',
    ],
    processing: [
      'Rolling and drawing into sheet, plate, bar and tube',
      'Machining from bar to drawing',
      'Forming and welding with matching filler',
    ],
    applications: [
      'Reducing acid process equipment, including sulphuric acid service',
      'Anode substrates for reducing acid electrolysis',
      'Chemical processing where Grade 2 corrosion is insufficient',
      'Hydrogen and chlor-alkali equipment',
    ],
    productLinks: [
      { href: assertRoute('/titanium-products/titanium-plate/', 'grade 7 plate'), label: 'Titanium Plate & Sheet', note: 'Plate and sheet for reducing acid fabrication.' },
      { href: assertRoute('/titanium-products/titanium-rod-bar/', 'grade 7 rod'), label: 'Titanium Rod & Bar', note: 'Rod and bar for machined components in reducing acid service.' },
      { href: assertRoute('/titanium-products/titanium-tubing/', 'grade 7 tube'), label: 'Titanium Tube & Pipe', note: 'Tube for process piping in reducing acid duty.' },
      { href: assertRoute('/titanium-anode/', 'grade 7 anode'), label: 'Titanium Anodes', note: 'The grade used when the electrolyte is a strongly reducing acid.' },
    ],
    anodeUse:
      'Grade 7 is the anode substrate to review when the electrolyte is a strongly reducing acid. The palladium addition slows the anodic dissolution of the titanium itself, which is what limits the coated-anode life in that service. It is a review route, not a default: the medium, the contaminants and the current density decide it.',
    pemUse:
      'Grade 7 has no role in a PEM stack. The anode compartment of a PEM electrolyzer is an acidic oxidising environment, which is the opposite of the reducing condition Grade 7 is written for, so the grade adds cost without a matching benefit.',
  },
  {
    slug: 'grade-9',
    grade: 'Grade 9',
    unisteady: 'Ti-3Al-2.5V',
    family: 'Alpha-Beta',
    name: 'Ti-3Al-2.5V, the formable alpha-beta alloy',
    intro:
      'Grade 9 is a near-alpha alloy with three weight percent aluminium and two and a half weight percent vanadium. Compared with Grade 5 it trades strength for a noticeably better balance of formability and weldability, and it can be cold formed and welded far more easily. It is the grade to review when a component needs to be bent, drawn or formed heavily and still carries a real load, or when a Grade 5 design is proving difficult to fabricate.',
    chemistry: [
      { element: 'Titanium (Ti)', min: 'Balance', note: 'The balance is stated in the standard, not as a figure.' },
      { element: 'Aluminium (Al)', min: '2.5 %', max: '3.5 %', note: 'Alpha stabiliser; less than Grade 5.' },
      { element: 'Vanadium (V)', min: '2.0 %', max: '3.0 %', note: 'Beta stabiliser; less than Grade 5.' },
      { element: 'Oxygen (O)', max: '0.15 %', note: 'Interstitial; limited tightly to protect ductility.' },
      { element: 'Nitrogen (N)', max: '0.05 %', note: 'Interstitial; tightly limited.' },
      { element: 'Carbon (C)', max: '0.05 %', note: 'Kept low; carbides reduce fatigue performance.' },
      { element: 'Hydrogen (H)', max: '0.015 %', note: 'Controlled through melting, forming and heat treatment.' },
      { element: 'Iron (Fe)', max: '0.25 %', note: 'Ferrous contamination limit from the melt.' },
    ],
    mechanical: [
      { property: 'Tensile strength', value: '≥ 690 MPa (100 ksi)', note: 'Minimum, annealed sheet and strip.' },
      { property: 'Yield strength', value: '≥ 620 MPa (90 ksi)', note: 'Minimum, annealed sheet and strip.' },
      { property: 'Elongation', value: '≥ 15 %', note: 'Minimum, annealed sheet and strip.' },
      { property: 'Density', value: '4.46 g/cm³', note: 'Lower than CP titanium because of the aluminium.' },
    ],
    standards: [
      'ASTM B265 — sheet, plate and strip',
      'ASTM B348 — bar, rod and billets',
      'ASME SB-265 — plate and strip',
      'AMS 4944 and the AMS 4900 family — aerospace bar and sheet',
      'EN ISO 4943 and EN 3.1 / 3.2 series — European designations',
    ],
    processing: [
      'Cold rolling and forming of sheet, with better ductility than Grade 5',
      'Forging within the alpha-beta phase window with defined reduction ratios',
      'Welding with a procedure that controls the cooling rate',
      'Machining from bar or plate to drawing',
    ],
    applications: [
      'Formed structural parts that also need alloy strength',
      'Pressure equipment and process vessels in titanium alloy',
      'Airframe and engine components where formability matters',
      'Chemical equipment where CP grades are not available in the required form',
    ],
    productLinks: [
      { href: assertRoute('/titanium-products/titanium-plate/', 'grade 9 plate'), label: 'Titanium Plate & Sheet', note: 'Alloy plate in the formable alpha-beta grade.' },
      { href: assertRoute('/titanium-products/titanium-rod-bar/', 'grade 9 rod'), label: 'Titanium Rod & Bar', note: 'Alloy bar for machined components.' },
      { href: assertRoute('/titanium-products/titanium-coil/', 'grade 9 coil'), label: 'Titanium Coil & Strip', note: 'Cold rolled alloy coil and strip.' },
      { href: assertRoute('/titanium-machining-parts/', 'grade 9 parts'), label: 'Titanium Machined Parts', note: 'Drawing-based machined parts in Grade 9.' },
    ],
    anodeUse:
      'Grade 9 is not an anode substrate. An anode substrate is selected on corrosion behaviour against the electrolyte and on the coating route, not on formability of the structural alloy.',
    pemUse:
      'Grade 9 has no role in the electrochemical path of a PEM stack. A formed bipolar plate or end plate would be written in Grade 2, which has a much better price and availability profile.',
  },
  {
    slug: 'grade-12',
    grade: 'Grade 12',
    unisteady: 'Ti-0.3Mo-0.8Ni',
    family: 'CP',
    name: 'Ti-0.3Mo-0.8Ni, the CP grade with alloying additions',
    intro:
      'Grade 12 is a commercially pure titanium with two small alloying additions: roughly 0.3 weight percent molybdenum and 0.8 weight percent nickel. The additions bring an intermediate level of corrosion resistance between the plain CP grades and Grade 7, with better behaviour in reducing acids than Grade 2 and at a much lower palladium cost than Grade 7. It also carries more strength than Grade 2, which sometimes decides the review. It is less widely stocked, so form and size availability have to be confirmed.',
    chemistry: [
      { element: 'Titanium (Ti)', min: 'Balance', note: 'The balance is stated in the standard, not as a figure.' },
      { element: 'Molybdenum (Mo)', min: '0.2 %', max: '0.4 %', note: 'Corrosion addition; improves reducing acid resistance.' },
      { element: 'Nickel (Ni)', min: '0.6 %', max: '1.0 %', note: 'Corrosion and strength addition.' },
      { element: 'Oxygen (O)', max: '0.25 %', note: 'Interstitial; comparable to Grade 2.' },
      { element: 'Nitrogen (N)', max: '0.15 %', note: 'Interstitial; comparable to Grade 2.' },
      { element: 'Carbon (C)', max: '0.08 %', note: 'Kept low to protect corrosion performance.' },
      { element: 'Hydrogen (H)', max: '0.015 %', note: 'Controlled through melting and annealing practice.' },
      { element: 'Iron (Fe)', max: '0.30 %', note: 'Ferrous contamination limit from the melt.' },
    ],
    mechanical: [
      { property: 'Tensile strength', value: '≥ 345 MPa (50 ksi)', note: 'Minimum, annealed sheet and strip.' },
      { property: 'Yield strength', value: '≥ 275 MPa (40 ksi)', note: 'Minimum, annealed sheet and strip.' },
      { property: 'Elongation', value: '≥ 20 %', note: 'Minimum, annealed sheet and strip.' },
      { property: 'Density', value: '4.51 g/cm³', note: 'Constant for commercially pure titanium.' },
    ],
    standards: [
      'ASTM B265 — sheet, plate and strip',
      'ASTM B348 — bar, rod and billets',
      'ASTM B861 — seamless tube and pipe',
      'ASME SB-265 — plate and strip',
      'EN 3.1 — the European designation for the CP family',
    ],
    processing: [
      'Rolling and drawing into sheet, plate, bar and tube',
      'Machining from bar to drawing',
      'Forming and welding with matching filler',
    ],
    applications: [
      'Chemical equipment in intermediate reducing acid duty',
      'Heat exchangers and tube in chloride and acid service',
      'Anode and cell hardware where more than Grade 2 is needed',
      'Marine and desalination components',
    ],
    productLinks: [
      { href: assertRoute('/titanium-products/titanium-plate/', 'grade 12 plate'), label: 'Titanium Plate & Sheet', note: 'Plate and sheet in the alloyed CP grade.' },
      { href: assertRoute('/titanium-products/titanium-tubing/', 'grade 12 tube'), label: 'Titanium Tube & Pipe', note: 'Tube for heat-transfer and acid duty.' },
      { href: assertRoute('/titanium-products/titanium-rod-bar/', 'grade 12 rod'), label: 'Titanium Rod & Bar', note: 'Rod and bar for machined components.' },
      { href: assertRoute('/titanium-products/titanium-baskets/', 'grade 12 baskets'), label: 'Titanium Baskets', note: 'Cell hardware for electrolysis in corrosive media.' },
    ],
    anodeUse:
      'Grade 12 is the intermediate anode substrate. It is written when Grade 2 is not enough corrosion resistance for the electrolyte but the palladium cost of Grade 7 is not justified by the duty. The decision is made against the medium, the contaminants and the expected current density.',
    pemUse:
      'Grade 12 is reviewed for cooling and gas-handling components of a PEM system that handle acidic process water outside the membrane assembly. Inside the stack, the anode-side components stay on Grade 1 and the structural parts on Grade 2.',
  },
  {
    slug: 'grade-23',
    grade: 'Grade 23',
    unisteady: 'Ti-6Al-4V ELI',
    family: 'Alpha-Beta',
    name: 'Ti-6Al-4V ELI, the extra-low-interstitial implant alloy',
    intro:
      'Grade 23 is the extra-low-interstitial form of Ti-6Al-4V. The oxygen, nitrogen and iron allowances are tightened below Grade 5, which raises the ductility and the fatigue performance and lowers the modulus slightly — the combination that matters for an implant that has to carry cyclic load inside the body. It is the standard alloy for orthopaedic implants. Material compliance is only the first step: a device made from Grade 23 still has to be validated as a finished device by the party who puts it on the market.',
    chemistry: [
      { element: 'Titanium (Ti)', min: 'Balance', note: 'The balance is stated in the standard, not as a figure.' },
      { element: 'Aluminium (Al)', min: '5.5 %', max: '6.75 %', note: 'Alpha stabiliser; the same range as Grade 5.' },
      { element: 'Vanadium (V)', min: '3.5 %', max: '4.5 %', note: 'Beta stabiliser; the same range as Grade 5.' },
      { element: 'Oxygen (O)', max: '0.13 %', note: 'ELI limit; the main difference from Grade 5.' },
      { element: 'Nitrogen (N)', max: '0.05 %', note: 'ELI limit; tightly controlled.' },
      { element: 'Carbon (C)', max: '0.08 %', note: 'Kept low; carbides reduce fatigue performance.' },
      { element: 'Hydrogen (H)', max: '0.015 %', note: 'Controlled through melting and heat treatment.' },
      { element: 'Iron (Fe)', max: '0.25 %', note: 'ELI limit; lower than Grade 5.' },
    ],
    mechanical: [
      { property: 'Tensile strength', value: '≥ 860 MPa (125 ksi)', note: 'Minimum, annealed bar per ASTM F136.' },
      { property: 'Yield strength', value: '≥ 790 MPa (115 ksi)', note: 'Minimum, annealed bar per ASTM F136.' },
      { property: 'Elongation', value: '≥ 12 %', note: 'Minimum, annealed bar.' },
      { property: 'Reduction of area', value: '≥ 25 %', note: 'Minimum, annealed bar.' },
      { property: 'Density', value: '4.43 g/cm³', note: 'Lower than CP titanium because of the aluminium.' },
    ],
    standards: [
      'ASTM F136 — the implant material standard',
      'ASTM B348 — bar, rod and billets',
      'ASTM B265 — sheet, plate and strip',
      'AMS 4900A — sheet, plate and strip',
      'AMS 4944 — bar and billet',
      'ISO 5832-3 — the international implant material standard',
    ],
    processing: [
      'Vacuum melting and remelting with tight interstitial control',
      'Forging and bar conversion with clean handling throughout',
      'Machining and surface finishing under controlled conditions',
      'Heat treatment to the annealed or the aged condition named on the order',
    ],
    applications: [
      'Orthopaedic implants: stems, plates, screws and joint components',
      'Dental implants and instrument stock',
      'Medical device components with a cyclic fatigue load',
      'High-cycle fatigue critical fasteners',
    ],
    productLinks: [
      { href: assertRoute('/titanium-products/titanium-rod-bar/', 'grade 23 rod'), label: 'Titanium Rod & Bar', note: 'ELI bar for implant and instrument machining.' },
      { href: assertRoute('/titanium-products/titanium-bolts/', 'grade 23 bolts'), label: 'Titanium Fasteners', note: 'ELI fasteners for fatigue-critical fixing.' },
      { href: assertRoute('/titanium-machining-parts/', 'grade 23 parts'), label: 'Titanium Machined Parts', note: 'Drawing-based components machined from ELI stock.' },
      { href: assertRoute('/industries/medical/', 'grade 23 medical'), label: 'Medical Industry', note: 'The industry route for implant material and parts.' },
    ],
    anodeUse:
      'Grade 23 is not an anode substrate and has no place in an electrochemical installation. It is listed here because the implant grade is one of the most searched titanium designations, and conflating it with a corrosion grade is a common sourcing error.',
    pemUse:
      'Grade 23 has no role in a PEM stack. It is neither a corrosion grade nor a cost-effective structural choice for stack hardware.',
  },
];

/** Look up a single grade by its slug. */
export function gradeBySlug(slug: string): GradeSpec | undefined {
  return grades.find((g) => g.slug === slug);
}

/** The grades in the order they are published. */
export const gradeSlugs: string[] = grades.map((g) => g.slug);

/**
 * The side-by-side comparison table of the hub page.
 *
 * Every value is derived from the grade records above, so a change in a
 * composition window or a strength figure reaches the comparison table with
 * the same edit.
 */
export interface GradeComparisonRow {
  /** The commercial grade designation. */
  grade: string;
  /** The alloy name or the CP designation. */
  designation: string;
  /** The material family. */
  family: string;
  /** Tensile strength summary window. */
  tensile: string;
  /** Elongation summary window. */
  elongation: string;
  /** The property that decides the grade. */
  decidingProperty: string;
  /** The route of the grade page. */
  href: string;
}

/** The comparison rows of the hub page. */
export const gradeComparisonRows: GradeComparisonRow[] = [
  {
    grade: 'Grade 1',
    designation: 'TA1 · commercially pure',
    family: 'CP',
    tensile: '≥ 276 MPa (40 ksi)',
    elongation: '≥ 24 %',
    decidingProperty: 'Formability and expansion into mesh',
    href: gradeHref('grade-1'),
  },
  {
    grade: 'Grade 2',
    designation: 'TA2 · commercially pure',
    family: 'CP',
    tensile: '≥ 345 MPa (50 ksi)',
    elongation: '≥ 20 %',
    decidingProperty: 'General corrosion resistance with the widest availability',
    href: gradeHref('grade-2'),
  },
  {
    grade: 'Grade 3',
    designation: 'TA3 · commercially pure',
    family: 'CP',
    tensile: '≥ 380 MPa (55 ksi)',
    elongation: '≥ 18 %',
    decidingProperty: 'A stronger CP grade that still cold forms',
    href: gradeHref('grade-3'),
  },
  {
    grade: 'Grade 4',
    designation: 'TA4 · commercially pure',
    family: 'CP',
    tensile: '≥ 483 MPa (70 ksi)',
    elongation: '≥ 15 %',
    decidingProperty: 'The highest strength available without an alloy',
    href: gradeHref('grade-4'),
  },
  {
    grade: 'Grade 5',
    designation: 'Ti-6Al-4V',
    family: 'Alpha-Beta',
    tensile: '≥ 895 MPa (130 ksi)',
    elongation: '≥ 10 %',
    decidingProperty: 'Strength-to-weight ratio in a machined or forged part',
    href: gradeHref('grade-5'),
  },
  {
    grade: 'Grade 7',
    designation: 'Ti-0.2Pd',
    family: 'CP',
    tensile: '≥ 345 MPa (50 ksi)',
    elongation: '≥ 20 %',
    decidingProperty: 'Resistance to strongly reducing acids',
    href: gradeHref('grade-7'),
  },
  {
    grade: 'Grade 9',
    designation: 'Ti-3Al-2.5V',
    family: 'Alpha-Beta',
    tensile: '≥ 690 MPa (100 ksi)',
    elongation: '≥ 15 %',
    decidingProperty: 'Alloy strength with better formability than Grade 5',
    href: gradeHref('grade-9'),
  },
  {
    grade: 'Grade 12',
    designation: 'Ti-0.3Mo-0.8Ni',
    family: 'CP',
    tensile: '≥ 345 MPa (50 ksi)',
    elongation: '≥ 20 %',
    decidingProperty: 'Intermediate corrosion resistance at lower cost than Grade 7',
    href: gradeHref('grade-12'),
  },
  {
    grade: 'Grade 23',
    designation: 'Ti-6Al-4V ELI',
    family: 'Alpha-Beta',
    tensile: '≥ 860 MPa (125 ksi)',
    elongation: '≥ 12 %',
    decidingProperty: 'Ductility and fatigue life in implant applications',
    href: gradeHref('grade-23'),
  },
];
