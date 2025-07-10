// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "astro-sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-poc-olive.vercel.app/",
  integrations: [sitemap()],
});
