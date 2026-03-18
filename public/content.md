// ============================================================
//  content.ts
//  Reliable Diagnostics Centre — Hanumangarh Branch
//  100% Original Content — Based Only on Branch Data
// ============================================================

// ─────────────────────────────────────────────
//  BRAND
// ─────────────────────────────────────────────
export const BRAND = {
  nameEn:    "Reliable Diagnostics Centre",
  nameHi:    "रिलायबल डायग्नोस्टिक्स सेंटर",
  city:      "Hanumangarh",
  cityHi:    "हनुमानगढ़",
  tagline:   "Accurate Results. Trusted Care.",
  taglineHi: "सटीक जाँच, भरोसेमंद देखभाल",
}

// ─────────────────────────────────────────────
//  CONTACT
// ─────────────────────────────────────────────
export const CONTACT_INFO = {
  address:    "Bharat Mata Chowk, Puran Nagar, Hanumangarh, Rajasthan – 335513",
  addressHi:  "भारत माता चौक, पूरन नगर, हनुमानगढ़, राजस्थान – 335513",
  phone:      "077377 74617",
  phoneTel:   "tel:07737774617",
  whatsapp:   "https://wa.me/917737774617?text=नमस्ते%2C%20मुझे%20टेस्ट%20बुक%20करना%20है",
  mapsLink:   "https://maps.google.com/?q=Reliable+Diagnostics+Centre+Hanumangarh",
  plusCode:   "H8PC+HW Hanumangarh, Rajasthan",
}

// ─────────────────────────────────────────────
//  TIMINGS
// ─────────────────────────────────────────────
export const TIMINGS = {
  monSat:     "Monday – Saturday",
  monSatTime: "7:00 AM – 8:00 PM",
  sunday:     "Sunday",
  sundayTime: "9:00 AM – 2:00 PM",
  homeCollectionNote: "Home sample collection available — call to schedule",
}

// ─────────────────────────────────────────────
//  RATINGS
// ─────────────────────────────────────────────
export const RATINGS = {
  score:   "4.9",
  total:   46,
  label:   "Google Reviews",
  badge:   "Hanumangarh's #1 Rated Diagnostic Lab",
  breakdown: [
    { stars: 5, count: 38, percent: 90 },
    { stars: 4, count: 5,  percent: 8  },
    { stars: 3, count: 2,  percent: 2  },
    { stars: 2, count: 1,  percent: 1  },
    { stars: 1, count: 0,  percent: 0  },
  ],
}

// ─────────────────────────────────────────────
//  NAVBAR LINKS
// ─────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home",       href: "#home"      },
  { label: "About",      href: "#about"     },
  { label: "Services",   href: "#services"  },
  { label: "Packages",   href: "#packages"  },
  { label: "Reviews",    href: "#reviews"   },
  { label: "Contact",    href: "#contact"   },
]

// ─────────────────────────────────────────────
//  HERO SECTION
// ─────────────────────────────────────────────
export const HERO = {
  kicker:        "Hanumangarh's Most Trusted Diagnostic Lab",
  kickerHi:      "हनुमानगढ़ की सबसे भरोसेमंद डायग्नोस्टिक लैब",

  headline1:     "Your Health Deserves",
  headline2:     "the Most",
  headlineAccent:"Accurate Diagnosis.",

  subHindi:      "सटीक जाँच — तेज़ रिपोर्ट — आपके घर तक",

  body:
    "At Reliable Diagnostics Centre, Hanumangarh, we combine advanced laboratory " +
    "technology with genuine patient care. Get precise reports, fast — " +
    "right here at Bharat Mata Chowk, Puran Nagar.",

  cta1:     "Book a Test",
  cta1Link: "#contact",
  cta2:     "Our Services",
  cta2Link: "#services",

  socialProof: "Trusted by families across Hanumangarh",

  floatingCards: [
    { text: "Open Now · Closes 8 PM",      type: "live"   },
    { text: "Home Collection Available",   type: "green"  },
    { text: "4.9 ★ · 46 Google Reviews",  type: "rating" },
  ],
}

