import type { BlogLocale } from "./types";
import { SITE_ORIGIN } from "@/lib/seo/site-config";

export const SITE_URL = SITE_ORIGIN;

export const BLOG_LOCALES: BlogLocale[] = ["el", "en"];

export const BLOG_LOCALE_LABELS: Record<BlogLocale, string> = {
  el: "Ελληνικά",
  en: "English",
};
