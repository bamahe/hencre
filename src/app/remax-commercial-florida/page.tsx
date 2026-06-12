import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";

/* -------------------------------------------------------------------
 * REMAX Commercial Real Estate — agent coverage/directory page.
 * Shows that REMAX Commercial® has 78+ agents across Florida and
 * positions Barrett Henry as the coordination point for commercial
 * deals statewide.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title:
    "REMAX Commercial Real Estate Agents | 78 Commercial REALTORS Statewide",
  description:
    "REMAX Commercial® has 78+ agents across Florida covering Fort Lauderdale, Orlando, Tampa Bay, Miami, Jacksonville, and beyond. Barrett Henry coordinates statewide commercial referrals.",
  keywords: [
    "REMAX Commercial Real Estate",
    "REMAX Commercial Real Estate advisors Florida",
    "commercial real estate agents Florida",
    "REMAX Commercial® Fort Lauderdale",
    "REMAX Commercial® Orlando",
    "REMAX Commercial® Tampa",
    "REMAX Commercial® Miami",
    "Florida commercial REALTOR",
    "Barrett Henry REMAX Commercial®",
  ],
  openGraph: {
    title: "REMAX Commercial Real Estate Agents | 78 Commercial REALTORS Statewide",
    description:
      "REMAX Commercial® has 78+ agents across Florida covering Fort Lauderdale, Orlando, Tampa Bay, Miami, and beyond. Barrett Henry coordinates statewide commercial referrals.",
    url: "https://hencre.com/remax-commercial-florida",
    type: "website",
  },
};

/* -- Region data: each region with its cities and agent counts -- */
const REGIONS = [
  {
    name: "South Florida",
    subtitle: "Broward, Miami-Dade & Palm Beach Counties",
    cities: [
      { city: "Fort Lauderdale", agents: 8 },
      { city: "Hollywood", agents: 4 },
      { city: "Wilton Manors", agents: 2 },
      { city: "Coconut Creek", agents: 1 },
      { city: "Plantation", agents: 1 },
      { city: "Miami", agents: 2 },
      { city: "Miami Lakes", agents: 1 },
      { city: "Coral Gables", agents: 1 },
      { city: "West Palm Beach", agents: 1 },
      { city: "Boynton Beach", agents: 1 },
      { city: "Wellington", agents: 1 },
      { city: "Jupiter", agents: 3 },
      { city: "Stuart", agents: 1 },
      { city: "Port St Lucie", agents: 4 },
    ],
  },
  {
    name: "Central Florida",
    subtitle: "Orlando Metro, Polk County & North Central",
    cities: [
      { city: "Orlando", agents: 4 },
      { city: "Kissimmee", agents: 3 },
      { city: "Celebration", agents: 1 },
      { city: "Maitland", agents: 1 },
      { city: "Lakeland", agents: 2 },
      { city: "Winter Haven", agents: 3 },
      { city: "Sebring", agents: 1 },
      { city: "The Villages", agents: 1 },
      { city: "Ocala", agents: 2 },
      { city: "Gainesville", agents: 3 },
      { city: "Lake City", agents: 1 },
      { city: "Saint Augustine", agents: 1 },
    ],
  },
  {
    name: "Tampa Bay",
    subtitle: "Barrett\u2019s Direct Territory",
    highlight: true, // flags this region for special treatment
    cities: [
      { city: "Lutz", agents: 1 },
      { city: "Apollo Beach", agents: 1 },
      { city: "Palm Harbor", agents: 2 },
      { city: "Bayonet Point", agents: 1 },
      { city: "Sarasota", agents: 1 },
    ],
  },
  {
    name: "Space Coast",
    subtitle: "Brevard County & Surrounding",
    cities: [
      { city: "Melbourne", agents: 1 },
      { city: "Palm Bay", agents: 1 },
      { city: "Satellite Beach", agents: 1 },
      { city: "Cocoa Beach", agents: 1 },
      { city: "Titusville", agents: 1 },
    ],
  },
  {
    name: "Southwest Florida",
    subtitle: "Lee & Charlotte Counties",
    cities: [
      { city: "Cape Coral", agents: 4 },
      { city: "Punta Gorda", agents: 2 },
      { city: "Matlacha", agents: 1 },
    ],
  },
  {
    name: "Northwest Florida",
    subtitle: "The Panhandle",
    cities: [
      { city: "Panama City Beach", agents: 2 },
      { city: "Destin", agents: 2 },
      { city: "Tallahassee", agents: 1 },
    ],
  },
];

