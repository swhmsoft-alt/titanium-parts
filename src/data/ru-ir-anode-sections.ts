/**
 * Section content of the Ru-Ir coated titanium anode page.
 *
 * Split from `ru-ir-anode-page.ts` so the copy can be reviewed on its own.
 * Every statement is tied to a condition (current density, chloride level,
 * pH, temperature, duty cycle) — reference windows are labelled as such and
 * are confirmed against the actual duty before they become a quotation.
 */

import type { PageBlock, PageSection } from './coating-page-model';

/** The block vocabulary of the page family. */
export type RuIrBlock = PageBlock;

/** A section of the page family. */
export type RuIrSection = PageSection;

export const ruIrSections: RuIrSection[] = [
  {
    id: 'definition',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'What This Coating Is',
    title: 'Ru-Ir MMO on Titanium: What You Are Actually Buying',
    intro:
      'A ruthenium-coated titanium anode is a titanium substrate carrying a mixed metal oxide layer of ruthenium oxide and iridium oxide. The two metals do different jobs, and the balance between them is what makes the coating work in your cell rather than in a catalogue.',
    blocks: [
      {
        kind: 'paragraphs',
        paragraphs: [
          'Ruthenium is the catalytic component. It lowers the potential at which chloride is oxidised to chlorine, so less electrical energy is lost to unwanted oxygen evolution and more of the current does the reaction you actually pay for. Iridium is the stabilising component. It resists chemical attack in the oxidising, acidic layer that forms right at the anode surface, which is why it is present at all.',
          'The consequence is that a Ru-Ir coating is not a single material with a single performance figure. Change the ruthenium content and you change the chlorine selectivity. Change the iridium content and you change how the surface survives. Change the loading and you change both how much current the surface can carry and how long it lasts. This is why the coating is quoted as a defined system — composition, loading, substrate and geometry — instead of as a name.',
          'What you are buying is therefore three things at once: a titanium substrate that carries current and survives the electrolyte, a mixed metal oxide layer selected for your reaction, and a manufactured geometry whose active area, edges and connection are resolved against your installation. Any one of the three can be right while the assembly is wrong.',
        ],
      },
      {
        kind: 'cards',
        items: [
          {
            title: 'Ruthenium does the reaction',
            body:
              'It carries the catalytic activity for chloride oxidation. More ruthenium raises chlorine selectivity at a given current density, and it raises the cost of the coating.',
          },
          {
            title: 'Iridium does the surviving',
            body:
              'It stabilises the oxide surface in the highly oxidising anode layer, where pH collapses and chlorine concentration climbs. It also pushes the coating away from oxygen evolution.',
          },
          {
            title: 'Titanium does the carrying',
            body:
              'The substrate conducts, resists the electrolyte and lets the coating be thin. Grade, thickness and the masked areas are chosen with the coating, not after it.',
          },
          {
            title: 'The geometry decides the duty',
            body:
              'Active area, edge density and current distribution set the real current density. A coating selected on name alone, on a badly distributed geometry, will run outside the window it was chosen for.',
          },
        ],
      },
      {
        kind: 'paragraphs',
        paragraphs: [
          'One boundary is worth stating plainly, because it is the most common source of a disappointing first order: a coated anode is an engineered electrode, not a consumable that can be ordered by area and forgotten. The service life is a consequence of the electrolyte, the current density and the duty — not of the coating alone.',
        ],
      },
    ],
  },
  {
    id: 'chemistry',
    band: 'py-20 bg-white',
    eyebrow: 'Coating Chemistry',
    title: 'How Ru and Ir Split the Work, and Why the Ratio Moves',
    intro:
      'The ratio between ruthenium and iridium is the first decision in the coating, and it is decided by the reaction, not by availability. The table below is the working comparison we use when a duty is reviewed.',
    blocks: [
      {
        kind: 'table',
        columns: ['Property', 'Higher Ru share', 'Higher Ir share'],
        rows: [
          [
            'Chlorine selectivity at a given current density',
            'Higher — more of the current goes to chlorine instead of oxygen',
            'Lower — more current is spent on oxygen evolution',
          ],
          [
            'Resistance to attack in the anodic layer',
            'Lower — the Ru-rich surface is chemically less robust',
            'Higher — the Ir-rich surface tolerates the harsh local chemistry',
          ],
          [
            'Behaviour in dilute chloride',
            'Weaker — low chloride pushes the surface towards oxygen evolution',
            'Stronger — the surface stays useful when chloride is thin',
          ],
          [
            'Cost of the coating material',
            'Higher — ruthenium is the expensive component',
            'Lower — iridium carries more of the cost-efficient mass',
          ],
          [
            'Typical duty it suits',
            'Chlorine and hypochlorite production in chloride-rich brines',
            'Mixed duties, dilute chloride, higher temperature or harsher oxidation',
          ],
          [
            'What we confirm before quoting it',
            'Chloride level, current density and target selectivity',
            'Impurity load, temperature, pH and the acceptable service-life basis',
          ],
        ],
        note:
          'Reference comparison for engineering discussion. The final ratio is fixed against your electrolyte, current density and required life — it is not selected from a table alone.',
      },
      {
        kind: 'paragraphs',
        paragraphs: [
          'Two further points belong in the same conversation. First, the coating is not the only variable: how the substrate is prepared, how the coating is bonded and how the masked areas are sealed all influence how the surface behaves in service. Second, the ruthenium and iridium content is usually expressed as a coating composition and a loading in grams per square centimetre of coated area, and it is that loading — not a thickness in microns — that the manufacturing route is controlled against.',
        ],
      },
    ],
  },

  {
    id: 'technical-data',
    band: 'py-20 bg-gray-50 border-t border-gray-200 scroll-mt-10',
    eyebrow: 'Technical Specification',
    title: 'Ru-Ir Coated Titanium Anode — Specification Basis',
    intro:
      'The specification below is the basis we quote against. Where a value depends on your duty, it is marked as order-defined rather than filled with a number that would only look precise.',
    blocks: [
      {
        kind: 'table',
        columns: ['Item', 'Specification basis'],
        rows: [
          ['Product', 'Ru-Ir mixed metal oxide (MMO) coated titanium anode'],
          ['Coating system', 'RuO₂ – IrO₂ on a titanium substrate'],
          ['Substrate', 'Commercially pure titanium, Grade 1 or Grade 2, order-defined'],
          ['Coating ratio', 'Order-defined against the reaction and the duty'],
          ['Coating loading', 'Stated in g/cm² of coated area; order-defined'],
          [
            'Active surface area',
            'Order-defined by geometry and by the coated area confirmed on the drawing',
          ],
          [
            'Form',
            'Mesh, plate, tube, ribbon, wire, rod, disc, canister or a drawing-based assembly',
          ],
          [
            'Masking / uncoated zones',
            'Defined on the drawing: connection zones, mounting points, edges',
          ],
          ['Electrical connection', 'Threaded stud, tab or cable termination, order-defined'],
          [
            'Current density basis',
            'Reference window of 1–10 A/dm² for chlorine evolution; confirmed per duty',
          ],
          ['Media', 'Chloride-containing brines, seawater and process electrolytes — subject to review'],
          ['Operating temperature', 'Order-defined; higher temperature shortens the achievable life'],
          [
            'Acceptance method',
            'Dimensional inspection, visual check and coating records per the agreed scope',
          ],
          [
            'Documentation',
            'MTC / material records, coating loading and composition records, certificate of conformity',
          ],
        ],
        note:
          'Specification note: the loading, the ratio, the substrate and the acceptance method are fixed per order. A datasheet that lists a single fixed loading for every Ru-Ir anode is describing a default, not your anode.',
      },
    ],
  },
  {
    id: 'performance',
    band: 'py-20 bg-white',
    eyebrow: 'Service Life & Performance',
    title: 'What Decides the Life of a Ru-Ir Anode',
    intro:
      'Nobody can quote a reliable life from the coating name alone. What can be done is to state the factors, show how they interact, and make the review basis explicit so that the number you receive is defensible.',
    blocks: [
      {
        kind: 'cards',
        items: [
          {
            title: 'Current density',
            body:
              'The single strongest factor. Pushing the surface above the window it was selected for consumes coating far faster than the loading suggests.',
            tag: '01',
          },
          {
            title: 'Chloride concentration',
            body:
              'Thin chloride at the surface pushes the reaction towards oxygen evolution, which consumes the coating without producing the chlorine you are paying for.',
            tag: '02',
          },
          {
            title: 'Temperature',
            body:
              'Higher temperature accelerates both the useful reaction and the degradation of the surface. Life is not transferable between temperatures.',
            tag: '03',
          },
          {
            title: 'pH at the surface',
            body:
              'The anode surface runs far more acidic than the bulk liquid. An acid build-up at the surface changes the balance the coating was chosen for.',
            tag: '04',
          },
          {
            title: 'Impurities',
            body:
              'Organics, heavy metals and other contaminants compete at the surface. Their presence is a common cause of a life shorter than the design basis.',
            tag: '05',
          },
          {
            title: 'Duty cycle and stoppages',
            body:
              'Intermittent operation changes the chemistry around the electrode and adds stress cycles. Interruption without clean rinse-down can shorten life on its own.',
            tag: '06',
          },
        ],
      },
      {
        kind: 'paragraphs',
        paragraphs: [
          'Two failure patterns account for most early replacements, and both are avoidable at the specification stage. The first is coating depletion caused by running above the agreed current density — a geometry problem as much as an operating problem, because uneven current distribution concentrates the load at edges and at the uncoated boundary. The second is adhesion loss at the masked boundary, where the coating meets the bare substrate and the interface sees a different environment from the coated face.',
          'The review we run before quoting therefore always asks the same three questions: what current density does the geometry actually impose, what does the surface chemistry do at the operating temperature, and what evidence do you need to accept the coating. Without those, any life figure would be decoration.',
        ],
      },
    ],
  },

  {
    id: 'applications',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'Where This Coating Is Used',
    title: 'Applications We Supply Ru-Ir Coated Titanium Anodes For',
    intro:
      'The coating is normally reviewed for chloride oxidation duties. Where the duty is different, a different coating family is often the better answer — and saying so is part of the review.',
    blocks: [
      {
        kind: 'linkcards',
        items: [
          {
            title: 'Chlorine and hypochlorite production',
            body:
              'Chlor-alkali cells and hypochlorite generators where chlorine selectivity at a given current density is the deciding factor.',
            href: '/sodium-hypochlorite-generator/',
          },
          {
            title: 'Electrochlorination for water treatment',
            body:
              'On-site chlorine generation for disinfection duty, where the anode runs in dilute chloride and the surface stability matters as much as the reaction.',
            href: '/industries/water-treatment/',
          },
          {
            title: 'Pool and aquaculture salt chlorination',
            body:
              'Compact electrolytic cells where the coating must survive a warm, dilute-chloride electrolyte and a seasonal duty cycle.',
            href: '/salt-chlorinator-for-pool/',
          },
          {
            title: 'Marine and offshore cathodic protection',
            body:
              'Impressed-current systems in seawater, where the anode is exposed continuously and the coating ratio is set against the salinity and the design life.',
            href: '/industries/marine-offshore/',
          },
          {
            title: 'Chemical processing electrolysis',
            body:
              'Specialty electrolytic duties where impurity control and surface chemistry determine whether the coating holds.',
            href: '/industries/chemical-processing/',
          },
          {
            title: 'Electroplating and surface treatment',
            body:
              'Anodic duties where a stable surface and controlled dissolution rate matter more than chlorine production.',
            href: '/industries/electroplating/',
          },
        ],
      },
      {
        kind: 'paragraphs',
        paragraphs: [
          'Where the duty is oxygen evolution in a chloride-free or very dilute medium, an Ir-Ta system is usually the better choice; where a precious-metal surface is needed for a plating duty, platinised titanium is the correct answer. We will tell you when that is the case rather than fit a Ru-Ir coating to it.',
        ],
      },
    ],
  },
  {
    id: 'geometries',
    band: 'py-20 bg-white',
    eyebrow: 'Available Geometries',
    title: 'The Geometry Carries the Coating',
    intro:
      'The coating fixes the active surface; the geometry fixes how the current reaches it. These are the forms the Ru-Ir coating is supplied in, each with its own page describing the construction.',
    blocks: [
      {
        kind: 'linkcards',
        items: [
          {
            title: 'MMO mesh and plate assemblies',
            body:
              'Expanded or perforated mesh and flat plate forms for tank, cell and vessel installations.',
            href: '/titanium-anode/mmo-anode/',
          },
          {
            title: 'MMO tubular anode',
            body: 'Coated tube forms for vessel interiors and down-pipe installations.',
            href: '/titanium-anode/mmo-anode/mmo-tubular-anode/',
          },
          {
            title: 'MMO ribbon anode',
            body: 'Ribbon and strip forms for long-run distribution along a structure.',
            href: '/titanium-anode/mmo-anode/mmo-ribbon-anode/',
          },
          {
            title: 'MMO mesh ribbon anode',
            body: 'Combined mesh and ribbon constructions for distributed current output.',
            href: '/titanium-anode/mmo-anode/mmo-mesh-ribbon-anode/',
          },
          {
            title: 'MMO wire anode',
            body: 'Flexible coated titanium wire for routed and embedded layouts.',
            href: '/titanium-anode/mmo-anode/mmo-wire-anode/',
          },
          {
            title: 'MMO rod anode',
            body: 'Rod forms for direct installation and for use as a structural member.',
            href: '/titanium-anode/mmo-anode/mmo-rod-anode/',
          },
          {
            title: 'MMO disc anode',
            body: 'Disc forms for shipboard and localised installations.',
            href: '/titanium-anode/mmo-anode/mmo-disc-anode/',
          },
          {
            title: 'MMO canister anode',
            body: 'Groundbed canister assemblies for shallow and deep installation.',
            href: '/titanium-anode/mmo-anode/mmo-canister-anode/',
          },
        ],
      },
    ],
  },

  {
    id: 'quality',
    band: 'py-20 bg-gray-50 border-y border-gray-200',
    eyebrow: 'Inspection & Records',
    title: 'The Records That Let You Accept the Anode',
    intro:
      'A coated anode is difficult to judge by eye once it is in the cell, so the evidence has to travel with it. The scope is agreed before production and follows the quality plan.',
    blocks: [
      {
        kind: 'list',
        intro:
          'The typical document set for a Ru-Ir coated titanium anode order, adjustable to your acceptance requirements:',
        points: [
          'Material certificate (MTC) for the titanium substrate, with heat and lot traceability',
          'Positive material identification (PMI) confirming the titanium grade',
          'Coating loading records for the coated area, in g/cm²',
          'Coating composition records, by XRF where the agreed scope includes them',
          'Adhesion and visual inspection of the coated surface and the masked boundary',
          'Dimensional inspection against the approved drawing, including the uncoated length',
          'Final inspection against the quality plan, with marking and labelling checks',
          'Certificate of conformity, packing list and export documents for the shipment',
        ],
      },
      {
        kind: 'paragraphs',
        paragraphs: [
          'Third-party inspection can be coordinated where your contract requires it, and the inspection and document scope is normally fixed at quotation stage so that it does not become a dispute at delivery. Our quality system covers incoming verification, in-process checks, dimensional and coating inspection and shipment documentation.',
        ],
      },
    ],
  },
  {
    id: 'before-quote',
    band: 'scroll-mt-24 py-20 lg:py-28',
    eyebrow: 'Before Requesting a Quote',
    title: 'What We Need Before an Anode Can Be Quoted',
    intro:
      'Geometry alone does not define an anode. These are the inputs that let us answer with a coating definition, a substrate grade, a drawing proposal and a defensible life basis instead of a catalogue number.',
    blocks: [
      {
        kind: 'cards',
        items: [
          {
            title: 'The reaction',
            body:
              'Chlorine evolution, hypochlorite generation, electrochlorination or another duty — and what the cell is expected to produce.',
          },
          {
            title: 'The electrolyte',
            body:
              'Chloride level, pH, temperature and the contaminants that will be present.',
          },
          {
            title: 'The current',
            body:
              'Operating current or current-density basis, the daily schedule and the expected peak.',
          },
          {
            title: 'The life',
            body:
              'Required service life and the maintenance window you can accept in between.',
          },
          {
            title: 'The geometry',
            body:
              'Active area, the space available, the installation method and the mechanical protection.',
          },
          {
            title: 'The connection',
            body:
              'Electrical termination, cable or stud detail, and the areas that must stay uncoated.',
          },
          {
            title: 'The evidence',
            body:
              'Inspection scope, document scope and third-party witnessing requirements.',
          },
          {
            title: 'The order',
            body:
              'Quantity, delivery date, drawing or sample, and any customer marking.',
          },
        ],
      },
      {
        kind: 'paragraphs',
        paragraphs: [
          'If some of these are still open, send what you know and mark the rest as open. A partially defined duty is enough for us to reply with the open questions marked for engineering review — and it is much better than a quote that quietly assumes values you never agreed to.',
        ],
      },
    ],
  },
];

