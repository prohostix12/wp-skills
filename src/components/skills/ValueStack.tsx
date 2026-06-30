"use client";

import {
  Building2, Languages, Briefcase, Compass, Rocket,
  Award, GraduationCap, Wrench, FileText, Mic, Lightbulb,
} from "lucide-react";

const values = [
  { icon: <Building2 size={28} strokeWidth={1.5} />,    title: "International University Training", desc: "CIT-certified curriculum with internationally aligned academic excellence.",            color: "#a78bfa" },
  { icon: <Languages size={28} strokeWidth={1.5} />,    title: "IELTS Coaching",                    desc: "Integrated IELTS preparation with expert trainers to open global doors.",              color: "#60a5fa" },
  { icon: <Briefcase size={28} strokeWidth={1.5} />,    title: "Assured Internship",                desc: "3-month internship with partner companies. Real work experience for your resume.",     color: "#34d399" },
  { icon: <Compass size={28} strokeWidth={1.5} />,      title: "Career Guidance",                   desc: "One-on-one career counselling from experienced mentors. Find your path with clarity.", color: "#fbbf24" },
  { icon: <Rocket size={28} strokeWidth={1.5} />,       title: "Placement Support",                 desc: "Structured placement assistance — coordination, guidance, and job-opportunity support.", color: "#f472b6" },
  { icon: <Award size={28} strokeWidth={1.5} />,        title: "Global Certifications",             desc: "3 certificates: University Certificate, Course Completion, and Internship Certificate.", color: "#a78bfa" },
  { icon: <GraduationCap size={28} strokeWidth={1.5} />,title: "Academic Credits",                  desc: "International academic credits that count toward higher studies abroad.",               color: "#60a5fa" },
  { icon: <Wrench size={28} strokeWidth={1.5} />,       title: "Live Projects",                     desc: "Build a strong portfolio with real-world projects guided by industry professionals.",   color: "#34d399" },
  { icon: <FileText size={28} strokeWidth={1.5} />,     title: "Resume Building",                   desc: "Professional resume, LinkedIn, and personal branding to stand out.",                    color: "#fbbf24" },
  { icon: <Mic size={28} strokeWidth={1.5} />,          title: "Interview Training",                desc: "Mock interviews, HR preparation, and communication coaching. Walk in confident.",       color: "#f472b6" },
];

export default function ValueStack() {
  return (
    <section id="value-stack" className="py-24 relative overflow-hidden" style={{ background: "#060418" }}>
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(rgba(150,120,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(150,120,255,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      {/* Left glow */}
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)", filter: "blur(50px)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-16" data-aos="fade-up">
          <div>
            <span className="inline-block text-[11px] font-bold tracking-[0.15em] uppercase px-3 py-1 mb-5 rounded-full"
              style={{ background: "rgba(124,58,237,0.15)", color: "#c4b5fd", border: "1px solid rgba(124,58,237,0.3)" }}>
              What You Get
            </span>
            <h2 className="font-display font-black text-black leading-[1.1]" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
              Everything Included with{" "}
              <span className="text-gradient">World Passport</span>
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
              Everything you need to launch an international career — bundled in one comprehensive 6-month program.
            </p>
            <div className="inline-flex items-center gap-2.5 px-4 py-3 rounded-xl"
              style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.25)", backdropFilter: "blur(8px)" }}>
              <Lightbulb size={16} style={{ color: "#c4b5fd", flexShrink: 0 }} />
              <p className="font-semibold text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                Compare to studying abroad at{" "}
                <span className="text-gradient-red font-bold">₹10–15 lakh</span> — same edge, fraction of the cost.
              </p>
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {values.map((v, i) => (
            <div
              key={v.title}
              data-aos="fade-up"
              data-aos-delay={i * 40}
              className="group relative flex flex-col p-6 rounded-2xl cursor-default transition-all duration-300 tilt-on-hover"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = `${v.color}40`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${v.color}20, 0 16px 40px rgba(0,0,0,0.3)`;
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
              }}
            >
              {/* Accent line top */}
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-70"
                style={{ background: `linear-gradient(90deg, transparent, ${v.color}, transparent)` }} />

              {/* Icon */}
              <div className="mb-5 w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5"
                style={{ background: `${v.color}15`, border: `1px solid ${v.color}25`, color: v.color }}>
                {v.icon}
              </div>

              {/* Step badge */}
              <span className="inline-block text-[10px] font-bold tracking-[0.12em] uppercase px-2 py-0.5 mb-3 w-fit rounded-full"
                style={{ background: `${v.color}12`, color: v.color, border: `1px solid ${v.color}25` }}>
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="font-display font-bold text-white text-sm mb-2 leading-snug">{v.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
