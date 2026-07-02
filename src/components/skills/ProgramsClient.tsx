"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import StickyBar from "@/components/skills/StickyBar";
import Footer from "@/components/skills/Footer";
import { BookOpen, Layers, BadgeCheck, Monitor } from "lucide-react";

import { citCourses } from "@/data/citCourses";
import { muaCourses } from "@/data/muaCourses";

// ── Unified program shape, built from the same data that powers the
//    CIT and Mediterranean University course detail pages ──────────────────

type UnifiedProgram = {
  title: string;
  category: string;
  description: string;
  university: string;
  universityInitial: string;
  duration: string;
  image: string;
  href: string;
};

function truncate(text: string, max: number) {
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, "") + "…";
}

const citPrograms: UnifiedProgram[] = citCourses.map((c) => ({
  title: c.title,
  category: c.category,
  description: truncate(c.points.join(". ") + ".", 160),
  university: "Canadian Institute of Technology (CIT)",
  universityInitial: "C",
  duration: c.duration,
  image: c.image,
  href: `/skills/course/${c.slug}`,
}));

const muaPrograms: UnifiedProgram[] = muaCourses.map((c) => ({
  title: c.title,
  category: c.category,
  description: truncate(c.overview[0], 160),
  university: "Mediterranean University",
  universityInitial: "M",
  duration: c.totalHours,
  image: c.image,
  href: `/skills/mua-course/${c.slug}`,
}));

const allPrograms: UnifiedProgram[] = [...citPrograms, ...muaPrograms];

// ── Sub-components ─────────────────────────────────────────────────────────

function UniversityAvatar({ initial }: { initial: string }) {
  return (
    <div
      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-base"
      style={{ background: "linear-gradient(135deg, #7c3aed 0%, #4f1d96 100%)" }}
      aria-hidden="true"
    >
      {initial}
    </div>
  );
}

function ProgramCard({ program }: { program: UnifiedProgram }) {
  return (
    <Link href={program.href} className="flex flex-col flex-1 h-full">
      <article
        className="flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 h-full w-full cursor-pointer"
        style={{
          background: "#ffffff",
          border: "1px solid #e2e8f0",
          boxShadow: "0 4px 20px rgba(15, 23, 42, 0.04)",
        }}
      >
        {/* Image */}
        <div className="relative h-[200px] w-full overflow-hidden">
          <Image
            src={program.image}
            alt={program.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          {/* Category badge */}
          <span
            className="absolute top-3 left-3 text-white text-[10px] uppercase tracking-wider px-2 py-1 rounded"
            style={{ background: "rgba(0,0,0,0.6)" }}
          >
            {program.category}
          </span>
          {/* Duration */}
          <div className="absolute bottom-3 left-3 right-3 flex justify-end text-white text-sm">
            <span>🕐 {program.duration}</span>
          </div>
        </div>

        {/* Card body */}
        <div className="flex flex-col flex-1 p-5 gap-3">
          {/* University */}
          <div className="flex items-center gap-2.5">
            <UniversityAvatar initial={program.universityInitial} />
            <span className="text-black/50 text-[10px] uppercase tracking-wider leading-tight">
              {program.university}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-bold text-black text-lg leading-snug">
            {program.title}
          </h3>

          {/* Description */}
          <p className="text-black/70 text-sm leading-relaxed line-clamp-3 flex-1">
            {program.description}
          </p>

          {/* CTA */}
          <div className="mt-auto pt-2">
            <div
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs px-5 py-2.5 rounded-full transition-all duration-200"
            >
              VIEW →
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

// ── Main export ────────────────────────────────────────────────────────────

export default function ProgramsClient() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  const uniqueCategories = Array.from(
    new Set(allPrograms.map((p) => p.category))
  );
  const filterTabs = ["ALL", ...uniqueCategories];

  const filtered =
    activeFilter === "ALL"
      ? allPrograms
      : allPrograms.filter((p) => p.category === activeFilter);

  return (
    <main
      className="min-h-screen relative text-black"
      style={{ background: "#faf8f5" }}
    >
      {/* Purple grid overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(120,110,90,0.6) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(120,110,90,0.6) 1.5px, transparent 1.5px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Sticky navbar */}
      <StickyBar />

      {/* Hero Heading Section with Video */}
      <div className="relative w-full pt-40 pb-28 flex flex-col items-center justify-center overflow-hidden border-b border-slate-200/60 shadow-sm">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ zIndex: 0, opacity: 0.4 }}
        >
          <source src="/animation.mp4" type="video/mp4" />
        </video>

        {/* Soft overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#faf8f5]/20 z-10 pointer-events-none backdrop-blur-[1px]" />

        <div className="relative z-20 text-center px-4 max-w-3xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-widest shadow-sm">
            Explore Our Courses
          </div>
          <h1 className="font-display font-black text-5xl sm:text-7xl text-slate-900 mb-6 tracking-tight leading-tight">
            Our <span className="text-purple-700">Programs</span>
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl font-medium leading-relaxed mb-10">
            Industry-aligned courses designed to accelerate your global career. Master new skills with our international university training.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {[
              { icon: <BookOpen size={18} />, value: `${allPrograms.length}+`, label: "Programs" },
              { icon: <Layers size={18} />, value: `${uniqueCategories.length}`, label: "Categories" },
              { icon: <BadgeCheck size={18} />, value: "Certified", label: "Credentials" },
              { icon: <Monitor size={18} />, value: "Online", label: "Delivery Mode" },
            ].map((s) => (
              <div key={s.label} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-slate-200/60 shadow-sm flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-purple-100 text-purple-700">
                  {s.icon}
                </div>
                <div>
                  <div className="text-slate-900 font-bold text-sm">{s.value}</div>
                  <div className="text-slate-500 text-[10px] uppercase tracking-wider">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Page content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-6 pb-24">

        {/* Filter tabs */}
        <div
          className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none"
          role="tablist"
          aria-label="Filter programs by category"
        >
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(tab)}
                className="flex-shrink-0 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-200 cursor-pointer"
                style={{
                  background: isActive
                    ? "#7c3aed"
                    : "transparent",
                  border: isActive
                    ? "1px solid #7c3aed"
                    : "1px solid rgba(0,0,0,0.15)",
                  color: isActive ? "#fff" : "rgba(0,0,0,0.7)",
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((program) => (
            <ProgramCard key={program.href} program={program} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-black/55 py-20 text-sm">
            No programs found for this category.
          </p>
        )}
      </div>

      <Footer />
    </main>
  );
}
