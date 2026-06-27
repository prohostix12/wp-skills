"use client";

import { ArrowRight, CheckCircle, Play, Sparkles, Building2, Globe } from "lucide-react";
import { useEffect, useRef } from "react";

const trustChips = [
  "International Credits",
  "Industry Certification",
  "Internship Support",
  "Placement Assistance",
];

const stats = [
  { value: "2",      label: "Partner Universities", color: "#0F2537" },
  { value: "10+",    label: "Programs",             color: "#5B21B6" },
  { value: "Online", label: "Delivery Mode",        color: "#D9383A" },
  { value: "100%",   label: "Career Support",       color: "#0F2537" },
];

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef     = useRef<HTMLParagraphElement>(null);
  const chipsRef   = useRef<HTMLDivElement>(null);
  const btnRef     = useRef<HTMLDivElement>(null);
  const statsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [headingRef, subRef, chipsRef, btnRef, statsRef];
    els.forEach((ref, i) => {
      if (ref.current) {
        ref.current.style.opacity = "0";
        ref.current.style.transform = "translateY(16px)";
        setTimeout(() => {
          if (ref.current) {
            ref.current.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            ref.current.style.opacity = "1";
            ref.current.style.transform = "translateY(0)";
          }
        }, 150 + i * 120);
      }
    });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
      {/* Subtle Background Pattern/Image Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-teal/5 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-brand-blue/5 blur-3xl pointer-events-none z-0" />

      {/* SVG path lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M 0 400 Q 400 150 900 350"  fill="none" stroke="#5B21B6" strokeWidth="1.2" strokeDasharray="6 4" opacity="0.15" />
        <path d="M 300 600 Q 700 200 1200 400" fill="none" stroke="#0F2537" strokeWidth="1.2" strokeDasharray="6 4" opacity="0.1" />
        <path d="M 100 200 Q 600 450 1100 180" fill="none" stroke="#5B21B6" strokeWidth="1.2" strokeDasharray="6 4" opacity="0.1" />
      </svg>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-40 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div className="pb-8 lg:pb-12">
            {/* Eyebrow badge */}
            <div
              ref={headingRef}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 bg-brand-blue/5 border border-brand-blue/10"
            >
              <Sparkles size={12} className="text-brand-teal" />
              <span className="text-brand-blue text-xs font-bold tracking-wider uppercase">
                SkillDad Programs · CIT Certified
              </span>
            </div>

            <h1
              ref={headingRef}
              className="font-display font-bold  text-brand-blue leading-[1.15] mb-6 tracking-tight"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}
            >
              Build Your{" "}
              <span className="text-brand-teal">Global Career</span>{" "}
              with International Skills &amp; Industry Training
            </h1>

            <p
              ref={subRef}
              className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
            >
              A 6-month pathway: 3 months CIT international university training + IELTS → 3-month
              assured internship → placement assistance. From Kerala.
            </p>

            {/* Trust Chips */}
            <div ref={chipsRef} className="flex flex-wrap gap-2.5 mb-8">
              {trustChips.map((chip) => (
                <div
                  key={chip}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-semibold bg-white border border-slate-100 text-slate-700 shadow-[0_2px_8px_rgba(15,37,55,0.02)]"
                >
                  <CheckCircle size={14} className="text-brand-teal flex-shrink-0" />
                  {chip}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div ref={btnRef} className="flex flex-wrap gap-3.5 mb-10">
              <a href="#contact" className="btn-primary">
                Book Free Consultation <ArrowRight size={16} />
              </a>
              <a href="#value-stack" className="btn-outline">
                <Play size={14} className="fill-brand-blue" /> Explore Skills
              </a>
            </div>

            {/* Stats strip */}
            <div
              ref={statsRef}
              className="flex flex-wrap items-center gap-px rounded-2xl overflow-hidden w-fit bg-white border border-slate-100 shadow-[0_8px_30px_rgba(15,37,55,0.03)]"
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`px-5 sm:px-7 py-3.5 text-center ${i < stats.length - 1 ? "border-r border-slate-100" : ""}`}
                >
                  <div className="font-display font-bold text-lg sm:text-xl" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-slate-500 text-[10px] sm:text-xs mt-0.5 whitespace-nowrap">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Floating card */}
          <div className="hidden lg:flex items-center justify-center pb-8">
            <div className="relative animate-float">
              <div className="rounded-3xl p-1.5 shadow-[0_20px_50px_rgba(15,37,55,0.08)] bg-gradient-to-br from-brand-blue/10 to-brand-teal/10">
                <div
                  className="rounded-[20px] overflow-hidden border border-white"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80&auto=format&fit=crop')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "360px",
                    height: "380px",
                  }}
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full text-white text-xs font-bold bg-brand-blue shadow-[0_6px_20px_rgba(15,37,55,0.15)] flex items-center gap-1.5">
                <Building2 size={13} /> CIT Certified
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full text-white text-xs font-bold bg-brand-teal shadow-[0_6px_20px_rgba(91,33,182,0.15)] flex items-center gap-1.5">
                <Globe size={13} /> Global Exposure
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
