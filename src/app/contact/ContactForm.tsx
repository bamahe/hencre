"use client";

/**
 * ContactForm — CRE lead capture form for hencre.com/contact.
 * Posts to /api/lead. Fields: name, email, phone, county, inquiryType, message.
 * Turnstile is disabled server-side so we skip the token.
 */
import { useState, type FormEvent } from "react";
import { INQUIRY_TYPE_LABELS, type InquiryType } from "@/lib/validation";

/* Florida counties for the dropdown — top Tampa Bay counties first */
const COUNTY_OPTIONS = [
  "Hillsborough", "Pinellas", "Pasco", "Polk", "Manatee",
  "Sarasota", "Hernando", "Citrus", "Lake", "Osceola",
  "Orange", "Seminole", "Volusia", "Brevard", "Lee",
  "Collier", "Charlotte", "Alachua", "Duval", "Miami-Dade",
  "Broward", "Palm Beach", "Leon", "Escambia", "Bay",
  "Other Florida County",
];

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    county: "",
    inquiryType: "" as InquiryType | "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          turnstileToken: "disabled", // Turnstile is disabled server-side
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please call (813) 733-7907 instead.");
    } finally {
      setSubmitting(false);
    }
  };

  /* Success state */
  if (submitted) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
        <p className="text-lg font-bold text-green-800">Message received!</p>
        <p className="mt-2 text-sm text-green-700">
          Barrett will respond within one business day — usually faster.
          Need immediate help? Call{" "}
          <a href="tel:+18137337907" className="font-semibold underline">
            (813) 733-7907
          </a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-[#E5E5E5] bg-white p-8 text-left space-y-4">
      {/* Name */}
      <div>
        <label htmlFor="cf-name" className="block text-sm font-semibold text-black mb-1">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="cf-name"
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          className="w-full rounded-md border border-[#D4D4D4] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Your full name"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="cf-email" className="block text-sm font-semibold text-black mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="cf-email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
          className="w-full rounded-md border border-[#D4D4D4] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="you@company.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="cf-phone" className="block text-sm font-semibold text-black mb-1">
          Phone
        </label>
        <input
          id="cf-phone"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
          className="w-full rounded-md border border-[#D4D4D4] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="(555) 555-5555"
        />
      </div>

      {/* Two columns: County + Inquiry Type */}
      <div className="grid gap-4 sm:grid-cols-2">
        {/* County */}
        <div>
          <label htmlFor="cf-county" className="block text-sm font-semibold text-black mb-1">
            County <span className="text-red-500">*</span>
          </label>
          <select
            id="cf-county"
            required
            value={form.county}
            onChange={(e) => setForm((p) => ({ ...p, county: e.target.value }))}
            className="w-full rounded-md border border-[#D4D4D4] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black bg-white"
          >
            <option value="">Select county...</option>
            {COUNTY_OPTIONS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Inquiry Type */}
        <div>
          <label htmlFor="cf-type" className="block text-sm font-semibold text-black mb-1">
            What do you need? <span className="text-red-500">*</span>
          </label>
          <select
            id="cf-type"
            required
            value={form.inquiryType}
            onChange={(e) => setForm((p) => ({ ...p, inquiryType: e.target.value as InquiryType }))}
            className="w-full rounded-md border border-[#D4D4D4] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black bg-white"
          >
            <option value="">Select type...</option>
            {(Object.entries(INQUIRY_TYPE_LABELS) as [InquiryType, string][]).map(
              ([value, label]) => (
                <option key={value} value={value}>{label}</option>
              )
            )}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="cf-message" className="block text-sm font-semibold text-black mb-1">
          Tell me about your project
        </label>
        <textarea
          id="cf-message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          className="w-full rounded-md border border-[#D4D4D4] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black resize-y"
          placeholder="Property type, location, timeline, budget — whatever helps me understand what you need."
        />
      </div>

      {/* Error */}
      {error && (
        <p className="text-sm text-red-600 font-medium">{error}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-md bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#333] disabled:opacity-50"
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>

      <p className="text-xs text-[#999] text-center">
        I respond within one business day — usually faster. Or call{" "}
        <a href="tel:+18137337907" className="font-medium text-black">(813) 733-7907</a> directly.
      </p>
    </form>
  );
}
