"use client";

import { useContent } from "@/hooks/useContent";
import { DEFAULT_INTERNATIONAL_FACULTIES } from "@/lib/contentDefaults";

export default function InternationalFaculties() {
  const faculties = useContent("internationalFaculties", DEFAULT_INTERNATIONAL_FACULTIES);
  return (
    <section id="faculty" className="py-24 relative overflow-hidden bg-[#faf8f5]" style={{ background: "#faf8f5" }}>
      {/* Background grids & decorative highlights */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{ 
          backgroundImage: "linear-gradient(rgba(29,78,216,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(29,78,216,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] pointer-events-none rounded-full"
        style={{ background: "radial-gradient(circle, rgba(29,78,216,0.04) 0%, transparent 70%)", filter: "blur(65px)" }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-blue-700 bg-blue-100 border border-blue-200 uppercase tracking-wider mb-4">
            Expert Trainers
          </span>
          <h2 className="font-display font-black text-black mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            International <span className="text-red-600">Faculties</span>
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-black/60">
            Learn from global educators and industry pioneers who bring real-world international experience, academic excellence, and cutting-edge insights to your learning journey.
          </p>
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {faculties.map((fac, idx) => (
            <div
              key={fac.name}
              data-aos="fade-up"
              data-aos-delay={100 + idx * 100}
              className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:scale-[1.02] shadow-sm relative overflow-hidden group"
            >
              {/* Photo Frame - Large Focus */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border border-slate-200 shadow-inner mb-6 relative bg-slate-50">
                <img
                  src={fac.image}
                  alt={fac.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info block */}
              <div>
                <h3 className="font-display font-black text-xl text-black mb-2 tracking-tight">
                  {fac.name}
                </h3>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 uppercase tracking-wide">
                  {fac.experience} Experience
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
