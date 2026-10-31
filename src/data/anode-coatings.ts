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
  description: string;
  /** Reactions this family is commonly reviewed for. */
  reactions: string[];
  /** What must be confirmed before quoting. */
  reviewBasis: string[];
  /** Common anode geometries. */
  geometries: string[];
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
      'Ruthenium-iridium mixed metal oxide coatings are widely reviewed for chlorine evolution in chloride media. Suitability is not fixed by the coating name: electrolyte composition, impurities, pH, temperature, current density and the required operating life all change how the coating behaves, so every request is reviewed against the actual service.',
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
    image: '/images/titanium-anode/ru-ir-mmo-anodes.webp',
  },
  {
    slug: 'iridium-oxide-coated-titanium-anodes',
    description:
      'Ir-Ta and iridium-based MMO titanium anodes for oxygen-evolution duties, reviewed against electrolyte, contaminants, mass transfer and operating schedule.',
    title: 'Ir-Ta & Ir-Based MMO Titanium Anodes',
    summary: 'Iridium-based mixed metal oxide anodes reviewed for oxygen evolution duties.',
    detail:
      'Iridium-based mixed metal oxide systems are commonly evaluated for oxygen-evolution and other selected electrochemical duties. No single iridium formulation fits every process, so the electrolyte, contaminant behaviour, mass transfer and shutdown conditions are reviewed before a coating family is proposed.',
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
    image: '/images/titanium-anode/pbo2-coated-anodes.webp',
  },
];
