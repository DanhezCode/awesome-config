import { defineConfig } from "vitest/config";

// oxlint-disable-next-line import/no-default-export
export default defineConfig({
  test: {
    // reporters: ["default", "junit"]
    coverage: {
      include: ["src/**/*.{ts,tsx}"],

      reporter: ["text", "html", "lcov"],

      thresholds: {
        branches: 90,
        functions: 90,
        lines: 90,
        statements: 90,
      },
    },
  },
});
