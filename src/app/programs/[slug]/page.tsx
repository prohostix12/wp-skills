"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BookOpen, Star, Users, Clock, CheckCircle2 } from "lucide-react";
import StickyBar from "@/components/skills/StickyBar";
import { Program, getProgramSlug } from "@/lib/programsData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProgramDetailsPage({ params }: PageProps) {
  const { slug } = use(params);
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPrograms() {
      try {
        const res = await fetch("/api/programs");
        if (res.ok) {
          const data = await res.json();
          setPrograms(data.programs || []);
        }
      } catch (err) {
        console.error("Failed to load programs:", err);
      } finally {
        setLoading(false);
      }
    }
    loadPrograms();
  }, []);

  // Find matching program
  const program = programs.find((p) => getProgramSlug(p.title) === slug);

  if (loading) {
    return (
      <main className="min-h-screen text-black flex flex-col items-center justify-center gap-4 bg-[#faf8f5]">
        <div className="flex items-center gap-2">
          <svg className="animate-spin h-5 w-5 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
          </svg>
          <span className="font-semibold text-sm">Loading program details...</span>
        </div>
      </main>
    );
  }

  if (!program) {
    return (
      <main className="min-h-screen text-black flex flex-col items-center justify-center gap-4 bg-[#faf8f5]">
        <h1 className="text-xl font-bold">Program not found</h1>
        <Link href="/programs" className="text-purple-600 hover:underline">
          Return to Catalog
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen text-black relative" style={{ background: "#faf8f5" }}>
      {/* Background Star Particles & Grids */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(120,110,90,0.6) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(120,110,90,0.6) 1.5px, transparent 1.5px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <StickyBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 relative z-10">
        {/* Back to catalog link */}
        <div className="mb-8">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-xs font-bold text-black/60 hover:text-black uppercase tracking-wider transition-colors"
          >
            <ArrowLeft size={14} /> Back to Catalog
          </Link>
        </div>

        {/* Hero split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left - Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-purple-700 bg-purple-600/10 border border-purple-600/20">
                <BookOpen size={12} /> {program.category}
              </span>
              <span className="text-black/40 text-xs font-semibold">|</span>
              <span className="text-black/50 text-xs font-semibold">
                Offered by <span className="text-black font-bold">{program.university}</span>
              </span>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-5xl text-black tracking-tight leading-tight">
              {program.title}
            </h1>

            <p className="text-black/75 text-base sm:text-lg leading-relaxed font-medium">
              {program.description}
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm font-semibold text-black/80">
              <div className="flex items-center gap-1.5">
                <Star size={16} className="text-amber-500 fill-amber-500" />
                <span>{program.rating.toFixed(1)}/5.0</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users size={16} className="text-purple-600" />
                <span>{program.students} students</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={16} className="text-blue-600" />
                <span>Approx. {program.duration} content</span>
              </div>
            </div>

            {/* Instructor row */}
            <div className="pt-4">
              <p className="text-sm font-semibold text-purple-700">
                Instructed by <span className="underline">{program.university}</span>
              </p>
            </div>
          </div>

          {/* Right - Image ONLY card */}
          <div className="lg:col-span-5">
            <div 
              className="rounded-2xl overflow-hidden p-3 shadow-2xl shadow-purple-900/10"
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
              }}
            >
              <div className="relative h-[250px] sm:h-[300px] w-full rounded-xl overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section - What You'll Learn */}
        <div className="border-t border-slate-200 pt-12">
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="text-purple-600" size={20} />
            <h2 className="font-display font-black text-xl sm:text-2xl text-black">
              What You'll Learn
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {program.learningPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 hover:bg-slate-100"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 border border-emerald-200 text-emerald-600">
                  <CheckCircle2 size={16} />
                </div>
                <span className="text-sm sm:text-base font-bold text-black/90 leading-snug">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
