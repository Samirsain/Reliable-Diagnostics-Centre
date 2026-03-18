"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { IMAGES } from '@/constants/images'
import { useReveal, staggerContainer, fadeUpItem } from '@/hooks/useReveal'

const SERVICES = [
  {
    icon: 'biotech',
    title: 'Complete Blood Count & Biochemistry',
    desc: 'Haematology panels, ESR, blood grouping, and full metabolic profiling.',
  },
  {
    icon: 'medication',
    title: 'Thyroid & Hormone Profiling',
    desc: 'T3, T4, TSH, FSH, LH, Testosterone, Oestrogen, Cortisol panels.',
  },
  {
    icon: 'water_drop',
    title: 'Liver & Kidney Function Tests',
    desc: 'LFT, KFT, uric acid, creatinine clearance, hepatitis markers.',
  },
  {
    icon: 'monitor_heart',
    title: 'Cardiac & Lipid Risk Panel',
    desc: 'Lipid profile, troponin, CRP, homocysteine, cardiovascular biomarkers.',
  },
  {
    icon: 'bloodtype',
    title: 'Diabetes & Glucose Monitoring',
    desc: 'HbA1c, fasting glucose, OGTT, insulin levels, diabetic risk.',
  },
  {
    icon: 'vaccines',
    title: 'Viral & Immunology Serology',
    desc: 'HIV, Hepatitis, TORCH, Dengue, Malaria, Widal panels.',
  },
  {
    icon: 'coronavirus',
    title: 'Microbiology & Culture Tests',
    desc: 'Urine/blood cultures, antibiotic sensitivity, stool exam.',
  },
  {
    icon: 'science',
    title: 'Urine & Stool Analysis',
    desc: 'Routine urinalysis, occult blood, ova & parasite identification.',
  },
  {
    icon: 'inventory_2',
    title: 'Health Packages & Profiles',
    desc: 'Full Body, Senior Citizen, Women\'s Health, Executive packages.',
  },
]

export default function Services() {
  const { ref, inView } = useReveal()

  return (
    <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-12 lg:mb-16">
        <div className="flex-1 space-y-6 lg:space-y-8 text-center lg:text-left">
          <div className="flex items-center gap-2 text-primary font-bold text-xs lg:text-sm tracking-widest uppercase justify-center lg:justify-start">
            <span className="w-8 h-[2px] bg-primary"></span>
            Our Specialities
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight text-slate-900 uppercase">
            Comprehensive Diagnostic Solutions
          </h2>
          <p className="text-slate-600 text-base lg:text-lg max-w-2xl mx-auto lg:mx-0">
            Reliable Diagnostics Centre provides a wide range of specialized labs, ensuring precision and reliability in every clinical report.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 pt-4 text-left">
            {[
              "General Check-ups & Exams",
              "Chronic Disease Panels",
              "Hormone & Viral Screening",
              "Fully Automated Analysis"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-sm font-bold">check</span>
                </div>
                <p className="font-bold text-slate-800 text-sm">{item}</p>
              </div>
            ))}
          </div>
          <Link href="#contact" className="inline-block bg-primary hover:bg-primary/90 text-white px-8 lg:px-10 py-4 rounded-full text-base lg:text-lg font-semibold transition-all shadow-xl shadow-primary/30 font-display tracking-wide">
            Book a Test
          </Link>
        </div>
        
        <div className="flex-1 relative group w-full max-w-md lg:max-w-none mx-auto">
          <div className="relative w-full aspect-[4/3] lg:h-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src={IMAGES.stock3}
              alt="Reliable Diagnostics Lab"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Grid of 9 Cards - Rule 7 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {SERVICES.map((svc, i) => (
          <motion.div 
            key={i}
            variants={fadeUpItem}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="premium-card p-8 group overflow-hidden"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-2xl">{svc.icon}</span>
            </div>
            <h3 className="font-bold text-lg lg:text-xl text-slate-900 mb-3 leading-snug group-hover:text-primary transition-colors">
              {svc.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
              {svc.desc}
            </p>
            <Link href="#contact" className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider group/link">
              Learn More
              <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>

  )
}
