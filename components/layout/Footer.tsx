"use client"

import Link from 'next/link';
import { motion } from 'framer-motion';

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
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
    <footer className="bg-[#020617] text-gray-400 pt-16 pb-8 font-body relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1 - Logo */}
        <div>
          <h2 className="text-white text-2xl font-bold tracking-wide font-display">
            RELIABLE <br /> DIAGNOSTICS
          </h2>
          <p className="text-sky-400 text-sm mt-1 lowercase font-medium">centre</p>

          <p className="mt-4 text-sm leading-relaxed max-w-xs text-gray-400 font-medium">
            Hanumangarh's most trusted diagnostic lab, providing accurate results with advanced laboratory services.
          </p>

          <Link href="#contact" className="inline-block mt-5 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-sky-400 text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20">
            Book a Test →
          </Link>
        </div>

        {/* Column 2 - Contact */}
        <div>
          <h3 className="text-sky-400 text-xs tracking-[2px] uppercase font-semibold mb-4 font-display">
            Contact
          </h3>

          <p className="text-sm mb-1 uppercase tracking-wider text-gray-500 text-[10px] font-bold">Phone</p>
          <a href="tel:07737774617" className="text-white text-xl font-bold mb-5 block hover:text-sky-400 transition-colors">
            077377 74617
          </a>

          <p className="text-sm mb-1 uppercase tracking-wider text-gray-500 text-[10px] font-bold">Address</p>
          <p className="text-sm leading-relaxed font-medium">
            Bharat Mata Chowk, Puran Nagar <br />
            Hanumangarh, Rajasthan 335513
          </p>
        </div>

        {/* Column 3 - Links */}
        <div>
          <h3 className="text-sky-400 text-xs tracking-[2px] uppercase font-semibold mb-4 font-display">
            Explore
          </h3>

          <ul className="space-y-3 text-sm">
            {LINKS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="hover:text-sky-400 transition-all transform hover:translate-x-1 inline-block font-medium text-gray-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 - Tests */}
        <div>
          <h3 className="text-sky-400 text-xs tracking-[2px] uppercase font-semibold mb-4 font-display">
            Popular Tests
          </h3>

          <ul className="space-y-3 text-sm">
            {POPULAR_TESTS.slice(0, 5).map((test) => (
              <li key={test}>
                <Link
                  href="#services"
                  className="hover:text-sky-400 transition-all transform hover:translate-x-1 inline-block font-medium text-gray-400"
                >
                  {test}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 mt-16 pt-6 text-center text-sm text-gray-500 font-medium">
        © {currentYear} Reliable Diagnostics Centre — Built with care 💙
      </div>
    </footer>
  );
}
