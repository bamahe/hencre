/**
 * offices.ts
 * REMAX Collective office locations for HenCRE.
 */

export interface Office {
  /** Office display name */
  name: string;
  /** URL-safe slug */
  slug: string;
  /** Full street address */
  address: string;
  /** City */
  city: string;
  /** State abbreviation */
  state: string;
  /** ZIP code */
  zip: string;
  /** Latitude for map pins & schema markup */
  lat: number;
  /** Longitude for map pins & schema markup */
  lng: number;
  /** Phone number */
  phone: string;
  /** Brokerage name */
  brokerage: string;
}

export const OFFICES: Office[] = [
  {
    name: 'REMAX Collective — Tampa',
    slug: 'tampa',
    address: '14310 N Dale Mabry Hwy Ste 100',
    city: 'Tampa',
    state: 'FL',
    zip: '33618',
    lat: 28.0767,
    lng: -82.5037,
    phone: '(813) 733-7907',
    brokerage: 'REMAX Collective',
  },
  {
    name: 'REMAX Collective — Largo',
    slug: 'largo',
    address: '11200 Seminole Blvd Ste 202',
    city: 'Largo',
    state: 'FL',
    zip: '33778',
    lat: 27.8842,
    lng: -82.7731,
    phone: '(813) 733-7907',
    brokerage: 'REMAX Collective',
  },
  {
    name: 'REMAX Collective — Brandon',
    slug: 'brandon',
    address: '417 Lithia Pinecrest Rd',
    city: 'Brandon',
    state: 'FL',
    zip: '33511',
    lat: 27.9345,
    lng: -82.2868,
    phone: '(813) 733-7907',
    brokerage: 'REMAX Collective',
  },
];

/** Get an office by its slug */
export function getOfficeBySlug(slug: string): Office | undefined {
  return OFFICES.find((o) => o.slug === slug);
}

/** Format a full mailing address string */
export function formatAddress(office: Office): string {
  return `${office.address}, ${office.city}, ${office.state} ${office.zip}`;
}
