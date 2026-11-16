/**
 * Contact data for the team page — single source of truth.
 *
 * The company is a technical supply coordinator, so the page publishes one
 * contact role and no invented hierarchy. No names, no job titles, no head
 * count: a card per department would claim a staff the company does not have.
 */

export interface ContactItem {
  /** Short heading of the contact task. */
  title: string;
  /** What the contact does for the order. */
  body: string;
}

export interface ApplicationContact {
  /** Section heading. */
  heading: string;
  /** Section description. */
  body: string;
  /** The four tasks the contact owns. */
  items: ContactItem[];
}

export const applicationContact: ApplicationContact = {
  heading: 'Application & Quotation Contact',
  body: 'Drawing review, grade and coating selection, sample coordination, and order follow-up are handled through one technical contact. Send drawings, operating conditions and quantity for a specification review.',
  items: [
    {
      title: 'Specification Review',
      body: 'Your drawings, operating conditions and quantity are reviewed against the product family before a quotation is issued.',
    },
    {
      title: 'Drawing Check',
      body: 'Dimensions, interfaces, material grade and coating selection are checked against the information you supply.',
    },
    {
      title: 'Sample Coordination',
      body: 'Sample scope and delivery are arranged with the partner workshop that will produce the order.',
    },
    {
      title: 'Order Follow-up',
      body: 'Production follow-up, inspection points, documentation and shipping status are reported through the same contact.',
    },
  ],
};
