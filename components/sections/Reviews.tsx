const reviews = [
  { name: "Samir Sain", text: "Very accurate reports and quick service. Staff was polite and helpful. Highly recommended for all diagnostic tests.", date: "March 2026", color: { bg: "#dbeeff", text: "#0a5fae" } },
  { name: "Kashish Modi", text: "Good service, staff was very cooperative, cleanliness was well maintained and the reports were received in a short time.", date: "February 2026", color: { bg: "#d1fae5", text: "#065f46" } },
  { name: "Ischit Jain", text: "Top level quality test. Best and technologically most advanced lab in the area — highly recommended to everyone.", date: "January 2026", color: { bg: "#fef3c7", text: "#92400e" } },
  { name: "Rahul Verma", text: "Very good service and management. Reports were prompt, accurate, and the entire booking process was smooth end to end.", date: "December 2025", color: { bg: "#ede9fe", text: "#4c1d95" } },
  { name: "Priya Bishnoi", text: "Came for a full body checkup. Technician was skilled and gentle. Reports shared on WhatsApp within hours — very impressed.", date: "November 2025", color: { bg: "#fce7f3", text: "#9d174d" } },
];

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase();
}

const CheckIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="#0a74d4" stroke="#0a74d4" strokeWidth="2">
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function ReviewsSection() {
  return (
    <section id="reviews" style={{ background: "#f0f6ff", padding: "56px 48px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <div style={{ fontSize: ".65rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#0a74d4", marginBottom: 10 }}>
          Patient Feedback
        </div>
        <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#0a2540", marginBottom: 6 }}>Loved by Patients</h2>
        <p style={{ fontSize: ".85rem", color: "#6b7d99", marginBottom: 14 }}>Real feedback from our trusted community</p>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "#fff", border: "1px solid #e4edf8", borderRadius: 40, padding: "10px 20px" }}>
          <div style={{ fontSize: "2rem", fontWeight: 800, color: "#0a2540" }}>4.9</div>
          <div>
            <div style={{ color: "#f59e0b", fontSize: "1rem", letterSpacing: 2 }}>★★★★★</div>
            <div style={{ fontSize: ".78rem", color: "#6b7d99" }}>Based on 120+ verified reviews</div>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16, maxWidth: 1100, margin: "0 auto" }}>
        {reviews.map((r) => (
          <div key={r.name} style={{ background: "#fff", border: "1px solid #e4edf8", borderRadius: 14, padding: 22, display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 42, height: 42, borderRadius: "50%",
                background: r.color.bg, color: r.color.text,
                display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center",
                fontSize: ".8rem", fontWeight: 700, flexShrink: 0,
              }}>
                {getInitials(r.name)}
              </div>
              <div>
                <div style={{ fontSize: ".88rem", fontWeight: 700, color: "#0a2540" }}>{r.name}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: ".68rem", color: "#0a74d4", marginTop: 2 }}>
                  <CheckIcon /> Verified Patient
                </div>
              </div>
            </div>
            <div style={{ color: "#f59e0b", fontSize: ".85rem", letterSpacing: 1 }}>★★★★★</div>
            <p style={{ fontSize: ".82rem", color: "#4a5e7a", lineHeight: 1.7, flex: 1, margin: 0 }}>{r.text}</p>
            <div style={{ fontSize: ".7rem", color: "#b0c0d8" }}>{r.date}</div>
          </div>
        ))}

        {/* CTA card */}
        <div style={{ background: "#0a74d4", border: "1px solid #0a74d4", borderRadius: 14, padding: 22, display: "flex", flexDirection: "column", justifyItems: "center", justifyContent: "center", alignItems: "center", textAlign: "center", gap: 8 }}>
          <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#fff", marginBottom: 4 }}>120+</div>
          <p style={{ fontSize: ".85rem", color: "rgba(255,255,255,.8)", lineHeight: 1.65, flex: 1, margin: 0 }}>
            Patients have reviewed us on Google. Join our growing family of satisfied patients.
          </p>
          <a
            href="https://g.page/r/review"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "#fff", color: "#0a74d4",
              fontSize: ".78rem", fontWeight: 700,
              padding: "10px 16px", borderRadius: 8, textDecoration: "none", marginTop: 8,
            }}
          >
            ★ Leave a Review
          </a>
        </div>
      </div>
    </section>
  );
}

