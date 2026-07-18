"use client";

import { Briefcase, Award, BookOpen, CheckCircle2, ArrowRight } from "lucide-react";
import { useContent } from "@/hooks/useContent";
import { Icon } from "@/lib/iconRegistry";
import { DEFAULT_PLACEMENT_PLATFORM_FEATURES, DEFAULT_PLACEMENT_PLATFORM_STATS } from "@/lib/contentDefaults";

export default function PlacementPlatform() {
  const features = useContent("placementPlatformFeatures", DEFAULT_PLACEMENT_PLATFORM_FEATURES);
  const stats = useContent("placementPlatformStats", DEFAULT_PLACEMENT_PLATFORM_STATS);

  return (
    <section className="pt-36 pb-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column - Copy & Features */}
        <div className="lg:col-span-6 space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-purple-700 bg-purple-100 border border-purple-200 uppercase tracking-wider">
            SkillDad Placement Platform
          </span>
          
          <h2 className="font-display font-black text-black text-3xl sm:text-4xl leading-tight">
            Get Certified.<br />
            <span className="text-purple-700">Get Placed Globally.</span>
          </h2>
          
          <p className="text-black/70 text-base leading-relaxed">
            Every student who successfully completes their ECTS-certified course gets exclusive access to placement and internship opportunities through SkillDad — connecting you with companies worldwide.
          </p>

          {/* Features list */}
          <div className="space-y-4 pt-4">
            {features.map((f, i) => (
              <div 
                key={i} 
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0 border border-purple-100">
                  <Icon name={f.icon} size={18} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-black text-sm sm:text-base leading-none mb-1">{f.title}</h4>
                  <p className="text-xs text-black/50">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Stats & Path */}
        <div className="lg:col-span-6 space-y-6">
          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <div 
                key={i} 
                className="bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-sm"
              >
                <div className="font-display font-black text-2xl sm:text-3xl text-purple-700 mb-1">
                  {s.val}
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-black/40 uppercase tracking-wider leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Your Path Box */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <h3 className="font-display font-black text-black text-lg mb-6 flex items-center gap-2">
              <Award size={18} className="text-purple-600" /> Your Path
            </h3>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-2">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-700 mb-3 shadow-sm">
                  <BookOpen size={20} />
                </div>
                <h4 className="font-bold text-black text-sm mb-0.5">Learn</h4>
                <p className="text-xs text-black/50">Complete course</p>
              </div>

              {/* Arrow */}
              <div className="hidden sm:block text-slate-300">
                <ArrowRight size={20} />
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-700 mb-3 shadow-sm">
                  <CheckCircle2 size={20} />
                </div>
                <h4 className="font-bold text-black text-sm mb-0.5">Certify</h4>
                <p className="text-xs text-black/50">ECTS certificate</p>
              </div>

              {/* Arrow */}
              <div className="hidden sm:block text-slate-300">
                <ArrowRight size={20} />
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-700 mb-3 shadow-sm">
                  <Briefcase size={20} />
                </div>
                <h4 className="font-bold text-black text-sm mb-0.5">Work</h4>
                <p className="text-xs text-black/50">Get placed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
