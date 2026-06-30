"use client";

import { GraduationCap, Network, Cpu, Calendar } from "lucide-react";

const faculties = [
  {
    name: "Florenc Hidri",
    title: "Ph.D(c), Lecturer, Faculty of Engineering, CIT",
    image: "/florenc.png",
    division: "Department of Electronics and Telecommunications Engineering",
    qualifications: "Ongoing Ph.D. studies in Information and Management Systems at South East European University. Holds a Master of Science (M.Sc.) in Business Informatics and a Professional Master (M.P) in Applied Informatics.",
    specialization: "Web Development, IT Project Management, System Administration, Cloud Solutions",
    experience: "17+ years",
    color: "#60a5fa",
    glow: "rgba(96,165,250,0.2)"
  },
  {
    name: "Bernardo Gogollari",
    title: "Creative Director, Digital Agency; Lecturer for AI Content Creation / Media & Creative Courses",
    image: "/bernardo.png",
    division: "Media, Design & Creative Technologies (Trainer, C-DATA Partner)",
    qualifications: "Omega College, Athens, Greece",
    specialization: "Strategy, Advertising, Creative Direction, Art Direction, Branding & Corporate ID, Illustration, Packaging Design, Product Design, Typography, Photography, 3D, Game Design",
    experience: "12+ years in professional creative and design fields",
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.2)"
  }
];

export default function InternationalFaculties() {
  return (
    <section id="faculty" className="py-24 relative overflow-hidden bg-[#faf8f5]" style={{ background: "#faf8f5" }}>
      {/* Background grids & decorative highlights */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{ 
          backgroundImage: "linear-gradient(rgba(124,58,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.3) 1px, transparent 1px)", 
          backgroundSize: "60px 60px" 
        }} 
      />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] pointer-events-none rounded-full"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.03) 0%, transparent 70%)", filter: "blur(65px)" }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-purple-700 bg-purple-100 border border-purple-200 uppercase tracking-wider mb-4">
            Expert Trainers
          </span>
          <h2 className="font-display font-black text-black mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            International <span className="text-purple-700">Faculties</span>
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
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold text-purple-700 bg-purple-50 border border-purple-100 uppercase tracking-wide">
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
