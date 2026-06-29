"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BookOpen, Star, Users, Clock, CheckCircle2 } from "lucide-react";
import StickyBar from "@/components/skills/StickyBar";
import { PROGRAMS, getProgramSlug } from "@/lib/programsData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProgramDetailsPage({ params }: PageProps) {
  const { slug } = use(params);

  // Find matching program
  const program = PROGRAMS.find((p) => getProgramSlug(p.title) === slug);

  if (!program) {
    return (
      <main className="min-h-screen text-white flex flex-col items-center justify-center gap-4" style={{ background: "#060418" }}>
        <h1 className="text-xl font-bold">Program not found</h1>
        <Link href="/programs" className="text-purple-400 hover:underline">
          Return to Catalog
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen text-white relative" style={{ background: "#060418" }}>
      {/* Background Star Particles & Grids */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(150,120,255,0.6) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(150,120,255,0.6) 1.5px, transparent 1.5px)",
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
            className="inline-flex items-center gap-2 text-xs font-bold text-white/60 hover:text-white uppercase tracking-wider transition-colors"
          >
            <ArrowLeft size={14} /> Back to Catalog
          </Link>
        </div>

        {/* Hero split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left - Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-purple-400 bg-purple-500/10 border border-purple-500/20">
                <BookOpen size={12} /> {program.category}
              </span>
              <span className="text-white/40 text-xs font-semibold">|</span>
              <span className="text-white/50 text-xs font-semibold">
                Offered by <span className="text-white font-bold">{program.university}</span>
              </span>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              {program.title}
            </h1>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed font-medium">
              {program.description}
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm font-semibold text-white/80">
              <div className="flex items-center gap-1.5">
                <Star size={16} className="text-amber-400 fill-amber-400" />
                <span>{program.rating.toFixed(1)}/5.0</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users size={16} className="text-purple-400" />
                <span>{program.students} students</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={16} className="text-blue-400" />
                <span>Approx. {program.duration} content</span>
              </div>
            </div>

            {/* Instructor row */}
            <div className="pt-4">
              <p className="text-sm font-semibold text-purple-400">
                Instructed by <span className="underline">{program.university}</span>
              </p>
            </div>
          </div>

          {/* Right - Image ONLY card */}
          <div className="lg:col-span-5">
            <div 
              className="rounded-2xl overflow-hidden p-3 shadow-2xl shadow-purple-900/10"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)"
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
        <div className="border-t border-white/5 pt-12">
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="text-purple-400" size={20} />
            <h2 className="font-display font-black text-xl sm:text-2xl text-white">
              What You'll Learn
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {program.learningPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 hover:bg-white/5"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 border border-emerald-500/20 text-emerald-400">
                  <CheckCircle2 size={16} />
                </div>
                <span className="text-sm sm:text-base font-bold text-white/90 leading-snug">
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
