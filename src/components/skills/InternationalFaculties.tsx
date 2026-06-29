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
    <section id="faculty" className="py-24 relative overflow-hidden" style={{ background: "#060418" }}>
      {/* Background grids & decorative highlights */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ 
          backgroundImage: "linear-gradient(rgba(150,120,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(150,120,255,1) 1px, transparent 1px)", 
          backgroundSize: "60px 60px" 
        }} 
      />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] pointer-events-none rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(96,165,250,0.06) 0%, transparent 75%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[300px] pointer-events-none rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(167,139,250,0.06) 0%, transparent 75%)", filter: "blur(60px)" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="badge badge-teal mb-4">Expert Trainers</span>
          <h2 className="font-display font-black text-white mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            International <span className="text-gradient">Faculties</span>
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            Learn from global educators and industry pioneers who bring real-world international experience, academic excellence, and cutting-edge insights to your learning journey.
          </p>
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faculties.map((fac, idx) => (
            <div
              key={fac.name}
              data-aos="fade-up"
              data-aos-delay={100 + idx * 100}
              className="relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 ease-out group"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(12px)",
                "--hover-color": fac.color,
              } as React.CSSProperties}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = `${fac.color}40`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 45px ${fac.glow}, 0 20px 50px rgba(0,0,0,0.4)`;
                const imgFrame = e.currentTarget.querySelector(".image-frame") as HTMLElement;
                if (imgFrame) imgFrame.style.borderColor = fac.color;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                const imgFrame = e.currentTarget.querySelector(".image-frame") as HTMLElement;
                if (imgFrame) imgFrame.style.borderColor = "rgba(255,255,255,0.15)";
              }}
            >
              {/* Subtle card-top color stripe */}
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, transparent, ${fac.color}, transparent)` }} />

              {/* Main Content */}
              <div>
                {/* Header: Picture & Name */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-8">
                  {/* Photo Frame */}
                  <div className="image-frame w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-colors duration-300 shadow-lg"
                    style={{ borderColor: "rgba(255,255,255,0.15)" }}>
                    <img
                      src={fac.image}
                      alt={fac.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>

                  {/* Name & Academic Position */}
                  <div className="text-center sm:text-left">
                    <h3 className="font-display font-black text-xl text-white mb-2 tracking-tight group-hover:text-[var(--hover-color)] transition-colors duration-300">
                      {fac.name}
                    </h3>
                    <p className="text-xs font-semibold leading-relaxed" style={{ color: fac.color }}>
                      {fac.title}
                    </p>
                  </div>
                </div>

                {/* Faculty Attributes */}
                <div className="space-y-4">
                  {/* Division */}
                  <div className="flex gap-3">
                    <Network size={16} className="mt-0.5 flex-shrink-0" style={{ color: fac.color }} />
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider opacity-40 block">Division / Department</span>
                      <span className="text-xs text-white/70 leading-relaxed font-medium">{fac.division}</span>
                    </div>
                  </div>

                  {/* Qualifications */}
                  <div className="flex gap-3">
                    <GraduationCap size={16} className="mt-0.5 flex-shrink-0" style={{ color: fac.color }} />
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider opacity-40 block">Qualifications</span>
                      <span className="text-xs text-white/70 leading-relaxed font-medium">{fac.qualifications}</span>
                    </div>
                  </div>

                  {/* Specializations */}
                  <div className="flex gap-3">
                    <Cpu size={16} className="mt-0.5 flex-shrink-0" style={{ color: fac.color }} />
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider opacity-40 block">Area of Specialization</span>
                      <span className="text-xs text-white/70 leading-relaxed font-medium">{fac.specialization}</span>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="flex gap-3">
                    <Calendar size={16} className="mt-0.5 flex-shrink-0" style={{ color: fac.color }} />
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider opacity-40 block">Total Experience</span>
                      <span className="text-xs text-white/70 leading-relaxed font-medium">{fac.experience}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
