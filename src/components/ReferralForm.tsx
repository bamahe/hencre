"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { FL_COUNTIES } from "@/lib/fl-counties";
import TurnstileWidget from "./TurnstileWidget";

/* -------------------------------------------------------------------
 * ReferralForm (Form B) — broker-to-broker referral intake.
 * Heading, explanatory copy, agent info fields, client type dropdown,
 * county dropdown, Turnstile, and submission to /api/referral.
 * ----------------------------------------------------------------- */

const CLIENT_TYPES = [
  "Buyer",
  "Seller",
  "Tenant",
  "Landlord",
] as const;

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ReferralForm() {
  /* Form field state */
  const [yourName, setYourName] = useState("");
  const [brokerage, setBrokerage] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [clientType, setClientType] = useState("");
  const [county, setCounty] = useState("");
  const [dealNotes, setDealNotes] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");

  /* Submission state */
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          yourName,
          brokerage,
          licenseNumber,
          email,
          phone,
          clientType,
          county,
          dealNotes,
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
        <CheckCircle className="mx-auto h-12 w-12 text-green-700" />
        <h3 className="mt-4 text-xl font-bold text-black">Referral received!</h3>
        <p className="mt-2 text-[#666666]">
          We&apos;ll review the details and reach out within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg bg-white p-6 shadow-sm sm:p-8"
    >
      {/* ---- Heading & body copy ---- */}
      <h2 className="mb-2 text-xl font-bold text-black sm:text-2xl">
        Got a commercial deal outside your lane?
      </h2>
      <p className="mb-6 text-sm leading-relaxed text-[#666666]">
        Most residential agents don&apos;t work commercial &mdash; but you can
        still get paid for it. Refer your commercial buyer, seller, tenant, or
        landlord to REMAX Commercial® Florida. We handle the deal start to finish, you collect a
        referral fee at closing. Simple, documented, REALTOR&reg;-to-REALTOR&reg;.
      </p>

      {/* ---- Your name ---- */}
      <div className="mb-4">
        <label htmlFor="ref-name" className="mb-1 block text-sm font-semibold text-black">
          Your Name
        </label>
        <input
          id="ref-name"
          type="text"
          required
          value={yourName}
          onChange={(e) => setYourName(e.target.value)}
          className="w-full rounded-md border border-[#666666]/20 px-3 py-2 text-sm text-black outline-none transition-colors focus:border-black focus:ring-1 focus:ring-black"
        />
      </div>

      {/* ---- Brokerage ---- */}
      <div className="mb-4">
        <label htmlFor="ref-brokerage" className="mb-1 block text-sm font-semibold text-black">
          Brokerage
        </label>
        <input
          id="ref-brokerage"
          type="text"
          required
          value={brokerage}
          onChange={(e) => setBrokerage(e.target.value)}
          className="w-full rounded-md border border-[#666666]/20 px-3 py-2 text-sm text-black outline-none transition-colors focus:border-black focus:ring-1 focus:ring-black"
        />
      </div>

      {/* ---- License # ---- */}
      <div className="mb-4">
        <label htmlFor="ref-license" className="mb-1 block text-sm font-semibold text-black">
          License #
        </label>
        <input
          id="ref-license"
          type="text"
          required
          value={licenseNumber}
          onChange={(e) => setLicenseNumber(e.target.value)}
          className="w-full rounded-md border border-[#666666]/20 px-3 py-2 text-sm text-black outline-none transition-colors focus:border-black focus:ring-1 focus:ring-black"
        />
      </div>

      {/* ---- Email ---- */}
      <div className="mb-4">
        <label htmlFor="ref-email" className="mb-1 block text-sm font-semibold text-black">
          Email
        </label>
        <input
          id="ref-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-[#666666]/20 px-3 py-2 text-sm text-black outline-none transition-colors focus:border-black focus:ring-1 focus:ring-black"
        />
      </div>

      {/* ---- Phone ---- */}
      <div className="mb-4">
        <label htmlFor="ref-phone" className="mb-1 block text-sm font-semibold text-black">
          Phone
        </label>
        <input
          id="ref-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-md border border-[#666666]/20 px-3 py-2 text-sm text-black outline-none transition-colors focus:border-black focus:ring-1 focus:ring-black"
        />
      </div>

      {/* ---- Client type dropdown ---- */}
      <div className="mb-4">
        <label htmlFor="ref-client-type" className="mb-1 block text-sm font-semibold text-black">
          Client Type
        </label>
        <select
          id="ref-client-type"
          required
          value={clientType}
          onChange={(e) => setClientType(e.target.value)}
          className="w-full rounded-md border border-[#666666]/20 bg-white px-3 py-2 text-sm text-black outline-none transition-colors focus:border-black focus:ring-1 focus:ring-black"
        >
          <option value="">Select client type</option>
          {CLIENT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* ---- County dropdown ---- */}
      <div className="mb-4">
        <label htmlFor="ref-county" className="mb-1 block text-sm font-semibold text-black">
          County
        </label>
        <select
          id="ref-county"
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

      {/* ---- Deal notes ---- */}
      <div className="mb-6">
        <label htmlFor="ref-notes" className="mb-1 block text-sm font-semibold text-black">
          Deal Notes
        </label>
        <textarea
          id="ref-notes"
          rows={4}
          value={dealNotes}
          onChange={(e) => setDealNotes(e.target.value)}
          placeholder="Property type, location, budget range, timeline, or anything else we should know."
          className="w-full rounded-md border border-[#666666]/20 px-3 py-2 text-sm text-black outline-none transition-colors focus:border-black focus:ring-1 focus:ring-black"
        />
      </div>

      {/* ---- Turnstile verification ---- */}
      <TurnstileWidget onVerify={setTurnstileToken} />

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
          "Submit Referral"
        )}
      </button>
    </form>
  );
}
