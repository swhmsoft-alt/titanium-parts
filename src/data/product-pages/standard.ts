/**
 * Copy shared by the standard titanium product detail pages.
 *
 * The pages differ only in their data (hero, grades, forms, process steps,
 * evidence, controls, FAQ) and in the hero call-to-action label; every other
 * string below is identical across the standard pages and is kept here so the
 * wording lives in one place.
 *
 * A page that needs its own wording passes it through `copy`; a page that
 * needs its own section layout passes `catalogSections` and `extras`.
 */

export interface Card {
  title: string;
  body?: string;
  spec?: string;
  img?: string;
  alt?: string;
  href?: string;
  /** Icon name used by the evidence and control cards. */
  icon?: string;
}

/** Per-section copy overrides, so a page can keep its own wording. */
export interface SectionCopy {
  eyebrow?: string;
  heading?: string;
  lede?: string;
}

export interface RfqCopy {
  eyebrow?: string;
  heading?: string;
  lede?: string;
  checks?: string[];
  formTitle?: string;
  submitLabel?: string;
  variant?: string;
}

/**
 * One catalog block. A page may replace the shared catalog with its own
 * blocks when the grades and the forms need different headings or layouts.
 */
export interface CatalogSection {
  /** Anchor of the section; the shared catalog uses `forms-section`. */
  id?: string;
  /** Background of the section. */
  tone?: 'plain' | 'alt';
  eyebrow: string;
  heading: string;
  lede?: string;
  /**
   * - `grades`  : image card with a `Standard:` line and a body paragraph
   * - `forms`   : text-only card with a body paragraph
   * - `forms-links` : text-only card with a specification line and a link
   * - `forms-cards` : image card with a `Specify:` line, a body and a note
   */
  kind: 'grades' | 'forms' | 'forms-links' | 'forms-cards';
  items: Card[];
  /** Link text of the `forms-links` cards; `{title}` is replaced. */
  linkText?: string;
  /** Label prefix of the `forms-cards` specification line. */
  specLabel?: string;
  /** Note appended to every `forms-cards` card. */
  note?: string;
}

export interface BoundaryLink {
  href: string;
  label: string;
  /** The primary link is rendered as a filled button. */
  primary?: boolean;
}

/** The page-specific blocks that sit between the catalog and the process section. */
export type ExtraBlock =
  | { kind: 'boundary'; tone?: 'plain' | 'alt'; eyebrow: string; heading: string; lede: string; links: BoundaryLink[] }
  | { kind: 'cutPrep'; tone?: 'plain' | 'alt'; eyebrow: string; heading: string; lede: string; items: string[]; note: string; img: string; alt: string }
  | { kind: 'specTable'; tone?: 'plain' | 'alt'; eyebrow: string; heading: string; caption: string; columns: string[]; rows: string[][]; footnote?: string }
  | { kind: 'detailSections'; tone?: 'plain' | 'alt'; eyebrow: string; heading: string; lede: string; groups: { title: string; items: { title: string; body: string }[] }[] }
  | { kind: 'engineeringInputs'; tone?: 'plain' | 'alt'; eyebrow: string; heading: string; lede: string; items: { title: string; body: string }[] };

export interface StandardRaw {
  M: string;
  slug: string;
  hero: { eyebrow?: string; title: string; desc?: string; img?: string; tags: string[]; id?: string };
  cta: { primary: { href: string; label: string }; secondary: { href: string; label: string } };
  orderBasis: Card[];
  grades: Card[];
  forms: Card[];
  processSteps: Card[];
  mfgVideo: { poster: string; src: string };
  applications: Card[];
  evidence: Card[];
  controls: Card[];
  faq: { q: string; a: string }[];
  /** process step numbering: padded 01 or plain 1 */
  processNumbering?: 'plain' | 'padded';
  /** section copy that differs from the shared wording */
  copy?: {
    orderBasis?: SectionCopy;
    catalog?: SectionCopy;
    process?: SectionCopy;
    mfg?: SectionCopy;
    applications?: SectionCopy;
    evidence?: SectionCopy;
    controls?: SectionCopy;
    faq?: SectionCopy;
    rfq?: RfqCopy;
  };
  /** replaces the single catalog block when a page needs its own layout */
  catalogSections?: CatalogSection[];
  /** blocks rendered between the catalog and the process section */
  extras?: ExtraBlock[];
  /** link label under the application cards */
  applicationsLinkText?: string;
  /** optional call to action above the control cards */
  controlsLink?: { href: string; label: string };
}

export interface StandardPage {
  M: string;
  slug: string;
  hero: StandardRaw['hero'];
  cta: StandardRaw['cta'];
  orderBasis: { eyebrow: string; heading: string; items: Card[] };
  catalog: { eyebrow: string; heading: string; lede: string; grades: Card[]; forms: Card[] };
  /** page-specific catalog blocks; when present they replace the shared block */
  catalogSections?: CatalogSection[];
  process: { eyebrow: string; heading: string; lede: string; items: Card[]; numbering: 'plain' | 'padded' };
  mfg: { eyebrow: string; heading: string; lede: string; video: { poster: string; src: string } };
  applications: { eyebrow: string; heading: string; lede: string; items: Card[]; linkText: string };
  evidence: { eyebrow: string; heading: string; lede: string; items: Card[] };
  controls: { eyebrow: string; heading: string; lede: string; items: Card[]; link?: { href: string; label: string } };
  faq: { eyebrow: string; heading: string; lede: string; items: { q: string; a: string }[] };
  rfq: {
    eyebrow?: string;
    heading: string;
    lede: string;
    checks: string[];
    formTitle: string;
    submitLabel: string;
    variant: string;
  };
  extras?: ExtraBlock[];
}

