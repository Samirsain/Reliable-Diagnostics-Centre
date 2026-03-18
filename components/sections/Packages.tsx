"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const PACKAGES = [
  {
    icon: "person",
    title: "Full Body Health",
    desc: "Comprehensive evaluation of all vital organs including Liver, Kidney, Thyroid and Lipid profiles."
  },
  {
    icon: "psychology",
    title: "Diabetes Panel",
    desc: "Advanced HbA1c and glucose monitoring to track insulin sensitivity and glycemic control."
  },
  {
    icon: "genetics",
    title: "Hormone Profile",
    desc: "Detailed screening of endocrine health covering T3, T4, TSH, and reproductive hormones."
  }
]

export default function Packages() {
  return (
    <section id="packages" className="blue-gradient-card py-12 lg:py-16 mx-4 sm:mx-6 lg:mx-16 rounded-[2rem] lg:rounded-[3rem] my-10 lg:my-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-center sm:items-end gap-10 mb-12 lg:mb-20 text-white text-center lg:text-left">
          <div className="space-y-4 lg:space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight uppercase">
              Specialized Health <br /> Packages for You
            </h2>
          </div>
          <div className="space-y-4 lg:space-y-6 max-w-lg">
            <p className="text-blue-50 text-base lg:text-lg opacity-90 px-4 sm:px-0">
              Reliable Diagnostics offers curated health checkup plans designed for different age groups and clinical needs.
            </p>
            <Link href="#contact" className="flex items-center gap-2 font-bold text-white border-b-2 border-white pb-1 group w-fit mx-auto lg:mx-0">
              View All Packages
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
        
        {/* Horizontal scroll on mobile - Rule 8 */}
        <div className="flex overflow-x-auto gap-4 lg:gap-8 pb-10 sm:pb-0 -mx-6 px-6 sm:mx-0 sm:px-0 snap-x snap-mandatory scroll-smooth sm:grid sm:grid-cols-2 lg:grid-cols-3 no-scrollbar">
          {PACKAGES.map((pkg, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 lg:p-10 rounded-2xl lg:rounded-3xl text-center shadow-2xl flex flex-col items-center group hover:bg-primary-light transition-colors min-w-[280px] sm:min-w-0 snap-center"
            >
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 lg:mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl lg:text-4xl">{pkg.icon}</span>
              </div>
              <h4 className="text-lg lg:text-xl font-semibold mb-3 lg:mb-4 text-slate-900 uppercase tracking-tight">{pkg.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 lg:mb-8">{pkg.desc}</p>
              <Link href="#contact" className="text-primary font-semibold border-b border-primary text-[10px] uppercase tracking-[0.15em] hover:text-slate-900 hover:border-slate-900 transition-colors mt-auto font-display">
                Book Now
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile scroll indicator dots */}
        <div className="flex justify-center gap-2 mt-2 sm:hidden">
          {PACKAGES.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/30"/>
          ))}
        </div>
      </div>
    </section>

  )
}
