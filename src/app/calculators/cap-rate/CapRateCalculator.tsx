"use client";

import { useState } from "react";

/* -------------------------------------------------------------------
 * CapRateCalculator — client component
 * Two modes:
 *   1. Forward: NOI + Price → Cap Rate
 *   2. Reverse: NOI + Cap Rate → Estimated Value
 * ----------------------------------------------------------------- */

/** Format a number as USD currency */
function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

/** Format a number as a percentage with 2 decimal places */
function formatPercent(value: number): string {
  return `${value.toFixed(2)}%`;
}

export default function CapRateCalculator() {
  /* -- Forward calculation state -- */
  const [noi, setNoi] = useState("");
  const [price, setPrice] = useState("");
  const [forwardResult, setForwardResult] = useState<number | null>(null);

  /* -- Reverse calculation state -- */
  const [reverseNoi, setReverseNoi] = useState("");
  const [targetCapRate, setTargetCapRate] = useState("");
  const [reverseResult, setReverseResult] = useState<number | null>(null);

  /* Forward: Cap Rate = NOI / Price * 100 */
  function calculateCapRate() {
    const noiVal = parseFloat(noi.replace(/,/g, ""));
    const priceVal = parseFloat(price.replace(/,/g, ""));
    if (!noiVal || !priceVal || priceVal === 0) {
      setForwardResult(null);
      return;
    }
    setForwardResult((noiVal / priceVal) * 100);
  }

  /* Reverse: Value = NOI / (Cap Rate / 100) */
  function calculateValue() {
    const noiVal = parseFloat(reverseNoi.replace(/,/g, ""));
    const capVal = parseFloat(targetCapRate.replace(/,/g, ""));
    if (!noiVal || !capVal || capVal === 0) {
      setReverseResult(null);
      return;
    }
    setReverseResult(noiVal / (capVal / 100));
  }

  return (
    <div className="space-y-12">

      {/* ---- Forward Calculator ---- */}
      <div className="rounded-lg border border-[#E5E5E5] bg-white p-6 sm:p-8">
        <h2 className="text-xl font-bold">Calculate Cap Rate</h2>
        <p className="mt-1 text-sm text-[#666666]">
          Enter the annual Net Operating Income and purchase price to find the cap rate.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {/* NOI input */}
          <div>
            <label htmlFor="noi" className="block text-sm font-semibold text-black">
              Net Operating Income (Annual)
            </label>
            <div className="relative mt-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#666666]">$</span>
              <input
                id="noi"
                type="text"
                inputMode="decimal"
                placeholder="120,000"
                value={noi}
                onChange={(e) => setNoi(e.target.value)}
                className="w-full rounded-lg border border-[#E5E5E5] py-3 pl-8 pr-4 text-black placeholder:text-[#999999] focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
          </div>

          {/* Price input */}
          <div>
            <label htmlFor="price" className="block text-sm font-semibold text-black">
              Property Price
            </label>
            <div className="relative mt-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#666666]">$</span>
              <input
                id="price"
                type="text"
                inputMode="decimal"
                placeholder="1,500,000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full rounded-lg border border-[#E5E5E5] py-3 pl-8 pr-4 text-black placeholder:text-[#999999] focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={calculateCapRate}
          className="mt-6 rounded-lg bg-[#1a1a1a] px-8 py-3 font-semibold text-white transition-colors hover:bg-black"
        >
          Calculate Cap Rate
        </button>

        {/* Forward result */}
        {forwardResult !== null && (
          <div className="mt-6 rounded-lg bg-[#F5F5F5] p-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#666666]">
              Cap Rate
            </p>
            <p className="mt-2 text-4xl font-bold text-black sm:text-5xl">
              {formatPercent(forwardResult)}
            </p>
            <p className="mt-2 text-sm text-[#666666]">
              {forwardResult >= 8
                ? "Higher cap rate — potentially higher risk but stronger cash flow yield."
                : forwardResult >= 5
                  ? "Moderate cap rate — balanced risk and return profile."
                  : "Lower cap rate — typically indicates a more stable, lower-risk investment."}
            </p>
          </div>
        )}
      </div>

      {/* ---- Reverse Calculator ---- */}
      <div className="rounded-lg border border-[#E5E5E5] bg-white p-6 sm:p-8">
        <h2 className="text-xl font-bold">Reverse: Estimate Property Value</h2>
        <p className="mt-1 text-sm text-[#666666]">
          Enter NOI and your target cap rate to estimate what the property should be worth.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {/* Reverse NOI input */}
          <div>
            <label htmlFor="reverse-noi" className="block text-sm font-semibold text-black">
              Net Operating Income (Annual)
            </label>
            <div className="relative mt-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#666666]">$</span>
              <input
                id="reverse-noi"
                type="text"
                inputMode="decimal"
                placeholder="120,000"
                value={reverseNoi}
                onChange={(e) => setReverseNoi(e.target.value)}
                className="w-full rounded-lg border border-[#E5E5E5] py-3 pl-8 pr-4 text-black placeholder:text-[#999999] focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
          </div>

          {/* Target cap rate input */}
          <div>
            <label htmlFor="target-cap" className="block text-sm font-semibold text-black">
              Target Cap Rate (%)
            </label>
            <div className="relative mt-1">
              <input
                id="target-cap"
                type="text"
                inputMode="decimal"
                placeholder="7.5"
                value={targetCapRate}
                onChange={(e) => setTargetCapRate(e.target.value)}
                className="w-full rounded-lg border border-[#E5E5E5] py-3 px-4 text-black placeholder:text-[#999999] focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666666]">%</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={calculateValue}
          className="mt-6 rounded-lg bg-[#1a1a1a] px-8 py-3 font-semibold text-white transition-colors hover:bg-black"
        >
          Estimate Value
        </button>

        {/* Reverse result */}
        {reverseResult !== null && (
          <div className="mt-6 rounded-lg bg-[#F5F5F5] p-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#666666]">
              Estimated Property Value
            </p>
            <p className="mt-2 text-4xl font-bold text-black sm:text-5xl">
              {formatCurrency(reverseResult)}
            </p>
            <p className="mt-2 text-sm text-[#666666]">
              At a {targetCapRate}% cap rate with {formatCurrency(parseFloat(reverseNoi.replace(/,/g, "")))} NOI
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