export function catalogEyebrow(slug: string): string {
  if (slug.includes('titanium-rod-bar')) return 'Grades & Supply Review';
  if (slug.includes('titanium-coil') || slug.includes('titanium-foil')) return 'Product Form';
  return 'Grade Reference';
}

export function buildStandardPage(d: StandardRaw): StandardPage {
  const c = d.copy ?? {};
  const orderBasisCopy = c.orderBasis ?? {};
  const catalogCopy = c.catalog ?? {};
  const processCopy = c.process ?? {};
  const mfgCopy = c.mfg ?? {};
  const applicationsCopy = c.applications ?? {};
  const evidenceCopy = c.evidence ?? {};
  const controlsCopy = c.controls ?? {};
  const faqCopy = c.faq ?? {};
  const rfqCopy = c.rfq ?? {};

  return {
    M: d.M,
    slug: d.slug,
    hero: d.hero,
    cta: d.cta,
    orderBasis: {
      eyebrow: orderBasisCopy.eyebrow ?? 'Buying Essentials',
      heading: orderBasisCopy.heading ?? 'Freeze the Order Basis Before Comparing Price',
      items: d.orderBasis,
    },
    catalog: {
      eyebrow: catalogCopy.eyebrow ?? catalogEyebrow(d.slug),
      heading: catalogCopy.heading ?? `${d.M} Grades & Forms`,
      lede: catalogCopy.lede ?? `${d.M} grades and product forms reviewed against ASTM / ASME / project specifications.`,
      grades: d.grades,
      forms: d.forms,
    },
    catalogSections: d.catalogSections,
    process: {
      eyebrow: processCopy.eyebrow ?? 'Process Review',
      heading: processCopy.heading ?? 'Coordinate the Order from Specification to Release',
      lede: processCopy.lede ?? `Each step closes one part of the order basis. ${d.M} preparation, processing and inspection scope are confirmed by quotation against the approved order basis.`,
      items: d.processSteps,
      numbering: d.processNumbering ?? 'padded',
    },
    mfg: {
      eyebrow: mfgCopy.eyebrow ?? 'Inside Titanium Parts',
      heading: mfgCopy.heading ?? `${d.M} Manufacturing Environment`,
      lede: mfgCopy.lede ?? `${d.M} preparation, processing and inspection are carried out in our own facility. The inspection scope and documentation for a specific order are agreed in the quotation.`,
      video: d.mfgVideo,
    },
    applications: {
      eyebrow: applicationsCopy.eyebrow ?? 'Application Context',
      heading: applicationsCopy.heading ?? 'Match Material Decisions to the Actual Service',
      lede: applicationsCopy.lede ?? 'Grade, condition and documentation choices follow from the operating environment, not from the section name. Each context below sets the typical qualification conversation before the first quotation.',
      items: d.applications,
      linkText: d.applicationsLinkText ?? 'Review the industry context →',
    },
    evidence: {
      eyebrow: evidenceCopy.eyebrow ?? 'Supply Scope & Qualification',
      heading: evidenceCopy.heading ?? 'Specify the Evidence Needed for Acceptance',
      lede: evidenceCopy.lede ?? 'A certificate name alone does not define the complete acceptance package. State the traceability level, inspection characteristics, test reports, marking, third-party involvement and release documents required by the order.',
      items: d.evidence,
    },
    controls: {
      eyebrow: controlsCopy.eyebrow ?? 'Before You Order',
      heading: controlsCopy.heading ?? 'Confirm Four Controls Before You Buy',
      lede: controlsCopy.lede ?? 'Four checks that catch most order-basis errors before they become commercial or quality problems.',
      items: d.controls,
      link: d.controlsLink,
    },
    faq: {
      eyebrow: faqCopy.eyebrow ?? 'Questions',
      heading: faqCopy.heading ?? `${d.M} FAQ`,
      lede: faqCopy.lede ?? 'Common questions before sending the inquiry.',
      items: d.faq,
    },
    rfq: {
      eyebrow: rfqCopy.eyebrow,
      heading: rfqCopy.heading ?? 'Send the Order Basis for Supply Review',
      lede: rfqCopy.lede ?? 'Share the available grade, specification, dimensions, quantity, processing and evidence requirements. A drawing is helpful for cut blanks and controlled tolerances, but it is optional for the first enquiry.',
      checks: rfqCopy.checks ?? [
        'Grade and specification review',
        `${d.M} scope review`,
        'Processing and inspection requirements',
        'Quotation-specific availability and delivery basis',
      ],
      formTitle: rfqCopy.formTitle ?? `${d.M} Inquiry`,
      submitLabel: rfqCopy.submitLabel ?? `Send ${d.M} Inquiry`,
      variant: rfqCopy.variant ?? 'titanium-product',
    },
    extras: d.extras,
  };
}
