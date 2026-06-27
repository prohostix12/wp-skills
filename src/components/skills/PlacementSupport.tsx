"use client";
 
import { Briefcase, Globe, Award, Star, FileText, MessageSquare, Users, CheckCircle, Map, Zap } from "lucide-react";
 
const timeline = [
  { step: 1, icon: <MessageSquare size={18} />, title: "Career Counselling", desc: "One-on-one counselling to map your strengths, goals, and the best-fit career path.", color: "#0F2537" },
  { step: 2, icon: <FileText size={18} />,      title: "Resume Building",    desc: "Professional resume and LinkedIn profile crafted to impress recruiters instantly.",    color: "#5B21B6" },
  { step: 3, icon: <Users size={18} />,         title: "Mock Interviews",    desc: "HR mock interviews, technical rounds, and communication coaching to build confidence.", color: "#5B21B6" },
  { step: 4, icon: <Briefcase size={18} />,     title: "Job Assistance",     desc: "Access to job opportunities through our partner network, with application support.",   color: "#0F2537" },
  { step: 5, icon: <CheckCircle size={18} />,   title: "Placement Guidance", desc: "Ongoing guidance and coordination until you successfully land your role.",             color: "#5B21B6" },
];
 
const cards = [
  { icon: <Briefcase size={20} />, title: "Aligned Internships",   desc: "Internship facilitation aligned with your program specialisation.",           color: "#0F2537" },
  { icon: <Globe size={20} />,     title: "Industry Exposure",      desc: "Meaningful industry exposure and applied real-world learning experience.",     color: "#5B21B6" },
  { icon: <Award size={20} />,     title: "Professional Profiling", desc: "Professional profiling, CV guidance, and interview preparation coaching.",     color: "#5B21B6" },
  { icon: <Star size={20} />,      title: "Career Mentoring",       desc: "Career mentoring and structured placement assistance from experienced guides.", color: "#0F2537" },
];
 
export default function PlacementSupport() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="badge badge-teal mb-4">Career Support</span>
          <h2 className="font-display font-black text-brand-blue mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Outcomes &amp;{" "}
            <span className="text-gradient">Placement Support</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Professional development extends beyond certification. Our structured framework bridges
            academic learning with real industry opportunity.
          </p>
          <p className="text-xs font-semibold text-slate-400 mt-3.5">
            * We provide placement <em>assistance</em> — we coordinate and guide, not guarantee a job.
          </p>
        </div>
 
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div data-aos="fade-right">
            <h3 className="font-display font-bold text-brand-blue text-xl mb-8 flex items-center gap-2">
              <Map size={22} className="text-brand-teal flex-shrink-0" /> Placement Process
            </h3>
            <div className="relative pl-8">
              <div className="absolute left-4 top-2 bottom-2 w-0.5"
                style={{ background: "linear-gradient(180deg, #0F2537, #5B21B6, #5B21B6, #0F2537, #5B21B6)" }} />
              <div className="flex flex-col gap-6">
                {timeline.map((t) => (
                  <div key={t.title} className="relative flex items-start gap-5">
                    <div className="absolute -left-8 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white z-10 shadow-sm"
                      style={{ background: t.color, boxShadow: `0 2px 8px ${t.color}25` }}>
                      <span className="text-xs font-bold">{t.step}</span>
                    </div>
                    <div className="flex-1 bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_4px_20px_rgba(15,37,55,0.015)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(15,37,55,0.05)]">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ color: t.color, background: `${t.color}08`, border: `1px solid ${t.color}15` }}>
                          {t.icon}
                        </div>
                        <h4 className="font-display font-bold text-brand-blue text-base">{t.title}</h4>
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
 
          <div data-aos="fade-left" data-aos-delay="100">
            <h3 className="font-display font-bold text-brand-blue text-xl mb-8 flex items-center gap-2">
              <Zap size={22} className="text-brand-teal flex-shrink-0" /> What We Provide
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cards.map((c) => (
                <div
                  key={c.title}
                  className="group relative rounded-2xl p-6 cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(15,37,55,0.08)]"
                  style={{ background: "#F5F2EB", border: "1px solid #EAE5DA" }}
                >
                  <div className="mb-4" style={{ color: c.color }}>
                    {c.icon}
                  </div>
                  <h4 className="font-display font-bold text-brand-blue text-base mb-2">{c.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
