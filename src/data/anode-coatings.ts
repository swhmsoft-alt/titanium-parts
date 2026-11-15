/**
 * Anode coating families.
 *
 * Each entry describes one coating system, the reaction it is commonly
 * reviewed for, and what has to be confirmed before it can be quoted.
 * The pages are rendered from a single template.
 */

export interface AnodeCoating {
  slug: string;
  title: string;
  /** Meta description, 70-175 characters. */
  description: string;
  /** One-line positioning. */
  summary: string;
  /** Coating family and substrate description. */
  detail: string;
  /** Reactions this family is commonly reviewed for. */
  reactions: string[];
  /** What must be confirmed before quoting. */
  reviewBasis: string[];
  /** Common anode geometries. */
  geometries: string[];
  /** The oxide combinations the family covers, stated plainly. */
  compositions: string[];
  /** MMO geometry pages that carry this coating family. */
  relatedGeometries: { label: string; href: string }[];
  /** Image path under public/images. */
  image: string;
}

export const anodeCoatings: AnodeCoating[] = [
  {
    slug: 'ruthenium-coated-titanium-anodes',
    description:
      'Ru-Ir MMO titanium anodes for chlorine-evolution and electrochlorination service, with coating definition, geometry and loading basis confirmed to order.',
    title: 'Ru-Ir MMO Titanium Anodes',
    summary: 'Mixed metal oxide anodes commonly reviewed for chlorine-evolution service.',
    detail:
      'A ruthenium–iridium mixed metal oxide, typically RuO₂ with an IrO₂ addition, is the coating system most often reviewed for chlorine evolution in chloride media and for the electrochlorination and hypochlorite generation duties that sit next to it. The ruthenium carries the catalytic behaviour for the chloride oxidation reaction, while the iridium stabilises the surface. That balance is not fixed: the electrolyte composition, the impurity load, the pH, the temperature, the current density and the required operating life all change how the coating behaves, so every request is reviewed against the actual service rather than against the family name.',
    reactions: [
      'Chlorine evolution in chloride media',
      'Electrochlorination and hypochlorite generation',
      'Selected electrolysis and surface treatment duties',
    ],
    reviewBasis: [
      'Electrolyte chemistry, chloride level and impurity load',
      'pH, temperature and mass transfer conditions',
      'Current density basis and daily operating schedule',
      'Required design life and operating interruptions',
      'Coating definition, loading basis and acceptance method',
    ],
    geometries: [
      'Mesh, plate and tube anodes',
      'Ribbon and wire anodes',
      'Disc, rod and canister geometries',
      'Drawing-based custom assemblies with masks and tabs',
    ],
    compositions: [
      'RuO₂ – IrO₂ mixed metal oxide',
      'RuO₂ – TiO₂ mixed metal oxide',
      'Coating loading expressed in g/cm² of coated area',
    ],
    relatedGeometries: [
      { label: 'MMO Tubular Anode', href: '/titanium-anode/mmo-anode/mmo-tubular-anode/' },
      { label: 'MMO Ribbon Anode', href: '/titanium-anode/mmo-anode/mmo-ribbon-anode/' },
      { label: 'MMO Mesh Ribbon Anode', href: '/titanium-anode/mmo-anode/mmo-mesh-ribbon-anode/' },
      { label: 'MMO Wire Anode', href: '/titanium-anode/mmo-anode/mmo-wire-anode/' },
    ],
    image: '/images/titanium-anode/ru-ir-mmo-anodes.webp',
  },
  {
    slug: 'iridium-oxide-coated-titanium-anodes',
    description:
      'Ir-Ta and iridium-based MMO titanium anodes for oxygen-evolution duties, reviewed against electrolyte, contaminants, mass transfer and operating schedule.',
    title: 'Ir-Ta & Ir-Based MMO Titanium Anodes',
    summary: 'Iridium-based mixed metal oxide anodes reviewed for oxygen evolution duties.',
    detail:
      'An iridium-based mixed metal oxide, most often IrO₂ combined with Ta₂O₅ and sometimes with SnO₂ or ZrO₂, is the coating system commonly evaluated for oxygen evolution and for the selected advanced oxidation duties that run alongside it. The iridium oxide carries the oxygen evolution behaviour while the second oxide stabilises the surface in alkaline and acidic media. No single iridium formulation fits every process, so the electrolyte, the contaminant behaviour, the mass transfer and the shutdown conditions are reviewed before a coating family is proposed.',
    reactions: [
      'Oxygen evolution in alkaline and acidic media',
      'Advanced oxidation and specialty electrochemical processes',
      'Selected electrolysis duties requiring low consumption',
    ],
    reviewBasis: [
      'Electrolyte composition, pH and contaminant species',
      'Temperature, mass transfer and gas-release behaviour',
      'Potential or current duty and cycling conditions',
      'Shutdown, standby and re-start behaviour',
      'Coating composition basis and inspection method',
    ],
    geometries: [
      'Plate and mesh anodes',
      'Tube and custom geometry anodes',
      'Coated-zone and masked-area configurations',
      'Project-specific reactor assemblies',
    ],
    compositions: [
      'IrO₂ – Ta₂O₅ mixed metal oxide',
      'IrO₂ – SnO₂ or IrO₂ – ZrO₂ variants',
      'Coating loading expressed in g/cm² of coated area',
    ],
    relatedGeometries: [
      { label: 'MMO Tubular Anode', href: '/titanium-anode/mmo-anode/mmo-tubular-anode/' },
      { label: 'MMO Disc Anode', href: '/titanium-anode/mmo-anode/mmo-disc-anode/' },
      { label: 'MMO Rod Anode', href: '/titanium-anode/mmo-anode/mmo-rod-anode/' },
      { label: 'MMO Linear Anode', href: '/titanium-anode/mmo-anode/mmo-linear-anode/' },
    ],
    image: '/images/titanium-anode/ir-ta-mmo-anodes.webp',
  },
  {
    slug: 'platinized-anode',
    description:
      'Platinum-coated titanium anodes for plating and selected electrolysis processes, with the platinum metric, coverage, substrate and wear acceptance defined.',
    title: 'Platinized Titanium Anodes',
    summary: 'Platinum-coated titanium anodes for plating and selected electrolysis duties.',
    detail:
      'Platinised titanium anodes are used where a stable, low-particulate active surface is needed, commonly in precious metal plating and selected electrolysis processes. The platinum metric, coverage, substrate grade, polarity and expected wear have to be stated explicitly, because "platinum" on its own does not define the order.',
    reactions: [
      'Precious metal and decorative plating',
      'Hard and functional chrome plating',
      'Selected electrolysis and oxidation duties',
    ],
    reviewBasis: [
      'Platinum metric, units and coverage basis',
      'Substrate grade, form and fabrication route',
      'Bath chemistry, contaminants and operating temperature',
      'Polarity, current density and active area',
      'Expected wear, maintenance and replacement interval',
    ],
    geometries: [
      'Mesh, plate and sheet anodes',
      'Drawing-based assemblies with masked edges',
      'Tabbed and threaded connection configurations',
      'Rack-mounted and custom fixtures',
    ],
    compositions: [
      'Platinum layer on a titanium substrate',
      'Platinum loading expressed in g/cm² or a thickness basis',
      'Porous or barrier-type coating variants for direct contact duties',
    ],
    relatedGeometries: [
      { label: 'MMO Disc Anode', href: '/titanium-anode/mmo-anode/mmo-disc-anode/' },
      { label: 'MMO Tubular Anode', href: '/titanium-anode/mmo-anode/mmo-tubular-anode/' },
      { label: 'MMO Rod Anode', href: '/titanium-anode/mmo-anode/mmo-rod-anode/' },
    ],
    image: '/images/titanium-anode/platinized-titanium-anodes.webp',
  },
  {
    slug: 'lead-dioxide-anode',
    description:
      'Specialty coated titanium anodes reviewed case by case against the reaction, hazard profile, qualification evidence and end-of-life responsibility.',
    title: 'Specialty Coated Titanium Anodes',
    summary: 'Non-standard coating systems reviewed against project-specific requirements.',
    detail:
      'Specialty coating systems are not a catalogue item. They are reviewed case by case, because the chemistry, the hazard profile, the qualification evidence and the end-of-life responsibility all have to be defined before a supply proposal makes sense.',
    reactions: [
      'Advanced oxidation and specialty electrochemical duties',
      'Processes where conventional MMO families are unsuitable',
      'Project-specific duties requiring qualification',
    ],
    reviewBasis: [
      'Target reaction, complete matrix and by-products',
      'Worker safety and environmental handling requirements',
      'Pilot or qualification basis and acceptance criteria',
      'Performance ownership during the project',
      'Disposal, take-back and end-of-life responsibility',
    ],
    geometries: [
      'Plate and mesh anodes',
      'Project-specific reactor assemblies',
      'Replaceable cartridge configurations',
      'Custom geometry from a drawing or sample',
    ],
    compositions: [
      'Lead dioxide based surface on a titanium substrate',
      'Bimetallic or composite specialty systems reviewed per project',
      'Coating loading expressed in g/cm² of coated area',
    ],
    relatedGeometries: [
      { label: 'MMO Plate and Mesh Assemblies', href: '/titanium-anode/mmo-anode/' },
      { label: 'MMO Tubular Anode', href: '/titanium-anode/mmo-anode/mmo-tubular-anode/' },
    ],
    image: '/images/titanium-anode/pbo2-coated-anodes.webp',
  },
];
