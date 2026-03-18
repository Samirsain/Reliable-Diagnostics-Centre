"use client"

import { motion } from 'framer-motion'
import { useCountUp } from '@/hooks/useCountUp'

const STATS = [
  { label: 'Google Rating', count: 4.9, suffix: '', icon: 'star' },
  { label: 'Happy Patients', count: 10000, suffix: '+', icon: 'groups' },
  { label: 'Tests Available', count: 200, suffix: '+', icon: 'science' },
  { label: 'Report Turnaround', count: 24, suffix: 'h', icon: 'speed' },
]

export default function Stats() {
  const stat1 = useCountUp(4.9, 2000)
  const stat2 = useCountUp(10000, 2500)
  const stat3 = useCountUp(200, 2000)
  const stat4 = useCountUp(24, 1500)

  const counts = [stat1, stat2, stat3, stat4]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-white to-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              ref={counts[i].ref}
              className="premium-card p-6 sm:p-10 text-center flex flex-col items-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl font-bold">{stat.icon}</span>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 tracking-tight">
                {counts[i].count}{stat.suffix}
              </h3>
              <p className="text-[10px] sm:text-[11px] text-slate-500 font-bold uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
