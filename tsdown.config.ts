import { defineConfig } from "tsdown";

// oxlint-disable-next-line import/no-default-export
export default defineConfig({
  deps: {
    neverBundle: true,
  },
  dts: true,
  entry: ["**/*.config.ts"],

  exports: {
    customExports(exports) {
      const lefthook = "./lefthook.yml";
      exports[lefthook] = lefthook;

      delete exports["./tsdown.config"];
      delete exports["./vitest.config"];

      return exports;
    },
  },

  outDir: "dist",
  target: false,
});
