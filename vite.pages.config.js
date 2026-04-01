import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/tire-promo/",
  build: {
    outDir: "assets",
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: {
      input: resolve(currentDir, "src/main.tsx"),
      output: {
        format: "es",
        entryFileNames: "index.js",
        inlineDynamicImports: true,
      },
    },
  },
});
