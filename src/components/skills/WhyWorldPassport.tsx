"use client";

import { Building2, Users, Target, Award, GraduationCap, Compass, Wrench, Rocket } from "lucide-react";

const features = [
  { icon: <Building2 size={22} />, title: "International University Collaboration", desc: "Partnered with CIT (Canadian Institute of Technology), Tirana — a globally recognised higher education institution committed to academic excellence.", color: "#a78bfa" },
  { icon: <Users size={22} />,     title: "Experienced International Trainers",    desc: "Learn from faculty with real international industry experience. Our trainers bring global classroom standards to Kerala.",                            color: "#60a5fa" },
  { icon: <Target size={22} />,    title: "Industry-Focused Curriculum",           desc: "Every module is aligned with what employers actually need. No fluff — only skills that translate directly to career opportunities.",                   color: "#34d399" },
  { icon: <Award size={22} />,     title: "International Certifications",          desc: "Receive 3 globally recognised certificates: University Certificate, Course Completion Certificate, and Internship Certificate.",                      color: "#fbbf24" },
  { icon: <GraduationCap size={22} />, title: "Academic Credit Pathway",           desc: "Earn international academic credits that can be used as a pathway for higher education at universities abroad.",                                      color: "#f472b6" },
  { icon: <Compass size={22} />,   title: "Career Mentorship",                     desc: "Dedicated mentors guide you through every stage — from program entry to job placement. You never walk alone.",                                        color: "#a78bfa" },
  { icon: <Wrench size={22} />,    title: "Practical, Hands-On Training",          desc: "Learn by doing. Live projects, real tools, and industry simulations ensure you can apply what you learn from day one.",                               color: "#60a5fa" },
  { icon: <Rocket size={22} />,    title: "Placement Guidance",                    desc: "Resume building, interview coaching, LinkedIn optimisation, and job-opportunity coordination — we support your career launch.",                       color: "#34d399" },
];

export default function WhyWorldPassport() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#060418" }}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(rgba(150,120,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(150,120,255,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(96,165,250,0.08) 0%, transparent 70%)", filter: "blur(50px)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="badge badge-teal mb-4">Why Us</span>
          <h2 className="font-display font-black text-white mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Why Choose{" "}
            <span className="text-gradient">World Passport?</span>
          </h2>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div key={f.title} data-aos="fade-up" data-aos-delay={i * 75}
              className="group relative rounded-2xl p-6 cursor-default transition-all duration-300 tilt-on-hover"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", backdropFilter: "blur(8px)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = `${f.color}40`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${f.color}18, 0 16px 40px rgba(0,0,0,0.3)`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, transparent, ${f.color}, transparent)` }} />
              <div className="mb-4 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: `${f.color}15`, border: `1px solid ${f.color}25`, color: f.color }}>
                {f.icon}
              </div>
              <h3 className="font-display font-bold text-white text-sm mb-2 leading-tight">{f.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
