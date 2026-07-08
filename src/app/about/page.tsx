import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import StickyBar from "@/components/skills/StickyBar";
import Footer from "@/components/skills/Footer";
import PlacementPlatform from "@/components/skills/PlacementPlatform";
import {
  Target,
  ShieldCheck,
  Quote,
  CheckCircle2,
  Monitor,
  BadgeCheck,
  Rocket,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | World Passport — Your Gateway to World-Class Education",
  description:
    "World Passport is dedicated to making international education accessible. Discover our values, accreditations, and leadership team.",
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
    desc: "Visionary leader driving World Passport's mission to make international education accessible to every student, regardless of background.",
    image: "/assets/team/edwin.jpeg",
    fallbackColor: "#7c3aed",
    quote: "Every student deserves a real shot at a global career — not just the ones who can afford it.",
  },
  {
    name: "Mujeeb T",
    role: "Director",
    desc: "Guiding strategic direction and partnerships to expand World Passport's global education network across Europe and the Gulf.",
    image: "/assets/team/mujeeb-t.jpg",
    fallbackColor: "#0F2537",
    quote: "We built our university partnerships to be transparent, accredited, and outcome-driven — nothing else earns trust.",
  },
];


const values = [
  {
    title: "Verified Partnerships",
    desc: "Every university we represent is accredited and vetted before it reaches our students — no unlicensed institutions, ever.",
    icon: <ShieldCheck size={22} className="text-purple-600" />,
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden fees, no surprise charges after enrollment. What we quote is what you pay, start to finish.",
    icon: <CheckCircle2 size={22} className="text-purple-600" />,
  },
  {
    title: "Outcome-Focused",
    desc: "From application to graduation to placement — we stay accountable for the result, not just the enrollment.",
    icon: <Target size={22} className="text-purple-600" />,
  },
];

function hasLocalAsset(relPath: string) {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", relPath));
  } catch {
    return false;
  }
}

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

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

      <StickyBar />

      {/* ── Hero (background image kept, centered title treatment) ── */}
      <section className="relative w-full min-h-[100vh] flex items-center justify-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1920"
            alt="University Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center text-white">
            <h1
              className="font-display font-black leading-tight tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
            >
              Who We Are
            </h1>
            <p className="mt-6 text-white/85 text-sm sm:text-base leading-relaxed max-w-xl">
              Empowering learners with globally recognized skill programs, international faculty, European university collaborations, and career-focused education for global opportunities.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[
                { icon: <Monitor size={16} />, value: "Free IELTS", label: "Coaching" },
                { icon: <BadgeCheck size={16} />, value: "ECTS Credits", label: "Certificate" },
                { icon: <Rocket size={16} />, value: "Placement Assurance", label: "Placement" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/15 border border-white/25 backdrop-blur-sm">
                  <div className="text-white">{s.icon}</div>
                  <div className="text-left">
                    <div className="text-white font-bold text-xs sm:text-sm">{s.value}</div>
                    <div className="text-white/60 text-[10px] uppercase tracking-wider">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-purple-700 bg-purple-100 border border-purple-200 uppercase tracking-wider mb-4">
              Our Approach
            </span>
            <h2 className="font-display font-black text-black text-3xl md:text-4xl mb-5 leading-tight">
              Built Around <span className="text-purple-700">Verified Partnerships</span>
            </h2>
            <div className="space-y-4 text-black/70 text-sm sm:text-base leading-relaxed">
              <p>
                World Passport exists to close a specific gap: talented students missing out on international education, not because they lack ability, but because the process is often opaque, expensive, and full of unverified agents promising things they can&apos;t deliver.
              </p>
              <p>
                We&apos;re the official representative for accredited institutions including the Canadian Institute of Technology and Mediterranean University of Albania — pairing ECTS-certified academic programs with real placement support through our SkillDad partnership network.
              </p>
              <p>
                We deliberately work with a short list of vetted universities rather than a long list of unverified ones. Every partnership on this site is one our own team has reviewed for accreditation status before a single student enrolls.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-[0.05] pointer-events-none"
              style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }} />
            <Quote size={28} className="text-purple-200 mb-4" />
            <p className="text-black/80 text-base sm:text-lg leading-relaxed font-medium mb-6">
              &quot;We don&apos;t measure success by enrollment numbers. We measure it by how many students actually graduate, get certified, and get placed.&quot;
            </p>
            <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: "#0F2537" }}>
                MT
              </div>
              <div>
                <div className="font-bold text-black text-sm">Mujeeb T</div>
                <div className="text-black/50 text-xs">Director, World Passport</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white/60 rounded-[2.5rem]">
        <div className="mb-14 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-purple-700 bg-purple-100 border border-purple-200 uppercase tracking-wider mb-4">
            Why Students Trust Us
          </span>
          <h2 className="font-display font-black text-black text-3xl md:text-4xl mb-3">
            Built on <span className="text-purple-700">Accountability</span>, Not Just Promises
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-5">
                {v.icon}
              </div>
              <h3 className="font-display font-black text-black text-lg mb-2">{v.title}</h3>
              <p className="text-black/60 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Placement Platform Section ── */}
      <PlacementPlatform />

      {/* ── Leadership Section — profile rows instead of a card grid ── */}
      <section className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-purple-700 bg-purple-100 border border-purple-200 uppercase tracking-wider mb-4">
            Leadership
          </span>
          <h2 className="font-display font-black text-black text-3xl md:text-4xl">
            Meet the <span className="text-purple-700">Team</span>
          </h2>
          <p className="text-black/60 text-sm sm:text-base mt-2 max-w-md">
            Experienced counsellors who&apos;ve lived the international education journey
          </p>
        </div>

        <div className="space-y-6 max-w-4xl">
          {team.map((member, i) => {
            const photoAvailable = hasLocalAsset(member.image);
            return (
              <div
                key={member.name}
                className={`flex flex-col ${i % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row"} gap-0 sm:gap-8 bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-lg hover:border-purple-500/30 transition-all duration-300 shadow-sm`}
              >
                <div className="w-full sm:w-56 h-56 sm:h-auto relative flex-shrink-0 overflow-hidden" style={{ background: `${member.fallbackColor}0d` }}>
                  {photoAvailable ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center text-white font-display font-black text-xl shadow-lg"
                        style={{ background: member.fallbackColor }}
                      >
                        {initials(member.name)}
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-7 sm:py-8 flex-1 flex flex-col justify-center">
                  <h3 className="font-display font-black text-black text-xl">{member.name}</h3>
                  <div className="text-purple-700 text-sm font-bold mt-0.5 mb-3">{member.role}</div>
                  <p className="text-black/70 text-sm leading-relaxed mb-4">{member.desc}</p>
                  <div className="flex items-start gap-2.5 pt-4 border-t border-slate-100">
                    <Quote size={16} className="text-purple-300 flex-shrink-0 mt-0.5" />
                    <p className="text-black/50 text-xs italic leading-relaxed">{member.quote}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