// ─────────────────────────────────────────────
//  FEATURE STRIP — 3 cards below hero
// ─────────────────────────────────────────────
export const FEATURES = [
  {
    icon:  "shield-check",
    title: "Professional & Caring Staff",
    desc:
      "Our trained lab technicians and pathologists handle every sample with " +
      "precision and treat every patient with warmth and respect.",
  },
  {
    icon:  "flask-conical",
    title: "Highly Accurate Results",
    desc:
      "Advanced automated equipment combined with strict quality checks " +
      "ensures that every report we deliver is clinically dependable.",
  },
  {
    icon:  "zap",
    title: "Fast Report Delivery",
    desc:
      "Most reports ready the same day. Results shared directly on " +
      "WhatsApp and email — no need for a follow-up visit.",
  },
]

// ─────────────────────────────────────────────
//  ABOUT SECTION
// ─────────────────────────────────────────────
export const ABOUT = {
  sectionLabel:   "About Us",
  headline:       "Hanumangarh's Most",
  headlineAccent: "Advanced Diagnostic Centre",

  body1:
    "Reliable Diagnostics Centre has been serving the people of Hanumangarh " +
    "with a clear mission — to make high-quality, accurate diagnostics " +
    "accessible and affordable for every family in the region.",

  body2:
    "Located at Bharat Mata Chowk, Puran Nagar, our centre is equipped with " +
    "modern laboratory instruments and staffed by certified professionals " +
    "who genuinely care about your health outcomes.",

  highlights: [
    { icon: "🔬", label: "Advanced Lab Instruments"     },
    { icon: "⚡", label: "Same-Day Report Delivery"     },
    { icon: "🛡️", label: "Strict Quality Protocols"    },
    { icon: "🏠", label: "Home Sample Collection"       },
    { icon: "📱", label: "Reports on WhatsApp & Email"  },
    { icon: "💰", label: "Affordable for Every Budget"  },
  ],

  statCard: {
    value: "4.9 ★",
    label: "Google Rating",
    sub:   "46 Verified Reviews",
  },

  ctaLabel: "Book Your Test",
  ctaLink:  "#contact",
}

// ─────────────────────────────────────────────
//  SERVICES — 9 cards
// ─────────────────────────────────────────────
export const SERVICES = [
  {
    num:   "01",
    title: "Complete Blood Count (CBC)",
    desc:
      "A comprehensive blood test measuring red cells, white cells, platelets, " +
      "haemoglobin and more — the essential first step in any health evaluation.",
    tags:  ["CBC", "Haemoglobin", "Platelets", "WBC"],
  },
  {
    num:   "02",
    title: "Liver Function Test (LFT)",
    desc:
      "Assesses your liver health by measuring enzymes, proteins, and bilirubin. " +
      "Crucial for detecting liver disease, jaundice, and medication effects.",
    tags:  ["SGOT", "SGPT", "Bilirubin", "ALT"],
  },
  {
    num:   "03",
    title: "Kidney Function Test (KFT)",
    desc:
      "Evaluates how well your kidneys are filtering waste. Includes creatinine, " +
      "urea, uric acid, electrolytes, and eGFR for complete renal assessment.",
    tags:  ["Creatinine", "Urea", "eGFR", "Uric Acid"],
  },
  {
    num:   "04",
    title: "Thyroid Profile (T3 / T4 / TSH)",
    desc:
      "Checks thyroid hormone levels to diagnose hypo or hyperthyroidism. " +
      "Important for anyone experiencing fatigue, weight change, or mood shifts.",
    tags:  ["TSH", "T3", "T4", "Thyroid"],
  },
  {
    num:   "05",
    title: "Diabetes & Sugar Tests",
    desc:
      "Fasting and post-meal glucose, HbA1c, and OGTT to detect and monitor " +
      "diabetes. Essential for anyone with family history or lifestyle risk.",
    tags:  ["HbA1c", "Fasting Sugar", "PPBS", "Diabetes"],
  },
  {
    num:   "06",
    title: "Lipid Profile (Cholesterol)",
    desc:
      "Measures total cholesterol, HDL, LDL, triglycerides, and cardiac risk " +
      "ratio to assess your risk of heart disease and guide preventive care.",
    tags:  ["Cholesterol", "HDL", "LDL", "Triglycerides"],
  },
  {
    num:   "07",
    title: "Fever & Infection Panel",
    desc:
      "Rapid tests for dengue (NS1, IgM/IgG), malaria antigen, typhoid Widal, " +
      "and common infections — results fast when you need them most.",
    tags:  ["Dengue", "Malaria", "Typhoid", "Widal"],
  },
  {
    num:   "08",
    title: "Urine & Stool Analysis",
    desc:
      "Complete routine and microscopic examination of urine and stool. " +
      "Detects infections, kidney issues, and digestive problems accurately.",
    tags:  ["Urinalysis", "Urine Culture", "Stool Exam"],
  },
  {
    num:   "09",
    title: "Full Body Health Packages",
    desc:
      "Curated multi-parameter checkup packages for individuals, women, seniors, " +
      "and couples — covering all vital organs in one affordable test.",
    tags:  ["Full Body", "Preventive", "Health Checkup"],
  },
]

