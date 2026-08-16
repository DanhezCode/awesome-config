import { defineConfig } from "oxfmt";

// oxlint-disable-next-line import/no-default-export
export default defineConfig({
  sortTailwindcss: true,
  sortImports: {
    groups: [
      "type-import",
      ["value-builtin", "value-external"],
      "type-internal",
      "value-internal",
      ["type-parent", "type-sibling", "type-index"],
      ["value-parent", "value-sibling", "value-index"],
      "unknown",
    ],
  },
});
