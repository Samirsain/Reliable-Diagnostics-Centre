"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  { 
    q: "How can I book a home blood collection?", 
    a: "Booking is simple! You can click the 'Book a Test' button, WhatsApp us directly, or call our center. Our technician will visit your home at your preferred time for a sterile and quick collection." 
  },
  { 
    q: "What is the turnaround time for test reports?", 
    a: "Most routine reports (CBC, LFT, KFT, Thyroid) are delivered within 12-24 hours. Specialized tests may take 48-72 hours. You'll receive your report automatically on WhatsApp." 
  },
  { 
    q: "Are your lab tests fully automated and NABL compliant?", 
    a: "Yes, Reliable Diagnostics uses state-of-the-art automated analyzers that minimize human error. We follow strict NABL guidelines to ensure maximum accuracy and precision in every report." 
  },
  { 
    q: "Is fasting required for all blood tests?", 
    a: "Not all, but many tests like Lipid Profile and Blood Sugar (Fasting) require 8-10 hours of fasting. We recommend avoiding food and colored drinks, but you can usually have plain water." 
  },
  { 
    q: "How can I access my old reports?", 
    a: "We maintain a digital record of all your tests. You can request your old reports anytime via WhatsApp or by visiting our center with your registered mobile number." 
  }
]

function FAQItem({ faq, isOpen, toggle }: { faq: typeof FAQS[0], isOpen: boolean, toggle: () => void }) {
  return (
    <div className="border-b border-slate-100 last:border-none">
      <button
        onClick={toggle}
        className="flex items-center justify-between w-full py-5 lg:py-6 text-left group transition-all"
      >
        <span className={`text-sm lg:text-base font-bold transition-colors ${isOpen ? 'text-primary' : 'text-slate-800'}`}>
          {faq.q}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-primary text-white rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-slate-500 text-xs lg:text-sm leading-relaxed pb-6 lg:pb-8 font-medium">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-16 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-primary hidden sm:block" />
            <span className="text-[0.65rem] sm:text-[0.68rem] tracking-[0.25em] uppercase text-primary font-bold">Frequently Asked</span>
            <div className="w-8 h-[1px] bg-primary hidden sm:block" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight uppercase">
            Common <span className="text-primary italic">Questions</span>
          </h2>
        </div>

        <div className="bg-slate-50/30 border border-slate-100 rounded-[2rem] lg:rounded-[3rem] p-6 lg:p-12 shadow-sm">
          {FAQS.map((faq, i) => (
            <FAQItem 
              key={i} 
              faq={faq} 
              isOpen={openIndex === i} 
              toggle={() => setOpenIndex(openIndex === i ? null : i)} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}
