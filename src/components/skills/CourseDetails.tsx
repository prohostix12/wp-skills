"use client";

import React, { useState } from "react";
import Link from "next/link";
import StickyBar from "@/components/skills/StickyBar";
import { getCitCourse } from "@/data/citCourses";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BadgeCheck,
  Briefcase,
  Calendar,
  ChevronDown,
  CircleCheckBig,
  Clock,
  FileCheck,
  Globe,
  GraduationCap,
  Layers,
  MessageCircle,
  Monitor,
  Rocket,
  Star,
  Target,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";

const learningOutcomes = [
  { icon: <TrendingUp size={18} />, title: "Industry-Ready Skills", desc: "Master practical skills demanded by top employers worldwide" },
  { icon: <Globe size={18} />, title: "Global Recognition", desc: "ECTS certificate recognized across 48+ countries" },
  { icon: <Briefcase size={18} />, title: "Portfolio Projects", desc: "Build real-world projects to showcase to employers" },
  { icon: <Users size={18} />, title: "Professional Network", desc: "Connect with peers and industry mentors globally" },
];

const careerRoles = ["Industry Professional", "Freelance Consultant", "Team Lead", "Project Manager", "Domain Specialist", "Startup Founder"];

const eligibility = [
  "Open to all nationalities — no geographic restrictions",
  "Basic computer literacy and internet access",
  "English proficiency (intermediate level or above)",
  "No prior domain experience needed",
  "Minimum age: 18 years",
  "Commitment to complete coursework",
];

const faqs = [
  { q: "What certificate will I receive?", a: "You'll receive an internationally recognized ECTS certificate from Canadian Institute of Technology, valid across 48+ European countries." },
  { q: "Is this course fully online?", a: "Yes, the program is delivered fully online with live instructor sessions, hands-on projects, and mentorship." },
  { q: "What are the prerequisites?", a: "No prior domain experience is needed for most learners — just basic computer literacy, internet access, and intermediate English proficiency." },
  { q: "Will I get placement support?", a: "Yes. SkillDad provides dedicated placement support with access to 500+ partner companies after certification." },
  { q: "How long does the course take?", a: "Course duration varies by program — see the duration badge above for this course's exact length." },
];

