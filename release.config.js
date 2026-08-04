/** @type {import('semantic-release').GlobalConfig} */
export default {
  branches: ["main", { name: "beta", prerelease: true, channel: "beta" }],

  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        presetConfig: {
          types: [
            { type: "feat", section: "🚀 New Features", effect: "changelog" },
            { type: "fix", section: "🐞 Bug Fixes", effect: "changelog" },
            { type: "docs", section: "📚 Documentation Improvements", effect: "changelog" },
            { type: "style", section: "🎨 Code Style & Formatting", effect: "changelog" },
            { type: "refactor", section: "🔧 Code Refactoring", effect: "changelog" },
            { type: "perf", section: "⚡ Performance Improvements", effect: "changelog" },
            { type: "test", section: "🧪 Test Updates", effect: "changelog" },
            { type: "chore", section: "🌀 Miscellaneous", effect: "changelog" },
          ],
        },
      },
    ],
    "@semantic-release/npm",
    "@semantic-release/github",
  ],
};
