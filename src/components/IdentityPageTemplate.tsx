import Hero from "./Hero";
import LeadForm from "./LeadForm";
import SchemaOrg from "./SchemaOrg";
import Breadcrumbs from "./Breadcrumbs";

/* -------------------------------------------------------------------
 * IdentityPageTemplate — layout for keyword/identity landing pages
 * (e.g. "commercial-real-estate-agent-tampa").
 * Targets long-tail search queries tying a role keyword to a city/county.
 * Server component.
 * ----------------------------------------------------------------- */

interface IdentityPageTemplateProps {
  /** Target city (e.g. "Tampa") */
  city: string;
  /** County name (e.g. "Hillsborough") */
  county: string;
  /** Role keyword (e.g. "Commercial Real Estate Agent") */
  roleKeyword: string;
  /** Main page content rendered as children */
  children: React.ReactNode;
}

export default function IdentityPageTemplate({
  city,
  county,
  roleKeyword,
  children,
}: IdentityPageTemplateProps) {
  /* Build a URL-safe slug from the role keyword and city */
  const slug = `${roleKeyword}-${city}`
    .toLowerCase()
    .replace(/\s+/g, "-");

  /* Breadcrumbs */
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Markets", href: "/markets" },
    {
      label: `${county} County`,
      href: `/markets/${county.toLowerCase().replace(/\s+/g, "-")}`,
    },
    { label: `${roleKeyword} in ${city}`, href: `/${slug}` },
  ];

  /* JSON-LD */
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `Barrett Henry — ${roleKeyword} in ${city}, FL`,
    description: `${roleKeyword} serving ${city} and ${county} County, Florida. Leasing, sales, investment, and dispositions.`,
    url: `https://hencre.com/${slug}`,
    areaServed: {
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: `${county} County, FL`,
      },
    },
    telephone: "(813) 733-7907",
    email: "barrett@hencre.com",
  };

  return (
    <>
      <SchemaOrg schema={schema} />

      {/* Hero */}
      <Hero
        title={`${roleKeyword} in ${city}, Florida`}
        subtitle={`Serving commercial buyers, sellers, tenants, and landlords across ${county} County.`}
        ctaText="Contact Barrett"
        ctaHref="#lead-form"
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Main content */}
      <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="prose prose-slate max-w-none [&_h2]:text-black [&_h3]:text-black [&_a]:text-black">
          {children}
        </div>
      </section>

      {/* Lead form */}
      <section
        id="lead-form"
        className="bg-[#F5F5F5] px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-xl">
          <LeadForm />
        </div>
      </section>
    </>
  );
}
