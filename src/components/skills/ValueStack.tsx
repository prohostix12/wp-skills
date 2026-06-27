"use client";

import {
  Building2, Languages, Briefcase, Compass, Rocket,
  Award, GraduationCap, Wrench, FileText, Mic, Lightbulb,
} from "lucide-react";

const values = [
  { icon: <Building2 size={32} strokeWidth={1.5} />,    title: "International University Training", desc: "CIT-certified curriculum with internationally aligned academic excellence.",            color: "#0F2537" },
  { icon: <Languages size={32} strokeWidth={1.5} />,    title: "IELTS Coaching",                    desc: "Integrated IELTS preparation with expert trainers to open global doors.",              color: "#5B21B6" },
  { icon: <Briefcase size={32} strokeWidth={1.5} />,    title: "Assured Internship",                desc: "3-month internship with partner companies. Real work experience for your resume.",     color: "#5B21B6" },
  { icon: <Compass size={32} strokeWidth={1.5} />,      title: "Career Guidance",                   desc: "One-on-one career counselling from experienced mentors. Find your path with clarity.", color: "#0F2537" },
  { icon: <Rocket size={32} strokeWidth={1.5} />,       title: "Placement Support",                 desc: "Structured placement assistance — coordination, guidance, and job-opportunity support.", color: "#0F2537" },
  { icon: <Award size={32} strokeWidth={1.5} />,        title: "Global Certifications",             desc: "3 certificates: University Certificate, Course Completion, and Internship Certificate.", color: "#5B21B6" },
  { icon: <GraduationCap size={32} strokeWidth={1.5} />,title: "Academic Credits",                  desc: "International academic credits that count toward higher studies abroad.",               color: "#0F2537" },
  { icon: <Wrench size={32} strokeWidth={1.5} />,       title: "Live Projects",                     desc: "Build a strong portfolio with real-world projects guided by industry professionals.",   color: "#5B21B6" },
  { icon: <FileText size={32} strokeWidth={1.5} />,     title: "Resume Building",                   desc: "Professional resume, LinkedIn, and personal branding to stand out.",                    color: "#0F2537" },
  { icon: <Mic size={32} strokeWidth={1.5} />,          title: "Interview Training",                desc: "Mock interviews, HR preparation, and communication coaching. Walk in confident.",       color: "#5B21B6" },
];

export default function ValueStack() {
  return (
    <section id="value-stack" className="py-24 relative overflow-hidden" style={{ background: "#F5F2EB" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D9D3C7] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D9D3C7] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading — split layout like the reference */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-16" data-aos="fade-up">
          <div>
            <span className="inline-block text-[11px] font-bold tracking-[0.15em] uppercase text-slate-500 border border-slate-300 rounded px-2.5 py-1 mb-5">
              What You Get
            </span>
            <h2
              className="font-display font-black text-brand-blue leading-[1.1]"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              Everything Included with{" "}
              <span className="text-brand-teal">World Passport</span>
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Everything you need to launch an international career — bundled in one comprehensive 6-month program.
            </p>
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-[#E8E3D9] shadow-sm">
              <Lightbulb size={16} className="text-brand-teal flex-shrink-0" />
              <p className="text-slate-700 font-semibold text-sm">
                Compare to studying abroad at{" "}
                <span className="text-brand-red font-bold">₹10–15 lakh</span> — same edge, fraction of the cost.
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-0 border border-[#DDD8CE] rounded-2xl overflow-hidden">
          {values.map((v, i) => (
            <div
              key={v.title}
              data-aos="fade-up"
              data-aos-delay={i * 40}
              className="group relative flex flex-col p-7 bg-transparent cursor-default transition-all duration-300 hover:bg-white border-r border-b border-[#DDD8CE] last:border-r-0"
              style={{
                /* Remove right border on last in each row via CSS grid */
                borderRight: (i + 1) % 5 === 0 ? "none" : undefined,
              }}
            >
              {/* Large outline icon */}
              <div
                className="mb-6 transition-transform duration-300 group-hover:-translate-y-0.5 opacity-70 group-hover:opacity-100"
                style={{ color: v.color }}
              >
                {v.icon}
              </div>

              {/* Step badge */}
              <span className="inline-block text-[10px] font-bold tracking-[0.12em] uppercase border border-slate-300 text-slate-500 rounded px-2 py-0.5 mb-3 w-fit">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3
                className="font-display font-bold text-brand-blue text-base mb-2 leading-snug group-hover:text-brand-teal transition-colors duration-300"
              >
                {v.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
