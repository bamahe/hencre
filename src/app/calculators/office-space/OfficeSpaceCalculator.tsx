"use client";

import { useState, useMemo } from "react";

/* -------------------------------------------------------------------
 * OfficeSpaceCalculator — client component
 * Estimates square footage based on headcount, workspace style,
 * and selected amenities. Includes Tampa Bay lease rate estimate.
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

/** Format a number with commas */
function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value);
}

/* -- Square footage per employee by workspace style -- */
const SF_PER_EMPLOYEE: Record<string, { low: number; high: number; label: string }> = {
  open: { low: 100, high: 150, label: "Open Plan" },
  private: { low: 200, high: 300, label: "Private Offices" },
  hybrid: { low: 150, high: 200, label: "Hybrid (Mix of Open & Private)" },
};

/* -- Amenity square footage additions -- */
const AMENITIES = [
  { id: "conference", label: "Conference Rooms", sqft: 300, description: "1 large + 1 huddle room" },
  { id: "breakroom", label: "Break Room / Kitchen", sqft: 200, description: "Kitchenette, seating, appliances" },
  { id: "reception", label: "Reception / Lobby", sqft: 250, description: "Front desk and waiting area" },
  { id: "server", label: "Server / IT Room", sqft: 150, description: "Dedicated server closet or room" },
  { id: "storage", label: "Storage / Filing", sqft: 100, description: "Document storage and supplies" },
  { id: "wellness", label: "Wellness / Mother's Room", sqft: 100, description: "Private wellness space" },
] as const;

/* -- Tampa Bay average lease rates (per SF per year, NNN) -- */
const TAMPA_RATES = {
  classA: { rate: 38, label: "Class A" },
  classB: { rate: 26, label: "Class B" },
  classC: { rate: 18, label: "Class C" },
};

