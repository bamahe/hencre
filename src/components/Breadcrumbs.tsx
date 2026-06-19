/**
 * src/components/Breadcrumbs.tsx
 *
 * Full-width white breadcrumb bar with Home icon, chevron separators,
 * and BreadcrumbList JSON-LD schema for rich search results.
 * Sits above hero sections — never inside them.
 */

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import SchemaOrg from "./SchemaOrg";

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[]; variant?: string }) {
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

      {/* Visible breadcrumb bar — full-width white with bottom border */}
      <nav aria-label="Breadcrumb" className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <ol className="flex items-center gap-1 text-sm text-slate-500">
            {/* Home icon link */}
            <li>
              <Link href="/" className="hover:text-black flex items-center gap-1">
                <Home className="w-3.5 h-3.5" />
                <span className="sr-only">Home</span>
              </Link>
            </li>
            {/* Breadcrumb trail */}
            {items.map((item, i) => (
              <li key={item.href} className="flex items-center gap-1">
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                {i === items.length - 1 ? (
                  <span className="text-black font-semibold" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-black">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
