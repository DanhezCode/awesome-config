/* oxlint-disable max-lines */
import type { DummyRuleMap, OxlintConfig, RuleCategories } from "oxlint";

import { defineConfig } from "oxlint";

const categories = {
  // Rules that detect code that is definitely incorrect or useless.
  correctness: "error",

  // Experimental rules that may change or produce false positives.
  nursery: "warn",

  // Strict rules with a higher likelihood of false positives.
  pedantic: "warn",

  // Performance-related rules are advisory in the recommended preset.
  perf: "warn",

  // Rules that restrict specific patterns or APIs.
  restriction: "warn",

  // Idiomatic and consistency-oriented rules.
  style: "warn",

  // Rules that detect code that is likely to be incorrect or useless.
  suspicious: "error",
} satisfies RuleCategories;

const plugins = [
  "node",
  "promise",
  "typescript",
  "import",
  "oxc",
  "react",
  "react-perf",
  "jsx-a11y",
  "unicorn",
] satisfies NonNullable<OxlintConfig["plugins"]>;

const options = {
  typeCheck: true,
  typeAware: true,
} satisfies NonNullable<OxlintConfig["options"]>;

/**
 * Rules related to module imports.
 *
 * These rules are intentionally kept separate from JSX/framework-specific
 * rules because they are useful across both frontend and backend projects.
 */
const importRules = {
  // CSS and static assets are intentionally allowed as side-effect imports.
  // These imports represent resources rather than JavaScript dependencies
  // whose side effects should normally be considered suspicious.
  "import/no-unassigned-import": ["error", { allow: ["**/*.{css,svg,png}"] }],

  // Named exports generally provide better refactoring, searching, and
  // symbol discoverability. This remains a warning because framework
  // entry points may legitimately require default exports.
  "import/no-default-export": "warn",

  // Anonymous object and array exports are common in configuration modules
  // where introducing a name adds little value.
  "import/no-anonymous-default-export": [
    "warn",
    {
      allowObject: true,
      allowArray: true,
    },
  ],

  // Duplicate imports are handled by the core rule below, which also
  // supports keeping value imports and type imports separate.
  "import/no-duplicates": "off",

  "import/no-empty-named-blocks": "error",

  // Named exports are preferred but not mandatory.
  "import/no-named-export": "off",

  // Node.js built-ins are valid in server-side and tooling code.
  "import/no-nodejs-modules": "off",

  // A module with a single export does not need to use a default export.
  "import/prefer-default-export": "off",

  // These rules are organizational preferences rather than correctness
  // requirements.
  "import/exports-last": "off",
  "import/group-exports": "off",
} satisfies DummyRuleMap;

/**
 * Rules related to JSX and React-compatible JSX tooling.
 *
 * The React plugin is used as a JSX/static-analysis layer. Rules whose
 * semantics depend on React runtime behavior should be reviewed before
 * enabling them for another JSX implementation such as Preact.
 */
const jsxRules = {
  // Native DOM handlers are excluded because inline callbacks are idiomatic
  // there and their optimization trade-offs differ from component props.
  //
  // This remains a warning in the recommended preset because inline
  // callbacks are not inherently a correctness problem.
  "react-perf/jsx-no-new-function-as-prop": ["warn", { nativeAllowList: "all" }],

  // Component APIs should remain flexible in a reusable base preset.
  "react/forbid-component-props": "off",

  // JSX file naming conventions are project-specific.
  "react/jsx-filename-extension": "off",

  // Deep JSX can reduce readability, but the appropriate limit is
  // subjective. Eight levels provides a useful signal without being
  // unnecessarily restrictive.
  "react/jsx-max-depth": ["warn", { max: 8 }],

  // Literal JSX text is often the clearest representation for static UI
  // content. Internationalization belongs to the consuming project.
  "react/jsx-no-literals": "off",

  // Multiple closely related components can legitimately share a module.
  "react/no-multi-comp": "off",

  // Component modules may also expose stable constants.
  "react/only-export-components": ["warn", { allowConstantExport: true }],

  // Modern JSX transforms do not require React to be in scope.
  "react/react-in-jsx-scope": "off",

  // File naming conventions are project-specific.
  "unicorn/filename-case": "off",
} satisfies DummyRuleMap;

/**
 * General rules shared by TypeScript and JavaScript projects.
 */
