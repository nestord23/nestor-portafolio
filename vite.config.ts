import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "inline",
      includeManifestIcons: false,
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,jpg,jpeg,webp,gif,ico}"],
        globIgnores: ["IconoPagina.*"],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
      },
      manifest: {
        name: "Néstor Montenegro - Portafolio",
        short_name: "Néstor Dev",
        description: "Portafolio de Néstor Montenegro, Desarrollador Frontend",
        lang: "es",
        theme_color: "#0a0a0a",
        background_color: "#0a0a0a",
        display: "standalone",
        icons: [
          { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
          {
            src: "/icons/icon-512-maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: "vendor",
              test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              priority: 30,
            },
            {
              name: "three",
              test: /node_modules[\\/]three[\\/]/,
              priority: 20,
              maxSize: 400_000,
            },
            {
              name: "ui",
              test: /node_modules[\\/](framer-motion|motion-dom|motion-utils|lucide-react|react-icons)[\\/]/,
              priority: 10,
            },
          ],
        },
      },
    },
  },
});
