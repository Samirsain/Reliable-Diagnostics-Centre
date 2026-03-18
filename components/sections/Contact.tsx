"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ContactDock } from './ContactDock'
import { ChevronDown, Check } from 'lucide-react'

const INFO_BLOCKS = [
  {
    icon: 'pin_drop',
    title: 'Our Location',
    desc: 'Bharat Mata Chowk, Puran Nagar, Hanumangarh, Rajasthan – 335513',
    link: 'https://maps.google.com/?q=Reliable+Diagnostics+Centre+Hanumangarh',
    linkLabel: 'Get Directions',
  },
  {
    icon: 'call',
    title: 'Call Us',
    desc: '077377 74617',
    link: 'tel:07737774617',
    linkLabel: 'Call Now',
  },
  {
    icon: 'acute',
    title: 'Working Hours',
    desc: 'Mon–Sat: 7 AM – 8 PM\nSunday: 9 AM – 2 PM',
    link: null,
    linkLabel: null,
  },
  {
    icon: 'home_health',
    title: 'Home Collection',
    desc: 'Available 7 days a week',
    link: 'https://wa.me/917737774617',
    linkLabel: 'WhatsApp Us',
  },
]

const TEST_OPTIONS = [
  "Complete Blood Count (CBC)",
  "Liver Function Test (LFT)",
  "Kidney Function Test (KFT)",
  "Thyroid Profile (T3/T4/TSH)",
  "Lipid Profile / Cholesterol",
  "HbA1c / Diabetes Test",
  "Fever Panel (Dengue / Malaria / Typhoid)",
  "Urine / Stool Analysis",
  "Hormone Profile",
  "Basic Health Checkup — ₹999",
  "Diabetes Care Package — ₹799",
  "Heart & Lipid Package — ₹699",
  "Thyroid & Hormone Package — ₹599",
  "Anaemia Package — ₹499",
  "Senior Citizen Health Check — ₹1499",
  "Other / Not Listed",
]

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

