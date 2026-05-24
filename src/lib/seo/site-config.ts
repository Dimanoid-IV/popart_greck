/** Canonical production origin (www aligned with blog + Stripe success URLs). */
export const SITE_ORIGIN = "https://www.artcanvas.gr";

export const SITE_NAME = "ArtCanvas.gr";

/** Shown on the site (footer, success page, custom-request note). */
export const PUBLIC_CONTACT_EMAIL = "info@artcanvas.gr";

/** Operations inbox (custom portrait mailto + paid order copies). */
export const ORDER_INQUIRY_EMAIL = "popartee@gmail.com";

/** Paid-order admin notifications: Vercel ADMIN_EMAIL + ORDER_INQUIRY_EMAIL (deduped). */
export function getAdminOrderNotificationEmails(): string[] {
  const emails = [process.env.ADMIN_EMAIL, ORDER_INQUIRY_EMAIL].filter(
    (value): value is string => typeof value === "string" && value.trim().length > 0
  );
  return [...new Set(emails)];
}

/** Brand logo in /public */
export const SITE_LOGO = "/logg.png";

export const LOCALE_ALTERNATES = {
  el: `${SITE_ORIGIN}/el/blog`,
  en: `${SITE_ORIGIN}/en/blog`,
} as const;