/* -- FAQ data -- */
const FAQS = [
  {
    q: "How many REMAX Commercial Real Estate advisors are in Florida?",
    a: "REMAX Commercial® currently has 78+ dedicated commercial real estate agents operating across the state of Florida. These agents are spread across 40+ cities and 6 distinct regions, from the Panhandle to South Florida. The network continues to grow as demand for commercial expertise increases statewide.",
  },
  {
    q: "What cities does REMAX Commercial® cover in Florida?",
    a: "REMAX Commercial Real Estate advisors are located in 40+ Florida cities including Fort Lauderdale, Miami, Orlando, Tampa Bay, Sarasota, Cape Coral, Gainesville, Tallahassee, Destin, Melbourne, and many more. Coverage spans South Florida, Central Florida, Tampa Bay, the Space Coast, Southwest Florida, and Northwest Florida (the Panhandle).",
  },
  {
    q: "How do I connect with a REMAX Commercial Real Estate advisor in my area?",
    a: "Contact Barrett Henry at (813) 733-7907 or barrett@nowtb.com. As a Broker Associate at REMAX Collective, Barrett coordinates commercial referrals statewide. He will connect you with the right REMAX Commercial Real Estate advisor for your market and property type — whether you need an agent in Fort Lauderdale, Orlando, Miami, or any other Florida city.",
  },
  {
    q: "Can Barrett Henry help with deals outside Tampa Bay?",
    a: "Yes. While Barrett serves the Tampa Bay market directly from three REMAX Collective offices in Tampa, Largo, and Brandon, he coordinates commercial deals across all 67 Florida counties through the REMAX Commercial® referral network. For transactions outside Tampa Bay, Barrett connects clients with local REMAX Commercial® specialists who know that market.",
  },
  {
    q: "How does the REMAX Commercial® referral network work?",
    a: "The REMAX referral network is the largest in real estate — connecting 145,000+ agents across 120+ countries. When you contact Barrett Henry about a commercial deal in any Florida market, he identifies the best REMAX Commercial Real Estate advisor for that area and property type, makes the introduction, and stays involved to ensure quality service throughout the transaction. You get local expertise backed by a global network, with Barrett as your single point of contact.",
  },
] as const;

/* -- Schema.org structured data: BreadcrumbList + FAQPage -- */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://hencre.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "REMAX Commercial®",
          item: "https://hencre.com/remax-commercial",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Florida Agents",
          item: "https://hencre.com/remax-commercial-florida",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://hencre.com/remax-commercial-florida/#faq",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ],
};

