"use client";

import { Wrench } from "lucide-react";
import { useContent } from "@/hooks/useContent";
import { Icon } from "@/lib/iconRegistry";
import { DEFAULT_TOOLS } from "@/lib/contentDefaults";

export default function Tools() {
  const tools = useContent("tools", DEFAULT_TOOLS);
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#060418" }}>
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(rgba(29,78,216,1) 1px, transparent 1px), linear-gradient(90deg, rgba(29,78,216,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

      {/* Ambient glow blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(217,56,58,0.08) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
            style={{ background: "rgba(217,56,58,0.12)", border: "1px solid rgba(217,56,58,0.3)" }}>
            <Wrench size={12} className="text-red-400" />
            <span className="text-red-400 text-xs font-bold tracking-widest uppercase">
              Tools
            </span>
          </div>
          <h2 className="font-display font-black text-black mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Industry Tools We Cover
          </h2>
          <p className="text-base sm:text-lg max-w-md mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            Hands-on training with the platforms and tools that power today&apos;s digital economy.
          </p>
        </div>

        {/* Tool Cards */}
        <div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group flex flex-col items-center gap-3 p-5 rounded-2xl cursor-default transition-all duration-300 tilt-on-hover"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(8px)"
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = `${tool.color}40`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${tool.color}20, 0 12px 30px rgba(0,0,0,0.4)`;
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
              }}
            >
              <div className="transition-transform duration-300 group-hover:scale-110" style={{ color: tool.color }}>
                <Icon name={tool.icon} />
              </div>
              <span className="text-[11px] font-bold text-white/75 text-center leading-tight transition-colors duration-250 group-hover:text-white">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
