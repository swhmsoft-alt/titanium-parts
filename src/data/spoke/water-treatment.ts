/**
 * Water & wastewater treatment.
 *
 * The sector is split into sub-processes with genuinely different failure
 * mechanisms: seawater and brine electrochlorination, on-site hypochlorite
 * generation, electrochemical oxidation for refractory organics, and the
 * evaporation of high-salinity brines. They are written separately below
 * because they do not share one failure mode and they do not share one
 * coating.
 */

import type { SpokeContent } from './types';
import { assertRoute } from './assert-route';

export const waterTreatment: SpokeContent = {
  h1: 'Water & Wastewater Treatment Titanium & MMO Anode Solutions',
  seoTitle: 'Water Treatment Titanium & MMO Anode Solutions | Titanium Parts',
  metaDescription:
    'Titanium anodes, cell internals and heat exchange equipment for brine electrochlorination, hypochlorite generation, advanced oxidation and high-salinity brine treatment.',
  heroLede:
    'Water treatment is a chemical duty and a mechanical duty at the same time. Brine electrochlorination, on-site hypochlorite generation, electrochemical oxidation of refractory organics and the evaporation of high-salinity brines each fail in a different way, and each one drives a different grade, coating and geometry decision. We supply the anode, the cell internals and the surrounding titanium equipment against that specific process, so service life is designed from the chemistry rather than from a catalogue dimension.',
  riskSectionTitle: 'Operating Conditions & Material Failure Risks in Water Treatment',
  failureModes: [
    {
      title: 'High-Chloride Pitting and Crevice Corrosion',
      body: 'A chlorination cell sees the worst combination a metal can face: a high chloride concentration, an oxidising potential held at the anode, and a local chemistry that is more aggressive in the gap than in the bulk. In a seawater or brine cell the anolyte runs at several tens of thousands of milligrams per litre of chloride at 70–85 °C, and the hydrogen evolution reaction raises the local pH against the anode surface. Grade 2 titanium resists the bulk medium well, but it is not immune. Crevices behind the anode edge, under a gasket face and around the thread of a stud connection trap solution that never refreshes, and that stagnant high-chloride pocket is where pitting starts. The failure is a perforation of the anode substrate or a weeping seal, not a coating problem, and it is found during an inspection window when the cell is already out of service.',
    },
    {
      title: 'Coating Passivation Under Fluctuating and Intermittent Current',
      body: 'Chlorination duty is rarely steady. Rectifiers are switched, cells are taken offline for cleaning, a pump is switched between duty and standby, and the cell is exposed to a peak load during start-up while the anolyte is still cold. Every current interruption drives the mixed-metal-oxide surface through a passivation cycle. The noble oxide layer re-forms with a different morphology than the one that was consumed, and the re-formed layer is not as adherent and not as conductive. Coating life is therefore consumed in proportion to the number of cycles rather than to the total ampere-hours. This is why two cells on identical rectifiers, one running continuously and one running on a shift cycle, can show a visible difference in coating wear within one year. Anode service life quoted against steady-state amperage overstates the real interval.',
    },
    {
      title: 'Scaling, Fouling and Flow Erosion',
      body: 'The anode surface is a surface that collects deposits. Calcium and magnesium hardness in the feed, and any suspended solids carried into the cell, precipitate on the anode as the local pH rises under the coating. A scale layer is an insulator: it concentrates the current on the few points that are still exposed, and those points run at a local current density far above the design value. The result is uneven coating wear on top of the scale, not under it. Flow adds a second mechanism. Brine and effluent velocities across the electrode surface scour the scale away and carry suspended solids against it, and the same flow is what pushes the cell design toward a geometry that keeps the gap uniform. A cell that is chemically correct but hydrodynamically uneven will fail at the high-flow end first.',
    },
  ],
  solutionSectionTitle: 'Engineered Solutions for Water Treatment Processes',
  solutions: [
    {
      title: 'MMO Titanium Anodes for Electrochlorination',
      body: 'Chlorine evolution at 700–1500 A/m² in brine is the most demanding anode duty in this sector, and it is where the coating choice carries the most weight. A ruthenium–iridium mixed oxide on a titanium substrate is the standard route for chlorine evolution because the ruthenium carries the active dissolution behaviour while the iridium stabilises the structure, and the combination tolerates the steady oxidising potential of a chlorination cell far better than a ruthenium layer alone. Where the process is oxygen evolution rather than chlorine evolution — electrochemical oxidation, or the anodic side of a bipolar membrane cell — the iridium–tantalum system is the better match, because it is stable at the higher potential that oxygen evolution demands. The structural form follows the cell: mesh ribbon anodes where the gap is small and the surface area has to be high, plate anodes where a single large surface is preferred, and tubular electrode groups where the cell has to be fed from the inside.',
      points: [
        'Ru-Ir mixed metal oxide for chlorine evolution in brine and seawater',
        'Ir-Ta mixed metal oxide for oxygen evolution and advanced oxidation duty',
        'Mesh ribbon, plate and tubular electrode groups matched to the cell gap',
        'Grade 2 substrate for the anode body, Grade 7 where crevice geometry cannot be avoided',
        'Coating loading verified by XRF on the delivered surface',
      ],
      href: assertRoute('/titanium-anode/ruthenium-coated-titanium-anodes/', 'water treatment solution'),
      hrefLabel: 'Ru-Ir Coated Titanium Anodes',
    },
    {
      title: 'Titanium Heat Exchangers, Piping and Cell Internals',
      body: 'The anode is rarely the part that limits the cell. The brine loop, the cooling circuit, the cell frame and the piping around it decide how much duty the anode actually sees, because they set the temperature, the flow and the gap uniformity. Grade 2 industrial pure titanium is the normal selection for brine and clarified feedwater handling, because it holds its strength and its corrosion resistance across the working range without the alloy cost of a higher grade. Where the cell has stagnant crevices that cannot be designed out — threaded connections, lap joints, gasket interfaces — Grade 7 titanium with palladium is specified, because the small palladium addition is what separates it from Grade 2 in a reducing, high-chloride crevice. Heat exchanger duty follows the same logic: ASTM B338 tube in Grade 2 for general brine service, with wall thickness and joint design set by the design code rather than by the corrosion allowance alone.',
      points: [
        'Grade 2 industrial pure titanium for brine, feedwater and cooling circuits',
        'Grade 7 titanium-palladium for crevice-prone connections and stagnant zones',
        'ASTM B338 seamless and welded tube for heat exchanger duty',
        'ASTM B265 plate for cell frames, covers and fabricated vessel parts',
        'Bespoke cell internals machined against the cell drawing, not a generic kit',
      ],
      href: assertRoute('/titanium-products/titanium-tubing/', 'water treatment solution'),
      hrefLabel: 'Titanium Tubing & Heat Exchanger Tube',
    },
    {
      title: 'Electrolysis Packages and Cell Assemblies',
      body: 'Most water treatment projects are not bought as loose anodes. They are bought as a package: the cell, the electrode set, the rectifier interface and the balance of plant that a skid has to contain, delivered and tested as one scope so that the duty delivered matches the duty quoted. That scope is where the technical review carries the most weight, because the anode specification and the cell specification are only correct relative to each other. A coating chosen for the nominal current density is the wrong coating once the cell has been resized for a lower flow rate and a higher inlet concentration, and the two have to be reviewed together. We supply the assembly with the electrode set, the cell body and the documentation pack as a single order basis.',
      points: [
        'Cell and electrode set supplied as one scope with the coating and the geometry',
        'Salt chlorination and hypochlorite generation packages to the required duty',
        'Rectifier interface, cabling and connection detail confirmed before production',
        'Factory dimensional and functional records issued with the package',
        'Coating loading and surface composition report for every electrode set',
      ],
      href: assertRoute('/sodium-hypochlorite-generator/', 'water treatment solution'),
      hrefLabel: 'Sodium Hypochlorite Generation Systems',
    },
  ],
  matrixSectionTitle: 'Water Treatment Process-to-Specification Matrix',
  specMatrix: [
    {
      process: 'Seawater electrochlorination (chlorine generation)',
      medium: 'Filtered seawater, 25–35,000 mg/L chloride, 60–85 °C',
      risk: 'Crevice pitting at gasket faces and studs; coating wear under start-stop cycling',
      recommendation: 'Grade 2 substrate with Ru-Ir mixed metal oxide, mesh ribbon anodes',
    },
    {
      process: 'Brine electrochlorination for on-site hypochlorite',
      medium: 'Saturated brine 20–25% NaCl, 70–85 °C, 1000–1500 A/m²',
      risk: 'Scale deposition under the anode raising local current density; uneven coating wear',
      recommendation: 'Grade 2 substrate, Ru-Ir coating, plate or mesh anodes sized to the flow gap',
    },
    {
      process: 'Hypochlorite generation for potable disinfection',
      medium: 'Produced hypochlorite solution, pH 11–13, 20–40 °C',
      risk: 'Free chlorine attack on cell internals; caustic stress at welds and threads',
      recommendation: 'Grade 2 cell internals with Grade 7 on crevice connections, welded seams',
    },
    {
      process: 'Electrochemical oxidation of refractory organics (AOP)',
      medium: 'Acidified industrial wastewater, pH 2–5, 25–40 °C',
      risk: 'High anodic potential attack; organic fouling of the electrode surface',
      recommendation: 'Ir-Ta mixed metal oxide on Grade 2, flat plate anodes with high gap uniformity',
    },
    {
      process: 'High-salinity brine concentration and evaporation',
      medium: 'Concentrated brine 15–25% TDS, 85–110 °C, scaling salts',
      risk: 'Deposit scaling in heat transfer surfaces; chloride stress at welds',
      recommendation: 'Grade 2 tube to ASTM B338, Grade 7 where stagnant crevices exist, scaled wall thickness',
    },
    {
      process: 'Pool and spa disinfection systems',
      medium: 'Low-chloride treated water, 15–40 °C, low conductivity',
      risk: 'Low-level corrosion under fluctuating current; contact and connector wear',
      recommendation: 'Grade 2 substrate, Ru-Ir coating, tubular or mesh anodes sized to the cell',
    },
  ],
  standardsSectionTitle: 'Standards Compliance, Testing & Field Validation',
  standardsSubTitle: 'Material & Coating Quality Control',
  standards: [
    'ASTM B265 for titanium plate, sheet and strip used in cell frames and fabricated parts',
    'ASTM B338 for seamless and welded titanium tube used in brine and heat exchange circuits',
    'ASTM B348 for titanium and titanium alloy bar, billet and forging stock',
    'ASTM B366 for welded fittings used in the brine and dosing lines',
    'Grade 2 and Grade 7 material certification to EN 10204 3.1 with heat and lot traceability',
    'XRF surface elemental composition on every coated electrode, reported as precious metal loading in g/m²',
    'Coating thickness and adhesion check on the as-delivered electrode surface',
    'Dimensional inspection of the finished cell internals and electrode set against the cell drawing',
  ],
  fieldSubTitle: 'Representative Field Experience',
  fieldExperience: [
    {
      duty: 'Seawater reverse osmosis pre-treatment skid at a municipal desalination plant, treating 50,000 m³ per day.',
      spec: '400 sets of Ru-Ir coated titanium mesh ribbon anodes on Grade 2 substrate, supplied as complete electrode sets with titanium busbar connections and Grade 7 stud hardware.',
      result: 'Continuous operation above 5 years in feed at 35,000 mg/L chloride at 1500 A/m², with no coating perforation and no unplanned cell downtime attributable to the anodes.',
    },
    {
      duty: 'On-site hypochlorite generation system for an industrial wastewater plant producing 5,000 m³ per day of disinfectant.',
      spec: 'Graded Ru-Ir coating on Grade 2 mesh anodes at a loading specified against 1200 A/m², with the cell internals, brine loop and cooling circuit in Grade 2 tube to ASTM B338.',
      result: 'Cell voltage stable within 3% of the baseline over the first 18 months, with the coating surface remaining within specification at the scheduled inspection and no scale-driven voltage increase recorded.',
    },
  ],
  rfqSectionTitle: 'Required Engineering Inputs for Your Water Treatment RFQ',
  rfqInputs: [
    'Source water or brine analysis: TDS, chloride, fluoride, hardness, pH and temperature',
    'Target production basis: free chlorine or hypochlorite concentration and daily volume',
    'Cell configuration: number of cells, electrode area, inter-cell gap and flow path',
    'Rectifier specification: voltage, current rating, and the operating duty cycle including start-stop frequency',
    'Operating temperature and pressure at the electrode surface',
    'Impurity and fouling load: suspended solids, organic content and scaling tendency',
    'Required anode geometry and coating type, with the current density basis and where it is measured',
    'Cell body material and the grade expected for the brine, cooling and product circuits',
    'Documentation scope: material certificates, coating loading report, and any third-party inspection requirement',
    'Delivery destination, packing, marking and the required schedule',
  ],
  faqSectionTitle: 'Technical FAQs for Water Treatment Engineers',
  faqs: [
    {
      question: 'In seawater electrochlorination, why is Ru-Ir coating preferred over Ir-Ta coating?',
      answer: 'Both coatings are viable in seawater, but they are optimised for different reactions. Ru-Ir is the standard choice for chlorine evolution because the ruthenium carries the dissolution behaviour at the lower potential that chlorine evolution needs, which keeps the cell voltage down and the wear rate low at 1000–1500 A/m². Ir-Ta is more noble and is the better answer where the duty is oxygen evolution or the advanced oxidation of refractory organics, because it survives the higher anodic potential without the same passivation behaviour. The determining factor is not the chloride level but the reaction at the surface: if the cell is producing chlorine, Ru-Ir is the economical choice; if the cell is producing hydroxyl radicals or oxygen, Ir-Ta is the safer one.',
    },
    {
      question: 'Why can fluoride-containing industrial wastewater not be handled with a standard Grade 2 titanium anode?',
      answer: 'Fluoride is the one common anion that breaks the passive film titanium relies on. Hydrofluoric acid dissolves the titanium oxide layer, and once the film is gone the base metal is consumed rapidly rather than passivating. The rate depends on the free fluoride concentration, the pH and the temperature, so the practical rule is that fluoride-bearing streams are excluded from Grade 2 titanium above a very low free fluoride limit, and above roughly 50 mg/L the exclusion becomes absolute for immersed service. Where the duty cannot be changed, the answer is a different material or a different geometry — a platinum-coated or lead dioxide-coated anode in an isolated cell, or a fluoropolymer lining on the wetted parts — rather than a heavier titanium grade, because no titanium alloy solves the fluoride attack.',
    },
    {
      question: 'How long will an MMO anode last in a chlorination cell, and what actually decides it?',
      answer: 'Service life is set by the operating profile rather than by the coating loading alone, which is why no supplier can quote it from a datasheet. The variables that matter are the current density, the number of start-stop cycles, the free chlorine and hypochlorite concentration, the temperature, the impurities in the feed and the shutdown practice. A continuously running cell and a shift-cycled cell on the same rectifier will not reach the same age. To state a defensible interval we need the duty cycle and the chemistry, and we give the basis of the estimate in writing with the quotation. What can be guaranteed is the coating specification and the loading of the delivered surface, verified by XRF.',
    },
    {
      question: 'Should the cell internals be Grade 2 or Grade 7 titanium?',
      answer: 'Grade 2 is the correct selection for the overwhelming majority of brine and cooling circuits, and specifying Grade 7 throughout is usually money spent without a corresponding life increase. Grade 7 earns its place at the points where crevice geometry cannot be removed: threaded connections, gasket interfaces, lap joints and any zone where the solution is stagnant against a metal surface. The decision is a geometry decision as much as a material decision. Our recommendation is to keep Grade 2 for the open circuit volume and the fabricated parts, and to identify the specific crevice locations where Grade 7 or a closed design should be used.',
    },
  ],
  relatedLinks: [
    {
      href: assertRoute('/titanium-anode/', 'water treatment related link'),
      label: 'Electrochemical Anodes',
      note: 'The full anode range, including mesh, plate, tubular and wire geometries.',
    },
    {
      href: assertRoute('/titanium-anode/mmo-anode/', 'water treatment related link'),
      label: 'MMO Anodes',
      note: 'Coating systems and geometry families used in water treatment cells.',
    },
    {
      href: assertRoute('/titanium-products/', 'water treatment related link'),
      label: 'Titanium Products & Machined Parts',
      note: 'Mill forms and machined components for the balance of the plant.',
    },
    {
      href: assertRoute('/industries/', 'water treatment related link'),
      label: 'All Industries',
      note: 'The hub page, with the cross-industry comparison table and the shared RFQ inputs.',
    },
  ],
};

