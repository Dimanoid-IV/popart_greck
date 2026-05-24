/** Canonical production origin (www aligned with blog + Stripe success URLs). */
export const SITE_ORIGIN = "https://www.artcanvas.gr";

export const SITE_NAME = "ArtCanvas.gr";

/** Shown on the site (footer, success page, custom-request note). */
export const PUBLIC_CONTACT_EMAIL = "info@artcanvas.gr";

/** Actual inbox for custom portrait requests from the order flow. */
export const ORDER_INQUIRY_EMAIL = "popartee@gmail.com";

/** Brand logo in /public */
export const SITE_LOGO = "/logg.png";

export const LOCALE_ALTERNATES = {
  el: `${SITE_ORIGIN}/el/blog`,
  en: `${SITE_ORIGIN}/en/blog`,
} as const;
