import type { OxfmtConfig } from "oxfmt";

/**
 * Recommended Oxfmt configuration for modern TypeScript projects.
 *
 * @remarks
 * This preset configures Oxfmt with opinionated formatting and import
 * organization suitable for TypeScript projects using modern web tooling.
 *
 * The preset:
 *
 * - Enables Tailwind CSS class sorting.
 * - Enables automatic import sorting.
 * - Separates type imports from value imports.
 * - Groups built-in and external dependencies together.
 * - Distinguishes internal imports from parent, sibling, and index imports.
 * - Preserves a fallback group for imports that do not match a known category.
 *
 * The preset can be used directly as the project's Oxfmt configuration
 * or extended with project-specific settings.
 *
 * @example
 * Use the preset directly in `oxfmt.config.ts`:
 *
 * ```ts
 * export { default } from "awesome-config/oxfmt.config";
 * ```
 *
 * @example
 * Extend the preset with project-specific settings:
 *
 * ```ts
 * import oxfmtConfig from "awesome-config/oxfmt-config";
 *
 * export default {
 *   ...oxfmtConfig,
 *   sortTailwindcss: false,
 * };
 * ```
 *
 * @see https://oxc.rs/docs/guide/usage/formatter
 */
const oxfmtConfig = {
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
} satisfies OxfmtConfig;

// oxlint-disable-next-line import/no-default-export
export default oxfmtConfig;
