"use client"

import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -80px 0px', amount: threshold })
  return { ref, inView }
}

export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

export const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

export const fadeLeftItem = {
  hidden: { opacity: 0, x: -28 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}
