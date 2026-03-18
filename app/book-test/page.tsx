"use client";
import { useState } from "react";

const TESTS = [
  { id: "cbc",      name: "Complete Blood Count (CBC)",       price: 180,  time: "4–6 hrs",  cat: "Blood",    popular: true  },
  { id: "lft",      name: "Liver Function Test (LFT)",        price: 320,  time: "6–8 hrs",  cat: "Organ",    popular: true  },
  { id: "kft",      name: "Kidney Function Test (KFT)",       price: 320,  time: "6–8 hrs",  cat: "Organ",    popular: false },
  { id: "thyroid",  name: "Thyroid Profile (T3/T4/TSH)",      price: 450,  time: "12–24 hrs",cat: "Hormone",  popular: true  },
  { id: "lipid",    name: "Lipid Profile",                    price: 280,  time: "6–8 hrs",  cat: "Cardiac",  popular: false },
  { id: "hba1c",    name: "HbA1c (Diabetes)",                 price: 350,  time: "6–8 hrs",  cat: "Diabetes", popular: false },
  { id: "fbs",      name: "Fasting Blood Sugar",              price: 80,   time: "2–4 hrs",  cat: "Diabetes", popular: false },
  { id: "vitamin",  name: "Vitamin D3 & B12",                 price: 560,  time: "12–24 hrs",cat: "Vitamin",  popular: false },
];

const PACKAGES = [
  { id: "fullbody", name: "Full Body Health",   price: 799,  time: "24 hrs", tests: ["CBC","LFT","KFT","Thyroid","Lipid","Blood Sugar"], badge: null },
  { id: "diabetes", name: "Diabetes Panel",     price: 499,  time: "8 hrs",  tests: ["HbA1c","Fasting Glucose","Post-Prandial","Insulin","KFT"], badge: "Most Popular" },
  { id: "hormone",  name: "Hormone Profile",    price: 649,  time: "24 hrs", tests: ["T3/T4/TSH","FSH","LH","Testosterone","Cortisol"], badge: null },
];

const TIME_SLOTS = ["7:00 AM","7:30 AM","8:00 AM","8:30 AM","9:00 AM","9:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM"];
const COLLECTION = ["Home Collection (Free)", "Visit Centre"];

