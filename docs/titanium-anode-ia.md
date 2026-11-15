# Titanium Anode Information Architecture

Baseline for the titanium anode product tree. It is the reference for every
page in this cluster: the navigation, the hub pages and the product pages all
follow the taxonomy defined here, and the data modules that drive them are
listed at the end.

## 1. The four dimensions

The anode range is not one flat list. Four independent dimensions decide what
a buyer is actually asking for, and mixing them in one directory level is what
creates overlapping search intents and unclear product ownership.

| Dimension | Question it answers | Where it lives |
|---|---|---|
| Coating system | What is the active surface made of? | `/titanium-anode/coating-systems/` |
| Geometry | What shape does the electrode have? | `/titanium-anode/mmo-anode/` |
| Application | What job does it do in the field? | `/cathodic-protection/`, `/titanium-anode/anti-fouling-system/`, `/applications/` |
| Supporting components | What else does the system need? | `/titanium-products/titanium-baskets/`, `/cathodic-protection/reference-electrodes/` |

A single anode can carry all four descriptions at once. A Ru-Ir coated
tubular anode in an ICCP groundbed is simultaneously a coated titanium anode, an
MMO tubular anode and an impressed current protection product. The pages are
organised by which of those decisions the page helps a buyer make.

## 2. Navigation structure

The "Titanium Anodes" mega menu renders four columns, so the taxonomy is
grouped into exactly four groups.

```
Titanium Anodes                         /titanium-anode/
├─ MMO Titanium Anodes                  /titanium-anode/mmo-anode/
│   ├─ MMO Linear Anode                 /titanium-anode/mmo-anode/mmo-linear-anode/
│   ├─ MMO Wire Anode                   /titanium-anode/mmo-anode/mmo-wire-anode/
│   ├─ MMO Ribbon Anode                 /titanium-anode/mmo-anode/mmo-ribbon-anode/
│   ├─ MMO Mesh Ribbon Anode            /titanium-anode/mmo-anode/mmo-mesh-ribbon-anode/
│   ├─ MMO Canister Anode               /titanium-anode/mmo-anode/mmo-canister-anode/
│   ├─ MMO Tubular Anode                /titanium-anode/mmo-anode/mmo-tubular-anode/
│   ├─ MMO Disc Anode                   /titanium-anode/mmo-anode/mmo-disc-anode/
│   └─ MMO Rod Anode                    /titanium-anode/mmo-anode/mmo-rod-anode/
├─ Coating Systems                      /titanium-anode/coating-systems/
│   ├─ Ru-Ir MMO Titanium Anodes        /titanium-anode/ruthenium-coated-titanium-anodes/
│   ├─ Ir-Ta & Ir-Based MMO Anodes      /titanium-anode/iridium-oxide-coated-titanium-anodes/
│   ├─ Platinized Titanium Anodes       /titanium-anode/platinized-anode/
│   └─ Specialty Coated Titanium Anodes /titanium-anode/lead-dioxide-anode/
├─ Cathodic Protection                  /cathodic-protection/
│   └─ Reference Electrodes             /cathodic-protection/reference-electrodes/
└─ Systems & Components                 /titanium-anode/anti-fouling-system/
    ├─ Marine Anti-Fouling Systems      /titanium-anode/anti-fouling-system/
    ├─ Electrochemical Applications     /applications/
    └─ Titanium Anode Baskets           /titanium-products/titanium-baskets/
```

## 3. URL decisions that are deliberate

| Decision | Reason |
|---|---|
| `/titanium-anode/cathodic-protection/` is **not** created | The root-level `/cathodic-protection/` is already linked from the navigation, the footer and `/applications/`. A second URL for the same content would split the ranking. |
| `/titanium-anode/reference-electrode/` is **not** created | A reference electrode is not an anode. It is filed under the cathodic protection system that uses it. |
| The four existing coating URLs are **unchanged** | They may already be indexed. Changing them for tidiness would cost more than it gains. |
| `/titanium-products/titanium-baskets/` keeps its position | A titanium basket is a containment component, not a coated electrode. The page states that boundary explicitly. |

## 4. Page entity and keyword map

