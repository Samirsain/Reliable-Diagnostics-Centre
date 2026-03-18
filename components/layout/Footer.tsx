"use client"

import Link from 'next/link';
import { motion } from 'framer-motion';

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
]

const POPULAR_TESTS = [
  "Complete Blood Count (CBC)",
  "Liver Function Test (LFT)",
  "Kidney Function Test (KFT)",
  "Thyroid Profile",
  "Lipid Profile",
  "HbA1c / Diabetes Panel",
  "Full Body Checkup",
]

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] text-slate-400 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-12 pb-8">
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-12 lg:gap-8 text-center lg:text-left">
          
          {/* Column 1: Brand (Span 2) - Order 1 */}
          <div className="lg:col-span-2 space-y-6 lg:space-y-8 order-1">
            <Link href="/" className="inline-flex items-center gap-3 group justify-center lg:justify-start">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                <img src="/logo.svg" alt="Reliable Diagnostics" className="w-8 h-8 lg:w-9 lg:h-9" />
              </div>
              <div className="flex flex-col leading-tight text-left">
                <span className="text-white text-lg lg:text-xl font-black tracking-tighter uppercase block">
                  Reliable <span className="text-primary italic">Diagnostics</span>
                </span>
                <span className="text-[0.6rem] lg:text-[0.65rem] text-slate-500 font-bold tracking-[0.2em] uppercase">
                  Hanumangarh Centre
                </span>
              </div>
            </Link>
            
            <p className="text-xs lg:text-sm leading-relaxed max-w-xs mx-auto lg:mx-0 text-slate-400/80 font-medium">
              Hanumangarh's most trusted diagnostic lab, providing accurate results with advanced laboratory sciences at your doorstep.
            </p>
            
            <div className="flex gap-3 justify-center lg:justify-start">
              <a href="https://wa.me/917737774617" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white hover:border-transparent transition-all duration-300 transform hover:-translate-y-1">
                <span className="material-symbols-outlined text-xl">chat</span>
              </a>
              <a href="tel:07737774617" 
                 className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300 transform hover:-translate-y-1">
                <span className="material-symbols-outlined text-xl">call</span>
              </a>
              <a href="https://maps.google.com/?q=Reliable+Diagnostics+Centre+Hanumangarh" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-slate-700 hover:text-white hover:border-transparent transition-all duration-300 transform hover:-translate-y-1">
                <span className="material-symbols-outlined text-xl">pin_drop</span>
              </a>
            </div>
          </div>

          {/* Column 2: Contact - Order 2 on Mobile */}
          <div className="space-y-6 order-2">
            <h4 className="text-white text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] mb-4 lg:mb-8">Contact</h4>
            <div className="space-y-4 lg:space-y-6">
              <div className="space-y-1 lg:space-y-2">
                <p className="text-[9px] lg:text-[10px] text-primary font-black uppercase tracking-widest">Phone</p>
                <a href="tel:07737774617" className="text-base lg:text-lg font-black text-white hover:text-primary transition-colors block">
                  077377 74617
                </a>
              </div>
              <div className="space-y-1 lg:space-y-2">
                <p className="text-[9px] lg:text-[10px] text-primary font-black uppercase tracking-widest">Address</p>
                <p className="text-xs lg:text-sm leading-relaxed text-slate-400 font-semibold px-4 lg:px-0">
                  Bharat Mata Chowk, Puran Nagar<br />
                  Hanumangarh, Rajasthan 335513
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Explore - Order 3 */}
          <div className="space-y-6 order-3">
            <h4 className="text-white text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] mb-4 lg:mb-8 text-center lg:text-left">Explore</h4>
            <ul className="flex flex-wrap justify-center lg:flex-col lg:items-start gap-x-6 gap-y-3">
              {LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs lg:text-sm font-semibold hover:text-white transition-all duration-300 text-slate-500 uppercase tracking-wider">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Popular Tests - Order 4 (Hidden on very small screens or compact) */}
          <div className="space-y-6 order-4 hidden sm:block">
            <h4 className="text-white text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] mb-4 lg:mb-8">Popular Tests</h4>
            <ul className="space-y-3 lg:space-y-4">
              {POPULAR_TESTS.slice(0, 5).map((test) => (
                <li key={test}>
                  <Link href="#services" className="text-xs lg:text-sm font-semibold hover:text-primary transition-colors inline-block text-slate-500">
                    {test}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </footer>
  );
}
