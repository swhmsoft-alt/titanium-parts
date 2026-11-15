/**
 * Route guard for the spoke content modules.
 *
 * Every product link in a spoke content set must exist in the build. A link
 * that does not fail the build instead of shipping a dead internal link, and
 * the label in the error message names the sector that made the mistake.
 */

import { routeWhitelist } from '../industries-hub';

/** Fail the build when a link target is not part of the build. */
export function assertRoute(href: string, label: string): string {
  if (!routeWhitelist.has(href)) {
    throw new Error(`industries-spoke: ${label} points at ${href}, which is not part of the build`);
  }
  return href;
}
