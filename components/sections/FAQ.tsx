"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Home pe blood collection kaise book karu?",
    a: "Booking bilkul simple hai — 'Book a Test' button click karo, WhatsApp pe message karo, ya directly call karo. Hamare certified phlebotomist aapke ghar aayenge aapki preferred timing pe, sterile kit ke saath.",
  },
  {
    q: "Report kab tak milti hai?",
    a: "Most routine tests (CBC, LFT, KFT, Blood Sugar) ki reports same day milti hain — usually 4–6 hours mein. Thyroid aur culture tests ke liye 24–48 hours lag sakte hain. Report WhatsApp pe aur center se dono mein milti hai.",
  },
  {
    q: "Kya sab tests ke liye fasting zaroori hai?",
    a: "Nahi — sirf kuch specific tests ke liye fasting chahiye: Blood Sugar (Fasting), Lipid Profile, aur Full Body packages. CBC, Thyroid, LFT jaise tests bina fasting ke ho jaate hain. Booking ke time pe bata denge kya zaroori hai.",
  },
  {
    q: "Kya lab NABL certified hai?",
    a: "Haan, Reliable Diagnostics Centre NABL certified lab hai. Hamare saare tests fully automated analyzers se hote hain jo 99.9% clinical precision dete hain. Doctor-verified reports milti hain jo kisi bhi hospital ya specialist ke liye valid hain.",
  },
  {
    q: "Purani reports kaise milegi?",
    a: "Purani reports hamare WhatsApp number pe message karke maang sakte ho apna naam aur test date batake. Reports hamare system mein securely store rehti hain. Center pe aakar bhi le sakte ho, ya WhatsApp pe digital copy mil sakti hai.",
  },
  {
    q: "Home collection ka extra charge lagta hai?",
    a: "Hanumangarh city ke andar home collection bilkul free hai. City se bahar ke areas ke liye nominal charge lag sakta hai — exact details ke liye call ya WhatsApp karein.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" style={{ background: "#f0f6ff", padding: "56px 48px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div style={{ textAlign: "center", marginBottom: 10, fontSize: ".65rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#0a74d4" }}>
        FAQ
      </div>
      <h2 style={{ textAlign: "center", fontSize: "1.75rem", fontWeight: 800, color: "#0a2540", marginBottom: 40 }}>
        Common Questions
      </h2>

      <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 10 }}>
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              style={{
                background: "#fff",
                border: `1px solid ${isOpen ? "#0a74d4" : "#e4edf8"}`,
                borderRadius: 12,
                overflow: "hidden",
                transition: "border-color .2s",
              }}
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                style={{
                  width: "100%", display: "flex", alignItems: "center",
                  justifyContent: "space-between", gap: 16,
                  padding: "18px 22px", background: "none", border: "none",
                  cursor: "pointer", textAlign: "left",
                }}
              >
                <span style={{ fontSize: ".9rem", fontWeight: 600, color: "#0a2540" }}>{faq.q}</span>
                <div style={{
                  width: 28, height: 28, borderRadius: 6,
                  background: isOpen ? "#0a74d4" : "#eef5ff",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  transition: "background .2s",
                }}>
                  <svg
                    width="14" height="14" fill="none"
                    stroke={isOpen ? "#fff" : "#0a74d4"}
                    viewBox="0 0 24 24" strokeWidth="2.5"
                    style={{ transform: isOpen ? "rotate(45deg)" : "none", transition: "transform .3s" }}
                  >
                    <path d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
              </button>
              {isOpen && (
                <div style={{ padding: "0 22px 18px", fontSize: ".85rem", color: "#4a5e7a", lineHeight: 1.75 }}>
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
