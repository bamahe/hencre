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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          className="h-5 w-5"
          aria-hidden="true"
        >
          {/* Universal Access icon */}
          <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm-72 152.7c0-7.4 4.8-14 11.9-16.2l44.1-14V216c0-8.8 7.2-16 16-16s16 7.2 16 16v24.5l44.1 14c7.1 2.2 11.9 8.8 11.9 16.2 0 9.5-7.7 17.2-17.2 17.2-1.6 0-3.3-.2-4.9-.7L272 278.7V328l36.5 42.6c3.5 4.1 5.5 9.3 5.5 14.7 0 12.6-10.2 22.7-22.7 22.7-6.6 0-12.8-2.8-17.2-7.8L256 378.7l-18.2 21.5c-4.3 5-10.6 7.8-17.2 7.8-12.6 0-22.7-10.2-22.7-22.7 0-5.4 1.9-10.6 5.5-14.7L240 328v-49.3l-33.9 8.5c-1.6.4-3.3.7-4.9.7-9.5 0-17.2-7.7-17.2-17.2z" />
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
