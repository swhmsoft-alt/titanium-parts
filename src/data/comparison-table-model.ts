/**
 * Type definitions for product parameter comparison tables.
 *
 * A comparison table is the highest-value structured content on an industrial
 * site: it is the block a retrieval system can quote row by row, and the
 * block a buyer can compare without a phone call. The model therefore forces
 * three things that are usually left to prose:
 *
 *   1. a caption, so the table states what it compares;
 *   2. a unit on every measured column, so values are unambiguous;
 *   3. a source reference on every row, so a claim can be traced to a
 *      specification, a certificate or a stated condition.
 *
 * The same data feeds both the rendered table and the `additionalProperty`
 * block of the Product schema, so the visible page and the structured data
 * can never drift apart.
 */

/** A single cell of a comparison table. */
export interface ComparisonCell {
  /** The value as written for a reader, e.g. "Grade 2 / UNS R50400". */
  value: string;
  /** Unit of the value. Written into the column header when the column has one. */
  unit?: string;
  /** The condition the value holds under, e.g. "at 20 °C, in 5% NaCl". */
  condition?: string;
  /** Where the value comes from: a standard, a certificate, or a stated limit. */
  sourceRef?: string;
  /** Marks a value that is only confirmed per order rather than as a range. */
  orderSpecific?: boolean;
}

/** One compared entity: a grade, a coating system, an anode geometry. */
export interface ComparisonSubject {
  /** Stable key, used as the column identity and as the Schema item id. */
  key: string;
  /** Display name of the column. */
  label: string;
  /** Optional short qualifier under the label, e.g. "commercial purity". */
  subtitle?: string;
  /** Canonical route of a page that covers this subject in depth. */
  href?: string;
}

/** One compared parameter, rendered as a table row. */
export interface ComparisonRow {
  /** Stable key of the parameter. */
  key: string;
  /** The parameter name shown in the first column. */
  label: string;
  /** Unit of the parameter. Written into the first cell under the label. */
  unit?: string;
  /** Cells, one per subject, in the same order as `subjects`. */
  cells: ComparisonCell[];
  /** A note that applies to the whole row, e.g. "values are typical, not guaranteed". */
  note?: string;
}

/** A complete comparison table. */
export interface ComparisonTable {
  /** Stable id, used for the anchor and for the Schema node id. */
  id: string;
  /** Table title, rendered as a heading above the table. */
  title: string;
  /**
   * The caption. Required: it states what the table compares and under which
   * conditions, and it is the sentence a retrieval system quotes.
   */
  caption: string;
  /** Compared entities, in column order. */
  subjects: ComparisonSubject[];
  /** Compared parameters, in row order. */
  rows: ComparisonRow[];
  /** Sources cited by the table, rendered as a source list under the table. */
  sources?: string[];
}

/** A `PropertyValue` entry for `Product.additionalProperty`. */
export interface SchemaProperty {
  '@type': 'PropertyValue';
  name: string;
  value: string;
  unitText?: string;
  description?: string;
}

/**
 * Flatten a comparison table into `additionalProperty` entries.
 *
 * One entry per subject and parameter, named `<parameter> — <subject>` so the
 * value stays unambiguous once it leaves the table. Values keep their
 * condition because a number without its condition is not a fact.
 */
export function toSchemaProperties(table: ComparisonTable): SchemaProperty[] {
  const out: SchemaProperty[] = [];
  for (const row of table.rows) {
    table.subjects.forEach((subject, index) => {
      const cell = row.cells[index];
      if (!cell || !cell.value) return;
      const value = cell.condition ? `${cell.value} (${cell.condition})` : cell.value;
      out.push({
        '@type': 'PropertyValue',
        name: `${row.label} — ${subject.label}`,
        value,
        ...(cell.unit ? { unitText: cell.unit } : {}),
        ...(cell.sourceRef ? { description: `Source: ${cell.sourceRef}` } : {}),
      });
    });
  }
  return out;
}

/** True when every cell of the table carries a traceable source reference. */
export function isFullySourced(table: ComparisonTable): boolean {
  return table.rows.every((row) => row.cells.every((cell) => Boolean(cell.sourceRef)));
}
