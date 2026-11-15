/**
 * Mining, electrowinning & metals.
 *
 * An electrowinning cell is a chemical reactor with electrodes in it. The
 * electrolyte decides the anode, the impurity load decides the anode
 * coating, and the current distribution decides the deposit. The failure
 * modes below are written around those three.
 */

import type { SpokeContent } from './types';
import { assertRoute } from './assert-route';

export const electrowinning: SpokeContent = {
  h1: 'Mining, Electrowinning & Metals Recovery Titanium Equipment',
  seoTitle: 'Electrowinning Titanium Anodes & Equipment | Titanium Parts',
  metaDescription:
    'MMO anodes, titanium cathode baskets and clad copper anodes for hydrometallurgical metal recovery, selected against electrolyte, impurity load and current density.',
  heroLede:
    'Electrowinning deposits metal from solution, so the cell behaves like a chemical reactor with two electrodes in it. The electrolyte composition decides the anode coating, the impurity species that concentrate in the anolyte decide the coating life, and the current distribution decides whether the deposit is uniform or spongy. We supply the anodes, the cathode baskets and the copper-clad anodes for these duties, with the coating and the geometry calculated against the actual cell rather than taken from a catalogue.',
  riskSectionTitle: 'Electrolyte and Current Distribution Failure Risks in Metal Recovery',
  failureModes: [
    {
      title: 'Anode Coating Degradation from Impurity Concentration in the Anolyte',
      body: 'In an electrowinning cell the anolyte is not the feed electrolyte. As the anode operates, the species that are not deposited concentrate in the anolyte compartment, and the impurity load rises steadily until the anode coating is attacked. Iron is the common case: iron in the electrolyte reaches the anode surface and dissolves, and the dissolved iron competes with the deposited metal for the current, which lowers the current efficiency and puts iron into the product metal. The damage to the coating is the more immediate problem, because a coating that thins and passivates stops the cell from running at the design current density and the plant loses production while the anodes are replaced. The controls are the anolyte composition, the diaphragm and the flow arrangement that keeps the impurity level in check, and the coating system chosen for that impurity rather than for the clean feed.',
    },
    {
      title: 'Spongy, Cracked and Poorly Adherent Deposits from Current Distribution',
      body: 'The quality of the deposited metal is decided by the current distribution and by the local current density, not by the purity of the feed alone. A deposit that forms at too high a current density grows fast and becomes spongy and fragile, with a high hydrogen content and a poor structure that has to be remelted. A deposit that forms on a starved cathode is dense but slow. The causes are geometric: anodes that are too close to the cathode deliver a high local density, and a cathode that is not fully wetted develops a gas bubble that insulates the surface and forces the current into a smaller area, which locally raises the density and produces exactly the spongy deposit that is already forming. The remedy is the anode-to-cathode spacing, the anode surface area, the gas removal from the cathode and the electrolyte flow arrangement.',
    },
    {
      title: 'Sludge Accumulation and Short Circuits Between Anode and Cathode',
      body: 'Electrowinning produces sludge: the fine solids, the oxides and the precipitated impurities that settle out of the electrolyte and accumulate in the bottom of the cell. The sludge is a problem in three ways at once. It reduces the effective cell volume and the electrolyte circulation, it lifts the electrolyte level and lets it bridge the gap between a low cathode position and the anode, and it coats the cathode surface so that the deposit forms on the sludge rather than on the metal. That last effect is the expensive one, because a deposit that has grown over sludge breaks away in the handling and is lost with the sludge. The cell design has to provide for sludge removal, and the electrode geometry has to keep a clearance that the sludge cannot bridge, and where the sludge is not removed the sludge will find a way to short the cell.',
    },
  ],
  solutionSectionTitle: 'Anodes and Cathodes for Hydrometallurgical Recovery',
  solutions: [
    {
      title: 'MMO Anodes for Electrowinning Cells',
      body: 'The anode in an electrowinning cell has to carry a high current density in a chemically aggressive electrolyte while lasting a defined campaign, and the coating system is the decision that sets both. The coating families are selected against the electrolyte and the impurity load rather than against the current density alone, because a coating that survives a clean electrolyte can be consumed quickly in an anolyte that has accumulated iron. The substrate is Grade 2 titanium and the geometry is plate, mesh or a custom shape sized against the cathode, with the connection designed for the current the cell draws and for the electrolyte that will reach it. The coating loading is verified on the delivered surface so the campaign life can be calculated rather than estimated.',
      points: [
        'MMO coating families selected against the electrolyte and the impurity load',
        'Coating loading specified in g/m2 and verified by XRF on the delivered surface',
        'Anode geometry and surface area sized against the cathode and the current density',
        'Connection and busbar design for the cell current and the electrolyte exposure',
      ],
      href: assertRoute('/titanium-anode/mmo-anode/', 'electrowinning solution'),
      hrefLabel: 'MMO Anodes',
    },
    {
      title: 'Titanium Cathode Baskets and Seed Blanks',
      body: 'The cathode side of an electrowinning cell is where the metal actually forms, and the geometry there determines the deposit quality and the ease of harvesting. A titanium basket for a cathode plate gives a rigid, well-defined cathode with a defined edge, which produces a deposit with a defined thickness and a clean edge that can be lifted and trimmed rather than scraped. A basket also allows the cathode area to be increased without changing the cell dimensions, which raises the production from a given rectifier. The material has to resist the electrolyte and the sludge, and the contact with the busbar has to carry the current without a resistive joint, because a poor contact shows up as a non-uniform deposit and it is usually blamed on the electrolyte.',
      points: [
        'Titanium cathode baskets and plates sized against the cell and the cathode area',
        'Rigid cathode construction to hold the deposit during harvesting',
        'Contact and busbar geometry designed against the cell current',
        'Material grade selected against the electrolyte and the sludge conditions',
      ],
      href: assertRoute('/titanium-products/titanium-baskets/', 'electrowinning solution'),
      hrefLabel: 'Titanium Baskets & Cathodes',
    },
    {
      title: 'Titanium-Clad Copper Anodes for Copper and Copper Alloy Recovery',
      body: 'In copper electrowinning the anode is a soluble copper plate, and the requirement is different from the coated case. The copper has to dissolve evenly, the copper ion concentration in the electrolyte has to be maintained, and the surface has to resist the impurities that concentrate in the anolyte. A copper anode clad with a thin titanium face gives the mechanical integrity and the dimensional stability of a titanium substrate while keeping the dissolving surface copper, and the titanium face thickness has to be specified so that the copper layer is consumed evenly over the campaign rather than being penetrated. Where the anolyte is aggressive, the clad is backed by a copper substrate chosen for its own corrosion behaviour rather than for structural strength.',
      points: [
        'Titanium-clad copper anodes with the face thickness specified against the campaign',
        'Copper substrate grade and thickness stated on the order basis',
        'Anode dimensions and the active area sized against the cathode and the electrolyte volume',
        'Bond integrity verified across the clad area before delivery',
      ],
      href: assertRoute('/titanium-products/titanium-clad-copper/', 'electrowinning solution'),
      hrefLabel: 'Titanium-Clad Copper Anodes',
    },
  ],
  matrixSectionTitle: 'Electrowinning Process-to-Specification Matrix',
  specMatrix: [
    {
      process: 'Copper electrowinning in a sulphate leach circuit',
      medium: 'CuSO4-H2SO4 electrolyte at 40-60 C, 800-1500 mg/L free acid, iron in the anolyte',
      risk: 'Anode passivation from iron concentration; spongy deposit at high local density',
      recommendation: 'Titanium-clad copper anodes with the face thickness set against the campaign',
    },
    {
      process: 'Zinc electrowinning from a sulphate or chloride leach',
      medium: 'ZnSO4 or ZnCl2 electrolyte, 500-1000 A/m2 current density, pH 4-5',
      risk: 'Hydrogen evolution raising the local density; spongy deposit and high H content',
      recommendation: 'MMO anodes sized to the cathode with a wide anode-to-cathode spacing',
    },
    {
      process: 'Nickel electrowinning from a sulphate electrolyte',
      medium: 'NiSO4 electrolyte at 50-60 C, low metal concentration in the spent electrolyte',
      risk: 'Low current efficiency; deposit impurity pickup from the anolyte',
      recommendation: 'MMO coated anodes with a coating system selected for the iron loading in the anolyte',
    },
    {
      process: 'Gold electrowinning on to a sacrificial steel cathode',
      medium: 'Cyanide or cyanide-free electrolyte at ambient temperature, low current density',
      risk: 'Cathode hydrogen evolution; deposit embrittlement from residual cyanide',
      recommendation: 'Titanium cathode baskets and starter blanks in the electrolyte-resistant grade',
    },
    {
      process: 'Cobalt and manganese electrowinning from a purified leach',
      medium: 'Sulphate electrolyte at 60-75 C, high current density, aggressive anolyte',
      risk: 'Coating consumption at the anode; sludge bridging at the cell floor',
      recommendation: 'High-loading MMO anodes with a sludge clearance that the cell design can maintain',
    },
    {
      process: 'Copper and precious metal recovery from leach residue',
      medium: 'Aqueous leach with high chloride and iron, variable current density',
      risk: 'Coating attack from chloride and iron; non-uniform current on irregular cathodes',
      recommendation: 'MMO anodes with the coating matched to the impurity profile and a segmented cathode layout',
    },
  ],
  standardsSectionTitle: 'Standards Compliance, Testing & Field Validation',
  standardsSubTitle: 'Substrate, Coating and Dimensional Quality Control',
  standards: [
    'ASTM B348 for the titanium bar and plate used as the anode substrate',
    'ASTM B265 for titanium plate used in clad anodes and cathode construction',
    'EN 10204 3.1 material certification with heat and lot traceability on every substrate',
    'XRF surface elemental composition on every coated anode, reported as precious metal loading in g/m2',
    'Bond integrity verification on clad anodes across the full active area',
    'Contact and busbar continuity check on every anode assembly before shipment',
    'Dimensional inspection against the drawing and the cell layout',
    'Certificate issued stating the coating system, the loading and the substrate grade',
  ],
  fieldSubTitle: 'Representative Field Experience',
  fieldExperience: [
    {
      duty: 'Copper electrowinning cell anodes at a hydrometallurgical plant, with an iron-rich anolyte and a 10 month campaign target.',
      spec: 'Titanium-clad copper anodes with the titanium face thickness specified against the campaign and the copper substrate grade matched to the anolyte, with bond integrity verified across the full active area and the connections designed for the cell current.',
      result: 'Delivered with full bond verification and connection continuity records, and the anodes consumed evenly across the active surface with no premature penetration of the clad at the edges.',
    },
    {
      duty: 'Zinc electrowinning cell rebuild with a higher current density target and a spongy deposit problem.',
      spec: 'MMO coated titanium anodes sized against the cathode with the coating system selected for the anolyte impurity loading, combined with titanium cathode baskets on wide-spaced supports to remove the gas bubbles from the deposit surface.',
      result: 'Current efficiency improved after the rebuild and the deposit density visibly increased, with the change traced to the anode spacing and the cathode gas removal rather than to a change of electrolyte.',
    },
  ],
  rfqSectionTitle: 'Required Engineering Inputs for Your Electrowinning RFQ',
  rfqInputs: [
    'Target metal, feed electrolyte composition and the operating temperature',
    'Impurity species and their concentration in the anolyte, plus the diaphragm and flow arrangement',
    'Operating current density and the cell voltage basis, with the target current efficiency',
    'Cell dimensions, cathode area and the anode-to-cathode spacing proposed',
    'Anode geometry required: plate, mesh, clad copper or a custom form',
    'Campaign length or the expected service life before replacement',
    'Sludge volume, sludge removal method and the required clearance from the electrodes',
    'Documentation scope: certificate, loading report, bond report and the schedule',
  ],
  faqSectionTitle: 'Technical FAQs for Electrowinning and Hydrometallurgy Engineers',
  faqs: [
    {
      question: 'Why does our electrowinning deposit come out spongy and hard to handle?',
      answer: 'Almost always a local current density problem. A deposit that grows too fast has a loose, dendritic structure with high hydrogen content, and it has to be remelted rather than shipped. The local density rises where the anode is close to the cathode, and it also rises where a gas bubble sits on the cathode surface, because the bubble insulates the area under it and forces the current into a smaller part of the surface, which makes the deposit under the bubble worse. The correction is to widen the anode-to-cathode spacing, to increase the anode area, and to remove the gas from the cathode by managing the electrolyte flow and the cathode orientation. Raising the current density in the rectifier makes it worse rather than better.',
    },
    {
      question: 'How does iron in the electrolyte shorten the anode life?',
      answer: 'Because the iron concentrates in the anolyte and dissolves at the anode surface, and it attacks the coating that carries the current. As the coating thins, the current density on the remaining active surface rises, the coating passivates, and the cell output falls even though the anode is still physically intact. The same iron competes with the target metal for the current, which reduces the current efficiency and puts iron into the product. The remedies are the ones that control the anolyte rather than the ones that replace the anode: a diaphragm that limits the transport of iron, a flow arrangement that keeps the concentration down, and a coating system chosen for the iron level that the cell will actually see.',
    },
    {
      question: 'When should we use a titanium-clad copper anode instead of an MMO anode?',
      answer: 'When the anode is meant to dissolve as the source of the metal ion, which is the case in copper electrowinning. The MMO and platinised coatings are inert by design, so in a cell that needs a soluble copper anode the coating is the wrong answer and a copper-clad construction is used instead. The titanium face on the clad gives the mechanical integrity, the dimensional stability and a surface that resists the impurity chemistry, while the copper underneath supplies the metal. The face thickness has to be specified against the campaign, because the copper has to be consumed evenly and a face that is penetrated early localises the dissolution and ruins the current distribution.',
    },
    {
      question: 'Does sludge actually cause shorts in an electrowinning cell?',
      answer: 'Yes, and it is one of the more common causes of an unplanned shutdown. As the sludge accumulates it reduces the free electrolyte volume, it raises the level of the electrolyte bed and it can bridge the gap between a low-positioned cathode and the anode frame, which produces a direct low-resistance path and a short. The sludge also coats the cathode so that the deposit grows onto the sludge instead of onto the metal, and that deposit is lost when the sludge is removed. The prevention is mechanical: a cell design with a sludge draw-off, an electrode clearance that the sludge cannot bridge, and a harvest cycle that does not let the bed build up over several campaigns.',
    },
  ],
  relatedLinks: [
    {
      href: assertRoute('/titanium-anode/', 'electrowinning related link'),
      label: 'Electrochemical Anodes',
      note: 'The full anode range, including the coated and platinised families.',
    },
    {
      href: assertRoute('/titanium-anode/coating-systems/', 'electrowinning related link'),
      label: 'Coating Systems',
      note: 'The mixed metal oxide families and their loading metrics.',
    },
    {
      href: assertRoute('/titanium-products/titanium-clad-copper/', 'electrowinning related link'),
      label: 'Titanium-Clad Copper',
      note: 'Clad anodes and the bond integrity requirements.',
    },
    {
      href: assertRoute('/industries/', 'electrowinning related link'),
      label: 'All Industries',
      note: 'The hub page with the cross-industry comparison table and the shared RFQ inputs.',
    },
  ],
};
