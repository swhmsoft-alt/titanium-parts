/**
 * Marine & offshore.
 *
 * Seawater duty is not one duty. The submerged hull, the splash zone, the
 * topside piping and the seabed pipeline each fail differently, and the
 * cathodic protection strategy interacts with the material choice rather
 * than sitting beside it.
 */

import type { SpokeContent } from './types';
import { assertRoute } from './assert-route';

export const marineOffshore: SpokeContent = {
  h1: 'Marine & Offshore Titanium Materials and Anodes',
  seoTitle: 'Marine & Offshore Titanium Solutions | Titanium Parts',
  metaDescription:
    'Titanium fasteners, fittings, mesh and cathodic protection anodes for seawater, splash zone and offshore structural duty, selected against immersion and galvanic conditions.',
  heroLede:
    'Marine service combines continuous chloride exposure, hydrostatic load, vibration and a cathodic protection scheme that is itself an electrochemical process. Titanium handles the seawater better than any structural alloy, but the joint between the titanium and the steel around it decides whether the assembly lasts, and the anode bed has to be designed from the protection criterion rather than from a catalogue dimension. We supply the fasteners, the fittings, the heat transfer surfaces and the anodes against that combined picture.',
  riskSectionTitle: 'Seawater Failure Mechanisms and Material Selection Risks Offshore',
  failureModes: [
    {
      title: 'Galvanic Coupling Corrosion at Dissimilar Joints in Seawater',
      body: 'Titanium has an extremely noble potential in seawater, and that is exactly why it corrodes fast when it is bolted to carbon steel, aluminium or a copper alloy. The titanium becomes the cathode and the partner metal becomes the anode, so the corrosion is concentrated on the less noble material at the joint, in a narrow ring around the bolt hole where the crevice keeps the electrolyte stagnant and the galvanic current concentrates. The failure is not in the titanium; it is the disappearance of the steel washer or the aluminium bracket, and it is found during an inspection that was looking for corrosion on the titanium. Isolation, a defined galvanic series and a controlled isolation resistance are the design answers, and a titanium fastener is frequently the cheapest of them.',
    },
    {
      title: 'Crevice Corrosion and Biofouling in Seawater Heat Transfer',
      body: 'A seawater cooler or a desalination heat exchanger sees two mechanisms that do not occur in fresh water. The first is crevice corrosion, where the seawater trapped under a gasket, in a tube-to-tubesheet joint or behind a fouling blanket has an oxygen concentration low enough to break down the passive film locally while the surrounding surface is still protected. The second is biological. Marine growth reduces the heat transfer coefficient, the flow area and the differential pressure, and the organic film it leaves behind is exactly the kind of deposit that creates a stagnant zone under the anode or behind a seal. A titanium surface resists the chemical attack of the deposit, but it does not stop the deposit from forming, so the fouling strategy and the material choice are separate decisions that have to be taken together.',
    },
    {
      title: 'Stress Corrosion Cracking of Titanium in Warm Seawater',
      body: 'Titanium is immune to chloride stress corrosion cracking at ordinary seawater temperatures, but this exemption ends at roughly 60 to 70 degrees. Above that, and above about 300 MPa of sustained tensile stress, an alpha alloy can crack in seawater without any pitting to announce it. The mechanism matters because the crack is transgranular and clean, with no corrosion product, so it looks like a fatigue or a manufacturing defect rather than a corrosion failure. The relevant variables are the sustained load, the temperature at the surface, the hydrogen level in the material and the fact that a surface defect concentrates the stress. This is why the selection rule for a warm seawater riser is not simply that titanium is immune to chloride, and why residual stress from welding and cold forming has to be relieved rather than left in the part.',
    },
  ],
  solutionSectionTitle: 'Engineered Solutions for Marine and Offshore Systems',
  solutions: [
    {
      title: 'Cathodic Protection Anodes and Reference Electrodes',
      body: 'In offshore and marine structures the cathodic protection design is usually the item that decides the service life of the steel, and the titanium component of that system is the anode. An impressed current system uses a platinised titanium or a mixed metal oxide coated titanium anode to deliver the current, and the choice is between geometry rather than between materials: a linear or ribbon anode for a pipeline, a tubular or rod anode for a structure that has to be surrounded rather than buried, and a disc anode for a limited space. The coating loading, the substrate grade and the connection detail all matter, because an anode that fails electrically removes the protection from the structure it serves. Reference electrodes close the loop, and they are the part of the system that is usually specified least carefully.',
      points: [
        'MMO coated titanium anodes in linear, ribbon, tubular, rod and disc geometry',
        'Platinised titanium anodes where a high driving voltage is needed',
        'Substrate grade, coating loading and connection detail confirmed before production',
        'Reference electrodes for potential monitoring in the same supply scope',
      ],
      href: assertRoute('/cathodic-protection/', 'marine offshore solution'),
      hrefLabel: 'Cathodic Protection & Monitoring',
    },
    {
      title: 'Titanium Fasteners, Fittings and Structural Connections',
      body: 'The fastener is where a marine assembly is most often lost, because it is the only part that bridges two different metals and it is usually the part that is left out of the material review. Titanium fasteners solve the galvanic problem at the joint rather than at the surface, and they remove the need for a separate isolation kit. They also carry a penalty: titanium fasteners are softer than steel, so the thread and the head need the prevailing torque and the correct washer material, and a galling pair has to be avoided in the joint itself. Fittings and flanges made to the same standard keep the assembly consistent, because a titanium bolt into a carbon steel flange leaves the original galvanic pair in place no matter what the fastener is made of.',
      points: [
        'Titanium fasteners supplied to the specified grade, diameter and length',
        'Fittings and flanges in the same material family as the fastener set',
        'Washer and anti-galling detail confirmed against the joint design',
        'Galvanic isolation reviewed as a complete assembly, not a single part',
      ],
      href: assertRoute('/titanium-products/titanium-bolts/', 'marine offshore solution'),
      hrefLabel: 'Titanium Fasteners & Bolts',
    },
    {
      title: 'Titanium Mesh, Tubing and Heat Transfer Surfaces',
      body: 'Seawater heat transfer is the application where titanium earns its place outright, because the tube wall can be thin enough for a real heat exchanger and still survive the chloride. The tube grade is normally Grade 2, chosen for the strength it gives at the design pressure rather than for any corrosion allowance, since the corrosion rate in flowing seawater is negligible. The mesh and expanded products cover the intake screens, the splash-zone guards and the electrode supports that sit in the same environment. The one thing that has to be reviewed separately is the fouling allowance, because titanium resists the chemistry of the deposit but not the deposit itself, and a fouling allowance in the design is cheaper than a fouling-related shutdown.',
      points: [
        'Grade 2 seamless and welded tube to ASTM B338 for seawater heat exchangers',
        'Wall thickness set by the design pressure and the allowable stress, not by corrosion',
        'Mesh and expanded products for intake screens and splash-zone protection',
        'Fouling allowance stated separately from the corrosion allowance',
      ],
      href: assertRoute('/titanium-products/titanium-tubing/', 'marine offshore solution'),
      hrefLabel: 'Titanium Tubing for Seawater Systems',
    },
  ],
  matrixSectionTitle: 'Marine and Offshore Duty-to-Specification Matrix',
  specMatrix: [
    {
      process: 'Submerged hull and splash-zone attachment',
      medium: 'Seawater at the surface, 0-40 C, wet-dry cycling, salt spray',
      risk: 'Galvanic attack on the partner metal at the joint; stress corrosion above 60 C',
      recommendation: 'Grade 2 fasteners and fittings with isolation, Grade 5 where sustained load and temperature combine',
    },
    {
      process: 'Seawater cooling and desalination heat exchange',
      medium: 'Raw seawater 5-45 C, chlorides above 20000 mg/L, biofouling',
      risk: 'Crevice corrosion at tubesheet joints; fouling-induced under-deposit corrosion',
      recommendation: 'Grade 2 tube to ASTM B338 with a stated fouling allowance and polymeric fouling protection',
    },
    {
      process: 'Cathodic protection of submerged steel',
      medium: 'Seawater, resistive, potential controlled at -0.80 V Ag/AgCl',
      risk: 'Anode coating passivation at low driving voltage; loss of electrical continuity',
      recommendation: 'MMO coated titanium anodes with XRF loading verification and a sealed connection',
    },
    {
      process: 'Ballast and bilge water systems',
      medium: 'Variable salinity, sediment and oil contamination, intermittent flow',
      risk: 'Deposit accumulation in low-velocity lines; pitting at dead legs',
      recommendation: 'Grade 2 tube with a full-drain layout and no horizontal dead legs',
    },
    {
      process: 'Topside process piping and valve bodies',
      medium: 'Seawater and produced water, 20-90 C, chlorinated injection',
      risk: 'Crevice corrosion at valve body to bonnet joints; erosion at high-velocity legs',
      recommendation: 'Grade 2 fittings with a machined seating surface and controlled velocity at the outlet',
    },
    {
      process: 'Subsea pipeline and riser tie-in',
      medium: 'Seawater at 4 C and hydrostatic pressure to 300 bar, seabed sediment',
      risk: 'Hydrogen embrittlement at welds; differential metal cathodic hydrogen evolution',
      recommendation: 'Grade 2 with a controlled potential window and weld hydrogen content verified',
    },
  ],
  standardsSectionTitle: 'Standards Compliance, Testing & Field Validation',
  standardsSubTitle: 'Material, Coating and Installation Quality Control',
  standards: [
    'ASTM B348 for titanium bar and forging stock used in fasteners and machined parts',
    'ASTM F468 for titanium and titanium alloy bolts, screws and studs',
    'ASTM B338 for seamless and welded titanium tube in seawater heat exchangers',
    'ASTM B265 for titanium plate and sheet used in splash-zone and structural parts',
    'XRF surface elemental composition on every coated anode, reported as precious metal loading in g/m2',
    'EN 10204 3.1 material certification with heat and lot traceability on every item',
    'Continuity and resistance check on every anode connection before shipment',
    'Dimensional inspection against the drawing and the stated inspection scope',
  ],
  fieldSubTitle: 'Representative Field Experience',
  fieldExperience: [
    {
      duty: 'Cathodic protection anode string for a subsea production pipeline tie-in in the North Sea, seabed sediment with strong tidal current.',
      spec: 'MMO coated titanium ribbon anodes on a Grade 2 substrate at a loading specified against the design current, supplied with sealed connections and a full XRF loading report per batch.',
      result: 'Delivered with 100% XRF loading verification and continuity testing on every element, and the pipeline held at its protection potential through the first deployment with no anode replacement required.',
    },
    {
      duty: 'Seawater cooling tube bundle replacement on an offshore platform, 35 C seawater with continuous biofouling.',
      spec: 'Grade 2 seamless tube to ASTM B338 with a stated fouling allowance, cut to length and drift-free expanded into the tubesheet with the rolling procedure recorded.',
      result: 'Installed without tube-to-tubesheet leakage, and the bundle inspected at the first major shutdown with no under-deposit pitting recorded at the seal faces.',
    },
  ],
  rfqSectionTitle: 'Required Engineering Inputs for Your Marine and Offshore RFQ',
  rfqInputs: [
    'Service environment: submerged, splash zone, tidal or topside, and the exposure duration',
    'Seawater temperature range, salinity and chlorides at the design point',
    'Design pressure, hydrostatic load and vibration duty for the part',
    'Galvanic partners in the assembly and the isolation strategy proposed',
    'For anodes: protection criterion, design current, resistivity and the intended life',
    'Geometry and dimensions of the part, including tube wall and connection detail',
    'Required grade, coating loading metric with units and measurement method',
    'Documentation scope: material certificate, PMI, coating report and any third-party witness',
  ],
  faqSectionTitle: 'Technical FAQs for Marine and Offshore Engineers',
  faqs: [
    {
      question: 'Does titanium need cathodic protection in seawater?',
      answer: 'No, and this is the point that most often causes confusion. Titanium is more noble than carbon steel, so in a galvanic pair the steel corrodes and the titanium does not. Adding an impressed current system to protect the steel in such an assembly raises the potential of the whole structure, and a titanium component in that structure can then absorb hydrogen and suffer hydrogen embrittlement. So the protection strategy has to be designed around the titanium, with the potential window controlled rather than simply maximised. Where anodes are used on a structure that also contains titanium, the anode geometry, the coating and the potential control all have to be reviewed together.',
    },
    {
      question: 'Is titanium really immune to stress corrosion cracking in seawater?',
      answer: 'Only up to a point. Titanium is effectively immune to chloride stress corrosion cracking at normal seawater temperatures, roughly below 60 to 70 degrees, because it does not pit and therefore does not generate the crack-initiating defect. Above that temperature, and where sustained tensile stress is high, cracking becomes possible and the crack is transgranular and clean, with no pitting to point at the cause. The practical rule is that a warm seawater riser under sustained load is not automatically safe, and that residual stress from welding and cold forming should be relieved so the part is not carrying an unnecessary tensile stress alongside the service load.',
    },
    {
      question: 'How do you prevent galvanic corrosion when titanium meets steel in an offshore assembly?',
      answer: 'Three ways, and they are usually combined. The first is to remove the dissimilar pair, by using titanium for the fastener, the washer and the flange so that the joint is monometallic. The second is to isolate the two metals electrically, with an insulating gasket and a controlled isolation resistance, so the galvanic current cannot flow. The third is to control the electrolyte, which in an offshore structure is usually impossible. The review that matters is at the assembly level, because a titanium bolt into a carbon steel flange leaves the original galvanic pair in place regardless of the fastener material.',
    },
    {
      question: 'What drives the choice between a platinised and an MMO coated anode offshore?',
      answer: 'The driving voltage available and the shape of the structure. A platinised titanium anode has a very low and very stable polarisation, so it delivers a high current at a low cell voltage, which makes it the right choice for a deep-water or long subsea pipeline where the cable resistance is high and every volt matters. MMO anodes have a higher and less stable potential, which suits a structure where a lower driving voltage is acceptable and where the geometric form matters more, for example a tubular anode surrounding a jacket leg. Both are titanium substrates, and both fail electrically rather than chemically in service, so the connection detail and the continuity check carry as much weight as the coating.',
    },
  ],
  relatedLinks: [
    {
      href: assertRoute('/titanium-products/', 'marine offshore related link'),
      label: 'Titanium Products & Machined Parts',
      note: 'Plate, tube, bar, fasteners and fittings for seawater structures.',
    },
    {
      href: assertRoute('/titanium-anode/mmo-anode/', 'marine offshore related link'),
      label: 'MMO Anodes',
      note: 'Coating systems and geometry families for impressed current protection.',
    },
    {
      href: assertRoute('/cathodic-protection/reference-electrodes/', 'marine offshore related link'),
      label: 'Reference Electrodes',
      note: 'Potential monitoring for the cathodic protection system.',
    },
    {
      href: assertRoute('/industries/', 'marine offshore related link'),
      label: 'All Industries',
      note: 'The hub page with the cross-industry comparison table and the shared RFQ inputs.',
    },
  ],
};
