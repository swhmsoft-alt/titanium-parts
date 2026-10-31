/**
 * Fabrication and processing service pages.
 *
 * Each entry describes one processing capability. The pages are rendered
 * from a single template so the structure stays consistent while the
 * content is specific to the process.
 *
 * The wording describes the review basis for each step — what has to be
 * confirmed before the work is quoted — rather than promising outcomes
 * that depend on the buyer's own drawings and operating conditions.
 */

export interface ServiceStep {
  slug: string;
  title: string;
  /** Meta description, 70-175 characters. */
  description: string;
  /** Short line used in listings and the hero. */
  summary: string;
  /** What the step covers. */
  scope: string;
  /** What has to be confirmed before it can be quoted. */
  reviewBasis: string[];
  /** Typical outputs. */
  outputs: string[];
}

export const serviceSteps: ServiceStep[] = [
  {
    slug: 'cutting-sizing',
    description:
      'Titanium cutting and sizing for plate, sheet, bar, tube and coil, with finished dimension, tolerance, cut edge and quantity confirmed before quotation.',
    title: 'Titanium Cutting & Sizing',
    summary: 'Plates, sheet, bar, tube and coil cut and sized to the dimensions on your order.',
    scope:
      'Saw cutting, waterjet cutting, shearing and precision sizing of titanium mill products into blanks, strips and sections, with edge condition and dimensional tolerance defined per order.',
    reviewBasis: [
      'Grade, UNS designation, governing specification and revision',
      'Product form and as-supplied dimensions',
      'Finished dimension, tolerance band and cut edge requirement',
      'Quantity, nesting and whether the offcut is returnable',
      'Surface protection, marking and packing',
    ],
    outputs: [
      'Cut blanks and blanks machined to drawing',
      'Precision-slit strip and slit coil',
      'Cut-to-length sections with cut-edge condition recorded',
    ],
  },
  {
    slug: 'cnc-machining',
    description:
      'Turned and milled titanium components produced to your drawing, with datums, GD&T, thread, inspection scope and report format agreed in advance.',
    title: 'Titanium CNC Machining',
    summary: 'Turned and milled titanium components produced from your drawing or model.',
    scope:
      'Turned, milled and multi-axis machined titanium components from bar, plate or billet, working to a controlled drawing or 3D model with datums, tolerances and inspection evidence defined.',
    reviewBasis: [
      'Drawing revision, datums, GD&T and tolerance scheme',
      'Grade and starting material form',
      'Feature accessibility, tool access and holding strategy',
      'Thread, deburr, marking and passivation requirements',
      'Inspection scope, sampling plan and report format',
    ],
    outputs: [
      'Turned and milled components to drawing',
      'Multi-axis machined housings, brackets and fittings',
      'First-article inspection records against the drawing',
    ],
  },
  {
    slug: 'forming-bending',
    description:
      'Titanium bending, roll forming and mandrel bending with springback, minimum bend radius and grain direction reviewed against the design.',
    title: 'Titanium Forming & Bending',
    summary: 'Sheet, strip and tube formed, bent and rolled to your geometry.',
    scope:
      'Press-brake bending, roll forming, stretch forming and mandrel bending of titanium sheet, strip and tube, with springback, minimum bend radius and grain direction reviewed against the design.',
    reviewBasis: [
      'Material condition, thickness and minimum bend radius',
      'Grain direction and rolling orientation where relevant',
      'Target angle, bend sequence and springback allowance',
      'Tooling, fixture availability and part orientation',
      'Surface marking, lubricant compatibility and contamination control',
    ],
    outputs: [
      'Bent sheet components and formed sections',
      'Rolled shells, cones and formed tube parts',
      'Formed parts with dimensional report against the bend schedule',
    ],
  },
  {
    slug: 'welding-assembly',
    description:
      'TIG, MIG, plasma and laser welding of titanium with procedure qualification, shielding, purge control and inspection scope held to the joint.',
    title: 'Titanium Welding & Assembly',
    summary: 'TIG, MIG, plasma and laser welding with documented procedure qualification.',
    scope:
      'Arc, plasma and laser welding of titanium, including seam preparation, shielding, purging, filler selection, distortion control and sub-assembly work, with procedure qualification held against the joint.',
    reviewBasis: [
      'Joint design, thickness range and weld length',
      'Applicable welding code and acceptance criteria',
      'Filler metal grade and interpass temperature control',
      'Shielding and purge requirements, including back-purge',
      'Post-weld treatment, inspection and NDT scope',
    ],
    outputs: [
      'Welded fabrications and pressure-retaining assemblies',
      'Procedure qualification records for the joint',
      'Weld maps, welder records and NDT reports',
    ],
  },
  {
    slug: 'surface-treatment-finishing',
    description:
      'Titanium pickling, passivation, polishing, blasting and coating, with the chemistry and finish selected against the required end condition.',
    title: 'Titanium Surface Treatment & Finishing',
    summary: 'Pickling, passivation, polishing, blasting and coating for titanium surfaces.',
    scope:
      'Degreasing, pickling, descaling, passivation, mechanical finishing and protective coating of titanium surfaces, with the process selected against the end condition and the surface tolerance required.',
    reviewBasis: [
      'Surface condition required and whether it is functional or cosmetic',
      'Pickling and passivation chemistry compatible with the grade',
      'Roughness target and any cosmetic acceptance standard',
      'Coating system, adhesion requirement and service environment',
      'Handling, masking and post-treatment protection',
    ],
    outputs: [
      'Pickled and passivated titanium components',
      'Polished, brushed or blasted surface finishes',
      'Coated parts with adhesion and film-thickness records',
    ],
  },
  {
    slug: 'material-testing-certificate',
    description:
      'Material certificates, heat and lot traceability, dimensional inspection, mechanical testing and PMI, with the document set agreed before order release.',
    title: 'Titanium Testing & Material Certificates',
    summary: 'Material certificates, traceability and the inspection evidence attached to your order.',
    scope:
      'Documentation and verification scope for titanium supply, covering material certificates, heat or lot traceability, dimensional inspection, mechanical testing, PMI and third-party witness points.',
    reviewBasis: [
      'Order basis: grade, specification and revision',
      'Required document set and acceptable third-party source',
      'Inspection stage, witness points and hold points',
      'Sample size, test method and acceptance criteria',
      'Report format, language and delivery timing',
    ],
    outputs: [
      'EN 10204 3.1 or 3.2 material certificates',
      'Heat and lot traceability records',
      'Dimensional, mechanical and PMI inspection reports',
    ],
  },
];
