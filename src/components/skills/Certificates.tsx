"use client";

import { Building2, ScrollText, Briefcase, Medal, Star, CheckCircle } from "lucide-react";
import { ReactNode } from "react";

const certs: {
  title: string; issuer: string; location: string; desc: string;
  icon: ReactNode; color: string; badge: string; seal: ReactNode;
}[] = [
  {
    title:    "University Certificate",
    issuer:   "Canadian Institute of Technology (CIT)",
    location: "Tirana, Albania",
    desc:     "Internationally recognised university certificate from our partner institution CIT, validating your academic achievement.",
    icon:  <Building2 size={22} />,
    color: "#0F2537",
    badge: "International",
    seal:  <Medal size={26} />,
  },
  {
    title:    "Course Completion Certificate",
    issuer:   "World Passport · SkillDad",
    location: "Kerala, India",
    desc:     "Professional course completion certificate acknowledging your mastery of the full 6-month program curriculum.",
    icon:  <ScrollText size={22} />,
    color: "#5B21B6",
    badge: "Professional",
    seal:  <Star size={26} />,
  },
  {
    title:    "Internship Certificate",
    issuer:   "Partner Company",
    location: "Industry Partner",
    desc:     "Verified internship certificate from your host company, proving your real-world work experience to future employers.",
    icon:  <Briefcase size={22} />,
    color: "#5B21B6",
    badge: "Verified",
    seal:  <CheckCircle size={26} />,
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      {/* Dividers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D9D3C7] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D9D3C7] to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="badge badge-teal mb-4">Proof of Achievement</span>
          <h2
            className="font-display font-black mb-5"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            <span className="text-black">Walk Away with </span>
            <span className="text-brand-teal">3 Certificates</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Concrete, showable proof of what you&apos;ve achieved — certificates that open doors
            to jobs and higher education worldwide.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <div
              key={cert.title}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group cursor-default relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(15,37,55,0.10)]"
              style={{
                background: "#EDEAE2",
                border: "1px solid #D9D3C7",
                minHeight: "340px",
              }}
            >
              {/* Top colour accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: cert.color }}
              />

              {/* Decorative inner border */}
              <div
                className="absolute inset-3 rounded-xl pointer-events-none"
                style={{ border: `1px dashed ${cert.color}18` }}
              />

              {/* Badge chip */}
              <div className="absolute top-5 right-5">
                <span
                  className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                  style={{
                    background: `${cert.color}10`,
                    color: cert.color,
                    border: `1px solid ${cert.color}20`,
                  }}
                >
                  {cert.badge}
                </span>
              </div>

              <div className="p-7 flex flex-col h-full min-h-[340px] relative z-10">
                {/* Icon + Seal */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${cert.color}10`,
                      border: `1px solid ${cert.color}20`,
                      color: cert.color,
                    }}
                  >
                    {cert.icon}
                  </div>
                  <div style={{ color: cert.color }}>{cert.seal}</div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display font-bold text-brand-blue text-lg mb-1 leading-tight">
                    {cert.title}
                  </h3>
                  <p
                    className="text-xs font-bold tracking-wider uppercase mb-3"
                    style={{ color: cert.color }}
                  >
                    {cert.issuer}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {cert.desc}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#D0CBBf]">
                  <span className="text-slate-400 text-xs font-semibold">{cert.location}</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <div
                        key={j}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: j < 4 ? cert.color : `${cert.color}25` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-10">
          All certificates are digitally verifiable and officially issued upon completion.
        </p>
      </div>
    </section>
  );
}
