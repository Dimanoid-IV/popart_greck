import type { BlogLocale } from "./types";

export type BlogCroLabels = {
  trustStrip: string[];
  emotionalAboveFold: string;
  localProof: string;
  ctaMidTitle: string;
  ctaMidBody: string;
  ctaMidButton: string;
  urgencyLine: string;
  ctaBottomTitle: string;
  ctaBottomBody: string;
  ctaBottomPrimary: string;
  ctaBottomSecondary: string;
  listBannerTitle: string;
  listBannerBody: string;
  listBannerButton: string;
};

const CRO: Record<BlogLocale, BlogCroLabels> = {
  el: {
    trustStrip: [
      "Ασφαλής πληρωμή",
      "Προεπισκόπηση πριν την εκτύπωση",
      "Παραγγελίες σε όλη την Ελλάδα",
      "Υποστήριξη στα ελληνικά",
    ],
    emotionalAboveFold:
      "Δώρο ή διακόσμηση για το σπίτι — η ίδια απλή ροή για να επιλέξετε μέγεθος και στυλ με σιγουριά.",
    localProof:
      "Για πελάτες στην Ελλάδα και την Αθήνα: σαφή βήματα, λεπτομέρειες αποστολής στην επιβεβαίωση και βοήθεια μέσω της ιστοσελίδας.",
    ctaMidTitle: "Έτοιμοι να παραγγείλετε πορτραίτο από φωτογραφία;",
    ctaMidBody:
      "Ανεβάστε τη φωτογραφία, επιλέξτε μέγεθος καμβά και δείτε το αποτέλεσμα πριν την οριστική επιβεβαίωση.",
    ctaMidButton: "Ξεκινήστε την παραγγελία",
    urgencyLine:
      "Τα δημοφιλή μεγέθη γεμίζουν πιο γρήγορα σε αιχμές — όσο νωρίτερα ξεκινήσετε, τόσο πιο ήρεμα τα χρονοδιαγράμματα.",
    ctaBottomTitle: "Το κρατάμε απλό",
    ctaBottomBody:
      "Αν το άρθρο απάντησε στις ερωτήσεις σας, το επόμενο βήμα είναι η παραγγελία — όλα online, χωρίς επίσκεψη στο στούντιο.",
    ctaBottomPrimary: "Μετάβαση στην παραγγελία",
    ctaBottomSecondary: "Αρχική και τιμές",
    listBannerTitle: "Θέλετε να ξεκινήσετε το πορτραίτο σας σήμερα;",
    listBannerBody:
      "Η παραγγελία ξεκινά στην αρχική σελίδα: ανέβασμα, μέγεθος και πληρωμή — Αθήνα και όλη η Ελλάδα.",
    listBannerButton: "Ξεκινήστε την παραγγελία",
  },
  en: {
    trustStrip: [
      "Secure checkout",
      "Preview before printing",
      "Orders across Greece",
      "Support in English",
    ],
    emotionalAboveFold:
      "A gift or a statement piece for your home—same guided flow to pick size and style with confidence.",
    localProof:
      "Built for Greece and Athens customers: clear steps, delivery details in your order confirmation, and help via the site flow.",
    ctaMidTitle: "Ready to order your portrait from a photo?",
    ctaMidBody:
      "Upload your photo, pick a canvas size, and review the result before you finalize—so you commit with confidence.",
    ctaMidButton: "Start your order",
    urgencyLine:
      "Popular sizes can fill faster in peak seasons—starting today keeps your place in the queue calmer.",
    ctaBottomTitle: "We keep it simple",
    ctaBottomBody:
      "If this article answered your questions, the next step is the order flow—fully online, no studio visit required.",
    ctaBottomPrimary: "Go to order",
    ctaBottomSecondary: "Home & pricing",
    listBannerTitle: "Want to start your portrait today?",
    listBannerBody:
      "The order flow lives on the homepage: upload, size, and checkout—Athens and all of Greece.",
    listBannerButton: "Start your order",
  },
};

export function getBlogCroLabels(locale: BlogLocale): BlogCroLabels {
  return CRO[locale];
}
