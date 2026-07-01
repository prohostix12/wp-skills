"use client";

import React, { useEffect } from "react";
import StickyBar from "@/components/skills/StickyBar";
import AOSProvider from "@/components/AOSProvider";
import { 
  Building2, 
  MapPin, 
  Globe, 
  BookOpen, 
  Users, 
  Trophy, 
  Monitor, 
  CheckCircle2, 
  Calendar,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Phone,
  Mail,
  DollarSign,
  Library,
  Wifi,
  Coffee
} from "lucide-react";
import Link from "next/link";

export default function MediterraneanDetails() {
  const color = "#3b82f6";
  const glow = "rgba(59,130,246,0.15)";

  return (
    <div className="bg-[#060418] min-h-screen text-slate-200 selection:bg-blue-500/30 font-sans">
      <AOSProvider />
      <StickyBar />

      {/* ── Hero Section ── */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#060418] via-transparent to-[#060418] z-10" />
          <div className="absolute inset-0 bg-[#060418]/60 z-10" />
          <img 
            src="/mediterranean.png" 
            alt="Mediterranean University Campus" 
            className="w-full h-full object-cover object-center opacity-40"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
              <Building2 size={14} className="text-blue-400" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">Partner University</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-black text-white mb-6 leading-[1.1]">
              Mediterranean <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">University</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-white mb-8 leading-relaxed">
              Based in Tirana, Mediterranean University of Albania is a recognized private higher education institution dedicated to academic excellence, research development, and international cooperation.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="#programs" className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                Explore Programs
              </Link>
              <a href="https://umu.edu.al/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold transition-all flex items-center gap-2">
                <Globe size={18} /> Official Website
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Stats ── */}
      <section className="py-12 border-b border-slate-200 relative z-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <BookOpen />, label: "Academic Programs", value: "4+" },
              { icon: <MapPin />, label: "Location", value: "Tirana, AL" },
              { icon: <Monitor />, label: "Delivery Mode", value: "Hybrid / Online" },
              { icon: <Briefcase />, label: "Career Support", value: "High Placement" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-2xl font-black text-black">{stat.value}</div>
                  <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Overview & Mission ── */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl lg:text-4xl font-display font-black text-white mb-6">
                Fostering <span className="text-blue-400">Innovation</span> & Global Perspectives
              </h2>
              <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
                <p>
                  Mediterranean University of Albania stands out for its commitment to preparing students for a rapidly changing global economy. We combine theoretical knowledge with practical applications.
                </p>
                <p>
                  Through international partnerships and a modern curriculum, we ensure that our graduates are highly competitive, whether they choose to build their careers locally or internationally.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <GraduationCap className="text-blue-400 mb-3" size={24} />
                  <h4 className="text-white font-bold mb-1">Modern Education</h4>
                  <p className="text-sm text-slate-400">Interactive and student-centered teaching methodologies.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <Trophy className="text-cyan-400 mb-3" size={24} />
                  <h4 className="text-white font-bold mb-1">Top Tier Faculty</h4>
                  <p className="text-sm text-slate-400">Learn from seasoned academics and industry professionals.</p>
                </div>
              </div>
            </div>

            <div className="relative" data-aos="fade-left">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl -z-10" />
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-[#0a0726] aspect-[4/3] flex items-center justify-center">
                <img src="/business.jpg" alt="Business and Education" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" />
                <div className="relative z-10 text-center p-8">
                  <div className="w-20 h-20 mx-auto bg-blue-600 rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(59,130,246,0.5)]">
                    <CheckCircle2 size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Officially Recognized</h3>
                  <p className="text-white">Fully accredited by national and international educational bodies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Academic Programs ── */}
      <section id="programs" className="py-24 bg-[#0a0726] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-5xl font-display font-black text-white mb-4">Available <span className="text-blue-400">Programs</span></h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Explore our specialized degrees designed to provide you with the skills demanded by today's job market.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Business Administration", type: "Bachelor's Degree", dur: "3 Years", desc: "Gain a comprehensive understanding of business operations, management, and strategy." },
              { title: "Finance & Accounting", type: "Bachelor's Degree", dur: "3 Years", desc: "Develop crucial skills in financial analysis, corporate finance, and modern accounting." },
              { title: "International Relations", type: "Bachelor's Degree", dur: "3 Years", desc: "Understand global politics, diplomacy, and international organizations." },
              { title: "Law", type: "Bachelor & Master", dur: "5 Years", desc: "A rigorous program covering civil, criminal, and international law." },
            ].map((prog, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.07] transition-all duration-300 flex flex-col h-full" data-aos="fade-up" data-aos-delay={i * 50}>
                <div className="text-xs font-bold text-blue-400 tracking-wider uppercase mb-2">{prog.type}</div>
                <h3 className="text-xl font-bold text-white mb-3">{prog.title}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow">{prog.desc}</p>
                <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-auto">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Calendar size={16} className="text-slate-500" /> {prog.dur}
                  </div>
                  <ArrowRight size={18} className="text-blue-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Admission Requirements ── */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-900/40 to-[#060418] border border-blue-500/20 rounded-3xl p-8 lg:p-16 relative overflow-hidden" data-aos="fade-up">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="grid lg:grid-cols-2 gap-12 relative z-10">
              <div>
                <h2 className="text-3xl lg:text-4xl font-display font-black text-white mb-6">Admission <span className="text-blue-400">Requirements</span></h2>
                <p className="text-slate-300 mb-8 text-lg">
                  Start your journey with Mediterranean University. Review the required documents and prepare your application today.
                </p>
                <a href="#apply" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-[#060418] font-bold transition-all hover:bg-slate-200 shadow-xl">
                  Start Application <ArrowRight size={18} />
                </a>
              </div>
              
              <div className="space-y-6">
                {[
                  { title: "High School Diploma", desc: "A notarized copy of your high school diploma." },
                  { title: "Language Proficiency", desc: "Proof of language proficiency depending on the program's language of instruction." },
                  { title: "ID / Passport", desc: "A valid copy of your identification document." },
                  { title: "Application Form", desc: "Completed and signed official university application form." }
                ].map((req, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1 border border-blue-500/30">
                      <CheckCircle2 size={16} className="text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">{req.title}</h4>
                      <p className="text-slate-400 text-sm">{req.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Campus & Facilities ── */}
      <section className="py-24 bg-[#0a0726] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-5xl font-display font-black text-white mb-4">Campus & <span className="text-blue-400">Facilities</span></h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Our campus is designed to provide an inspiring and comfortable environment for all our students.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Library />, title: "University Library", desc: "Rich collection of academic resources and quiet study areas." },
              { icon: <Monitor />, title: "IT Infrastructure", desc: "Modern computer labs and robust campus-wide internet connectivity." },
              { icon: <Users />, title: "Student Clubs", desc: "Various student organizations and clubs to enrich university life." },
              { icon: <Coffee />, title: "Cafeteria & Lounge", desc: "Social spaces offering a variety of dining and relaxation options." },
              { icon: <Trophy />, title: "Sports Facilities", desc: "Access to recreational and sports activities to maintain a healthy lifestyle." },
              { icon: <Building2 />, title: "Accessible Campus", desc: "A welcoming, easily accessible campus located in Tirana." }
            ].map((facility, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 border border-blue-500/20">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{facility.title}</h3>
                <p className="text-slate-400 text-sm">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tuition Fees ── */}
      <section className="py-24 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl lg:text-4xl font-display font-black text-white mb-6">Tuition & <span className="text-blue-400">Financial Aid</span></h2>
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                Mediterranean University provides an excellent return on your educational investment with highly competitive tuition fees and flexible payment models.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 size={20} className="text-blue-400" /> Excellence Scholarships for top students
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 size={20} className="text-blue-400" /> Social and family discounts available
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 size={20} className="text-blue-400" /> Options to pay in multiple installments
                </li>
              </ul>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm" data-aos="fade-left">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
                  <DollarSign size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Estimated Fees</h3>
                  <p className="text-slate-400 text-sm">Per Academic Year</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-white font-medium">Undergraduate Programs</span>
                  <span className="text-blue-400 font-bold text-lg">€2,000 - €2,800</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-white font-medium">Graduate Programs</span>
                  <span className="text-blue-400 font-bold text-lg">€2,500 - €3,200</span>
                </div>
              </div>
              
              <p className="text-xs text-slate-500 mt-6 text-center">
                *Fees are indicative and subject to change. Please consult the admissions office.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Details ── */}
      <section className="py-24 bg-[#0a0726] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-display font-black text-white mb-4">Get in <span className="text-blue-400">Touch</span></h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">Have questions about admissions, programs, or campus life? Our team is always ready to assist you.</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center">
              <Phone className="text-blue-400 mb-4" size={28} />
              <h4 className="text-white font-bold mb-2">Phone</h4>
              <p className="text-slate-400">+355 (0) 4 111 1111</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center">
              <Mail className="text-blue-400 mb-4" size={28} />
              <h4 className="text-white font-bold mb-2">Email</h4>
              <p className="text-slate-400">info@umu.edu.al</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center">
              <MapPin className="text-blue-400 mb-4" size={28} />
              <h4 className="text-white font-bold mb-2">Address</h4>
              <p className="text-slate-400 text-sm">Blv. Gjergj Fishta, Tirana, Albania</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
