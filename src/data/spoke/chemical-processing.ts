/**
 * Chemical & industrial processing.
 *
 * The sector splits into duties that do not share one failure mode: acid and
 * mixed-acid containment, caustic concentration, chloride-bearing wet gas, and
 * hydrogen service at temperature. Titanium is specified against the medium
 * and the code, so the failure mechanisms below are written per duty rather
 * than per industry name.
 */

import type { SpokeContent } from './types';
import { assertRoute } from './assert-route';

export const chemicalProcessing: SpokeContent = {
  h1: 'Chemical & Industrial Processing Titanium Solutions',
  seoTitle: 'Chemical Processing Titanium Solutions | Titanium Parts',
  metaDescription:
    'Titanium plate, tube, fittings and clad copper for corrosive chemical service, selected against media, concentration, temperature and governing code.',
  heroLede:
    'Chemical plant duty is decided by the medium, its concentration and its temperature, and by the code the vessel is built to. Acid service, caustic service, wet chlorine and hydrogen service each fail in a different way, and each one moves the grade, the wall thickness and the inspection scope in a different direction. We supply the plate, the tube, the fittings and the clad copper against that specific duty, so the certificate confirms a stated order basis rather than a generic titanium name.',
  riskSectionTitle: 'Corrosion Mechanisms and Material Failure Risks in Chemical Processing',
  failureModes: [
    {
      title: 'Chloride Ingress and Crevice Corrosion at Nozzles and Connections',
      body: 'A process that is nominally acid may still carry chloride, and chloride decides whether a titanium part survives. The failure concentrates where the flow stagnates: the root of a nozzle, the gap between a flange face and its gasket, the internal corner of a fabricated elbow. In those locations the crevice chemistry is more aggressive than the bulk, the local temperature is higher than the design point, and the passive film is only repaired where oxygen can reach the surface. A crevice that cannot be flushed starves the surface of oxygen and lets pitting start. This is why a titanium vessel can perform well in the open bulk and still fail at a weld nozzle within two years, and why the nozzle neck grade and the joint detail are the first questions in the review.',
    },
    {
      title: 'Hydrogen Absorption and Embrittlement During Welding and Forming',
      body: 'Titanium absorbs hydrogen when it is heated in contact with moisture, and the risk is highest in the welding heat-affected zone and in parts formed after welding. The absorbed hydrogen migrates to the alpha phase and reduces the fracture toughness without changing the appearance of the part. A cold-formed or welded component that was not vacuum annealed can therefore fail in service at a stress well below its yield strength, and the failure looks like a brittle crack with no corrosion trace at all. The controlling factors are the welding atmosphere, the interpass temperature, the cooling rate, and whether a de-embrittlement anneal at the required temperature and duration was performed and recorded.',
    },
    {
      title: 'Galvanic Coupling and Dissimilar Metal Interfaces',
      body: 'Titanium is highly noble, and that is an advantage against the medium and a disadvantage at a dissimilar joint. Bolted to carbon steel or aluminium, the titanium becomes the cathode and the partner metal is consumed instead, which is the opposite of what a plant engineer expects. The same effect drives copper contamination of a product stream when a titanium liner is perforated and the copper backing is exposed to an acid. Copper pick-up is a product-quality failure even when the equipment is still mechanically intact, and in pharmaceutical and food service it is a compliance failure. The design answer is isolation, a defined galvanic series for the assembly, and clad construction where copper must touch the medium for conductivity.',
    },
  ],
  solutionSectionTitle: 'Engineered Solutions for Chemical Processing Equipment',
  solutions: [
    {
      title: 'Titanium Plate, Sheet and Cut Parts for Containment',
      body: 'Containment duty in acid and mixed-acid service is where the plate thickness, the grade and the corrosion allowance are decided together, against the code the vessel is built to. Grade 2 covers the bulk of acid and chloride service; Grade 5 is specified where the medium contains reducing species or where the temperature sits above the range where the passivation of Grade 2 is reliable. We supply plate and sheet to ASTM B265 with cut parts nested to the fabrication layout, so the nesting is decided against the yield of the sheet rather than against a standard rectangle, and the corrosion allowance is stated separately from the nominal thickness so that it cannot be lost in the fabrication drawing.',
      points: [
        'Grade 2, Grade 5 and Grade 7 plate and sheet to ASTM B265',
        'Cut blanks and nested parts produced against the fabrication drawing',
        'Corrosion allowance stated separately from the nominal wall thickness',
        'EN 10204 3.1 certificate with heat and lot traceability',
      ],
      href: assertRoute('/titanium-products/titanium-plate/', 'chemical processing solution'),
      hrefLabel: 'Titanium Plate & Sheet',
    },
    {
      title: 'Titanium-Clad Copper for Heat Transfer and Conductivity',
      body: 'Where a process line needs both conductivity and corrosion resistance, clad copper over a copper substrate is the practical construction rather than solid titanium. The titanium face carries the medium, the copper core carries the heat, and the bond is the part that decides whether the assembly works. Explosive bonding is the standard method, and the bond integrity is verified by ultrasonic testing over the whole clad area rather than by a sample. Where the clad panel is then formed into a header or a tube sheet, the forming limit of the bond has to be respected, because a bend that opens the bond exposes the copper and reintroduces exactly the contamination the cladding was specified to prevent.',
      points: [
        'Titanium-clad copper supplied to the required titanium face thickness',
        'Bond integrity verified by ultrasonic testing across the clad area',
        'Formed headers and tube sheets machined with the bond limit respected',
        'Copper substrate grade and thickness stated on the order basis',
      ],
      href: assertRoute('/titanium-products/titanium-clad-copper/', 'chemical processing solution'),
      hrefLabel: 'Titanium-Clad Copper Bimetal',
    },
    {
      title: 'Fittings, Flanges and Fabricated Weldments in Titanium',
      body: 'A titanium vessel is only as good as its connections, and the fittings are usually the first place a mixed-material assembly fails. We supply titanium fittings to ASTM B366, flanges machined from titanium bar, and the smaller weldments fabricated and pressure-tested as parts rather than left for site welding. The review covers the root geometry, the backing strip, the shielding requirement and the de-embrittlement anneal, because those four items decide whether a fabricated titanium assembly passes its own pressure test and then survives a year in service. Fabrication in house means the procedure qualification and the welder qualification travel with the part as records.',
      points: [
        'Fittings to ASTM B366 and flanges machined from certified titanium bar',
        'In-house welding with procedure and welder qualification records',
        'Root design, backing and shielding confirmed before production',
        'De-embrittlement anneal performed and recorded where required',
      ],
      href: assertRoute('/titanium-products/titanium-fittings/', 'chemical processing solution'),
      hrefLabel: 'Titanium Fittings & Flanges',
    },
  ],
  matrixSectionTitle: 'Chemical Process-to-Specification Matrix',
  specMatrix: [
    {
      process: 'Hydrochloric acid storage and transfer',
      medium: 'HCl 10-35% at 20-80 C, chloride above 5000 mg/L',
      risk: 'Crevice corrosion at nozzle roots; hydrogen uptake in welded seams',
      recommendation: 'Grade 2 plate to ASTM B265, Grade 5 for acid above 30% at 80 C',
    },
    {
      process: 'Sulfuric acid dilution and cooling',
      medium: 'H2SO4 20-70% at 40-100 C, oxidising and reducing at concentration',
      risk: 'General wall thinning at high concentration; corrosion of weld heat-affected zone',
      recommendation: 'Grade 2 for dilute acid, Grade 5 or clad copper above 60% concentration',
    },
    {
      process: 'Caustic soda concentration and evaporation',
      medium: 'NaOH 30-50% at 90-120 C, strong alkali',
      risk: 'Caustic stress corrosion cracking at cold-formed and welded surfaces',
      recommendation: 'Grade 2 with a full de-embrittlement anneal and hot-formed radii',
    },
    {
      process: 'Wet chlorine and hydrochloric acid gas handling',
      medium: 'Dry Cl2 and HCl gas, condensing to wet acid on cooling',
      risk: 'Pitting in the condensate line; crevice attack at flange faces',
      recommendation: 'Grade 2 with Grade 7 at flanged and threaded connections',
    },
    {
      process: 'Mixed acid piping with heat transfer duty',
      medium: 'HNO3 and H2SO4 mix at 40-90 C, hot spots at the exchanger wall',
      risk: 'Corrosion at the hot wall; copper contamination if the bond is breached',
      recommendation: 'Titanium-clad copper with a verified bond and controlled face thickness',
    },
    {
      process: 'Hydrogen service at elevated temperature',
      medium: 'High-purity hydrogen at 100-300 C and 10-30 bar',
      risk: 'Hydrogen embrittlement of a cold-worked surface; stress corrosion of welds',
      recommendation: 'Grade 2 with a mandatory de-embrittlement anneal and stress-relief sequence',
    },
  ],
  standardsSectionTitle: 'Standards Compliance, Testing & Field Validation',
  standardsSubTitle: 'Material, Weld and Dimensional Quality Control',
  standards: [
    'ASTM B265 for titanium plate, sheet and strip used in vessel and liner fabrication',
    'ASTM B338 for seamless and welded titanium tube used in process piping',
    'ASTM B366 for welded and seamless titanium fittings',
    'ASTM B348 for titanium bar and forging stock used for flanges and machined parts',
    'EN 10204 3.1 material certification with heat and lot traceability on every item',
    'ASME Section IX welding procedure and welder qualification for titanium joints',
    'Positive material identification wherever more than one grade appears in one assembly',
    'Dimensional inspection against the drawing and the stated inspection scope',
  ],
  fieldSubTitle: 'Representative Field Experience',
  fieldExperience: [
    {
      duty: 'Hydrochloric acid absorption column section at a chlor-alkali plant, handling 32% HCl at 60 C.',
      spec: 'Grade 5 titanium plate to ASTM B265 with a stated corrosion allowance, Grade 2 nozzle necks and Grade 7 flange fasteners, with cut parts nested against the fabrication layout.',
      result: 'Continuous operation over four years with the internal surface inspected at two shutdowns, showing no crevice attack at the nozzle roots and no measurable wall loss beyond the stated allowance.',
    },
    {
      duty: 'Mixed acid cooler in a fertiliser plant, handling a nitric and sulphuric acid mix at 70 C with a conductive heat transfer path.',
      spec: 'Titanium-clad copper panels with a 2 mm titanium face on a copper substrate, bond integrity verified by ultrasonic testing across the full clad area, with formed headers machined to the bond forming limit.',
      result: 'Delivered and installed with no bond rejection, and no copper contamination detected in the product stream in the first year of production.',
    },
  ],
  rfqSectionTitle: 'Required Engineering Inputs for Your Chemical Processing RFQ',
  rfqInputs: [
    'Media composition, concentration and the impurity load, including chloride content',
    'Operating temperature, pressure and whether the duty is continuous or batch',
    'Governing design code and the vessel class the component belongs to',
    'Required grade, the corrosion allowance basis and the design life',
    'Part geometry: nominal dimensions, wall thickness and the weld joint design',
    'Tolerance, surface finish and the inspection scope required on delivery',
    'Documentation scope: material certificate, PMI, weld records and any third-party witness',
    'Delivery destination, packing, marking requirement and the required schedule',
  ],
  faqSectionTitle: 'Technical FAQs for Chemical Process Engineers',
  faqs: [
    {
      question: 'Is Grade 2 titanium sufficient for hydrochloric acid service?',
      answer: 'It depends on the concentration and the temperature together, not on the acid name alone. Grade 2 resists hydrochloric acid well in the dilute and mid range, but the resistance falls away as the concentration rises, and the fall-off is sharp. Above roughly 30% concentration at elevated temperature, Grade 5 is normally the correct selection, and the grade has to be confirmed against the actual medium rather than against a nominal figure. Chloride carried into the acid matters as much as the acid itself, because the crevice behaviour of the alloy is decided by the chloride concentration in the stagnant zone.',
    },
    {
      question: 'Why does a titanium vessel fail at the nozzle when the plate performs well?',
      answer: 'Because the nozzle root is a crevice, and a crevice is a different environment from the vessel. The bulk chemistry is refreshed by flow; the gap under the nozzle is not, so the temperature is higher, the concentration of the aggressive species is higher and the oxygen that keeps the passive film intact is largely absent. That combination is what allows pitting to start. The remedies are geometric rather than metallurgical: a larger nozzle radius, a fully drained detail, or a higher grade at the connection. Changing the plate grade alone rarely fixes a crevice problem.',
    },
    {
      question: 'Is a de-embrittlement anneal always required on titanium weldments?',
      answer: 'Not always, but it is required far more often than it is performed. The anneal drives out the hydrogen picked up during welding and forming, and it is the only treatment that restores the fracture toughness that the welding operation removed. It is mandatory where the part will see hydrogen service, where it is cold formed after welding, or where the code or the client specification requires it. The point that matters commercially is the record: an anneal that was not performed and documented cannot be claimed later, and the certificate for the part has to carry the treatment evidence.',
    },
    {
      question: 'How is titanium-clad copper qualified for a corrosive duty?',
      answer: 'On the thickness of the titanium face, the integrity of the bond and the forming history. The face thickness decides the corrosion allowance, and it is specified against the medium rather than against the sheet thickness that is easy to buy. The bond is verified by ultrasonic testing over the whole clad area, because a partial bond is the failure mode that matters and it is not visible on the surface. After forming, the same bond has to be re-checked where the forming limit was approached, since a bend that opens the bond exposes the copper and puts contamination back into the product.',
    },
  ],
  relatedLinks: [
    {
      href: assertRoute('/titanium-products/', 'chemical processing related link'),
      label: 'Titanium Products & Machined Parts',
      note: 'Plate, tube, bar, fittings and flanges for the balance of the plant.',
    },
    {
      href: assertRoute('/titanium-products/titanium-tubing/', 'chemical processing related link'),
      label: 'Titanium Tubing',
      note: 'Seamless and welded tube to ASTM B338 for process piping duties.',
    },
    {
      href: assertRoute('/titanium-service/welding-assembly/', 'chemical processing related link'),
      label: 'Welding & Assembly Service',
      note: 'Procedure qualification, welder qualification and de-embrittlement treatment.',
    },
    {
      href: assertRoute('/industries/', 'chemical processing related link'),
      label: 'All Industries',
      note: 'The hub page with the cross-industry comparison table and the shared RFQ inputs.',
    },
  ],
};
