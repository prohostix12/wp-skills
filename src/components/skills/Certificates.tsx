"use client";

import { Building2, ScrollText, Briefcase, Medal, Star, CheckCircle } from "lucide-react";
import { ReactNode } from "react";

const certs: {
  title: string; issuer: string; location: string; desc: string;
  icon: ReactNode; color: string; badge: string; seal: ReactNode;
}[] = [
  {
    title: "University Certificate",
    issuer: "Canadian Institute of Technology (CIT)",
    location: "Tirana, Albania",
    desc: "Internationally recognised university certificate from our partner institution CIT, validating your academic achievement.",
    icon: <Building2 size={22} />, color: "#0F2537", badge: "International", seal: <Medal size={28} />,
  },
  {
    title: "Course Completion Certificate",
    issuer: "World Passport · SkillDad",
    location: "Kerala, India",
    desc: "Professional course completion certificate acknowledging your mastery of the full 6-month program curriculum.",
    icon: <ScrollText size={22} />, color: "#5B21B6", badge: "Professional", seal: <Star size={28} />,
  },
  {
    title: "Internship Certificate",
    issuer: "Partner Company",
    location: "Industry Partner",
    desc: "Verified internship certificate from your host company, proving your real-world work experience to future employers.",
    icon: <Briefcase size={22} />, color: "#5B21B6", badge: "Verified", seal: <CheckCircle size={28} />,
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-[0.02]"
          style={{ background: "radial-gradient(ellipse, #5B21B6, transparent)" }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="badge badge-teal mb-4">Proof of Achievement</span>
          <h2 className="font-display font-black text-brand-blue mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Walk Away with{" "}
            <span className="text-brand-teal">3 Certificates</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Concrete, showable proof of what you&apos;ve achieved — certificates that open doors
            to jobs and higher education worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certs.map((cert, i) => (
            <div key={cert.title} data-aos="flip-up" data-aos-delay={i * 120} className="group cursor-default">
              <div
                className="relative rounded-2xl overflow-hidden transition-all duration-400 group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_50px_rgba(15,37,55,0.06)] bg-white border border-slate-100 shadow-[0_8px_30px_rgba(15,37,55,0.02)]"
                style={{ minHeight: "340px" }}
              >
                <div className="absolute inset-3 rounded-xl pointer-events-none" style={{ border: `1px dashed ${cert.color}15` }} />
                <div className="absolute inset-4 rounded-lg pointer-events-none" style={{ border: `1px solid ${cert.color}08` }} />
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: cert.color }} />
                <div className="absolute top-6 right-6">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                    style={{ background: `${cert.color}08`, color: cert.color, border: `1px solid ${cert.color}15` }}>
                    {cert.badge}
                  </span>
                </div>
                <div className="p-8 flex flex-col justify-between h-full min-h-[340px] relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: `${cert.color}08`, border: `1px solid ${cert.color}15`, color: cert.color }}>
                      {cert.icon}
                    </div>
                    <div style={{ color: cert.color }}>{cert.seal}</div>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-brand-blue text-lg mb-1 leading-tight">{cert.title}</h3>
                    <p style={{ color: cert.color }} className="text-xs font-bold tracking-wider uppercase mb-3">{cert.issuer}</p>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5">{cert.desc}</p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-slate-400 text-xs font-semibold">{cert.location}</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, j) => (
                        <div key={j} className="w-1.5 h-1.5 rounded-full"
                          style={{ background: j < 4 ? cert.color : `${cert.color}20` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-12">
          All certificates are digitally verifiable and officially issued upon completion.
        </p>
      </div>
    </section>
  );
}
