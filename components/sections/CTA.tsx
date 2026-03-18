"use client"

import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { IMAGES } from '@/constants/images'

export default function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 sm:py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
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
        <h2 className="text-4xl lg:text-5xl font-black leading-tight text-slate-900 uppercase">
          Learn about our <span className="text-primary italic">Enhancing Care</span>
        </h2>
        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
          <p>
            At Reliable Diagnostics Centre, we go beyond simple testing. We provide comprehensive health insights that empower you to take charge of your longevity.
          </p>
          <p>
            Our advanced diagnostics combine clinical precision with compassionate care, ensuring that every patient receives a clear path forward for their health journey.
          </p>
        </div>
        <Link href="#contact" className="inline-block bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full text-lg font-bold transition-all shadow-xl shadow-primary/30">
          Read More
        </Link>
      </div>
    </section>
  )
}
