import type { BlogLocale } from "./types";

export type BlogUiLabels = {
  blogTitle: string;
  blogIntro: string;
  readMore: string;
  authorTitle: string;
  faqHeading: string;
  internalLinksHeading: string;
  relatedHeading: string;
  readingTime: (minutes: number) => string;
  breadcrumbBlog: string;
  categoriesHeading: string;
  emptyCategory: string;
};

const LABELS: Record<BlogLocale, BlogUiLabels> = {
  el: {
    blogTitle: "Ιστολόγιο ArtCanvas.gr",
    blogIntro:
      "Συμβουλές και ιδέες για προσωποποιημένα καλλιτεχνικά πορτραίτα στην Ελλάδα — ψηφιακή ζωγραφική, εκτύπωση σε καμβά και δώρα.",
    readMore: "Διαβάστε περισσότερα",
    authorTitle: "Συγγραφέας",
    faqHeading: "Συχνές ερωτήσεις",
    internalLinksHeading: "Προτείνουμε επίσης",
    relatedHeading: "Σχετικά άρθρα",
    readingTime: (m) => `${m} λεπτά ανάγνωσης`,
    breadcrumbBlog: "Ιστολόγιο",
    categoriesHeading: "Κατηγορίες",
    emptyCategory: "Δεν υπάρχουν ακόμη άρθρα σε αυτή την κατηγορία.",
  },
  en: {
    blogTitle: "ArtCanvas.gr Blog",
    blogIntro:
      "Tips and ideas for custom artistic portraits in Greece — digital painting, canvas prints, and gifts.",
    readMore: "Read more",
    authorTitle: "Author",
    faqHeading: "Frequently asked questions",
    internalLinksHeading: "Recommended reading",
    relatedHeading: "Related articles",
    readingTime: (m) => `${m} min read`,
    breadcrumbBlog: "Blog",
    categoriesHeading: "Categories",
    emptyCategory: "No articles in this category yet.",
  },
};

export function getBlogUiLabels(locale: BlogLocale): BlogUiLabels {
  return LABELS[locale];
}