export default function CourseDetails({ slug }: { slug: string }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const course = getCitCourse(slug);

  if (!course) {
    return (
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4 px-4 text-center">
        <StickyBar />
        <h1 className="font-black text-2xl text-gray-900 mt-24">Course not found</h1>
        <Link href="/skills/cit" className="text-blue-600 font-semibold hover:underline">
          ← Back to CIT programs
        </Link>
      </main>
    );
  }

  const { color } = course;

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat relative"
      style={{ backgroundImage: "url('/page-bg-skill.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/20" />
      <div className="relative z-10">
        <StickyBar />

        {/* ── Back link + Hero banner ── */}
        <section className="px-4 sm:px-6 lg:px-8 pt-32 lg:pt-36 pb-4">
          <div className="max-w-6xl mx-auto">
            <Link href="/skills/cit" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4 transition-colors">
              <ArrowLeft size={16} /> Back to courses
            </Link>

            <div className="rounded-3xl overflow-hidden relative min-h-[300px] flex items-end">
              <div
                className="absolute inset-0"
                style={{ backgroundImage: `url('${course.image}')`, backgroundSize: "cover", backgroundPosition: "center" }}
              />
              <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${color}50 0%, ${color}EE 100%)` }} />
              <div className="absolute top-6 right-8 opacity-[0.08]">
                <GraduationCap size={150} className="text-white" />
              </div>

              <div className="relative z-10 p-8 sm:p-12 w-full">
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="px-4 py-1.5 rounded-full bg-white/25 text-white text-xs font-bold border border-white/30 backdrop-blur-sm">🇪🇺 ECTS Certified</span>
                  <span className="px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-medium border border-white/20 flex items-center gap-1.5">
                    <Clock size={11} /> {course.duration}
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-medium border border-white/20 flex items-center gap-1.5">
                    <Monitor size={11} /> Online
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-emerald-400/25 text-emerald-100 text-xs font-medium border border-emerald-400/30 flex items-center gap-1.5">
                    <Rocket size={11} /> SkillDad Placement
                  </span>
                </div>
                <h1 className="font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-3 leading-tight">{course.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
                  <span className="flex items-center gap-1.5"><GraduationCap size={15} /> Canadian Institute of Technology (CIT)</span>
                  <span className="flex items-center gap-1.5">Tirana, Albania</span>
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
                { icon: <Clock size={18} />, sColor: "#F59E0B", value: course.duration, label: "Duration" },
                { icon: <Monitor size={18} />, sColor: "#3B82F6", value: "Online", label: "Delivery" },
                { icon: <BadgeCheck size={18} />, sColor: "#8B5CF6", value: "ECTS Credits", label: "Certificate" },
                { icon: <Rocket size={18} />, sColor: "#10B981", value: "Guaranteed", label: "Placement" },
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
              {/* Course Overview */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                <h2 className="font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
                  <Layers size={20} style={{ color }} /> Course Overview
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  This {course.duration} program from <span className="text-gray-900 font-semibold">Canadian Institute of Technology (CIT)</span> is designed to equip you with industry-ready skills through theoretical knowledge and practical application. Upon completion, you receive an internationally recognized ECTS certificate valid across 48+ European countries.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The program is delivered online with live instructor sessions, hands-on projects, and mentorship. SkillDad provides dedicated placement support to ensure your career growth after certification.
                </p>
              </div>

              {/* What You Will Learn */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                <h2 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-2">
                  <BadgeCheck size={20} style={{ color }} /> What You Will Learn
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {course.learn.map((item) => (
                    <div key={item} className="flex items-start gap-3 p-4 rounded-2xl border border-gray-100 bg-gray-50 hover:shadow-md hover:-translate-y-0.5 transition-all">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${color}15`, color }}>
                        <CircleCheckBig size={14} />
                      </div>
                      <span className="text-gray-700 text-sm font-medium">{item}</span>
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

              {/* Learning Outcomes */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                <h2 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-2">
                  <Target size={20} style={{ color }} /> Learning Outcomes
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {learningOutcomes.map((item) => (
                    <div key={item.title} className="rounded-2xl p-5 bg-gray-50 border border-gray-100 hover:shadow-md transition-all">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: `${color}15`, color }}>
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Opportunities */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                <h2 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-2">
                  <Briefcase size={20} style={{ color }} /> Career Opportunities
                </h2>
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { icon: <Award size={20} />, title: "European ECTS", desc: "Recognized in 48+ countries" },
                    { icon: <Rocket size={20} />, title: "SkillDad Placement", desc: "500+ partner companies" },
                    { icon: <Star size={20} />, title: "95% Success Rate", desc: "Students placed after completion" },
                  ].map((stat) => (
                    <div key={stat.title} className="text-center p-5 rounded-2xl bg-gray-50 border border-gray-100">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: `${color}15`, color }}>
                        {stat.icon}
                      </div>
                      <h4 className="font-bold text-gray-900 text-sm">{stat.title}</h4>
                      <p className="text-gray-500 text-xs mt-1">{stat.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl p-5 bg-gray-50 border border-gray-100">
                  <h4 className="font-bold text-gray-900 text-sm mb-3">Potential career roles:</h4>
                  <div className="flex flex-wrap gap-2">
                    {careerRoles.map((role) => (
                      <span key={role} className="text-xs px-3 py-1.5 rounded-full bg-white text-gray-600 border border-gray-200 font-medium">{role}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Eligibility */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                <h2 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-2">
                  <FileCheck size={20} style={{ color }} /> Eligibility
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
                  <h3 className="font-bold text-gray-900 text-lg">Enroll Today</h3>
                  <p className="text-gray-400 text-xs mt-1">Start your career transformation</p>
                </div>
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-gray-500 text-sm flex items-center gap-2"><Clock size={14} /> Duration</span>
                    <span className="font-semibold text-sm text-gray-900">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-gray-500 text-sm flex items-center gap-2"><Monitor size={14} /> Mode</span>
                    <span className="font-semibold text-sm text-gray-900">Online</span>
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
                    <span className="text-gray-500 text-sm flex items-center gap-2"><Calendar size={14} /> Start Date</span>
                    <span className="font-semibold text-sm text-gray-900">Rolling Admission</span>
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
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-3xl p-10 text-center shadow-lg" style={{ background: `linear-gradient(135deg, ${color}, ${color}CC)` }}>
              <h2 className="font-black text-2xl sm:text-3xl text-white mb-3">Ready to Enroll in This Course?</h2>
              <p className="text-white/70 max-w-lg mx-auto mb-6 text-sm">
                Join {course.title} at Canadian Institute of Technology and launch your global career with SkillDad placement.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="/skills#contact" className="px-8 py-3.5 rounded-full font-bold text-gray-900 bg-white shadow-lg flex items-center gap-2 text-sm hover:scale-105 transition-transform">
                  Apply Now <ArrowRight size={15} />
                </a>
                <Link href="/skills/cit" className="px-8 py-3.5 rounded-full font-semibold text-white/80 border border-white/30 hover:bg-white/10 text-sm flex items-center gap-2">
                  Browse All Courses
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
              <div className="col-span-2 md:col-span-1">
                <Link href="/" className="inline-block mb-4">
                  <img src="/logo.png" alt="World Passport" className="h-8 w-auto object-contain brightness-0 invert" />
                </Link>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-4">Pages</h4>
                <ul className="space-y-2.5">
                  <li><Link href="/" className="text-gray-400 text-sm hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="/skills" className="text-gray-400 text-sm hover:text-white transition-colors">Skills</Link></li>
                  <li><Link href="/about" className="text-gray-400 text-sm hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="/skills#contact" className="text-gray-400 text-sm hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
                <ul className="space-y-2.5">
                  <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Terms &amp; Conditions</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
                <ul className="space-y-2.5">
                  <li><a href="tel:+919292173857" className="text-gray-400 text-sm hover:text-white transition-colors">+91 9292173857</a></li>
                  <li><a href="mailto:smworldpassportskillacademy@gmail.com" className="text-gray-400 text-sm hover:text-white transition-colors">smworldpassportskillacademy@gmail.com</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-sm">© {new Date().getFullYear()} All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
