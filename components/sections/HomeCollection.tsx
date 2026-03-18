export default function HomeCollectionBanner() {
  const steps = [
    { num: "1", title: "Book your slot", sub: "Call, WhatsApp, or fill the online form — pick your preferred morning slot" },
    { num: "2", title: "Technician arrives", sub: "Our certified phlebotomist reaches your home with a sealed sterile kit" },
    { num: "3", title: "Sample collected", sub: "Quick, painless, hygienic collection — usually under 10 minutes" },
    { num: "4", title: "Report on WhatsApp", sub: "Verified digital report delivered directly to your phone within 24 hours" },
  ];

  const badges = ["7 Days a Week", "7 AM – 10 AM Slots", "Sterile Kits", "Free in City"];

  return (
    <section className="premium-section" style={{
      background: "#0a2540",
      padding: "64px 0",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>
      <div className="home-collection-grid" style={{
        maxWidth: 1100, margin: "0 auto",
        alignItems: "center",
      }}>

        {/* Left */}
        <div>
          <div style={{ fontSize: ".63rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "#38b6ff", marginBottom: 12 }}>
            Home Collection Service
          </div>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: 16 }}>
            Blood Tests at{" "}
            <span style={{ color: "#38b6ff" }}>Your Doorstep</span>
          </h2>

          {/* Badges */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 24 }}>
            {badges.map((b) => (
              <div key={b} style={{
                background: "rgba(56,182,255,.12)", border: "1px solid rgba(56,182,255,.2)",
                borderRadius: 20, padding: "5px 12px",
                fontSize: ".72rem", fontWeight: 600, color: "#38b6ff",
              }}>
                ✓ {b}
              </div>
            ))}
          </div>

          <p style={{ fontSize: ".88rem", color: "rgba(255,255,255,.6)", lineHeight: 1.8, marginBottom: 32, maxWidth: 400 }}>
            No more waiting rooms. Our certified phlebotomists come to your home with sterile collection kits — safe, quick, and comfortable.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="https://wa.me/917737774617"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                background: "#25d366", color: "#fff",
                fontSize: ".82rem", fontWeight: 700,
                padding: "12px 22px", borderRadius: 9, textDecoration: "none",
              }}
            >
              Book on WhatsApp
            </a>
            <a
              href="tel:07737774617"
              style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                background: "transparent", color: "#fff",
                fontSize: ".82rem", fontWeight: 600,
                padding: "12px 22px", borderRadius: 9,
                border: "1.5px solid rgba(255,255,255,.2)", textDecoration: "none",
              }}
            >
              Call Us
            </a>
          </div>
        </div>

        {/* Right — Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {steps.map((step) => (
            <div key={step.num} style={{
              display: "flex", alignItems: "flex-start", gap: 16,
              background: "rgba(255,255,255,.05)",
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: 12, padding: "18px 20px",
            }}>
              <div style={{
                width: 36, height: 36, background: "#0a74d4", borderRadius: 8,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: ".8rem", fontWeight: 800, color: "#fff", flexShrink: 0,
              }}>
                {step.num}
              </div>
              <div>
                <div style={{ fontSize: ".88rem", fontWeight: 700, color: "#fff", marginBottom: 3 }}>{step.title}</div>
                <div style={{ fontSize: ".78rem", color: "rgba(255,255,255,.5)", lineHeight: 1.55 }}>{step.sub}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
