import type { DummyRuleMap } from "oxlint";

import { defineConfig } from "oxlint";

const jsxRules = {
  "import/no-unassigned-import": ["error", { allow: ["**/*.{css,svg,png}"] }],
  "react-perf/jsx-no-new-function-as-prop": ["error", { nativeAllowList: "all" }],
  "react/forbid-component-props": "off",
  "react/jsx-filename-extension": "off",
  "react/jsx-max-depth": ["warn", { max: 8 }],
  "react/jsx-no-literals": "off",
  "react/no-multi-comp": "off",
  "react/only-export-components": ["error", { allowConstantExport: true }],
  "react/react-in-jsx-scope": "off",
  "unicorn/filename-case": "off",
} satisfies DummyRuleMap;

const preactRules = {
  "react/no-unknown-property": ["warn", { ignore: ["class"] }],
  "react/react-compiler": "off",
} satisfies DummyRuleMap;

// oxlint-disable-next-line import/no-default-export
export default defineConfig({
  categories: {
    // Code that is definitely wrong or useless
    correctness: "error",

    // Rules under development that may change
    nursery: "warn",

    // Extra strict rules that may have false positives
    pedantic: "warn",

    // Rules that aim to improve runtime performance
    perf: "error",

    // Rules that ban specific patterns or features
    restriction: "error",

    // Idiomatic and consistent style rules
    style: "warn",

    // Code that is likely to be wrong or useless
    suspicious: "error",
  },

  plugins: [
    "node",
    "promise",
    "typescript",
    // "vitest",
    "import",
    "oxc",
    "react",
    "react-perf",
    "jsx-a11y",
    "unicorn",
  ],

  options: {
    typeCheck: true,
    typeAware: true,
  },

  rules: {
    ...jsxRules,
    ...preactRules,

    "capitalized-comments": "off",
    "eslint/max-lines-per-function": [
      "warn",
      {
        max: 80,
      },
    ],
    "eslint/max-statements": [
      "warn",
      {
        max: 20,
      },
    ],
    "func-names": ["error", "as-needed", { generators: "never" }],
    "func-style": "off",
    "id-length": "off",
    "import/exports-last": "off",
    "import/group-exports": "off",
    "import/no-anonymous-default-export": ["warn", { allowObject: true, allowArray: true }],
    "import/no-default-export": "warn",
    "import/no-duplicates": "off",
    "import/no-empty-named-blocks": "error",
    "import/no-named-export": "off",
    "import/no-nodejs-modules": "off",
    "import/prefer-default-export": "off",
    "no-duplicate-imports": ["error", { allowSeparateTypeImports: true }],
    "no-inline-comments": ["off"],
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
    "no-ternary": ["off"],
    "no-undef": "off",
    "no-undefined": "off",
    "no-unused-vars": "off",
    "no-use-before-define": ["warn", { functions: false }],
    "oxc/no-async-await": "off",
    "oxc/no-optional-chaining": "off",
    "oxc/no-rest-spread-properties": "off",
    "prefer-object-spread": "error",
    "require-await": "off",
    "sort-imports": "off", // Fix by oxfmt
    "sort-keys": ["warn", "asc", { allowLineSeparatedGroups: true, minKeys: 4, natural: true }],
    "typescript/explicit-function-return-type": "off",
    "typescript/explicit-module-boundary-types": "off",
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
    "typescript/prefer-readonly-parameter-types": "off",
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
    "unicorn/no-null": "off",
    "unicorn/require-module-specifiers": "off",
  },
});
