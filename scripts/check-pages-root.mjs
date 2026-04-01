import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const indexHtmlPath = resolve(root, "index.html");
const rootAssetPath = resolve(root, "assets/index.js");

const indexHtml = readFileSync(indexHtmlPath, "utf8");
const failures = [];

if (!indexHtml.includes("assets/index.js")) {
  failures.push("index.html does not reference the committed Pages bundle.");
}

if (!existsSync(rootAssetPath)) {
  failures.push("assets/index.js is missing from the repository root.");
}

if (failures.length > 0) {
  console.error("Pages root verification failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Pages root verification passed.");
