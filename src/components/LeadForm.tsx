"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { FL_COUNTIES } from "@/lib/fl-counties";


/* -------------------------------------------------------------------
 * LeadForm (Form A) — public CRE lead form.
 * Radio group for inquiry type, contact fields, county dropdown,
 * Turnstile verification, and submission to /api/lead.
 * ----------------------------------------------------------------- */

const INQUIRY_TYPES = [
  "Lease space (tenant)",
  "List my space (landlord)",
  "Buy investment",
  "Sell/dispositions",
  "Request a CRE valuation",
] as const;

type FormStatus = "idle" | "loading" | "success" | "error";

export default function LeadForm() {
  /* Form field state */
  const [inquiryType, setInquiryType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [county, setCounty] = useState("");
  const [message, setMessage] = useState("");
  

  /* Submission state */
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          inquiryType,
          name,
          email,
          phone,
          county,
          message,
          // "" removed,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  /* ---- Success state ---- */
  if (status === "success") {
    return (
      <div className="rounded-lg bg-white p-8 text-center shadow-sm">
        <CheckCircle className="mx-auto h-12 w-12 text-green-700" />
        <h3 className="mt-4 text-xl font-bold text-black">Thank you!</h3>
        <p className="mt-2 text-[#666666]">
          We received your inquiry and will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg bg-white p-6 shadow-sm sm:p-8"
    >
      <h2 className="mb-6 text-xl font-bold text-black sm:text-2xl">
        How can we help?
      </h2>

      {/* ---- Inquiry type radios ---- */}
      <fieldset className="mb-6">
        <legend className="mb-2 text-sm font-semibold text-black">
          I want to:
        </legend>
        <div className="flex flex-col gap-2">
          {INQUIRY_TYPES.map((type) => (
            <label
              key={type}
              className="flex cursor-pointer items-center gap-2 text-sm text-[#666666]"
            >
              <input
                type="radio"
                name="inquiryType"
                value={type}
                checked={inquiryType === type}
                onChange={(e) => setInquiryType(e.target.value)}
                required
                className="h-4 w-4 accent-black"
              />
              {type}
            </label>
          ))}
        </div>
      </fieldset>

      {/* ---- Name ---- */}
      <div className="mb-4">
        <label htmlFor="lead-name" className="mb-1 block text-sm font-semibold text-black">
          Name
        </label>
        <input
          id="lead-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md border border-[#666666]/20 px-3 py-2 text-sm text-black outline-none transition-colors focus:border-black focus:ring-1 focus:ring-black"
        />
      </div>

      {/* ---- Email ---- */}
      <div className="mb-4">
        <label htmlFor="lead-email" className="mb-1 block text-sm font-semibold text-black">
          Email
        </label>
        <input
          id="lead-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-[#666666]/20 px-3 py-2 text-sm text-black outline-none transition-colors focus:border-black focus:ring-1 focus:ring-black"
        />
      </div>

      {/* ---- Phone ---- */}
      <div className="mb-4">
        <label htmlFor="lead-phone" className="mb-1 block text-sm font-semibold text-black">
          Phone
        </label>
        <input
          id="lead-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-md border border-[#666666]/20 px-3 py-2 text-sm text-black outline-none transition-colors focus:border-black focus:ring-1 focus:ring-black"
        />
      </div>

      {/* ---- County dropdown ---- */}
      <div className="mb-4">
        <label htmlFor="lead-county" className="mb-1 block text-sm font-semibold text-black">
          County
        </label>
        <select
          id="lead-county"
          required
          value={county}
          onChange={(e) => setCounty(e.target.value)}
          className="w-full rounded-md border border-[#666666]/20 bg-white px-3 py-2 text-sm text-black outline-none transition-colors focus:border-black focus:ring-1 focus:ring-black"
        >
          <option value="">Select a county</option>
          {FL_COUNTIES.map((c) => (
            <option key={c} value={c}>
              {c} County
            </option>
          ))}
        </select>
      </div>

      {/* ---- Message ---- */}
      <div className="mb-6">
        <label htmlFor="lead-message" className="mb-1 block text-sm font-semibold text-black">
          Message
        </label>
        <textarea
          id="lead-message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-md border border-[#666666]/20 px-3 py-2 text-sm text-black outline-none transition-colors focus:border-black focus:ring-1 focus:ring-black"
        />
      </div>

      {/* ---- Turnstile verification ---- */}

      {/* ---- Error message ---- */}
      {status === "error" && (
        <div className="mt-4 flex items-center gap-2 rounded-md bg-red-700/10 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {errorMessage}
        </div>
      )}

      {/* ---- Submit ---- */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-black px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#333333] disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          "Submit Inquiry"
        )}
      </button>
    </form>
  );
}
