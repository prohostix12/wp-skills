"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import StickyBar from "@/components/skills/StickyBar";

import { PROGRAMS, Program, getProgramSlug } from "@/lib/programsData";

// Derive unique categories from data, preserving insertion order
const UNIQUE_CATEGORIES = Array.from(
  new Set(PROGRAMS.map((p) => p.category))
);

const FILTER_TABS = ["ALL", ...UNIQUE_CATEGORIES];

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

function ProgramCard({ program }: { program: Program }) {
  const slug = getProgramSlug(program.title);
  const linkHref = `/programs/${slug}`;

  return (
    <Link href={linkHref} className="flex flex-col flex-1 h-full">
      <article
        className="flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 h-full w-full cursor-pointer"
        style={{
          background: "#0d0a2e",
          border: "1px solid rgba(124,58,237,0.3)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
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
          {/* Rating / Duration row */}
          <div className="absolute bottom-3 left-3 right-3 flex justify-between text-white text-sm">
            <span>⭐ {program.rating}</span>
            <span>🕐 {program.duration}</span>
          </div>
        </div>

        {/* Card body */}
        <div className="flex flex-col flex-1 p-5 gap-3">
          {/* University */}
          <div className="flex items-center gap-2.5">
            <UniversityAvatar initial={program.universityInitial} />
            <span className="text-white/40 text-[10px] uppercase tracking-wider leading-tight">
              {program.university}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-bold text-white text-lg leading-snug">
            {program.title}
          </h3>

          {/* Description */}
          <p className="text-white/50 text-sm leading-relaxed line-clamp-3 flex-1">
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

  const filtered =
    activeFilter === "ALL"
      ? PROGRAMS
      : PROGRAMS.filter((p) => p.category === activeFilter);

  return (
    <main
      className="min-h-screen relative text-white"
      style={{ background: "#060418" }}
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
              "linear-gradient(rgba(150,120,255,0.6) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(150,120,255,0.6) 1.5px, transparent 1.5px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Sticky navbar */}
      <StickyBar />

      {/* Page content — padded to clear sticky bars (announcement 36px + nav 64px = 100px) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-36 pb-24">
        {/* Page heading */}
        <div className="mb-10 text-center">
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white mb-3">
            Our <span className="text-purple-400">Programs</span>
          </h1>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            Industry-aligned courses designed to accelerate your global career.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          className="flex gap-2 overflow-x-auto pb-3 mb-10 scrollbar-none"
          role="tablist"
          aria-label="Filter programs by category"
        >
          {FILTER_TABS.map((tab) => {
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
                    : "1px solid rgba(255,255,255,0.3)",
                  color: isActive ? "#fff" : "rgba(255,255,255,0.6)",
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
            <ProgramCard key={program.title} program={program} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-white/40 py-20 text-sm">
            No programs found for this category.
          </p>
        )}
      </div>
    </main>
  );
}
