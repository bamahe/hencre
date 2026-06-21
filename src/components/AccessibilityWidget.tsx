/**
 * AccessibilityWidget — lightweight a11y toggle panel
 *
 * CSS rules to add to globals.css (already added automatically):
 *
 * html.a11y-large-text { font-size: 125% !important; }
 * html.a11y-high-contrast { filter: contrast(1.4) !important; }
 * html.a11y-high-contrast * { border-color: #fff !important; }
 * html.a11y-reduce-motion *,
 * html.a11y-reduce-motion *::before,
 * html.a11y-reduce-motion *::after {
 *   animation-duration: 0.01ms !important;
 *   animation-iteration-count: 1 !important;
 *   transition-duration: 0.01ms !important;
 *   scroll-behavior: auto !important;
 * }
 * html.a11y-highlight-links a {
 *   outline: 2px solid #FFD700 !important;
 *   outline-offset: 2px !important;
 *   text-decoration: underline !important;
 * }
 */

"use client";

import { useState, useEffect, useCallback } from "react";

// Storage key for persisting preferences
const STORAGE_KEY = "a11y-prefs";

// The four accessibility features and the CSS class each one toggles on <html>
const FEATURES = [
  {
    id: "largeText",
    label: "Larger Text",
    description: "Increase font size by 25%",
    className: "a11y-large-text",
  },
  {
    id: "highContrast",
    label: "High Contrast",
    description: "Boost contrast and borders",
    className: "a11y-high-contrast",
  },
  {
    id: "reduceMotion",
    label: "Reduce Motion",
    description: "Stop animations and transitions",
    className: "a11y-reduce-motion",
  },
  {
    id: "highlightLinks",
    label: "Highlight Links",
    description: "Outline and underline all links",
    className: "a11y-highlight-links",
  },
] as const;

// Derive a type for the toggle state object from the FEATURES array
type A11yPrefs = Record<(typeof FEATURES)[number]["id"], boolean>;

const DEFAULT_PREFS: A11yPrefs = {
  largeText: false,
  highContrast: false,
  reduceMotion: false,
  highlightLinks: false,
};

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<A11yPrefs>(DEFAULT_PREFS);

  // On mount: read saved prefs from localStorage and apply CSS classes
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: Partial<A11yPrefs> = JSON.parse(stored);
        const merged = { ...DEFAULT_PREFS, ...parsed };
        setPrefs(merged);

        // Apply each active class to <html>
        FEATURES.forEach((f) => {
          if (merged[f.id]) {
            document.documentElement.classList.add(f.className);
          }
        });
      }
    } catch {
      // If localStorage is unavailable or corrupted, just use defaults
    }
  }, []);

  // Toggle a single feature on/off
  const toggle = useCallback(
    (id: (typeof FEATURES)[number]["id"], className: string) => {
      setPrefs((prev) => {
        const next = { ...prev, [id]: !prev[id] };

        // Add or remove the CSS class on <html>
        if (next[id]) {
          document.documentElement.classList.add(className);
        } else {
          document.documentElement.classList.remove(className);
        }

        // Persist to localStorage
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch {
          // Silent fail if storage is full or unavailable
        }

        return next;
      });
    },
    []
  );

  // Close panel on Escape key
  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <>
      {/* Trigger button — fixed bottom-left, above MobileBottomBar on mobile */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Accessibility options"
        className="fixed bottom-20 left-4 md:bottom-4 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800/90 text-white shadow-lg hover:bg-gray-700 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        {/* Wheelchair icon (simple inline SVG — no external dependency) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
          aria-hidden="true"
        >
          {/* Head */}
          <circle cx="12" cy="4" r="1.5" fill="currentColor" stroke="none" />
          {/* Body / seat */}
          <path d="M12 7v5h4" />
          {/* Wheel */}
          <circle cx="10" cy="17" r="4" />
          {/* Leg rest */}
          <path d="M16 12v3a1 1 0 0 0 1 1h2" />
        </svg>
      </button>

      {/* Panel — slides up from the trigger button area */}
      {open && (
        <div
          role="dialog"
          aria-label="Accessibility settings"
          className="fixed bottom-32 left-4 md:bottom-16 z-40 w-[280px] rounded-xl border border-gray-200 bg-white shadow-xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
            <h2 className="text-sm font-semibold text-gray-800">
              Accessibility
            </h2>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close accessibility settings"
              className="flex h-6 w-6 items-center justify-center rounded text-gray-400 hover:text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Toggle buttons */}
          <div className="flex flex-col gap-2 p-3">
            {FEATURES.map((feature) => {
              const isActive = prefs[feature.id];
              return (
                <button
                  key={feature.id}
                  onClick={() => toggle(feature.id, feature.className)}
                  aria-pressed={isActive}
                  className={`flex flex-col items-start rounded-lg border px-3 py-2 text-left text-sm transition-colors ${
                    isActive
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <span className="font-medium">{feature.label}</span>
                  <span
                    className={`text-xs ${isActive ? "text-blue-500" : "text-gray-400"}`}
                  >
                    {feature.description}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
