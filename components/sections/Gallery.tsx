"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { IMAGES } from '@/constants/images'

export default function Gallery() {
  const images = [
    { src: IMAGES.stock1, alt: 'Diagnostic Testing', span: true },
    { src: IMAGES.stock2, alt: 'Laboratory Analysis' },
    { src: IMAGES.stock3, alt: 'Advanced Equipment' },
    { src: IMAGES.stock4, alt: 'Expert Reporting' },
    { src: IMAGES.real1, alt: 'Reliable Facility' },
  ]

  return (
    <section id="gallery" className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
      <div className="text-center mb-10 sm:mb-16">
        <p className="text-primary font-bold uppercase tracking-[0.2em] text-xs lg:text-sm mb-2">Our Facility</p>
        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 uppercase">A Glimpse into Excellence</h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {images.map((img, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="aspect-square relative overflow-hidden rounded-[2rem] lg:rounded-[3rem] shadow-xl group premium-card"
          >
            <Image 
              src={img.src} 
              alt={img.alt} 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-white text-xs font-bold uppercase tracking-widest">{img.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