// ─────────────────────────────────────────────
//  PACKAGES — 6 cards
// ─────────────────────────────────────────────
export const PACKAGES = [
  {
    name:       "Basic Health Checkup",
    parameters: 34,
    price:      "₹999",
    highlight:  "Liver · Blood Count · Sugar · Calcium",
    badge:      "Most Popular",
    badgeColor: "teal",
    desc:
      "A solid starting point — 34 key parameters to get " +
      "a clear picture of your overall health.",
  },
  {
    name:       "Diabetes Care Package",
    parameters: 12,
    price:      "₹799",
    highlight:  "HbA1c · Fasting Sugar · PPBS · Urine",
    badge:      "For Diabetics",
    badgeColor: "blue",
    desc:
      "Monitor and manage your diabetes with the right tests " +
      "at the right frequency.",
  },
  {
    name:       "Heart & Lipid Profile",
    parameters: 10,
    price:      "₹699",
    highlight:  "Cholesterol · HDL · LDL · Triglycerides",
    badge:      null,
    badgeColor: null,
    desc:
      "Know your cardiac risk today. " +
      "A must-have for anyone above 30.",
  },
  {
    name:       "Thyroid & Hormone Package",
    parameters: 6,
    price:      "₹599",
    highlight:  "T3 · T4 · TSH · Vitamin D · B12",
    badge:      "Women's Favourite",
    badgeColor: "pink",
    desc:
      "Hormonal health is often overlooked — " +
      "this package covers it completely.",
  },
  {
    name:       "Anaemia Package",
    parameters: 5,
    price:      "₹499",
    highlight:  "Iron · TIBC · Ferritin · B12 · Folic Acid",
    badge:      "Best Value",
    badgeColor: "orange",
    desc:
      "Targeted testing for fatigue, weakness, " +
      "and anaemia symptoms.",
  },
  {
    name:       "Senior Citizen Health Check",
    parameters: 60,
    price:      "₹1499",
    highlight:  "Blood · Kidney · Liver · Thyroid · Sugar · Lipids",
    badge:      "Comprehensive",
    badgeColor: "green",
    desc:
      "A thorough, age-appropriate checkup package " +
      "designed for those above 50.",
  },
]

// ─────────────────────────────────────────────
//  LIFESTYLE DISORDER CATEGORIES
// ─────────────────────────────────────────────
export const DISORDERS = [
  { name: "Anaemia",   icon: "🩸", desc: "Iron, B12, CBC, Ferritin"         },
  { name: "Diabetes",  icon: "🍬", desc: "HbA1c, Fasting Sugar, OGTT"       },
  { name: "Heart",     icon: "❤️", desc: "Lipid Profile, CRP, Cardiac Risk" },
  { name: "Allergy",   icon: "🤧", desc: "IgE, Eosinophil, CBC"             },
  { name: "Arthritis", icon: "🦴", desc: "RA Factor, CRP, Uric Acid"        },
  { name: "Fever",     icon: "🌡️", desc: "Dengue, Malaria, Widal, CBC"     },
  { name: "Hormones",  icon: "⚗️", desc: "Thyroid, FSH, LH, Testosterone"  },
  { name: "Pregnancy", icon: "🤰", desc: "Beta HCG, Vitamin D, Iron, TORCH" },
  { name: "Cancer",    icon: "🎗️", desc: "CEA, CA-125, CA 15.3, PSA"       },
]

