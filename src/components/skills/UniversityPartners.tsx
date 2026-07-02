"use client";

import { Building2, GraduationCap, Monitor, Briefcase, BookOpen, Award, Globe, FlaskConical } from "lucide-react";

const universities = [
  {
    id: "cit",
    label: "CIT",
    name: "Canadian Institute of Technology",
    location: "Tirana, Albania",
    image: "/canedian.png",
    desc: "The Canadian Institute of Technology, based in Tirana, is a recognised international private higher education institution dedicated to academic excellence, research development, and international cooperation.",
    websiteUrl: "/skills/cit",
    leadership: [
      { name: "Prof. Dr. Ramiz Zekaj", role: "President" },
      { name: "Prof. Dr. Ismail Kocayusufoglu", role: "Rector" },
    ],
    highlights: [
      { icon: <Award size={16} />, title: "Internationally Recognised", desc: "Accredited private higher education institution" },
      { icon: <FlaskConical size={16} />, title: "Research Driven", desc: "Strong focus on research & academic development" },
      { icon: <Globe size={16} />, title: "Global Cooperation", desc: "Active international partnership network" },
    ],
    stats: [
      { icon: <BookOpen size={15} />, value: "6", label: "Programs" },
      { icon: <Monitor size={15} />, value: "Online", label: "Delivery Mode" },
      { icon: <Briefcase size={15} />, value: "Yes", label: "Career Support" },
    ],
    color: "#7c3aed", glow: "rgba(124,58,237,0.08)"
  },
  {
    id: "mesdhetar",
    label: "Mesdhetar",
    name: "Mediterranean University Albania",
    location: "Tirana, Albania",
    image: "/mediterranean.png",
    desc: "The Mediterranean University of Albania, based in Tirana, is a recognized private higher education institution dedicated to academic excellence, research development, and international cooperation.",
    websiteUrl: "/skills/mediterranean",
    leadership: [
      { name: "Prof. Dr. Anastas Angjeli", role: "Honorary President" },
      { name: "Prof. Dr. Adrian Civici", role: "Rector" },
    ],
    highlights: [
      { icon: <Award size={16} />, title: "Internationally Recognised", desc: "Accredited private higher education institution" },
      { icon: <FlaskConical size={16} />, title: "Research Driven", desc: "Strong focus on research & academic development" },
      { icon: <Globe size={16} />, title: "Global Cooperation", desc: "Active international partnership network" },
    ],
    stats: [
      { icon: <BookOpen size={15} />, value: "4", label: "Programs" },
      { icon: <Monitor size={15} />, value: "Online", label: "Delivery Mode" },
      { icon: <Briefcase size={15} />, value: "Yes", label: "Career Support" },
    ],
    color: "#3b82f6", glow: "rgba(59,130,246,0.08)"
  },
];

export default function UniversityPartners() {
  return (
    <section id="universities" className="py-24 relative overflow-hidden" style={{ background: "#060418" }}>
      {/* Background video (section backdrop only — not inside the university cards) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        style={{ opacity: 0.25 }}
      >
        <source src="/animation.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: "rgba(6,4,24,0.75)" }} />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="badge badge-teal mb-4">University Partners</span>
          <h2 className="font-display font-black text-black mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Our <span className="text-gradient">Partner Universities</span>
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            Internationally recognised institutions that power your academic credentials and
            give your qualification genuine global standing.
          </p>
        </div>

        {/* Card Panel */}
        <div className="space-y-12">
          {universities.map((uni, idx) => (
            <div
              key={uni.id}
              data-aos="fade-up"
              data-aos-delay={120 + idx * 50}
              className="grid lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden bg-white border border-slate-200"
              style={{
                boxShadow: "0 10px 30px -10px rgba(124, 58, 237, 0.08), 0 1px 3px rgba(0, 0, 0, 0.02)"
              }}
            >
              {/* Left — Image & info */}
              <div className="lg:col-span-2 flex flex-col overflow-hidden bg-white border-r border-slate-100">
                <div className="relative h-48 lg:h-56 flex-shrink-0 overflow-hidden">
                  <img
                    src={uni.image}
                    alt={uni.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.4))" }} />
                </div>

                <div className="p-7 flex flex-col flex-1 justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${uni.color}10`, border: `1px solid ${uni.color}20` }}>
                        <Building2 size={18} style={{ color: uni.color }} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-slate-800 text-base leading-tight">
                          {uni.name}
                        </h3>
                        <p className="text-slate-500 text-xs mt-0.5">{uni.location}</p>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600">{uni.desc}</p>
                  </div>
                  
                  {/* View Details Button */}
                  <a
                    href={uni.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white transition-all hover:opacity-90 self-start"
                    style={{ background: uni.color, boxShadow: `0 4px 12px ${uni.color}25` }}
                  >
                    View Details →
                  </a>
                </div>
              </div>

              {/* Right — Leadership + Stats */}
              <div className="lg:col-span-3 flex flex-col bg-slate-50/50">
                {/* Leadership */}
                <div className="p-7 border-b border-slate-100">
                  <div className="flex items-center gap-2 mb-5">
                    <GraduationCap size={16} style={{ color: uni.color }} />
                    <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-500">
                      Academic Leadership
                    </h4>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {uni.leadership.map((person) => (
                      <div
                        key={person.name}
                        className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200/60"
                      >
                        <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: `${uni.color}10`, border: `1px solid ${uni.color}20` }}>
                          <GraduationCap size={16} style={{ color: uni.color }} />
                        </div>
                        <div>
                          <p className="font-bold text-slate-800 text-sm leading-tight">{person.name}</p>
                          <p className="text-xs mt-0.5 text-slate-500">{person.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="p-5 border-b border-slate-100">
                  <div className="flex items-center gap-2 mb-3">
                    <Award size={16} style={{ color: uni.color }} />
                    <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-500">
                      Program Highlights
                    </h4>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {uni.highlights.map((item) => (
                      <div key={item.title} className="flex flex-col gap-1.5 p-3 rounded-xl bg-white border border-slate-200/60">
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                          style={{ background: `${uni.color}10`, color: uni.color, border: `1px solid ${uni.color}20` }}>
                          {item.icon}
                        </div>
                        <p className="font-bold text-slate-800 text-xs leading-tight">{item.title}</p>
                        <p className="text-xs leading-snug text-slate-500">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 divide-x divide-slate-100">
                  {uni.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col items-center justify-center gap-1 p-2.5 transition-colors bg-white/40"
                    >
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center"
                        style={{ background: `${uni.color}10`, color: uni.color, border: `1px solid ${uni.color}20` }}
                      >
                        {stat.icon}
                      </div>
                      <p className="font-display font-black text-sm text-slate-800">
                        {stat.value}
                      </p>
                      <p className="text-[10px] font-semibold text-center text-slate-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
