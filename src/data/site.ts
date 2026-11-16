/**
 * Single source of truth for brand, contact and SEO configuration.
 *
 * Every consumer (Header, Footer, RFQForm, BaseLayout, pages, sitemap)
 * must read from this module. Nothing here may be duplicated elsewhere —
 * that is what makes a site-wide rebrand a single-file change.
 */

export const site = {
  /** Short display name, used in titles and labels. */
  name: 'Titanium Parts',
  /** Full legal entity name, used in structured data and footers. */
  legalName: 'Titanium Parts',
  /** One-line positioning statement. */
  tagline: 'Titanium & Anode Sourcing and Engineering Support',
  /** Default meta description, used when a page does not supply its own. */
  description:
    'Independent engineering and sourcing resource for titanium products, coated anodes and electrochemical components, coordinated with qualified production partners in China.',

  /** Canonical origin. Keep in sync with astro.config.mjs `site`. */
  url: 'https://titanium-parts.com',
  /** Locale used for <html lang> and hreflang. */
  locale: 'en',
  localeCode: 'en-US',

  contact: {
    salesEmail: 'sales@titanium-parts.com',
    phone: '+86 17719570398',
    phoneDisplay: '86-17719570398',
    whatsapp: '+86 17719570398',
  },

  /**
   * Sourcing context.
   *
   * We own no factory and publish no facility address. This describes the
   * industrial cluster the qualified partner workshops are sourced from —
   * it is not a company site and must never be written as one.
   */
  sourcing: {
    base: 'Sourcing base in the Baoji titanium industrial cluster, China',
  },

  /** Product families advertised in navigation and capability lists. */
  capabilities: [
    'Titanium Materials & Custom Parts',
    'MMO & Platinized Titanium Anodes',
    'Cathodic Protection / MGPS Products',
    'PEM Electrolyzer Stack or System',
  ],

  social: {
    linkedin: '#',
    facebook: '#',
    youtube: '#',
  },

  seo: {
    /** Default Open Graph / Twitter card image. Must exist in public/images. */
    ogImage: '/images/og-default.jpg',
    /** Twitter handle without the leading @, empty when not configured. */
    twitterHandle: '',
  },
} as const;

export type Site = typeof site;

/** Copyright line, evaluated at build time so the year stays current. */
export const copyright = `© ${new Date().getFullYear()} ${site.legalName}. All rights reserved.`;
