#!/usr/bin/env python3
"""Generate 25 new Greek SEO blog articles (el only). Run from repo root."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
EL_DIR = ROOT / "src" / "data" / "blog" / "el"
SITE = "https://www.artcanvas.gr"
AUTHOR = {"name": "ArtCanvas.gr", "url": SITE, "jobTitle": "Καλλιτεχνικές υπηρεσίες"}
COVERS = ["/pic1.jpg", "/pic2.jpg", "/pic3.jpg", "/pic4.jpg", "/pic11.JPG", "/pic22.JPG", "/pic33.JPG", "/pic44.JPG"]


def link(slug: str, label: str) -> dict:
    return {"href": f"/el/blog/{slug}", "label": label}


def cta(extra_slug: str | None = None) -> str:
    extra = ""
    if extra_slug:
        extra = f" Δείτε επίσης <a href='/el/blog/{extra_slug}'>σχετικόν οδηγό</a>."
    return (
        f"<h2>Παραγγελία με προεπισκόπηση</h2>"
        f"<p>Ξεκινήστε στο <a href='{SITE}'>ArtCanvas.gr</a>: ανεβάστε φωτογραφία, "
        f"επιλέξτε μέγεθος καμβά, δείτε δύο καλλιτεχνικές εκδοχές και επιβεβαιώστε την προεπισκόπηση "
        f"πριν την εκτύπωση. Η αποστολή γίνεται σε όλη την Ελλάδα.{extra}</p>"
    )


def block_tarne() -> str:
    return (
        "<h2>Χρόνος, προεπισκόπηση και αποστολή στην Ελλάδα</h2>"
        "<p>Τα εορταστικά δώρα αποτυγχάνουν συχνά όχι γιατί «δεν ήταν ωραίο», αλλά επειδή δεν υπήρχε χρόνος "
        "για προεπισκόπηση και τυποποίηση. Με πορτραίτο από φωτογραφία, η προεπισκόπηση είναι το σημείο "
        "που ελέγχετε το αποτέλεσμα πριν πληρώσετε για εκτύπωση.</p>"
        "<p>Η παράδοση εξαρτάται από περιοχή — Αθήνα, Θεσσαλονίκη, νησιά ή ορεινές περιοχές. "
        "Γράψτε σωστά διεύθυνση και τηλέφωνο και κλείστε ημερομηνία γιορτής με περιθώριο ασφαλείας.</p>"
    )


# slug, category, title, description, keywords, sections_html, faqs, related, internal
ARTICLES: list[dict] = [
    {
        "slug": "dopio-gennethlion-paidiou",
        "category": "gifts",
        "title": "Δώρο γενεθλίων για παιδί: πορτραίτο που μεγαλώνει μαζί του",
        "description": "Ιδέες δώρου γενεθλίων παιδιού στην Ελλάδα: πορτραίτο από φωτογραφία, ήρεμο στυλ, προεπισκόπηση και αποστολή.",
        "keywords": ["δώρο γενεθλίων παιδιού", "πορτραίτο παιδιού", "καμβάς", "Ελλάδα", "Αθήνα"],
        "sections": (
            "<p>Τα γενέθλια παιδιού χρειάζουν δώρο που θυμίζει στιγμή, όχι ακόμη ένα παιχνίδι. "
            "Ένα πορτραίτο από αγαπημένη φωτογραφία κρατά τη χαρά της ηλικίας και γίνεται διακόσμηση στο δωμάτιο.</p>"
            "<h2>Φωτογραφία και στυλ που ταιριάζει στην ηλικία</h2>"
            "<p>Επιλέξτε ευκρινές κοντινό πλάνο με φυσικό φως. Για μικρότερα παιδιά, προτιμήστε κλασικό ή ήρεμο στυλ αντί για υπερβολικά έντονα φόντα.</p>"
            "<p>Δείτε <a href='/el/blog/kingitus-synnipaevaks'>δώρο γενεθλίων</a> και "
            "<a href='/el/blog/kunstiline-portree'>καλλιτεχνικό πορτραίτο</a> για ιδέες στυλ.</p>"
            + block_tarne()
            + cta("seinapilt-tellimine")
        ),
        "faqs": [
            {"question": "Τι μέγεθος για παιδικό δωμάτιο;", "answer": "Συχνά 45×30 ή 60×40 cm — επιβεβαιώστε στον τοίχο."},
            {"question": "Μπορώ να αλλάξω φόντο;", "answer": "Ναι, συνήθως στην προεπισκόπηση."},
            {"question": "Πόσο νωρίς να παραγγείλω;", "answer": "Τουλάχιστον 1–2 εβδομάδες πριν το πάρτι."},
            {"question": "Ομαδική φωτογραφία;", "answer": "Ναι, με καλό φωτισμό και ευκρίνεια προσώπων."},
            {"question": "Προεπισκόπηση;", "answer": "Ναι, πριν την εκτύπωση."},
        ],
        "related": ["kingitus-synnipaevaks", "personaalne-kingitus", "kunstiline-portree"],
        "internal": [
            link("kingitus-synnipaevaks", "Δώρο γενεθλίων"),
            link("seinapilt-tellimine", "Μέγεθος στον τοίχο"),
            {"href": SITE, "label": "Παραγγελία ArtCanvas.gr"},
        ],
    },
    {
        "slug": "dopio-vaptisis-portraito",
        "category": "gifts",
        "title": "Δώρο βάπτισης: πορτραίτο μνήμης για την οικογένεια",
        "description": "Πορτραίτο δώρο βάπτισης στην Ελλάδα — ήρεμο στυλ, προεπισκόπηση, εκτύπωση σε καμβά και αποστολή.",
        "keywords": ["δώρο βάπτισης", "πορτραίτο βάπτισης", "καμβάς", "Ελλάδα"],
        "sections": (
            "<p>Η βάπτιση είναι οικογενειακή γιορτή. Ένα πορτραίτο του παιδιού ή της οικογενειακής στιγμής "
            "γίνεται κληρονομιά για γονείς και νονούς — διακριτικό και διαχρονικό.</p>"
            "<h2>Πού κρεμάει καλύτερα</h2>"
            "<p>Σαλόνι ή διάδρομος με χαμηλό φως. Μεσαία μεγέθη συχνά αρκούν. Δείτε "
            "<a href='/el/blog/pilt-louendil'>ποιότητα καμβά</a>.</p>"
            + block_tarne()
            + cta("portraito-neogennitou")
        ),
        "faqs": [
            {"question": "Νεογέννητο σε κοντινό πλάνο;", "answer": "Ναι, με ήρεμο φως και ευκρίνεια."},
            {"question": "Κλασικό ή Dream Art;", "answer": "Για βάπτιση συχνά προτιμάται κλασικό."},
            {"question": "Δώρο για νονό/νονά;", "answer": "Ναι, με κοινή οικογενειακή φωτογραφία."},
        ],
        "related": ["portraito-neogennitou", "personaalne-kingitus", "pilt-louendil"],
        "internal": [link("pilt-louendil", "Ποιότητα καμβά"), {"href": SITE, "label": "Παραγγελία"}],
    },
    {
        "slug": "portraito-neogennitou",
        "category": "gifts",
        "title": "Δώρο για νεογέννητο: πορτραίτο που γίνεται οικογενειακός θησαυρός",
        "description": "Πορτραίτο νεογέννητου στην Ελλάδα — ασφαλής επιλογή δώρου με προεπισκόπηση πριν την εκτύπωση.",
        "keywords": ["δώρο νεογέννητου", "πορτραίτο μωρού", "καμβάς", "Ελλάδα"],
        "sections": (
            "<p>Τα πρώτα μήνες περνούν γρήγορα. Ένα καλλιτεχνικό πορτραίτο «παγώνει» την έκφραση και τα μικρά χαρακτηριστικά "
            "πριν αλλάξουν δραματικά.</p>"
            "<h2>Φωτογραφία χωρίς flash</h2>"
            "<p>Φυσικό φως, ήρεμη στάση, ευκρίνεια ματιών. Αποφύγετε υπερβολικό φιλτράρισμα πριν την παραγγελία.</p>"
            + block_tarne()
            + cta("dopio-vaptisis-portraito")
        ),
        "faqs": [
            {"question": "Μικρό μέγεθος;", "answer": "45×30 cm είναι δημοφιλές για δωμάτιο."},
            {"question": "Για γιαγιά/παπού;", "answer": "Ναι, ιδανικό δώρο από εγγόνι."},
        ],
        "related": ["dopio-vaptisis-portraito", "dopio-gennethlion-paidiou", "personaalne-kingitus"],
        "internal": [link("dopio-vaptisis-portraito", "Δώρο βάπτισης"), {"href": SITE, "label": "Παραγγελία"}],
    },
    {
        "slug": "dopio-apofoitisi-sxoleio",
        "category": "gifts",
        "title": "Δώρο αποφοίτησης σχολείου: πορτραίτο αντί για άλλο βιβλίο",
        "description": "Ιδέες δώρου αποφοίτησης στην Ελλάδα με πορτραίτο από φωτογραφία — προεπισκόπηση και αποστολή.",
        "keywords": ["δώρο αποφοίτησης", "πορτραίτο αποφοίτησης", "Ελλάδα"],
        "sections": (
            "<p>Η αποφοίτηση κλείνει ένα κεφάλαιο. Πορτραίτο από σχολική ή οικογενειακή φωτογραφία "
            "είναι δώρο που θα πάρει στο επόμενο σπίτι — φοιτητικό ή πρώτο διαμέρισμα.</p>"
            "<h2>Στυλ για νέους χώρους</h2>"
            "<p>Ήρεμο κλασικό στυλ ταιριάζει σε μικρά διαμερίσματα. Για έντονο στυλ δείτε "
            "<a href='/el/blog/dream-art-portree'>Dream Art πορτραίτο</a>.</p>"
            + block_tarne()
            + cta("dopio-apofoitisi-panepistimiou")
        ),
        "faqs": [
            {"question": "Ομαδική φωτογραφία τάξης;", "answer": "Ναι, αν τα πρόσωπα είναι ευκρινή."},
            {"question": "Προθεσμία πριν την τελετή;", "answer": "Παραγγείλετε νωρίς για προεπισκόπηση."},
        ],
        "related": ["dopio-apofoitisi-panepistimiou", "dopio-gia-filo", "kunstiline-portree"],
        "internal": [link("kunstiline-portree", "Καλλιτεχνικό πορτραίτο"), {"href": SITE, "label": "Παραγγελία"}],
    },
    {
        "slug": "dopio-apofoitisi-panepistimiou",
        "category": "gifts",
        "title": "Δώρο αποφοίτησης πανεπιστημίου: πορτραίτο για το νέο σπίτι",
        "description": "Πορτραίτο δώρο αποφοίτησης πανεπιστημίου — παραγγελία στην Ελλάδα με προεπισκόπηση.",
        "keywords": ["αποφοίτηση πανεπιστημίου", "δώρο πορτραίτο", "Ελλάδα", "Αθήνα"],
        "sections": (
            "<p>Μετά το πτυχίο, πολλοί μετακομίζουν. Ένα πορτραίτο από φωτογραφία φίλων ή οικογένειας "
            "γεμίζει τον τοίχο με νόημα — όχι με τυχαία αντικείμενα.</p>"
            + block_tarne()
            + cta("dopio-apofoitisi-sxoleio")
        ),
        "faqs": [
            {"question": "Μπορώ να συνδυάσω δύο πρόσωπα;", "answer": "Εξαρτάται από τη φωτογραφία — ρωτήστε στην προεπισκόπηση."},
            {"question": "Αποστολή σε φοιτητική πόλη;", "answer": "Ναι, σε όλη την Ελλάδα."},
        ],
        "related": ["dopio-apofoitisi-sxoleio", "portree-fotost-athens", "seinapilt-tellimine"],
        "internal": [link("portree-fotost-athens", "Πορτραίτο Αθήνα"), {"href": SITE, "label": "Παραγγελία"}],
    },
    {
        "slug": "portraito-mnimi-agapimenou",
        "category": "gifts",
        "title": "Πορτραίτο μνήμης: δώρο συναισθήματος που μένει στον τοίχο",
        "description": "Πορτραίτο μνήμης αγαπημένου στην Ελλάδα — σεβαστικό στυλ, προεπισκόπηση, εκτύπωση καμβά.",
        "keywords": ["πορτραίτο μνήμης", "δώρο μνήμης", "καμβάς", "Ελλάδα"],
        "sections": (
            "<p>Όταν λέμε «δώρο μνήμης», εννοούμε κάτι που τιμά χωρίς να ωραιοποιεί την απώλεια. "
            "Το πορτραίτο από σεβαστή φωτογραφία με ήρεμο φόντο είναι συχνά η πιο σωστή επιλογή.</p>"
            "<h2>Τόνος και χώρος</h2>"
            "<p>Κρεμαστό σε ήσυχο σημείο, όχι πάνω από κεντρικό τραπέζι. Δείτε "
            "<a href='/el/blog/interjoor-portree-sein'>τοποθέτηση στον τοίχο</a>.</p>"
            + block_tarne()
            + cta("portraito-domatio-mnimi")
        ),
        "faqs": [
            {"question": "Ποιο στυλ είναι κατάλληλο;", "answer": "Συχνά κλασικό, ήρεμο — όχι υπερβολικά έντονο."},
            {"question": "Μπορώ να ζητήσω διορθώσεις;", "answer": "Ναι, στην προεπισκόπηση πριν την εκτύπωση."},
            {"question": "Χρόνος παράδοσης;", "answer": "Εξαρτάται από ουρά· σχεδιάστε με περιθώριο."},
        ],
        "related": ["personaalne-kingitus", "kunstiline-portree", "pilt-louendil"],
        "internal": [link("interjoor-portree-sein", "Πορτραίτο στον τοίχο"), {"href": SITE, "label": "Παραγγελία"}],
    },
    {
        "slug": "portraito-domatio-mnimi",
        "category": "interior",
        "title": "Πορτραίτο μνήμης στο δωμάτιο: ήρεμη τοποθέτηση και φως",
        "description": "Πού να κρεμάσετε πορτραίτο μνήμης — φως, ύψος, μέγεθος και αρμονία με επίπλωση.",
        "keywords": ["πορτραίτο μνήμης", "διακόσμηση τοίχου", "καμβάς", "Ελλάδα"],
        "sections": (
            "<p>Ένα πορτραίτο μνήμης θέλει ήσυχη παρουσία. Αποφύγετε ανταγωνισμό με τηλεόραση "
            "και έντονο φως που «πνίγει» τα χρώματα.</p>"
            "<h2>Μέγεθος και απόσταση θέασης</h2>"
            "<p>Μετρήστε τον τοίχο. Σε 2–3 μέτρα, 60×40 ή 80×54 cm συχνά διαβάζονται καλά.</p>"
            + block_tarne()
            + cta("portraito-mnimi-agapimenou")
        ),
        "faqs": [
            {"question": "Υπνοδωμάτιο ή σαλόνι;", "answer": "Και τα δύο — επιλέξτε ήσυχο σημείο."},
            {"question": "Χρειάζεται πλαίσιο;", "answer": "Ο καμβάς έρχεται έτοιμος για κρέμασμα."},
        ],
        "related": ["interjoor-portree-sein", "seinapilt-tellimine", "pilt-louendil"],
        "internal": [link("seinapilt-tellimine", "Μέγεθος καμβά"), {"href": SITE, "label": "Παραγγελία"}],
    },
    {
        "slug": "dopio-25-chronia-gamou",
        "category": "gifts",
        "title": "Δώρο 25 χρόνια γάμου: ασημένιο πορτραίτο ζευγαριού",
        "description": "Ιδέες δώρου για 25α γάμου στην Ελλάδα — πορτραίτο από φωτογραφία ζευγαριού με προεπισκόπηση.",
        "keywords": ["25 χρόνια γάμου", "δώρο επετείου", "πορτραίτο ζευγαριού", "Ελλάδα"],
        "sections": (
            "<p>Τα ασημένια γάμια αξίζουν δώρο που θυμίζει κοινό δρόμο. Πορτραίτο από γαμήλια "
            "ή πρόσφατη στιγμή ταξιδιού — με ήρεμο, κομψό στυλ.</p>"
            + block_tarne()
            + cta("dopio-chrysos-gamos")
        ),
        "faqs": [
            {"question": "Φωτογραφία γάμου παλιά;", "answer": "Μπορεί να δουλέψει αν είναι ευκρινής — επιβεβαιώστε στην προεπισκόπηση."},
            {"question": "Δώρο από παιδιά;", "answer": "Ναι, κλασική ιδέα για γονείς."},
        ],
        "related": ["pulmakingitus-idee", "portraito-epeteios-zygou", "dopio-chrysos-gamos"],
        "internal": [link("pulmakingitus-idee", "Δώρο γάμου"), {"href": SITE, "label": "Παραγγελία"}],
    },
    {
        "slug": "dopio-chrysos-gamos",
        "category": "gifts",
        "title": "Χρυσός γάμος: πορτραίτο που τιμά δεκαετίες μαζί",
        "description": "Δώρο χρυσού γάμου στην Ελλάδα — πορτραίτο ζευγαριού, μεγάλο μέγεθος, προεπισκόπηση.",
        "keywords": ["χρυσός γάμος", "δώρο επετείου", "πορτραίτο", "Ελλάδα"],
        "sections": (
            "<p>Στα 50 χρόνια γάμου, το δώρο συχνά είναι «μεγάλο» σε συναίσθημα. "
            "Ένα πορτραίτο 80×54 ή 90×60 cm στο σαλόνι γίνεται κέντρο τιμής.</p>"
            + block_tarne()
            + cta("dopio-25-chronia-gamou")
        ),
        "faqs": [
            {"question": "Μεγάλο μέγεθος;", "answer": "80×54 ή 90×60 cm είναι δημοφιλή για σαλόνι."},
            {"question": "Κλασικό στυλ;", "answer": "Συχνά ναι, για διαχρονική αισθητική."},
        ],
        "related": ["pulmakingitus-idee", "dopio-25-chronia-gamou", "interjoor-portree-sein"],
        "internal": [link("interjoor-portree-sein", "Σαλόνι"), {"href": SITE, "label": "Παραγγελία"}],
    },
    {
        "slug": "portraito-epeteios-zygou",
        "category": "gifts",
        "title": "Δώρο επετείου ζευγαριού: πορτραίτο από την αγαπημένη σας φωτογραφία",
        "description": "Πορτραίτο επετείου σχέσης ή γάμου — παραγγελία Ελλάδα, προεπισκόπηση, αποστολή.",
        "keywords": ["δώρο επετείου", "πορτραίτο ζευγαριού", "Ελλάδα", "Αθήνα"],
        "sections": (
            "<p>Η επέτειος δεν χρειάζεται ακριβή ημερομηνία στη φωτογραφία — χρειάζεται αληθινή στιγμή. "
            "Ταξίδι, αγκαλιά, γέλιο — ό,τι σας αντιπροσωπεύει.</p>"
            "<p>Δείτε <a href='/el/blog/sonbrapaeva-kingitus-paarile'>δώρο ζευγαριού</a>.</p>"
            + block_tarne()
            + cta("pulmakingitus-idee")
        ),
        "faqs": [
            {"question": "Για σύζυγο ή σύντροφο;", "answer": "Και τα δύο — το πορτραίτο είναι ουδέτερο δώρο."},
            {"question": "Δύο πρόσωπα;", "answer": "Ναι, με καλή ανάλυση."},
        ],
        "related": ["sonbrapaeva-kingitus-paarile", "pulmakingitus-idee", "kunstiline-portree"],
        "internal": [link("sonbrapaeva-kingitus-paarile", "Δώρο ζευγαριού"), {"href": SITE, "label": "Παραγγελία"}],
    },
    {
        "slug": "dopio-pasxa-2026",
        "category": "gifts",
        "title": "Δώρο Πάσχα: πορτραίτο οικογενειακής συνάντησης",
        "description": "Ιδέες δώρου Πάσχα στην Ελλάδα με πορτραίτο — προεπισκόπηση και αποστολή πριν τη γιορτή.",
        "keywords": ["δώρο Πάσχα", "πορτραίτο οικογένεια", "Ελλάδα"],
        "sections": (
            "<p>Το Πάσχα μαζεύει οικογένεια. Πορτραίτο από φωτογραφία τραπεζιού, παιδιών "
            "ή παππούδων-γιαγιάδων είναι δώρο που μένει μετά τις γιορτές.</p>"
            + block_tarne()
            + cta("dopio-onomastiria-ellada")
        ),
        "faqs": [
            {"question": "Πότε να παραγγείλω πριν το Πάσχα;", "answer": "Νωρίς — η ουρά μεγαλώνει πριν τις γιορτές."},
            {"question": "Οικογενειακή φωτογραφία;", "answer": "Ιδανική — επιλέξτε ευκρίνεια προσώπων."},
        ],
        "related": ["joulukingitus-2026", "personaalne-kingitus", "portraito-oikogeneiaki-stigmi"],
        "internal": [link("personaalne-kingitus", "Προσωπικό δώρο"), {"href": SITE, "label": "Παραγγελία"}],
    },
    {
        "slug": "dopio-onomastiria-ellada",
        "category": "gifts",
        "title": "Δώρο ονομαστικής εορτής στην Ελλάδα: πορτραίτο με σκέψη",
        "description": "Ονομαστική εορτή δώρο — πορτραίτο από φωτογραφία, προεπισκόπηση, αποστολή σε όλη την Ελλάδα.",
        "keywords": ["ονομαστική εορτή", "δώρο πορτραίτο", "Ελλάδα", "καμβάς"],
        "sections": (
            "<p>Στην Ελλάδα, οι ονομαστικές εορτές είναι προσωπικές. Ένα πορτραίτο δείχνει "
            "ότι θυμήθηκες την ημερομηνία — όχι μόνο έστειλες μήνυμα.</p>"
            + block_tarne()
            + cta("kingitus-synnipaevaks")
        ),
        "faqs": [
            {"question": "Μικρό ή μεσαίο μέγεθος;", "answer": "60×40 cm είναι ασφαλής επιλογή."},
            {"question": "Για συγγενή στο εξωτερικό;", "answer": "Ναι, αποστολή πανελλαδικά."},
        ],
        "related": ["kingitus-synnipaevaks", "kingitus-naisele", "kingitus-mehele"],
        "internal": [link("kingitus-naisele", "Δώρο για εκείνη"), {"href": SITE, "label": "Παραγγελία"}],
    },
    {
        "slug": "dopio-proto-xronou",
        "category": "gifts",
        "title": "Δώρο πρωτοχρονιάτικο: πορτραίτο που ξεκινά τη χρονιά με νόημα",
        "description": "Πρωτοχρονιάτικο δώρο πορτραίτο στην Ελλάδα — παραγγείλετε νωρίς, προεπισκόπηση, αποστολή.",
        "keywords": ["πρωτοχρονιάτικο δώρο", "πορτραίτο", "Ελλάδα", "2026"],
        "sections": (
            "<p>Το Νέο Έτος θέλει δώρο χωρίς stress τελευταίας στιγμής. Πορτραίτο από φωτογραφία "
            "χρονιάς που πέρασε ή στιγμής που θέλετε να επαναλαμβάνετε.</p>"
            "<p>Δείτε <a href='/el/blog/joulukingitus-2026'>οδηγό δώρων εορτών</a>.</p>"
            + block_tarne()
            + cta("dream-art-doro-giorti")
        ),
        "faqs": [
            {"question": "Πριν τις γιορτές;", "answer": "Ναι — η ουρά μεγαλώνει τον Δεκέμβριο."},
            {"question": "Για γονείς;", "answer": "Ναι, κλασικό στυλ συχνά ταιριάζει."},
        ],
        "related": ["joulukingitus-2026", "joulukingitus-naisele", "joulukingitus-mehele"],
        "internal": [link("joulukingitus-2026", "Οδηγός εορτών"), {"href": SITE, "label": "Παραγγελία"}],
    },
    {
        "slug": "dopio-gonicewn-giorti",
        "category": "gifts",
        "title": "Δώρο για γονείς: πορτραίτο παιδιών ή εγγονιών",
        "description": "Δώρο γονιών στην Ελλάδα — πορτραίτο οικογένειας, προεπισκόπηση, αποστολή.",
        "keywords": ["δώρο για γονείς", "πορτραίτο οικογένεια", "Ελλάδα"],
        "sections": (
            "<p>Οι γονείς συχνά λένε «δεν χρειάζομαι τίποτα» — αλλά τιμούν πορτραίτο εγγονιών "
            "ή κοινής οικογενειακής στιγμής στο σαλόνι.</p>"
            + block_tarne()
            + cta("portraito-oikogeneiaki-stigmi")
        ),
        "faqs": [
            {"question": "Πολλά εγγόνια;", "answer": "Επιλέξτε φωτογραφία όπου φαίνονται καθαρά."},
            {"question": "Μεγάλο μέγεθος;", "answer": "80×54 cm δημοφιλές για σαλόνι γονιών."},
        ],
        "related": ["emadepaeva-kingitus", "isadepaeva-kingitus", "portraito-oikogeneiaki-stigmi"],
        "internal": [link("emadepaeva-kingitus", "Ημέρα Μητέρας"), {"href": SITE, "label": "Παραγγελία"}],
    },
    {
        "slug": "portraito-oikogeneiaki-stigmi",
        "category": "gifts",
        "title": "Οικογενειακό πορτραίτο: δώρο που ενώνει γενιές στον τοίχο",
        "description": "Πορτραίτο οικογένειας στην Ελλάδα — ιδέες φωτογραφίας, μεγέθη, προεπισκόπηση.",
        "keywords": ["οικογενειακό πορτραίτο", "δώρο οικογένεια", "καμβάς", "Ελλάδα"],
        "sections": (
            "<p>Μία οικογενειακή φωτογραφία μπορεί να γίνει καλλιτεχνικό σημείο αναφοράς "
            "στο σπίτι — για γιορτές, συνάντησεις και καθημερινή ζωή.</p>"
            + block_tarne()
            + cta("interjoor-portree-sein")
        ),
        "faqs": [
            {"question": "Πόσα άτομα;", "answer": "Όσα ευκρινώς χωράνε — ρωτήστε στην προεπισκόπηση."},
        ],
        "related": ["dopio-gonicewn-giorti", "canvas-gift-athens", "seinapilt-tellimine"],
        "internal": [link("seinapilt-tellimine", "Μέγεθος"), {"href": SITE, "label": "Παραγγελία"}],
    },
    {
        "slug": "dopio-gia-filo",
        "category": "gifts",
        "title": "Δώρο για φίλο: πορτραίτο που δείχνει πραγματική φιλία",
        "description": "Δώρο φίλου στην Ελλάδα — πορτραίτο από κοινή φωτογραφία, προεπισκόπηση.",
        "keywords": ["δώρο για φίλο", "πορτραίτο φίλων", "Ελλάδα"],
        "sections": (
            "<p>Για φίλο, το καλύτερο δώρο είναι κοινή μνήμη. Ταξίδι, συναυλία, "
            "χαλαρή στιγμή — πορτραίτο που δεν μοιάζει με «τυχαίο δώρο».</p>"
            + block_tarne()
            + cta("personaalne-kingitus")
        ),
        "faqs": [
            {"question": "Χιούμορ ή σοβαρό;", "answer": "Και τα δύο — επιλέξτε στυλ που ταιριάζει στον χαρακτήρα."},
        ],
        "related": ["personaalne-kingitus", "kingitus-synnipaevaks", "kunstiline-portree"],
        "internal": [link("personaalne-kingitus", "Προσωπικό δώρο"), {"href": SITE, "label": "Παραγγελία"}],
    },
    {
        "slug": "dopio-syntaxi-synergati",
        "category": "gifts",
        "title": "Δώρο συνταξιοδότησης συναδέλφου: πορτραίτο τιμής",
        "description": "Δώρο αποχαιρετισμού συναδέλφου — πορτραίτο γραφείου ή σπιτιού, Ελλάδα.",
        "keywords": ["δώρο συνταξιοδότησης", "πορτραίτο συναδέλφου", "Ελλάδα"],
        "sections": (
            "<p>Όταν κάποιος αποσυρεται, ένα πορτραίτο από ομαδική φωτογραφία "
            "ή στιγμή project είναι δώρο που μένει — χωρίς υπερβολές.</p>"
            + block_tarne()
            + cta("dopio-epaggelmatiko-jubileum")
        ),
        "faqs": [
            {"question": "Υπογραφή στο πίσω;", "answer": "Μπορείτε να το αναφέρετε στο email μετά την παραγγελία."},
        ],
        "related": ["dopio-epaggelmatiko-jubileum", "personaalne-kingitus", "portraito-grafeio-doro"],
        "internal": [link("portraito-grafeio-doro", "Γραφείο"), {"href": SITE, "label": "Παραγγελία"}],
    },
    {
        "slug": "dopio-epaggelmatiko-jubileum",
        "category": "gifts",
        "title": "Επαγγελματικό jubilee: πορτραίτο για 10 ή 25 χρόνια",
        "description": "Δώρο επαγγελματικού jubilee — πορτραίτο για γραφείο, προεπισκόπηση, Ελλάδα.",
        "keywords": ["επαγγελματικό jubilee", "δώρο πορτραίτο", "Ελλάδα"],
        "sections": (
            "<p>Σε εταιρείες, ένα πορτραίτο ομάδας ή στελέχους είναι δώρο που μένει στο γραφείο "
            "και θυμίζει ανθρώπους — όχι μόνο λογότυπα.</p>"
            + block_tarne()
            + cta("dopio-syntaxi-synergati")
        ),
        "faqs": [
            {"question": "Πολλά πρόσωπα;", "answer": "Ναι, με καλή ανάλυση και φωτισμό."},
        ],
        "related": ["dopio-syntaxi-synergati", "portraito-grafeio-doro", "custom-portrait-greece"],
        "internal": [link("custom-portrait-greece", "Custom πορτραίτο"), {"href": SITE, "label": "Παραγγελία"}],
    },
    {
        "slug": "portraito-grafeio-doro",
        "category": "interior",
        "title": "Πορτραίτο στο γραφείο: δώρο που εμπνέει χωρίς να αποσπά",
        "description": "Ιδέες τοποθέτησης πορτραίτου σε γραφείο — μέγεθος, φως, ύφος τοίχου.",
        "keywords": ["πορτραίτο γραφείου", "δώρο γραφείο", "διακόσμηση", "Ελλάδα"],
        "sections": (
            "<p>Στο γραφείο, το πορτραίτο πρέπει να «ησυχάζει» τον χώρο. Μικρότερα μεγέθη, "
            "καθαρή σύνθεση, ήρεμα χρώματα.</p>"
            + block_tarne()
            + cta("interjoor-portree-sein")
        ),
        "faqs": [
            {"question": "Πάνω από γραφείο;", "answer": "Συχνά ναι — σε ύψος ματιών όταν κάθεται."},
        ],
        "related": ["interjoor-portree-sein", "seinapilt-tellimine", "dopio-epaggelmatiko-jubileum"],
        "internal": [link("interjoor-portree-sein", "Σαλόνι & τοίχος"), {"href": SITE, "label": "Παραγγελία"}],
    },
    {
        "slug": "portraito-diaskeuasi-saloni",
        "category": "interior",
        "title": "Πορτραίτο στο σαλόνι: δώρο που ολοκληρώνει τη διακόσμηση",
        "description": "Πώς να επιλέξετε πορτραίτο δώρο για σαλόνι — μέγεθος, χρώμα τοίχου, φως.",
        "keywords": ["πορτραίτο σαλονιού", "δώρο διακόσμηση", "καμβάς", "Ελλάδα"],
        "sections": (
            "<p>Το σαλόνι είναι η πρώτη εντύπωση του σπιτιού. Ένα πορτραίτο δώρο "
            "πρέπει να ταιριάζει με καναπέ, χρώμα και απόσταση θέασης.</p>"
            "<p>Δείτε <a href='/el/blog/pilt-louendil'>ποιότητα εκτύπωσης</a>.</p>"
            + block_tarne()
            + cta("interjoor-portree-sein")
        ),
        "faqs": [
            {"question": "Λευκός τοίχος ή χρώμα;", "answer": "Και τα δύο δουλεύουν — το στυλ ρυθμίζει την αντίθεση."},
        ],
        "related": ["interjoor-portree-sein", "pilt-louendil", "seinapilt-tellimine"],
        "internal": [link("pilt-louendil", "Ποιότητα καμβά"), {"href": SITE, "label": "Παραγγελία"}],
    },
    {
        "slug": "portraito-thessaloniki",
        "category": "local-greece",
        "title": "Πορτραίτο από φωτογραφία στη Θεσσαλονίκη: παραγγελία και αποστολή",
        "description": "Παραγγελία πορτραίτου Θεσσαλονίκη — προεπισκόπηση, εκτύπωση καμβά, παράδοση σε όλη την Ελλάδα.",
        "keywords": ["πορτραίτο Θεσσαλονίκη", "καμβάς", "δώρο", "Ελλάδα"],
        "sections": (
            "<p>Η Θεσσαλονίκη έχει δυναμική αγορά δώρων όλο τον χρόνο. Η παραγγελία γίνεται online "
            "στο ArtCanvas.gr — η αποστολή δεν περιορίζεται στην Αθήνα.</p>"
            + block_tarne()
            + cta("portree-fotost-athens")
        ),
        "faqs": [
            {"question": "Μόνο Αθήνα;", "answer": "Όχι — αποστολή πανελλαδικά."},
            {"question": "Παραλαβή;", "answer": "Συχνά courier — επιβεβαιώστε διεύθυνση."},
        ],
        "related": ["portree-fotost-athens", "tellimus-athensas-tarne", "custom-portrait-greece"],
        "internal": [link("tellimus-athensas-tarne", "Αποστολή Ελλάδα"), {"href": SITE, "label": "Παραγγελία"}],
    },
    {
        "slug": "portraito-paradosi-nisia",
        "category": "local-greece",
        "title": "Πορτραίτο δώρο στα νησιά: αποστολή σε όλη την Ελλάδα",
        "description": "Παραγγελία πορτραίτου για νησιά — Κρήτη, Κυκλάδες, Ιόνια — προεπισκόπηση πριν την εκτύπωση.",
        "keywords": ["πορτραίτο νησιά", "αποστολή Ελλάδα", "δώρο καμβάς"],
        "sections": (
            "<p>Στα νησιά, οι γιορτές συχνά μαζεύουν οικογένεια. Πορτραίτο από φωτογραφία "
            "παραδίδεται με courier — σχεδιάστε νωρίς για εποχιακή ζήτηση.</p>"
            + block_tarne()
            + cta("tellimus-athensas-tarne")
        ),
        "faqs": [
            {"question": "Εποχιακή καθυστέρηση;", "answer": "Πιθανή — παραγγείλετε νωρίς."},
        ],
        "related": ["portraito-thessaloniki", "tellimus-athensas-tarne", "portree-fotost-athens"],
        "internal": [link("portree-fotost-athens", "Αθήνα"), {"href": SITE, "label": "Παραγγελία"}],
    },
    {
        "slug": "dream-art-doro-giorti",
        "category": "dream-art",
        "title": "Dream Art δώρο για γιορτή: έντονο φόντο, αναγνωρίσιμο πρόσωπο",
        "description": "Dream Art πορτραίτο ως δώρο γιορτής — Ελλάδα, προεπισκόπηση, καλλιτεχνικά φόντα.",
        "keywords": ["Dream Art δώρο", "πορτραίτο γιορτής", "καμβάς", "Ελλάδα"],
        "sections": (
            "<p>Για δώρο που «κάνει wow», το Dream Art προσθέτει ζωηρά χρώματα πίσω από "
            "αναγνωρίσιμο πρόσωπο. Ιδανικό για γενέθλια και επετείους.</p>"
            "<p>Δείτε <a href='/el/blog/dream-art-portree-fotost'>Dream Art από φωτογραφία</a>.</p>"
            + block_tarne()
            + cta("dream-art-anamnisi-fotou")
        ),
        "faqs": [
            {"question": "Θα αλλάξει το πρόσωπο;", "answer": "Στόχος είναι καλλιτεχνική μετατροπή με αναγνωρισιμότητα — επιβεβαιώνετε στην προεπισκόπηση."},
            {"question": "Κλασικό ή Dream Art;", "answer": "Dream Art για ένταση, κλασικό για διαχρονικό δώρο."},
        ],
        "related": ["dream-art-portree-fotost", "dream-art-portree", "fantaasia-portree-fotost"],
        "internal": [link("dream-art-portree", "Dream Art"), {"href": SITE, "label": "Παραγγελία"}],
    },
    {
        "slug": "dream-art-anamnisi-fotou",
        "category": "dream-art",
        "title": "Dream Art μνήμης: πορτραίτο από φωτογραφία με συναίσθημα",
        "description": "Dream Art για μνήμες και δώρα — παραγγελία Ελλάδα, προεπισκόπηση πριν την εκτύπωση.",
        "keywords": ["Dream Art μνήμη", "πορτραίτο δώρο", "Ελλάδα"],
        "sections": (
            "<p>Όταν θέλετε έντονο καλλιτεχνικό αποτέλεσμα που κρατά συναίσθημα, "
            "το Dream Art συνδυάζει πινελιές φόντου με προσωπογραφία από τη φωτογραφία σας.</p>"
            + block_tarne()
            + cta("dream-art-doro-giorti")
        ),
        "faqs": [
            {"question": "Για μνημόσυνο δώρο;", "answer": "Συχνά προτιμάται ήρεμο κλασικό — αλλά Dream Art μπορεί να δουλέψει με διακριτικά χρώματα."},
        ],
        "related": ["dream-art-pilt-louendil", "portraito-mnimi-agapimenou", "digitaalne-kunstiline-portree"],
        "internal": [link("dream-art-pilt-louendil", "Dream Art καμβάς"), {"href": SITE, "label": "Παραγγελία"}],
    },
    {
        "slug": "odigos-dorou-eortologio-ellada",
        "category": "gifts",
        "title": "Οδηγός δώρων εορτολογίου στην Ελλάδα: πορτραίτα για κάθε γιορτή",
        "description": "Πλήρης οδηγός δώρου πορτραίτου — γενέθλια, επέτειοι, γιορτές, προεπισκόπηση, Ελλάδα.",
        "keywords": ["οδηγός δώρων", "εορτολόγιο", "πορτραίτο δώρο", "Ελλάδα"],
        "sections": (
            "<p>Στην Ελλάδα, οι γιορτές κατανέμουν το χρόνο: ονομαστικές, γάμοι, σχολικές τελετές, "
            "Χριστούγεννα, Πάσχα, επαγγελματικά jubilee. Ένα πορτραίτο από φωτογραφία λειτουργεί σχεδόν παντού — "
            "αρκεί να επιλέξετε σωστή φωτογραφία και να σχεδιάσετε χρόνο.</p>"
            "<h2>Γενέθλια και επέτειοι</h2>"
            "<p>Δείτε <a href='/el/blog/kingitus-synnipaevaks'>γενέθλια</a>, "
            "<a href='/el/blog/portraito-epeteios-zygou'>επέτειο ζευγαριού</a>, "
            "<a href='/el/blog/dopio-25-chronia-gamou'>25 χρόνια γάμου</a>.</p>"
            "<h2>Οικογενειακές γιορτές</h2>"
            "<p><a href='/el/blog/emadepaeva-kingitus'>Ημέρα Μητέρας</a>, "
            "<a href='/el/blog/isadepaeva-kingitus'>Ημέρα Πατέρα</a>, "
            "<a href='/el/blog/dopio-pasxa-2026'>Πάσχα</a>.</p>"
            "<h2>Στυλ: κλασικό ή Dream Art</h2>"
            "<p>Κλασικό για διαχρονικά δώρα. Dream Art όταν θέλετε ένταση — "
            "<a href='/el/blog/dream-art-portree'>Dream Art πορτραίτο</a>.</p>"
            + block_tarne()
            + cta("joulukingitus-2026")
        ),
        "faqs": [
            {"question": "Ένα δώρο για όλες τις γιορτές;", "answer": "Ναι — αλλά προσαρμόστε φωτογραφία και στυλ."},
            {"question": "Πόσο νωρίς πριν τις γιορτές;", "answer": "1–3 εβδομάδες minimum για ήσυχη εμπειρία."},
            {"question": "Προεπισκόπηση;", "answer": "Πάντα πριν την εκτύπωση στο ArtCanvas.gr."},
            {"question": "Αποστολή νησιά;", "answer": "Ναι, σε όλη την Ελλάδα."},
            {"question": "Τιμές καμβά;", "answer": "Δείτε τιμές στην αρχική σελίδα παραγγελίας."},
        ],
        "related": ["joulukingitus-2026", "personaalne-kingitus", "dopio-onomastiria-ellada"],
        "internal": [
            link("joulukingitus-2026", "Δώρα 2026"),
            link("dream-art-portree", "Dream Art"),
            link("portree-fotost-athens", "Αθήνα"),
            {"href": SITE, "label": "Παραγγελία"},
        ],
    },
]

# Ensure exactly 25
assert len(ARTICLES) == 25, len(ARTICLES)


def main() -> None:
    EL_DIR.mkdir(parents=True, exist_ok=True)
    base_date = "2026-05-01"
    for i, art in enumerate(ARTICLES):
        slug = art["slug"]
        path = EL_DIR / f"{slug}.json"
        if path.exists():
            raise SystemExit(f"Already exists: {path}")
        day = int(base_date.split("-")[2]) + i
        published = f"2026-05-{day:02d}"
        payload = {
            "slug": slug,
            "category": art["category"],
            "title": art["title"],
            "description": art["description"],
            "publishedAt": published,
            "author": AUTHOR,
            "coverImage": COVERS[i % len(COVERS)],
            "keywords": art["keywords"],
            "bodyHtml": art["sections"],
            "faqs": art["faqs"],
            "relatedSlugs": art["related"],
            "internalLinks": art["internal"],
        }
        path.write_text(
            json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
        )
        print(f"Wrote {path.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
