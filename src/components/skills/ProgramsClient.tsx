"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import StickyBar from "@/components/skills/StickyBar";
import Footer from "@/components/skills/Footer";

import { Program, getProgramSlug } from "@/lib/programsData";

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
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  useEffect(() => {
    async function loadPrograms() {
      try {
        const res = await fetch("/api/programs");
        if (res.ok) {
          const data = await res.json();
          const list = data.programs || [];
          
          // Sort programs as requested:
          // 1. Digital Marketing
          // 2. Hospital Administration
          // 3. Data Science & AI
          // 4. Logistics
          // Then others
          const sorted = [...list].sort((a, b) => {
            const getOrderIndex = (p: Program) => {
              const title = p.title.toLowerCase();
              const category = p.category.toLowerCase();
              
              if (title.includes("digital marketing") && !title.includes("with ai")) return 1;
              if (title.includes("hospital administration") || category.includes("hospital administration")) return 2;
              if (title.includes("data science & ai") || title.includes("data science and ai") || category.includes("ai")) {
                if (title.includes("digital marketing")) return 99; // skip "digital marketing with ai" from slot 3
                return 3;
              }
              if (title.includes("logistics") || category.includes("logistics")) return 4;
              return 99;
            };
            
            const orderA = getOrderIndex(a);
            const orderB = getOrderIndex(b);
            
            if (orderA !== orderB) {
              return orderA - orderB;
            }
            return a.title.localeCompare(b.title);
          });
          setPrograms(sorted);
        }
      } catch (err) {
        console.error("Failed to load programs:", err);
      } finally {
        setLoading(false);
      }
    }
    loadPrograms();
  }, []);

  const uniqueCategories = Array.from(
    new Set(programs.map((p) => p.category))
  );
  const filterTabs = ["ALL", ...uniqueCategories];

  const filtered =
    activeFilter === "ALL"
      ? programs
      : programs.filter((p) => p.category === activeFilter);

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

      {/* Page content — padded to clear sticky bars (announcement 36px + nav 64px = 100px) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-36 pb-24">
        {/* Page heading */}
        <div className="mb-10 text-center">
          <h1 className="font-display font-black text-4xl sm:text-5xl text-black mb-3">
            Our <span className="text-purple-700">Programs</span>
          </h1>
          <p className="text-black/70 text-base max-w-xl mx-auto">
            Industry-aligned courses designed to accelerate your global career.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          className="flex gap-2 overflow-x-auto pb-3 mb-10 scrollbar-none"
          role="tablist"
          aria-label="Filter programs by category"
        >
          {loading ? (
            <div className="text-slate-400 text-xs font-bold py-2">Loading categories...</div>
          ) : (
            filterTabs.map((tab) => {
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
            })
          )}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((program) => (
            <ProgramCard key={program.title} program={program} />
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
