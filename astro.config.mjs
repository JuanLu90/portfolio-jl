import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.juanlumoreno.dev",
  integrations: [sitemap(), robotsTxt()],
});