// ─────────────────────────────────────────────
//  HOW IT WORKS — 5 steps
// ─────────────────────────────────────────────
export const HOW_IT_WORKS = [
  {
    step:  "1",
    icon:  "calendar-check",
    title: "Book Easily",
    desc:
      "Call us, WhatsApp, or walk in to our Bharat Mata Chowk centre. " +
      "Booking takes less than 2 minutes.",
  },
  {
    step:  "2",
    icon:  "stethoscope",
    title: "Get Guidance",
    desc:
      "Our team tells you exactly how to prepare — " +
      "fasting instructions, timing, and what to bring.",
  },
  {
    step:  "3",
    icon:  "home",
    title: "Sample Collection",
    desc:
      "Visit us at Bharat Mata Chowk or choose home collection — " +
      "our phlebotomist comes to you.",
  },
  {
    step:  "4",
    icon:  "flask-conical",
    title: "Lab Processing",
    desc:
      "Your sample is tested on advanced instruments " +
      "and verified by our certified pathologist.",
  },
  {
    step:  "5",
    icon:  "file-check",
    title: "Receive Your Report",
    desc:
      "Get your report on WhatsApp and email — " +
      "clear, accurate, and ready to share with your doctor.",
  },
]

// ─────────────────────────────────────────────
//  WHY CHOOSE US — 4 pillars
// ─────────────────────────────────────────────
export const PILLARS = [
  {
    icon:  "🎯",
    title: "Clinical Accuracy",
    desc:
      "Every test is run on calibrated instruments with daily quality checks. " +
      "Our pathologist verifies each report before it reaches you.",
  },
  {
    icon:  "⚡",
    title: "Fast Reports",
    desc:
      "Routine reports within a few hours. Urgent panels same-day. " +
      "Results shared on WhatsApp the moment they are ready.",
  },
  {
    icon:  "🛡️",
    title: "Hygienic & Safe",
    desc:
      "Sterile, single-use collection equipment every single time. " +
      "Our facility is clean, spacious, and sanitised daily.",
  },
  {
    icon:  "🤝",
    title: "Genuine Patient Care",
    desc:
      "Our staff treats every patient with kindness and patience — " +
      "no rush, no attitude, just good care from start to finish.",
  },
]

// ─────────────────────────────────────────────
//  CHECKLIST
// ─────────────────────────────────────────────
export const CHECKLIST = [
  "4.9 ★ rated on Google — one of Hanumangarh's highest-rated labs",
  "Advanced automated analysers for precise, reliable results",
  "Reports delivered on WhatsApp & email same day",
  "Trained, certified, and caring lab staff",
  "Home sample collection available 7 days a week",
  "Affordable pricing with no hidden charges",
  "Hygienic, clean, and comfortable sample collection area",
  "Centrally located at Bharat Mata Chowk — easy to reach",
]

// ─────────────────────────────────────────────
//  EXPERTISE PROGRESS BARS
// ─────────────────────────────────────────────
export const PROGRESS_BARS = [
  { label: "Report Accuracy",      percent: 98 },
  { label: "Patient Satisfaction", percent: 97 },
  { label: "Timely Delivery",      percent: 95 },
  { label: "Hygiene Standards",    percent: 99 },
]

