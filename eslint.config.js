import { readFileSync } from "node:fs";
import path from "node:path";

import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import vitest from "@vitest/eslint-plugin";
import { defineConfig } from "eslint/config";
import preact from "eslint-config-preact";
import prettierConfig from "eslint-config-prettier";
import compat from "eslint-plugin-compat";
import { importX } from "eslint-plugin-import-x";
import jsxA11y from "eslint-plugin-jsx-a11y";
import node from "eslint-plugin-n";
import prettierPlugin from "eslint-plugin-prettier";
import pluginPromise from "eslint-plugin-promise";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactPerf from "eslint-plugin-react-perf";
import { reactRefresh } from "eslint-plugin-react-refresh";
import regexp, { configs } from "eslint-plugin-regexp";
import security from "eslint-plugin-security";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tsdoc from "eslint-plugin-tsdoc";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";

const gitignore = readFileSync(path.join(process.cwd(), ".gitignore"), "utf8")
  .split("\n")
  .filter(Boolean)
  .map(line => {
    // Ignore comments
    if (line.startsWith("#")) return;

    // Handle directory ignores by matching all files within the directory
    if (line.trimEnd().endsWith("/")) return `**/${line}**`;

    return line;
  })
  .filter(Boolean);

const baseConfig = {
  files: ["**/*.{ts,tsx,js,jsx}"],

  languageOptions: {
    ecmaVersion: "latest",
    globals: {
      ...globals.serviceworker,
      ...globals.browser,
      ...globals.node,
      __CLIENT__: "readonly",
      __SERVER__: "readonly",
      Bun: "readonly",
    },
    parser: tsparser,
    sourceType: "module",
  },

  plugins: {
    "@typescript-eslint": tseslint,
    tsdoc,
    n: node,
    prettier: prettierPlugin,
    regexp,
    security,
    unicorn,
    "import-x": importX,
    "simple-import-sort": simpleImportSort,
    vitest,
    promise: pluginPromise,
  },

  rules: {
    ...tseslint.configs.recommended.rules,
    ...node.configs["flat/recommended-module"].rules,
    ...pluginPromise.configs["flat/recommended"].rules,

    ...importX.configs.recommended.rules,
    ...importX.configs.typescript.rules,
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import-x/first": "error",
    "import-x/newline-after-import": "error",
    "import-x/no-duplicates": "error",

    ...configs.recommended.rules,
    ...security.configs.recommended.rules,
    ...vitest.configs.recommended.rules,

    ...unicorn.configs.recommended.rules,
    ...prettierPlugin.configs.recommended.rules,
    ...prettierConfig.rules,

    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^__", varsIgnorePattern: "^__" },
    ],
    "tsdoc/syntax": "warn",
    "unicorn/no-null": "off",
  },
};

const uiReactConfig = {
  plugins: {
    ...baseConfig.plugins,
    "react-refresh": reactRefresh.plugin,
    compat,
    react,
    "react-perf": reactPerf,
    "jsx-a11y": jsxA11y,
    "react-hooks": reactHooks,
  },

  rules: {
    ...baseConfig.rules,
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
    ...reactHooks.configs["recommended-latest"].rules,
    ...reactPerf.configs.recommended.rules,
    ...reactRefresh.configs.vite().rules,

    ...compat.configs["flat/recommended"].rules,
    ...jsxA11y.configs.strict.rules,
  },
};

const uiPreactConfig = {
  ...uiReactConfig,
  rules: {
    ...uiReactConfig.rules,
    ...preact[1].rules,
  },
  settings: preact[1].settings,
};

const ignoreConfig = {
  ignores: [...gitignore],
};

export const eslintBase = defineConfig(baseConfig, ignoreConfig);
export const eslintUIReact = defineConfig(
  {
    ...baseConfig,
    ...uiReactConfig,
  },
  ignoreConfig
);
export const eslintUIPreact = defineConfig(
  {
    ...baseConfig,
    ...uiPreactConfig,
  },
  ignoreConfig
);

export default eslintBase;
