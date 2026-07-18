"use client";

import { useContent } from "@/hooks/useContent";
import { Icon } from "@/lib/iconRegistry";
import { DEFAULT_TRUST_STRIP_ITEMS } from "@/lib/contentDefaults";

export default function TrustStrip() {
  const trustItems = useContent("trustStripItems", DEFAULT_TRUST_STRIP_ITEMS);
  const allItems = [...trustItems, ...trustItems];
  return (
    <section className="py-10 overflow-hidden relative" style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-7 text-center">
        <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
          Trusted by students across Kerala · Powered by
        </p>
        <p className="text-sm font-bold mt-1.5" style={{ color: "rgba(248,113,113,0.85)" }}>
          Canadian Institute of Technology (CIT) · International University Partner
        </p>
      </div>

      <div className="relative fade-left overflow-hidden">
        <div className="flex gap-3 animate-marquee" style={{ width: "max-content" }}>
          {allItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-3 rounded-xl flex-shrink-0 cursor-default transition-all hover:-translate-y-0.5 tilt-on-hover"
              style={{
                background: "rgba(29,78,216,0.08)",
                border: "1px solid rgba(29,78,216,0.2)",
                minWidth: "220px",
                backdropFilter: "blur(8px)",
              }}
            >
              <span style={{ color: "#93C5FD", flexShrink: 0 }}><Icon name={item.icon} size={18} /></span>
              <div>
                <div className="text-sm font-bold leading-tight" style={{ color: "rgba(255,255,255,0.85)" }}>{item.label}</div>
                <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
