"use client";

import React, { useState } from "react";
import Link from "next/link";
import StickyBar from "@/components/skills/StickyBar";
import Footer from "@/components/skills/Footer";
import { muaCourses } from "@/data/muaCourses";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpen,
  Building2,
  Clock,
  ChevronDown,
  ChevronRight,
  CircleCheckBig,
  FileCheck,
  GraduationCap,
  Globe,
  MapPin,
  MessageCircle,
  Plane,
  Star,
} from "lucide-react";

const color = "#A855F7";

const quickStats = [
  { value: "€2k–5k/yr", label: "Tuition" },
  { value: "12+", label: "Programs" },
  { value: "English/Albanian", label: "Language" },
  { value: "ECTS", label: "Accreditation" },
];

const whyChoose = [
  "New Faculty of Medical Sciences building",
  "Central Tirana location",
  "Modern laboratory infrastructure",
  "Research development focus",
  "International cooperation programs",
  "SkillDad placement support",
];

const programs = muaCourses.map((c) => ({
  slug: c.slug,
  title: c.title,
  hours: c.totalHours,
  color: c.color,
  desc: c.overview[0].slice(0, 140).replace(/\s+\S*$/, "") + "…",
}));

const admissionRequirements = [
  "High school diploma or equivalent for Bachelor programs",
  "Bachelor degree for Master programs",
  "English proficiency (IELTS/TOEFL or equivalent)",
  "Valid passport and student visa eligibility",
  "Academic transcripts and recommendation letters",
  "Statement of purpose / motivation letter",
];

const faqs = [
  { q: "What are the entry requirements?", a: "Applicants need a high school diploma for Bachelor programs (or a Bachelor's degree for Master programs), proof of English proficiency, a valid passport, academic transcripts, and a statement of purpose." },
  { q: "Is the degree internationally recognized?", a: "Yes. Mediterranean University of Albania is an accredited institution and its ECTS-based programs are recognized across the European Higher Education Area and beyond." },
  { q: "What is the cost of living?", a: "Tirana is an affordable European capital — students typically budget €300–€500 per month for accommodation, food, and daily expenses, on top of tuition." },
  { q: "Do you help with visa applications?", a: "Yes, our GEC support team assists with the full visa process — documentation, appointment scheduling, and interview preparation — with a 98% visa success rate." },
  { q: "Will I get placement or internship support?", a: "Yes. Students get access to SkillDad placement support and MUA's central Tirana location, which connects students with neighboring companies and organizations for internships." },
  { q: "Can I work while studying?", a: "International students in Albania can generally work part-time alongside their studies, subject to visa conditions — our advisors can walk you through the specifics." },
];

