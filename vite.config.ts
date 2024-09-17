import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
    sourcemap: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      "@": "/src",
      fonts: "/public/fonts",
    },
  },
});
