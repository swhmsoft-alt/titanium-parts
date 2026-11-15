/**
 * The content model of an industry spoke page.
 *
 * The hub (`industries-hub.ts`) explains the boundary and the routes. This
 * model holds the depth of a single sector: the failure mechanisms that
 * actually decide an order, the process-to-specification matrix, the
 * standards and the field evidence, and the questions engineers ask before
 * they select a grade or a coating.
 */

/** One failure mechanism, rendered as an H3 under the risk section. */
export interface FailureMode {
  /** H3 title — the mechanism, not the symptom. */
  title: string;
  /** Why it happens and what it costs in service. */
  body: string;
}

/** One engineered solution, rendered as an H3 under the solution section. */
export interface SpokeSolution {
  /** H3 title — the product route for this sector. */
  title: string;
  /** How the route answers the failure modes above. */
  body: string;
  /** Specification points: grade, coating, geometry, construction. */
  points: string[];
  /** Internal link to the product page this solution is delivered from. */
  href: string;
  /** Link label. */
  hrefLabel: string;
}

/** One row of the process-to-specification matrix. */
export interface SpecMatrixRow {
  /** Sub-process or application. */
  process: string;
  /** Typical medium and temperature. */
  medium: string;
  /** Primary corrosion or electrochemical risk. */
  risk: string;
  /** Recommended substrate and coating. */
  recommendation: string;
}

/** A field delivery record, anonymised. */
export interface FieldExperience {
  /** The duty and the plant it was delivered into. */
  duty: string;
  /** What was supplied. */
  spec: string;
  /** What happened in service. */
  result: string;
}

/** One FAQ entry. The visible accordion and the FAQPage JSON-LD share it. */
export interface SpokeFaq {
  question: string;
  answer: string;
}

/** The full content of one spoke page. */
export interface SpokeContent {
  /** H1 of the page. */
  h1: string;
  /** SEO title, without the brand suffix. */
  seoTitle: string;
  /** Meta description, 70-175 characters. */
  metaDescription: string;
  /** Lede below the H1: the sub-processes and the value. */
  heroLede: string;
  /** H2 title of the failure section. */
  riskSectionTitle: string;
  /** The three failure mechanisms of this sector. */
  failureModes: FailureMode[];
  /** H2 title of the solution section. */
  solutionSectionTitle: string;
  /** The product routes of this sector. */
  solutions: SpokeSolution[];
  /** H2 title of the matrix section. */
  matrixSectionTitle: string;
  /** The matrix rows of this sector. */
  specMatrix: SpecMatrixRow[];
  /** H2 title of the standards section. */
  standardsSectionTitle: string;
  /** Standards and test methods that apply to this sector. */
  standards: string[];
  /** H3 title of the standards block. */
  standardsSubTitle: string;
  /** H3 title of the field evidence block. */
  fieldSubTitle: string;
  /** Anonymised delivery records. */
  fieldExperience: FieldExperience[];
  /** H2 title of the RFQ input section. */
  rfqSectionTitle: string;
  /** The engineering inputs this sector needs. */
  rfqInputs: string[];
  /** H2 title of the FAQ section. */
  faqSectionTitle: string;
  /** The questions engineers ask in this sector. */
  faqs: SpokeFaq[];
  /** Additional product pages linked from this sector. */
  relatedLinks: { href: string; label: string; note: string }[];
}
