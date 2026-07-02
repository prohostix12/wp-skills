"use client";

import React from "react";
import Link from "next/link";
import StickyBar from "@/components/skills/StickyBar";
import Footer from "@/components/skills/Footer";
import { citCourses } from "@/data/citCourses";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpen,
  Building2,
  ChevronRight,
  CircleCheckBig,
  Clock,
  GraduationCap,
  Globe,
  MapPin,
  Monitor,
  Rocket,
  Shield,
  Star,
  Users,
  Zap,
} from "lucide-react";

const CIT_LOGO = "https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Logo_of_the_Canadian_Institute_of_Technology.svg/250px-Logo_of_the_Canadian_Institute_of_Technology.svg.png";

const quickStats = [
  { icon: <BookOpen size={18} />, color: "#3B82F6", value: "6 Courses", label: "Programs" },
  { icon: <MapPin size={18} />, color: "#F59E0B", value: "Tirana, Albania", label: "Location" },
  { icon: <BadgeCheck size={18} />, color: "#8B5CF6", value: "ECTS Credits", label: "Accreditation" },
  { icon: <Rocket size={18} />, color: "#10B981", value: "SkillDad", label: "Placement" },
];

const whyChoose = [
  { icon: <BadgeCheck size={18} />, title: "ECTS Accredited", desc: "European Credit Transfer System — recognized in 48+ countries" },
  { icon: <Globe size={18} />, title: "Bologna Process", desc: "Part of the European Higher Education Area standards" },
  { icon: <Award size={18} />, title: "Quality Education", desc: "Rigorous academic standards with industry-aligned curriculum" },
  { icon: <Users size={18} />, title: "Expert Faculty", desc: "Learn from experienced professionals and academic researchers" },
  { icon: <Rocket size={18} />, title: "SkillDad Placement", desc: "Guaranteed access to 500+ global companies after certification" },
  { icon: <Shield size={18} />, title: "Recognized Globally", desc: "Employers worldwide value European university qualifications" },
];

const programs = citCourses.map((c) => ({
  color: c.color,
  title: c.title,
  duration: c.duration,
  tools: c.tools.join(", "),
  image: c.image,
  points: c.points,
  href: `/skills/course/${c.slug}`,
}));

const eligibility = [
  "Open to all nationalities — no geographic restrictions",
  "Basic computer literacy and internet access required",
  "English proficiency (intermediate level or above)",
  "No prior domain experience needed for most programs",
  "Minimum age: 18 years",
  "Commitment to complete coursework and assessments",
];

const accreditation = [
  { title: "ECTS Credits", desc: "European Credit Transfer System" },
  { title: "Bologna Process", desc: "European Higher Education Area" },
  { title: "International Recognition", desc: "Valid in 48+ countries" },
];

const color = "#3B82F6";

