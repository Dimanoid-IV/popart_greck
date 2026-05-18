export type BlogLocale = "el" | "en";

/** URL segment under /{locale}/blog/category/[category] */
export type BlogCategoryId =
  | "gifts"
  | "portrait-guide"
  | "interior"
  | "local-greece"
  | "dream-art";

export type BlogAuthor = {
  name: string;
  url?: string;
  jobTitle?: string;
};

export type BlogFaqItem = {
  question: string;
  answer: string;
};

export type BlogInternalLink = {
  href: string;
  label: string;
};

export type BlogArticle = {
  slug: string;
  locale: BlogLocale;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: BlogAuthor;
  coverImage: string;
  keywords: string[];
  bodyHtml: string;
  faqs?: BlogFaqItem[];
  relatedSlugs?: string[];
  internalLinks?: BlogInternalLink[];
  /** Optional hub for category listing & schema */
  category?: BlogCategoryId;
};
