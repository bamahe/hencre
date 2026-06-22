"use client";

import { useState, useMemo } from "react";

/* -------------------------------------------------------------------
 * ROICalculator — client component
 * Inputs: Purchase Price, Down Payment %, Annual Rental Income,
 *         Annual Operating Expenses, Annual Appreciation Rate %
 * Outputs: Cap Rate, Cash-on-Cash Return, Annual Cash Flow,
 *          5-Year Total Return, 10-Year Total Return
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

/** Standard amortization monthly payment */
function calcMonthlyPayment(principal: number, annualRate: number, years: number): number {
  const monthlyRate = annualRate / 100 / 12;
  const n = years * 12;
  if (monthlyRate === 0) return principal / n;
  return (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
}

export default function ROICalculator() {
  const [purchasePrice, setPurchasePrice] = useState("");
  const [downPaymentPct, setDownPaymentPct] = useState("25");
  const [annualIncome, setAnnualIncome] = useState("");
  const [annualExpenses, setAnnualExpenses] = useState("");
  const [appreciationRate, setAppreciationRate] = useState("3");
  /* Optional financing fields */
  const [loanRate, setLoanRate] = useState("7");
  const [loanTermYears, setLoanTermYears] = useState("25");
  const [showResults, setShowResults] = useState(false);

  /* Parse inputs */
  const price = parseFloat(purchasePrice.replace(/,/g, "")) || 0;
  const downPct = parseFloat(downPaymentPct) || 0;
  const income = parseFloat(annualIncome.replace(/,/g, "")) || 0;
  const expenses = parseFloat(annualExpenses.replace(/,/g, "")) || 0;
  const appreciation = parseFloat(appreciationRate) || 0;
  const intRate = parseFloat(loanRate) || 0;
  const termYrs = parseInt(loanTermYears) || 25;

  const results = useMemo(() => {
    if (price <= 0 || income <= 0) return null;

    /* Core calculations */
    const noi = income - expenses;
    const capRate = (noi / price) * 100;
    const downPayment = price * (downPct / 100);
    const loanAmount = price - downPayment;

    /* Annual debt service */
    const monthlyPayment = loanAmount > 0 ? calcMonthlyPayment(loanAmount, intRate, termYrs) : 0;
    const annualDebtService = monthlyPayment * 12;

    /* Cash flow after debt service */
    const annualCashFlow = noi - annualDebtService;

    /* Cash-on-cash return = annual cash flow / total cash invested */
    const totalCashInvested = downPayment > 0 ? downPayment : price;
    const cashOnCash = (annualCashFlow / totalCashInvested) * 100;

    /* Multi-year projections */
    function projectReturns(years: number) {
      let totalCashFlow = 0;
      let currentValue = price;

      for (let y = 1; y <= years; y++) {
        totalCashFlow += annualCashFlow;
        currentValue *= 1 + appreciation / 100;
      }

      const equityGain = currentValue - price;
      const totalReturn = totalCashFlow + equityGain;
      const totalReturnPct = (totalReturn / totalCashInvested) * 100;
      const annualizedReturn = (Math.pow(1 + totalReturn / totalCashInvested, 1 / years) - 1) * 100;

      return {
        totalCashFlow,
        propertyValue: currentValue,
        equityGain,
        totalReturn,
        totalReturnPct,
        annualizedReturn,
      };
    }

    return {
      noi,
      capRate,
      downPayment,
      loanAmount,
      monthlyPayment,
      annualDebtService,
      annualCashFlow,
      cashOnCash,
      totalCashInvested,
      fiveYear: projectReturns(5),
      tenYear: projectReturns(10),
    };
  }, [price, downPct, income, expenses, appreciation, intRate, termYrs]);

  function handleCalculate() {
    if (price > 0 && income > 0) {
      setShowResults(true);
    }
  }

  return (
    <div className="space-y-12">

      {/* ---- Input form ---- */}
      <div className="rounded-lg border border-[#E5E5E5] bg-white p-6 sm:p-8">
        <h2 className="text-xl font-bold">Investment Details</h2>
        <p className="mt-1 text-sm text-[#666666]">
          Enter your purchase details and income assumptions.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {/* Purchase Price */}
          <div>
            <label htmlFor="purchase-price" className="block text-sm font-semibold text-black">
              Purchase Price
            </label>
            <div className="relative mt-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#666666]">$</span>
              <input
                id="purchase-price"
                type="text"
                inputMode="decimal"
                placeholder="1,500,000"
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(e.target.value)}
                className="w-full rounded-lg border border-[#E5E5E5] py-3 pl-8 pr-4 text-black placeholder:text-[#999999] focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
          </div>

          {/* Down Payment % */}
          <div>
            <label htmlFor="down-payment" className="block text-sm font-semibold text-black">
              Down Payment (%)
            </label>
            <div className="relative mt-1">
              <input
                id="down-payment"
                type="text"
                inputMode="decimal"
                placeholder="25"
                value={downPaymentPct}
                onChange={(e) => setDownPaymentPct(e.target.value)}
                className="w-full rounded-lg border border-[#E5E5E5] py-3 px-4 text-black placeholder:text-[#999999] focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666666]">%</span>
            </div>
          </div>

          {/* Annual Rental Income */}
          <div>
            <label htmlFor="annual-income" className="block text-sm font-semibold text-black">
              Annual Rental Income (Gross)
            </label>
            <div className="relative mt-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#666666]">$</span>
              <input
                id="annual-income"
                type="text"
                inputMode="decimal"
                placeholder="180,000"
                value={annualIncome}
                onChange={(e) => setAnnualIncome(e.target.value)}
                className="w-full rounded-lg border border-[#E5E5E5] py-3 pl-8 pr-4 text-black placeholder:text-[#999999] focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
          </div>

          {/* Annual Operating Expenses */}
          <div>
            <label htmlFor="annual-expenses" className="block text-sm font-semibold text-black">
              Annual Operating Expenses
            </label>
            <div className="relative mt-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#666666]">$</span>
              <input
                id="annual-expenses"
                type="text"
                inputMode="decimal"
                placeholder="60,000"
                value={annualExpenses}
                onChange={(e) => setAnnualExpenses(e.target.value)}
                className="w-full rounded-lg border border-[#E5E5E5] py-3 pl-8 pr-4 text-black placeholder:text-[#999999] focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
          </div>

          {/* Appreciation Rate */}
          <div>
            <label htmlFor="appreciation" className="block text-sm font-semibold text-black">
              Annual Appreciation Rate (%)
            </label>
            <div className="relative mt-1">
              <input
                id="appreciation"
                type="text"
                inputMode="decimal"
                placeholder="3"
                value={appreciationRate}
                onChange={(e) => setAppreciationRate(e.target.value)}
                className="w-full rounded-lg border border-[#E5E5E5] py-3 px-4 text-black placeholder:text-[#999999] focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666666]">%</span>
            </div>
          </div>

          {/* Loan Interest Rate */}
          <div>
            <label htmlFor="loan-rate" className="block text-sm font-semibold text-black">
              Loan Interest Rate (%)
            </label>
            <div className="relative mt-1">
              <input
                id="loan-rate"
                type="text"
                inputMode="decimal"
                placeholder="7"
                value={loanRate}
                onChange={(e) => setLoanRate(e.target.value)}
                className="w-full rounded-lg border border-[#E5E5E5] py-3 px-4 text-black placeholder:text-[#999999] focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666666]">%</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleCalculate}
          className="mt-6 rounded-lg bg-[#1a1a1a] px-8 py-3 font-semibold text-white transition-colors hover:bg-black"
        >
          Calculate ROI
        </button>

        {/* Primary results */}
        {showResults && results && (
          <div className="mt-8 space-y-6">
            {/* Key metrics row */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-[#F5F5F5] p-5 text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#666666]">Cap Rate</p>
                <p className="mt-2 text-3xl font-bold text-black">{formatPercent(results.capRate)}</p>
              </div>
              <div className="rounded-lg bg-[#F5F5F5] p-5 text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#666666]">Cash-on-Cash Return</p>
                <p className="mt-2 text-3xl font-bold text-black">{formatPercent(results.cashOnCash)}</p>
              </div>
              <div className="rounded-lg bg-[#F5F5F5] p-5 text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#666666]">Annual Cash Flow</p>
                <p className={`mt-2 text-3xl font-bold ${results.annualCashFlow >= 0 ? "text-black" : "text-red-600"}`}>
                  {formatCurrency(results.annualCashFlow)}
                </p>
              </div>
              <div className="rounded-lg bg-[#F5F5F5] p-5 text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#666666]">NOI</p>
                <p className="mt-2 text-3xl font-bold text-black">{formatCurrency(results.noi)}</p>
              </div>
            </div>

            {/* Investment breakdown */}
            <div className="rounded-lg border border-[#E5E5E5] p-6">
              <h3 className="text-lg font-bold">Investment Breakdown</h3>
              <table className="mt-4 w-full text-sm">
                <tbody>
                  <tr className="border-b border-[#E5E5E5]">
                    <td className="py-2 text-[#666666]">Down Payment ({downPct}%)</td>
                    <td className="py-2 text-right font-semibold">{formatCurrency(results.downPayment)}</td>
                  </tr>
                  <tr className="border-b border-[#E5E5E5]">
                    <td className="py-2 text-[#666666]">Loan Amount</td>
                    <td className="py-2 text-right font-semibold">{formatCurrency(results.loanAmount)}</td>
                  </tr>
                  <tr className="border-b border-[#E5E5E5]">
                    <td className="py-2 text-[#666666]">Monthly Mortgage Payment</td>
                    <td className="py-2 text-right font-semibold">{formatCurrency(results.monthlyPayment)}</td>
                  </tr>
                  <tr className="border-b border-[#E5E5E5]">
                    <td className="py-2 text-[#666666]">Annual Debt Service</td>
                    <td className="py-2 text-right font-semibold">{formatCurrency(results.annualDebtService)}</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-bold text-black">Net Annual Cash Flow</td>
                    <td className={`py-2 text-right font-bold ${results.annualCashFlow >= 0 ? "text-black" : "text-red-600"}`}>
                      {formatCurrency(results.annualCashFlow)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 5-Year and 10-Year projections side-by-side */}
            <div className="grid gap-6 sm:grid-cols-2">
              {/* 5-Year */}
              <div className="rounded-lg border border-[#E5E5E5] p-6">
                <h3 className="text-lg font-bold">5-Year Projection</h3>
                <div className="mt-4 rounded-lg bg-[#F5F5F5] p-4 text-center">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#666666]">Total Return</p>
                  <p className="mt-1 text-3xl font-bold text-black">{formatCurrency(results.fiveYear.totalReturn)}</p>
                  <p className="mt-1 text-sm text-[#666666]">
                    {formatPercent(results.fiveYear.totalReturnPct)} on cash invested
                  </p>
                </div>
                <table className="mt-4 w-full text-sm">
                  <tbody>
                    <tr className="border-b border-[#E5E5E5]">
                      <td className="py-2 text-[#666666]">Cumulative Cash Flow</td>
                      <td className="py-2 text-right font-semibold">{formatCurrency(results.fiveYear.totalCashFlow)}</td>
                    </tr>
                    <tr className="border-b border-[#E5E5E5]">
                      <td className="py-2 text-[#666666]">Property Value</td>
                      <td className="py-2 text-right font-semibold">{formatCurrency(results.fiveYear.propertyValue)}</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-[#666666]">Equity Gain (Appreciation)</td>
                      <td className="py-2 text-right font-semibold">{formatCurrency(results.fiveYear.equityGain)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 10-Year */}
              <div className="rounded-lg border border-[#E5E5E5] p-6">
                <h3 className="text-lg font-bold">10-Year Projection</h3>
                <div className="mt-4 rounded-lg bg-[#F5F5F5] p-4 text-center">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#666666]">Total Return</p>
                  <p className="mt-1 text-3xl font-bold text-black">{formatCurrency(results.tenYear.totalReturn)}</p>
                  <p className="mt-1 text-sm text-[#666666]">
                    {formatPercent(results.tenYear.totalReturnPct)} on cash invested
                  </p>
                </div>
                <table className="mt-4 w-full text-sm">
                  <tbody>
                    <tr className="border-b border-[#E5E5E5]">
                      <td className="py-2 text-[#666666]">Cumulative Cash Flow</td>
                      <td className="py-2 text-right font-semibold">{formatCurrency(results.tenYear.totalCashFlow)}</td>
                    </tr>
                    <tr className="border-b border-[#E5E5E5]">
                      <td className="py-2 text-[#666666]">Property Value</td>
                      <td className="py-2 text-right font-semibold">{formatCurrency(results.tenYear.propertyValue)}</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-[#666666]">Equity Gain (Appreciation)</td>
                      <td className="py-2 text-right font-semibold">{formatCurrency(results.tenYear.equityGain)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-[#999999]">
              These projections are estimates based on static assumptions. Actual returns will vary with market conditions,
              vacancy rates, rent growth, capital expenditures, and financing changes. This is not financial advice.
              Consult with your CPA and financial advisor before making investment decisions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