const baseRules = {
  "capitalized-comments": "off",

  // Large functions are useful refactoring signals but should not block
  // legitimate orchestration code.
  "eslint/max-lines-per-function": [
    "warn",
    {
      max: 80,
    },
  ],

  // A high statement count is generally a useful refactoring signal.
  "eslint/max-statements": [
    "warn",
    {
      max: 20,
    },
  ],

  // Prefer inferred function names where the language can provide them.
  // Generator names remain explicit because they can be useful when
  // inspecting stack traces and generator behavior.
  "func-names": ["error", "as-needed", { generators: "never" }],

  // Function declaration vs expression is an architectural preference.
  "func-style": "off",

  // Identifier length is highly contextual.
  "id-length": "off",

  // Anonymous default exports are handled by the import plugin.
  "import/no-anonymous-default-export": "warn",

  // The core rule is preferred because it explicitly supports separate
  // type imports.
  "no-duplicate-imports": [
    "error",
    {
      allowSeparateTypeImports: true,
    },
  ],

  "no-inline-comments": "off",

  // Detect unexplained domain-specific numeric constants without forcing
  // trivial structural values into named constants.
  "no-magic-numbers": [
    "warn",
    {
      detectObjects: false,
      enforceConst: true,
      ignore: [-1, 0, 1, 2],
      ignoreArrayIndexes: true,
      ignoreClassFieldInitialValues: true,
      ignoreDefaultValues: true,
      ignoreEnums: true,
      ignoreNumericLiteralTypes: true,
      ignoreReadonlyClassProperties: true,
      ignoreTypeIndexes: true,
    },
  ],

  "no-plusplus": "off",
  "no-ternary": "off",

  // TypeScript performs this analysis more accurately than the generic
  // JavaScript implementation.
  "no-undef": "off",

  "no-undefined": "off",

  // Replaced by the TypeScript-specific implementation below.
  "no-unused-vars": "off",

  // Function declarations may safely appear before their use. Other
  // declarations still receive a warning to improve readability.
  "no-use-before-define": [
    "warn",
    {
      functions: false,
    },
  ],

  // Modern JavaScript features should not be restricted by the base preset.
  "oxc/no-async-await": "off",
  "oxc/no-optional-chaining": "off",
  "oxc/no-rest-spread-properties": "off",

  // Prefer native object spread over Object.assign-style object creation.
  "prefer-object-spread": "error",

  // Async functions may intentionally preserve an asynchronous API contract.
  "require-await": "off",

  // Import ordering is delegated to oxfmt.
  "sort-imports": "off",

  // Predictable key ordering is useful for sufficiently large objects.
  "sort-keys": [
    "warn",
    "asc",
    {
      allowLineSeparatedGroups: true,
      minKeys: 6,
      natural: true,
    },
  ],

  // Explicit return types are not required when TypeScript can infer them
  // accurately.
  "typescript/explicit-function-return-type": "off",

  "typescript/explicit-module-boundary-types": "off",

  // Underscore-prefixed bindings explicitly communicate intentional
  // non-use while still reporting genuinely unused bindings.
  "typescript/no-unused-vars": [
    "error",
    {
      args: "after-used",
      argsIgnorePattern: "^_{1,2}",
      caughtErrors: "all",
      caughtErrorsIgnorePattern: "^_{1,2}",
      destructuredArrayIgnorePattern: "^_{1,2}",

      fix: {
        imports: "safe-fix",
        variables: "suggestion",
      },

      ignoreRestSiblings: true,
      ignoreUsingDeclarations: true,
      reportUsedIgnorePattern: false,
      reportVarsOnlyUsedAsTypes: false,
      vars: "all",
      varsIgnorePattern: "^_{1,2}",
    },
  ],

  // Readonly parameters can improve API guarantees but introduce substantial
  // annotation noise when enforced globally.
  "typescript/prefer-readonly-parameter-types": "off",

  // Truthiness is allowed for nullable strings and objects. Nullable
  // booleans, numbers, and enums remain explicit to avoid confusing
  // falsy values with absence.
  "typescript/strict-boolean-expressions": [
    "warn",
    {
      allowAny: false,
      allowNullableBoolean: false,
      allowNullableEnum: false,
      allowNullableNumber: false,
      allowNullableObject: true,
      allowNullableString: true,
      allowNumber: true,
      allowString: true,
    },
  ],

  // `null` is a legitimate value in many TypeScript APIs and data models.
  "unicorn/no-null": "off",

  // Modern TypeScript/bundler projects commonly omit module extensions.
  "unicorn/require-module-specifiers": "off",
} satisfies DummyRuleMap;

/**
 * Recommended rules for TypeScript/JSX projects.
 */
const rules = {
  ...baseRules,
  ...importRules,
  ...jsxRules,
} satisfies DummyRuleMap;

/**
 * Preact-specific overrides.
 *
 * This object intentionally contains only rules whose behavior differs
 * from the generic JSX preset.
 */
export const preactRules = {
  // Preact supports `class` directly, while the React-oriented rule expects
  // `className`.
  "react/no-unknown-property": [
    "warn",
    {
      ignore: ["class"],
    },
  ],

  // React Compiler rules do not apply to Preact.
  "react/react-compiler": "off",
} satisfies DummyRuleMap;

/**
 * Recommended Oxlint configuration for modern TypeScript/JSX projects.
 *
 * The preset provides a strict correctness baseline while keeping
 * performance, restriction, and subjective stylistic rules non-blocking.
 *
 * Type-aware linting is enabled, so the consuming project must provide
 * a valid TypeScript configuration.
 */
const configLint = defineConfig({
  categories,
  options,
  plugins,
  rules,
} satisfies OxlintConfig);

// oxlint-disable-next-line import/no-default-export
export default configLint;