export default function MediterraneanDetails() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main
      className="med-bg-image min-h-screen bg-cover bg-center bg-fixed bg-no-repeat relative"
      style={{ backgroundImage: "url('/mediterranean.png')" }}
    >
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(239,246,255,0.55) 0%, rgba(219,234,254,0.55) 30%, rgba(224,242,254,0.55) 60%, rgba(240,249,255,0.55) 100%)" }}
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.07] pointer-events-none" style={{ background: "radial-gradient(circle, #3B82F6, transparent)" }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.05] pointer-events-none" style={{ background: "radial-gradient(circle, #2563EB, transparent)" }} />

      <div className="relative z-10">
        <StickyBar />

        {/* ── Back link + Hero banner ── */}
        <section className="px-4 sm:px-6 lg:px-8 pt-32 lg:pt-36 pb-4">
          <div className="max-w-6xl mx-auto">
            <Link href="/skills#universities" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4 transition-colors">
              <ArrowLeft size={16} /> Back to Universities
            </Link>

            <div className="rounded-3xl overflow-hidden relative min-h-[320px] flex items-end">
              <div
                className="absolute inset-0"
                style={{ backgroundImage: "url('/mediterranean.png')", backgroundSize: "cover", backgroundPosition: "center" }}
              />
              <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${color}30 0%, ${color}EE 100%)` }} />
              <div className="absolute top-6 right-8 opacity-[0.08]">
                <GraduationCap size={180} className="text-white" />
              </div>

              <div className="relative z-10 p-8 sm:p-12 w-full">
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="px-4 py-1.5 rounded-full bg-white/25 text-white text-xs font-bold border border-white/30 backdrop-blur-sm">🇦🇱 Albania</span>
                  <span className="px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-medium border border-white/20 flex items-center gap-1.5">
                    <MapPin size={11} /> Tirana
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-medium border border-white/20 flex items-center gap-1.5">
                    <Award size={11} /> Accredited
                  </span>
                </div>
                <h1 className="font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-3 leading-tight">
                  Mediterranean University of Albania
                </h1>
                <p className="text-white/70 text-base sm:text-lg max-w-2xl">
                  A recognized European private institution in the heart of Tirana with a modern Faculty of Medical Sciences campus and state-of-the-art laboratories.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Quick stats ── */}
        <section className="px-4 sm:px-6 lg:px-8 py-3">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {quickStats.map((s) => (
                <div key={s.label} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}15`, color }}>
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <div className="text-gray-900 font-bold text-sm">{s.value}</div>
                    <div className="text-gray-400 text-[10px] uppercase tracking-wider">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Main content ── */}
        <section className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">
            {/* Left column */}
            <div className="lg:col-span-2 space-y-6">
              {/* About */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                <h2 className="font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
                  <Building2 size={20} style={{ color }} /> About Mediterranean University of Albania
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  The Mediterranean University of Albania (MUA) is located in the heart of Tirana with state-of-the-art infrastructure. The university recently inaugurated a new Faculty of Medical Sciences campus equipped with modern laboratories. MUA&apos;s central location gives students countless opportunities to work with neighboring companies and organizations. The university is dedicated to academic excellence, research development, and international cooperation.
                </p>
              </div>

              {/* Why Choose */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                <h2 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-2">
                  <Star size={20} style={{ color }} /> Why Choose This University?
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {whyChoose.map((item) => (
                    <div key={item} className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                      <CircleCheckBig size={16} className="flex-shrink-0 mt-0.5" style={{ color }} />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Programs */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                <h2 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-2">
                  <BookOpen size={20} style={{ color }} /> Professional Training Programs
                </h2>
                <p className="text-gray-500 text-sm mb-5">Delivered by the Training and Professional Development Department at Mediterranean University of Albania.</p>
                <div className="space-y-3">
                  {programs.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/skills/mua-course/${p.slug}`}
                      className="group flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all"
                    >
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${p.color}15`, color: p.color }}>
                        <GraduationCap size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-gray-900 text-sm font-bold">{p.title}</h4>
                        <p className="text-gray-500 text-xs mt-0.5 line-clamp-1">{p.desc}</p>
                      </div>
                      <span className="text-[10px] px-2.5 py-1 rounded-full font-bold flex items-center gap-1 flex-shrink-0" style={{ background: `${p.color}10`, color: p.color }}>
                        <Clock size={9} /> {p.hours}
                      </span>
                      <ChevronRight size={16} className="text-gray-300 group-hover:text-gray-500 flex-shrink-0 transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Admission Requirements */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                <h2 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-2">
                  <FileCheck size={20} style={{ color }} /> Admission Requirements
                </h2>
                <div className="space-y-3">
                  {admissionRequirements.map((req) => (
                    <div key={req} className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                      <CircleCheckBig size={16} className="flex-shrink-0" style={{ color }} />
                      <span className="text-gray-700 text-sm">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                <h2 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-2">
                  <MessageCircle size={20} style={{ color }} /> Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {faqs.map((item, i) => (
                    <div key={item.q} className="rounded-2xl border border-gray-100 overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-gray-800 text-sm font-semibold pr-4">{item.q}</span>
                        <ChevronDown size={16} className={`text-gray-400 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                      </button>
                      {openFaq === i && (
                        <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">{item.a}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg sticky top-24">
                <div className="text-center mb-5">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${color}, ${color}CC)`, boxShadow: `0 10px 25px ${color}35` }}
                  >
                    <GraduationCap size={28} className="text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">Mediterranean University of Albania</h3>
                  <p className="text-gray-400 text-xs mt-1">🇦🇱 Tirana, Albania</p>
                </div>
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-gray-500 text-sm flex items-center gap-2"><MapPin size={14} /> Location</span>
                    <span className="font-semibold text-sm text-gray-900">Tirana, Albania</span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-gray-500 text-sm flex items-center gap-2"><Award size={14} /> Ranking</span>
                    <span className="font-semibold text-sm text-gray-900">Accredited</span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-gray-500 text-sm flex items-center gap-2"><BadgeCheck size={14} /> Status</span>
                    <span className="font-semibold text-sm text-gray-900">Accredited</span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-gray-500 text-sm flex items-center gap-2"><Globe size={14} /> Recognition</span>
                    <span className="font-semibold text-sm text-gray-900">International</span>
                  </div>
                </div>
                <a
                  href="/skills#contact"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-bold transition-all hover:scale-[1.02] shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${color}, ${color}CC)`, boxShadow: `0 8px 20px ${color}30` }}
                >
                  Apply Now <ArrowRight size={16} />
                </a>
                <p className="text-center text-[10px] text-gray-400 mt-3">Free consultation available</p>
              </div>

              <div className="rounded-3xl p-6 border shadow-lg" style={{ background: `linear-gradient(135deg, ${color}08, ${color}04)`, borderColor: `${color}20` }}>
                <Plane size={24} className="mb-3" style={{ color }} />
                <h4 className="font-bold text-gray-900 text-sm mb-2">GEC Support</h4>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">From application to arrival — visa support, accommodation help, and on-ground assistance.</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-xl p-3 bg-white border border-gray-100 text-center">
                    <div className="font-black text-lg" style={{ color }}>98%</div>
                    <div className="text-gray-400 text-[9px] uppercase">Visa Success</div>
                  </div>
                  <div className="rounded-xl p-3 bg-white border border-gray-100 text-center">
                    <div className="font-black text-lg" style={{ color }}>24/7</div>
                    <div className="text-gray-400 text-[9px] uppercase">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-3xl p-10 text-center shadow-lg" style={{ background: `linear-gradient(135deg, ${color}, ${color}CC)` }}>
              <h2 className="font-black text-2xl sm:text-3xl text-white mb-3">Ready to Study at Mediterranean University of Albania?</h2>
              <p className="text-white/70 max-w-lg mx-auto mb-6 text-sm">
                Book a free consultation with our advisors. We&apos;ll guide you through admission, visa, and arrival.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="/skills#contact" className="px-8 py-3.5 rounded-full font-bold text-gray-900 bg-white shadow-lg flex items-center gap-2 text-sm hover:scale-105 transition-transform">
                  Book Consultation <ArrowRight size={15} />
                </a>
                <Link href="/skills#universities" className="px-8 py-3.5 rounded-full font-semibold text-white/80 border border-white/30 hover:bg-white/10 text-sm flex items-center gap-2">
                  <Globe size={15} /> Explore All Destinations
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
