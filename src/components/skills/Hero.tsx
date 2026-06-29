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
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 70% 50%, #1a0a4a 0%, #0d0a2e 40%, #060418 100%)",
      }}
    >
      {/* ── Star particles ── */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
        {STARS.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${s.w}px`,
              height: `${s.h}px`,
              top: `${s.t}%`,
              left: `${s.l}%`,
              opacity: s.o,
              animation: `starPulse ${s.dur}s ease-in-out infinite`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* ── Ambient glow blobs ── */}
      <div className="absolute z-0 pointer-events-none"
        style={{
          width: "700px", height: "700px", top: "-15%", right: "-5%", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(88,28,255,0.18) 0%, transparent 70%)", filter: "blur(60px)"
        }} />
      <div className="absolute z-0 pointer-events-none"
        style={{
          width: "500px", height: "500px", bottom: "-10%", left: "-5%", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(30,60,180,0.12) 0%, transparent 70%)", filter: "blur(50px)"
        }} />

      {/* ── Grid overlay ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(150,120,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(150,120,255,0.8) 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }} />

      {/* ── Main layout ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-[130px] pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left ── */}
          <div>

            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.85)"
              }}
            >
              <span className="text-purple-400 mr-0.5 font-sans font-bold">— ✦ —</span> Skilldad Programs • CIT Certified
            </div>

            {/* Heading */}
            <h1 ref={headingRef}
              className="font-display font-black text-white leading-[1.1] mb-6 tracking-[-0.03em]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
              Build Your{" "}
              <span style={{
                background: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 50%, #6366f1 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
              }}>
                Global Career
              </span>{" "}
              with International Skills & Industry Training
            </h1>

            {/* Sub */}
            <p ref={subRef} className="text-white/55 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              A 6-month pathway: 3 months CIT international university training + IELTS → 3-month assured internship → placement assistance. From Kerala.
            </p>

            {/* Trust chips */}
            <div ref={chipsRef} className="flex flex-wrap gap-2.5 mb-8">
              {trustChips.map((chip) => (
                <div key={chip}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium"
                  style={{
                    background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.75)", backdropFilter: "blur(8px)"
                  }}>
                  <CheckCircle size={13} style={{ color: "#a78bfa", flexShrink: 0 }} />
                  {chip}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div ref={btnRef} className="flex flex-wrap gap-3.5 mb-10">
              <a href="#contact"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 1.8rem",
                  borderRadius: "9999px", background: "linear-gradient(135deg,#7c3aed 0%,#5b21b6 100%)",
                  color: "#fff", fontWeight: 600, fontSize: "0.9375rem",
                  boxShadow: "0 6px 24px rgba(124,58,237,0.4)", transition: "all 0.3s ease", textDecoration: "none"
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(124,58,237,0.6)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(124,58,237,0.4)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                Book Free Consultation <ArrowRight size={16} />
              </a>
              <a href="#value-stack"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 1.8rem",
                  borderRadius: "9999px", background: "rgba(255,255,255,0.08)", color: "#fff", fontWeight: 600,
                  fontSize: "0.9375rem", border: "1.5px solid rgba(255,255,255,0.18)",
                  backdropFilter: "blur(10px)", transition: "all 0.3s ease", textDecoration: "none"
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.13)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; }}>
                <Play size={13} fill="white" /> Explore Skills
              </a>
            </div>

            {/* Stats */}
            <div ref={statsRef}
              className="flex flex-wrap items-stretch overflow-hidden rounded-2xl w-fit"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", backdropFilter: "blur(12px)" }}>
              {stats.map((s, i) => (
                <div key={s.label} className="px-5 sm:px-7 py-3.5 text-center"
                  style={{ borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                  <div className="font-display font-bold text-lg sm:text-xl"
                    style={s.highlight
                      ? { background: "linear-gradient(135deg,#34d399,#10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }
                      : { color: "#fff" }}>
                    {s.value}
                  </div>
                  <div className="text-white/40 text-[10px] sm:text-xs mt-0.5 whitespace-nowrap">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right — Globe + Orbits ── */}
          <div className="hidden lg:flex items-center justify-center relative" style={{ height: "520px" }}>
            {/* Orbit rings */}
            <div className="absolute rounded-full"
              style={{
                width: "460px", height: "460px", border: "1.5px solid rgba(139,92,246,0.18)",
                top: "50%", left: "50%", transform: "translate(-50%,-50%) rotateX(70deg)"
              }} />
            <div className="absolute rounded-full"
              style={{
                width: "360px", height: "360px", border: "1px solid rgba(99,102,241,0.12)",
                top: "50%", left: "50%", transform: "translate(-50%,-50%) rotateX(70deg)"
              }} />

            {/* Globe core */}
            <div className="relative z-10 rounded-full overflow-hidden flex items-center justify-center"
              style={{
                width: "240px", height: "240px",
                background: "radial-gradient(circle at 35% 35%, #2563eb 0%, #1e40af 40%, #1e3a8a 70%, #0f1f5c 100%)",
                boxShadow: "0 0 0 8px rgba(99,102,241,0.12), 0 0 60px rgba(99,102,241,0.3), 0 0 120px rgba(88,28,255,0.15)"
              }}>
              <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 240 240" fill="none">
                {[40, 70, 100, 130, 160, 190, 220].map(cy => (
                  <ellipse key={cy} cx="120" cy={cy} rx="110" ry={Math.abs(cy - 120) * 0.35 + 5}
                    stroke="rgba(147,197,253,0.5)" strokeWidth="0.8" fill="none" />
                ))}
                {[0, 30, 60, 90, 120, 150].map(angle => (
                  <ellipse key={angle} cx="120" cy="120"
                    rx={Math.cos((angle * Math.PI) / 180) * 110} ry="110"
                    stroke="rgba(147,197,253,0.5)" strokeWidth="0.8" fill="none" />
                ))}
              </svg>
              <div className="relative z-10 rounded-full overflow-hidden"
                style={{
                  width: "160px", height: "160px",
                  backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80&auto=format&fit=crop')",
                  backgroundSize: "cover", backgroundPosition: "center",
                  border: "3px solid rgba(255,255,255,0.2)", boxShadow: "0 0 20px rgba(0,0,0,0.3)"
                }} />
            </div>

            {/* Floating badge: CIT Certified */}
            <div className="absolute z-20 flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold text-white"
              style={{
                top: "8%", right: "2%", background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(14px)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)", animation: "floatBadge 4s ease-in-out infinite"
              }}>
              <Lock size={12} style={{ color: "#a78bfa" }} /> CIT Certified
            </div>

            {/* Floating badge: Global Exposure */}
            <div className="absolute z-20 flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold text-white"
              style={{
                bottom: "10%", left: "20%", background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.16)", backdropFilter: "blur(14px)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)", animation: "floatBadge 5s ease-in-out infinite 0.8s"
              }}>
              <Globe size={12} style={{ color: "#60a5fa" }} /> Global Exposure
            </div>

            {/* Orbit icon panels */}
            {orbitIcons.map(({ icon: Icon, angle }, i) => {
              const rad = (angle * Math.PI) / 180;
              const x = 50 + (230 / 4.6) * Math.cos(rad);
              const y = 50 + (85 / 2.6) * Math.sin(rad);
              return (
                <div key={i} className="absolute z-20 flex items-center justify-center rounded-xl"
                  style={{
                    width: "44px", height: "44px", left: `${x}%`, top: `${y}%`,
                    transform: "translate(-50%,-50%)",
                    background: "linear-gradient(135deg,rgba(124,58,237,0.35) 0%,rgba(99,102,241,0.2) 100%)",
                    border: "1px solid rgba(167,139,250,0.3)", backdropFilter: "blur(12px)",
                    boxShadow: "0 4px 16px rgba(88,28,255,0.2)",
                    animation: `floatBadge ${3 + i * 0.4}s ease-in-out infinite ${i * 0.3}s`
                  }}>
                  <Icon size={18} style={{ color: "#c4b5fd" }} />
                </div>
              );
            })}

            {/* Glowing orbs */}
            {[
              { size: 10, top: "25%", left: "22%", color: "#818cf8" },
              { size: 7, top: "70%", left: "72%", color: "#a78bfa" },
              { size: 12, top: "55%", left: "12%", color: "#60a5fa" },
            ].map((orb, i) => (
              <div key={i} className="absolute z-10 rounded-full"
                style={{
                  width: orb.size, height: orb.size, top: orb.top, left: orb.left,
                  background: orb.color, boxShadow: `0 0 ${orb.size * 2}px ${orb.color}`,
                  animation: `floatBadge ${4 + i}s ease-in-out infinite ${i * 0.5}s`
                }} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Keyframe animations ── */}
      <style>{`
        @keyframes starPulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.7; }
        }
        @keyframes floatBadge {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-10px); }
        }
      `}</style>
    </section>
  );
}
