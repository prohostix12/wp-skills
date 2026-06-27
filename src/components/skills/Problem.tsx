"use client";
 
import { AlertCircle, Zap, BookOpen, Globe, Briefcase, TrendingDown } from "lucide-react";
 
const problems = [
  { icon: <BookOpen size={24} />,     title: "Only Theory",                    desc: "Degrees full of theory with no hands-on application. Employers want skills, not just marks.",                                           color: "#D9383A" },
  { icon: <Globe size={24} />,        title: "No International Exposure",      desc: "Without global exposure, your resume looks the same as thousands of other graduates.",                                                   color: "#F59E0B" },
  { icon: <Briefcase size={24} />,    title: "No Internship Experience",       desc: "Companies demand experience. But without experience, no one hires you — a painful catch-22.",                                           color: "#8B5CF6" },
  { icon: <TrendingDown size={24} />, title: "Low Placement Opportunities",    desc: "Generic degrees lead to generic outcomes. Without the right skills, placement remains a dream.",                                        color: "#D9383A" },
];
 
export default function Problem() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-blue/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-teal/5 blur-3xl" />
      </div>
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 bg-brand-red/5 border border-brand-red/10">
            <AlertCircle size={13} className="text-brand-red" />
            <span className="text-brand-red text-xs font-bold tracking-widest uppercase">The Problem</span>
          </div>
          <h2 className="font-display font-black text-brand-blue mb-6" style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}>
            Why Students Struggle to{" "}
            <span className="text-brand-black">Build Global Careers?</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
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
              className="group relative rounded-2xl p-6 cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(15,37,55,0.08)]"
              style={{ background: "#F5F2EB", border: "1px solid #EAE5DA" }}
            >
              <div className="mb-5" style={{ color: p.color }}>
                {p.icon}
              </div>
              <h3 className="font-display font-bold text-brand-blue text-lg mb-3">{p.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
 
        <div className="text-center" data-aos="zoom-in" data-aos-delay="200">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white border border-slate-100 shadow-sm max-w-3xl">
            <Zap size={20} className="text-brand-teal flex-shrink-0" />
            <p className="text-slate-700 font-semibold text-base sm:text-lg text-left sm:text-center">
              <span className="text-brand-teal font-extrabold">World Passport</span> bridges this gap —
              bringing international education within reach from Kerala.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
