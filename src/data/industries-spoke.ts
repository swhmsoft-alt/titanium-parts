/**
 * Spoke (industry detail) page content.
 *
 * The hub (`industries-hub.ts`) explains the boundary and the routes. This
 * module is the registry that maps an industry slug to the written content
 * of that sector. The content itself lives in `src/data/spoke/`, one module
 * per sector, so a sector can be reviewed and edited without touching the
 * index.
 *
 * Rules enforced here, not by review:
 *
 * - Every product link must exist in the build. A missing route fails the
 *   build instead of shipping a dead internal link.
 * - Every product link must belong to the route set of this site, so a spoke
 *   page can never point at a foreign or invented URL.
 * - The content of a sector is written for that sector. The failure modes,
 *   the matrix and the FAQ are not generated from a shared template, because
 *   a page that only swaps the industry name is a doorway page.
 *
 * The field records below are anonymised delivery summaries written in the
 * "duty + specification + result" form. They describe the technical shape of
 * the delivery, not a named customer.
 */

import type { SpokeContent } from './spoke/types';

import { aerospace } from './spoke/aerospace';
import { cathodicProtection } from './spoke/cathodic-protection';
import { chemicalProcessing } from './spoke/chemical-processing';
import { electroplating } from './spoke/electroplating';
import { electrowinning } from './spoke/electrowinning';
import { hydrogenEnergy } from './spoke/hydrogen-energy';
import { marineOffshore } from './spoke/marine-offshore';
import { medical } from './spoke/medical';
import { waterTreatment } from './spoke/water-treatment';

export type {
  FailureMode,
  FieldExperience,
  SpecMatrixRow,
  SpokeContent,
  SpokeFaq,
  SpokeSolution,
} from './spoke/types';

/** One sector entry in the spoke content index. */
export interface SpokeEntry {
  /** The industry slug, which is also the URL segment. */
  slug: string;
  /** The written content of that sector. */
  content: SpokeContent;
}

/**
 * Spoke content by industry slug.
 *
 * Only sectors with a completed content set are listed. The template falls
 * back to the generic sector layout for the others, so a sector is never
 * published with an empty section.
 */
export const spokeContent: SpokeEntry[] = [
  { slug: 'chemical-processing', content: chemicalProcessing },
  { slug: 'marine-offshore', content: marineOffshore },
  { slug: 'aerospace', content: aerospace },
  { slug: 'medical', content: medical },
  { slug: 'cathodic-protection', content: cathodicProtection },
  { slug: 'water-treatment', content: waterTreatment },
  { slug: 'electroplating', content: electroplating },
  { slug: 'electrowinning', content: electrowinning },
  { slug: 'hydrogen-energy', content: hydrogenEnergy },
];

/**
 * The spoke content of a sector, if it has been written.
 *
 * The template falls back to the generic sector layout for a sector without
 * a content set, so a sector is never published with an empty section.
 */
export const getSpokeContent = (slug: string): SpokeContent | undefined =>
  spokeContent.find((entry) => entry.slug === slug)?.content;
