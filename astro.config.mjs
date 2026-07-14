import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Astro's built-in i18n routing is intentionally NOT configured: we hand-author
// exactly two pages (src/pages/index.astro for PL, src/pages/en/index.astro for EN)
// and pass the lang string down explicitly. The sitemap integration gets its own
// i18n block below, independent of Astro routing, so it emits hreflang alternates.
export default defineConfig({
  site: "https://prostokatna.pl",
  output: "static",
  // build.format defaults to "directory" -> dist/index.html, dist/en/index.html.
  // home.pl serves /en/ from /en/index.html cleanly via mod_dir.
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "pl",
        locales: { pl: "pl-PL", en: "en-US" },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
