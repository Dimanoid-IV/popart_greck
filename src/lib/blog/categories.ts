import type { BlogCategoryId, BlogLocale } from "./types";

export const BLOG_CATEGORY_IDS: BlogCategoryId[] = [
  "gifts",
  "portrait-guide",
  "interior",
  "local-greece",
  "dream-art",
];

export function isValidBlogCategory(s: string): s is BlogCategoryId {
  return BLOG_CATEGORY_IDS.includes(s as BlogCategoryId);
}

/** Localized display titles for category hub pages and chips. */
export function getCategoryCopy(
  id: BlogCategoryId,
  locale: BlogLocale
): { title: string; description: string; short: string } {
  const table: Record<
    BlogCategoryId,
    Record<BlogLocale, { title: string; description: string; short: string }>
  > = {
    gifts: {
      el: {
        title: "Δώρα",
        short: "Δώρα",
        description:
          "Ιδέες και οδηγοί για πορτραίτα-δώρα — γενέθλια, επετείους και προσωπικές εκπλήξεις.",
      },
      en: {
        title: "Gifts",
        short: "Gifts",
        description:
          "Ideas and guides for portrait gifts—birthdays, milestones, and personal surprises.",
      },
    },
    "portrait-guide": {
      el: {
        title: "Οδηγός πορτραίτου",
        short: "Οδηγός",
        description:
          "Πώς να επιλέξετε φωτογραφία, μέγεθος και στυλ για καλλιτεχνικό πορτραίτο στην Ελλάδα.",
      },
      en: {
        title: "Portrait guide",
        short: "Portrait guide",
        description:
          "How to choose photos, sizes, and style when ordering an artistic portrait in Greece.",
      },
    },
    interior: {
      el: {
        title: "Εσωτερικό χώρο",
        short: "Εσωτερικό",
        description:
          "Πορτραίτο και καμβάς στο σαλόνι και το υπνοδωμάτιο — διαστάσεις, φως και τοποθέτηση.",
      },
      en: {
        title: "Interior",
        short: "Interior",
        description:
          "Portraits and canvas in living rooms and bedrooms—sizes, light, and placement.",
      },
    },
    "local-greece": {
      el: {
        title: "Ελλάδα και Αθήνα",
        short: "Ελλάδα",
        description:
          "Παραγγελία, αποστολή και πρακτικές συμβουλές για πελάτες στην Ελλάδα και την Αθήνα.",
      },
      en: {
        title: "Greece & Athens",
        short: "Greece",
        description:
          "Ordering, delivery, and practical notes for customers in Greece and Athens.",
      },
    },
    "dream-art": {
      el: {
        title: "Dream Art",
        short: "Dream Art",
        description:
          "Πορτραίτο Dream Art από φωτογραφία: ονειρικό, φανταστικό premium στυλ στην Ελλάδα — παραγγελία, προεπισκόπηση και καμβάς.",
      },
      en: {
        title: "Dream Art",
        short: "Dream Art",
        description:
          "Dream Art portraits from photos in Greece—dreamy, fantasy-forward art with preview and canvas options.",
      },
    },
  };
  return table[id][locale];
}