const ChevronRight = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
);
const Check = ({ size = 16 }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M4.5 12.75l6 6 9-13.5"/></svg>
);

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [tab, setTab] = useState("tests");
  const [selectedTests, setSelectedTests] = useState<string[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [collectionType, setCollectionType] = useState("Home Collection (Free)");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [form, setForm] = useState<Record<string, string>>({ name: "", phone: "", address: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const toggleTest = (id: string) => {
    setSelectedTests((prev: string[]) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
    setSelectedPackage(null);
  };

  const selectPackage = (id: string) => {
    setSelectedPackage(id === selectedPackage ? null : id);
    setSelectedTests([]);
  };

  const selectedItems: any[] = selectedPackage
    ? PACKAGES.filter((p) => p.id === selectedPackage)
    : TESTS.filter((t) => selectedTests.includes(t.id));

  const total = selectedItems.reduce((s, i) => s + i.price, 0);
  const canNext1 = selectedItems.length > 0;
  const canNext2 = date && slot && form.name.trim() && form.phone.trim() && (collectionType === "Visit Centre" || form.address.trim());

  if (submitted) {
    return (
      <div style={{ minHeight: "100vh", background: "#f0f6ff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Plus Jakarta Sans', sans-serif", padding: 24 }}>
        <div style={{ background: "#fff", border: "1px solid #e4edf8", borderRadius: 20, padding: "48px 40px", maxWidth: 480, width: "100%", textAlign: "center" }}>
          <div style={{ width: 64, height: 64, background: "#dcfce7", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <Check size={28} />
          </div>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#0a2540", marginBottom: 8 }}>Booking Confirmed!</h2>
          <p style={{ fontSize: ".88rem", color: "#6b7d99", lineHeight: 1.7, marginBottom: 24 }}>
            Thank you <strong>{form.name}</strong>! Your booking request has been received.<br />
            We'll confirm via WhatsApp on <strong>{form.phone}</strong> within 30 minutes.
          </p>
          <div style={{ background: "#f0f6ff", borderRadius: 12, padding: "16px 20px", marginBottom: 24, textAlign: "left" }}>
            {selectedItems.map((item) => (
              <div key={item.id} style={{ display: "flex", justifyContent: "space-between", fontSize: ".84rem", padding: "4px 0", color: "#334155" }}>
                <span>{item.name}</span><span style={{ fontWeight: 700 }}>₹{item.price}</span>
              </div>
            ))}
            <div style={{ borderTop: "1px solid #e4edf8", marginTop: 8, paddingTop: 8, display: "flex", justifyContent: "space-between", fontWeight: 800, color: "#0a2540" }}>
              <span>Total</span><span>₹{total}</span>
            </div>
            <div style={{ marginTop: 12, fontSize: ".78rem", color: "#6b7d99" }}>
              📅 {date} at {slot}<br />
              🏠 {collectionType}
            </div>
          </div>
          <a href="https://wa.me/917737774617" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#25d366", color: "#fff", fontWeight: 700, fontSize: ".84rem", padding: "12px 24px", borderRadius: 10, textDecoration: "none" }}>
            Chat on WhatsApp
          </a>
          <button onClick={() => { setSubmitted(false); setStep(1); setSelectedTests([]); setSelectedPackage(null); setDate(""); setSlot(""); setForm({ name:"",phone:"",address:"",notes:"" }); }} style={{ display: "block", width: "100%", marginTop: 12, background: "none", border: "none", color: "#6b7d99", fontSize: ".82rem", cursor: "pointer" }}>
            Book another test
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#f0f6ff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Header */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e4edf8", padding: "14px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: ".95rem", fontWeight: 800, color: "#0a2540", lineHeight: 1.2 }}>RELIABLE DIAGNOSTICS</div>
          <div style={{ fontSize: ".6rem", fontWeight: 600, color: "#0a74d4", letterSpacing: ".12em", textTransform: "uppercase" }}>Centre · Hanumangarh</div>
        </div>
        <a href="tel:07737774617" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: ".8rem", color: "#0a74d4", fontWeight: 600, textDecoration: "none" }}>
          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z"/></svg>
          077377 74617
        </a>
      </div>

      {/* Progress */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e4edf8", padding: "0 32px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center" }}>
          {[{ n: 1, label: "Select Tests" }, { n: 2, label: "Your Details" }, { n: 3, label: "Confirm" }].map((s, i) => (
            <div key={s.n} style={{ display: "flex", alignItems: "center", flex: i < 2 ? 1 : 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "16px 0", cursor: step > s.n ? "pointer" : "default" }} onClick={() => step > s.n && setStep(s.n)}>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%",
                  background: step > s.n ? "#0a74d4" : step === s.n ? "#0a74d4" : "#e4edf8",
                  color: step >= s.n ? "#fff" : "#94a3b8",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: ".72rem", fontWeight: 800, flexShrink: 0,
                  transition: "all .2s",
                }}>
                  {step > s.n ? <Check size={13} /> : s.n}
                </div>
                <span style={{ fontSize: ".78rem", fontWeight: 600, color: step >= s.n ? "#0a2540" : "#94a3b8", whiteSpace: "nowrap" }}>{s.label}</span>
              </div>
              {i < 2 && <div style={{ flex: 1, height: 1, background: step > s.n + 0 ? "#0a74d4" : "#e4edf8", margin: "0 12px", transition: "background .3s" }} />}
            </div>
          ))}
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "28px 24px", display: "grid", gridTemplateColumns: "1fr 320px", gap: 24, alignItems: "start" }}>

        {/* LEFT */}
        <div>

          {/* ── STEP 1 ── */}
          {step === 1 && (
            <div style={{ background: "#fff", border: "1px solid #e4edf8", borderRadius: 16, overflow: "hidden" }}>
              <div style={{ padding: "22px 24px", borderBottom: "1px solid #e4edf8" }}>
                <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0a2540", marginBottom: 4 }}>Select Tests or Package</h2>
                <p style={{ fontSize: ".82rem", color: "#6b7d99" }}>Choose one or more tests, or pick a health package</p>
              </div>

              {/* Tabs */}
              <div style={{ display: "flex", borderBottom: "1px solid #e4edf8" }}>
                {["tests", "packages"].map((t) => (
                  <button key={t} onClick={() => setTab(t)} style={{
                    flex: 1, padding: "12px", background: "none", border: "none", cursor: "pointer",
                    fontSize: ".82rem", fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: tab === t ? "#0a74d4" : "#6b7d99",
                    borderBottom: tab === t ? "2px solid #0a74d4" : "2px solid transparent",
                    transition: "all .2s",
                  }}>
                    {t === "tests" ? "Individual Tests" : "Health Packages"}
                  </button>
                ))}
              </div>

              <div style={{ padding: 16 }}>
                {tab === "tests" && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {TESTS.map((test) => {
                      const active = selectedTests.includes(test.id);
                      return (
                        <div key={test.id} onClick={() => toggleTest(test.id)} style={{
                          display: "flex", alignItems: "center", gap: 14,
                          padding: "14px 16px", borderRadius: 10,
                          border: `1.5px solid ${active ? "#0a74d4" : "#e4edf8"}`,
                          background: active ? "#f0f7ff" : "#fff",
                          cursor: "pointer", transition: "all .15s",
                        }}>
                          <div style={{
                            width: 22, height: 22, borderRadius: 6, flexShrink: 0,
                            border: `2px solid ${active ? "#0a74d4" : "#d0dae8"}`,
                            background: active ? "#0a74d4" : "#fff",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            transition: "all .15s",
                          }}>
                            {active && <Check size={12} />}
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                              <span style={{ fontSize: ".88rem", fontWeight: 600, color: "#0a2540" }}>{test.name}</span>
                              {test.popular && <span style={{ fontSize: ".58rem", fontWeight: 700, background: "#e0f2fe", color: "#0369a1", padding: "2px 6px", borderRadius: 10 }}>Popular</span>}
                            </div>
                            <div style={{ display: "flex", gap: 12, marginTop: 3 }}>
                              <span style={{ fontSize: ".72rem", color: "#94a3b8" }}>🕐 {test.time}</span>
                              <span style={{ fontSize: ".72rem", color: "#94a3b8" }}>🏷 {test.cat}</span>
                            </div>
                          </div>
                          <div style={{ fontSize: ".95rem", fontWeight: 800, color: "#0a2540", flexShrink: 0 }}>₹{test.price}</div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {tab === "packages" && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {PACKAGES.map((pkg) => {
                      const active = selectedPackage === pkg.id;
                      return (
                        <div key={pkg.id} onClick={() => selectPackage(pkg.id)} style={{
                          padding: "18px 20px", borderRadius: 12,
                          border: `2px solid ${active ? "#0a74d4" : "#e4edf8"}`,
                          background: active ? "#f0f7ff" : "#fff",
                          cursor: "pointer", transition: "all .15s", position: "relative",
                        }}>
                          {pkg.badge && (
                            <div style={{ position: "absolute", top: 14, right: 14, background: "#0a74d4", color: "#fff", fontSize: ".6rem", fontWeight: 700, padding: "3px 9px", borderRadius: 20 }}>
                              {pkg.badge}
                            </div>
                          )}
                          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                            <div style={{
                              width: 22, height: 22, borderRadius: "50%", flexShrink: 0,
                              border: `2px solid ${active ? "#0a74d4" : "#d0dae8"}`,
                              background: active ? "#0a74d4" : "#fff",
                              display: "flex", alignItems: "center", justifyContent: "center",
                            }}>
                              {active && <Check size={11} />}
                            </div>
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: ".95rem", fontWeight: 800, color: "#0a2540" }}>{pkg.name}</div>
                              <div style={{ fontSize: ".72rem", color: "#94a3b8", marginTop: 1 }}>🕐 Report in {pkg.time}</div>
                            </div>
                            <div style={{ textAlign: "right" }}>
                              <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0a2540" }}>₹{pkg.price}</div>
                            </div>
                          </div>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                            {pkg.tests.map((t) => (
                              <span key={t} style={{ fontSize: ".68rem", fontWeight: 600, background: active ? "#dbeeff" : "#f0f6ff", color: active ? "#0a5fae" : "#4a5e7a", padding: "3px 8px", borderRadius: 6 }}>{t}</span>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ── STEP 2 ── */}
          {step === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

              {/* Collection type */}
              <div style={{ background: "#fff", border: "1px solid #e4edf8", borderRadius: 16, padding: "22px 24px" }}>
                <h3 style={{ fontSize: ".95rem", fontWeight: 800, color: "#0a2540", marginBottom: 14 }}>Collection Type</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {COLLECTION.map((c) => (
                    <div key={c} onClick={() => setCollectionType(c)} style={{
                      padding: "14px 16px", borderRadius: 10, cursor: "pointer",
                      border: `2px solid ${collectionType === c ? "#0a74d4" : "#e4edf8"}`,
                      background: collectionType === c ? "#f0f7ff" : "#fff",
                      display: "flex", alignItems: "center", gap: 10, transition: "all .15s",
                    }}>
                      <div style={{
                        width: 18, height: 18, borderRadius: "50%", flexShrink: 0,
                        border: `2px solid ${collectionType === c ? "#0a74d4" : "#d0dae8"}`,
                        background: collectionType === c ? "#0a74d4" : "#fff",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        {collectionType === c && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff" }} />}
                      </div>
                      <div>
                        <div style={{ fontSize: ".84rem", fontWeight: 700, color: "#0a2540" }}>{c.includes("Home") ? "Home Collection" : "Visit Centre"}</div>
                        <div style={{ fontSize: ".68rem", color: "#94a3b8" }}>{c.includes("Home") ? "Free · 7–10 AM slots" : "Walk-in or appointment"}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Date & Time */}
              <div style={{ background: "#fff", border: "1px solid #e4edf8", borderRadius: 16, padding: "22px 24px" }}>
                <h3 style={{ fontSize: ".95rem", fontWeight: 800, color: "#0a2540", marginBottom: 14 }}>Preferred Date & Time</h3>
                <div style={{ marginBottom: 14 }}>
                  <label style={{ fontSize: ".75rem", fontWeight: 700, color: "#6b7d99", letterSpacing: ".06em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Date</label>
                  <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #e4edf8", borderRadius: 9, fontSize: ".88rem", color: "#0a2540", fontFamily: "'Plus Jakarta Sans', sans-serif", outline: "none" }}
                  />
                </div>
                <label style={{ fontSize: ".75rem", fontWeight: 700, color: "#6b7d99", letterSpacing: ".06em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>Time Slot</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {TIME_SLOTS.map((t) => (
                    <button key={t} onClick={() => setSlot(t)} style={{
                      padding: "7px 12px", borderRadius: 8, cursor: "pointer",
                      border: `1.5px solid ${slot === t ? "#0a74d4" : "#e4edf8"}`,
                      background: slot === t ? "#0a74d4" : "#fff",
                      color: slot === t ? "#fff" : "#4a5e7a",
                      fontSize: ".75rem", fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif",
                      transition: "all .15s",
                    }}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Details */}
              <div style={{ background: "#fff", border: "1px solid #e4edf8", borderRadius: 16, padding: "22px 24px" }}>
                <h3 style={{ fontSize: ".95rem", fontWeight: 800, color: "#0a2540", marginBottom: 14 }}>Your Details</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {[
                    { key: "name",  label: "Full Name *",   placeholder: "Ramesh Kumar",           type: "text" },
                    { key: "phone", label: "Phone Number *", placeholder: "9876543210",             type: "tel"  },
                  ].map((f) => (
                    <div key={f.key}>
                      <label style={{ fontSize: ".75rem", fontWeight: 700, color: "#6b7d99", letterSpacing: ".06em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>{f.label}</label>
                      <input type={f.type} value={form[f.key]} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        placeholder={f.placeholder}
                        style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #e4edf8", borderRadius: 9, fontSize: ".88rem", color: "#0a2540", fontFamily: "'Plus Jakarta Sans', sans-serif", outline: "none" }}
                      />
                    </div>
                  ))}

                  {collectionType.includes("Home") && (
                    <div>
                      <label style={{ fontSize: ".75rem", fontWeight: 700, color: "#6b7d99", letterSpacing: ".06em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Home Address *</label>
                      <textarea value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })}
                        placeholder="House no., Street, Mohalla, Hanumangarh..."
                        rows={3}
                        style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #e4edf8", borderRadius: 9, fontSize: ".88rem", color: "#0a2540", fontFamily: "'Plus Jakarta Sans', sans-serif", outline: "none", resize: "vertical" }}
                      />
                    </div>
                  )}

                  <div>
                    <label style={{ fontSize: ".75rem", fontWeight: 700, color: "#6b7d99", letterSpacing: ".06em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Special Notes (Optional)</label>
                    <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      placeholder="Any specific instructions, fasting status, doctor referral..."
                      rows={2}
                      style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #e4edf8", borderRadius: 9, fontSize: ".88rem", color: "#0a2540", fontFamily: "'Plus Jakarta Sans', sans-serif", outline: "none", resize: "vertical" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── STEP 3 ── */}
          {step === 3 && (
            <div style={{ background: "#fff", border: "1px solid #e4edf8", borderRadius: 16, overflow: "hidden" }}>
              <div style={{ padding: "22px 24px", borderBottom: "1px solid #e4edf8" }}>
                <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0a2540", marginBottom: 4 }}>Confirm Your Booking</h2>
                <p style={{ fontSize: ".82rem", color: "#6b7d99" }}>Please review everything before submitting</p>
              </div>

              <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
                {/* Tests */}
                <div>
                  <div style={{ fontSize: ".68rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#94a3b8", marginBottom: 8 }}>Selected Tests</div>
                  {selectedItems.map((item) => (
                    <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", background: "#f0f6ff", borderRadius: 9, marginBottom: 6 }}>
                      <span style={{ fontSize: ".85rem", fontWeight: 600, color: "#0a2540" }}>{item.name}</span>
                      <span style={{ fontSize: ".9rem", fontWeight: 800, color: "#0a74d4" }}>₹{item.price}</span>
                    </div>
                  ))}
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 14px", fontWeight: 800, fontSize: ".95rem", color: "#0a2540", borderTop: "2px solid #e4edf8", marginTop: 4 }}>
                    <span>Total</span><span style={{ color: "#0a74d4" }}>₹{total}</span>
                  </div>
                </div>

                {/* Appointment */}
                <div style={{ background: "#f8fafd", border: "1px solid #e4edf8", borderRadius: 12, padding: "16px 18px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  {[
                    { label: "Date", value: date },
                    { label: "Time Slot", value: slot },
                    { label: "Collection", value: collectionType.includes("Home") ? "Home Collection" : "Visit Centre" },
                    { label: "Report", value: selectedItems[0]?.time ?? "24 hrs" },
                  ].map((d) => (
                    <div key={d.label}>
                      <div style={{ fontSize: ".65rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#94a3b8", marginBottom: 3 }}>{d.label}</div>
                      <div style={{ fontSize: ".88rem", fontWeight: 600, color: "#0a2540" }}>{d.value}</div>
                    </div>
                  ))}
                </div>

                {/* Patient */}
                <div style={{ background: "#f8fafd", border: "1px solid #e4edf8", borderRadius: 12, padding: "16px 18px" }}>
                  <div style={{ fontSize: ".68rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#94a3b8", marginBottom: 10 }}>Patient Details</div>
                  <div style={{ fontSize: ".88rem", fontWeight: 700, color: "#0a2540", marginBottom: 4 }}>{form.name}</div>
                  <div style={{ fontSize: ".84rem", color: "#6b7d99" }}>{form.phone}</div>
                  {form.address && <div style={{ fontSize: ".82rem", color: "#6b7d99", marginTop: 4, lineHeight: 1.5 }}>{form.address}</div>}
                  {form.notes && <div style={{ fontSize: ".78rem", color: "#94a3b8", marginTop: 6, fontStyle: "italic" }}>Note: {form.notes}</div>}
                </div>

                {/* Terms note */}
                <div style={{ display: "flex", gap: 8, padding: "12px 14px", background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 9 }}>
                  <svg width="16" height="16" fill="none" stroke="#d97706" viewBox="0 0 24 24" strokeWidth="2" style={{ flexShrink: 0, marginTop: 1 }}><path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/></svg>
                  <p style={{ fontSize: ".75rem", color: "#92400e", lineHeight: 1.6, margin: 0 }}>
                    Payment is collected at the centre or by the technician at home. Our team will call to confirm your booking.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div style={{ display: "flex", gap: 10, marginTop: 16, justifyContent: "space-between" }}>
            {step > 1 && (
              <button onClick={() => setStep(step - 1)} style={{ padding: "12px 24px", border: "1.5px solid #e4edf8", borderRadius: 10, background: "#fff", color: "#4a5e7a", fontSize: ".84rem", fontWeight: 700, cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                ← Back
              </button>
            )}
            <div style={{ flex: 1 }} />
            {step < 3 && (
              <button onClick={() => canNext1 || step > 1 ? (step === 2 && canNext2 ? setStep(3) : step === 1 && canNext1 ? setStep(2) : null) : null}
                disabled={step === 1 ? !canNext1 : !canNext2}
                style={{
                  padding: "12px 28px", borderRadius: 10, border: "none",
                  background: (step === 1 ? canNext1 : canNext2) ? "#0a74d4" : "#e4edf8",
                  color: (step === 1 ? canNext1 : canNext2) ? "#fff" : "#b0bec5",
                  fontSize: ".84rem", fontWeight: 700, cursor: (step === 1 ? canNext1 : canNext2) ? "pointer" : "not-allowed",
                  fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "all .2s",
                  display: "flex", alignItems: "center", gap: 6,
                }}>
                Continue <ChevronRight />
              </button>
            )}
            {step === 3 && (
              <button onClick={() => setSubmitted(true)} style={{ padding: "12px 28px", borderRadius: 10, border: "none", background: "#0a74d4", color: "#fff", fontSize: ".84rem", fontWeight: 700, cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif", display: "flex", alignItems: "center", gap: 6 }}>
                Confirm Booking <Check size={15} />
              </button>
            )}
          </div>
        </div>

        {/* RIGHT — Summary */}
        <div style={{ position: "sticky", top: 20 }}>
          <div style={{ background: "#fff", border: "1px solid #e4edf8", borderRadius: 16, overflow: "hidden" }}>
            <div style={{ background: "#0a2540", padding: "18px 20px" }}>
              <div style={{ fontSize: ".65rem", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: "#38b6ff", marginBottom: 4 }}>Booking Summary</div>
              <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#fff" }}>
                ₹{total}
                {total === 0 && <span style={{ fontSize: ".8rem", color: "rgba(255,255,255,.4)", fontWeight: 400 }}> — nothing selected</span>}
              </div>
            </div>

            <div style={{ padding: "16px 20px" }}>
              {selectedItems.length === 0 ? (
                <div style={{ textAlign: "center", padding: "20px 0" }}>
                  <div style={{ fontSize: "1.8rem", marginBottom: 8 }}>🧪</div>
                  <p style={{ fontSize: ".8rem", color: "#94a3b8", lineHeight: 1.6 }}>Select tests or a package to see your summary here</p>
                </div>
              ) : (
                <>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 }}>
                    {selectedItems.map((item) => (
                      <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                        <div>
                          <div style={{ fontSize: ".82rem", fontWeight: 600, color: "#0a2540", lineHeight: 1.3 }}>{item.name}</div>
                          <div style={{ fontSize: ".68rem", color: "#94a3b8", marginTop: 1 }}>🕐 {item.time}</div>
                        </div>
                        <span style={{ fontSize: ".88rem", fontWeight: 700, color: "#0a74d4", flexShrink: 0 }}>₹{item.price}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ borderTop: "1px dashed #e4edf8", paddingTop: 12, display: "flex", justifyContent: "space-between", fontWeight: 800, color: "#0a2540" }}>
                    <span>Total</span><span style={{ color: "#0a74d4" }}>₹{total}</span>
                  </div>
                </>
              )}

              {/* Trust badges */}
              <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { icon: "✓", text: "NABL Certified Lab" },
                  { icon: "✓", text: "Doctor-Verified Reports" },
                  { icon: "✓", text: "Pay at Collection" },
                  { icon: "✓", text: "Report on WhatsApp" },
                ].map((b) => (
                  <div key={b.text} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: ".75rem", color: "#4a5e7a" }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".6rem", color: "#16a34a", fontWeight: 800, flexShrink: 0 }}>{b.icon}</div>
                    {b.text}
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp alt */}
            <div style={{ padding: "0 20px 20px" }}>
              <div style={{ fontSize: ".72rem", color: "#94a3b8", textAlign: "center", marginBottom: 8 }}>— or book directly —</div>
              <a href="https://wa.me/917737774617" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 7, background: "#25d366", color: "#fff", fontWeight: 700, fontSize: ".8rem", padding: "11px", borderRadius: 10, textDecoration: "none" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Book on WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
