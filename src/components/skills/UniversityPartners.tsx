"use client";

import { Building2, GraduationCap, Monitor, Briefcase, BookOpen } from "lucide-react";

const universities = [
  {
    id: "cit",
    label: "CIT",
    name: "Canadian Institute of Technology",
    location: "Tirana, Albania",
    image: "/canedian.png",
    desc: "The Canadian Institute of Technology, based in Tirana, is a recognised international private higher education institution dedicated to academic excellence, research development, and international cooperation.",
    leadership: [
      { name: "Prof. Dr. Ramiz Zekaj", role: "President" },
      { name: "Prof. Dr. Ismail Kocayusufoglu", role: "Rector" },
    ],
    stats: [
      { icon: <BookOpen size={18} />, value: "6", label: "Programs" },
      { icon: <Monitor size={18} />, value: "Online", label: "Delivery Mode" },
      { icon: <Briefcase size={18} />, value: "Yes", label: "Career Support" },
    ],
    color: "#a78bfa", glow: "rgba(167,139,250,0.25)"
  },
  {
    id: "mesdhetar",
    label: "Mesdhetar",
    name: "Mediterranean University Albania",
    location: "Tirana, Albania",
    image: "/mediterranean.png",
    desc: "The Mediterranean University of Albania, based in Tirana, is a recognized private higher education institution dedicated to academic excellence, research development, and international cooperation.",
    leadership: [
      { name: "Prof. Dr. Anastas Angjeli", role: "Honorary President" },
      { name: "Prof. Dr. Adrian Civici", role: "Rector" },
    ],
    stats: [
      { icon: <BookOpen size={18} />, value: "4", label: "Programs" },
      { icon: <Monitor size={18} />, value: "Online", label: "Delivery Mode" },
      { icon: <Briefcase size={18} />, value: "Yes", label: "Career Support" },
    ],
    color: "#60a5fa", glow: "rgba(96,165,250,0.25)"
  },
];

export default function UniversityPartners() {
  return (
    <section id="universities" className="py-24 relative overflow-hidden" style={{ background: "#060418" }}>
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(rgba(150,120,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(150,120,255,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="badge badge-teal mb-4">University Partners</span>
          <h2 className="font-display font-black text-white mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
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
              className="grid lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: `0 0 60px ${uni.glow}, 0 20px 60px rgba(0,0,0,0.4)`
              }}
            >
              {/* Left — Image & info */}
              <div className="lg:col-span-2 flex flex-col overflow-hidden" style={{ background: "rgba(255,255,255,0.02)" }}>
                <div className="relative h-48 lg:h-56 flex-shrink-0 overflow-hidden">
                  <img
                    src={uni.image}
                    alt={uni.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent, rgba(6,4,24,0.7))" }} />
                </div>

                <div className="p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${uni.color}15`, border: `1px solid ${uni.color}30` }}>
                        <Building2 size={18} style={{ color: uni.color }} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-white text-base leading-tight">
                          {uni.name}
                        </h3>
                        <p className="text-white/40 text-xs">{uni.location}</p>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{uni.desc}</p>
                  </div>
                  <div className="mt-6 h-0.5 rounded-full w-12" style={{ background: uni.color }} />
                </div>
              </div>

              {/* Right — Leadership + Stats */}
              <div className="lg:col-span-3 flex flex-col" style={{ background: "rgba(255,255,255,0.04)" }}>
                {/* Leadership */}
                <div className="p-7" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="flex items-center gap-2 mb-5">
                    <GraduationCap size={16} style={{ color: uni.color }} />
                    <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white/70">
                      Academic Leadership
                    </h4>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {uni.leadership.map((person) => (
                      <div
                        key={person.name}
                        className="flex items-center gap-3 p-4 rounded-xl"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: `${uni.color}15`, border: `1px solid ${uni.color}30` }}>
                          <GraduationCap size={16} style={{ color: uni.color }} />
                        </div>
                        <div>
                          <p className="font-bold text-white text-sm leading-tight">{person.name}</p>
                          <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{person.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 divide-x divide-white/5 flex-1">
                  {uni.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col items-center justify-center gap-2 p-6 transition-colors"
                      style={{ background: "rgba(255,255,255,0.02)" }}
                    >
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                        style={{ background: `${uni.color}15`, color: uni.color, border: `1px solid ${uni.color}25` }}
                      >
                        {stat.icon}
                      </div>
                      <p className="font-display font-black text-xl text-white">
                        {stat.value}
                      </p>
                      <p className="text-xs font-semibold text-center" style={{ color: "rgba(255,255,255,0.4)" }}>{stat.label}</p>
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
