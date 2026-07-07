"use client";

import React, { useState } from "react";
import Link from "next/link";
import StickyBar from "@/components/skills/StickyBar";
import { getMuaCourse } from "@/data/muaCourses";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  CalendarDays,
  ChevronDown,
  CircleCheckBig,
  Clock,
  FileCheck,
  GraduationCap,
  Layers,
  Monitor,
  Rocket,
  Wrench,
} from "lucide-react";

export default function MuaCourseDetails({ slug }: { slug: string }) {
  const [openModule, setOpenModule] = useState<number | null>(0);
  const course = getMuaCourse(slug);

  if (!course) {
    return (
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4 px-4 text-center">
        <StickyBar />
        <h1 className="font-black text-2xl text-gray-900 mt-24">Course not found</h1>
        <Link href="/skills/mediterranean" className="text-blue-600 font-semibold hover:underline">
          ← Back to Mediterranean University
        </Link>
      </main>
    );
  }

  const { color } = course;

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat relative"
      style={{ backgroundImage: "url('/mediterranean.png')" }}
    >
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(239,246,255,0.6) 0%, rgba(219,234,254,0.6) 30%, rgba(224,242,254,0.6) 60%, rgba(240,249,255,0.6) 100%)" }}
      />
      <div className="relative z-10">
        <StickyBar />

        {/* ── Back link + Hero banner ── */}
        <section className="px-4 sm:px-6 lg:px-8 pt-32 lg:pt-36 pb-4">
          <div className="max-w-6xl mx-auto">
            <Link href="/skills/mediterranean" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4 transition-colors">
              <ArrowLeft size={16} /> Back to Mediterranean University
            </Link>

            <div className="rounded-3xl overflow-hidden relative min-h-[260px] flex items-end">
              <div
                className="absolute inset-0"
                style={{ backgroundImage: "url('/mediterranean.png')", backgroundSize: "cover", backgroundPosition: "center" }}
              />
              <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${color}50 0%, ${color}EE 100%)` }} />
              <div className="absolute top-6 right-8 opacity-[0.08]">
                <GraduationCap size={150} className="text-white" />
              </div>

              <div className="relative z-10 p-8 sm:p-12 w-full">
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="px-4 py-1.5 rounded-full bg-white/25 text-white text-xs font-bold border border-white/30 backdrop-blur-sm">Professional Training</span>
                  <span className="px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-medium border border-white/20 flex items-center gap-1.5">
                    <Clock size={11} /> 6 Months
                  </span>
                </div>
                <h1 className="font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-3 leading-tight">{course.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
                  <span className="flex items-center gap-1.5"><Building2 size={15} /> Mediterranean University of Albania</span>
                  <span className="flex items-center gap-1.5">Training and Professional Development Department</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Quick stats ── */}
        <section className="px-4 sm:px-6 lg:px-8 py-3">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: <Clock size={18} />, sColor: "#F59E0B", value: "3 Month Course + 3 Month Internship", label: "Duration" },
                { icon: <Monitor size={18} />, sColor: "#3B82F6", value: "Free IELTS", label: "Coaching" },
                { icon: <BadgeCheck size={18} />, sColor: "#8B5CF6", value: "ECTS Credits", label: "Certificate" },
                { icon: <Rocket size={18} />, sColor: "#10B981", value: "Placement Assurance", label: "Placement" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${s.sColor}15`, color: s.sColor }}>
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
              {/* Overview */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                <h2 className="font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
                  <Layers size={20} style={{ color }} /> Course Overview
                </h2>
                <div className="space-y-4">
                  {course.overview.map((p, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>

              {/* Training Programme */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                <h2 className="font-bold text-xl text-gray-900 mb-2 flex items-center gap-2">
                  <FileCheck size={20} style={{ color }} /> Training Programme
                </h2>
                <p className="text-gray-500 text-sm mb-6">{course.totalHours} total — {course.modules.length} modules covering theory, practical exercises, and case studies.</p>
                <div className="space-y-3">
                  {course.modules.map((mod, i) => (
                    <div key={mod.title} className="rounded-2xl border border-gray-100 overflow-hidden">
                      <button
                        onClick={() => setOpenModule(openModule === i ? null : i)}
                        className="w-full flex items-center justify-between gap-3 p-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-xs" style={{ background: `${color}15`, color }}>
                            {i + 1}
                          </div>
                          <span className="text-gray-800 text-sm font-semibold truncate">{mod.title}</span>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <span className="text-[10px] px-2.5 py-1 rounded-full font-bold hidden sm:inline-block" style={{ background: `${color}10`, color }}>{mod.hours}</span>
                          <ChevronDown size={16} className={`text-gray-400 transition-transform ${openModule === i ? "rotate-180" : ""}`} />
                        </div>
                      </button>
                      {openModule === i && (
                        <div className="px-4 pb-4">
                          <p className="text-[10px] px-2.5 py-1 rounded-full font-bold inline-block mb-3 sm:hidden" style={{ background: `${color}10`, color }}>{mod.hours}</p>
                          <ul className="space-y-2">
                            {mod.topics.map((t) => (
                              <li key={t} className="flex items-start gap-2 text-sm text-gray-600">
                                <CircleCheckBig size={14} className="mt-0.5 flex-shrink-0" style={{ color }} />
                                {t}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Technologies */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                <h2 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-2">
                  <Wrench size={20} style={{ color }} /> Tools &amp; Technologies
                </h2>
                <div className="flex flex-wrap gap-3">
                  {course.tools.map((tool) => (
                    <div key={tool} className="flex items-center gap-2.5 px-5 py-3 rounded-2xl border border-gray-100 bg-gray-50 hover:shadow-md hover:-translate-y-0.5 transition-all">
                      <Wrench size={15} style={{ color }} />
                      <span className="text-gray-800 text-sm font-semibold">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schedule */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                <h2 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-2">
                  <CalendarDays size={20} style={{ color }} /> Online Schedule
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl p-5 bg-gray-50 border border-gray-100">
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Session Structure</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{course.schedule.sessions} = {course.totalHours}</p>
                  </div>
                  <div className="rounded-2xl p-5 bg-gray-50 border border-gray-100">
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Days</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{course.schedule.days}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-xs italic mt-4">{course.schedule.note}</p>
              </div>

              {/* Certification */}
              <div className="rounded-3xl p-8 border shadow-lg" style={{ background: `linear-gradient(135deg, ${color}08, ${color}04)`, borderColor: `${color}20` }}>
                <h2 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-2">
                  <Award size={20} style={{ color }} /> Certification
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">{course.certification}</p>
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
                  <h3 className="font-bold text-gray-900 text-lg">Enroll Today</h3>
                  <p className="text-gray-400 text-xs mt-1">Mediterranean University of Albania</p>
                </div>
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-start justify-between px-4 py-3 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-gray-500 text-sm flex items-center gap-2 mt-0.5"><Clock size={14} /> Duration</span>
                    <div className="text-right">
                      <span className="font-semibold text-sm text-gray-900 block">3 Month Course +</span>
                      <span className="font-semibold text-sm text-gray-900 block">3 Month Internship</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-gray-500 text-sm flex items-center gap-2"><Layers size={14} /> Modules</span>
                    <span className="font-semibold text-sm text-gray-900">{course.modules.length}</span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-gray-500 text-sm flex items-center gap-2"><CalendarDays size={14} /> Schedule</span>
                    <span className="font-semibold text-sm text-gray-900">{course.schedule.days}</span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-gray-500 text-sm flex items-center gap-2"><Award size={14} /> Pass Mark</span>
                    <span className="font-semibold text-sm text-gray-900">80%</span>
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
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-3xl p-10 text-center shadow-lg" style={{ background: `linear-gradient(135deg, ${color}, ${color}CC)` }}>
              <h2 className="font-black text-2xl sm:text-3xl text-white mb-3">Ready to Enroll?</h2>
              <p className="text-white/70 max-w-lg mx-auto mb-6 text-sm">
                Join the {course.title} program at Mediterranean University of Albania's Training and Professional Development Department.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="/skills#contact" className="px-8 py-3.5 rounded-full font-bold text-gray-900 bg-white shadow-lg flex items-center gap-2 text-sm hover:scale-105 transition-transform">
                  Book Consultation <ArrowRight size={15} />
                </a>
                <Link href="/skills/mediterranean" className="px-8 py-3.5 rounded-full font-semibold text-white/80 border border-white/30 hover:bg-white/10 text-sm flex items-center gap-2">
                  Browse All Programs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="bg-transparent text-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
              <div className="col-span-2 md:col-span-1">
                <Link href="/" className="inline-block mb-4">
                  <img src="/logo.png" alt="World Passport" className="h-8 w-auto object-contain brightness-0" />
                </Link>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-4">Pages</h4>
                <ul className="space-y-2.5">
                  <li><Link href="/" className="text-gray-600 text-sm hover:text-black transition-colors font-medium">Home</Link></li>
                  <li><Link href="/skills" className="text-gray-600 text-sm hover:text-black transition-colors font-medium">Skills</Link></li>
                  <li><Link href="/about" className="text-gray-600 text-sm hover:text-black transition-colors font-medium">About Us</Link></li>
                  <li><Link href="/skills#contact" className="text-gray-600 text-sm hover:text-black transition-colors font-medium">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-4">Legal</h4>
                <ul className="space-y-2.5">
                  <li><a href="#" className="text-gray-600 text-sm hover:text-black transition-colors font-medium">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-600 text-sm hover:text-black transition-colors font-medium">Terms &amp; Conditions</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-4">Contact</h4>
                <ul className="space-y-2.5">
                  <li><a href="tel:+919292173857" className="text-gray-600 text-sm hover:text-black transition-colors font-medium">+91 9292173857</a></li>
                  <li><a href="mailto:salesheadworldpassportskills@gmail.com" className="text-gray-600 text-sm hover:text-black transition-colors font-medium">salesheadworldpassportskills@gmail.com</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-300 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-gray-600 text-sm font-medium">© {new Date().getFullYear()} All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
