"use client";

import { AlertCircle, Zap } from "lucide-react";
import { useContent } from "@/hooks/useContent";
import { Icon } from "@/lib/iconRegistry";
import { DEFAULT_PROBLEMS } from "@/lib/contentDefaults";

export default function Problem() {
  const problems = useContent("problems", DEFAULT_PROBLEMS);
  return (
    <section className="py-24 relative overflow-hidden bg-[#faf8f5]">
      {/* Background World Map Vector */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 1
        }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 bg-red-50 border border-red-100 shadow-sm">
            <AlertCircle size={14} className="text-red-500" />
            <span className="text-xs font-bold tracking-widest uppercase text-red-600">The Problem</span>
          </div>
          <h2 className="font-display font-black text-slate-900 mb-6" style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}>
            Why Students Struggle to{" "}
            <span className="text-red-600">Build Global Careers?</span>
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-slate-600 font-medium">
            A regular degree isn&apos;t getting interviews. Studying abroad costs ₹20–40 lakh. Most students
            are stuck between the two.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((p, i) => (
            <div
              key={p.title}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              style={{ backgroundColor: "#faf3e8", borderColor: "#e8dacc", borderWidth: "1px" }}
            >
              {/* Animated Snake Border Overlay (Visible on Hover) */}
              <div className="absolute inset-0 z-50 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div 
                  className="absolute inset-0 rounded-2xl overflow-hidden"
                  style={{
                    padding: "3px",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                >
                  <div 
                    className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 animate-[spin_2.5s_linear_infinite]"
                    style={{ background: "conic-gradient(from 0deg, transparent 65%, #2563EB 75%, #DC2626 87%, #2563EB 100%)" }} 
                  />
                </div>
              </div>
              {/* Image Section */}
              <div className="h-40 overflow-hidden relative">
                <img 
                  src={p.image} 
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                   <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-white shadow-md ${p.iconColor}`}>
                    <Icon name={p.icon} size={20} />
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display font-bold text-slate-900 text-lg leading-snug">
                    {p.title}
                  </h3>
                  <span className="text-2xl font-black text-slate-100 font-serif tabular-nums select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-slate-600 flex-1 mb-4">
                  {p.desc}
                </p>

                {/* Impact tag */}
                <div className={`mt-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wide ring-1 ring-inset ${p.colorClass}`}>
                  {p.tag}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bridge statement */}
        <div className="text-center" data-aos="zoom-in" data-aos-delay="200">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 rounded-2xl max-w-3xl bg-blue-50 border border-blue-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-blue-100 border border-blue-200">
              <Zap size={20} className="text-blue-600" />
            </div>
            <p className="text-base sm:text-lg text-center sm:text-left font-semibold text-slate-700">
              <span className="font-extrabold text-red-600">World Passport</span> bridges this gap —
              bringing international education within reach from Kerala.
            </p>
          </div>
        </div>
      </div>

      {/* Keyframes for border animation */}
      <style>{`
        @keyframes runningLine {
          from {
            stroke-dashoffset: 100;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
}
