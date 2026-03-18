"use client"

"use client";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 2000, started = false, isDecimal = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setValue(isDecimal ? parseFloat(current.toFixed(1)) : Math.round(current));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target, duration, isDecimal]);
  return value;
}

const stats = [
  {
    id: "rating",
    target: 4.9,
    suffix: "★",
    label: "Google Rating",
    sub: "From 120+ real patient reviews",
    isDecimal: true,
    duration: 1200,
    icon: (
      <svg width="22" height="22" fill="none" stroke="#0a74d4" viewBox="0 0 24 24" strokeWidth="2">
        <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    id: "patients",
    target: 10000,
    suffix: "+",
    label: "Happy Patients",
    sub: "Served across Hanumangarh",
    duration: 2000,
    icon: (
      <svg width="22" height="22" fill="none" stroke="#0a74d4" viewBox="0 0 24 24" strokeWidth="2">
        <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    id: "tests",
    target: 200,
    suffix: "+",
    label: "Tests Available",
    sub: "Diagnostic tests & panels",
    duration: 1800,
    icon: (
      <svg width="22" height="22" fill="none" stroke="#0a74d4" viewBox="0 0 24 24" strokeWidth="2">
        <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.798-1.414 2.798H4.213c-1.444 0-2.414-1.798-1.414-2.798L4 15.3" />
      </svg>
    ),
  },
  {
    id: "hours",
    target: 24,
    suffix: "h",
    label: "Report Turnaround",
    sub: "Same day results for most tests",
    duration: 1200,
    icon: (
      <svg width="22" height="22" fill="none" stroke="#0a74d4" viewBox="0 0 24 24" strokeWidth="2">
        <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

function StatItem({ stat, started }: { stat: any, started: boolean }) {
  const value = useCountUp(stat.target, stat.duration, started, stat.isDecimal ?? false);
  return (
    <div className="px-3 sm:px-6" style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      paddingTop: 32, paddingBottom: 32, borderRight: "1px solid #e8f0fb", flex: 1,
    }}>
      <div style={{
        width: 48, height: 48, background: "#eef5ff", borderRadius: 14,
        display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16,
      }}>
        {stat.icon}
      </div>
      <div className="text-[1.8rem] sm:text-[2.6rem]" style={{ fontWeight: 800, color: "#0a2540", lineHeight: 1, marginBottom: 6, letterSpacing: "-.02em" }}>
        {stat.isDecimal ? value.toFixed(1) : value.toLocaleString()}
        <span style={{ color: "#0a74d4" }}>{stat.suffix}</span>
      </div>
      <div style={{ fontSize: ".85rem", fontWeight: 700, color: "#0a2540", marginBottom: 4 }}>{stat.label}</div>
      <div style={{ fontSize: ".72rem", color: "#6b7d99", textAlign: "center", lineHeight: 1.55, maxWidth: 120 }}>{stat.sub}</div>
    </div>
  );
}

export default function StatsCounter() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="premium-section" style={{ background: "#fff", padding: "56px 0", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div style={{ textAlign: "center", marginBottom: 10, fontSize: ".65rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#0a74d4" }}>
        Our Track Record
      </div>
      <h2 style={{ textAlign: "center", fontSize: "1.75rem", fontWeight: 800, color: "#0a2540", marginBottom: 48 }}>
        Numbers That Speak for Themselves
      </h2>
      <div className="stats-grid flex flex-col lg:flex-row shadow-[0_4px_20px_rgba(0,0,0,0.03)]" style={{ borderRadius: 16, border: "1px solid #e8f0fb", overflow: "hidden", maxWidth: 960, margin: "0 auto" }}>
        {stats.map((stat, i) => (
          <div key={stat.id} className={`flex-1 border-b lg:border-b-0 ${i % 2 === 0 ? 'border-r border-[#e8f0fb]' : 'lg:border-r border-[#e8f0fb]'} ${i === stats.length - 1 ? 'border-r-0' : ''}`}>
            <StatItem stat={stat} started={started} />
          </div>
        ))}
      </div>
    </section>
  );
}
