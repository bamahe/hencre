/* -------------------------------------------------------------------
 * SchemaOrg — renders a JSON-LD <script> tag for structured data.
 * Server component.
 * ----------------------------------------------------------------- */

interface SchemaOrgProps {
  /** Any valid JSON-LD object (Schema.org, BreadcrumbList, etc.) */
  schema: Record<string, unknown>;
}

export default function SchemaOrg({ schema }: SchemaOrgProps) {
  return (
    <script
      type="application/ld+json"
      /* Suppress hydration warning since the content is static JSON */
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
