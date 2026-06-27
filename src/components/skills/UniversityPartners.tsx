"use client";

import { useState } from "react";
import { Building2, GraduationCap, Monitor, Briefcase, BookOpen } from "lucide-react";

const universities = [
  {
    id: "cit",
    label: "CIT",
    name: "Canadian Institute of Technology",
    location: "Tirana, Albania",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=85&auto=format&fit=crop",
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
    color: "#0F2537",
  },
  {
    id: "mesdhetar",
    label: "Mesdhetar",
    name: "Mediterranean University Albania",
    location: "Tirana, Albania",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=700&q=85&auto=format&fit=crop",
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
    color: "#111827",
  },
];

export default function UniversityPartners() {
  const [activeId, setActiveId] = useState("cit");
  const active = universities.find((u) => u.id === activeId)!;

  return (
    <section id="universities" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute inset-0 opacity-[0.015]"
          style={{ backgroundImage: "radial-gradient(circle, #5B21B6 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="badge badge-teal mb-4">University Partners</span>
          <h2
            className="font-display font-black text-brand-blue mb-5"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Our{" "}
            <span className="text-gradient">Partner Universities</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Internationally recognised institutions that power your academic credentials and
            give your qualification genuine global standing.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10" data-aos="fade-up" data-aos-delay="80">
          <div className="inline-flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
            {universities.map((u) => (
              <button
                key={u.id}
                onClick={() => setActiveId(u.id)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-250"
                style={
                  activeId === u.id
                    ? {
                        background: u.color,
                        color: "#fff",
                        boxShadow: `0 4px 14px ${u.color}30`,
                      }
                    : {
                        background: "transparent",
                        color: "#64748b",
                      }
                }
              >
                <Building2 size={14} />
                {u.label}
              </button>
            ))}
          </div>
        </div>

        {/* Card Panel */}
        <div
          key={active.id}
          data-aos="fade-up"
          data-aos-delay="120"
          className="grid lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden border border-slate-100 shadow-[0_15px_45px_rgba(15,37,55,0.06)]"
        >
          {/* Left — University image + info card */}
          <div
            className="lg:col-span-2 flex flex-col overflow-hidden"
            style={{ background: "#0F2537" }}
          >
            {/* University image — clearly visible, no dark overlay */}
            <div className="relative h-48 lg:h-56 flex-shrink-0 overflow-hidden">
              <img
                src={active.image}
                alt={active.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info panel below image */}
            <div className="p-7 flex flex-col flex-1 justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${active.color}30`, border: `1px solid ${active.color}50` }}
                  >
                    <Building2 size={18} style={{ color: active.color === "#0F2537" ? "#a5b4fc" : active.color }} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-base leading-tight">
                      {active.name}
                    </h3>
                    <p className="text-slate-400 text-xs">{active.location}</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{active.desc}</p>
              </div>
              <div
                className="mt-6 h-0.5 rounded-full w-12"
                style={{ background: active.color === "#0F2537" ? "#5B21B6" : active.color }}
              />
            </div>
          </div>

          {/* Right — Leadership + Stats */}
          <div className="lg:col-span-3 bg-slate-50 flex flex-col">
            {/* Academic Leadership */}
            <div className="p-7 border-b border-slate-200">
              <div className="flex items-center gap-2 mb-5">
                <GraduationCap size={16} style={{ color: active.color }} />
                <h4 className="font-display font-bold text-brand-blue text-sm uppercase tracking-wider">
                  Academic Leadership
                </h4>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {active.leadership.map((person) => (
                  <div
                    key={person.name}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-[0_2px_8px_rgba(15,37,55,0.02)]"
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: `${active.color}10`, border: `1px solid ${active.color}25` }}
                    >
                      <GraduationCap size={16} style={{ color: active.color }} />
                    </div>
                    <div>
                      <p className="font-bold text-brand-blue text-sm leading-tight">{person.name}</p>
                      <p className="text-slate-400 text-xs mt-0.5">{person.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 divide-x divide-slate-200 flex-1">
              {active.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center gap-2 p-6 bg-white hover:bg-slate-50 transition-colors"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: `${active.color}10`, color: active.color, border: `1px solid ${active.color}20` }}
                  >
                    {stat.icon}
                  </div>
                  <p
                    className="font-display font-black text-xl"
                    style={{ color: active.color }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-slate-400 text-xs font-semibold text-center">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
