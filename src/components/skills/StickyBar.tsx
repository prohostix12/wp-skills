"use client";
 
import { useState } from "react";
import { Phone, Menu, X, GraduationCap } from "lucide-react";
import Link from "next/link";
 
const navLinks = [
  { label: "Home",         href: "/" },
  { label: "Program",      href: "#pathway" },
  { label: "Universities", href: "#universities" },
  { label: "Certificates", href: "#certificates" },
  { label: "FAQs",         href: "#faq" },
  { label: "Contact",      href: "#contact" },
];
 
export default function StickyBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
 
  return (
    <>
      {/* Top announcement bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] text-white text-center py-2.5 px-4 text-xs sm:text-sm font-bold flex items-center justify-center gap-3"
        style={{ background: "linear-gradient(135deg, #1a0a4a 0%, #0d0a2e 100%)", borderBottom: "1px solid rgba(124,58,237,0.3)" }}>
        <GraduationCap size={15} className="text-yellow-400 animate-pulse flex-shrink-0" />
        <span>Free Career Counselling — Limited Spots Available!</span>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-1 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full hover:bg-purple-600 transition-all ml-2"
        >
          Book Free Call →
        </a>
      </div>
 
      {/* Main Navbar */}
      <header className="fixed top-9 left-0 right-0 z-50 bg-[#060418]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-purple-600">
              <GraduationCap size={18} className="text-white" />
            </div>
            <span className="font-display font-black text-lg tracking-tight text-white">
              World<span className="text-purple-400">Passport</span>
            </span>
          </Link>
 
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <div className="flex items-center gap-0.5 px-2.5 py-1.5 rounded-full border bg-white/5 border-white/5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 text-white/70 hover:text-white hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
 
          {/* Right CTAs */}
          <div className="hidden md:flex items-center gap-4 flex-shrink-0">
            <a
              href="tel:+919205031277"
              className="flex items-center gap-1.5 text-sm font-semibold text-white/70 hover:text-white transition-all"
            >
              <Phone size={14} className="text-purple-400" />
              +91 9205031277
            </a>
            <a
              href="#contact"
              className="text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300 btn-primary"
            >
              Book Free Consultation
            </a>
          </div>
 
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="md:hidden w-10 h-10 rounded-full border flex items-center justify-center transition-all flex-shrink-0 bg-white/5 border-white/10 text-white/80 hover:text-white"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
 
        {/* Mobile Menu Drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 border-t border-white/5 ${
            mobileOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ background: "#060418" }}
        >
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-semibold text-white/80 hover:bg-white/5 hover:text-purple-400 transition-all"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-white/5 flex flex-col gap-2">
              <a
                href="tel:+919205031277"
                className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-white/80"
              >
                <Phone size={14} className="text-purple-400" /> +91 9205031277
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="text-white text-sm font-bold px-5 py-3 rounded-xl text-center btn-primary"
              >
                Book Free Consultation
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
