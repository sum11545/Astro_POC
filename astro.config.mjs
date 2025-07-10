// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "astro-sitemap";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321",
  integrations: [sitemap()],
});