export default function OfficeSpaceCalculator() {
  const [employees, setEmployees] = useState("");
  const [style, setStyle] = useState("hybrid");
  const [selectedAmenities, setSelectedAmenities] = useState<Set<string>>(new Set());
  const [showResults, setShowResults] = useState(false);

  /* Toggle amenity selection */
  function toggleAmenity(id: string) {
    setSelectedAmenities((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  /* Calculate results */
  const results = useMemo(() => {
    const emp = parseInt(employees) || 0;
    if (emp <= 0) return null;

    const styleConfig = SF_PER_EMPLOYEE[style];
    const workspaceLow = emp * styleConfig.low;
    const workspaceHigh = emp * styleConfig.high;

    /* Sum amenity square footage */
    let amenitySqft = 0;
    for (const amenity of AMENITIES) {
      if (selectedAmenities.has(amenity.id)) {
        /* Scale conference rooms for larger teams */
        if (amenity.id === "conference" && emp > 20) {
          amenitySqft += amenity.sqft * Math.ceil(emp / 20);
        } else {
          amenitySqft += amenity.sqft;
        }
      }
    }

    /* Add ~15% for circulation (hallways, corridors, common areas) */
    const circulationLow = Math.round((workspaceLow + amenitySqft) * 0.15);
    const circulationHigh = Math.round((workspaceHigh + amenitySqft) * 0.15);

    const totalLow = workspaceLow + amenitySqft + circulationLow;
    const totalHigh = workspaceHigh + amenitySqft + circulationHigh;
    const totalMid = Math.round((totalLow + totalHigh) / 2);

    return {
      employees: emp,
      styleLabel: styleConfig.label,
      workspaceLow,
      workspaceHigh,
      amenitySqft,
      circulationLow,
      circulationHigh,
      totalLow,
      totalHigh,
      totalMid,
      perEmployeeLow: Math.round(totalLow / emp),
      perEmployeeHigh: Math.round(totalHigh / emp),
    };
  }, [employees, style, selectedAmenities]);

  function handleCalculate() {
    if (parseInt(employees) > 0) {
      setShowResults(true);
    }
  }

  return (
    <div className="space-y-12">

      {/* ---- Input form ---- */}
      <div className="rounded-lg border border-[#E5E5E5] bg-white p-6 sm:p-8">
        <h2 className="text-xl font-bold">Space Requirements</h2>
        <p className="mt-1 text-sm text-[#666666]">
          Tell me about your team and workspace needs.
        </p>

        <div className="mt-6 space-y-6">
          {/* Employee count */}
          <div className="max-w-xs">
            <label htmlFor="employees" className="block text-sm font-semibold text-black">
              Number of Employees
            </label>
            <input
              id="employees"
              type="text"
              inputMode="numeric"
              placeholder="25"
              value={employees}
              onChange={(e) => setEmployees(e.target.value)}
              className="mt-1 w-full rounded-lg border border-[#E5E5E5] py-3 px-4 text-black placeholder:text-[#999999] focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Workspace style */}
          <div>
            <p className="block text-sm font-semibold text-black">Workspace Style</p>
            <div className="mt-2 grid gap-3 sm:grid-cols-3">
              {Object.entries(SF_PER_EMPLOYEE).map(([key, config]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setStyle(key)}
                  className={`rounded-lg border px-4 py-3 text-left text-sm transition-colors ${
                    style === key
                      ? "border-black bg-[#1a1a1a] text-white"
                      : "border-[#E5E5E5] bg-white text-black hover:border-black"
                  }`}
                >
                  <span className="font-semibold">{config.label}</span>
                  <br />
                  <span className={style === key ? "text-white/70" : "text-[#666666]"}>
                    {config.low}-{config.high} SF/person
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div>
            <p className="block text-sm font-semibold text-black">Amenities (select all that apply)</p>
            <div className="mt-2 grid gap-3 sm:grid-cols-2">
              {AMENITIES.map((amenity) => (
                <button
                  key={amenity.id}
                  type="button"
                  onClick={() => toggleAmenity(amenity.id)}
                  className={`rounded-lg border px-4 py-3 text-left text-sm transition-colors ${
                    selectedAmenities.has(amenity.id)
                      ? "border-black bg-[#1a1a1a] text-white"
                      : "border-[#E5E5E5] bg-white text-black hover:border-black"
                  }`}
                >
                  <span className="font-semibold">{amenity.label}</span>
                  <br />
                  <span className={selectedAmenities.has(amenity.id) ? "text-white/70" : "text-[#666666]"}>
                    ~{formatNumber(amenity.sqft)} SF — {amenity.description}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleCalculate}
          className="mt-6 rounded-lg bg-[#1a1a1a] px-8 py-3 font-semibold text-white transition-colors hover:bg-black"
        >
          Calculate Space Needed
        </button>

        {/* Results */}
        {showResults && results && (
          <div className="mt-8 space-y-6">
            {/* Primary result */}
            <div className="rounded-lg bg-[#F5F5F5] p-6 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#666666]">
                Estimated Square Footage Needed
              </p>
              <p className="mt-2 text-4xl font-bold text-black sm:text-5xl">
                {formatNumber(results.totalLow)} &ndash; {formatNumber(results.totalHigh)} SF
              </p>
              <p className="mt-2 text-sm text-[#666666]">
                {formatNumber(results.perEmployeeLow)}-{formatNumber(results.perEmployeeHigh)} SF per employee &middot; {results.styleLabel} layout
              </p>
            </div>

            {/* Breakdown */}
            <div className="rounded-lg border border-[#E5E5E5] p-6">
              <h3 className="text-lg font-bold">Breakdown</h3>
              <table className="mt-4 w-full text-sm">
                <tbody>
                  <tr className="border-b border-[#E5E5E5]">
                    <td className="py-2 text-[#666666]">Workstations ({results.employees} employees)</td>
                    <td className="py-2 text-right font-semibold">
                      {formatNumber(results.workspaceLow)}-{formatNumber(results.workspaceHigh)} SF
                    </td>
                  </tr>
                  {results.amenitySqft > 0 && (
                    <tr className="border-b border-[#E5E5E5]">
                      <td className="py-2 text-[#666666]">Amenities</td>
                      <td className="py-2 text-right font-semibold">{formatNumber(results.amenitySqft)} SF</td>
                    </tr>
                  )}
                  <tr className="border-b border-[#E5E5E5]">
                    <td className="py-2 text-[#666666]">Circulation (~15%)</td>
                    <td className="py-2 text-right font-semibold">
                      {formatNumber(results.circulationLow)}-{formatNumber(results.circulationHigh)} SF
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 font-bold text-black">Total</td>
                    <td className="py-2 text-right font-bold text-black">
                      {formatNumber(results.totalLow)}-{formatNumber(results.totalHigh)} SF
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Tampa Bay lease rate estimates */}
            <div className="rounded-lg border border-[#E5E5E5] p-6">
              <h3 className="text-lg font-bold">Tampa Bay Estimated Annual Lease Cost</h3>
              <p className="mt-1 text-sm text-[#666666]">
                Based on current Tampa Bay average asking rates (per SF/year, NNN).
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {Object.values(TAMPA_RATES).map((rateInfo) => (
                  <div key={rateInfo.label} className="rounded-lg bg-[#F5F5F5] p-4 text-center">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#666666]">
                      {rateInfo.label} Office
                    </p>
                    <p className="mt-1 text-xl font-bold text-black">
                      {formatCurrency(results.totalMid * rateInfo.rate)}
                    </p>
                    <p className="mt-1 text-xs text-[#666666]">
                      ${rateInfo.rate}/SF/yr &middot; ~{formatNumber(results.totalMid)} SF
                    </p>
                    <p className="mt-1 text-xs text-[#666666]">
                      {formatCurrency(Math.round((results.totalMid * rateInfo.rate) / 12))}/month
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-[#999999]">
                Rates are approximate market averages and vary by submarket, building age, and lease terms. NNN means you also
                pay property taxes, insurance, and CAM charges on top of the base rent. Contact me for current comps in your target area.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
