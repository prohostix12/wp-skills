"use client";

import { Building2, GraduationCap, Award, Languages, Briefcase, Rocket, Globe, Users } from "lucide-react";

const trustItems = [
  { icon: <Building2 size={20} />, label: "International University Partner", sub: "CIT — Canada/Albania" },
  { icon: <GraduationCap size={20} />, label: "International Academic Credits", sub: "Globally recognised" },
  { icon: <Award size={20} />, label: "3 Certifications", sub: "University · Course · Internship" },
  { icon: <Languages size={20} />, label: "IELTS Integrated", sub: "Coaching included" },
  { icon: <Briefcase size={20} />, label: "Assured Internship", sub: "Real work experience" },
  { icon: <Rocket size={20} />, label: "Placement Assistance", sub: "Career support" },
  { icon: <Globe size={20} />, label: "Global Learning Standards", sub: "Industry aligned" },
  { icon: <Users size={20} />, label: "Expert Faculty", sub: "International trainers" },
];

const allItems = [...trustItems, ...trustItems];

export default function TrustStrip() {
  return (
    <section className="py-12 overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center" data-aos="fade-up">
        <p className="text-xs font-bold tracking-widest uppercase text-slate-400">
          Trusted by students across Kerala · Powered by
        </p>
        <p className="text-sm font-bold text-slate-600 mt-1.5">
          Canadian Institute of Technology (CIT) · International University Partner
        </p>
      </div>

      <div className="relative fade-left overflow-hidden">
        <div className="flex gap-4 animate-marquee" style={{ width: "max-content" }}>
          {allItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-3.5 rounded-2xl flex-shrink-0 cursor-default transition-all hover:-translate-y-0.5 hover:shadow-sm"
              style={{ background: "#EDEAE2", borderColor: "#D9D3C7", minWidth: "220px" }}
            >
              <span className="text-brand-teal flex-shrink-0">{item.icon}</span>
              <div>
                <div className="text-slate-800 text-sm font-bold leading-tight">{item.label}</div>
                <div className="text-slate-400 text-xs mt-0.5">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