// ─────────────────────────────────────────────
//  TESTIMONIALS — real Google reviews
// ─────────────────────────────────────────────
export const REVIEWS = [
  {
    name:     "Kashish Modi",
    role:     "Local Guide · Hanumangarh",
    initials: "K",
    color:    "#0d6b5e",
    stars:    5,
    text:
      "Good service, staff was very good — cleanliness was well maintained " +
      "and the reports were received in a short period of time.",
    date:     "1 year ago",
  },
  {
    name:     "Ischit Jain",
    role:     "Verified Patient",
    initials: "I",
    color:    "#c45c2e",
    stars:    5,
    text:
      "Top level quality test. Best and technologically most advanced lab " +
      "in the Hanumangarh area. Highly recommended.",
    date:     "1 year ago",
  },
  {
    name:     "Verified Patient",
    role:     "Google Review",
    initials: "A",
    color:    "#374151",
    stars:    5,
    text:
      "Best lab in Hanumangarh area — good facility with good, careful staff. " +
      "Very satisfied with the service and the results.",
    date:     "Google Review",
  },
  {
    name:     "Local Patient",
    role:     "Google Review",
    initials: "P",
    color:    "#0e7490",
    stars:    5,
    text:
      "Very good service and management. " +
      "The entire process was smooth, quick, and professional.",
    date:     "Google Review",
  },
]

// ─────────────────────────────────────────────
//  FAQ
// ─────────────────────────────────────────────
export const FAQS = [
  {
    q: "Where is Reliable Diagnostics Centre located in Hanumangarh?",
    a: "We are at Bharat Mata Chowk, Puran Nagar, Hanumangarh, Rajasthan – 335513. Centrally located and easy to find.",
  },
  {
    q: "How do I book a test?",
    a: "Call 077377 74617, WhatsApp us, or simply walk in. No prior appointment is required for most tests.",
  },
  {
    q: "Is home sample collection available?",
    a: "Yes — we offer home collection across Hanumangarh, 7 days a week. Just call or WhatsApp us to fix a time.",
  },
  {
    q: "How quickly will I get my reports?",
    a: "Most routine tests are ready the same day. Urgent tests like CBC and blood sugar can be done in a few hours. Reports are shared on WhatsApp and email.",
  },
  {
    q: "Do I need a doctor's prescription?",
    a: "No prescription needed. You can book any test directly. We also accept and process all doctor-referred tests.",
  },
  {
    q: "How should I prepare for blood tests?",
    a: "For fasting tests like glucose or lipid profile, avoid food for 8–12 hours. For most other tests, no special preparation is needed. Our team will guide you.",
  },
  {
    q: "What are your working hours?",
    a: "Monday to Saturday — 7:00 AM to 8:00 PM. Sunday — 9:00 AM to 2:00 PM.",
  },
  {
    q: "Are your results reliable and accurate?",
    a: "Yes. We use advanced automated analysers with daily quality controls. Every report is reviewed by our certified pathologist before delivery.",
  },
]

// ─────────────────────────────────────────────
//  CONTACT FORM
// ─────────────────────────────────────────────
export const CONTACT_SECTION = {
  sectionLabel:   "Get In Touch",
  headline:       "Visit Us or",
  headlineAccent: "Book a Test Today",
  subtext:
    "Walk in anytime, give us a call, or reach us on WhatsApp. " +
    "Our team is always ready to help you with the right test.",

  infoBlocks: [
    {
      icon:      "map-pin",
      label:     "Our Location",
      value:     "Bharat Mata Chowk, Puran Nagar, Hanumangarh, Rajasthan – 335513",
      link:      "https://maps.google.com/?q=Reliable+Diagnostics+Centre+Hanumangarh",
      linkLabel: "Get Directions",
    },
    {
      icon:      "phone",
      label:     "Call Us",
      value:     "077377 74617",
      link:      "tel:07737774617",
      linkLabel: "Call Now",
    },
    {
      icon:      "clock",
      label:     "Working Hours",
      value:     "Mon – Sat: 7:00 AM – 8:00 PM\nSunday: 9:00 AM – 2:00 PM",
      link:      null,
      linkLabel: null,
    },
    {
      icon:      "home",
      label:     "Home Collection",
      value:     "Available 7 days a week. Call or WhatsApp to schedule.",
      link:      "https://wa.me/917737774617",
      linkLabel: "WhatsApp Us",
    },
  ],

  formTitle:   "Send an Enquiry",
  formSubtext: "We'll get back to you within the hour.",

  formFields: [
    {
      name: "name",    label: "Full Name",
      type: "text",    placeholder: "Your name",          required: true,
    },
    {
      name: "phone",   label: "Phone Number",
      type: "tel",     placeholder: "10-digit number",    required: true,
    },
    {
      name: "test",    label: "Test or Package",
      type: "select",  placeholder: "Select a test",      required: false,
      options: [
        "Complete Blood Count (CBC)",
        "Liver Function Test (LFT)",
        "Kidney Function Test (KFT)",
        "Thyroid Profile (T3/T4/TSH)",
        "Lipid Profile / Cholesterol",
        "HbA1c / Diabetes Test",
        "Fever Panel (Dengue / Malaria / Typhoid)",
        "Urine / Stool Analysis",
        "Hormone Profile",
        "Basic Health Checkup — ₹999",
        "Diabetes Care Package — ₹799",
        "Heart & Lipid Package — ₹699",
        "Thyroid & Hormone Package — ₹599",
        "Anaemia Package — ₹499",
        "Senior Citizen Health Check — ₹1499",
        "Other / Not Listed",
      ],
    },
    {
      name: "time",    label: "Preferred Time",
      type: "text",    placeholder: "e.g. Tomorrow 9 AM", required: false,
    },
    {
      name: "message", label: "Any Other Details",
      type: "textarea",
      placeholder: "Doctor's reference, home address for collection, special instructions...",
      required: false,
    },
  ],

  successMessage:
    "Thank you! We'll call you shortly. " +
    "You can also reach us directly at 077377 74617.",
}