export const ruIrFaq: { q: string; a: string }[] = [
  {
    q: 'What is the difference between a Ru-Ir anode and an Ir-Ta anode?',
    a: 'Both are mixed metal oxide coatings on titanium, and both are supplied as complete anodes. The difference is what the metals do. Ruthenium carries the catalytic activity for chlorine evolution, so a Ru-Ir coating gives higher chlorine selectivity at a given current density. Iridium is more chemically robust, so an Ir-Ta coating holds up better in dilute chloride, at higher temperature, or where the surface chemistry is harsher. Chlorine production in a chloride-rich brine usually points to Ru-Ir; oxygen evolution and mixed or dilute duties usually point to Ir-Ta.',
  },
  {
    q: 'How do you decide the ruthenium-to-iridium ratio for my cell?',
    a: 'From the reaction first, then the conditions. We look at the chloride concentration at the electrode surface, the current density, the temperature, the pH behaviour and the contamination load, and we check the required selectivity and the required life. More ruthenium raises chlorine selectivity and cost; more iridium raises robustness. The ratio is then fixed against that review rather than copied from another order.',
  },
  {
    q: 'What does the coating loading in g/cm² actually mean?',
    a: 'It is the mass of mixed metal oxide applied per unit of coated surface area, and it is the quantity the manufacturing route is controlled against. Loading and thickness are not interchangeable for a mixed metal oxide layer, because the layer is a porous, active surface rather than a dense metallic film. When you see loading quoted, ask for the coated area it applies to and the measurement method, because the same number over different areas means different amounts of material.',
  },
  {
    q: 'Can you quote a service life for my anode?',
    a: 'We can quote a life basis and explain what it depends on, but a single number without the conditions is not useful. The life follows from the current density the geometry imposes, the chloride level, the temperature, the pH at the surface, the impurities and the duty cycle. Give us those and we will state the basis we used, including the assumptions, so that the figure can be checked against your own operation data.',
  },
  {
    q: 'Why does the current density matter so much?',
    a: 'Because the surface consumes coating at a rate that rises steeply with current density. Running above the agreed window does two things at once: it shortens the life and it pushes more current into oxygen evolution, so you spend energy and coating without producing the chlorine you need. This is also a geometry question, not only an operating one — uneven current distribution concentrates the load at edges and at the uncoated boundary, which is why the geometry is reviewed together with the coating.',
  },
  {
    q: 'Which geometries can carry a Ru-Ir coating?',
    a: 'Mesh, plate, tubular, ribbon, mesh ribbon, wire, rod, disc, canister and drawing-based custom assemblies. Each form has its own page describing the construction, and each imposes its own current distribution. The coating selection and the geometry are reviewed together, so a drawing is normally the cleanest way to start.',
  },
  {
    q: 'What happens if the anode runs in dilute chloride?',
    a: 'With thin chloride at the surface, more of the current goes to oxygen evolution instead of chlorine, and the coating is consumed without delivering the intended product. A ruthenium-rich surface is more exposed to this than an iridium-rich one. If your duty is dilute, or the chloride concentration at the electrode varies, tell us — the ratio and the geometry both need to account for it.',
  },
  {
    q: 'What documentation arrives with the anode?',
    a: 'Typically the MTC for the titanium substrate with heat and lot traceability, PMI confirmation of the grade, coating loading and composition records, dimensional inspection against the drawing, final inspection against the quality plan, and a certificate of conformity with the packing and export documents. The scope is agreed at quotation stage, and third-party witnessing can be arranged where your contract requires it.',
  },
  {
    q: 'Can the coating be applied over an existing titanium part?',
    a: 'Yes, recoating of an existing titanium item can be reviewed, provided the substrate is in a condition that accepts a coating — sound metal, no significant pitting, and enough remaining material. Send the part or its drawings together with its service history, and we will assess whether recoating is appropriate or whether replacement is the better route.',
  },
  {
    q: 'What information do you need to start a quotation?',
    a: 'The reaction, the electrolyte including chloride level, pH and temperature, the operating current or current-density basis and schedule, the required service life, the geometry and installation, the electrical connection and masked areas, the inspection and document scope, and the quantity and delivery date. Anything still open can be marked as open for engineering review.',
  },
];

