import type { CSpellSettings } from "cspell";

/**
 * Recommended CSpell configuration for modern TypeScript projects.
 *
 * @remarks
 * This preset configures CSpell with dictionaries and language support
 * commonly required by TypeScript, JavaScript, web, Node.js, and development
 * projects.
 *
 * The preset:
 *
 * - Enables common programming-language and development dictionaries.
 * - Supports English and Spanish, including `es-ES`.
 * - Loads the Spanish dictionary from `@cspell/dict-es-es`.
 * - Checks JavaScript, TypeScript, JSX, TSX, text, and Markdown files.
 * - Ignores generated and dependency directories.
 * - Allows common tooling terms such as `oxlint`, `oxfmt`, and `tsgolint`.
 *
 * The preset can be used directly as the project's CSpell configuration
 * or extended with project-specific settings.
 *
 * @example
 * Use the preset directly in `cspell.config.ts`:
 *
 * ```ts
 * export { default } from "awesome-config/cspell.config";
 * ```
 *
 * @example
 * Extend the preset with project-specific settings:
 *
 * ```ts
 * import cspellSettings from "awesome-config/cspell-config";
 *
 * export default {
 *   ...cspellSettings,
 *   dictionaries: [
 *     ...cspellSettings.dictionaries,
 *     "custom-dictionary",
 *   ],
 *   words: [
 *     ...cspellSettings.words,
 *     "myProjectTerm",
 *   ],
 * };
 * ```
 *
 * @see https://cspell.org/
 */
const cspellSettings = {
  dictionaries: [
    "typescript",
    "git",
    "bash",
    "sql",
    "filetypes",
    "node",
    "npm",
    "html",
    "css",
    "json",
    "markdown",
    "softwareTerms",
  ],
  files: ["**/*.{js,ts,jsx,tsx,txt,md}"],
  ignorePaths: ["node_modules", "dist", "coverage", "build"],
  import: ["@cspell/dict-es-es/cspell-ext.json"],
  language: "en,es,es-ES",
  words: ["oxlint", "oxfmt", "tsgolint"],
} satisfies CSpellSettings;

// oxlint-disable-next-line import/no-default-export
export default cspellSettings;
