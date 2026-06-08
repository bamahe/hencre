import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SchemaOrg from "./SchemaOrg";

/* -------------------------------------------------------------------
 * Breadcrumbs — renders a breadcrumb trail with separators and
 * BreadcrumbList structured data for SEO.
 * Server component.
 * ----------------------------------------------------------------- */

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  /* Build the BreadcrumbList JSON-LD schema */
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://hencre.com${item.href}`,
    })),
  };

  return (
    <>
      {/* Structured data */}
      <SchemaOrg schema={schema} />

      {/* Visual breadcrumb trail */}
      <nav aria-label="Breadcrumb" className="px-4 py-3 sm:px-6 lg:px-8">
        <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1 text-sm text-[#666666]">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1">
                {/* Separator between items (not before the first) */}
                {index > 0 && (
                  <ChevronRight className="h-3.5 w-3.5 text-[#666666]/50" aria-hidden="true" />
                )}

                {isLast ? (
                  /* Current page — not a link */
                  <span aria-current="page" className="font-semibold text-black">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-[#666666] no-underline hover:text-black hover:no-underline"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
