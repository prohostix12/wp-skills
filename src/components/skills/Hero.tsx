"use client";

import {
  ArrowRight,
  CheckCircle,
  Play,
  Lock,
  Globe,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { useContent } from "@/hooks/useContent";
import { DEFAULT_HERO_TRUST_CHIPS, DEFAULT_HERO_STATS } from "@/lib/contentDefaults";

export default function Hero() {
  const trustChips = useContent("heroTrustChips", DEFAULT_HERO_TRUST_CHIPS);
  const stats = useContent("heroStats", DEFAULT_HERO_STATS);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const refs = [headingRef, subRef, chipsRef, btnRef, statsRef];
    refs.forEach((ref, i) => {
      if (!ref.current) return;
      ref.current.style.opacity = "0";
      ref.current.style.transform = "translateY(20px)";
      setTimeout(() => {
        if (!ref.current) return;
        ref.current.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        ref.current.style.opacity = "1";
        ref.current.style.transform = "translateY(0)";
      }, 120 + i * 130);
    });
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 lg:pt-36 pb-16"
      style={{
        backgroundColor: "#faf8f5",
      }}
    >
      {/* ── Background Video ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ zIndex: 0, opacity: 0.15 }}
      >
        <source src="/animation.mp4" type="video/mp4" />
      </video>

      {/* ── Blueprint grid overlay ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(120,110,90,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(120,110,90,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

      {/* Faint blueprint vector graphics in background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] flex items-center justify-center">
        <svg width="800" height="800" viewBox="0 0 800 800" fill="none" stroke="#1D4ED8" strokeWidth="1">
          <circle cx="400" cy="400" r="300" />
          <circle cx="400" cy="400" r="200" />
          <line x1="100" y1="400" x2="700" y2="400" />
          <line x1="400" y1="100" x2="400" y2="700" />
          <path d="M 200,200 L 600,600 M 600,200 L 200,600" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* ── Left column: Gold-bordered Image Card ── */}
          <div className="lg:col-span-5 flex justify-center relative order-2 lg:order-1 lg:-mt-12">
            <div 
              className="relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-blue-900/10"
              style={{
                border: "4px solid #a8936d",
                boxShadow: "0 25px 50px -12px rgba(168, 147, 109, 0.25)"
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                alt="Students studying with laptops"
                className="w-full h-[360px] sm:h-[420px] object-cover"
              />
            </div>

            {/* Floating badge: CIT Certified */}
            <div className="absolute z-20 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-slate-800"
              style={{
                top: "10%", right: "-5%", background: "rgba(255,255,255,0.75)",
                border: "1px solid rgba(0,0,0,0.08)", backdropFilter: "blur(12px)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)", animation: "floatBadge 4s ease-in-out infinite"
              }}>
              <Lock size={12} className="text-red-600" /> CIT Certified
            </div>

            {/* Floating badge: Global Exposure */}
            <div className="absolute z-20 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-slate-800"
              style={{
                bottom: "10%", left: "-5%", background: "rgba(255,255,255,0.75)",
                border: "1px solid rgba(0,0,0,0.08)", backdropFilter: "blur(12px)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)", animation: "floatBadge 5s ease-in-out infinite 0.8s"
              }}>
              <Globe size={12} className="text-blue-600" /> Global Exposure
            </div>
          </div>

          {/* ── Right column: Content Details ── */}
          <div className="lg:col-span-7 flex flex-col gap-6 order-1 lg:order-2">



            {/* Heading */}
            <h1 ref={headingRef}
              className="font-display font-black text-slate-900 leading-[1.15] tracking-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Build Your{" "}
              <span className="text-red-600">
                Global Career
              </span>{" "}
              with International Skills & Industry Training
            </h1>

            {/* Sub */}
            <p ref={subRef} className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
              A 6-month pathway: 3 months CIT international university training + IELTS → 3-month assured internship → placement assistance. From Kerala.
            </p>

            {/* Trust chips */}
            <div ref={chipsRef} className="flex flex-wrap gap-2.5">
              {trustChips.map((chip) => (
                <div key={chip}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold"
                  style={{
                    background: "#ffffff", border: "1px solid #e2e8f0",
                    color: "#334155", boxShadow: "0 2px 10px rgba(0,0,0,0.02)"
                  }}>
                  <CheckCircle size={14} className="text-blue-600 flex-shrink-0" />
                  {chip}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div ref={btnRef} className="flex flex-wrap gap-4 pt-2">
              <a href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:scale-[1.02]"
                style={{
                  background: "#D9383A",
                  boxShadow: "0 6px 20px rgba(217,56,58,0.3)"
                }}
              >
                Book Free Consultation <ArrowRight size={16} />
              </a>
              <a href="#value-stack"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-slate-900 transition-all cursor-pointer"
                style={{ background: "transparent" }}
                onMouseEnter={(e) => { 
                  e.currentTarget.style.background = "#D9383A";
                  e.currentTarget.style.setProperty("color", "white", "important");
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(217,56,58,0.3)";
                }}
                onMouseLeave={(e) => { 
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#0f172a";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Play size={13} fill="currentColor" /> Explore Skills
              </a>
            </div>

            {/* Stats card */}
            <div ref={statsRef}
              className="flex flex-wrap items-stretch overflow-hidden rounded-2xl w-full max-w-2xl mt-4"
              style={{ background: "#ffffff", border: "1px solid #e2e8f0", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
              {stats.map((s, i) => (
                <div key={s.label} className="flex-1 min-w-[120px] px-4 py-4 text-center"
                  style={{ borderRight: i < stats.length - 1 ? "1px solid #e2e8f0" : "none" }}>
                  <div className={`font-display font-extrabold text-xl sm:text-2xl ${s.highlight ? "text-red-600" : ""}`}
                    style={s.highlight ? {} : { color: "#0f172a" }}>
                    {s.value}
                  </div>
                  <div className="text-slate-500 text-[10px] sm:text-xs font-semibold mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* ── Keyframe animations ── */}
      <style>{`
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}
