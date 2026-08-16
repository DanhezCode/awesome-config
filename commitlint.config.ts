import type { UserConfig } from "@commitlint/types";

import { RuleConfigSeverity } from "@commitlint/types";

const MAX_HEADER_LENGTH = 100;
const MAX_SCOPE_LENGTH = 20;

/**
 * Recommended Commitlint configuration for Conventional Commits.
 *
 * @remarks
 * This preset extends `@commitlint/config-conventional` and provides
 * opinionated rules for commit headers, scopes, subjects, and breaking
 * changes.
 *
 * The preset enforces:
 *
 * - A maximum header length of 100 characters.
 * - A maximum scope length of 20 characters.
 * - Lower-case scopes.
 * - Lower-case subjects.
 * - No trailing period in commit subjects.
 * - Explicit breaking-change exclamation marks.
 *
 * The preset can be used directly as the project's Commitlint configuration
 * or extended with project-specific rules.
 *
 * @example
 * Use the preset directly in `commitlint.config.ts`:
 *
 * ```ts
 * import commitlintConfig from "@your-scope/commitlint-config";
 *
 * export default commitlintConfig;
 * ```
 *
 * @example
 * Extend the preset with project-specific rules:
 *
 * ```ts
 * import { RuleConfigSeverity } from "@commitlint/types";
 *
 * import commitlintConfig from "@your-scope/commitlint-config";
 *
 * export default {
 *   ...commitlintConfig,
 *   rules: {
 *     ...commitlintConfig.rules,
 *     "scope-enum": [
 *       RuleConfigSeverity.Error,
 *       "always",
 *       ["api", "ui", "docs"],
 *     ],
 *   },
 * };
 * ```
 *
 * @see https://commitlint.js.org/
 * @see https://www.conventionalcommits.org/
 */
const commitlintConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // @ts-expect-error -- Incorrectly typed as CaseRuleConfig; see https://github.com/conventional-changelog/commitlint/issues/4953
    "breaking-change-exclamation-mark": [RuleConfigSeverity.Error, "always"],
    "header-max-length": [RuleConfigSeverity.Error, "always", MAX_HEADER_LENGTH],
    "scope-case": [RuleConfigSeverity.Error, "always", "lower-case"],
    "scope-max-length": [RuleConfigSeverity.Error, "always", MAX_SCOPE_LENGTH],
    "subject-case": [RuleConfigSeverity.Error, "always", ["lower-case"]],
    "subject-full-stop": [RuleConfigSeverity.Error, "never", "."],
  },
} satisfies UserConfig;

// oxlint-disable-next-line import/no-default-export
export default commitlintConfig;
