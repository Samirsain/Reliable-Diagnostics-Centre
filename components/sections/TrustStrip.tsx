"use client"

import { motion } from 'framer-motion'
import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react'

const TRUST_ITEMS = [
  { icon: ShieldCheck, text: "NABL Certified Laboratory", detail: "Quality Guaranteed" },
  { icon: CheckCircle2, text: "100% Accurate Reports", detail: "Doctor Verified" },
  { icon: Zap, text: "Fastest Report Delivery", detail: "Within 24 Hours" },
]

export default function TrustStrip() {
  return (
    <div className="bg-secondary/5 border-y border-slate-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRUST_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 justify-center md:justify-start"
            >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-slate-900 font-bold text-sm tracking-tight">{item.text}</p>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest font-semibold">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
