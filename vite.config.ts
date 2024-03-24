import { InlineConfig, UserConfig, defineConfig } from "vite";
import react from "@vitejs/plugin-react";

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

export default defineConfig({
  plugins: [react()],

  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/tests/setup.ts",
  },
} as VitestConfigExport);
