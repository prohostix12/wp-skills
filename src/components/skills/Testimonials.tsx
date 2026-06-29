"use client";

import { Star, Rocket, Building2, Briefcase, Globe } from "lucide-react";

const batchChips = [
  { icon: <Building2 size={13} />, label: "CIT University Certificate" },
  { icon: <Briefcase size={13} />, label: "Assured Internship" },
  { icon: <Globe size={13} />,     label: "International Credits" },
  { icon: <Rocket size={13} />,    label: "Placement Support" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden" style={{ background: "#060418" }}>
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(rgba(150,120,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(150,120,255,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="badge badge-teal mb-4">Social Proof</span>
          <h2 className="font-display font-black text-white mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Be Part of Our <span className="text-gradient">First Batch in Kerala</span>
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto mb-5 leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            Your success story starts here. Join students who are building international careers
            right from Kerala.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-purple-300"
            style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.3)" }}>
            <Star size={13} className="fill-purple-400 text-purple-400" />
            Founding cohort — limited seats available
          </div>
        </div>

        {/* Founding batch banner */}
        <div className="rounded-2xl p-8 md:p-12 text-center relative overflow-hidden" data-aos="zoom-in" data-aos-delay="100"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(99,102,241,0.05) 100%)",
            border: "1px solid rgba(167,139,250,0.2)",
            boxShadow: "0 0 60px rgba(124,58,237,0.15), 0 20px 50px rgba(0,0,0,0.4)"
          }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full blur-3xl pointer-events-none bg-purple-500/10" />
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center animate-bounce"
              style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)" }}>
              <Rocket size={30} className="text-purple-300" />
            </div>
            <h3 className="font-display font-black text-white text-2xl md:text-3xl mb-4 leading-tight">
              Join Students Building International Careers
            </h3>
            <p className="text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              We are building our first cohort right now. Be one of the founding students — shape the program,
              be celebrated in our first success stories, and carry the credibility of being a founding batch member.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {batchChips.map((chip) => (
                <span key={chip.label} className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white/80 bg-white/5 border border-white/10">
                  {chip.icon} {chip.label}
                </span>
              ))}
            </div>
            <a href="#contact" className="btn-primary inline-flex">
              Apply for First Batch →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
