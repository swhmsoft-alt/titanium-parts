/**
 * Team and capability data — single source of truth.
 *
 * `photo` is intentionally optional. Entries without a photo render as a
 * role card with initials only, which is the safe default until the
 * company's own staff photography is available. Never substitute images
 * of people who are not part of this company.
 */

export interface TeamRole {
  /** Display name. Leave empty to publish the role without a name. */
  name: string;
  /** Job title shown on the card. */
  title: string;
  /** Department grouping used for the department summary. */
  department: string;
  /** Short scope statement describing what this role owns. */
  scope: string;
  /** Initials shown when no photo is supplied. */
  initials: string;
  /** Optional path to a photograph in public/images. */
  photo?: string;
}

export const teamRoles: TeamRole[] = [
  {
    name: '',
    title: 'Managing Director',
    department: 'Leadership',
    scope:
      'Owns company direction, key accounts and long-term supply programmes, and is the escalation point for commercial commitments.',
    initials: 'MD',
  },
  {
    name: '',
    title: 'Technical Director',
    department: 'Leadership',
    scope:
      'Approves material specifications, joining procedures and engineering deviations before they enter a quotation.',
    initials: 'TD',
  },
  {
    name: '',
    title: 'Anode Engineering Manager',
    department: 'Anode Engineering',
    scope:
      'Reviews substrate geometry, coating selection and current density assumptions for mixed-metal-oxide and platinized anodes.',
    initials: 'AE',
  },
  {
    name: '',
    title: 'PEM Systems Engineer',
    department: 'Hydrogen Systems',
    scope:
      'Defines stack architecture, balance-of-plant interfaces and control scope for PEM electrolyzer projects, and plans factory testing.',
    initials: 'PE',
  },
  {
    name: '',
    title: 'Quality & Documentation Lead',
    department: 'Quality',
    scope:
      'Runs the material certificate, inspection report, coating record and release document flow for every shipment.',
    initials: 'QD',
  },
  {
    name: '',
    title: 'Project Engineer',
    department: 'Commercial',
    scope:
      'Handles day-to-day buyer communication, drawing review, sample coordination and order scheduling.',
    initials: 'PE',
  },
];

/** Department summary shown beneath the role cards. */
export const departments = [
  { key: 'Leadership', desc: 'Company direction and technical approval authority' },
  { key: 'Anode Engineering', desc: 'Substrate design, coating selection and electrochemical review' },
  { key: 'Hydrogen Systems', desc: 'PEM stack design, system integration and testing' },
  { key: 'Quality', desc: 'Inspection, traceability and release documentation' },
  { key: 'Commercial', desc: 'Buyer communication, order coordination and documentation' },
];
