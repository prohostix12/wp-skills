"use client";

import { GraduationCap, UserCheck, Briefcase, RefreshCw, Plane, Globe } from "lucide-react";

const audiences = [
  { icon: <GraduationCap size={26} />, title: "Final Year Students",                    desc: "Prepare before graduation. Add international credentials to your degree and stand out on day one.",                  color: "#a78bfa", glow: "rgba(167,139,250,0.2)" },
  { icon: <UserCheck size={26} />,     title: "Fresh Graduates",                        desc: "Bridge the gap between your degree and your first job with real skills and internship experience.",                   color: "#60a5fa", glow: "rgba(96,165,250,0.2)"  },
  { icon: <Briefcase size={26} />,     title: "Working Professionals",                  desc: "Upskill and pivot your career with globally recognised certifications without quitting your job.",                    color: "#34d399", glow: "rgba(52,211,153,0.2)"  },
  { icon: <RefreshCw size={26} />,     title: "Career Switchers",                       desc: "Changing fields? Our program gives you the credentials and experience to make a confident switch.",                  color: "#fbbf24", glow: "rgba(251,191,36,0.2)"  },
  { icon: <Plane size={26} />,         title: "Students Planning Higher Studies Abroad", desc: "Earn academic credits and IELTS certification that open doors to universities worldwide.",                           color: "#f472b6", glow: "rgba(244,114,182,0.2)" },
  { icon: <Globe size={26} />,         title: "International Career Aspirants",          desc: "Can't afford to study abroad? Get international exposure right here in Kerala, at a fraction of the cost.",         color: "#a78bfa", glow: "rgba(167,139,250,0.2)" },
];

export default function TargetAudience() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#060418" }}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(rgba(150,120,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(150,120,255,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)", filter: "blur(50px)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="badge badge-teal mb-4">Who Is This For?</span>
          <h2 className="font-display font-black text-white mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            This Program Is{" "}
            <span className="text-gradient">Built for You</span>
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            Whether you&apos;re a student, graduate, or professional — if you want a global edge,
            this program is designed with you in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {audiences.map((a, i) => (
            <div
              key={a.title}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="group relative rounded-2xl p-7 cursor-default transition-all duration-300 tilt-on-hover"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", backdropFilter: "blur(8px)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = `${a.color}40`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${a.glow}, 0 20px 40px rgba(0,0,0,0.3)`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, transparent, ${a.color}, transparent)` }} />
              <div className="mb-5 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: `${a.color}15`, border: `1px solid ${a.color}25`, color: a.color }}>
                {a.icon}
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-3 leading-tight">{a.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{a.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-base mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
            See yourself here?{" "}
            <span className="font-extrabold text-gradient">You belong in this program.</span>
          </p>
          <a href="#contact" className="btn-primary inline-flex">
            Book Your Free Counselling Call →
          </a>
        </div>
      </div>
    </section>
  );
}
