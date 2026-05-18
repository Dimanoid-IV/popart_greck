/** Canonical production origin (www aligned with blog + Stripe success URLs). */
export const SITE_ORIGIN = "https://www.artcanvas.gr";

export const SITE_NAME = "ArtCanvas.gr";

export const LOCALE_ALTERNATES = {
  el: `${SITE_ORIGIN}/el/blog`,
  en: `${SITE_ORIGIN}/en/blog`,
} as const;
