"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { IMAGES } from '@/constants/images'
import { staggerContainer, fadeUpItem } from '@/hooks/useReveal'

export default function Hero() {
  return (
    <section id="hero" className="hero-gradient min-h-[100svh] lg:min-h-screen relative overflow-hidden flex flex-col justify-center">
      {/* Background Gradient Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-8 pt-24 pb-8 lg:pt-20 lg:pb-12 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6 text-center lg:text-left"
        >
          <motion.div variants={fadeUpItem} className="flex items-center gap-[0.8rem] justify-center lg:justify-start">
            <div className="w-[40px] h-[1px] bg-primary hidden sm:block" />
            <span className="text-[0.65rem] sm:text-[0.7rem] tracking-[0.22em] uppercase text-primary font-bold">
              Hanumangarh's Finest Diagnostic Centre
            </span>
          </motion.div>
          
          <motion.h1 
            variants={fadeUpItem}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight uppercase"
          >
            Advanced Diagnostics <br />
            <span className="text-primary italic font-black">Meets Compassion.</span>
          </motion.h1>

          <motion.div variants={fadeUpItem} className="flex items-center justify-center lg:justify-start gap-2 bg-white/50 backdrop-blur w-fit mx-auto lg:mx-0 px-4 py-2 rounded-full border border-white shadow-sm">
            <span className="text-amber-500 font-bold text-sm flex items-center gap-1">
              <Star className="w-4 h-4 fill-amber-500" /> 4.9
            </span>
            <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">· 10,000+ Happy Patients</span>
          </motion.div>
          
          <motion.p variants={fadeUpItem} className="text-primary font-bold font-hindi text-sm sm:text-base">
            रिलायबल डायग्नोस्टिक्स सेंटर — भरोसेमंद, सटीक, उन्नत
          </motion.p>
          
          <motion.p variants={fadeUpItem} className="text-base text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Reliable Diagnostics Centre focuses on evaluating current and future health through advanced clinical testing and precise reporting.
          </motion.p>

          <motion.div variants={fadeUpItem} className="hero-btns flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start pt-4">
            <Button size="hero" className="w-full sm:w-auto font-display font-semibold tracking-wide">
              <Link href="/book-test" className="flex items-center gap-2">
                Book a Test
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </Button>
            <Button size="hero" variant="outline" className="w-full sm:w-auto font-display font-semibold tracking-wide">
              <a href="#services">Our Services</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Hero Image Section */}
        <div className="relative flex justify-center lg:justify-end w-full max-w-full overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              x: 0
            }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut"
            }}
            className="relative max-w-full"
          >
            <div className="relative z-10 w-full max-w-full sm:max-w-[420px]">
              <Image 
                src={IMAGES.heroDoctor} 
                alt="Doctor" 
                width={600} 
                height={600} 
                className="w-full h-auto object-contain drop-shadow-2xl max-w-full"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                  maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                }}
                priority
              />
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-[10%] left-2 w-16 animate-bounce-subtle"
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
                className="absolute bottom-[20%] right-2 bg-white p-4 lg:p-6 rounded-full shadow-2xl flex items-center justify-center gap-2 border-2 border-white"
              >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <p className="text-xs lg:text-sm font-bold text-slate-800 whitespace-nowrap">NABL Certified Lab</p>
              </motion.div>
            </div>
            
            {/* Background Blob behind doctor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[60px] -z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
