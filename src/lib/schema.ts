/**
 * schema.ts
 * JSON-LD structured data generators for SEO.
 * Outputs schema.org compliant objects for Next.js <script> tags.
 */

import { OFFICES, formatAddress, type Office } from './offices';

/** Barrett's core details — single source of truth */
const BARRETT = {
  name: 'Barrett Henry',
  jobTitle: 'Commercial Real Estate Advisor',
  description:
    'Barrett Henry is a REALTOR® and Commercial Real Estate Advisor at REMAX Collective with 23+ years of real estate experience, specializing in Florida commercial real estate.',
  phone: '(813) 733-7907',
  email: 'barrett@hencre.com',
  image: 'https://hencre.com/images/barrett-henry-headshot.jpg',
  designations: ['e-PRO', 'MRP', 'SRS', 'Hall of Fame'],
  sameAs: [
    'https://www.google.com/maps/place/?q=place_id:PLACEHOLDER_GBP_ID',
    'https://www.linkedin.com/in/barretthenry/',
    'https://www.realtor.com/realestateagents/barrett-henry',
    'https://www.loopnet.com/profile/barretthenry/',
    'https://www.crexi.com/users/barretthenry/',
    'https://www.facebook.com/barretthenry',
    'https://www.youtube.com/@barretthenry',
  ],
};

/** Organization schema for REMAX Collective / HenCRE */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'HenCRE — REMAX Commercial Real Estate Florida',
    url: 'https://hencre.com',
    logo: 'https://hencre.com/icon-512.png',
    description:
      'Florida commercial real estate services by Barrett Henry, REALTOR® at REMAX Collective. Specializing in leasing, sales, investment, and valuations across Tampa Bay and all 67 Florida counties.',
    telephone: BARRETT.phone,
    email: BARRETT.email,
    sameAs: BARRETT.sameAs,
    founder: {
      '@type': 'Person',
      name: BARRETT.name,
    },
    parentOrganization: {
      '@type': 'Organization',
      name: 'REMAX Collective',
    },
  };
}

/** LocalBusiness schema for a specific office */
export function localBusinessSchema(office: Office) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: `HenCRE — ${office.name}`,
    url: `https://hencre.com/offices/${office.slug}`,
    telephone: office.phone,
    email: BARRETT.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: office.address,
      addressLocality: office.city,
      addressRegion: office.state,
      postalCode: office.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: office.lat,
      longitude: office.lng,
    },
    parentOrganization: {
      '@type': 'Organization',
      name: 'REMAX Collective',
    },
  };
}

/** Person schema for Barrett */
export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: BARRETT.name,
    jobTitle: BARRETT.jobTitle,
    description: BARRETT.description,
    image: BARRETT.image,
    telephone: BARRETT.phone,
    email: BARRETT.email,
    url: 'https://hencre.com',
    sameAs: BARRETT.sameAs,
    worksFor: {
      '@type': 'Organization',
      name: 'REMAX Collective',
    },
    knowsAbout: [
      'Commercial Real Estate',
      'CRE Investment',
      'Commercial Leasing',
      'Property Valuation',
      'Florida Real Estate',
    ],
    hasCredential: BARRETT.designations.map((d) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Real Estate Designation',
      name: d,
    })),
  };
}

/** RealEstateAgent schema */
export function realEstateAgentSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: BARRETT.name,
    description: BARRETT.description,
    image: BARRETT.image,
    telephone: BARRETT.phone,
    email: BARRETT.email,
    url: 'https://hencre.com',
    sameAs: BARRETT.sameAs,
    areaServed: {
      '@type': 'State',
      name: 'Florida',
    },
    makesOffer: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Leasing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Sales' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CRE Investment Advisory' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Property Valuation' } },
    ],
  };
}

/** Service schema for a specific CRE service */
export function serviceSchema(service: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: `https://hencre.com/services/${service.slug}`,
    provider: {
      '@type': 'RealEstateAgent',
      name: BARRETT.name,
      telephone: BARRETT.phone,
    },
    areaServed: {
      '@type': 'State',
      name: 'Florida',
    },
  };
}

/** FAQPage schema from an array of Q&A pairs */
export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/** Article schema for long-form content pages */
export function articleSchema(article: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: `https://hencre.com/${article.slug}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    image: article.image ?? BARRETT.image,
    author: {
      '@type': 'Person',
      name: BARRETT.name,
      url: 'https://hencre.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'HenCRE',
      logo: {
        '@type': 'ImageObject',
        url: 'https://hencre.com/icon-512.png',
      },
    },
  };
}

/** BlogPosting schema for blog posts */
export function blogPostingSchema(post: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: `https://hencre.com/blog/${post.slug}`,
    datePublished: post.datePublished,
    dateModified: post.dateModified ?? post.datePublished,
    image: post.image ?? BARRETT.image,
    author: {
      '@type': 'Person',
      name: BARRETT.name,
      url: 'https://hencre.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'HenCRE',
      logo: {
        '@type': 'ImageObject',
        url: 'https://hencre.com/icon-512.png',
      },
    },
  };
}

/** Breadcrumb schema from an array of { name, url } items */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** WebSite schema for sitewide search and identity */
export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'HenCRE',
    alternateName: 'REMAX Commercial Real Estate Florida',
    url: 'https://hencre.com',
    description:
      'Florida commercial real estate services — leasing, sales, investment, and valuations across all 67 counties.',
    publisher: {
      '@type': 'Organization',
      name: 'HenCRE',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://hencre.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
}
