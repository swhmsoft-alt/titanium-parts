export const company = {
  name: 'Titanium Parts',
  shortName: 'Titanium Parts',
  legalName: 'Titanium Parts',
  tagline: 'Titanium Products Manufacturer & Engineering Supplier',
  description: 'Titanium Parts is a factory-direct manufacturer and engineering supplier of titanium products, titanium anodes, and PEM electrolyzer systems for global OEMs, EPC contractors, and system integrators.',

  // Contact info
  contact: {
    salesEmail: 'sales@titanium-parts.com',
    phone: '+86 13857402537',
    phoneDisplay: '86-13857402537',
    whatsapp: '+86 13857402537',
  },

  // Locations
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

  // Capabilities
  capabilities: [
    'Titanium Materials & Custom Parts',
    'MMO & Platinized Titanium Anodes',
    'Cathodic Protection / MGPS Products',
    'PEM Electrolyzer Stack or System',
  ],

  // Stats
  stats: {
    yearsExperience: '10+',
    teamSize: '50+',
    countriesServed: '30+',
    products: '100+',
  },

  // Social
  social: {
    linkedin: '#',
    facebook: '#',
    youtube: '#',
  },

  // SEO defaults
  seo: {
    siteUrl: 'https://titanium-parts.com',
    ogImage: '/images/og-default.jpg',
  },

  // Copyright
  copyright: `© ${new Date().getFullYear()} Titanium Parts All rights reserved.`,
};

export type Company = typeof company;
