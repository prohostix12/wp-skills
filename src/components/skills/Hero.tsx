"use client";

import {
  ArrowRight,
  CheckCircle,
  Play,
  Sparkles,
  Lock,
  GraduationCap,
  Shield,
  ClipboardCheck,
  CheckSquare,
  Globe,
} from "lucide-react";
import { useEffect, useRef } from "react";

const trustChips = [
  "International Credits",
  "Industry Certification",
  "Internship Support",
  "Placement Assistance",
];

const stats = [
  { value: "2", label: "Partner Universities", highlight: false },
  { value: "10+", label: "Programs", highlight: false },
  { value: "Online", label: "Delivery Mode", highlight: true },
  { value: "100%", label: "Career Support", highlight: false },
];

const orbitIcons = [
  { icon: ClipboardCheck, angle: -30 },
  { icon: Shield, angle: 15 },
  { icon: GraduationCap, angle: 60 },
  { icon: CheckSquare, angle: 105 },
  { icon: CheckCircle, angle: 150 },
];

/* Static star data — no Math.random in render to avoid hydration mismatch */
const STARS = [
  { w: 2.1, h: 1.4, t: 12.3, l: 45.6, o: 0.35, dur: 3.2, delay: 0.5 },
  { w: 1.5, h: 1.5, t: 28.7, l: 72.1, o: 0.25, dur: 4.8, delay: 1.2 },
  { w: 2.8, h: 2.8, t: 54.2, l: 18.9, o: 0.45, dur: 3.7, delay: 2.1 },
  { w: 1.2, h: 1.2, t: 7.5, l: 88.4, o: 0.20, dur: 5.1, delay: 0.8 },
  { w: 2.5, h: 2.5, t: 40.1, l: 33.7, o: 0.30, dur: 4.2, delay: 3.3 },
  { w: 1.8, h: 1.8, t: 67.8, l: 61.2, o: 0.40, dur: 2.9, delay: 1.6 },
  { w: 1.1, h: 1.1, t: 83.4, l: 5.8, o: 0.15, dur: 5.6, delay: 0.3 },
  { w: 2.3, h: 2.3, t: 19.6, l: 53.0, o: 0.55, dur: 3.4, delay: 4.1 },
  { w: 1.6, h: 1.6, t: 91.2, l: 79.3, o: 0.28, dur: 4.5, delay: 2.7 },
  { w: 2.9, h: 2.9, t: 35.0, l: 26.4, o: 0.38, dur: 3.0, delay: 1.9 },
  { w: 1.3, h: 1.3, t: 75.5, l: 42.8, o: 0.22, dur: 5.3, delay: 0.6 },
  { w: 2.0, h: 2.0, t: 48.9, l: 95.1, o: 0.48, dur: 4.0, delay: 3.8 },
  { w: 1.7, h: 1.7, t: 5.2, l: 14.7, o: 0.33, dur: 2.6, delay: 2.4 },
  { w: 2.6, h: 2.6, t: 62.3, l: 68.5, o: 0.42, dur: 5.9, delay: 1.1 },
  { w: 1.4, h: 1.4, t: 22.8, l: 37.9, o: 0.18, dur: 3.8, delay: 4.5 },
  { w: 2.2, h: 2.2, t: 87.6, l: 56.3, o: 0.52, dur: 4.3, delay: 0.9 },
  { w: 1.9, h: 1.9, t: 14.4, l: 82.6, o: 0.27, dur: 3.1, delay: 3.0 },
  { w: 2.7, h: 2.7, t: 58.7, l: 28.1, o: 0.37, dur: 5.5, delay: 1.5 },
  { w: 1.0, h: 1.0, t: 44.3, l: 10.5, o: 0.13, dur: 4.7, delay: 2.2 },
  { w: 2.4, h: 2.4, t: 70.9, l: 47.2, o: 0.46, dur: 3.5, delay: 0.4 },
  { w: 1.5, h: 1.5, t: 96.1, l: 21.8, o: 0.32, dur: 4.1, delay: 3.6 },
  { w: 2.0, h: 2.0, t: 31.4, l: 63.9, o: 0.50, dur: 5.8, delay: 1.3 },
  { w: 1.3, h: 1.3, t: 78.2, l: 91.4, o: 0.24, dur: 2.8, delay: 4.0 },
  { w: 2.8, h: 2.8, t: 9.7, l: 39.5, o: 0.41, dur: 3.6, delay: 0.7 },
  { w: 1.6, h: 1.6, t: 52.5, l: 75.8, o: 0.19, dur: 5.2, delay: 2.9 },
  { w: 2.1, h: 2.1, t: 24.0, l: 0.9, o: 0.44, dur: 4.6, delay: 1.8 },
  { w: 1.8, h: 1.8, t: 38.6, l: 57.4, o: 0.29, dur: 3.3, delay: 3.4 },
  { w: 2.5, h: 2.5, t: 16.8, l: 84.0, o: 0.54, dur: 5.0, delay: 0.2 },
  { w: 1.1, h: 1.1, t: 65.3, l: 32.3, o: 0.16, dur: 4.4, delay: 4.7 },
  { w: 2.3, h: 2.3, t: 80.0, l: 16.0, o: 0.36, dur: 3.9, delay: 1.0 },
  { w: 1.4, h: 1.4, t: 3.6, l: 50.7, o: 0.23, dur: 5.7, delay: 2.5 },
  { w: 2.6, h: 2.6, t: 46.7, l: 70.6, o: 0.47, dur: 2.7, delay: 0.1 },
  { w: 1.9, h: 1.9, t: 89.4, l: 24.5, o: 0.34, dur: 4.9, delay: 3.2 },
  { w: 2.2, h: 2.2, t: 33.1, l: 97.2, o: 0.51, dur: 3.2, delay: 1.7 },
  { w: 1.0, h: 1.0, t: 71.6, l: 44.1, o: 0.11, dur: 5.4, delay: 4.3 },
  { w: 2.7, h: 2.7, t: 18.2, l: 7.6, o: 0.43, dur: 4.2, delay: 0.6 },
  { w: 1.2, h: 1.2, t: 57.0, l: 89.0, o: 0.17, dur: 3.7, delay: 2.8 },
  { w: 2.9, h: 2.9, t: 42.5, l: 55.3, o: 0.49, dur: 5.1, delay: 1.4 },
  { w: 1.7, h: 1.7, t: 93.8, l: 38.7, o: 0.26, dur: 3.0, delay: 3.9 },
  { w: 2.4, h: 2.4, t: 26.5, l: 11.2, o: 0.39, dur: 4.8, delay: 0.3 },
];

