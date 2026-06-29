"use client";

import { Building2, GraduationCap, Award, Languages, Briefcase, Rocket, Globe, Users } from "lucide-react";

const trustItems = [
  { icon: <Building2 size={18} />, label: "International University Partner", sub: "CIT — Canada/Albania" },
  { icon: <GraduationCap size={18} />, label: "International Academic Credits", sub: "Globally recognised" },
  { icon: <Award size={18} />, label: "3 Certifications", sub: "University · Course · Internship" },
  { icon: <Languages size={18} />, label: "IELTS Integrated", sub: "Coaching included" },
  { icon: <Briefcase size={18} />, label: "Assured Internship", sub: "Real work experience" },
  { icon: <Rocket size={18} />, label: "Placement Assistance", sub: "Career support" },
  { icon: <Globe size={18} />, label: "Global Learning Standards", sub: "Industry aligned" },
  { icon: <Users size={18} />, label: "Expert Faculty", sub: "International trainers" },
];

const allItems = [...trustItems, ...trustItems];

export default function TrustStrip() {
  return (
    <section className="py-10 overflow-hidden relative" style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-7 text-center">
        <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
          Trusted by students across Kerala · Powered by
        </p>
        <p className="text-sm font-bold mt-1.5" style={{ color: "rgba(196,181,253,0.8)" }}>
          Canadian Institute of Technology (CIT) · International University Partner
        </p>
      </div>

      <div className="relative fade-left overflow-hidden">
        <div className="flex gap-3 animate-marquee" style={{ width: "max-content" }}>
          {allItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-3 rounded-xl flex-shrink-0 cursor-default transition-all hover:-translate-y-0.5 tilt-on-hover"
              style={{
                background: "rgba(124,58,237,0.08)",
                border: "1px solid rgba(124,58,237,0.2)",
                minWidth: "220px",
                backdropFilter: "blur(8px)",
              }}
            >
              <span style={{ color: "#a78bfa", flexShrink: 0 }}>{item.icon}</span>
              <div>
                <div className="text-sm font-bold leading-tight" style={{ color: "rgba(255,255,255,0.85)" }}>{item.label}</div>
                <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
