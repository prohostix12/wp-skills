"use client";
 
import { CheckCircle2, Building2, Monitor, Briefcase, Rocket, GraduationCap } from "lucide-react";
 
const steps = [
  {
    month: "Months 1–3",
    phase: "Phase 1",
    title: "CIT International Training + IELTS",
    desc: "University-affiliated training with the Canadian Institute of Technology (CIT), Tirana, Albania. Includes IELTS coaching and international academic credits.",
    bullets: ["CIT international faculty", "Academic credit pathway", "IELTS integrated coaching"],
    color: "#5B21B6",
    icon: <Building2 size={20} />,
  },
  {
    month: "Month 4",
    phase: "Phase 2",
    title: "Skill Development & Live Projects",
    desc: "Intensive hands-on skill building with industry tools and live project experience. Build a portfolio that stands out to employers.",
    bullets: ["Industry-standard tools", "Live project experience", "Portfolio building"],
    color: "#0F2537",
    icon: <Monitor size={20} />,
  },
  {
    month: "Month 5",
    phase: "Phase 3",
    title: "Assured Internship",
    desc: "3-month guaranteed internship with partner companies. Real work experience that transforms your resume and professional profile.",
    bullets: ["Internship with partner firms", "Real work environment", "Professional mentoring"],
    color: "#5B21B6",
    icon: <Briefcase size={20} />,
  },
  {
    month: "Month 6",
    phase: "Phase 4",
    title: "Placement Support",
    desc: "Resume building, mock interviews, career counselling, and job-opportunity coordination. Our team supports you until you land your role.",
    bullets: ["Resume & LinkedIn building", "Mock interview training", "Job opportunity support"],
    color: "#0F2537",
    icon: <Rocket size={20} />,
  },
];
 
export default function SolutionTimeline() {
  return (
    <section id="pathway" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute inset-0 opacity-[0.015]"
          style={{ backgroundImage: "radial-gradient(circle, #5B21B6 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      </div>
 
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="badge badge-teal mb-4">The 6-Month Pathway</span>
          <h2 className="font-display font-black text-brand-blue mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            From Student to{" "}
            <span className="text-brand-teal">Global Professional</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A structured, step-by-step program that takes you from your current degree to a
            global career — with international credentials and real experience.
          </p>
        </div>
 
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
            style={{ background: "linear-gradient(180deg, #5B21B6, #0F2537, #5B21B6, #0F2537)" }} />
 
          <div className="flex flex-col gap-10">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={step.title} data-aos={isLeft ? "fade-right" : "fade-left"} data-aos-delay={i * 100}
                  className={`relative flex items-center gap-8 ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col`}>
                  <div className={`flex-1 w-full ${isLeft ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="group relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(15,37,55,0.06)] bg-white border border-slate-100 shadow-[0_8px_30px_rgba(15,37,55,0.02)]">
                      <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style={{ background: step.color }} />
                      <div className={`flex items-center gap-3 mb-4 ${isLeft ? "lg:flex-row-reverse" : ""}`}>
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `${step.color}08`, border: `1px solid ${step.color}15`, color: step.color }}
                        >
                          {step.icon}
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: step.color }}>{step.phase}</span>
                          <h3 className="font-display font-bold text-brand-blue text-lg leading-tight">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed mb-4">{step.desc}</p>
                      <ul className={`flex flex-col gap-1.5 ${isLeft ? "lg:items-end" : "lg:items-start"}`}>
                        {step.bullets.map((b) => (
                          <li key={b} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                            <CheckCircle2 size={14} style={{ color: step.color }} className="flex-shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
 
                  <div className="hidden lg:flex flex-shrink-0 flex-col items-center z-10">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-white font-display font-black text-base shadow-md"
                      style={{ background: step.color, boxShadow: `0 4px 12px ${step.color}25` }}
                    >
                      {i + 1}
                    </div>
                    <div className="text-xs font-bold text-center mt-2 whitespace-nowrap" style={{ color: step.color }}>{step.month}</div>
                  </div>
 
                  <div className="hidden lg:block flex-1" />
 
                  <div className="lg:hidden w-full flex items-center gap-3 -mt-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: step.color }}>
                      {i + 1}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: step.color }}>{step.month}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
 
        <div className="mt-16 text-center" data-aos="zoom-in" data-aos-delay="100">
          <div className="inline-flex flex-col items-center gap-3 px-10 py-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-[0_4px_20px_rgba(15,37,55,0.01)]">
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-brand-teal/10 border border-brand-teal/20">
              <GraduationCap size={28} className="text-brand-teal" />
            </div>
            <h3 className="font-display font-bold text-brand-blue text-xl">On Completion</h3>
            <p className="text-slate-500 text-sm max-w-sm text-center leading-relaxed">
              Walk away with 3 certifications, international academic credits, internship experience,
              and full placement assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
