#!/usr/bin/env npx tsx
/**
 * Exports florida-counties data to JSON for the content engine script.
 * Run once after building the lib data, or whenever county data changes.
 */
import * as fs from "fs";
import * as path from "path";

// We'll read the TS source and extract the data
// For now, create a simple JSON version
const outputPath = path.join(__dirname, "../src/lib/florida-counties-data.json");

async function main() {
  // Dynamic import of the counties module
  const mod = await import("../src/lib/florida-counties");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const counties = mod.FLORIDA_COUNTIES || (mod as any).floridaCounties || (mod as any).default;

  if (!counties) {
    console.error("Could not find counties export. Check src/lib/florida-counties.ts");
    process.exit(1);
  }

  fs.writeFileSync(outputPath, JSON.stringify(counties, null, 2), "utf-8");
  console.log(`Exported ${Array.isArray(counties) ? counties.length : "?"} counties to ${outputPath}`);
}

main().catch(console.error);