export default function RemaxCommercialFloridaPage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      {/* ---- Breadcrumbs ---- */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8"
      >
        <ol className="flex text-sm text-[#666666]">
          <li>
            <Link href="/" className="hover:underline no-underline">
              Home
            </Link>
          </li>
          <li className="mx-2">/</li>
          <li>
            <Link href="/remax-commercial" className="hover:underline no-underline">
              REMAX Commercial®
            </Link>
          </li>
          <li className="mx-2">/</li>
          <li className="font-semibold text-black" aria-current="page">
            Florida Agents
          </li>
        </ol>
      </nav>

      {/* ---- Hero ---- */}
      <Hero
        title="REMAX Commercial® Agents Across Florida"
        subtitle="78+ commercial REALTORS® in 40+ cities. Barrett Henry, Broker Associate at REMAX Collective, coordinates statewide commercial referrals."
        ctaText="Contact Barrett"
        ctaHref="/contact"
      />

      {/* ---- Intro Section ---- */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Statewide Commercial Coverage Through REMAX Commercial®
        </h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#666666]">
          <p>
            REMAX Commercial® has commercial real estate agents stationed across
            every major market in Florida. From the Panhandle to South Florida,
            78+ dedicated commercial REALTORS® cover 40+ cities — handling
            office, retail, industrial, multifamily, land, and investment
            properties every day.
          </p>
          <p>
            Barrett Henry, REALTOR® and Broker Associate at REMAX Collective,
            serves as a coordination point for commercial deals statewide.
            Whether you need a commercial REALTOR® in Fort Lauderdale, Orlando,
            Tampa, Miami, or anywhere in between, the REMAX Commercial® network
            has you covered. Barrett connects clients with the right agent for
            their market and property type, ensuring local expertise on every
            deal.
          </p>
          <p>
            This page maps the REMAX Commercial® footprint across Florida by
            region and city. If you have a commercial real estate need anywhere
            in the state, Barrett is your single point of contact to access the
            full network.
          </p>
        </div>
      </section>

      {/* ---- Stats Bar ---- */}
      <section className="bg-[#1a1a1a] px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { stat: "78+", label: "Commercial Agents in Florida" },
              { stat: "40+", label: "Florida Cities Covered" },
              { stat: "6", label: "Regions Statewide" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-white/10 bg-white/5 p-6 text-center"
              >
                <p className="text-3xl font-bold text-white">
                  {item.stat}
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Regional Sections ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            REMAX Commercial® Agents by Region
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[#666666]">
            Six regions, 40+ cities, 78+ commercial REALTORS® ready to serve
            your Florida market.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {REGIONS.map((region) => {
              /* Total agents in this region */
              const totalAgents = region.cities.reduce(
                (sum, c) => sum + c.agents,
                0,
              );

              return (
                <div
                  key={region.name}
                  className={`rounded-lg border p-6 ${
                    region.highlight
                      ? "border-black bg-black/5"
                      : "border-[#E5E5E5] bg-white"
                  }`}
                >
                  {/* Region header */}
                  <h3 className="text-lg font-bold text-black">
                    {region.name}
                  </h3>
                  <p className="text-sm text-[#666666]">{region.subtitle}</p>
                  <p className="mt-1 text-xs font-semibold text-black">
                    {totalAgents} agent{totalAgents !== 1 ? "s" : ""}
                  </p>

                  {/* City list */}
                  <ul className="mt-4 space-y-1">
                    {region.cities.map((c) => (
                      <li
                        key={c.city}
                        className="flex items-center justify-between text-sm text-[#666666]"
                      >
                        <span>{c.city}</span>
                        <span className="font-semibold">
                          {c.agents} agent{c.agents !== 1 ? "s" : ""}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Special note for Tampa Bay */}
                  {region.highlight && (
                    <p className="mt-4 rounded bg-[#1a1a1a]/5 p-3 text-xs leading-relaxed text-black">
                      Barrett Henry serves Tampa Bay directly with three REMAX
                      Collective offices in Tampa, Largo, and Brandon.
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---- CTA: Need a commercial REALTOR? ---- */}
      <section className="bg-[#1a1a1a] px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Need a Commercial REALTOR® in Your Florida Market?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Barrett Henry coordinates REMAX Commercial® referrals across all 67
            Florida counties. One call connects you with the right agent for
            your deal — no matter where the property is.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-black no-underline transition-colors hover:bg-[#E5E5E5] hover:no-underline"
            >
              Contact Barrett
            </Link>
            <Link
              href="/refer-a-deal"
              className="inline-block rounded-lg border border-white/30 px-8 py-3 font-semibold text-white no-underline transition-colors hover:bg-white/10 hover:no-underline"
            >
              Refer a Deal
            </Link>
          </div>
        </div>
      </section>

      {/* ---- FAQ Section ---- */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            REMAX Commercial Real Estate — Frequently Asked Questions
          </h2>
          <dl className="mt-10 space-y-6">
            {FAQS.map((faq) => (
              <div key={faq.q} className="border-b border-[#E5E5E5] pb-6">
                <dt className="text-lg font-semibold text-black">{faq.q}</dt>
                <dd className="mt-2 text-[#666666]">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---- Bottom CTA ---- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Have a Commercial Deal to Refer?
          </h2>
          <p className="mt-4 text-lg text-[#666666]">
            If you are an agent with a commercial client who needs representation
            in any Florida market, Barrett Henry can coordinate the referral
            through the REMAX Commercial® network.
          </p>
          <Link
            href="/refer-a-deal"
            className="mt-6 inline-block rounded-lg bg-[#1a1a1a] px-8 py-3 font-semibold text-white no-underline transition-colors hover:bg-[#1a1a1a]/90 hover:no-underline"
          >
            Submit a Referral
          </Link>
        </div>
      </section>
    </>
  );
}
