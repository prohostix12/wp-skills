import type { Metadata } from "next";
import StickyBar from "@/components/skills/StickyBar";
import Footer from "@/components/skills/Footer";
import PlacementPlatform from "@/components/skills/PlacementPlatform";
import {
  Award,
  Target,
  MapPin,
  Building2,
  Users,
  Briefcase,
  GraduationCap
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | World Passport — Your Gateway to World-Class Education",
  description:
    "Founded in 2015, World Passport is dedicated to making international education accessible. Discover our values, mission, awards, and leadership team.",
  keywords:
    "global education, study abroad, European universities, overseas education, India, about World Passport",
  openGraph: {
    title: "About Us | World Passport",
    description:
      "Access 100+ European universities from India. No hidden fees. Personalized guidance.",
    type: "website",
  },
};

const team = [
  {
    name: "Edwin C Benny",
    role: "CEO",
    desc: "Visionary leader driving World Passport's mission to make international education accessible to every student.",
    image: "/assets/team/edwin.jpeg",
    fallbackColor: "#7c3aed"
  },
  {
    name: "Mujeeb T",
    role: "Director",
    desc: "Guiding strategic direction and partnerships to expand World Passport's global education network.",
    image: "/assets/team/mujeeb-t.jpg",
    fallbackColor: "#D9383A"
  }
];

export default function AboutPage() {
  return (
    <main className="text-black min-h-screen relative overflow-hidden bg-[#faf8f5]" style={{ background: "#faf8f5" }}>
      {/* ── Background Star Particles & Grids ── */}
      <div className="absolute inset-0 z-0 pointer-events-none animate-pulse" aria-hidden>
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(rgba(124,58,237,0.3) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(124,58,237,0.3) 1.5px, transparent 1.5px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>
      
      {/* Radial lighting highlights */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 70%)" }} />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(217,56,58,0.02) 0%, transparent 70%)" }} />

      {/* Sticky Navigation */}
      <StickyBar />

      {/* ── Header Section (Redesigned) ── */}
      <section className="relative w-full min-h-[85vh] flex items-center pt-32 pb-20 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1920" 
            alt="University Campus" 
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row justify-between items-end gap-12 lg:gap-8 mt-12">
          
          {/* Left Content */}
          <div className="max-w-2xl text-left w-full lg:mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-bold text-slate-800 bg-white shadow-sm mb-6">
              <span className="text-purple-600 font-black text-lg leading-none">*</span> About Us
            </span>
            <h1 className="font-display font-black text-white leading-tight mb-6 tracking-tight uppercase" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}>
              24 Years of Proven Excellence
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-white font-medium max-w-xl">
              Since 2001, we have been inspiring students to excel in their higher education aspirations by helping them choose the right university abroad. Being an award-winning education consultant, we are the official representative for a wide range of well-reputed universities globally.
            </p>
          </div>

          {/* Right Floating Stats Card */}
          <div className="w-full max-w-md bg-white rounded-2xl p-7 sm:p-9 shadow-2xl relative lg:translate-y-16">
            <div className="flex flex-col gap-6">
              
              {/* Stat 1 */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-6">
                  <span className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">20K</span>
                  <span className="text-sm font-semibold text-slate-600 leading-tight w-32">Students Recruited</span>
                </div>
                <GraduationCap size={32} strokeWidth={1.5} className="text-slate-800" />
              </div>

              {/* Stat 2 */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-6">
                  <span className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">60 +</span>
                  <span className="text-sm font-semibold text-slate-600 leading-tight w-32">Prestigious Awards Won</span>
                </div>
                <Award size={32} strokeWidth={1.5} className="text-amber-500" />
              </div>

              {/* Stat 3 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <span className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">200 +</span>
                  <span className="text-sm font-semibold text-slate-600 leading-tight w-32">Universities to Choose</span>
                </div>
                <Building2 size={32} strokeWidth={1.5} className="text-red-500" />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── Placement Platform Section ── */}
      <PlacementPlatform />

      {/* ── Leadership Section ── */}
      <section className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-purple-700 bg-purple-100 border border-purple-200 uppercase tracking-wider mb-4">
            Leadership
          </span>
          <h2 className="font-display font-black text-black text-3xl md:text-4xl">
            Meet the <span className="text-purple-700">Team</span>
          </h2>
          <p className="text-black/60 text-sm sm:text-base mt-2 max-w-md">
            Experienced counsellors who've lived the international education journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl">
          {team.map((member, i) => (
            <div
              key={member.name}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:scale-[1.02] hover:border-purple-500/30 transition-all duration-300 shadow-sm"
            >
              {/* Fallback color visual card block since local assets might not resolve initially */}
              <div className="h-64 relative flex items-center justify-center bg-slate-50 border-b border-slate-200 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-90" style={{ backgroundImage: `url(${member.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                <Users size={48} className="text-black/10 absolute" />
              </div>
              <div className="p-6 relative z-10">
                <h3 className="font-display font-black text-black text-xl">{member.name}</h3>
                <div className="text-purple-700 text-sm font-bold mt-1 mb-3">{member.role}</div>
                <p className="text-black/70 text-sm leading-relaxed">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative rounded-3xl p-10 md:p-14 text-center overflow-hidden bg-white border border-slate-200 shadow-sm"
          style={{ backdropFilter: "blur(12px)" }}>
          
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-[0.03] pointer-events-none" 
            style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-[0.03] pointer-events-none" 
            style={{ background: "radial-gradient(circle, #D9383A, transparent 70%)" }} />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-purple-50 border border-purple-100">
              <Target size={28} className="text-purple-600" />
            </div>
            <h2 className="font-display font-black text-black text-2xl sm:text-3xl md:text-4xl mb-4">
              Ready to Begin Your <span className="text-purple-700">Journey?</span>
            </h2>
            <p className="text-black/60 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Join 10,000+ students who trusted World Passport to guide them to world-class universities. Your story starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/skills#contact" className="btn-primary w-full sm:w-auto">
                Book Free Consultation
              </a>
              <a href="/programs" className="btn-outline w-full sm:w-auto">
                Explore Programs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