function GlassSelect({ value, onChange, options }: { value: string, onChange: (v: string) => void, options: string[] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white/40 border border-white/60 text-slate-900 rounded-xl px-5 py-3.5 lg:py-4 text-base sm:text-sm focus:bg-white/70 focus:border-primary focus:outline-none transition-all flex items-center justify-between w-full shadow-sm backdrop-blur-sm group"
      >
        <span className={cn(value ? "text-slate-900 font-medium" : "text-slate-400 font-medium")}>
          {value || "Select a test..."}
        </span>
        <ChevronDown className={cn("w-4 h-4 text-slate-500 transition-transform duration-300", isOpen && "rotate-180")} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Click-out overlay */}
            <div className="fixed inset-0 z-20" onClick={() => setIsOpen(false)} />
            
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute left-0 right-0 top-full mt-2 z-30 bg-white/70 backdrop-blur-3xl border border-white/50 rounded-2xl shadow-2xl p-2 max-h-[300px] overflow-y-auto custom-scrollbar overflow-x-hidden"
            >
              {options.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    onChange(opt)
                    setIsOpen(false)
                  }}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-xl text-sm transition-all flex items-center justify-between group",
                    value === opt ? "bg-primary text-white font-bold" : "text-slate-700 hover:bg-primary/10 hover:text-primary"
                  )}
                >
                  {opt}
                  {value === opt && <Check className="w-4 h-4" />}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Contact() {
  const [success, setSuccess] = useState(false)
  const [selectedTest, setSelectedTest] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSuccess(true)
    setTimeout(() => setSuccess(false), 5000)
  }

  return (
    <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-primary hidden sm:block" />
            <span className="text-[0.65rem] sm:text-[0.68rem] tracking-[0.25em] uppercase text-primary font-bold">Get In Touch</span>
            <div className="w-8 h-[1px] bg-primary hidden sm:block" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 leading-tight uppercase mb-8">
            Visit Us or <span className="text-primary italic">Book a Test</span>
          </h2>
          <div className="lg:hidden">
            <ContactDock />
          </div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="order-2 lg:order-1 lg:col-span-2 flex flex-col gap-4 lg:gap-5">
            {INFO_BLOCKS.map((block, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 p-4 lg:p-5 rounded-2xl border border-slate-100 bg-slate-50/30 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all group"
              >
                <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-xl">{block.icon}</span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-slate-900 text-xs lg:text-sm font-black uppercase tracking-wider mb-1">{block.title}</h3>
                  <p className="text-slate-500 text-xs lg:text-sm leading-relaxed font-medium whitespace-pre-line">{block.desc}</p>
                  {block.link && (
                    <a href={block.link} target="_blank" rel="noopener noreferrer" className="text-primary text-[10px] lg:text-xs font-bold mt-2 inline-flex items-center gap-1 hover:underline">
                      {block.linkLabel}
                      <span className="material-symbols-outlined text-xs">arrow_forward</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}

            <a
              href="https://wa.me/917737774617?text=नमस्ते%2C%20मुझे%20RDC%20हनुमानगढ़%20में%20टेस्ट%20बुक%20करना%20है"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-4 lg:py-5 rounded-2xl hover:bg-[#1ebe5d] transition-colors font-bold text-sm shadow-xl shadow-[#25D366]/20"
            >
              <span className="material-symbols-outlined">chat</span>
              Chat on WhatsApp
            </a>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-3">
            <div className="bg-white/60 backdrop-blur-3xl border border-white/40 rounded-[2rem] lg:rounded-[3rem] p-6 sm:p-8 lg:p-12 relative overflow-hidden shadow-2xl shadow-blue-900/5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -mr-32 -mt-32 animate-pulse" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300/20 rounded-full blur-[80px] -ml-32 -mb-32" />

              <div className="relative z-10">
                <div className="mb-8 text-center lg:text-left">
                  <h3 className="text-xl lg:text-2xl font-black text-slate-950 uppercase mb-1">
                    Send an Enquiry
                  </h3>
                  <p className="text-slate-600 text-xs lg:text-sm font-semibold opacity-80">We'll get back to you within the hour.</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-[10px] text-slate-500 uppercase tracking-widest font-black ml-1">Full Name</label>
                      <input required type="text" id="name" placeholder="Your name"
                        className="bg-white/40 border border-white/60 text-slate-900 placeholder:text-slate-400 rounded-xl px-5 py-3.5 lg:py-4 text-base sm:text-sm focus:bg-white/70 focus:border-primary focus:outline-none transition-all w-full shadow-sm backdrop-blur-sm" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-[10px] text-slate-500 uppercase tracking-widest font-black ml-1">Phone</label>
                      <input required type="tel" id="phone" placeholder="10-digit number"
                        className="bg-white/40 border border-white/60 text-slate-900 placeholder:text-slate-400 rounded-xl px-5 py-3.5 lg:py-4 text-base sm:text-sm focus:bg-white/70 focus:border-primary focus:outline-none transition-all w-full shadow-sm backdrop-blur-sm" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="test" className="text-[10px] text-slate-500 uppercase tracking-widest font-black ml-1">Test / Package</label>
                    <GlassSelect 
                      options={TEST_OPTIONS} 
                      value={selectedTest} 
                      onChange={setSelectedTest} 
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-[10px] text-slate-500 uppercase tracking-widest font-black ml-1">Notes (Optional)</label>
                    <textarea id="message" placeholder="Doctor's reference, home address..." rows={3}
                      className="bg-white/40 border border-white/60 text-slate-900 placeholder:text-slate-400 rounded-xl px-5 py-3.5 lg:py-4 text-base sm:text-sm focus:bg-white/70 focus:border-primary focus:outline-none transition-all resize-none w-full shadow-sm backdrop-blur-sm" />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white h-14 sm:h-16 mt-2 tracking-widest text-sm font-black uppercase flex items-center justify-center gap-3 rounded-full shadow-2xl shadow-primary/20 group">
                    Send Request
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-lg lg:text-xl">arrow_forward</span>
                  </Button>

                  {success && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-4 bg-primary text-white rounded-xl text-center text-sm font-bold shadow-lg"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined">check_circle</span>
                        Sent! We'll call you shortly.
                      </div>
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
