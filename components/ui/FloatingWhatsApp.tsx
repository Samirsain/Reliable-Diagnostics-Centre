"use client"

import { motion } from 'framer-motion'
import { MessageSquare } from 'lucide-react'

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/917737774617"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.5)] group lg:bottom-8 lg:right-8"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="w-7 h-7 fill-current" />
      <span className="absolute right-full mr-3 bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
        Chat with us
      </span>
    </motion.a>
  )
}
