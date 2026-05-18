export type Language = "en" | "el";

export const LANGUAGE_LABELS: Record<Language, string> = {
  en: "EN",
  el: "ΕΛ",
};

export const translations = {
  en: {
    nav: {
      howItWorks: "How It Works",
      pricing: "Pricing",
      gallery: "Gallery",
      blog: "Blog",
      orderNow: "Order Now",
    },
    hero: {
      title1: "Your Photos.",
      title2: "Pure Art.",
      description:
        "Turn your favorite memories into professional digital painting portraits. Choose a size, upload your photo, and let our engine create something magical.",
      ctaPrimary: "Create My Portrait",
      ctaSecondary: "How it Works",
    },
    features: {
      sectionTitle: "Artistic Perfection in 3 Steps",
      sectionDesc: "Fast, easy, and absolutely stunning results every time.",
      feature1: {
        title: "Instant Magic",
        desc: "Our engine processes your photo in seconds, keeping every detail while adding artistic flair.",
      },
      feature2: {
        title: "Digital Painting",
        desc: "No filters here. Each portrait is transformed into a digital painting style with artistic backgrounds.",
      },
      feature3: {
        title: "Premium Quality",
        desc: "Printed on high-quality museum-grade canvas that lasts a lifetime. Perfect for home or as a gift.",
      },
    },
    order: {
      sectionTitle: "Start Your Transformation",
      sectionDesc: "Select your size and upload your photo to begin.",
      steps: {
        upload: "Upload",
        size: "Size",
        process: "Process",
        select: "Select",
        pay: "Pay",
      },
      upload: {
        title: "Upload your photo",
        desc: "High resolution photos work best (JPG, PNG)",
        button: "Choose File",
        footer: "Get your custom masterpiece in minutes!",
      },
      size: {
        title: "Choose Canvas Size",
        premium: "Premium Canvas",
        back: "Back",
        button: "Process",
      },
      processing: {
        title: "Your art is being created...",
        desc: "Creating your digital masterpieces with different artistic backgrounds.",
      },
      selection: {
        title: "Select Your Result",
        desc: "Pick the one you love the most!",
        button: "Proceed to Checkout",
      },
      checkout: {
        title: "Your Order Summary",
        product: "Product",
        productName: "Digital Painting Portrait",
        size: "Size",
        total: "Total Price",
        shippingTitle: "Shipping & Contact Information",
        fullName: "Full Name",
        email: "Email Address",
        address: "Shipping Address (Street, House, Appt)",
        postalCode: "Postal Code",
        phone: "Phone Number",
        payButton: "Pay with Stripe",
        secure: "Secure payment via Stripe. No credit card details stored.",
        notification:
          "Get notified about your order status faster than anyone else! We will send the final file to your email immediately after printing.",
        back: "Back to Selection",
      },
    },
    footer: {
      desc: "Transforming your precious memories into artistic digital paintings.",
      contact: "Contact",
      legal: "Legal",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      blog: "Blog",
      rights: "All rights reserved.",
      location: "Athens, Greece",
    },
  },
  el: {
    nav: {
      howItWorks: "Πώς λειτουργεί",
      pricing: "Τιμές",
      gallery: "Γκαλερί",
      blog: "Ιστολόγιο",
      orderNow: "Παραγγελία",
    },
    hero: {
      title1: "Οι φωτογραφίες σας.",
      title2: "Καθαρή τέχνη.",
      description:
        "Μετατρέψτε τις αγαπημένες σας αναμνήσεις σε επαγγελματικά ψηφιακά πορτραίτα-ζωγραφιές. Επιλέξτε μέγεθος, ανεβάστε τη φωτογραφία σας και αφήστε μας να δημιουργήσουμε κάτι μαγικό.",
      ctaPrimary: "Δημιουργία πορτραίτου",
      ctaSecondary: "Πώς λειτουργεί",
    },
    features: {
      sectionTitle: "Καλλιτεχνική τελειότητα σε 3 βήματα",
      sectionDesc: "Γρήγορα, εύκολα και εντυπωσιακά αποτελέσματα κάθε φορά.",
      feature1: {
        title: "Άμεση μαγεία",
        desc: "Το σύστημά μας επεξεργάζεται τη φωτογραφία σε δευτερόλεπτα, διατηρώντας κάθε λεπτομέρεια και προσθέτοντας καλλιτεχνική πινελιά.",
      },
      feature2: {
        title: "Ψηφιακή ζωγραφική",
        desc: "Όχι απλά φίλτρα. Κάθε πορτραίτο μετατρέπεται σε ψηφιακή ζωγραφική με καλλιτεχνικά φόντα.",
      },
      feature3: {
        title: "Premium ποιότητα",
        desc: "Εκτύπωση σε υψηλής ποιότητας καμβά μουσειακού επιπέδου που διαρκεί για πάντα. Ιδανικό για το σπίτι ή ως δώρο.",
      },
    },
    order: {
      sectionTitle: "Ξεκινήστε τον μετασχηματισμό",
      sectionDesc: "Επιλέξτε μέγεθος και ανεβάστε τη φωτογραφία σας για να ξεκινήσετε.",
      steps: {
        upload: "Ανέβασμα",
        size: "Μέγεθος",
        process: "Επεξεργασία",
        select: "Επιλογή",
        pay: "Πληρωμή",
      },
      upload: {
        title: "Ανεβάστε τη φωτογραφία σας",
        desc: "Οι φωτογραφίες υψηλής ανάλυσης δίνουν τα καλύτερα αποτελέσματα (JPG, PNG)",
        button: "Επιλογή αρχείου",
        footer: "Λάβετε το προσωπικό σας αριστούργημα σε λίγα λεπτά!",
      },
      size: {
        title: "Επιλέξτε μέγεθος καμβά",
        premium: "Premium καμβάς",
        back: "Πίσω",
        button: "Επεξεργασία",
      },
      processing: {
        title: "Η τέχνη σας δημιουργείται...",
        desc: "Δημιουργούμε τα ψηφιακά σας αριστουργήματα με διαφορετικά καλλιτεχνικά φόντα.",
      },
      selection: {
        title: "Επιλέξτε το αποτέλεσμά σας",
        desc: "Διαλέξτε αυτό που σας αρέσει περισσότερο!",
        button: "Συνέχεια στην πληρωμή",
      },
      checkout: {
        title: "Σύνοψη παραγγελίας",
        product: "Προϊόν",
        productName: "Ψηφιακό πορτραίτο-ζωγραφική",
        size: "Μέγεθος",
        total: "Συνολική τιμή",
        shippingTitle: "Στοιχεία αποστολής και επικοινωνίας",
        fullName: "Ονοματεπώνυμο",
        email: "Διεύθυνση email",
        address: "Διεύθυνση αποστολής (οδός, αριθμός, διαμέρισμα)",
        postalCode: "Τ.Κ.",
        phone: "Τηλέφωνο",
        payButton: "Πληρωμή με Stripe",
        secure: "Ασφαλής πληρωμή μέσω Stripe. Δεν αποθηκεύουμε στοιχεία κάρτας.",
        notification:
          "Ενημερωθείτε για την κατάσταση της παραγγελίας σας πιο γρήγορα από όλους! Θα στείλουμε το τελικό αρχείο στο email σας αμέσως μετά την εκτύπωση.",
        back: "Πίσω στην επιλογή",
      },
    },
    footer: {
      desc: "Μετατρέπουμε τις πολύτιμες αναμνήσεις σας σε καλλιτεχνικές ψηφιακές ζωγραφιές.",
      contact: "Επικοινωνία",
      legal: "Νομικά",
      terms: "Όροι χρήσης",
      privacy: "Πολιτική απορρήτου",
      blog: "Ιστολόγιο",
      rights: "Με την επιφύλαξη παντός δικαιώματος.",
      location: "Αθήνα, Ελλάδα",
    },
  },
};
