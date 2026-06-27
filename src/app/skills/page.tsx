import type { Metadata } from "next";
import StickyBar from "@/components/skills/StickyBar";
import Hero from "@/components/skills/Hero";
import TrustStrip from "@/components/skills/TrustStrip";
import Problem from "@/components/skills/Problem";
import SolutionTimeline from "@/components/skills/SolutionTimeline";
import ValueStack from "@/components/skills/ValueStack";
import Tools from "@/components/skills/Tools";
import TargetAudience from "@/components/skills/TargetAudience";
import WhyWorldPassport from "@/components/skills/WhyWorldPassport";
import UniversityPartners from "@/components/skills/UniversityPartners";
import Certificates from "@/components/skills/Certificates";
import PlacementSupport from "@/components/skills/PlacementSupport";
import Testimonials from "@/components/skills/Testimonials";
import FAQ from "@/components/skills/FAQ";
import CTA from "@/components/skills/CTA";
import Contact from "@/components/skills/Contact";
import Footer from "@/components/skills/Footer";

export const metadata: Metadata = {
  title: "Skills Program | World Passport — Build Your Global Career",
  description:
    "A 6-month international skills program in collaboration with CIT (Canadian Institute of Technology). Earn certifications, IELTS coaching, assured internship, and placement support — from Kerala.",
  keywords:
    "international skills, CIT certification, IELTS coaching, internship Kerala, placement support, global career, World Passport skills",
  openGraph: {
    title: "Skills Program | World Passport",
    description:
      "Build your global career with CIT-certified training, IELTS, internship, and placement support.",
    type: "website",
  },
};

export default function SkillsPage() {
  return (
    <main className="text-slate-900 min-h-screen" style={{ background: "#F5F2EB" }}>
      {/* Section 1 — Sticky Navbar */}
      <StickyBar />

      {/* Section 2 — Hero (above the fold) */}
      {/* pt-16 accounts for the announcement bar (top-8 = 2rem) + nav height (h-16 = 4rem) */}
      <div className="pt-16">
        <Hero />
      </div>

      {/* Section 3 — Trust Strip */}
      <TrustStrip />

      {/* Section 4 — Problem */}
      <Problem />

      {/* Section 5 — Solution Timeline */}
      <SolutionTimeline />

      {/* Section 6 — Value Stack */}
      <ValueStack />

      {/* Section 7 — Industry Tools */}
      <Tools />

      {/* Section 8 — Target Audience */}
      <TargetAudience />

      {/* Section 8 — Why World Passport */}
      <WhyWorldPassport />

      {/* Section 9 — University Partners */}
      <UniversityPartners />

      {/* Section 10 — Certificates */}
      <Certificates />

      {/* Section 10 — Placement Support */}
      <PlacementSupport />

      {/* Section 11 — Testimonials / Social Proof */}
      <Testimonials />

      {/* Section 12 — FAQ */}
      <FAQ />

      {/* Section 13 — Final CTA */}
      <CTA />

      {/* Section 14 — Contact */}
      <Contact />

      {/* Section 15 — Footer */}
      <Footer />
    </main>
  );
}
