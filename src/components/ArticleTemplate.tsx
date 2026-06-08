import Image from "next/image";
import Breadcrumbs from "./Breadcrumbs";
import SchemaOrg from "./SchemaOrg";

/* -------------------------------------------------------------------
 * ArticleTemplate — layout wrapper for insight/blog articles.
 * Includes breadcrumbs, hero image, article body, and a slot for
 * related links (passed as children after the main content).
 * Server component.
 * ----------------------------------------------------------------- */

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface ArticleTemplateProps {
  /** Article headline */
  title: string;
  /** Meta description / summary */
  description: string;
  /** ISO date string (e.g. "2026-06-07") */
  publishedDate: string;
  /** Author name */
  author: string;
  /** Hero image path (from /public or remote URL) */
  heroImage?: string;
  /** Breadcrumb trail */
  breadcrumbs: BreadcrumbItem[];
  /** JSON-LD structured data for the article */
  schema: Record<string, unknown>;
  /** Article body + optional related links section */
  children: React.ReactNode;
}

export default function ArticleTemplate({
  title,
  description,
  publishedDate,
  author,
  heroImage,
  breadcrumbs,
  schema,
  children,
}: ArticleTemplateProps) {
  /* Format the date for display */
  const displayDate = new Date(publishedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* Structured data */}
      <SchemaOrg schema={schema} />

      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Hero image */}
      {heroImage && (
        <div className="relative mx-auto h-64 max-w-7xl overflow-hidden sm:h-80 lg:h-96">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Article content */}
      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-lg text-[#666666]">{description}</p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[#666666]/70">
            <span>By {author}</span>
            <span aria-hidden="true">&middot;</span>
            <time dateTime={publishedDate}>{displayDate}</time>
          </div>
        </header>

        {/* Body — rendered from children (MDX, rich text, etc.) */}
        <div className="prose prose-slate max-w-none [&_h2]:text-black [&_h3]:text-black [&_a]:text-black">
          {children}
        </div>
      </article>
    </>
  );
}
