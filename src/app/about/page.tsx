import type { Metadata } from "next";
import StickyBar from "@/components/skills/StickyBar";
import Footer from "@/components/skills/Footer";
import {
  Heart,
  Globe,
  Shield,
  Clock,
  Award,
  CircleCheckBig,
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

const stats = [
  { val: "2015", label: "Year Founded", color: "#60A5FA" },
  { val: "10,000+", label: "Students Served", color: "#60A5FA" },
  { val: "100+", label: "Partner Universities", color: "#F87171" },
  { val: "12", label: "European Countries", color: "#F87171" }
];

const values = [
  {
    icon: <Heart size={24} style={{ color: "#D9383A" }} />,
    title: "Listen First",
    desc: "Every student's story is unique. We listen carefully before we advise — no cookie-cutter solutions.",
    bg: "rgba(217, 56, 58, 0.12)",
    border: "rgba(217, 56, 58, 0.25)"
  },
  {
    icon: <Globe size={24} style={{ color: "#7c3aed" }} />,
    title: "Global Network",
    desc: "100+ partner universities across 12 European countries give you unmatched program options.",
    bg: "rgba(124, 58, 237, 0.12)",
    border: "rgba(124, 58, 237, 0.25)"
  },
  {
    icon: <Shield size={24} style={{ color: "#60a5fa" }} />,
    title: "Zero Hidden Fees",
    desc: "Complete transparency. What we quote is exactly what you pay — no surprises, ever.",
    bg: "rgba(96, 165, 250, 0.12)",
    border: "rgba(96, 165, 250, 0.25)"
  },
  {
    icon: <Clock size={24} style={{ color: "#D9383A" }} />,
    title: "Lifetime Support",
    desc: "From first inquiry to graduation and beyond — our counsellors remain your trusted guides.",
    bg: "rgba(217, 56, 58, 0.12)",
    border: "rgba(217, 56, 58, 0.25)"
  }
];

const missionBullets = [
  "Direct university partnerships — no agency markups",
  "Transparent fee structure from day one",
  "Counsellors who have studied abroad themselves",
  "Dedicated support from inquiry to graduation"
];

const awards = [
  { title: "Most Trusted Education Agency", org: "Education Today Awards", year: "2023" },
  { title: "Best Overseas Counselling Service", org: "Times Education", year: "2022" },
  { title: "ISO 9001:2015 Certified", org: "International Standards", year: "2021" },
  { title: "Top 10 Education Consultants", org: "India Education Summit", year: "2020" }
];

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

const offices = [
  {
    flag: "🇮🇳",
    city: "Delhi (Noida)",
    country: "India",
    tag: "Headquarters",
    address: "A-18, S1, Second Floor, Sector-59, Noida, UP-201301"
  },
  {
    flag: "🇦🇪",
    city: "Dubai",
    country: "UAE",
    tag: "International Office",
    address: "Office No 502, Al Fattan Plaza, Al Garhoud, UAE"
  },
  {
    flag: "🇮🇳",
    city: "Edapally, Ernakulam",
    country: "Kerala, India",
    tag: "Regional Office",
    address: "St George Forane Church Building, Palarivattam-Edappally Road, Ponekkara, Edappally, Kochi, Ernakulam, Kerala 682024"
  }
];

export default function AboutPage() {
  return (
    <main className="text-white/80 min-h-screen relative overflow-hidden" style={{ background: "#060418" }}>
      {/* ── Background Star Particles & Grids ── */}
      <div className="absolute inset-0 z-0 pointer-events-none animate-pulse" aria-hidden>
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(150,120,255,0.6) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(150,120,255,0.6) 1.5px, transparent 1.5px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>
      
      {/* Radial lighting highlights */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)" }} />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(217,56,58,0.05) 0%, transparent 70%)" }} />

      {/* Sticky Navigation */}
      <StickyBar />

      {/* ── Header Section ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-12 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border bg-white/5 border-white/10 text-xs text-purple-400 font-bold uppercase tracking-widest">
          About Us
        </div>
        <h1 className="font-display font-black text-white leading-tight mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
          A Decade of <span className="text-gradient">Changing Lives</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-white/60 mb-12">
          Founded in 2015 with one belief: no student should have to choose between their dreams and their family. 
          Today, 10,000+ lives later, that belief drives everything we do.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:bg-white/10 hover:border-purple-500/30 hover:scale-105 duration-300"
              style={{ backdropFilter: "blur(12px)" }}
            >
              <div className="font-display font-black text-3xl md:text-4xl mb-1" style={{ color: stat.color }}>
                {stat.val}
              </div>
              <div className="text-white/40 text-xs sm:text-sm font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Values Section ── */}
      <section className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="badge badge-blue mb-4">Our Values</span>
          <h2 className="font-display font-black text-white text-3xl md:text-4xl">
            What We <span className="text-gradient">Stand For</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="group relative rounded-2xl p-6 transition-all duration-300 dark-card"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ background: v.bg, border: `1px solid ${v.border}` }}
              >
                {v.icon}
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">{v.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Mission & Awards Section ── */}
      <section className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Mission Description */}
          <div>
            <span className="badge badge-teal mb-4">Our Mission</span>
            <h2 className="font-display font-black text-white text-3xl md:text-4xl mb-6">
              Why We <span className="text-gradient">Exist</span>
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-5">
              When we started in 2015, thousands of brilliant Indian students were giving up on international education — 
              not because they weren't qualified, but because the process felt too opaque, too expensive, and too risky.
            </p>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-8">
              We built GEC to change that. By partnering directly with 100+ European universities, we removed the middlemen, 
              eliminated hidden fees, and created a transparent pathway that any Indian family can trust.
            </p>

            <ul className="space-y-4 mb-8">
              {missionBullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-white/70 text-sm sm:text-base">
                  <CircleCheckBig size={18} className="text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 rounded-2xl p-5 bg-purple-500/10 border border-purple-500/20">
              <Award size={28} className="text-purple-400 flex-shrink-0" />
              <p className="text-white/80 text-sm leading-relaxed">
                Recognised as <strong className="text-purple-300">India's Most Trusted Education Counselling Agency</strong>, 2023
              </p>
            </div>
          </div>

          {/* Awards List */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-white/90 text-lg mb-6 uppercase tracking-wider">
              Accreditation & Awards
            </h3>
            {awards.map((award, idx) => (
              <div
                key={award.title}
                className="flex items-center gap-4 rounded-2xl p-5 bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-white/10 hover:translate-x-1.5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-purple-500/10 border border-purple-500/25">
                  <Award size={20} className="text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="text-white font-semibold text-sm sm:text-base">{award.title}</div>
                  <div className="text-white/40 text-xs mt-0.5">{award.org}</div>
                </div>
                <span className="text-purple-400 text-sm font-bold">{award.year}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Leadership Section ── */}
      <section className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="mb-14">
          <span className="badge badge-blue mb-4">Leadership</span>
          <h2 className="font-display font-black text-white text-3xl md:text-4xl">
            Meet the <span className="text-gradient">Team</span>
          </h2>
          <p className="text-white/40 text-sm sm:text-base mt-2 max-w-md">
            Experienced counsellors who've lived the international education journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl">
          {team.map((member, i) => (
            <div
              key={member.name}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:scale-[1.02] hover:border-purple-500/30 transition-all duration-300"
            >
              {/* Fallback color visual card block since local assets might not resolve initially */}
              <div className="h-64 relative flex items-center justify-center bg-[#0d0a25] border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: `url(${member.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060418] to-transparent" />
                <Users size={48} className="text-white/10 absolute" />
              </div>
              <div className="p-6 relative z-10">
                <h3 className="font-display font-black text-white text-xl">{member.name}</h3>
                <div className="text-purple-400 text-sm font-bold mt-1 mb-3">{member.role}</div>
                <p className="text-white/60 text-sm leading-relaxed">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Presence / Offices Section ── */}
      <section className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="mb-14">
          <span className="badge badge-teal mb-4">Presence</span>
          <h2 className="font-display font-black text-white text-3xl md:text-4xl">
            Where We <span className="text-gradient">Operate</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offices.map((office) => (
            <div
              key={office.city}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl" aria-hidden="true">{office.flag}</div>
                <div>
                  <h4 className="font-display font-bold text-white text-base">{office.city}</h4>
                  <p className="text-white/40 text-xs">{office.country}</p>
                </div>
              </div>
              <span className="inline-block text-[10px] px-2.5 py-0.5 rounded-full font-bold bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-4 uppercase tracking-wider">
                {office.tag}
              </span>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{office.address}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative rounded-3xl p-10 md:p-14 text-center overflow-hidden bg-white/5 border border-white/10"
          style={{ backdropFilter: "blur(12px)" }}>
          
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-[0.05] pointer-events-none" 
            style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-[0.05] pointer-events-none" 
            style={{ background: "radial-gradient(circle, #D9383A, transparent 70%)" }} />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-purple-500/10 border border-purple-500/20">
              <Target size={28} className="text-purple-400" />
            </div>
            <h2 className="font-display font-black text-white text-2xl sm:text-3xl md:text-4xl mb-4">
              Ready to Begin Your <span className="text-gradient">Journey?</span>
            </h2>
            <p className="text-white/60 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Join 10,000+ students who trusted GEC to guide them to world-class universities. Your story starts here.
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