| Page | Primary keyword | Secondary keywords | Search intent | Must differ from |
|---|---|---|---|---|
| `/titanium-anode/` | titanium anode manufacturer | titanium anodes supplier, custom titanium anode | broad category | — |
| `/titanium-anode/mmo-anode/` | MMO titanium anode | mixed metal oxide anode, DSA titanium anode, MMO anode manufacturer | product family | the coating pages |
| `/titanium-anode/coating-systems/` | coated titanium anodes | titanium anode coating types, MMO vs platinized | coating comparison | each coating page |
| `/titanium-anode/mmo-anode/mmo-linear-anode/` | MMO flexible linear anode | pre-packaged linear anode, linear anode with coke backfill | specific product | the wire page |
| `/titanium-anode/mmo-anode/mmo-wire-anode/` | MMO titanium wire anode | coated titanium wire anode | specific product | the linear page |
| `/titanium-anode/mmo-anode/mmo-ribbon-anode/` | MMO ribbon anode | titanium ribbon anode, solid ribbon anode | specific product | the mesh ribbon page |
| `/titanium-anode/mmo-anode/mmo-mesh-ribbon-anode/` | MMO mesh ribbon anode | expanded mesh ribbon anode | specific product | the ribbon page |
| `/titanium-anode/mmo-anode/mmo-canister-anode/` | MMO canister anode | deep well anode, canister anode assembly | specific product | the tubular page |
| `/titanium-anode/mmo-anode/mmo-tubular-anode/` | MMO tubular anode | tubular titanium anode | specific product | the canister page |
| `/titanium-anode/mmo-anode/mmo-disc-anode/` | MMO disc anode | disc titanium anode | specific product | — |
| `/titanium-anode/mmo-anode/mmo-rod-anode/` | MMO rod anode | coated titanium rod anode, ICCP rod anode | specific product | consumer anode rods |
| `/titanium-anode/ruthenium-coated-titanium-anodes/` | ruthenium oxide coated titanium anode | Ru-Ir MMO anode, chlorine evolution anode | coating purchase | the Ir page |
| `/titanium-anode/iridium-oxide-coated-titanium-anodes/` | iridium oxide coated titanium anode | Ir-Ta anode, oxygen evolution anode | coating purchase | the Ru page |
| `/titanium-anode/platinized-anode/` | platinized titanium anode | platinum coated titanium anode, Pt/Ti anode | coating purchase | the MMO pages |
| `/titanium-anode/lead-dioxide-anode/` | lead dioxide coated titanium anode | specialty coated anode | coating purchase | — |
| `/cathodic-protection/` | cathodic protection anodes | ICCP anode manufacturer, impressed current anode | application | the MMO pages |
| `/cathodic-protection/reference-electrodes/` | reference electrode | Ag/AgCl reference electrode, zinc reference electrode, Cu/CuSO4 reference electrode | component purchase | the anode pages |
| `/titanium-anode/anti-fouling-system/` | marine anti fouling system | electrolytic anti-fouling system, seawater anti-fouling | system purchase | the CP page |
| `/titanium-products/titanium-baskets/` | titanium anode basket | titanium basket for plating | component purchase | the MMO pages |

## 5. Anti-cannibalisation rules

These are the rules that keep the pages from competing with each other. They
apply to every new page in the cluster.

1. **MMO hub vs coating pages.** The MMO hub explains what MMO is, how the
   eight geometries differ and why DSA and MMO are the same product described
   two ways. A coating page explains the oxide combination, the target reaction
   and the operating window of one surface. The pages cross-link; they never
   restate each other.
2. **Linear vs wire.** The linear anode is a pre-packaged assembly: MMO core,
   copper conductor, coke backfill, sleeve and outer wrapping. The wire anode
   is the bare coated wire. Each page carries its own construction list,
   parameter table and installation method.
3. **Ribbon vs mesh ribbon.** Solid flat strip for long, low-profile runs over
   prepared surfaces. Expanded mesh for a higher effective surface, concrete
   embedding and large-area distributed protection. Different photos, different
   parameter tables, different installation notes.
4. **Canister vs tubular.** The canister is the complete deep-well unit:
   housing, backfill, sealed cable connection and the installation package. The
   tubular anode is the bare active electrode that may sit inside it.
5. **Rod anode.** The MMO rod anode is an industrial ICCP and cell electrode. The
   page states explicitly that it is not a consumer anode rod for water heaters,
   boilers or pools.
6. **Anti-fouling vs cathodic protection.** Both can use MMO titanium anodes.
   Anti-fouling is a process system that generates a controlled oxidant dose;
   ICCP holds a structure at a defined potential and needs a reference
   electrode to close the loop. The anti-fouling page carries the comparison
   table so the two are never confused.
7. **Reference electrode.** Never presented as an anode. It carries no
   protection current and has no mixed metal oxide coating.
8. **Titanium basket.** Never presented as an anode. It contains soluble anode
   material and carries the current into the bath.

## 6. Content every page in the cluster must provide

| Block | Purpose |
|---|---|
| Product definition and construction | What the item is, what it is made of, what is included in the supply scope |
| Product boundary | The explicit difference against the closest sibling product |
| Order basis table | The inputs the quotation is built on, with the units and the measurement method |
| Applications | The installations it is used in and what the buyer must state for each |
| What we confirm before quoting | The engineering review that happens before a price exists |
| Inspection and documentation scope | The evidence supplied with the order |
| Customisation and RFQ | Drawing, coating map, connection and document requirements |

Two rules apply to all of them: never publish a current density, design life or
operating temperature that is not tied to a stated coating, electrolyte and
active-area basis; and never copy a parameter block between two pages, because
that is exactly how two pages end up answering the same query.

## 7. Data modules that drive the cluster

| Module | Contents |
|---|---|
| `src/data/anode-catalog.ts` | The four navigation groups and the four homepage family cards. The single source of the taxonomy. |
| `src/data/mmo-anodes.ts` | The eight MMO geometries, one entry each with its own boundary, order basis and FAQ. |
| `src/data/anode-hubs.ts` | Content blocks for the MMO hub, the coating systems hub, the anti-fouling system page and the reference electrode page. |
| `src/data/anode-coatings.ts` | The four coating families with their oxide combinations and related geometries. |

Adding a page to this cluster means adding its entry to the matching module
first, then the route. The navigation reads the same modules, so a page cannot
be reachable from the menu without its entry existing.
