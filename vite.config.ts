import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === "production";
  return {
    base: isProd ? "/almha/" : "/",
    build: {
      outDir: "docs",
    },
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      ...(mode === "development" ? [componentTagger()] : []),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});