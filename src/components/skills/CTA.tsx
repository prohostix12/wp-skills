"use client";

import { ArrowRight, Globe, Sparkles, Building2, ScrollText, Briefcase, Rocket } from "lucide-react";

const trustChips = [
  { icon: <Building2 size={13} />, label: "CIT University Partner" },
  { icon: <ScrollText size={13} />, label: "3 Certificates" },
  { icon: <Briefcase size={13} />, label: "Internship Included" },
  { icon: <Rocket size={13} />, label: "Placement Support" },
];

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          data-aos="zoom-in"
          className="relative rounded-2xl overflow-hidden p-10 md:p-16 text-center bg-brand-blue border border-brand-teal/20 shadow-lg"
        >
          {/* Animated glows */}
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl pointer-events-none bg-brand-teal/10" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none bg-brand-teal/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] rounded-full blur-3xl pointer-events-none bg-brand-teal/5" />

          {/* Decorative dots grid */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center bg-brand-teal/20 border border-brand-teal/30">
              <Globe size={30} className="text-brand-teal" />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-7 bg-white/5 border border-white/10">
              <Sparkles size={12} className="text-brand-teal" />
              <span className="text-white/70 text-xs font-bold tracking-widest uppercase">Your Global Career Awaits</span>
            </div>

            <h2
              className="font-display font-black text-white mb-6 leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Ready to Build Your{" "}
              <span
                style={{ color: "#ffffff" }}
              >
                International Career?
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Join the founding cohort of World Passport. Seats are limited — book your free
              counselling call today and take the first step.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a href="#contact" className="btn-primary inline-flex justify-center">
                Book Free Consultation <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn-outline-white inline-flex justify-center">
                Apply Now
              </a>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {trustChips.map((item) => (
                <div key={item.label} className="flex items-center gap-1.5 text-slate-400 text-sm font-semibold">
                  <span className="text-slate-500">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
