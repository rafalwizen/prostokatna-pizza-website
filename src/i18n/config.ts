// Central i18n config. Astro's built-in routing is intentionally NOT used —
// we hand-author exactly two pages (src/pages/index.astro and en/index.astro)
// and pass `lang` down explicitly. These helpers keep the language URLs and
// hreflang map consistent everywhere (head, sitemap, JSON-LD, header toggle).

export const SITE_URL = "https://prostokatna.pl";
export const defaultLang = "pl";
export const languages = ["pl", "en"] as const;
export type Lang = (typeof languages)[number];

// Root-relative path for a language. Trailing slashes match Astro's directory
// build format and the sitemap output, keeping canonical/hreflang consistent.
export function localizedPath(lang: Lang): string {
  return lang === defaultLang ? "/" : `/${lang}/`;
}

// Absolute URL for a language (used by canonical / hreflang / OG).
export function localizedUrl(lang: Lang): string {
  return `${SITE_URL}${localizedPath(lang)}`;
}

export const hreflangMap: Record<string, string> = {
  pl: localizedUrl("pl"),
  en: localizedUrl("en"),
  "x-default": localizedUrl("pl"),
};
