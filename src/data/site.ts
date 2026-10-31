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
  tagline: 'Titanium Products Manufacturer & Engineering Supplier',
  /** Default meta description, used when a page does not supply its own. */
  description:
    'Factory-direct manufacturer and engineering supplier of titanium products, titanium anodes, and PEM electrolyzer systems for global OEMs, EPC contractors, and system integrators.',

  /** Canonical origin. Keep in sync with astro.config.mjs `site`. */
  url: 'https://titanium-parts.com',
  /** Locale used for <html lang> and hreflang. */
  locale: 'en',
  localeCode: 'en-US',

  contact: {
    salesEmail: 'sales@titanium-parts.com',
    phone: '+86 13857402537',
    phoneDisplay: '86-13857402537',
    whatsapp: '+86 13857402537',
  },

  locations: {
    hq: {
      name: 'Factory & Engineering Center',
      city: 'Baoji City',
      region: 'Shaanxi Province',
      country: 'China',
      detail: 'Titanium Valley, Baoji City, Shaanxi Province, China',
    },
    office: {
      name: 'Project Coordination Office',
      city: 'Ningbo',
      country: 'China',
    },
    pem: {
      name: 'PEM Assembly Hub',
      city: 'Dongguan',
      country: 'China',
    },
  },

  /** Product families advertised in navigation and capability lists. */
  capabilities: [
    'Titanium Materials & Custom Parts',
    'MMO & Platinized Titanium Anodes',
    'Cathodic Protection / MGPS Products',
    'PEM Electrolyzer Stack or System',
  ],

  /** Headline metrics. Only publish figures that are verifiable. */
  stats: {
    yearsExperience: '10+',
    teamSize: '50+',
    countriesServed: '30+',
    products: '100+',
  },

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
