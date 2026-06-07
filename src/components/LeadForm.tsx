"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { FL_COUNTIES } from "@/lib/fl-counties";
import TurnstileWidget from "./TurnstileWidget";

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
  const [turnstileToken, setTurnstileToken] = useState("");

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
          turnstileToken,
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
        <CheckCircle className="mx-auto h-12 w-12 text-success-green" />
        <h3 className="mt-4 text-xl font-bold text-navy">Thank you!</h3>
        <p className="mt-2 text-slate-brand">
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
      <h2 className="mb-6 text-xl font-bold text-navy sm:text-2xl">
        How can we help?
      </h2>

      {/* ---- Inquiry type radios ---- */}
      <fieldset className="mb-6">
        <legend className="mb-2 text-sm font-semibold text-navy">
          I want to:
        </legend>
        <div className="flex flex-col gap-2">
          {INQUIRY_TYPES.map((type) => (
            <label
              key={type}
              className="flex cursor-pointer items-center gap-2 text-sm text-slate-brand"
            >
              <input
                type="radio"
                name="inquiryType"
                value={type}
                checked={inquiryType === type}
                onChange={(e) => setInquiryType(e.target.value)}
                required
                className="h-4 w-4 accent-accent-blue"
              />
              {type}
            </label>
          ))}
        </div>
      </fieldset>

      {/* ---- Name ---- */}
      <div className="mb-4">
        <label htmlFor="lead-name" className="mb-1 block text-sm font-semibold text-navy">
          Name
        </label>
        <input
          id="lead-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md border border-slate-brand/20 px-3 py-2 text-sm text-navy outline-none transition-colors focus:border-accent-blue focus:ring-1 focus:ring-accent-blue"
        />
      </div>

      {/* ---- Email ---- */}
      <div className="mb-4">
        <label htmlFor="lead-email" className="mb-1 block text-sm font-semibold text-navy">
          Email
        </label>
        <input
          id="lead-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-slate-brand/20 px-3 py-2 text-sm text-navy outline-none transition-colors focus:border-accent-blue focus:ring-1 focus:ring-accent-blue"
        />
      </div>

      {/* ---- Phone ---- */}
      <div className="mb-4">
        <label htmlFor="lead-phone" className="mb-1 block text-sm font-semibold text-navy">
          Phone
        </label>
        <input
          id="lead-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-md border border-slate-brand/20 px-3 py-2 text-sm text-navy outline-none transition-colors focus:border-accent-blue focus:ring-1 focus:ring-accent-blue"
        />
      </div>

      {/* ---- County dropdown ---- */}
      <div className="mb-4">
        <label htmlFor="lead-county" className="mb-1 block text-sm font-semibold text-navy">
          County
        </label>
        <select
          id="lead-county"
          required
          value={county}
          onChange={(e) => setCounty(e.target.value)}
          className="w-full rounded-md border border-slate-brand/20 bg-white px-3 py-2 text-sm text-navy outline-none transition-colors focus:border-accent-blue focus:ring-1 focus:ring-accent-blue"
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
        <label htmlFor="lead-message" className="mb-1 block text-sm font-semibold text-navy">
          Message
        </label>
        <textarea
          id="lead-message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-md border border-slate-brand/20 px-3 py-2 text-sm text-navy outline-none transition-colors focus:border-accent-blue focus:ring-1 focus:ring-accent-blue"
        />
      </div>

      {/* ---- Turnstile verification ---- */}
      <TurnstileWidget onVerify={setTurnstileToken} />

      {/* ---- Error message ---- */}
      {status === "error" && (
        <div className="mt-4 flex items-center gap-2 rounded-md bg-soft-red/10 px-4 py-3 text-sm text-soft-red">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {errorMessage}
        </div>
      )}

      {/* ---- Submit ---- */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-accent-blue px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-blue/90 disabled:opacity-60"
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
