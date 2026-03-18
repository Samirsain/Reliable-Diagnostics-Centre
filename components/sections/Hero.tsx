"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { IMAGES } from '@/constants/images'
import { staggerContainer, fadeUpItem } from '@/hooks/useReveal'

export default function Hero() {
  return (
    <section id="hero" className="hero-gradient min-h-[100svh] lg:min-h-screen relative overflow-hidden flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 pt-24 pb-8 lg:pt-20 lg:pb-12">
        <div className="space-y-6 text-center lg:text-left">
          <div className="flex items-center gap-[0.8rem] justify-center lg:justify-start">
            <div className="w-[40px] h-[1px] bg-primary hidden sm:block" />
            <span className="text-[0.65rem] sm:text-[0.7rem] tracking-[0.22em] uppercase text-primary font-bold">
              Hanumangarh's Finest Diagnostic Centre
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.15] tracking-tight text-slate-900">
            Where Precision <br className="hidden sm:block" />
            <span className="text-primary italic">Meets Compassion.</span>
          </h1>

          {/* Mobile-only rating pill */}
          <div className="flex items-center justify-center lg:hidden gap-2 bg-white/50 backdrop-blur w-fit mx-auto px-4 py-2 rounded-full border border-white shadow-sm">
            <span className="text-amber-500 font-bold text-sm flex items-center gap-1">
              <Star className="w-4 h-4 fill-amber-500" /> 4.9
            </span>
            <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">· 46 Reviews</span>
          </div>

          {/* Mobile-only Hero Image */}
          <div className="lg:hidden relative w-full max-w-[220px] mx-auto mt-2">
            <Image 
              src={IMAGES.heroDoctor} 
              alt="Doctor" 
              width={400} 
              height={400} 
              className="w-full h-auto object-contain drop-shadow-2xl" 
              priority
            />
            <div className="absolute top-[15%] left-0 w-10 animate-bounce-subtle">
              <Image src={IMAGES.floatingIcon} alt="" width={40} height={40} className="w-full h-auto" />
            </div>
          </div>
          
          <p className="text-primary font-bold font-hindi text-sm sm:text-base">
            रिलायबल डायग्नोस्टिक्स सेंटर — भरोसेमंद, सटीक, उन्नत
          </p>
          
          <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Reliable Diagnostics Centre focuses on evaluating current and future health through advanced clinical testing and precise reporting.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 justify-center lg:justify-start">
            <Link href="#contact" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full text-base font-bold transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-3">
              Book a Test
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link href="#services" className="w-full sm:w-auto bg-white/50 backdrop-blur hover:bg-white text-slate-600 px-10 py-4 rounded-full text-base font-bold transition-all border border-slate-200 flex items-center justify-center">
              Our Services
            </Link>
          </div>

          {/* Avatars Bar - Hidden on small mobile to save space */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden sm:flex items-center gap-4 bg-white/50 backdrop-blur p-2 pr-6 rounded-full w-fit mx-auto lg:mx-0 border border-white shadow-sm"
          >
            <div className="flex -space-x-3">
              <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                <Image src={IMAGES.techFemale} alt="" width={32} height={32} className="object-cover" />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300 overflow-hidden">
                <Image src={IMAGES.doctorMale} alt="" width={32} height={32} className="object-cover" />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-400 overflow-hidden">
                <Image src={IMAGES.labTech} alt="" width={32} height={32} className="object-cover" />
              </div>
            </div>
            <p className="text-[10px] font-bold text-primary italic">Talk to our experts</p>
          </motion.div>
        </div>

        {/* Right - Hidden on mobile */}
        <div className="hidden lg:flex relative flex justify-end">
          <div className="relative z-10 w-full max-w-[400px]">
            <Image 
              src={IMAGES.heroDoctor} 
              alt="Doctor" 
              width={600} 
              height={600} 
              className="w-full h-auto object-contain" 
              priority
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute top-[18%] left-[2%] w-16 animate-bounce-subtle"
            >
              <Image 
                src={IMAGES.floatingIcon} 
                alt="" 
                width={64} 
                height={64} 
                className="w-full h-auto object-contain drop-shadow-xl" 
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-[20%] right-[0%] bg-white p-6 rounded-full shadow-2xl flex items-center justify-center gap-2 border-2 border-white"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <p className="text-sm font-bold text-slate-800 whitespace-nowrap">Stay Healthy</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
