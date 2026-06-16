import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";
import { ContactForm } from "./contact/ContactForm";

/* -------------------------------------------------------------------
 * Home Page — hencre.com
 * Hero, intro, services overview, property types, Tampa Bay focus,
 * lead form placeholder, FAQ section, and structured data.
 * Optimized for SEO, AEO, and GEO with semantic HTML, ToC,
 * strong/em emphasis, figure/figcaption, and BreadcrumbList schema.
 * ----------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "REMAX Commercial Real Estate Florida | Barrett Henry",
  description:
    "Barrett Henry — REMAX Commercial Real Estate Advisor in Tampa Bay. Tenant rep, investment sales, landlord leasing, and CRE valuation across all 67 Florida counties.",
  alternates: { canonical: "https://hencre.com" },
  openGraph: {
    title: "REMAX Commercial Real Estate Florida | Barrett Henry",
    description:
      "Barrett Henry — REMAX Commercial Real Estate Advisor in Tampa Bay. Tenant rep, investment sales, landlord leasing, and CRE valuation across all 67 Florida counties.",
    url: "https://hencre.com",
    images: [{ url: "https://hencre.com/og-image.png", width: 1200, height: 630, alt: "HenCRE — REMAX Commercial Real Estate Florida" }],
  },
};

/* -- Service cards data -- */
const SERVICES = [
  {
    title: "Tenant Representation",
    description:
      "Find the right space at the right terms. I negotiate on your behalf so you can focus on running your business.",
    href: "/services/tenant-representation",
  },
  {
    title: "Landlord Leasing",
    description:
      "Fill vacancies faster with qualified tenants. Strategic marketing, competitive analysis, and lease negotiation.",
    href: "/services/landlord-leasing",
  },
  {
    title: "Investment Sales",
    description:
      "Acquire income-producing properties or sell at peak value. Data-driven analysis for confident decisions.",
    href: "/services/investment-sales",
  },
  {
    title: "Dispositions",
    description:
      "Maximize proceeds when it is time to exit. Positioning, marketing, and deal structuring for optimal results.",
    href: "/services/dispositions",
  },
  {
    title: "CRE Valuation",
    description:
      "Broker opinion of value, comp analysis, and market positioning. Know what your property is worth before you act.",
    href: "/services/cre-valuation",
  },
  {
    title: "Referral Network",
    description:
      "Got a commercial deal outside your lane? Refer it to me and earn a referral fee. Licensed agents welcome.",
    href: "/refer-a-deal",
  },
] as const;

/* -- Property type cards data -- */
const PROPERTY_TYPES = [
  {
    title: "Office Space",
    description: "Class A, B, and C office — from single-tenant to multi-story.",
    href: "/commercial/office-space",
  },
  {
    title: "Retail Space",
    description: "Strip centers, standalone pads, and mixed-use retail.",
    href: "/commercial/retail-space",
  },
  {
    title: "Industrial & Warehouse",
    description: "Distribution, flex, manufacturing, and cold storage.",
    href: "/commercial/industrial-warehouse",
  },
  {
    title: "Multifamily",
    description: "Apartment complexes and multi-unit residential investments.",
    href: "/commercial/multifamily",
  },
  {
    title: "NNN / Net Lease",
    description: "Triple-net investments with stable, long-term cash flow.",
    href: "/commercial/nnn-net-lease",
  },
  {
    title: "Land & Development",
    description: "Entitled and raw land for commercial and mixed-use development.",
    href: "/commercial/land-development",
  },
] as const;

