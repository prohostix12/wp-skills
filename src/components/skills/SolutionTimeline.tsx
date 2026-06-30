"use client";

import { CheckCircle2, Building2, Monitor, Briefcase, Rocket, GraduationCap } from "lucide-react";

const steps = [
  {
    month: "Months 1–3", phase: "Phase 1",
    title: "CIT International Training + IELTS",
    desc: "University-affiliated training with the Canadian Institute of Technology (CIT), Tirana, Albania. Includes IELTS coaching and international academic credits.",
    bullets: ["CIT international faculty", "Academic credit pathway", "IELTS integrated coaching"],
    color: "#a78bfa", glow: "rgba(167,139,250,0.25)",
    icon: <Building2 size={20} />,
  },
  {
    month: "Month 4", phase: "Phase 2",
    title: "Skill Development & Live Projects",
    desc: "Intensive hands-on skill building with industry tools and live project experience. Build a portfolio that stands out to employers.",
    bullets: ["Industry-standard tools", "Live project experience", "Portfolio building"],
    color: "#60a5fa", glow: "rgba(96,165,250,0.25)",
    icon: <Monitor size={20} />,
  },
  {
    month: "Month 5", phase: "Phase 3",
    title: "Assured Internship",
    desc: "3-month guaranteed internship with partner companies. Real work experience that transforms your resume and professional profile.",
    bullets: ["Internship with partner firms", "Real work environment", "Professional mentoring"],
    color: "#34d399", glow: "rgba(52,211,153,0.25)",
    icon: <Briefcase size={20} />,
  },
  {
    month: "Month 6", phase: "Phase 4",
    title: "Placement Support",
    desc: "Resume building, mock interviews, career counselling, and job-opportunity coordination. Our team supports you until you land your role.",
    bullets: ["Resume & LinkedIn building", "Mock interview training", "Job opportunity support"],
    color: "#fbbf24", glow: "rgba(251,191,36,0.25)",
    icon: <Rocket size={20} />,
  },
];

export default function SolutionTimeline() {
  return (
    <section id="pathway" className="py-24 relative overflow-hidden" style={{ background: "#060418" }}>
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(rgba(150,120,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(150,120,255,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="badge badge-teal mb-4">The 6-Month Pathway</span>
          <h2 className="font-display font-black text-black mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            From Student to{" "}
            <span className="text-gradient">Global Professional</span>
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            A structured, step-by-step program that takes you from your current degree to a
            global career — with international credentials and real experience.
          </p>
        </div>

        <div className="relative">
          {/* Center vertical line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
            style={{ background: "linear-gradient(180deg, rgba(167,139,250,0.8), rgba(96,165,250,0.8), rgba(52,211,153,0.8), rgba(251,191,36,0.8))" }} />

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={step.title} data-aos={isLeft ? "fade-right" : "fade-left"} data-aos-delay={i * 100}
                  className={`relative flex items-center gap-8 ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col`}>

                  {/* Card */}
                  <div className={`flex-1 w-full ${isLeft ? "lg:text-right" : "lg:text-left"}`}>
                    <div
                      className="group relative rounded-2xl p-7 transition-all duration-400 tilt-on-hover"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        backdropFilter: "blur(12px)",
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = `${step.color}40`;
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${step.glow}, 0 20px 40px rgba(0,0,0,0.3)`;
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      }}
                    >
                      <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                        style={{ background: `linear-gradient(90deg, transparent, ${step.color}, transparent)` }} />

                      <div className={`flex items-center gap-3 mb-4 ${isLeft ? "lg:flex-row-reverse" : ""}`}>
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `${step.color}15`, border: `1px solid ${step.color}30`, color: step.color }}>
                          {step.icon}
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: step.color }}>{step.phase}</span>
                          <h3 className="font-display font-bold text-white text-lg leading-tight">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>{step.desc}</p>
                      <ul className={`flex flex-col gap-1.5 ${isLeft ? "lg:items-end" : "lg:items-start"}`}>
                        {step.bullets.map((b) => (
                          <li key={b} className="flex items-center gap-2 text-sm font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>
                            <CheckCircle2 size={13} style={{ color: step.color, flexShrink: 0 }} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="hidden lg:flex flex-shrink-0 flex-col items-center z-10">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-display font-black text-base"
                      style={{ background: `linear-gradient(135deg, ${step.color}80, ${step.color}40)`, border: `2px solid ${step.color}60`, boxShadow: `0 0 20px ${step.glow}` }}>
                      {i + 1}
                    </div>
                    <div className="text-xs font-bold text-center mt-2 whitespace-nowrap" style={{ color: step.color }}>{step.month}</div>
                  </div>

                  <div className="hidden lg:block flex-1" />

                  {/* Mobile node */}
                  <div className="lg:hidden w-full flex items-center gap-3 -mt-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ background: step.color, boxShadow: `0 0 12px ${step.glow}` }}>
                      {i + 1}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: step.color }}>{step.month}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Completion card */}
        <div className="mt-16 text-center" data-aos="zoom-in" data-aos-delay="100">
          <div className="inline-flex flex-col items-center gap-3 px-10 py-8 rounded-2xl animate-pulse-glow"
            style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.3)", backdropFilter: "blur(12px)" }}>
            <div className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.4)" }}>
              <GraduationCap size={28} style={{ color: "#c4b5fd" }} />
            </div>
            <h3 className="font-display font-bold text-white text-xl">On Completion</h3>
            <p className="text-sm max-w-sm text-center leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Walk away with 3 certifications, international academic credits, internship experience,
              and full placement assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
