/**
 * Shared content model of the anode page family.
 *
 * Every page in this family — the coating pages, the marine anti-fouling
 * system, the cathodic protection overview and the reference electrode page —
 * is rendered by `src/components/anode/ProductPage.astro`, which reads this
 * model. The model carries the copy only; the markup and the layout live in
 * the renderer, so a page is written as data and never as markup.
 *
 * Writing rules applied to the copy of every page:
 *   - people first: the hero states the buyer's problem, not the product;
 *   - experience: every claim is tied to a condition (current density,
 *     electrolyte, pH, temperature, duty cycle) instead of a slogan;
 *   - accuracy: reference figures are labelled as reference windows and are
 *     confirmed against the actual duty before they become a quotation;
 *   - trust: no invented company metric, certificate or customer reference.
 */

export interface PageHeroThumb {
  src: string;
  alt: string;
}

export interface PageHeroStat {
  value: string;
  label: string;
}

export interface PageHero {
  /** Small label above the H1. */
  eyebrow: string;
  title: string;
  /** The people-first lead: the problem the reader is trying to solve. */
  lead: string;
  /** The engineering boundary: what the product name does not define. */
  boundary: string;
  image: string;
  imageAlt: string;
  thumbs: PageHeroThumb[];
  stats: PageHeroStat[];
  /** Label of the primary call to action. */
  primaryCta: string;
  /** Label of the secondary call to action. */
  secondaryCta: string;
}

export interface PageNavItem {
  href: string;
  label: string;
}

export interface PageBlockItem {
  title: string;
  body: string;
  /** `linkcards` only. */
  href?: string;
  /** `cards` only: replaces the automatic number. */
  tag?: string;
}

export interface PageBlockSpec {
  label: string;
  value: string;
}

/**
 * The block kinds the renderer knows.
 *
 * `paragraphs` prose · `cards` short cards · `table` comparison table ·
 * `list` bulleted points · `linkcards` cards that link out · `spec` label and
 * value pairs · `note` an engineering boundary callout · `steps` a numbered
 * process · `checks` a checklist of dark-surface items · `pills` a row of
 * tags · `links` a row of link buttons.
 */
export type PageBlockKind =
  | 'paragraphs'
  | 'cards'
  | 'table'
  | 'list'
  | 'linkcards'
  | 'spec'
  | 'note'
  | 'steps'
  | 'checks'
  | 'pills'
  | 'links';

export interface PageBlock {
  kind: PageBlockKind;
  /** `paragraphs` */
  paragraphs?: string[];
  /** `cards`, `linkcards` and `steps` */
  items?: PageBlockItem[];
  /** `list` */
  points?: string[];
  /** `table` */
  columns?: string[];
  rows?: string[][];
  /** `table` (below the table) and `note` (the body of the callout) */
  note?: string;
  /** `list` and `note` */
  intro?: string;
  /** `spec` */
  specs?: PageBlockSpec[];
  /** `note` */
  title?: string;
  /** `checks`, `pills` and `links` — a plain string per entry. */
  entries?: string[];
  /** `links` — the target of each entry, in the same order. */
  hrefs?: string[];
}

/**
 * The layouts a section can take.
 *
 * `standard` a band of blocks under a heading · `showcase` a dark band with
 * a picture beside the copy · `boundary` a light band of two contrasting
 * cards · `quality` a dark band with a picture beside the copy.
 */
export type PageSectionLayout = 'standard' | 'showcase' | 'boundary' | 'quality';

export interface PageSection {
  /** Anchor id, used by the navigation of the page. */
  id: string;
  /** Utility classes of the band, taken from the reference page. */
  band: string;
  eyebrow: string;
  title: string;
  intro?: string;
  blocks: PageBlock[];
  /** The layout of the band. Defaults to `standard`. */
  layout?: PageSectionLayout;
  /**
   * The band is rendered after the FAQ instead of before it.
   *
   * The reference page closes its body with the factory band and only then
   * the questions, so a band that carries the same rhythm sits there too.
   */
  afterFaq?: boolean;
  /** `showcase` and `quality` — the picture of the band. */
  image?: { src: string; alt: string; caption?: string };
  /** `boundary` — the card that states what is reviewed. */
  review?: { title: string; points: string[] };
  /** `boundary` — the card that states what a specification cannot replace. */
  limits?: { title: string; points: string[] };
  /** `boundary` — the closing note of the band. */
  note?: { title: string; body: string };
  /** `boundary` — the pages that are adjacent to this one. */
  related?: { title: string; intro: string; links: { href: string; label: string }[] };
}

export interface PageFaq {
  q: string;
  a: string;
}

export interface PageRfq {
  eyebrow: string;
  title: string;
  lead: string;
  points: string[];
  /** Title of the inquiry form. */
  formTitle: string;
  /** Subtitle of the inquiry form. */
  formSubtitle: string;
}

export interface PageModel {
  slug: string;
  name: string;
  seoTitle: string;
  /** Meta description, 70-175 characters. */
  description: string;
  hero: PageHero;
  nav: PageNavItem[];
  sections: PageSection[];
  faq: PageFaq[];
  /** Heading of the FAQ band. */
  faqHeading: string;
  /** Lead paragraph of the FAQ band. */
  faqLead: string;
  /** The dark band that closes the page. */
  bandClass: string;
  rfq: PageRfq;
  /** Whether the page publishes a Product entity in its structured data. */
  product: boolean;
  /** Category of the product entity, when one is published. */
  category?: string;
}
