const packages = [
  {
    name: "Full Body Health",
    tagline: "Complete evaluation of all vital organs — Liver, Kidney, Thyroid & Lipid",
    price: 799,
    params: "65+ parameters",
    featured: false,
    tests: ["Complete Blood Count", "Liver & Kidney Function", "Thyroid Profile (T3/T4/TSH)", "Lipid Profile", "Blood Sugar (Fasting)"],
  },
  {
    name: "Diabetes Panel",
    tagline: "Advanced HbA1c & glucose monitoring to track glycemic control",
    price: 499,
    params: "12 parameters",
    featured: true,
    badge: "Most Popular",
    tests: ["HbA1c (3-month average)", "Fasting Blood Sugar", "Post-Prandial Glucose", "Insulin Levels", "Kidney Function (KFT)"],
  },
  {
    name: "Hormone Profile",
    tagline: "Detailed endocrine health covering thyroid & reproductive hormones",
    price: 649,
    params: "18 parameters",
    featured: false,
    tests: ["T3, T4, TSH", "FSH, LH (Women)", "Testosterone", "Cortisol", "Prolactin"],
  },
];

const CheckIcon = () => (
  <svg width="13" height="13" fill="none" stroke="#0a74d4" viewBox="0 0 24 24" strokeWidth="2.5">
    <path d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

export default function HealthPackages() {
  return (
    <section id="packages" style={{ background: "#fff", padding: "56px 48px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div style={{ textAlign: "center", marginBottom: 10, fontSize: ".65rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#0a74d4" }}>
        Health Packages
      </div>
      <h2 style={{ textAlign: "center", fontSize: "1.75rem", fontWeight: 800, color: "#0a2540", marginBottom: 6 }}>
        Specialized Health Packages for You
      </h2>
      <p style={{ textAlign: "center", fontSize: ".85rem", color: "#6b7d99", marginBottom: 40 }}>
        Curated checkup plans for different age groups and clinical needs
      </p>

      <div className="packages-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, maxWidth: 1000, margin: "0 auto" }}>
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            style={{
              border: pkg.featured ? "2px solid #0a74d4" : "1.5px solid #e4edf8",
              borderRadius: 16, padding: 28,
              display: "flex", flexDirection: "column", gap: 0,
              position: "relative",
            }}
          >
            {pkg.badge && (
              <div style={{
                position: "absolute", top: 16, right: 16,
                background: "#0a74d4", color: "#fff",
                fontSize: ".65rem", fontWeight: 700, letterSpacing: ".06em",
                padding: "3px 10px", borderRadius: 20,
              }}>
                {pkg.badge}
              </div>
            )}

            <div style={{ width: 48, height: 48, background: "#eef5ff", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
              <svg width="22" height="22" fill="none" stroke="#0a74d4" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.798-1.414 2.798H4.213c-1.444 0-2.414-1.798-1.414-2.798L4 15.3" />
              </svg>
            </div>

            <div style={{ fontSize: "1rem", fontWeight: 800, color: "#0a2540", marginBottom: 4 }}>{pkg.name}</div>
            <div style={{ fontSize: ".78rem", color: "#6b7d99", marginBottom: 18, lineHeight: 1.55 }}>{pkg.tagline}</div>

            <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 4 }}>
              <span style={{ fontSize: "1rem", fontWeight: 700, color: "#0a74d4" }}>₹</span>
              <span style={{ fontSize: "2rem", fontWeight: 800, color: "#0a2540" }}>{pkg.price}</span>
            </div>
            <div style={{ fontSize: ".72rem", color: "#b0c0d8", marginBottom: 18 }}>{pkg.params} included</div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24, flex: 1 }}>
              {pkg.tests.map((t) => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: ".8rem", color: "#4a5e7a" }}>
                  <CheckIcon /> {t}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                padding: 11, borderRadius: 9,
                fontSize: ".8rem", fontWeight: 700, textDecoration: "none",
                background: pkg.featured ? "#0a74d4" : "#eef5ff",
                color: pkg.featured ? "#fff" : "#0a74d4",
              }}
            >
              Book Now →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