export default function Hero() {
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
        style={{ zIndex: 1, opacity: 0.15 }}
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
        <svg width="800" height="800" viewBox="0 0 800 800" fill="none" stroke="#8b5cf6" strokeWidth="1">
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
          <div className="lg:col-span-5 flex justify-center relative order-2 lg:order-1">
            <div 
              className="relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-purple-900/10"
              style={{
                border: "4px solid #a8936d",
                boxShadow: "0 25px 50px -12px rgba(168, 147, 109, 0.25)"
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                alt="Students studying with laptops"
                className="w-full h-[400px] sm:h-[480px] object-cover"
              />
            </div>

            {/* Floating badge: CIT Certified */}
            <div className="absolute z-20 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-slate-800"
              style={{
                top: "10%", right: "-5%", background: "rgba(255,255,255,0.75)",
                border: "1px solid rgba(0,0,0,0.08)", backdropFilter: "blur(12px)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)", animation: "floatBadge 4s ease-in-out infinite"
              }}>
              <Lock size={12} className="text-purple-600" /> CIT Certified
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

            {/* Top pill badge */}
            <div className="flex items-center gap-2 w-fit">
              <span className="w-8 h-[2px] bg-purple-600" />
              <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                SKILLDAD PROGRAMS | CIT CERTIFIED
              </span>
            </div>

            {/* Heading */}
            <h1 ref={headingRef}
              className="font-display font-black text-slate-900 leading-[1.15] tracking-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Build Your{" "}
              <span className="text-purple-700">
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
                  <CheckCircle size={14} className="text-purple-600 flex-shrink-0" />
                  {chip}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div ref={btnRef} className="flex flex-wrap gap-4 pt-2">
              <a href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:scale-[1.02]"
                style={{
                  background: "#5b21b6",
                  boxShadow: "0 6px 20px rgba(91,33,182,0.3)"
                }}
              >
                Book Free Consultation <ArrowRight size={16} />
              </a>
              <a href="#value-stack"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-slate-900 border-2 border-slate-900 transition-all hover:bg-slate-900 hover:text-white"
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
                  <div className="font-display font-extrabold text-xl sm:text-2xl"
                    style={s.highlight
                      ? { color: "#dc2626" }
                      : { color: "#0f172a" }}>
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
