/**
 * Hydrogen & energy systems.
 *
 * This sector is defined by two things: the purity requirement of the
 * product gas and the pressure regime of the stack. Titanium appears as
 * the bipolar plate, the separator, the manifold and the heat exchanger,
 * and each of those carries a different combination of hydrogen
 * embrittlement risk and pressure duty.
 */

import type { SpokeContent } from './types';
import { assertRoute } from './assert-route';

export const hydrogenEnergy: SpokeContent = {
  h1: 'Hydrogen & Energy Titanium Components for PEM Electrolysis',
  seoTitle: 'Hydrogen & Energy Titanium Components | Titanium Parts',
  metaDescription:
    'Titanium bipolar plates, separators, manifolds and heat exchanger parts for PEM electrolysis and hydrogen service, specified against pressure, purity and embrittlement risk.',
  heroLede:
    'Hydrogen equipment is constrained from both sides: the product has to be pure, and the pressure has to be high while the material has to survive hydrogen. Titanium is used for the bipolar plate, the separator, the manifold and the heat exchanger because it combines strength, corrosion resistance and a low permeability to hydrogen, but each of those parts carries a different embrittlement exposure. We supply the titanium components of the stack and of the balance of plant against the pressure rating, the purity specification and the hydrogen service condition.',
  riskSectionTitle: 'Hydrogen Embrittlement and Pressure Integrity Risks in Hydrogen Systems',
  failureModes: [
    {
      title: 'Hydrogen Embrittlement of High-Pressure Stainless and Titanium Components',
      body: 'Hydrogen is small enough to enter the crystal lattice of a metal, and when it does it reduces the fracture toughness, particularly in the higher-strength alloys. In a pressure vessel this shows up as a sudden brittle fracture with no visible warning and no corrosion trace, and it typically happens at a stress concentration: a threaded connection, a weld toe, a heat-affected zone or a sharp transition in the section. Titanium is more resistant than the austenitic stainless grades, but it is not immune, and the risk rises with the hydrogen pressure, with the temperature and with the residual stress in the part. The controls are the material selection against the actual pressure and temperature, the removal of residual stress by a post-weld or post-forming anneal where the design allows it, and the elimination of sharp stress raisers in the design of the fitting.',
    },
    {
      title: 'Product Gas Contamination and Catalyst Degradation from Particulate Release',
      body: 'A PEM electrolyser produces high-purity hydrogen, and the purity specification is one of the tightest in the plant. The contamination routes are mechanical: particles shed from the stack components, metal ions leached from a wetted surface, and the elastomer debris from a seal that has been cycled too many times. The consequence falls on the catalyst and on the downstream purification, not on the stack itself, so the fault is reported by the hydrogen customer and the investigation happens far from the cause. The material requirements therefore extend past the stack: the wetted surfaces have to be selected for the low-metal-ion release, the sealing has to be qualified for the cycle life rather than for the first week of operation, and the components have to be cleaned and packaged so that handling does not introduce the particulate that the whole system was designed to exclude.',
    },
    {
      title: 'Crevice Corrosion and Seal Leaks at High-Pressure Manifold Joints',
      body: 'A manifold at 30 to 90 bar carries a large stored energy and a small volume of hydrogen at the joint, and the joint is where the leak develops. The mechanical causes are ordinary: an undersized gasket, a bolt preload that relaxes under thermal cycling, a thread that was not properly engaged, a face that was not machined flat. The specific character of hydrogen is that it will find the smallest of these and it will do so repeatedly, because a hydrogen leak is difficult to detect and the escaping gas carries the moisture that produces a local hydrogen embrittlement problem in the escaping stream. The engineering answer is to treat the manifold as a pressure boundary with a defined leak rate requirement rather than as a pipe connection, and to specify the joint class, the gasket material and the proof test pressure for that requirement.',
    },
  ],
  solutionSectionTitle: 'Titanium Components for Electrolysis and Hydrogen Plant',
  solutions: [
    {
      title: 'Titanium Bipolar Plates and Stack Hardware',
      body: 'The bipolar plate is the part that carries the current, distributes the reactant across the catalyst layer, removes the heat and the water and holds the stack together, and it is the part that decides the stack efficiency and its life. Titanium is used for its strength at a thin section, its corrosion resistance against the acidic product water and its low hydrogen permeability. The manufacturing route matters as much as the material: the plate is formed and coated, and the coating has to survive the forming without cracking, because a crack in the coating exposes the titanium to the acidic product water and starts a local corrosion that spreads under the coating. We supply plates and stack hardware with the forming route and the coating state stated, and with the thickness measured against the drawing rather than against the nominal.',
      points: [
        'Titanium bipolar plates with the thickness measured and recorded per plate',
        'Forming route and coating state stated on the order basis',
        'Stack tie rods, springs and hardware in titanium for the pressure duty',
        'Flattenness and surface inspection reported for the delivered plates',
      ],
      href: assertRoute('/pem-electrolyzer/', 'hydrogen energy solution'),
      hrefLabel: 'PEM Electrolyser Systems',
    },
    {
      title: 'Titanium Separators, Diaphragms and Porous Transport Components',
      body: 'The separator in an electrolyser has to let the ions through, hold the two electrodes apart against the pressure differential and survive the oxidising conditions on the anode side. Titanium is used where the operating pressure or the mechanical duty requires it and where a thin, robust porous form is needed. A formed thin-wall diaphragm carries the forming risk in full: the residual stress from the forming operation stays in the part, and in hydrogen service that residual stress is the factor that turns a working component into a fracture. A stress relief anneal after forming restores the design intent, and where the part is subsequently welded, the anneal has to follow the welding rather than precede it. The gas diffusion and pressure drop performance of the delivered part is stated so it can be checked against the stack model.',
      points: [
        'Formed titanium diaphragms and separators with the forming route documented',
        'Post-forming stress relief anneal performed and recorded where hydrogen service applies',
        'Gas diffusion and pressure drop characteristics stated for the delivered part',
        'Thickness and flatness measured against the drawing on every piece',
      ],
      href: assertRoute('/titanium-products/titanium-diaphragm/', 'hydrogen energy solution'),
      hrefLabel: 'Titanium Diaphragms',
    },
    {
      title: 'High-Pressure Titanium Manifolds, Fittings and Heat Exchangers',
      body: 'The balance of plant carries the hydrogen at pressure, and the components there are mostly small, mostly repeatedly cycled and mostly at the joints. Titanium fittings and flanges machined from bar give a joint that is monometallic, so there is no galvanic pair inside the pressure boundary, and the material resists the acid condensate that forms in a hydrogen line that has picked up moisture. The heat exchanger is the other end of the duty: a thin-wall titanium tube handles the cooling duty without a heavy wall, and the grade and the wall are selected against the pressure rather than against corrosion. Where the part is welded into the assembly, the procedure qualification and the de-embrittlement treatment travel with the part.',
      points: [
        'Titanium fittings and flanges machined from certified bar for a monometallic joint',
        'Thin-wall tube for the hydrogen heat exchanger duty, sized against the pressure',
        'Welded assemblies with procedure qualification and anneal records attached',
        'Dimensional and leak test performed and documented before release',
      ],
      href: assertRoute('/titanium-products/titanium-fittings/', 'hydrogen energy solution'),
      hrefLabel: 'Titanium Fittings & Manifolds',
    },
  ],
  matrixSectionTitle: 'Hydrogen and Energy Application-to-Specification Matrix',
  specMatrix: [
    {
      process: 'PEM electrolyser bipolar plate',
      medium: 'Acidic product water at 60-80 C, 30-90 bar, 1.5-4 A/cm2',
      risk: 'Coating cracking after forming; crevice corrosion under the coating',
      recommendation: 'Grade 2 titanium with the forming route and the coating state stated',
    },
    {
      process: 'Separator and diaphragm element',
      medium: 'Wet hydrogen and oxygen sides, 60-90 C, cyclic pressure operation',
      risk: 'Residual forming stress with hydrogen embrittlement; warping under pressure',
      recommendation: 'Grade 2 formed and stress relieved, with the anneal recorded',
    },
    {
      process: 'High-pressure hydrogen manifold and valve body',
      medium: 'Hydrogen at 30-90 bar, 15-60 C, cyclic start-stop operation',
      risk: 'Hydrogen embrittlement at threads and weld toes; joint leakage',
      recommendation: 'Grade 2 machined fittings with the joint class and proof test defined',
    },
    {
      process: 'Hydrogen product heat exchanger and dryer',
      medium: 'Wet hydrogen at 40-90 bar, cooling water on the other side',
      risk: 'Corrosion by the acid condensate at a wet-dry boundary',
      recommendation: 'Grade 2 thin-wall tube sized against the pressure with a condensate drain',
    },
    {
      process: 'Electrolyser stack end plate and tie rod assembly',
      medium: '150-300 bar clamping, 60-80 C, thermal cycling every start-stop',
      risk: 'Stress relaxation in the clamped joint; hydrogen attack at the thread',
      recommendation: 'Grade 5 titanium for the load-carrying hardware with the preload specified',
    },
    {
      process: 'Hydrogen piping and instrumentation impulse lines',
      medium: 'Hydrogen at 5-30 bar, ambient temperature, vibration from the compressor',
      risk: 'Vibration fatigue at the fitting; leakage at the threaded joint',
      recommendation: 'Grade 2 tube with the wall set against the vibration and the joint class defined',
    },
  ],
  standardsSectionTitle: 'Standards Compliance, Testing & Field Validation',
  standardsSubTitle: 'Material, Forming and Pressure Integrity Control',
  standards: [
    'ASTM B348 for titanium bar, plate and sheet used in stack and balance of plant',
    'ASTM B265 for titanium plate and sheet used in formed bipolar plates',
    'ASTM B338 for seamless and welded titanium tube used in hydrogen piping',
    'EN 10204 3.1 material certification with heat and lot traceability on every item',
    'Forming and annealing records for every formed component, with the cycle stated',
    'Thickness and flatness measurement on every formed plate and diaphragm',
    'Pressure or leak test on welded assemblies and manifolds, documented before release',
    'Surface cleanliness and particulate control on components for high-purity gas service',
  ],
  fieldSubTitle: 'Representative Field Experience',
  fieldExperience: [
    {
      duty: 'Bipolar plates and stack tie hardware for a PEM electrolyser operating at 70 bar with a 1.8 A/cm2 current density.',
      spec: 'Grade 2 titanium plates with the thickness measured per plate and the forming route recorded, supplied with Grade 5 titanium tie rods and springs and the flattening and surface inspection report attached to the delivery.',
      result: 'Delivered with the thickness and flatness records accepted on incoming inspection, and the stack running at the specified current density with no coating cracking observed at the first major service inspection.',
    },
    {
      duty: 'Hydrogen product heat exchanger for a compression stage at 45 bar, with a wet hydrogen side and a cooling water side.',
      spec: 'Grade 2 thin-wall tube sized against the pressure, with the condensate drain arrangement confirmed and the assemblies leak tested and documented before release.',
      result: 'Installed without a single leak, and the tube surfaces inspected at the first turnaround with no corrosion recorded at the wet-dry condensate boundary.',
    },
  ],
  rfqSectionTitle: 'Required Engineering Inputs for Your Hydrogen and Energy RFQ',
  rfqInputs: [
    'System duty: PEM electrolysis, hydrogen compression, storage or a balance of plant item',
    'Operating pressure, temperature and the start-stop or pressure-cycling frequency',
    'Hydrogen purity requirement and the particulate and metal ion limits in the product',
    'Component type: bipolar plate, separator, diaphragm, manifold, fitting or heat exchanger',
    'Grade and thickness requirement, and the allowable corrosion or forming allowance',
    'Forming route, coating requirement and the stress relief or anneal requirement',
    'Joint class, gasket specification and the proof test or leak test requirement',
    'Documentation scope: certificate, forming record, anneal record, test report and the schedule',
  ],
  faqSectionTitle: 'Technical FAQs for Hydrogen and Electrolysis Engineers',
  faqs: [
    {
      question: 'Is titanium safe in high-pressure hydrogen service?',
      answer: 'It is one of the better choices, but not unconditionally. Titanium resists hydrogen embrittlement markedly better than the high-strength austenitic and martensitic stainless grades, and its low permeability means it takes up hydrogen slowly. The residual risks are the concentration effects rather than the bulk behaviour: a threaded connection, a weld toe or a sharp change of section, where the local stress and the local hydrogen concentration combine. The correct approach is to select the grade against the actual pressure and temperature, to anneal the part after welding or cold forming where the design allows it, and to design the joints so that the stress concentration is removed rather than to rely on the material alone.',
    },
    {
      question: 'Why does a bipolar plate coating crack after forming, and what does it cause?',
      answer: 'The coating on a bipolar plate is a thin, hard layer applied to a metal that changes shape during forming, and the forming strain exceeds the strain the coating can take without cracking. A crack in the coating exposes the titanium to the acidic product water inside the stack, and because the product water is acidic and hot, the exposed metal starts to corrode. The corrosion then spreads under the coating, and the plate fails well before the stack reaches its design life. This is why the forming route has to be qualified against the coating and not only against the plate geometry, and why a plate that has been formed after the coating was applied needs a coating adhesion check on the delivered part.',
    },
    {
      question: 'What controls the hydrogen purity in an electrolyser system?',
      answer: 'Several things, and they are usually managed in different departments. The stack contributes particles and metal ions if the components shed them, so the wetted surfaces have to be selected for low metal ion release and the components have to be cleaned and packaged so that handling does not add particulate. The seals contribute elastomer debris as they cycle, so the seal material has to be qualified for the cycle life rather than for the first weeks. The balance of plant contributes through the piping and the filter, and the dryer is what sets the final water content. The practical conclusion is that the purity specification has to be broken down to the component level before the parts are ordered, because a system-level target does not tell the supplier what the part has to do.',
    },
    {
      question: 'Do we need a stress relief anneal on formed titanium diaphragms?',
      answer: 'In hydrogen service, yes, and the anneal has to follow the welding if the part is subsequently welded. The forming operation leaves residual stress in the part, and that stress is present in addition to the service stress rather than instead of it. In hydrogen, the combination of a residual tensile stress and the hydrogen in the environment is exactly the condition that produces a brittle fracture with no visible warning. The anneal removes the residual stress and restores the design intent for the fatigue life, and the record of it is what an auditor will ask for. Where the part cannot be annealed after forming because of its geometry, the forming route has to be designed to keep the residual stress low in the first place.',
    },
  ],
  relatedLinks: [
    {
      href: assertRoute('/pem-electrolyzer/', 'hydrogen energy related link'),
      label: 'PEM Electrolyser Systems',
      note: 'Stack and system components for hydrogen production.',
    },
    {
      href: assertRoute('/hydrogen-generators/', 'hydrogen energy related link'),
      label: 'Hydrogen Generators',
      note: 'Generator packages and the balance of plant around the stack.',
    },
    {
      href: assertRoute('/titanium-products/', 'hydrogen energy related link'),
      label: 'Titanium Products & Machined Parts',
      note: 'Plate, tube, bar, fittings and diaphragms for hydrogen duty.',
    },
    {
      href: assertRoute('/industries/', 'hydrogen energy related link'),
      label: 'All Industries',
      note: 'The hub page with the cross-industry comparison table and the shared RFQ inputs.',
    },
  ],
};
