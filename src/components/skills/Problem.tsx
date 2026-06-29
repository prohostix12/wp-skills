"use client";

import { AlertCircle, Zap, BookOpen, Globe, Briefcase, TrendingDown } from "lucide-react";

const problems = [
  { icon: <BookOpen size={26} />,     title: "Only Theory",                    desc: "Degrees full of theory with no hands-on application. Employers want skills, not just marks.",                          color: "#f87171", glow: "rgba(248,113,113,0.2)" },
  { icon: <Globe size={26} />,        title: "No International Exposure",      desc: "Without global exposure, your resume looks the same as thousands of other graduates.",                                   color: "#fbbf24", glow: "rgba(251,191,36,0.2)"  },
  { icon: <Briefcase size={26} />,    title: "No Internship Experience",       desc: "Companies demand experience. But without experience, no one hires you — a painful catch-22.",                           color: "#a78bfa", glow: "rgba(167,139,250,0.2)" },
  { icon: <TrendingDown size={26} />, title: "Low Placement Opportunities",    desc: "Generic degrees lead to generic outcomes. Without the right skills, placement remains a dream.",                        color: "#f87171", glow: "rgba(248,113,113,0.2)" },
];

export default function Problem() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#060418" }}>
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{ backgroundImage: "linear-gradient(rgba(150,120,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(150,120,255,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Ambient glows */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)", filter: "blur(40px)" }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)", filter: "blur(40px)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{ background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.25)" }}>
            <AlertCircle size={12} style={{ color: "#f87171" }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#fca5a5" }}>The Problem</span>
          </div>
          <h2 className="font-display font-black text-white mb-6" style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}>
            Why Students Struggle to{" "}
            <span className="text-gradient">Build Global Careers?</span>
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            A regular degree isn&apos;t getting interviews. Studying abroad costs ₹20–40 lakh. Most students
            are stuck between the two.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {problems.map((p, i) => (
            <div
              key={p.title}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group relative rounded-2xl p-7 cursor-default tilt-on-hover transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = `${p.color}40`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${p.glow}, 0 20px 40px rgba(0,0,0,0.3)`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Glow top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-60"
                style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }} />

              {/* Icon with glow */}
              <div className="mb-5 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: `${p.color}15`, border: `1px solid ${p.color}30`, color: p.color }}>
                {p.icon}
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-3">{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Bridge statement */}
        <div className="text-center" data-aos="zoom-in" data-aos-delay="200">
          <div className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl max-w-3xl"
            style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.25)", backdropFilter: "blur(12px)" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.3)" }}>
              <Zap size={18} style={{ color: "#c4b5fd" }} />
            </div>
            <p className="text-base sm:text-lg text-left sm:text-center font-semibold" style={{ color: "rgba(255,255,255,0.8)" }}>
              <span className="text-gradient font-extrabold">World Passport</span> bridges this gap —
              bringing international education within reach from Kerala.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
