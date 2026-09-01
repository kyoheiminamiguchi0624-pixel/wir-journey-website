import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    // Claude Design handoff package (docs/handoff/pages/*.dc.html, support.js,
    // image-slot.js) is a read-only reference source, not shipped Next.js code.
    "docs/handoff/**",
  ]),
]);

export default eslintConfig;
