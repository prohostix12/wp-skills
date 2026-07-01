"use client";

import { CheckCircle2, Building2, Monitor, Briefcase, Rocket, GraduationCap } from "lucide-react";

const steps = [
  {
    month: "Months 1–3", phase: "Phase 1",
    title: "CIT International Training + IELTS",
    desc: "University-affiliated training with the Canadian Institute of Technology (CIT), Tirana, Albania. Includes IELTS coaching and international academic credits.",
    bullets: ["CIT international faculty", "Academic credit pathway", "IELTS integrated coaching"],
    color: "#8b5cf6", glow: "rgba(139,92,246,0.25)",
    icon: <Building2 size={20} />,
  },
  {
    month: "Month 4", phase: "Phase 2",
    title: "Skill Development & Live Projects",
    desc: "Intensive hands-on skill building with industry tools and live project experience. Build a portfolio that stands out to employers.",
    bullets: ["Industry-standard tools", "Live project experience", "Portfolio building"],
    color: "#3b82f6", glow: "rgba(59,130,246,0.25)",
    icon: <Monitor size={20} />,
  },
  {
    month: "Month 5", phase: "Phase 3",
    title: "Assured Internship",
    desc: "3-month guaranteed internship with partner companies. Real work experience that transforms your resume and professional profile.",
    bullets: ["Internship with partner firms", "Real work environment", "Professional mentoring"],
    color: "#10b981", glow: "rgba(16,185,129,0.25)",
    icon: <Briefcase size={20} />,
  },
  {
    month: "Month 6", phase: "Phase 4",
    title: "Placement Support",
    desc: "Resume building, mock interviews, career counselling, and job-opportunity coordination. Our team supports you until you land your role.",
    bullets: ["Resume & LinkedIn building", "Mock interview training", "Job opportunity support"],
    color: "#f59e0b", glow: "rgba(245,158,11,0.25)",
    icon: <Rocket size={20} />,
  },
];

export default function SolutionTimeline() {
  return (
    <section id="pathway" className="py-24 relative overflow-hidden bg-[#faf8f5]">
      {/* Background Image */}
      <img
        src="/graduation.jpg"
        alt="Pathway Background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        style={{ opacity: 1 }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-purple-700 bg-purple-100 border border-purple-200 uppercase tracking-wider mb-4">
            The 6-Month Pathway
          </span>
          <h2 className="font-display font-black text-slate-900 mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            From Student to{" "}
            <span className="text-purple-700">Global Professional</span>
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-slate-600 font-medium">
            A structured, step-by-step program that takes you from your current degree to a
            global career — with international credentials and real experience.
          </p>
        </div>

        <div className="relative">
          {/* Center vertical line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-slate-200" />

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={step.title} data-aos={isLeft ? "fade-right" : "fade-left"} data-aos-delay={i * 100}
                  className={`relative flex items-center gap-8 ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col`}>

                  {/* Card */}
                  <div className={`flex-1 w-full ${isLeft ? "lg:text-right" : "lg:text-left"}`}>
                    <div
                      className="group relative rounded-2xl p-7 transition-all duration-400 bg-white/80 shadow-lg hover:shadow-xl border border-slate-200 backdrop-blur-md"
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = `${step.color}40`;
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 10px 40px ${step.glow}, 0 20px 40px rgba(0,0,0,0.05)`;
                        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
                        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                      }}
                    >
                      <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                        style={{ background: `linear-gradient(90deg, transparent, ${step.color}, transparent)` }} />

                      <div className={`flex items-center gap-3 mb-4 ${isLeft ? "lg:flex-row-reverse" : ""}`}>
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `${step.color}15`, border: `1px solid ${step.color}30`, color: step.color }}>
                          {step.icon}
                        </div>
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: step.color }}>{step.phase}</span>
                          <h3 className="font-display font-bold text-slate-900 text-xl leading-tight mt-1">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed mb-4 text-slate-600 font-medium">{step.desc}</p>
                      <ul className={`flex flex-col gap-2 ${isLeft ? "lg:items-end" : "lg:items-start"}`}>
                        {step.bullets.map((b) => (
                          <li key={b} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                            <CheckCircle2 size={16} style={{ color: step.color, flexShrink: 0 }} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="hidden lg:flex flex-shrink-0 flex-col items-center z-10">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-display font-black text-lg shadow-md"
                      style={{ background: step.color, border: `3px solid white` }}>
                      {i + 1}
                    </div>
                    <div className="text-xs font-bold text-center mt-3 whitespace-nowrap text-slate-500 uppercase tracking-wider">{step.month}</div>
                  </div>

                  <div className="hidden lg:block flex-1" />

                  {/* Mobile node */}
                  <div className="lg:hidden w-full flex items-center gap-3 -mt-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0 shadow-sm"
                      style={{ background: step.color }}>
                      {i + 1}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{step.month}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Completion card */}
        <div className="mt-20 text-center" data-aos="zoom-in" data-aos-delay="100">
          <div className="inline-flex flex-col items-center gap-4 px-12 py-10 rounded-3xl bg-purple-50 border border-purple-100 shadow-sm">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-purple-100 border border-purple-200">
              <GraduationCap size={32} className="text-purple-600" />
            </div>
            <h3 className="font-display font-black text-slate-900 text-2xl">On Completion</h3>
            <p className="text-base max-w-md text-center leading-relaxed text-slate-600 font-medium">
              Walk away with 3 certifications, international academic credits, internship experience,
              and full placement assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
