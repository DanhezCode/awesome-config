/* eslint-disable tsdoc/syntax */

/** @type {import("prettier").Config} */
export const prettierBase = {
  arrowParens: "avoid",
  bracketSpacing: true,
  endOfLine: "lf",
  jsxSingleQuote: false,
  printWidth: 100,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,
};

export default prettierBase;

/** @type {import("prettier").Config} */
export const prettierBaseUI = {
  plugins: ["prettier-plugin-tailwindcss"],
  // tailwindStylesheet: "packages/ui/src/styles/globals.css",
  tailwindFunctions: ["cn", "createTV", "cx", "tv"],
};
