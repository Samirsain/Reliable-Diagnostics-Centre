"use client"

import { motion } from "framer-motion"

const FEATURES = [
  {
    icon: "medical_services",
    title: "Professional Support",
    desc: "Our team of clinical experts provides continuous support to ensure the highest standards of diagnostic care."
  },
  {
    icon: "biotech",
    title: "Highly Accurate",
    desc: "Equipped with state-of-the-art automated analyzers to deliver results with 99.9% clinical precision."
  },
  {
    icon: "volunteer_activism",
    title: "Personalised Care",
    desc: "We tailor our diagnostic approach to each patient's specific health needs and clinical history."
  }
]

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 -mt-6 sm:-mt-8 lg:-mt-12 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
        {FEATURES.map((feature, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 lg:p-10 rounded-2xl lg:rounded-3xl shadow-xl shadow-slate-200/50 text-center border border-slate-50 lg:hover:-translate-y-2 transition-transform"
          >
            <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mx-auto mb-4 lg:mb-6 border border-primary/10">
              <span className="material-symbols-outlined text-2xl lg:text-3xl">{feature.icon}</span>
            </div>
            <h3 className="text-lg lg:text-xl font-bold mb-2 lg:mb-4 text-slate-900 uppercase tracking-tight">{feature.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

  )
}
