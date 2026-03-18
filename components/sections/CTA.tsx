"use client"

import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { IMAGES } from '@/constants/images'

export default function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-16 py-20 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="flex-1">
        <div className="relative w-full aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
          <Image 
            src={IMAGES.stock4} 
            alt="Medical Team" 
            fill 
            className="object-cover" 
          />
        </div>
      </div>
      <div className="flex-1 space-y-8">
        <h2 className="text-3xl lg:text-5xl font-bold leading-tight text-slate-900 uppercase">
          Advancing the Future of <span className="text-primary italic">Diagnostic Care</span>
        </h2>
        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
          <p>
            At Reliable Diagnostics Centre, we go beyond simple testing. We provide comprehensive health insights that empower you to take charge of your longevity.
          </p>
          <p>
            Our advanced diagnostics combine clinical precision with compassionate care, ensuring that every patient receives a clear path forward for their health journey.
          </p>
        </div>
        <Link href="#contact" className="inline-block bg-primary hover:bg-primary/90 text-white px-10 py-4 lg:py-5 rounded-full text-base lg:text-lg font-bold transition-all shadow-xl shadow-primary/30 tracking-wide font-display uppercase">
          Book a Test Now
        </Link>
      </div>
    </section>
  )
}
