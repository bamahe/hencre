import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* -------------------------------------------------------------------
 * RelatedLinks — grid of internal link cards for cross-linking pages.
 * Server component.
 * ----------------------------------------------------------------- */

interface RelatedLink {
  title: string;
  href: string;
  description?: string;
}

interface RelatedLinksProps {
  links: RelatedLink[];
  /** Optional section heading above the grid */
  heading?: string;
}

export default function RelatedLinks({
  links,
  heading = "Related Pages",
}: RelatedLinksProps) {
  if (!links.length) return null;

  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-xl font-bold text-black sm:text-2xl">
          {heading}
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex flex-col rounded-lg border border-[#666666]/10 bg-white p-5 no-underline shadow-sm transition-shadow hover:shadow-md hover:no-underline"
            >
              <span className="font-semibold text-black group-hover:text-black">
                {link.title}
              </span>
              {link.description && (
                <span className="mt-1 text-sm text-[#666666]">
                  {link.description}
                </span>
              )}
              <span className="mt-auto flex items-center gap-1 pt-3 text-sm font-semibold text-black">
                Read more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
