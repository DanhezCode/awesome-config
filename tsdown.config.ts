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

      // Remove project-specific configurations that should not be enforced as shared
      // presets. These configurations depend on project structure, build strategy,
      // testing requirements, or release workflow and should be defined by each
      // consuming project instead.
      //
      // - `tsdown.config`: depends on package entry points and publishing strategy.
      // - `vitest.config`: coverage thresholds and test settings are project-specific.
      // - `release.config`: release workflows vary between repositories.
      delete exports["./tsdown.config"];
      delete exports["./vitest.config"];
      delete exports["./release.config"];

      return exports;
    },
  },

  outDir: "dist",
  target: false,
});
