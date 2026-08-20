import { defineConfig } from "vitest/config";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // No @vitejs/plugin-react: its only job here would be Fast Refresh, which a test
  // run has no use for. esbuild's automatic JSX runtime is all the components need.
  esbuild: { jsx: "automatic", jsxImportSource: "react" },
  resolve: {
    // Mirrors the "@/*" path alias in tsconfig.json.
    alias: { "@": path.resolve(root, "src") },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./test/setup.ts"],
    include: ["test/**/*.test.{ts,tsx}"],
  },
});
