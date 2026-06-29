"use client";

import { Briefcase, Globe, Award, Star, FileText, MessageSquare, Users, CheckCircle, Map, Zap } from "lucide-react";

const timeline = [
  { step: 1, icon: <MessageSquare size={18} />, title: "Career Counselling", desc: "One-on-one counselling to map your strengths, goals, and the best-fit career path.", color: "#a78bfa", glow: "rgba(167,139,250,0.2)" },
  { step: 2, icon: <FileText size={18} />,      title: "Resume Building",    desc: "Professional resume and LinkedIn profile crafted to impress recruiters instantly.",    color: "#60a5fa", glow: "rgba(96,165,250,0.2)"  },
  { step: 3, icon: <Users size={18} />,         title: "Mock Interviews",    desc: "HR mock interviews, technical rounds, and communication coaching to build confidence.", color: "#34d399", glow: "rgba(52,211,153,0.2)"  },
  { step: 4, icon: <Briefcase size={18} />,     title: "Job Assistance",     desc: "Access to job opportunities through our partner network, with application support.",   color: "#fbbf24", glow: "rgba(251,191,36,0.2)"  },
  { step: 5, icon: <CheckCircle size={18} />,   title: "Placement Guidance", desc: "Ongoing guidance and coordination until you successfully land your role.",             color: "#f472b6", glow: "rgba(244,114,182,0.2)"  },
];

const cards = [
  { icon: <Briefcase size={20} />, title: "Aligned Internships",   desc: "Internship facilitation aligned with your program specialisation.",           color: "#a78bfa", glow: "rgba(167,139,250,0.2)" },
  { icon: <Globe size={20} />,     title: "Industry Exposure",      desc: "Meaningful industry exposure and applied real-world learning experience.",     color: "#60a5fa", glow: "rgba(96,165,250,0.2)"  },
  { icon: <Award size={20} />,     title: "Professional Profiling", desc: "Professional profiling, CV guidance, and interview preparation coaching.",     color: "#34d399", glow: "rgba(52,211,153,0.2)"  },
  { icon: <Star size={20} />,      title: "Career Mentoring",       desc: "Career mentoring and structured placement assistance from experienced guides.", color: "#fbbf24", glow: "rgba(251,191,36,0.2)"  },
];

export default function PlacementSupport() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#060418" }}>
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(rgba(150,120,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(150,120,255,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="badge badge-teal mb-4">Career Support</span>
          <h2 className="font-display font-black text-white mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Outcomes &amp; <span className="text-gradient">Placement Support</span>
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            Professional development extends beyond certification. Our structured framework bridges
            academic learning with real industry opportunity.
          </p>
          <p className="text-xs font-semibold mt-3.5" style={{ color: "rgba(255,255,255,0.3)" }}>
            * We provide placement <em>assistance</em> — we coordinate and guide, not guarantee a job.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Timeline */}
          <div data-aos="fade-right">
            <h3 className="font-display font-bold text-white text-xl mb-8 flex items-center gap-2">
              <Map size={22} className="text-purple-400 flex-shrink-0" /> Placement Process
            </h3>
            <div className="relative pl-8">
              {/* Timeline Connector Line */}
              <div className="absolute left-4 top-2 bottom-2 w-0.5"
                style={{ background: "linear-gradient(180deg, #a78bfa, #60a5fa, #34d399, #fbbf24, #f472b6)" }} />
              <div className="flex flex-col gap-6">
                {timeline.map((t) => (
                  <div key={t.title} className="relative flex items-start gap-5">
                    <div className="absolute -left-8 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white z-10 shadow-sm font-bold text-xs"
                      style={{ background: `linear-gradient(135deg, ${t.color} 0%, #4c1d95 100%)`, border: `1.5px solid ${t.color}`, boxShadow: `0 0 10px ${t.glow}` }}>
                      {t.step}
                    </div>
                    <div className="flex-1 rounded-2xl p-5 transition-all duration-300 tilt-on-hover"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        backdropFilter: "blur(8px)"
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = `${t.color}40`;
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${t.glow}`;
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ color: t.color, background: `${t.color}15`, border: `1px solid ${t.color}25` }}>
                          {t.icon}
                        </div>
                        <h4 className="font-display font-bold text-white text-base">{t.title}</h4>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Cards */}
          <div data-aos="fade-left" data-aos-delay="100">
            <h3 className="font-display font-bold text-white text-xl mb-8 flex items-center gap-2">
              <Zap size={22} className="text-purple-400 flex-shrink-0" /> What We Provide
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cards.map((c) => (
                <div
                  key={c.title}
                  className="group relative rounded-2xl p-6 cursor-default transition-all duration-300 tilt-on-hover"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    backdropFilter: "blur(8px)"
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${c.color}40`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${c.glow}, 0 12px 30px rgba(0,0,0,0.4)`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                    style={{ background: `linear-gradient(90deg, transparent, ${c.color}, transparent)` }} />
                  <div className="mb-4 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${c.color}15`, border: `1px solid ${c.color}25`, color: c.color }}>
                    {c.icon}
                  </div>
                  <h4 className="font-display font-bold text-white text-base mb-2">{c.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