/* -- FAQ data -- */
const FAQS = [
  {
    q: "What does a commercial real estate broker actually do?",
    a: "A CRE broker represents buyers, sellers, tenants, or landlords in commercial property transactions. I handle market analysis, property search, lease and purchase negotiation, due diligence coordination, and closing — so you can make informed decisions without the guesswork.",
  },
  {
    q: "How is commercial real estate different from residential?",
    a: "Commercial deals involve income-producing properties — office, retail, industrial, multifamily, and land. Valuations are based on income (cap rates, NOI), not comparable home sales. Leases are longer, more complex, and negotiable. The stakes are higher and the process demands specialized expertise.",
  },
  {
    q: "Do I pay a commission as a tenant?",
    a: "In most commercial lease transactions, the landlord pays the commission. As your tenant rep, I negotiate on your behalf at no direct cost to you. My job is to get you the best space at the best terms.",
  },
  {
    q: "What areas of Florida do you cover?",
    a: "I am anchored in Tampa Bay but work across all 67 Florida counties. For deals outside my core market, I leverage a statewide network of trusted brokers to ensure you get local expertise wherever the deal is.",
  },
  {
    q: "How long does a commercial lease negotiation take?",
    a: "Timelines vary based on complexity, but most lease negotiations run 30 to 90 days from LOI to executed lease. Larger or build-to-suit deals can take longer. I set clear milestones so you know exactly where things stand.",
  },
  {
    q: "What is a cap rate and why does it matter?",
    a: "A capitalization rate (cap rate) is net operating income divided by purchase price. It measures the expected return on an investment property. Lower cap rates typically indicate lower risk and higher-value markets. I help you interpret cap rates in context — not all 6-caps are created equal.",
  },
  {
    q: "Can you help with 1031 exchanges?",
    a: "I am not a tax advisor, but I regularly work with investors executing 1031 exchanges. I coordinate with your qualified intermediary and identify replacement properties within the strict IRS timelines so you defer capital gains and keep your money working.",
  },
] as const;

