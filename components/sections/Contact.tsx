const infoCards = [
  {
    label: "Address",
    value: "Bharat Mata Chowk, Puran Nagar",
    sub: "Hanumangarh, Rajasthan 335513",
    showDirections: true,
    icon: (
      <svg width="18" height="18" fill="none" stroke="#0a74d4" viewBox="0 0 24 24" strokeWidth="2">
        <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "077377 74617",
    sub: "Mon–Sat: 7 AM – 8 PM · Sun: 9 AM – 2 PM",
    icon: (
      <svg width="18" height="18" fill="none" stroke="#0a74d4" viewBox="0 0 24 24" strokeWidth="2">
        <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
      </svg>
    ),
  },
  {
    label: "Working Hours",
    value: "Mon – Sat: 7:00 AM – 8:00 PM",
    sub: "Sunday: 9:00 AM – 2:00 PM\nHome Collection: 7 days · 7–10 AM",
    icon: (
      <svg width="18" height="18" fill="none" stroke="#0a74d4" viewBox="0 0 24 24" strokeWidth="2">
        <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function MapSection() {
  return (
    <section id="contact" style={{ background: "#fff", padding: "56px 48px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div style={{ fontSize: ".65rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#0a74d4", textAlign: "center", marginBottom: 10 }}>
        Find Us
      </div>
      <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#0a2540", textAlign: "center", marginBottom: 40 }}>
        Visit Us or Book a Test
      </h2>

      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 32, alignItems: "stretch" }}>

        {/* Info Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {infoCards.map((card) => (
            <div key={card.label} style={{ background: "#f8fafd", border: "1px solid #e4edf8", borderRadius: 12, padding: "18px 20px", display: "flex", alignItems: "flex-start", gap: 14 }}>
              <div style={{ width: 40, height: 40, background: "#eef5ff", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {card.icon}
              </div>
              <div>
                <div style={{ fontSize: ".65rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#b0c0d8", marginBottom: 3 }}>{card.label}</div>
                <div style={{ fontSize: ".88rem", fontWeight: 600, color: "#0a2540", marginBottom: 2 }}>{card.value}</div>
                <div style={{ fontSize: ".78rem", color: "#6b7d99", lineHeight: 1.55, whiteSpace: "pre-line" }}>{card.sub}</div>
                {card.showDirections && (
                  <a
                    href="https://maps.google.com/?q=Reliable+Diagnostics+Centre+Hanumangarh"
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 8, background: "#0a74d4", color: "#fff", fontSize: ".75rem", fontWeight: 700, padding: "8px 14px", borderRadius: 7, textDecoration: "none" }}
                  >
                    Get Directions →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Google Map Embed */}
        <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #e4edf8", minHeight: 380 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.5944186092183!2d74.31977937413825!3d29.58640194012981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3916f560d855068d%3A0x3bf48c9c15fa8ae8!2sReliable%20Diagnostics%20Centre%2C%20Hanumangarh!5e0!3m2!1sen!2sin!4v1773861331696!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 380, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Reliable Diagnostics Centre Location"
          />
        </div>

      </div>
    </section>
  );
}
