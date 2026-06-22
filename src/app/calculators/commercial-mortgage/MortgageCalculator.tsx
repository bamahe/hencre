"use client";

import { useState, useMemo } from "react";

/* -------------------------------------------------------------------
 * MortgageCalculator — client component
 * Calculates monthly payment, total interest, and total cost.
 * Also shows a side-by-side comparison across common term lengths.
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

/** Standard amortization monthly payment formula */
function calcMonthlyPayment(principal: number, annualRate: number, amortYears: number): number {
  const monthlyRate = annualRate / 100 / 12;
  const totalPayments = amortYears * 12;
  if (monthlyRate === 0) return principal / totalPayments;
  return (
    (principal * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
    (Math.pow(1 + monthlyRate, totalPayments) - 1)
  );
}

/** Common loan terms for the comparison table */
const COMPARISON_TERMS = [10, 15, 20, 25, 30];

export default function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("20");
  const [amortPeriod, setAmortPeriod] = useState("25");
  const [showResults, setShowResults] = useState(false);

  /* Parse inputs once */
  const principal = parseFloat(loanAmount.replace(/,/g, "")) || 0;
  const rate = parseFloat(interestRate) || 0;
  const termYears = parseInt(loanTerm) || 20;
  const amortYears = parseInt(amortPeriod) || 25;

  /* Primary calculation */
  const monthlyPayment = useMemo(
    () => (principal > 0 && rate >= 0 && amortYears > 0 ? calcMonthlyPayment(principal, rate, amortYears) : 0),
    [principal, rate, amortYears]
  );

  /* Total paid over the loan term (not amortization — term may differ) */
  const totalPaidOverTerm = monthlyPayment * termYears * 12;
  const totalInterestOverTerm = totalPaidOverTerm - principal;

  /* Balloon balance at end of term (if term < amortization) */
  const balloonBalance = useMemo(() => {
    if (termYears >= amortYears || principal <= 0 || rate <= 0) return 0;
    const monthlyRate = rate / 100 / 12;
    const n = termYears * 12;
    // Remaining balance after n payments on a full amortization schedule
    const balance =
      principal * Math.pow(1 + monthlyRate, n) -
      (monthlyPayment * (Math.pow(1 + monthlyRate, n) - 1)) / monthlyRate;
    return Math.max(0, balance);
  }, [principal, rate, termYears, amortYears, monthlyPayment]);

  /* Comparison table data */
  const comparisonData = useMemo(() => {
    if (principal <= 0 || rate < 0) return [];
    return COMPARISON_TERMS.map((years) => {
      const mp = calcMonthlyPayment(principal, rate, years);
      const totalPaid = mp * years * 12;
      const totalInterest = totalPaid - principal;
      return {
        term: years,
        monthlyPayment: mp,
        totalInterest,
        totalCost: totalPaid,
      };
    });
  }, [principal, rate]);

  function handleCalculate() {
    if (principal > 0 && rate >= 0 && amortYears > 0) {
      setShowResults(true);
    }
  }

  return (
    <div className="space-y-12">

      {/* ---- Input form ---- */}
      <div className="rounded-lg border border-[#E5E5E5] bg-white p-6 sm:p-8">
        <h2 className="text-xl font-bold">Loan Details</h2>
        <p className="mt-1 text-sm text-[#666666]">
          Enter your commercial loan terms to calculate monthly payments and total cost.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {/* Loan Amount */}
          <div>
            <label htmlFor="loan-amount" className="block text-sm font-semibold text-black">
              Loan Amount
            </label>
            <div className="relative mt-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#666666]">$</span>
              <input
                id="loan-amount"
                type="text"
                inputMode="decimal"
                placeholder="1,200,000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="w-full rounded-lg border border-[#E5E5E5] py-3 pl-8 pr-4 text-black placeholder:text-[#999999] focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <label htmlFor="interest-rate" className="block text-sm font-semibold text-black">
              Interest Rate (Annual)
            </label>
            <div className="relative mt-1">
              <input
                id="interest-rate"
                type="text"
                inputMode="decimal"
                placeholder="6.75"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full rounded-lg border border-[#E5E5E5] py-3 px-4 text-black placeholder:text-[#999999] focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666666]">%</span>
            </div>
          </div>

          {/* Loan Term */}
          <div>
            <label htmlFor="loan-term" className="block text-sm font-semibold text-black">
              Loan Term (Years)
            </label>
            <select
              id="loan-term"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="mt-1 w-full rounded-lg border border-[#E5E5E5] py-3 px-4 text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
            >
              <option value="5">5 years</option>
              <option value="7">7 years</option>
              <option value="10">10 years</option>
              <option value="15">15 years</option>
              <option value="20">20 years</option>
              <option value="25">25 years</option>
              <option value="30">30 years</option>
            </select>
          </div>

          {/* Amortization Period */}
          <div>
            <label htmlFor="amort-period" className="block text-sm font-semibold text-black">
              Amortization Period (Years)
            </label>
            <select
              id="amort-period"
              value={amortPeriod}
              onChange={(e) => setAmortPeriod(e.target.value)}
              className="mt-1 w-full rounded-lg border border-[#E5E5E5] py-3 px-4 text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
            >
              <option value="15">15 years</option>
              <option value="20">20 years</option>
              <option value="25">25 years</option>
              <option value="30">30 years</option>
            </select>
          </div>
        </div>

        <button
          type="button"
          onClick={handleCalculate}
          className="mt-6 rounded-lg bg-[#1a1a1a] px-8 py-3 font-semibold text-white transition-colors hover:bg-black"
        >
          Calculate Payment
        </button>

        {/* Primary results */}
        {showResults && monthlyPayment > 0 && (
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {/* Monthly Payment */}
            <div className="rounded-lg bg-[#F5F5F5] p-6 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#666666]">Monthly Payment</p>
              <p className="mt-2 text-3xl font-bold text-black">{formatCurrency(monthlyPayment)}</p>
            </div>
            {/* Total Interest */}
            <div className="rounded-lg bg-[#F5F5F5] p-6 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#666666]">
                Total Interest ({termYears}yr)
              </p>
              <p className="mt-2 text-3xl font-bold text-black">{formatCurrency(totalInterestOverTerm)}</p>
            </div>
            {/* Total Cost */}
            <div className="rounded-lg bg-[#F5F5F5] p-6 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#666666]">
                Total Paid ({termYears}yr)
              </p>
              <p className="mt-2 text-3xl font-bold text-black">{formatCurrency(totalPaidOverTerm)}</p>
            </div>
          </div>
        )}

        {/* Balloon payment note */}
        {showResults && balloonBalance > 0 && (
          <div className="mt-4 rounded-lg border border-yellow-300 bg-yellow-50 p-4">
            <p className="text-sm font-semibold text-yellow-800">
              Balloon Payment at Year {termYears}: {formatCurrency(balloonBalance)}
            </p>
            <p className="mt-1 text-sm text-yellow-700">
              Your loan term ({termYears} years) is shorter than the amortization period ({amortYears} years).
              You will owe a lump-sum balloon payment or need to refinance at maturity.
            </p>
          </div>
        )}
      </div>

      {/* ---- Comparison Table ---- */}
      {showResults && comparisonData.length > 0 && (
        <div className="rounded-lg border border-[#E5E5E5] bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold">Term Comparison</h2>
          <p className="mt-1 text-sm text-[#666666]">
            Same loan amount ({formatCurrency(principal)}) at {rate}% — different fully-amortized term lengths.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[#E5E5E5]">
                  <th className="py-3 pr-4 font-semibold text-black">Term</th>
                  <th className="py-3 pr-4 font-semibold text-black">Monthly Payment</th>
                  <th className="py-3 pr-4 font-semibold text-black">Total Interest</th>
                  <th className="py-3 font-semibold text-black">Total Cost</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr
                    key={row.term}
                    className={`border-b border-[#E5E5E5] ${
                      row.term === amortYears ? "bg-[#F5F5F5] font-semibold" : ""
                    }`}
                  >
                    <td className="py-3 pr-4">{row.term} years</td>
                    <td className="py-3 pr-4">{formatCurrency(row.monthlyPayment)}</td>
                    <td className="py-3 pr-4">{formatCurrency(row.totalInterest)}</td>
                    <td className="py-3">{formatCurrency(row.totalCost)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-[#999999]">
            Highlighted row matches your selected amortization period. All figures assume full amortization with no balloon.
          </p>
        </div>
      )}
    </div>
  );
}
