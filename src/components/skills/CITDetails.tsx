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

export default function CITDetails() {
  const color = "#7c3aed";
  const glow = "rgba(124,58,237,0.15)";

  return (
    <div className="bg-[#060418] min-h-screen text-slate-200 selection:bg-purple-500/30 font-sans">
      <AOSProvider />
      <StickyBar />

      {/* ── Hero Section ── */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#060418] via-transparent to-[#060418] z-10" />
          <div className="absolute inset-0 bg-[#060418]/60 z-10" />
          <img 
            src="/canedian.png" 
            alt="CIT Campus" 
            className="w-full h-full object-cover object-center opacity-50"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
              <Building2 size={14} className="text-purple-400" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">Partner University</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-black text-white mb-6 leading-[1.1]">
              Canadian Institute of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Technology</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-white mb-8 leading-relaxed">
              Based in Tirana, CIT is a recognized international private higher education institution dedicated to academic excellence, research development, and global cooperation.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="#programs" className="px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold transition-all shadow-[0_0_30px_rgba(124,58,237,0.3)]">
                Explore Programs
              </Link>
              <a href="https://cit.edu.al/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold transition-all flex items-center gap-2">
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
              { icon: <BookOpen />, label: "Academic Programs", value: "6+" },
              { icon: <MapPin />, label: "Location", value: "Tirana, AL" },
              { icon: <Monitor />, label: "Delivery Mode", value: "Hybrid / Online" },
              { icon: <Briefcase />, label: "Career Support", value: "95% Placed" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600">
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
                Shaping the <span className="text-purple-400">Future Leaders</span> of Technology & Business
              </h2>
              <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
                <p>
                  The Canadian Institute of Technology (CIT) delivers a North American standard of education in the heart of the Balkans. We prepare students for the global marketplace through rigorous academics and practical skills.
                </p>
                <p>
                  Our programs are designed in collaboration with industry experts, ensuring that our graduates are not just degree holders, but ready-to-deploy professionals in Software Engineering, IT, and Business Administration.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <GraduationCap className="text-purple-400 mb-3" size={24} />
                  <h4 className="text-white font-bold mb-1">Global Standards</h4>
                  <p className="text-sm text-slate-400">Curriculum aligned with international academic benchmarks.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <Trophy className="text-blue-400 mb-3" size={24} />
                  <h4 className="text-white font-bold mb-1">Excellence</h4>
                  <p className="text-sm text-slate-400">Award-winning faculty and research-driven methodology.</p>
                </div>
              </div>
            </div>

            <div className="relative" data-aos="fade-left">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-3xl blur-3xl -z-10" />
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-[#0a0726] aspect-[4/3] flex items-center justify-center">
                <img src="/technology.jpg" alt="Technology at CIT" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" />
                <div className="relative z-10 text-center p-8">
                  <div className="w-20 h-20 mx-auto bg-purple-600 rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(124,58,237,0.5)]">
                    <CheckCircle2 size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Accredited Excellence</h3>
                  <p className="text-white">Recognized by the Ministry of Education, Sports and Youth in Albania.</p>
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
            <h2 className="text-3xl lg:text-5xl font-display font-black text-white mb-4">Available <span className="text-purple-400">Programs</span></h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Discover our cutting-edge Bachelor's and Master's degree programs tailored for the modern digital economy.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Software Engineering", type: "Bachelor of Science", dur: "3 Years", desc: "Master modern software development, architecture, and coding practices." },
              { title: "Computer Engineering & IT", type: "Bachelor of Science", dur: "3 Years", desc: "Deep dive into hardware, networking, and IT infrastructure systems." },
              { title: "Business Administration", type: "Bachelor of Arts", dur: "3 Years", desc: "Develop foundational business, management, and entrepreneurial skills." },
              { title: "Business Administration & IT", type: "Bachelor of Arts", dur: "3 Years", desc: "Bridging the gap between business strategy and technological solutions." },
              { title: "Software Engineering", type: "Master of Science", dur: "2 Years", desc: "Advanced concepts in software design, AI, and project management." },
              { title: "Digital Marketing", type: "Master of Science", dur: "1.5 Years", desc: "Strategic digital marketing, analytics, and modern business growth." },
            ].map((prog, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.07] transition-all duration-300 flex flex-col h-full" data-aos="fade-up" data-aos-delay={i * 50}>
                <div className="text-xs font-bold text-purple-400 tracking-wider uppercase mb-2">{prog.type}</div>
                <h3 className="text-xl font-bold text-white mb-3">{prog.title}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow">{prog.desc}</p>
                <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-auto">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Calendar size={16} className="text-slate-500" /> {prog.dur}
                  </div>
                  <ArrowRight size={18} className="text-purple-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Admission Requirements ── */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-900/40 to-[#060418] border border-purple-500/20 rounded-3xl p-8 lg:p-16 relative overflow-hidden" data-aos="fade-up">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="grid lg:grid-cols-2 gap-12 relative z-10">
              <div>
                <h2 className="text-3xl lg:text-4xl font-display font-black text-white mb-6">Admission <span className="text-purple-400">Requirements</span></h2>
                <p className="text-slate-300 mb-8 text-lg">
                  Ready to join CIT? Here is everything you need to know to prepare your application for our undergraduate and graduate programs.
                </p>
                <a href="#apply" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-[#060418] font-bold transition-all hover:bg-slate-200 shadow-xl">
                  Start Application <ArrowRight size={18} />
                </a>
              </div>
              
              <div className="space-y-6">
                {[
                  { title: "High School Diploma", desc: "For Bachelor's programs, a certified copy of your high school diploma." },
                  { title: "English Proficiency", desc: "IELTS (min 5.5), TOEFL, or equivalent proof of English language proficiency." },
                  { title: "Academic Transcripts", desc: "Official transcripts from all previously attended educational institutions." },
                  { title: "Identification", desc: "A valid passport copy and recent passport-sized photographs." }
                ].map((req, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1 border border-purple-500/30">
                      <CheckCircle2 size={16} className="text-purple-400" />
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
            <h2 className="text-3xl lg:text-5xl font-display font-black text-white mb-4">Campus & <span className="text-purple-400">Facilities</span></h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Experience a modern, vibrant campus equipped with everything you need to succeed academically and socially.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Library />, title: "Modern Library", desc: "Access to thousands of physical books and a vast digital library for research." },
              { icon: <Monitor />, title: "High-Tech Labs", desc: "State-of-the-art computer labs with the latest software and hardware." },
              { icon: <Wifi />, title: "Campus-Wide Wi-Fi", desc: "High-speed internet access available throughout the entire campus." },
              { icon: <Coffee />, title: "Student Cafeteria", desc: "A great place to relax, eat, and socialize with fellow students between classes." },
              { icon: <Users />, title: "Study Lounges", desc: "Quiet and collaborative spaces dedicated for group work and individual study." },
              { icon: <Building2 />, title: "Central Location", desc: "Located in the heart of Tirana with easy access to public transportation." }
            ].map((facility, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 border border-purple-500/20">
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
              <h2 className="text-3xl lg:text-4xl font-display font-black text-white mb-6">Tuition & <span className="text-purple-400">Financial Aid</span></h2>
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                We believe that quality education should be accessible. CIT offers competitive tuition rates and various scholarship opportunities to support our students.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 size={20} className="text-purple-400" /> Merit-based scholarships up to 100%
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 size={20} className="text-purple-400" /> Early registration discounts
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 size={20} className="text-purple-400" /> Flexible installment payment plans
                </li>
              </ul>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm" data-aos="fade-left">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 border border-purple-500/30">
                  <DollarSign size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Estimated Fees</h3>
                  <p className="text-slate-400 text-sm">Per Academic Year</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-white font-medium">Bachelor Programs</span>
                  <span className="text-purple-400 font-bold text-lg">€2,500 - €3,000</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-white font-medium">Master Programs</span>
                  <span className="text-purple-400 font-bold text-lg">€3,000 - €3,500</span>
                </div>
              </div>
              
              <p className="text-xs text-slate-500 mt-6 text-center">
                *Fees are indicative and subject to change. Please contact admissions for exact figures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Details ── */}
      <section className="py-24 bg-[#0a0726] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-display font-black text-white mb-4">Get in <span className="text-purple-400">Touch</span></h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">Have questions about admissions, programs, or campus life? Our admissions team is here to help.</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center">
              <Phone className="text-purple-400 mb-4" size={28} />
              <h4 className="text-white font-bold mb-2">Phone</h4>
              <p className="text-slate-400">+355 (0) 4 222 2222</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center">
              <Mail className="text-purple-400 mb-4" size={28} />
              <h4 className="text-white font-bold mb-2">Email</h4>
              <p className="text-slate-400">info@cit.edu.al</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center">
              <MapPin className="text-purple-400 mb-4" size={28} />
              <h4 className="text-white font-bold mb-2">Address</h4>
              <p className="text-slate-400 text-sm">Rruga Xhanfize Keko, Tirana, Albania</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
