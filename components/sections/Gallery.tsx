"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

// ✏️  Add your real photos here — replace src with actual image paths
const galleryItems = [
  { src: "/realble-photos/image copy.png",             cat: "lab",       caption: "Main Laboratory — Automated Analysis Room",  size: "large" },
  { src: "/realble-photos/Equipment/image.png",        cat: "equipment", caption: "Advanced Diagnostic Equipment" },
  { src: "/realble-photos/Team/image.png",             cat: "team",      caption: "Our Expert Team" },
  { src: "/realble-photos/Equipment/image copy 2.png", cat: "equipment", caption: "Precision Testing Equipment" },
  { src: "/realble-photos/image.png",                  cat: "lab",       caption: "Clean & Hygienic Facility" },
  { src: "/realble-photos/Team/image copy.png",        cat: "team",      caption: "Dedicated Professionals" },
  { src: "/realble-photos/Equipment/image copy.png",   cat: "equipment", caption: "Automated Analyzers" },
  { src: "/realble-photos/image copy 2.png",           cat: "lab",       caption: "Patient Care Area" },
  { src: "/realble-photos/Equipment/image copy 3.png", cat: "equipment", caption: "High-Tech Diagnostics Core" },
  { src: "/realble-photos/Equipment/image copy 4.png", cat: "equipment", caption: "Microbiology Lab" },
  { src: "/realble-photos/Team/image copy 2.png",      cat: "team",      caption: "Friendly Support Staff" },
];

const filters = [
  { key: "all",       label: "All" },
  { key: "lab",       label: "Laboratory" },
  { key: "equipment", label: "Equipment" },
  { key: "team",      label: "Team" },
  { key: "reports",   label: "Reports" },
];

const ZoomIcon = () => (
  <svg width="16" height="16" fill="none" stroke="#fff" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
  </svg>
);

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter((i) => i.cat === activeFilter);

  const closeLb = useCallback(() => setLightboxIdx(null), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightboxIdx === null) return;
      if (e.key === "Escape") closeLb();
      if (e.key === "ArrowRight") setLightboxIdx((i) => (i! + 1) % filtered.length);
      if (e.key === "ArrowLeft") setLightboxIdx((i) => (i! - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIdx, filtered.length, closeLb]);

  return (
    <>
      <section className="premium-section" style={{ background: "#0a2540", padding: "56px 0", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <div style={{ fontSize: ".65rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#38b6ff", textAlign: "center", marginBottom: 10 }}>
          Our Facility
        </div>
        <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#fff", textAlign: "center", marginBottom: 8 }}>
          A Glimpse into Excellence
        </h2>
        <p style={{ fontSize: ".85rem", color: "rgba(255,255,255,.5)", textAlign: "center", marginBottom: 36 }}>
          State-of-the-art equipment, trained staff, and a clean hygienic environment
        </p>

        {/* Filters */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              style={{
                padding: "7px 18px", borderRadius: 20,
                fontSize: ".75rem", fontWeight: 600, cursor: "pointer",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                border: "1px solid",
                borderColor: activeFilter === f.key ? "#0a74d4" : "rgba(255,255,255,.15)",
                background: activeFilter === f.key ? "#0a74d4" : "transparent",
                color: activeFilter === f.key ? "#fff" : "rgba(255,255,255,.5)",
                transition: "all .2s",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 12,
          maxWidth: 1100,
          margin: "0 auto",
        }}>
          {filtered.map((item, i) => {
            const isLarge = activeFilter === "all" && item.size === "large";
            return (
              <div
                key={item.src}
                onClick={() => setLightboxIdx(i)}
                style={{
                  gridColumn: isLarge ? "span 1" : "span 1",
                  gridRow: isLarge ? "span 2" : "span 1",
                  borderRadius: 12, overflow: "hidden",
                  position: "relative", cursor: "pointer",
                  background: "#0d2d4a",
                }}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  style={{
                    width: "100%", height: isLarge ? "100%" : "auto",
                    minHeight: isLarge ? 280 : 0,
                    aspectRatio: isLarge ? "auto" : "1",
                    objectFit: "cover", display: "block",
                    transition: "transform .4s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                />
                {/* Overlay */}
                <div
                  style={{
                    position: "absolute", inset: 0,
                    background: "rgba(10,37,64,.55)",
                    opacity: 0, transition: "opacity .3s",
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center", gap: 8,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = "0"; }}
                >
                  <div style={{ background: "rgba(10,116,212,.85)", color: "#fff", fontSize: ".65rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", padding: "4px 12px", borderRadius: 20 }}>
                    {filters.find((f) => f.key === item.cat)?.label}
                  </div>
                  <div style={{ width: 36, height: 36, background: "rgba(255,255,255,.15)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,.3)" }}>
                    <ZoomIcon />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <Link
            href="/book-test"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", border: "1.5px solid rgba(255,255,255,.2)", color: "#fff", fontSize: ".82rem", fontWeight: 600, padding: "12px 28px", borderRadius: 9, textDecoration: "none" }}
          >
            Book a Visit →
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) closeLb(); }}
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,.92)",
            zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center",
            padding: 24, fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          <div style={{ maxWidth: 800, width: "100%", position: "relative" }}>
            <button
              onClick={closeLb}
              style={{ position: "absolute", top: -40, right: 0, background: "rgba(255,255,255,.1)", border: "none", color: "#fff", width: 32, height: 32, borderRadius: "50%", cursor: "pointer", fontSize: "1.1rem", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              ✕
            </button>
            <img
              src={filtered[lightboxIdx]?.src}
              alt={filtered[lightboxIdx]?.caption}
              style={{ width: "100%", borderRadius: 12, maxHeight: "70vh", objectFit: "contain" }}
            />
            <div style={{ textAlign: "center", color: "rgba(255,255,255,.7)", fontSize: ".82rem", marginTop: 12 }}>
              {filtered[lightboxIdx]?.caption} &nbsp;·&nbsp; {lightboxIdx + 1} / {filtered.length}
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 16 }}>
              <button onClick={() => setLightboxIdx((i) => (i! - 1 + filtered.length) % filtered.length)} style={{ background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)", color: "#fff", padding: "7px 20px", borderRadius: 7, cursor: "pointer", fontSize: ".8rem", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>← Prev</button>
              <button onClick={() => setLightboxIdx((i) => (i! + 1) % filtered.length)} style={{ background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)", color: "#fff", padding: "7px 20px", borderRadius: 7, cursor: "pointer", fontSize: ".8rem", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Next →</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
