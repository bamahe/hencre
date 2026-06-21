"use client";

/**
 * ClientWidgets — lazy-loads client-only widgets (accessibility, etc.)
 * so they don't block server rendering or inflate the initial JS bundle.
 */
import dynamic from "next/dynamic";

// Lazy-load AccessibilityWidget — no SSR needed (interactive overlay)
const AccessibilityWidget = dynamic(
  () => import("./AccessibilityWidget").then((m) => ({ default: m.AccessibilityWidget })),
  { ssr: false }
);

export default function ClientWidgets() {
  return (
    <>
      <AccessibilityWidget />
    </>
  );
}