// ─────────────────────────────────────────────
//  FOOTER
// ─────────────────────────────────────────────
export const FOOTER = {
  taglineEn: "Accurate Results. Trusted Care. At Your Doorstep.",
  taglineHi: "सटीक जाँच — भरोसेमंद देखभाल — हनुमानगढ़",

  quickLinks: [
    { label: "Home",       href: "#home"     },
    { label: "About Us",   href: "#about"    },
    { label: "Services",   href: "#services" },
    { label: "Packages",   href: "#packages" },
    { label: "Reviews",    href: "#reviews"  },
    { label: "Contact",    href: "#contact"  },
  ],

  popularTests: [
    "Complete Blood Count (CBC)",
    "Liver Function Test (LFT)",
    "Kidney Function Test (KFT)",
    "Thyroid Profile",
    "Lipid Profile",
    "HbA1c / Diabetes Panel",
    "Fever Panel",
    "Full Body Health Checkup",
  ],

  address:   "Bharat Mata Chowk, Puran Nagar, Hanumangarh, Rajasthan – 335513",
  phone:     "077377 74617",
  phoneTel:  "tel:07737774617",
  whatsapp:  "https://wa.me/917737774617",

  copyright:
    "© 2025 Reliable Diagnostics Centre, Hanumangarh. All Rights Reserved.",
}

// ─────────────────────────────────────────────
//  SEO METADATA
// ─────────────────────────────────────────────
export const SEO = {
  title:
    "Reliable Diagnostics Centre Hanumangarh | Blood Tests & Health Packages | 4.9★",
  description:
    "Hanumangarh's most trusted diagnostic lab — 4.9★ on Google (46 reviews). " +
    "Blood tests, thyroid, diabetes, liver, kidney & full body health packages. " +
    "Home collection available. Bharat Mata Chowk, Puran Nagar. Call 077377 74617.",
  keywords: [
    "diagnostic centre hanumangarh",
    "blood test hanumangarh",
    "pathology lab hanumangarh",
    "best lab hanumangarh",
    "reliable diagnostics hanumangarh",
    "health checkup hanumangarh",
    "home blood collection hanumangarh",
    "CBC test hanumangarh",
    "thyroid test hanumangarh",
    "full body checkup hanumangarh",
    "lab near bharat mata chowk",
    "medical lab puran nagar hanumangarh",
  ],
  locale: "en_IN",
  type:   "website",
}

// ─────────────────────────────────────────────
//  WHATSAPP FLOATING BUTTON
// ─────────────────────────────────────────────
export const WHATSAPP_FAB = {
  href:
    "https://wa.me/917737774617?text=नमस्ते%2C%20मुझे%20RDC%20हनुमानगढ़%20में%20टेस्ट%20बुक%20करना%20है",
  tooltip: "Chat with us on WhatsApp",
  color:   "#25D366",
}