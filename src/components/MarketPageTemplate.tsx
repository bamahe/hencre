import Hero from "./Hero";
import LeadForm from "./LeadForm";
import FAQAccordion from "./FAQAccordion";
import RelatedLinks from "./RelatedLinks";
import SchemaOrg from "./SchemaOrg";
import Breadcrumbs from "./Breadcrumbs";

/* -------------------------------------------------------------------
 * MarketPageTemplate — layout for county-level market pages.
 * Includes hero, market overview, property types, services,
 * lead form, FAQ, and related links.
 * Server component (child client components handle interactivity).
 * ----------------------------------------------------------------- */

interface FAQItem {
  question: string;
  answer: string;
}

interface RelatedLink {
  title: string;
  href: string;
  description?: string;
}

interface MarketPageTemplateProps {
  /** County name (e.g. "Hillsborough") */
  county: string;
  /** Service tier for this county (e.g. "direct" or "referral") */
  tier: string;
  /** Main content sections rendered as children */
  children: React.ReactNode;
  /** Property types available in this market */
  propertyTypes?: string[];
  /** Services offered in this market */
  services?: string[];
  /** FAQ items */
  faqItems?: FAQItem[];
  /** Related market/county pages */
  relatedLinks?: RelatedLink[];
}

export default function MarketPageTemplate({
  county,
  tier,
  children,
  propertyTypes = [],
  services = [],
  faqItems = [],
  relatedLinks = [],
}: MarketPageTemplateProps) {
  /* Build breadcrumbs */
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Markets", href: "/markets" },
    { label: `${county} County`, href: `/markets/${county.toLowerCase().replace(/\s+/g, "-")}` },
  ];

  /* Build JSON-LD for the page */
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${county} County Commercial Real Estate`,
    description: `Commercial real estate services in ${county} County, Florida. Leasing, sales, investment, and dispositions.`,
    url: `https://hencre.com/markets/${county.toLowerCase().replace(/\s+/g, "-")}`,
  };

  return (
    <>
      <SchemaOrg schema={schema} />

      {/* Hero */}
      <Hero
        title={`${county} County Commercial Real Estate`}
        subtitle={`CRE leasing, sales, investment, and dispositions in ${county} County, Florida.`}
        ctaText="Get Started"
        ctaHref="#lead-form"
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Main content passed as children */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {children}
      </section>

      {/* Property types grid (if provided) */}
      {propertyTypes.length > 0 && (
        <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-6 text-2xl font-bold text-black">
              Property Types in {county} County
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {propertyTypes.map((type) => (
                <div
                  key={type}
                  className="rounded-lg border border-[#666666]/10 px-4 py-3 text-sm font-semibold text-black"
                >
                  {type}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services list (if provided) */}
      {services.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-black">
            Our Services in {county} County
          </h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {services.map((service) => (
              <li
                key={service}
                className="flex items-center gap-2 text-sm text-[#666666]"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                {service}
              </li>
            ))}
          </ul>
          {/* Show tier badge */}
          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-[#666666]/60">
            Service tier: {tier}
          </p>
        </section>
      )}

      {/* Lead form */}
      <section
        id="lead-form"
        className="bg-[#F5F5F5] px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-xl">
          <LeadForm />
        </div>
      </section>

      {/* FAQ */}
      {faqItems.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-center text-2xl font-bold text-black">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqItems} />
        </section>
      )}

      {/* Related links */}
      {relatedLinks.length > 0 && (
        <RelatedLinks links={relatedLinks} heading="Explore Other Markets" />
      )}
    </>
  );
}
