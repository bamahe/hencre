import Hero from "./Hero";
import RelatedLinks from "./RelatedLinks";
import SchemaOrg from "./SchemaOrg";
import Breadcrumbs from "./Breadcrumbs";

/* -------------------------------------------------------------------
 * PropertyTypeTemplate — layout for property type pillar pages
 * (e.g. Office, Retail, Industrial, Multifamily, etc.).
 * Includes hero, description, content body, markets list, and
 * related links.
 * Server component.
 * ----------------------------------------------------------------- */

interface MarketLink {
  title: string;
  href: string;
  description?: string;
}

interface PropertyTypeTemplateProps {
  /** Property type name (e.g. "Office Space") */
  propertyType: string;
  /** Short description for the hero subtitle */
  description: string;
  /** Main page content rendered as children */
  children: React.ReactNode;
  /** List of market pages where this type is available */
  markets?: MarketLink[];
}

export default function PropertyTypeTemplate({
  propertyType,
  description,
  children,
  markets = [],
}: PropertyTypeTemplateProps) {
  /* URL-safe slug */
  const slug = propertyType.toLowerCase().replace(/\s+/g, "-");

  /* Breadcrumbs */
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Property Types", href: "/property-types" },
    { label: propertyType, href: `/property-types/${slug}` },
  ];

  /* JSON-LD */
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${propertyType} — Commercial Real Estate`,
    description,
    url: `https://hencre.com/property-types/${slug}`,
  };

  return (
    <>
      <SchemaOrg schema={schema} />

      {/* Hero */}
      <Hero
        title={propertyType}
        subtitle={description}
        ctaText="Find Available Space"
        ctaHref="/contact"
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Main content */}
      <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="prose prose-slate max-w-none [&_h2]:text-navy [&_h3]:text-navy [&_a]:text-accent-blue">
          {children}
        </div>
      </section>

      {/* Markets where this property type is available */}
      {markets.length > 0 && (
        <RelatedLinks
          links={markets}
          heading={`${propertyType} Markets in Florida`}
        />
      )}
    </>
  );
}
