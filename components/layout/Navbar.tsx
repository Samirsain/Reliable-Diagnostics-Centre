"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { buttonVariants } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';

const NAV_LINKS = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Packages', href: '#packages' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-3 border-b border-slate-100' 
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 flex items-center justify-between transition-all duration-300">
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform shrink-0">
            <img src="/logo.svg" alt="Reliable Diagnostics Logo" className="w-full h-full" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[0.85rem] sm:text-[0.92rem] font-bold text-slate-900 tracking-[0.05em] uppercase font-display">
              Reliable Diagnostics <span className="font-medium text-[0.75rem] lowercase tracking-normal">Centre</span>
            </span>
            <span className="text-[0.6rem] sm:text-[0.65rem] text-primary tracking-[0.02em] font-bold">
              रिलायबल सेंटर · हनुमानगढ़
            </span>
            <span className="text-[0.55rem] text-slate-400 font-medium tracking-tight mt-0.5 whitespace-nowrap hidden sm:block">
              Trusted by 10,000+ Patients
            </span>
          </div>
        </Link>

        {/* Center: Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: CTA & Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Badge variant="outline" className="hidden xl:flex border-primary/20 text-primary font-bold gap-1 bg-primary/5 px-3 py-1">
            <span className="material-symbols-outlined text-xs fill-current">star</span>
            4.9 (46 reviews)
          </Badge>
          
          <Link href="#contact" className="hidden lg:block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-sm font-semibold transition-all shadow-lg shadow-primary/20 tracking-wide">
            Book a Test
          </Link>

          {/* Mobile: Call button + Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <a href="tel:07737774617" className="flex items-center gap-1.5 text-primary text-[10px] font-bold bg-primary/10 px-3 py-2 rounded-full border border-primary/20">
              <span className="material-symbols-outlined text-sm">call</span>
              CALL
            </a>
            
            <Sheet>
              <SheetTrigger render={
                <button className="p-2 rounded-xl bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors">
                  <span className="material-symbols-outlined text-2xl font-bold">menu</span>
                </button>
              } />

              <SheetContent side="right" className="bg-white border-l-0 w-[85%] sm:w-[400px] p-0">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <div className="flex flex-col h-full bg-slate-50">
                  <div className="p-6 bg-white border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
                      <span className="font-black text-slate-900 uppercase tracking-tight text-sm">RDC Hanumangarh</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-2">
                    {NAV_LINKS.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="text-lg font-medium text-slate-800 p-4 bg-white border border-slate-100 rounded-2xl hover:text-primary transition-colors flex justify-between items-center group tracking-wide"
                      >
                        {link.name}
                        <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">arrow_forward</span>
                      </Link>
                    ))}
                  </div>

                  <div className="p-6 bg-white border-t border-slate-100 mt-auto space-y-4">
                    <div className="flex flex-col gap-3">
                      <a href="tel:07737774617" className="flex items-center gap-3 p-4 bg-primary/5 rounded-2xl text-primary font-bold border border-primary/10">
                        <span className="material-symbols-outlined bg-primary text-white p-2 rounded-xl">call</span>
                        077377 74617
                      </a>
                      <a href="https://wa.me/917737774617" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-green-50 rounded-2xl text-green-600 font-bold border border-green-100">
                        <span className="material-symbols-outlined bg-green-500 text-white p-2 rounded-xl">chat</span>
                        WhatsApp us
                      </a>
                    </div>
                    <Link href="#contact" className="block w-full bg-slate-900 text-white text-center py-5 rounded-[2rem] font-semibold uppercase tracking-[0.15em] text-sm shadow-xl shadow-slate-200">
                      Book a Test Now
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

    </motion.header>
  );
}
