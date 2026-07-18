"use client";

import { Lightbulb } from "lucide-react";
import { useContent } from "@/hooks/useContent";
import { Icon } from "@/lib/iconRegistry";
import { DEFAULT_VALUE_STACK } from "@/lib/contentDefaults";

export default function ValueStack() {
  const values = useContent("valueStack", DEFAULT_VALUE_STACK);
  return (
    <section id="value-stack" className="py-24 relative overflow-hidden bg-[#faf8f5]">
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0"
        style={{ backgroundImage: "linear-gradient(rgba(120,110,90,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(120,110,90,0.8) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-16" data-aos="fade-up">
          <div>
            <span className="inline-block text-[11px] font-bold tracking-[0.15em] uppercase px-3 py-1 mb-5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 shadow-sm">
              What You Get
            </span>
            <h2 className="font-display font-black text-slate-900 leading-[1.1]" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
              Everything Included with{" "}
              <span className="text-red-600">World Passport</span>
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="text-base sm:text-lg leading-relaxed mb-4 text-slate-600 font-medium">
              Everything you need to launch an international career — bundled in one comprehensive 6-month program.
            </p>
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-blue-50 border border-blue-100 shadow-sm">
              <Lightbulb size={20} className="text-blue-600 flex-shrink-0" />
              <p className="font-semibold text-sm text-slate-700">
                Compare to studying abroad at{" "}
                <span className="text-red-600 font-bold">₹10–15 lakh</span> — same edge, fraction of the cost.
              </p>
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              data-aos="fade-up"
              data-aos-delay={i * 40}
              className="group relative flex flex-col p-6 rounded-2xl cursor-default transition-all duration-300 bg-[#2d1b13] border border-[#4a2e20] shadow-xl hover:-translate-y-2 hover:bg-[#3d251a]"
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 40px -10px ${v.color}60`;
                (e.currentTarget as HTMLElement).style.borderColor = v.color;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "";
                (e.currentTarget as HTMLElement).style.borderColor = "#4a2e20";
              }}
            >
              {/* Accent line top */}
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg, transparent, ${v.color}, transparent)` }} />

              {/* Icon */}
              <div className="mb-6 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${v.color}20`, border: `1px solid ${v.color}40`, color: v.color }}>
                <Icon name={v.icon} size={28} strokeWidth={1.5} />
              </div>

              {/* Step badge */}
              <span className="inline-block text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 mb-3 w-fit rounded-md"
                style={{ background: `${v.color}15`, color: v.color, border: `1px solid ${v.color}30` }}>
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="font-display font-bold text-white text-base mb-2 leading-snug group-hover:text-white transition-colors">{v.title}</h3>
              <p className="text-sm leading-relaxed text-gray-300 group-hover:text-white transition-colors">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
