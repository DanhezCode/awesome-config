import { defineConfig } from "tsdown";

const watch = process.env.WATCH ? JSON.parse(process.env.WATCH) : null;

export const baseConfig = defineConfig({
  clean: true,
  exports: true,
  format: ["esm"],
  outDir: "dist",
  platform: "browser",
  target: "es2022",
});

export const baseDevelopment = defineConfig({
  ...baseConfig,
  define: {
    "process.env.NODE_ENV": "'development'",
  },
  dts: true,
  minify: false,
  sourcemap: true,
  treeshake: false,
  watch: watch ?? true,
});

export const baseProduction = defineConfig({
  ...baseConfig,
  define: {
    "process.env.NODE_ENV": "'production'",
  },
  dts: false,
  minify: true,
  sourcemap: false,
  treeshake: true,
  watch: watch ?? false,
});
