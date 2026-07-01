"use client";

import { AlertCircle, Zap, BookOpen, Globe, Briefcase, TrendingDown } from "lucide-react";

const problems = [
  { 
    icon: <BookOpen size={20} />,     
    title: "Only Theory",                 
    desc: "Degrees full of theory with no hands-on application. Employers want skills, not just marks.",                
    colorClass: "bg-red-50 text-red-700 ring-red-100", 
    iconColor: "text-red-600",
    tag: "Zero Practical Skills",
    image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&q=80&w=600&h=400"
  },
  { 
    icon: <Globe size={20} />,        
    title: "No International Exposure",   
    desc: "Without global exposure, your resume looks the same as thousands of other graduates.",                       
    colorClass: "bg-amber-50 text-amber-700 ring-amber-100",  
    iconColor: "text-amber-600",
    tag: "Limited Global Reach",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600&h=400"
  },
  { 
    icon: <Briefcase size={20} />,    
    title: "No Internship Experience",    
    desc: "Companies demand experience. But without experience, no one hires you — a painful catch-22.",               
    colorClass: "bg-purple-50 text-purple-700 ring-purple-100", 
    iconColor: "text-purple-600",
    tag: "Catch-22 Trap",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600&h=400"
  },
  { 
    icon: <TrendingDown size={20} />, 
    title: "Low Placement", 
    desc: "Generic degrees lead to generic outcomes. Without the right skills, placement remains a dream.",           
    colorClass: "bg-orange-50 text-orange-700 ring-orange-100",  
    iconColor: "text-orange-600",
    tag: "Career Stagnation",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600&h=400"
  },
];

export default function Problem() {
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
            <span className="text-purple-700">Build Global Careers?</span>
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
                    {p.icon}
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
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 rounded-2xl max-w-3xl bg-purple-50 border border-purple-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-purple-100 border border-purple-200">
              <Zap size={20} className="text-purple-600" />
            </div>
            <p className="text-base sm:text-lg text-center sm:text-left font-semibold text-slate-700">
              <span className="font-extrabold text-purple-700">World Passport</span> bridges this gap —
              bringing international education within reach from Kerala.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
