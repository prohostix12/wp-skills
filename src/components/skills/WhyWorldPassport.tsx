"use client";

import { Building2, Users, Target, Award, GraduationCap, Compass, Wrench, Rocket } from "lucide-react";

const features = [
  { icon: <Building2 size={24} />,    title: "International University Collaboration", desc: "Partnered with CIT (Canadian Institute of Technology), Tirana — a globally recognised higher education institution committed to academic excellence.", color: "#0F2537" },
  { icon: <Users size={24} />,        title: "Experienced International Trainers",      desc: "Learn from faculty with real international industry experience. Our trainers bring global classroom standards to Kerala.",                            color: "#5B21B6" },
  { icon: <Target size={24} />,       title: "Industry-Focused Curriculum",             desc: "Every module is aligned with what employers actually need. No fluff — only skills that translate directly to career opportunities.",                   color: "#5B21B6" },
  { icon: <Award size={24} />,        title: "International Certifications",            desc: "Receive 3 globally recognised certificates: University Certificate, Course Completion Certificate, and Internship Certificate.",                      color: "#0F2537" },
  { icon: <GraduationCap size={24} />,title: "Academic Credit Pathway",                 desc: "Earn international academic credits that can be used as a pathway for higher education at universities abroad.",                                      color: "#0F2537" },
  { icon: <Compass size={24} />,      title: "Career Mentorship",                       desc: "Dedicated mentors guide you through every stage — from program entry to job placement. You never walk alone.",                                        color: "#5B21B6" },
  { icon: <Wrench size={24} />,       title: "Practical, Hands-On Training",            desc: "Learn by doing. Live projects, real tools, and industry simulations ensure you can apply what you learn from day one.",                               color: "#5B21B6" },
  { icon: <Rocket size={24} />,       title: "Placement Guidance",                      desc: "Resume building, interview coaching, LinkedIn optimisation, and job-opportunity coordination — we support your career launch.",                       color: "#0F2537" },
];

const cit = { name: "Canadian Institute of Technology (CIT)", location: "C-DATA Tirana, Albania", programs: 6 };

export default function WhyWorldPassport() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="badge badge-teal mb-4">Why Us</span>
          <h2 className="font-display font-black text-brand-blue mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Why Choose{" "}
            <span className="text-brand-teal">World Passport?</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We fill the credibility gap with CIT — a real international university partnership
            that gives your qualification genuine global standing.
          </p>
        </div>

        {/* CIT Partnership Card */}
        <div
          className="mb-16 rounded-2xl overflow-hidden grid lg:grid-cols-5 gap-0 border border-slate-200 shadow-[0_8px_40px_rgba(15,37,55,0.08)]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Left — Image, clearly visible, no dark overlay */}
          <div className="relative lg:col-span-2 min-h-[300px]">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=85"
              alt="Canadian Institute of Technology campus"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Very subtle bottom gradient only for visual blending */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Right — Content on white background */}
          <div className="lg:col-span-3 bg-white p-8 lg:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-brand-teal/10 border border-brand-teal/20">
                <Building2 size={20} className="text-brand-teal" />
              </div>
              <div>
                <h3 className="font-display font-bold text-brand-blue text-lg leading-tight">{cit.name}</h3>
                <p className="text-slate-400 text-sm">{cit.location}</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-7 max-w-xl">
              CIT is a recognised international higher education institution committed to globally aligned
              academic excellence, innovation, and applied learning. Their curriculum and certifications
              are the backbone of this program.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "President", val: "Prof. Dr. Ramiz Zekaj" },
                { label: "Rector",    val: "Prof. Dr. Ismail Kocayusufoglu" },
                { label: "Programs",  val: `${cit.programs} Offered` },
              ].map((x) => (
                <div key={x.label} className="rounded-xl p-4 text-center bg-slate-50 border border-slate-100">
                  <div className="text-brand-blue font-bold text-sm leading-tight">{x.val}</div>
                  <div className="text-slate-400 text-xs mt-1">{x.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature cards — beige style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              data-aos="fade-up"
              data-aos-delay={i * 75}
              className="group relative rounded-2xl p-6 cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(15,37,55,0.08)]"
              style={{ background: "#F5F2EB", border: "1px solid #EAE5DA" }}
            >
              <div className="mb-4" style={{ color: f.color }}>
                {f.icon}
              </div>
              <h3 className="font-display font-bold text-brand-blue text-sm mb-2 leading-tight">{f.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
