import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

// Create 404.html from built index.html for GitHub Pages SPA fallback
const copy404Plugin = (): Plugin => ({
  name: "copy-404",
  apply: "build",
  closeBundle() {
    const outDir = path.resolve(__dirname, "docs");
    const indexPath = path.join(outDir, "index.html");
    const notFoundPath = path.join(outDir, "404.html");
    try {
      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, notFoundPath);
        // eslint-disable-next-line no-console
        console.log("Created docs/404.html for SPA fallback");
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error("Failed to create 404.html", e);
    }
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/almha/',
  build: {
    outDir: 'docs',
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), copy404Plugin(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
