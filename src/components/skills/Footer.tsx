"use client";

import { Phone, Mail, MapPin, GraduationCap, ExternalLink, Share2, Link2, Play, MessageCircle } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Skills Program", href: "/skills" },
  { label: "Universities", href: "/skills#universities" },
  { label: "Overseas Education", href: "#" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/skills#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-blue">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent" />
        <div className="absolute -top-40 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl bg-brand-teal/5" />
        <div className="absolute -bottom-20 right-1/4 w-[300px] h-[300px] rounded-full blur-3xl bg-brand-teal/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* CTA Banner */}
        <div className="py-14 border-b border-white/10">
          <div
            className="rounded-2xl p-8 md:p-12 text-center relative overflow-hidden bg-white/5 border border-brand-teal/20"
          >
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-brand-teal/5 via-transparent to-brand-teal/5" />
            <div className="relative z-10">
              <div className="flex justify-center mb-5">
                <img src="/logo.png" alt="World Passport Logo" className="h-12 w-auto object-contain" />
              </div>
              <h3 className="font-display font-black text-white text-2xl md:text-3xl mb-4">
                Ready to Take Aim at Your Future?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-7 max-w-lg mx-auto leading-relaxed">
                Join the founding cohort of students building international careers with World Passport and CIT.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="/skills#contact" className="btn-primary inline-flex justify-center">
                  Book Free Consultation →
                </a>
                <a href="/skills#contact" className="btn-outline-white inline-flex justify-center">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Main Footer Grid */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-5">
              <img src="/logo.png" alt="World Passport Logo" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-xs">
              Bringing international-grade education and career opportunities within reach for students across Kerala.
              Powered by CIT, Tirana.
            </p>
            {/* Social Icons */}
            <div className="flex gap-2.5">
              {[
                { icon: <ExternalLink size={15} />, label: "Instagram", href: "#" },
                { icon: <Link2 size={15} />, label: "LinkedIn", href: "#" },
                { icon: <Share2 size={15} />, label: "Twitter", href: "#" },
                { icon: <Play size={15} />, label: "YouTube", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:-translate-y-0.5 bg-white/5 border border-white/10 text-slate-300"
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(91, 33, 182, 0.25)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "#5B21B6";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-5 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}
                    className="text-slate-300 text-sm hover:text-brand-teal transition-colors hover:translate-x-1 inline-flex items-center gap-1.5 group">
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-brand-teal">›</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-5 uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-brand-teal mt-0.5 flex-shrink-0" />
                <a href="mailto:salesheadworldpassportskills@gmail.com"
                  className="text-slate-300 text-sm hover:text-brand-teal transition-colors">
                  salesheadworldpassportskills@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-brand-teal mt-0.5 flex-shrink-0" />
                <a href="tel:+919292173857"
                  className="text-slate-300 text-sm hover:text-brand-teal transition-colors">
                  +91 9292173857
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-brand-teal mt-0.5 flex-shrink-0" />
                <p className="text-slate-300 text-sm leading-relaxed">
                  Ernakulam, Near St. Georges Syro-Malabar Church, Edapally, Kerala
                </p>
              </li>
            </ul>

            <a
              href="https://wa.me/919292173857"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
            >
              <MessageCircle size={15} /> Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} World Passport. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 text-sm hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 text-sm hover:text-white/60 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 text-sm hover:text-white/60 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
