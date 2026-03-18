"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { IMAGES } from '@/constants/images'

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
      <div className="flex-1 relative w-full max-w-sm lg:max-w-none mx-auto">
        <div className="w-[200px] h-[200px] lg:w-[450px] lg:h-[450px] bg-sky-100/50 absolute -top-5 -left-5 lg:-top-10 lg:-left-10 rounded-full -z-10"></div>
        <div className="relative">
          <div className="w-full aspect-square lg:w-[500px] lg:h-[500px] relative overflow-hidden circle-mask shadow-2xl">
            <Image 
              src={IMAGES.stock3} 
              alt="Laboratory Specialist" 
              fill 
              className="object-cover" 
            />
          </div>
          <div className="absolute bottom-5 left-[-10px] lg:bottom-10 lg:left-[-20px] bg-primary text-white p-4 lg:p-6 rounded-2xl shadow-xl animate-bounce-subtle">
            <div className="flex items-center gap-2 lg:gap-3">
              <span className="material-symbols-outlined text-sm lg:text-base">call</span>
              <div>
                <p className="text-[8px] lg:text-[10px] opacity-80 uppercase font-bold">Call our support</p>
                <p className="text-base lg:text-lg font-black">077377 74617</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-1 space-y-6 lg:space-y-8 text-center lg:text-left">
        <div className="flex items-center gap-2 text-primary font-bold text-xs lg:text-sm tracking-widest uppercase justify-center lg:justify-start">
          <span className="w-8 h-[2px] bg-primary"></span>
          About us
        </div>
        <h2 className="text-3xl lg:text-5xl font-black leading-tight text-slate-900">
          We’re an Enterprising Medical Diagnostics Center
        </h2>
        <div className="space-y-4 lg:space-y-6 text-slate-600 text-base lg:text-lg leading-relaxed">
          <p>
            Reliable Diagnostics Centre focuses on evaluating current and future health of our patients through advanced laboratory sciences. Located in Hanumangarh, we bring cutting-edge diagnostic technology right to your doorstep.
          </p>
          <p className="hidden sm:block">
            Our mission is to provide accurate, timely, and affordable diagnostic services to the community, ensuring every patient receives the precise information they need for their well-being.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 lg:px-10 py-4 rounded-full text-base lg:text-lg font-bold transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-3">
            Read More 
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>

  )
}
