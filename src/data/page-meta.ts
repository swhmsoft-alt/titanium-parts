/**
 * Page metadata for the non-product routes.
 *
 * Product pages use `src/data/product-meta.ts`. Everything else is
 * declared here so title and description lengths can be reviewed in one
 * place rather than spread across page files.
 *
 * Title budget: the layout appends " | Titanium Parts", so the value here
 * should stay under ~52 characters to land inside the 70-character search
 * result limit. Description budget: 70-175 characters.
 */

export interface PageMeta {
  title: string;
  description: string;
}

export const pageMeta: Record<string, PageMeta> = {
  home: {
    title: 'Titanium Products Manufacturer & Supplier',
    description:
      'Factory-direct titanium materials, precision-machined components, engineered anodes and PEM electrolyzer systems for global OEMs, EPC contractors and system integrators.',
  },
  applications: {
    title: 'Electrochemical Applications & Anode Selection',
    description:
      'Electrode and anode selection for chlor-alkali, electrochlorination, electrowinning, water treatment and marine anti-fouling duties, reviewed against process conditions.',
  },
  cathodicProtection: {
    title: 'Cathodic Protection Anodes Manufacturer',
    description:
      'ICCP, sacrificial and reference electrodes for soil, marine, concrete and tank-bottom corrosion protection systems, supplied with traceable coating records.',
  },
  hydrogenGenerators: {
    title: 'PEM Hydrogen Generator for Lab & OEM Supply',
    description:
      'PEM hydrogen generators for laboratory, analytical instrument, fuel cell testing and OEM supply, configured for purity, pressure and duty cycle.',
  },
  manufacturingCapabilities: {
    title: 'Manufacturing & Capabilities',
    description:
      'Titanium processing, machining, MMO anode coating and PEM assembly coordinated through qualified partner workshops in China, with one engineering contact.',
  },
  pemElectrolyzer: {
    title: 'PEM Electrolyzer Manufacturer',
    description:
      'PEM hydrogen stacks, lab generators, mid-range systems and industrial-scale containerized electrolyzers engineered for green hydrogen production.',
  },
  saltChlorinator: {
    title: 'Commercial Pool Salt Chlorinator Systems',
    description:
      'Commercial and OEM salt chlorinator systems, replacement cells and titanium electrolytic cells for pool and water treatment applications.',
  },
  terms: {
    title: 'Terms of Use',
    description:
      'The terms on which this website is provided, and how quotations, orders, technical responsibility and liability are handled for titanium products and systems.',
  },
  notFound: {
    title: 'Page Not Found',
    description:
      'The page you are looking for could not be found. Browse our titanium product range, anode engineering services and PEM electrolyzer capability instead.',
  },
  titaniumAnode: {
    title: 'Titanium Anode Manufacturer',
    description:
      'Custom MMO, Ru-Ir, Ir-Ta and platinized titanium anodes selected by reaction, electrolyte, current density, geometry and design life. Send your process data for review.',
    sku: 'TP-ANODES',
  },
  titaniumMachiningParts: {
    title: 'Custom CNC Titanium Machined Parts',
    description:
      'CNC machined titanium components to your drawing: grade and UNS, starting form, datums, GD&T, threads, secondary processes, inspection evidence and quantity confirmed.',
    sku: 'TP-MACHINED-PARTS',
  },
  titaniumProducts: {
    title: 'Industrial Titanium Products Manufacturer',
    description:
      'Titanium mill products and drawing-based components with form, grade, dimensions, condition, processing, inspection and documentation reviewed against your requirements.',
    sku: 'TP-PRODUCTS',
  },
  titaniumService: {
    title: 'Custom Titanium Fabrication Services',
    description:
      'Custom titanium fabrication, OEM machining, forming, welding, surface finishing, inspection documentation and export logistics for industrial buyers and integrators.',
    sku: 'TP-SERVICES',
  },
};
