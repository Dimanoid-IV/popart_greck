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
      delivery: "Delivery",
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
        crop: "Crop",
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
      crop: {
        title: "Crop & style",
        desc: "Position your face in the frame (2:3 canvas ratio) and choose an art style.",
        zoom: "Zoom",
        styleTitle: "Art style",
        classicTitle: "Classic",
        classicDesc: "Soft painterly backgrounds, elegant and calm.",
        dreamTitle: "Dream Art",
        dreamDesc: "Bold paint splashes, vibrant brush strokes and color bursts.",
        back: "Back",
        continue: "Continue",
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
        customTitle: "None of these feel right?",
        customDesc:
          "Tell us your wishes directly — colors, mood, background, or likeness — and we will craft the perfect portrait for you by hand.",
        customCta: "Email us your wishes",
        customNote: "info@artcanvas.gr · we usually reply within one business day",
        mailSubject: "Custom portrait request — ArtCanvas.gr",
      },
      checkout: {
        title: "Your Order Summary",
        product: "Product",
        productName: "Digital Painting Portrait",
        style: "Style",
        styleClassic: "Classic",
        styleDream: "Dream Art",
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
        deliveryNote:
          "Delivery Mon–Fri. Most of Greece: 4–7 business days after you approve the preview by email.",
        deliveryLink: "Full delivery terms",
      },
    },
    delivery: {
      sectionTitle: "Orders & Delivery",
      sectionDesc:
        "How we ship across Greece and what to expect before your canvas arrives.",
      paragraphs: [
        "Orders and delivery are processed daily, Monday through Friday. Your order will be delivered to your shipping address within 4–7 days for most areas of Greece; for hard-to-reach areas delivery may take 5–8 days.",
        "For paintings larger than 40×50 cm, an additional delivery fee may apply, and cash on delivery may not be available. In any case, you will be notified before your order is fulfilled.",
        "In remote areas (as defined by carriers and courier services), delivery to your address may not be possible; you may need to collect your order from the nearest pickup point or courier depot.",
      ],
    },
    footer: {
      desc: "Transforming your precious memories into artistic digital paintings.",
      contact: "Contact",
      quickLinks: "Quick Links",
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
      delivery: "Αποστολή",
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
        crop: "Πλαισίο",
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
      crop: {
        title: "Πλαισίο και στυλ",
        desc: "Τοποθετήστε το πρόσωπο στο πλαίσιο (αναλογία 2:3) και επιλέξτε στυλ τέχνης.",
        zoom: "Μεγέθυνση",
        styleTitle: "Στυλ τέχνης",
        classicTitle: "Κλασικό",
        classicDesc: "Απαλά ζωγραφικά φόντα, κομψό και ήρεμο.",
        dreamTitle: "Dream Art",
        dreamDesc: "Έντονες κηλίδες χρώματος, πινελιές και φανταχτεροί χρωματισμοί.",
        back: "Πίσω",
        continue: "Συνέχεια",
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
        customTitle: "Δεν σας ικανοποιούν τα αποτελέσματα;",
        customDesc:
          "Γράψτε μας απευθείας τις επιθυμίες σας — χρώματα, διάθεση, φόντο ή ομοιότητα — και θα δημιουργήσουμε το ιδανικό πορτραίτο για εσάς.",
        customCta: "Στείλτε μας τα θέλατε σας",
        customNote: "info@artcanvas.gr · απαντάμε συνήθως εντός μίας εργάσιμης",
        mailSubject: "Αίτημα προσαρμοσμένου πορτραίτου — ArtCanvas.gr",
      },
      checkout: {
        title: "Σύνοψη παραγγελίας",
        product: "Προϊόν",
        productName: "Ψηφιακό πορτραίτο-ζωγραφική",
        style: "Στυλ",
        styleClassic: "Κλασικό",
        styleDream: "Dream Art",
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
        deliveryNote:
          "Αποστολές Δευτέρα–Παρασκευή. Στην πλειονότητα της Ελλάδας: 4–7 εργάσιμες μετά την έγκριση του preview μέσω email.",
        deliveryLink: "Όροι αποστολής",
      },
    },
    delivery: {
      sectionTitle: "Παραγγελίες και αποστολή",
      sectionDesc:
        "Πώς αποστέλλουμε σε όλη την Ελλάδα και τι να περιμένετε πριν φτάσει ο καμβάς σας.",
      paragraphs: [
        "Οι παραγγελίες και οι αποστολές πραγματοποιούνται καθημερινά, από Δευτέρα έως Παρασκευή. Η παραγγελία σας θα παραδοθεί στη διεύθυνση αποστολής εντός 4–7 ημερών για τις περισσότερες περιοχές της Ελλάδας· για δυσπρόσιτες περιοχές ο χρόνος παράδοσης μπορεί να φτάσει τις 5–8 ημέρες.",
        "Για πίνακες μεγαλύτερους από 40×50 cm ενδέχεται να ισχύει επιπλέον χρέωση αποστολής, και η αντικαταβολή μπορεί να μην είναι διαθέσιμη. Σε κάθε περίπτωση, θα ενημερωθείτε πριν την ολοκλήρωση της παραγγελίας.",
        "Σε απομακρυσμένες περιοχές (όπως ορίζουν οι μεταφορικές και οι κουριερικές εταιρείες), η παράδοση στη διεύθυνσή σας μπορεί να μην είναι εφικτή· θα χρειαστεί να παραλάβετε την παραγγελία από το πλησιέστερο σημείο παραλαβής ή γραφείο κούριερ.",
      ],
    },
    footer: {
      desc: "Μετατρέπουμε τις πολύτιμες αναμνήσεις σας σε καλλιτεχνικές ψηφιακές ζωγραφιές.",
      contact: "Επικοινωνία",
      quickLinks: "Σύνδεσμοι",
      legal: "Νομικά",
      terms: "Όροι χρήσης",
      privacy: "Πολιτική απορρήτου",
      blog: "Ιστολόγιο",
      rights: "Με την επιφύλαξη παντός δικαιώματος.",
      location: "Αθήνα, Ελλάδα",
    },
  },
};
