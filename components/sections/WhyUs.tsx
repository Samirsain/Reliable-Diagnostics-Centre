"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { IMAGES } from '@/constants/images'
import { Check } from 'lucide-react'
import { useReveal, staggerContainer, fadeUpItem } from '@/hooks/useReveal'

const PILLARS = [
  { icon: '🎯', title: 'Clinical Accuracy', desc: 'Fully automated biochemistry and hematology analyzers ensure precise, error-free results.' },
  { icon: '⚡', title: 'Speed & Efficiency', desc: 'Most routine blood and urine reports are delivered within 12-24 hours seamlessly.' },
  { icon: '🛡️', title: 'Hygiene & Safety', desc: 'Strict adherence to BMW (Bio-Medical Waste) guidelines and daily sanitization protocols.' },
  { icon: '🤝', title: 'Patient-First', desc: 'Courteous phlebotomists trained for painless sample collection, even for seniors and kids.' },
]

const CHECKS = [
  'NABL Quality Compliant Reagents & Equipment',
  'Barcode Tracking for Zero Sample Mix-up',
  'Automated WhatsApp Report Delivery',
  'Home Sample Collection Network',
  'Experienced Pathologists on Panel',
  'Daily Quality Control Calibrations',
  'Comfortable, Air-Conditioned Waiting Area',
]

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-[22px] h-[22px] rounded-full bg-brand-teal3 flex items-center justify-center text-brand-teal shrink-0 mt-0.5">
        <Check strokeWidth={3} className="w-3 h-3" />
      </div>
      <span className="text-[0.88rem] text-neutral-ink3 leading-relaxed">{text}</span>
    </div>
  )
}

export default function WhyUs() {
  const { ref, inView } = useReveal()

  return (
    <section id="whyus" className="min-h-[640px] grid lg:grid-cols-2">
      {/* Left Panel */}
      <div className="bg-neutral-silk px-6 lg:px-[5rem] py-20 lg:py-[6rem]">
        <div className="flex items-center gap-[0.8rem] mb-[1.2rem]">
          <div className="w-[32px] h-[1px] bg-brand-teal" />
          <span className="text-[0.68rem] tracking-[0.25em] uppercase text-brand-teal font-medium">
            Standard Others Aspire To
          </span>
        </div>
        <h2 className="font-display text-[clamp(1.9rem,3.2vw,3rem)] font-bold text-neutral-ink leading-[1.15] mb-8">
          Precision Built on <br />
          <em className="text-brand-teal italic font-medium">Uncompromising Quality</em>
        </h2>

        <p className="text-[0.92rem] leading-[1.85] text-neutral-ash max-w-[480px] mb-10">
          We don't just process samples; we deliver peace of mind. Our facility in Hanumangarh represents the pinnacle of modern diagnostic infrastructure.
        </p>

        <div className="flex flex-col gap-4 mb-16">
          {CHECKS.map((text, i) => (
            <CheckItem key={i} text={text} />
          ))}
        </div>

        <div className="relative w-full max-w-[420px] aspect-[16/9] mx-auto lg:mx-0 shadow-2xl rounded-lg overflow-hidden -rotate-1">
          <Image src={IMAGES.labTech} alt="Lab Technician" fill className="object-cover" />
        </div>
      </div>

      {/* Right Panel */}
      <div className="bg-brand-dark px-6 lg:px-[5rem] py-20 lg:py-[6rem] flex flex-col justify-center">
        <div className="flex items-center gap-[0.8rem] mb-[1.2rem]">
          <div className="w-[32px] h-[1px] bg-brand-teal2" />
          <span className="text-[0.68rem] tracking-[0.25em] uppercase text-brand-teal2 font-medium">
            Core Principles
          </span>
        </div>
        <h2 className="font-display text-[clamp(1.9rem,3.2vw,3rem)] font-bold text-white leading-[1.15] mb-12">
          The Reliable <br />
          <em className="text-brand-teal2 italic font-medium">Advantage</em>
        </h2>

        <motion.div 
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-col"
        >
          {PILLARS.map((pillar, i) => (
            <motion.div 
              key={i}
              variants={fadeUpItem}
              className="border-b border-white/8 py-6 flex gap-5 items-start last:border-b-0"
            >
              <div className="w-[44px] h-[44px] shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl">
                {pillar.icon}
              </div>
              <div>
                <h3 className="text-white text-[0.9rem] font-medium mb-1.5">{pillar.title}</h3>
                <p className="text-white/45 text-[0.78rem] leading-relaxed max-w-[320px]">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