/* -- Schema.org structured data (includes BreadcrumbList for homepage) -- */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://hencre.com/#organization",
      name: "REMAX Commercial Real Estate",
      url: "https://hencre.com",
      logo: "https://hencre.com/logo.png",
      description:
        "REMAX Commercial® real estate brokerage serving all 67 Florida counties.",
      parentOrganization: {
        "@type": "Organization",
        name: "REMAX Commercial®",
        url: "https://www.remaxcommercial.com",
      },
      sameAs: [
        "https://www.remaxcommercial.com",
        "https://nowtb.com",
        "https://barretthenry.remax.com",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-813-733-7907",
        email: "barrett@nowtb.com",
        contactType: "sales",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://hencre.com/#website",
      url: "https://hencre.com",
      name: "REMAX Commercial Real Estate",
      publisher: { "@id": "https://hencre.com/#organization" },
    },
    {
      "@type": "RealEstateAgent",
      "@id": "https://hencre.com/#agent",
      name: "Barrett Henry",
      image: "https://hencre.com/images/barrett-henry-headshot.jpg",
      jobTitle: "Commercial Real Estate Advisor",
      worksFor: {
        "@type": "RealEstateAgent",
        name: "REMAX Collective",
      },
      memberOf: {
        "@type": "Organization",
        name: "REMAX Commercial®",
        url: "https://www.remaxcommercial.com",
      },
      url: "https://hencre.com",
      telephone: "+1-813-733-7907",
      email: "barrett@nowtb.com",
      sameAs: [
        "https://www.remaxcommercial.com",
        "https://nowtb.com",
        "https://barretthenry.remax.com",
        "https://vivipm.com",
        "https://valricopropertymgmt.com",
      ],
      areaServed: {
        "@type": "State",
        name: "Florida",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://hencre.com/#tampa-office",
      name: "REMAX Commercial Real Estate — Tampa Office",
      address: {
        "@type": "PostalAddress",
        streetAddress: "14310 N Dale Mabry Hwy Ste 100",
        addressLocality: "Tampa",
        addressRegion: "FL",
        postalCode: "33618",
      },
      telephone: "+1-813-733-7907",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://hencre.com/#largo-office",
      name: "REMAX Commercial Real Estate — Largo Office",
      address: {
        "@type": "PostalAddress",
        streetAddress: "11200 Seminole Blvd Ste 202",
        addressLocality: "Largo",
        addressRegion: "FL",
        postalCode: "33778",
      },
      telephone: "+1-813-733-7907",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://hencre.com/#brandon-office",
      name: "REMAX Commercial Real Estate — Brandon Office",
      address: {
        "@type": "PostalAddress",
        streetAddress: "417 Lithia Pinecrest Rd",
        addressLocality: "Brandon",
        addressRegion: "FL",
        postalCode: "33511",
      },
      telephone: "+1-813-733-7907",
    },
    {
      "@type": "FAQPage",
      "@id": "https://hencre.com/#faq",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
    /* BreadcrumbList — homepage is the root */
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://hencre.com",
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <SchemaOrg schema={schema} />

      {/* ---- Hero with inline form ---- */}
      <Hero
        title="Tampa Bay Commercial Real Estate — A Better Way"
        subtitle="REMAX Commercial® broker based in Tampa Bay, serving commercial clients across all of Florida. Tenant rep, landlord leasing, investment sales, and dispositions."
        showVideo
      >
        <ContactForm />
      </Hero>

      {/* ---- Main content wrapped in <article> for semantic structure ---- */}
      <article>

        {/* ---- Table of Contents ---- */}
        <nav id="table-of-contents" aria-label="Table of contents" className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#666666]">On This Page</p>
          <ol className="list-decimal list-inside space-y-1 text-sm text-[#666666]">
            <li><a href="#remax-commercial-network" className="hover:text-black hover:underline">REMAX Commercial Network</a></li>
            <li><a href="#commercial-real-estate-across-florida" className="hover:text-black hover:underline">Commercial Real Estate Across Florida</a></li>
            <li><a href="#cre-services" className="hover:text-black hover:underline">CRE Services — How I Can Help</a></li>
            <li><a href="#commercial-property-types" className="hover:text-black hover:underline">Commercial Property Types</a></li>
            <li><a href="#tampa-bay-commercial-market" className="hover:text-black hover:underline">Tampa Bay Commercial Market</a></li>
            <li><a href="#get-started" className="hover:text-black hover:underline">Ready to Make a Move?</a></li>
            <li><a href="#cre-faq" className="hover:text-black hover:underline">Frequently Asked Questions</a></li>
          </ol>
        </nav>

        {/* ---- REMAX Commercial® Network section ---- */}
        <section id="remax-commercial-network" className="bg-[#1a1a1a] px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="text-center text-sm font-semibold tracking-widest uppercase text-white/60">
              REMAX Commercial®
            </p>
            <h2 className="mt-2 text-center text-2xl font-bold text-white sm:text-3xl">
              Backed by the <strong>REMAX Commercial® Network</strong>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-white/80">
              <em>&ldquo;A better way in commercial real estate.&rdquo;</em>
            </p>

            {/* Key stats — structured as a list for crawlers */}
            <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 list-none p-0">
              {/* Stat card: Global Presence */}
              <li className="rounded-lg border border-white/10 bg-white/5 p-6 text-center">
                <p className="text-3xl font-bold text-white"><strong>120+</strong></p>
                <p className="mt-1 text-sm font-semibold text-white">Countries &amp; Territories</p>
                <p className="mt-2 text-sm text-white/60">
                  REMAX operates in more countries than <em>any other real estate brand</em> on the planet.
                </p>
              </li>

              {/* Stat card: Agent Network */}
              <li className="rounded-lg border border-white/10 bg-white/5 p-6 text-center">
                <p className="text-3xl font-bold text-white"><strong>145,000+</strong></p>
                <p className="mt-1 text-sm font-semibold text-white">Agents Worldwide</p>
                <p className="mt-2 text-sm text-white/60">
                  The largest network of real estate professionals — including <strong>commercial specialists</strong> across every major market.
                </p>
              </li>

              {/* Stat card: Offices */}
              <li className="rounded-lg border border-white/10 bg-white/5 p-6 text-center">
                <p className="text-3xl font-bold text-white"><strong>9,000+</strong></p>
                <p className="mt-1 text-sm font-semibold text-white">Offices Globally</p>
                <p className="mt-2 text-sm text-white/60">
                  Each independently owned and operated — <em>local expertise</em> backed by global infrastructure.
                </p>
              </li>
            </ul>

            <div className="mt-10 space-y-4 text-lg leading-relaxed text-white/80 max-w-3xl mx-auto">
              <p>
                <strong>REMAX Commercial®</strong> is a division of the world&apos;s most recognized real estate
                brand. Founded in 1973, REMAX has spent over <strong>50 years</strong> building a network
                that spans 120+ countries and territories — giving commercial clients access
                to listings, market data, and referral relationships that no independent
                brokerage can match.
              </p>
              <p>
                REMAX Commercial Real Estate advisors specialize exclusively in <em>commercial property</em> —
                office, retail, industrial, multifamily, land, hospitality, and specialty
                assets like marinas. Barrett brings the full resources of this global network
                to every Florida deal, including <strong>MAXRefer</strong> for AI-powered referral matching
                across 145,000+ agents, <strong>RealNex Marketplace</strong> for commercial listing exposure,
                and <strong>REMAX Hall of Fame recognition</strong> backed by the most powerful referral
                system in commercial real estate.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/remax-commercial"
                className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-black no-underline transition-colors hover:bg-[#E5E5E5] hover:no-underline"
              >
                Learn About REMAX Commercial®
              </Link>
            </div>
          </div>
        </section>

        {/* ---- Intro section with headshot for EEAT ---- */}
        <section id="commercial-real-estate-across-florida" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
            <Image
              src="/images/barrett-henry-headshot.jpg"
              alt="Barrett Henry — REMAX Commercial Real Estate Advisor, Tampa Bay FL"
              width={140}
              height={140}
              className="rounded-xl border-2 border-[#E5E5E5] shrink-0"
            />
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                <strong>Commercial Real Estate</strong> Across Florida
              </h2>
              <p className="mt-2 text-sm text-[#666666]">
                <strong>Barrett Henry</strong> · Broker Associate, <a href="https://www.remaxcommercial.com" className="underline hover:text-black" target="_blank" rel="noopener">REMAX Commercial®</a> · <a href="https://barretthenry.remax.com" className="underline hover:text-black" target="_blank" rel="noopener">REMAX Collective</a> · REMAX Hall of Fame 2024
              </p>
            </div>
          </div>
          <p className="mt-4 text-lg leading-relaxed text-[#666666]">
            Whether you are leasing your first office, acquiring a <strong>multifamily portfolio</strong>,
            or selling a retail center, the right broker makes the difference between a
            good deal and a great one. As a <strong>REMAX Commercial® broker</strong>, I bring 23+ years of real estate experience to
            every engagement — <em>deep market knowledge</em>, honest guidance, and relentless
            execution backed by the world&apos;s most recognized real estate network. No committee. No runaround. Just results.
          </p>

          {/* Additional content to strengthen thin section */}
          <h3 className="mt-8 text-xl font-bold">What Sets a CRE Specialist Apart?</h3>
          <p className="mt-3 text-lg leading-relaxed text-[#666666]">
            Commercial real estate transactions are fundamentally different from residential deals. Valuations rely on <strong>net operating income</strong> and <strong>cap rates</strong>, not comparable home sales. Leases run 5 to 15 years with escalation clauses, CAM charges, and tenant improvement allowances that require specialized negotiation. A dedicated CRE advisor understands these mechanics and protects your bottom line at every stage.
          </p>
          <ul className="mt-4 space-y-2 text-[#666666] list-disc list-inside">
            <li><strong>Income-based valuations</strong> — cap rate analysis, NOI projections, and market comparables</li>
            <li><strong>Complex lease structures</strong> — NNN, modified gross, full-service, and percentage leases</li>
            <li><strong>Due diligence coordination</strong> — environmental, zoning, title, and financial review</li>
            <li><strong>1031 exchange navigation</strong> — strict <a href="https://www.irs.gov/publications/p544" className="underline hover:text-black" target="_blank" rel="noopener">IRS timelines</a> and replacement property identification</li>
          </ul>

        </section>

        {/* ---- Services overview ---- */}
        <section id="cre-services" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-2xl font-bold sm:text-3xl">
              How Can a <strong>CRE Broker</strong> Help?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-[#666666]">
              Full-service <em>commercial real estate</em> — from first showing to closing table.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((svc) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="group rounded-lg border border-[#E5E5E5] p-6 no-underline transition-shadow hover:shadow-md hover:no-underline"
                >
                  <h3 className="text-lg font-bold text-black group-hover:text-black">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#666666]">{svc.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Property types overview ---- */}
        <section id="commercial-property-types" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-2xl font-bold sm:text-3xl">
              What <strong>Commercial Property Types</strong> Does Barrett Handle?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-[#666666]">
              Every asset class. <em>One broker who knows them all.</em>
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PROPERTY_TYPES.map((pt) => (
                <Link
                  key={pt.href}
                  href={pt.href}
                  className="group rounded-lg border border-[#E5E5E5] bg-white p-6 no-underline transition-shadow hover:shadow-md hover:no-underline"
                >
                  <h3 className="text-lg font-bold text-black group-hover:text-black">
                    {pt.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#666666]">{pt.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Tampa Bay focus ---- */}
        <section id="tampa-bay-commercial-market" className="bg-[#1a1a1a] px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Why Is <strong>Tampa Bay</strong> a Top CRE Market?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              Tampa Bay is one of the <strong>fastest-growing commercial markets</strong> in the
              Southeast. With three REMAX Collective offices across <em>Tampa, Largo, and
              Brandon</em>, I cover Hillsborough, Pinellas, Pasco, Polk, and Manatee counties
              with boots-on-the-ground knowledge. For deals anywhere else in Florida, I
              tap a statewide network of trusted brokers to get the job done right.
            </p>

            {/* Additional depth for GEO — Tampa Bay market context */}
            <p className="mt-4 text-base leading-relaxed text-white/70">
              According to the <a href="https://tampabayedc.com" className="underline text-white/90 hover:text-white" target="_blank" rel="noopener">Tampa Bay Economic Development Council</a>, the region added over 50,000 jobs in 2024 and continues to attract corporate relocations, warehouse-distribution demand along the <a href="https://www.fdot.gov" className="underline text-white/90 hover:text-white" target="_blank" rel="noopener">I-4 corridor</a>, and multifamily investment driven by population growth. Whether you are looking at a <strong>NNN retail pad</strong> in Brandon or a <strong>Class A office lease</strong> in Westshore, local market insight matters.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-black no-underline transition-colors hover:bg-[#E5E5E5] hover:no-underline"
              >
                Talk to Barrett
              </Link>
            </div>
          </div>
        </section>

        {/* ---- Bottom CTA ---- */}
        <section id="get-started" className="bg-[#1a1a1a] px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to Make a Move?
            </h2>
            <p className="mt-3 text-white/80">
              Whether you are leasing, buying, selling, or just exploring — <em>the conversation starts here</em>.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#lead-form"
                className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-black no-underline transition-colors hover:bg-[#E5E5E5] hover:no-underline"
              >
                Fill Out the Form
              </a>
              <a
                href="tel:+18137337907"
                className="inline-block rounded-lg border border-white/30 px-8 py-3 font-semibold text-white no-underline transition-colors hover:bg-white/10 hover:no-underline"
              >
                Call (813) 733-7907
              </a>
            </div>
          </div>
        </section>

        {/* ---- FAQ section ---- */}
        <section id="cre-faq" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-bold sm:text-3xl">
              Frequently Asked <strong>Commercial Real Estate</strong> Questions
            </h2>
            <dl className="mt-10 space-y-6">
              {FAQS.map((faq) => (
                <div key={faq.q} className="border-b border-[#E5E5E5] pb-6">
                  <dt className="text-lg font-semibold text-black">{faq.q}</dt>
                  <dd className="mt-2 text-[#666666]">{faq.a}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 text-center">
              <Link
                href="/faq"
                className="text-black font-semibold no-underline hover:underline"
              >
                View all FAQs &rarr;
              </Link>
            </div>
          </div>
        </section>

      </article>

      {/* ---- Last updated ---- */}
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-xs text-[#666666]">Last updated: June 2026</p>
      </div>
    </>
  );
}
