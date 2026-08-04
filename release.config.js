/** @type {import('semantic-release').GlobalConfig} */
export default {
  branches: ["main", { name: "beta", prerelease: true, channel: "beta" }],

  plugins: [
    "@semantic-release/commit-analyzer",
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        presetConfig: {
          types: [
            { type: "feat", section: "🚀 New Features", effect: "bump" },
            { type: "fix", section: "🐞 Bug Fixes", effect: "bump" },
            { type: "docs", section: "📚 Documentation Improvements", effect: "bump" },
            { type: "style", section: "🎨 Code Style & Formatting", effect: "bump" },
            { type: "refactor", section: "🔧 Code Refactoring", effect: "bump" },
            { type: "perf", section: "⚡ Performance Improvements", effect: "bump" },
            { type: "test", section: "🧪 Test Updates", effect: "bump" },
            { type: "chore", section: "🌀 Miscellaneous", effect: "bump" },
          ],
        },
      },
    ],
    ["@semantic-release/npm", { npmPublish: true }],
    ["@semantic-release/github"],
  ],
};
