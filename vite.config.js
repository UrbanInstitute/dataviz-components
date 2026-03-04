import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [sveltekit()],
  optimizeDeps: {
    include: ["maplibre-gl"],
    esbuildOptions: {
      target: "esnext"
    }
  },
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"]
  }
});
