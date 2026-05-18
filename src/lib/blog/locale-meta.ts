import type { BlogLocale } from "./types";
import { SITE_NAME } from "@/lib/seo/site-config";

export function blogOpenGraphLocale(locale: BlogLocale): string {
  return locale === "el" ? "el_GR" : "en_US";
}

export function blogSchemaLanguage(locale: BlogLocale): string {
  return locale === "el" ? "el-GR" : "en-GR";
}

export function defaultBlogLocale(): BlogLocale {
  return "el";
}

export { SITE_NAME as blogSiteName };