export default function CITDetails() {
  return (
    <main
      className="cit-bg-image min-h-screen bg-cover bg-center bg-fixed bg-no-repeat relative"
      style={{ backgroundImage: "url('/page-bg-skill.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/20" />
      <div className="relative z-10">
        <StickyBar />

        {/* ── Back link + Hero banner ── */}
        <section className="px-4 sm:px-6 lg:px-8 pt-32 lg:pt-36 pb-4">
          <div className="max-w-6xl mx-auto">
            <Link href="/skills#universities" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4 transition-colors">
              <ArrowLeft size={16} /> Back to Skill Programs
            </Link>

            <div className="rounded-3xl overflow-hidden relative min-h-[320px] flex items-end">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "url('/canedian.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${color}30 0%, ${color}EE 100%)` }} />
              <div className="absolute top-6 right-8 opacity-[0.08]">
                <GraduationCap size={180} className="text-white" />
              </div>

              <div className="relative z-10 p-8 sm:p-12 w-full">
                <div className="flex items-end justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-5">
                      <span className="px-4 py-1.5 rounded-full bg-white/25 text-white text-xs font-bold border border-white/30 backdrop-blur-sm">ECTS Certified</span>
                      <span className="px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-medium border border-white/20 flex items-center gap-1.5">
                        <MapPin size={11} /> Tirana, Albania
                      </span>
                      <span className="px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-medium border border-white/20 flex items-center gap-1.5">
                        <BookOpen size={11} /> 6 Programs
                      </span>
                    </div>
                    <h1 className="font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-3 leading-tight">
                      Canadian Institute of Technology (CIT)
                    </h1>
                    <p className="text-white/70 text-base sm:text-lg max-w-2xl">
                      A recognized European higher education institution committed to internationally aligned academic excellence, innovation, and applied learning.
                    </p>
                  </div>
                  <div className="hidden sm:flex w-24 h-24 rounded-2xl bg-white/95 backdrop-blur-sm items-center justify-center p-3 shadow-xl border border-white/50 flex-shrink-0">
                    <img src={CIT_LOGO} alt="Canadian Institute of Technology logo" className="w-full h-full object-contain" />
                  </div>
                </div>
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
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${s.color}15`, color: s.color }}>
                    {s.icon}
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
                  <Building2 size={20} style={{ color }} /> About the University
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <span className="text-gray-900 font-semibold">Canadian Institute of Technology (CIT)</span> is an accredited European higher education institution located in Tirana, Albania. The university offers ECTS-certified professional skill programs designed to equip students with industry-ready competencies recognized across 48+ European countries.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  All programs are aligned with the Bologna Process framework and delivered through a combination of expert instruction, hands-on projects, and mentorship. Graduates receive internationally recognized certificates with guaranteed placement support through SkillDad.
                </p>
              </div>

              {/* Why Choose */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                <h2 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-2">
                  <Star size={20} style={{ color }} /> Why Choose Canadian Institute of Technology?
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {whyChoose.map((item) => (
                    <div key={item.title} className="rounded-2xl p-5 bg-gray-50 border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: `${color}15`, color }}>
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Programs */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                <h2 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-2">
                  <BookOpen size={20} style={{ color }} /> Programs Offered
                </h2>
                <div className="space-y-4">
                  {programs.map((prog) => (
                    <div key={prog.title} className="group rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all">
                      <div className="flex flex-col sm:flex-row">
                        <div className="relative w-full sm:w-48 h-36 sm:h-auto flex-shrink-0 overflow-hidden">
                          <div
                            className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: `url('${prog.image}')`, backgroundSize: "cover", backgroundPosition: "center" }}
                          />
                          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${prog.color}80, ${prog.color}40)` }} />
                        </div>
                        <div className="flex-1 p-5">
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <h4 className="font-bold text-gray-900 text-base">{prog.title}</h4>
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${prog.color}15`, color: prog.color }}>
                              <BookOpen size={16} />
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="text-[10px] px-2.5 py-1 rounded-full font-bold flex items-center gap-1" style={{ background: `${prog.color}10`, color: prog.color }}>
                              <Clock size={9} /> {prog.duration}
                            </span>
                            <span className="text-[10px] px-2.5 py-1 rounded-full font-bold flex items-center gap-1" style={{ background: `${prog.color}10`, color: prog.color }}>
                              <Monitor size={9} /> Online
                            </span>
                            <span className="text-[10px] px-2.5 py-1 rounded-full font-bold flex items-center gap-1 bg-gray-100 text-gray-600">
                              <Zap size={9} /> {prog.tools}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4">
                            {prog.points.map((p) => (
                              <div key={p} className="flex items-center gap-1.5">
                                <CircleCheckBig size={11} className="flex-shrink-0" style={{ color: prog.color }} />
                                <span className="text-gray-600 text-xs">{p}</span>
                              </div>
                            ))}
                          </div>
                          <a href={prog.href} className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors" style={{ color: prog.color }}>
                            View Course Details <ChevronRight size={14} />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Eligibility */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                <h2 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-2">
                  <Shield size={20} style={{ color }} /> Eligibility &amp; Requirements
                </h2>
                <div className="space-y-3">
                  {eligibility.map((req) => (
                    <div key={req} className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                      <CircleCheckBig size={16} className="flex-shrink-0" style={{ color }} />
                      <span className="text-gray-700 text-sm">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg sticky top-24">
                <div className="text-center mb-5">
                  <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-3 shadow-lg border border-gray-100 p-2">
                    <img src={CIT_LOGO} alt="Canadian Institute of Technology logo" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">Canadian Institute of Technology</h3>
                  <p className="text-gray-400 text-xs mt-1">Tirana, Albania</p>
                </div>
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-gray-500 text-sm flex items-center gap-2"><BookOpen size={14} /> Programs</span>
                    <span className="font-semibold text-sm text-gray-900">6 Courses</span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-gray-500 text-sm flex items-center gap-2"><BadgeCheck size={14} /> Certificate</span>
                    <span className="font-semibold text-sm text-blue-600">ECTS Credits</span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-gray-500 text-sm flex items-center gap-2"><Rocket size={14} /> Placement</span>
                    <span className="font-semibold text-sm text-emerald-600">SkillDad</span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-gray-500 text-sm flex items-center gap-2"><Globe size={14} /> Recognition</span>
                    <span className="font-semibold text-sm text-purple-600">48+ Countries</span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-gray-500 text-sm flex items-center gap-2"><MapPin size={14} /> Location</span>
                    <span className="font-semibold text-sm text-gray-900">Tirana, Albania</span>
                  </div>
                </div>
                <a
                  href="/skills#contact"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-bold transition-all hover:scale-[1.02] shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${color}, ${color}CC)`, boxShadow: `0 8px 20px ${color}30` }}
                >
                  Enroll Now <ArrowRight size={16} />
                </a>
                <p className="text-center text-[10px] text-gray-400 mt-3">Limited seats available</p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg">
                <h4 className="font-bold text-gray-900 text-sm mb-4 flex items-center gap-2">
                  <Award size={16} style={{ color }} /> Accreditation
                </h4>
                <div className="space-y-3">
                  {accreditation.map((a) => (
                    <div key={a.title} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                      <BadgeCheck size={16} className="flex-shrink-0 mt-0.5" style={{ color }} />
                      <div>
                        <div className="text-gray-900 text-sm font-semibold">{a.title}</div>
                        <div className="text-gray-400 text-xs">{a.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl p-6 border shadow-lg" style={{ background: `linear-gradient(135deg, ${color}08, ${color}04)`, borderColor: `${color}20` }}>
                <Rocket size={24} className="mb-3" style={{ color }} />
                <h4 className="font-bold text-gray-900 text-sm mb-2">SkillDad Placement</h4>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">Complete your course and get guaranteed placement access with 500+ companies worldwide.</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-xl p-3 bg-white border border-gray-100 text-center">
                    <div className="font-black text-lg" style={{ color }}>500+</div>
                    <div className="text-gray-400 text-[9px] uppercase">Companies</div>
                  </div>
                  <div className="rounded-xl p-3 bg-white border border-gray-100 text-center">
                    <div className="font-black text-lg" style={{ color }}>95%</div>
                    <div className="text-gray-400 text-[9px] uppercase">Success</div>
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
              <h2 className="font-black text-2xl sm:text-3xl text-white mb-3">Ready to Start Your Journey?</h2>
              <p className="text-white/70 max-w-lg mx-auto mb-6 text-sm">
                Enroll in an ECTS-certified program from Canadian Institute of Technology and launch your global career with SkillDad placement.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="/skills#contact" className="px-8 py-3.5 rounded-full font-bold text-gray-900 bg-white shadow-lg flex items-center gap-2 text-sm hover:scale-105 transition-transform">
                  Apply Now <ArrowRight size={15} />
                </a>
                <Link href="/skills" className="px-8 py-3.5 rounded-full font-semibold text-white/80 border border-white/30 hover:bg-white/10 text-sm flex items-center gap-2">
                  <BookOpen size={15} /> Browse All Courses
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
