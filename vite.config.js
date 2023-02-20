import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],

  esbuild: {
    loader: "jsx",
  },

  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
        ".ts": "tsx",
      },
    },
  },

  build: {
    outDir: "./dist",
    sourcemap: true,
  },
});
