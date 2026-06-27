"use client";

import { GraduationCap, UserCheck, Briefcase, RefreshCw, Plane, Globe } from "lucide-react";

const audiences = [
  { icon: <GraduationCap size={24} />, title: "Final Year Students",                    desc: "Prepare before graduation. Add international credentials to your degree and stand out on day one.",                  color: "#0F2537" },
  { icon: <UserCheck size={24} />,     title: "Fresh Graduates",                        desc: "Bridge the gap between your degree and your first job with real skills and internship experience.",                   color: "#5B21B6" },
  { icon: <Briefcase size={24} />,     title: "Working Professionals",                  desc: "Upskill and pivot your career with globally recognised certifications without quitting your job.",                    color: "#5B21B6" },
  { icon: <RefreshCw size={24} />,     title: "Career Switchers",                       desc: "Changing fields? Our program gives you the credentials and experience to make a confident switch.",                  color: "#0F2537" },
  { icon: <Plane size={24} />,         title: "Students Planning Higher Studies Abroad", desc: "Earn academic credits and IELTS certification that open doors to universities worldwide.",                           color: "#0F2537" },
  { icon: <Globe size={24} />,         title: "International Career Aspirants",          desc: "Can't afford to study abroad? Get international exposure right here in Kerala, at a fraction of the cost.",         color: "#5B21B6" },
];

export default function TargetAudience() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="badge badge-teal mb-4">Who Is This For?</span>
          <h2 className="font-display font-black text-brand-blue mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            This Program Is{" "}
            <span className="text-brand-teal">Built for You</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto">
            Whether you&apos;re a student, graduate, or professional — if you want a global edge,
            this program is designed with you in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {audiences.map((a, i) => (
            <div
              key={a.title}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="group relative rounded-2xl p-7 cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(15,37,55,0.08)]"
              style={{ background: "#F5F2EB", border: "1px solid #EAE5DA" }}
            >
              <div className="mb-5" style={{ color: a.color }}>
                {a.icon}
              </div>
              <h3 className="font-display font-bold text-brand-blue text-lg mb-3 leading-tight">{a.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 text-base mb-6">
            See yourself here?{" "}
            <span className="text-brand-teal font-extrabold">You belong in this program.</span>
          </p>
          <a href="#contact" className="btn-primary inline-flex">
            Book Your Free Counselling Call →
          </a>
        </div>
      </div>
    </section>
  );
}
