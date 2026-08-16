// oxlint-disable no-magic-numbers import/no-default-export
export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "breaking-change-exclamation-mark": [2, "always"],
    "header-max-length": [2, "always", 100],
    "scope-case": [2, "always", "lower-case"],
    // "scope-enum": [2, "always", [/* Array of scopes */]],
    "scope-max-length": [2, "always", 20],
    "subject-case": [2, "always", ["lower-case"]],
    "subject-full-stop": [2, "never", "."],
  },
};

// # Example of breaking change:
//
// feat!: remove legacy API
//
// BREAKING CHANGE: the legacy API has been removed
