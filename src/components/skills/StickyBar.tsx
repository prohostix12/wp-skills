"use client";

import { useState } from "react";
import { Phone, Menu, X, GraduationCap, LogIn, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContent } from "@/hooks/useContent";
import { DEFAULT_NAV_LINKS } from "@/lib/contentDefaults";

export default function StickyBar() {
  const navLinks = useContent("navLinks", DEFAULT_NAV_LINKS);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [authError, setAuthError] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Invalid credentials.");
      }
      setLoginOpen(false);
      router.push("/admin/dashboard");
    } catch (err: unknown) {
      setAuthError(err instanceof Error ? err.message : "Login failed.");
    } finally {
      setAuthLoading(false);
    }
  };

  return (
    <>
      {/* Top announcement bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] text-white text-center py-2.5 px-4 text-xs sm:text-sm font-bold flex items-center justify-center gap-3"
        style={{ background: "linear-gradient(135deg, #1a0a4a 0%, #0d0a2e 100%)", borderBottom: "1px solid rgba(217,56,58,0.3)" }}>
        <GraduationCap size={15} className="text-yellow-400 animate-pulse flex-shrink-0" />
        <span>Free Career Counselling — Limited Spots Available!</span>
        <a
          href="#contact"
          className="inline-flex items-center gap-1 text-white text-xs font-bold px-4 py-1.5 rounded-full transition-all ml-2"
          style={{
            background: "linear-gradient(135deg, #F87171 0%, #D9383A 100%)"
          }}
        >
          Book Free Call →
        </a>
      </div>

      {/* Main Navbar */}
      <header className="fixed top-12 left-0 right-0 z-50 bg-[#060418]/85 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-20 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 select-none">
            <img src="/logo-transparent.png" alt="World Passport Logo" className="h-12 sm:h-16 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <div className="flex items-center gap-0.5 px-2.5 py-1.5 rounded-full border bg-white/5 border-white/5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 text-white/70 hover:text-white hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Right — Phone + Login */}
          <div className="hidden md:flex items-center gap-4 flex-shrink-0">
            <a
              href="tel:+919292173857"
              className="flex items-center gap-1.5 text-sm font-semibold text-white/70 hover:text-white transition-all"
            >
              <Phone size={14} className="text-red-400" />
              +91 9292173857
            </a>
            <button
              onClick={() => { setLoginOpen(true); setAuthError(""); }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white transition-all cursor-pointer"
              style={{ background: "#5b21b6" }}
            >
              <LogIn size={13} /> Login
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="md:hidden w-10 h-10 rounded-full border flex items-center justify-center transition-all flex-shrink-0 bg-white/5 border-white/10 text-white/80 hover:text-white"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 border-t border-white/5 ${mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          style={{ background: "#060418" }}
        >
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-semibold text-white/80 hover:bg-white/5 hover:text-red-400 transition-all"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-white/5 flex flex-col gap-3">
              <a
                href="tel:+919292173857"
                className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-white/80"
              >
                <Phone size={14} className="text-red-400" /> +91 9292173857
              </a>
              <button
                onClick={() => { setMobileOpen(false); setLoginOpen(true); setAuthError(""); }}
                className="flex items-center gap-2 mx-4 px-4 py-2.5 rounded-full text-xs font-bold text-white transition-all justify-center"
                style={{ background: "#5b21b6" }}
              >
                <LogIn size={13} /> Login
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* ── Login Modal ── */}
      {loginOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ background: "rgba(15,23,42,0.45)", backdropFilter: "blur(4px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setLoginOpen(false); }}
        >
          <div
            className="w-full max-w-md rounded-2xl p-8 relative"
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              boxShadow: "0 20px 40px rgba(0,0,0,0.06), 0 0 1px rgba(0,0,0,0.1)",
            }}
          >
            {/* Close */}
            <button
              onClick={() => setLoginOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-500 hover:text-slate-900 transition-all cursor-pointer"
            >
              <X size={15} />
            </button>

            {/* Icon + Title */}
            <div className="flex flex-col items-center mb-8">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ background: "rgba(29,78,216,0.08)", border: "1px solid rgba(29,78,216,0.15)" }}>
                <LogIn size={24} style={{ color: "#1D4ED8" }} />
              </div>
              <h2 className="font-display font-black text-black text-2xl">Admin Login</h2>
              <p className="text-slate-500 text-sm mt-1">Sign in to access your dashboard</p>
            </div>

            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              {/* Username */}
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  required
                  className="w-full px-4 py-3 rounded-xl text-black text-sm outline-none transition-all"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #cbd5e1",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "#1D4ED8"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(29,78,216,0.12)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "#cbd5e1"; e.currentTarget.style.boxShadow = "none"; }}
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Password</label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    required
                    className="w-full px-4 py-3 pr-11 rounded-xl text-black text-sm outline-none transition-all"
                    style={{
                      background: "#ffffff",
                      border: "1px solid #cbd5e1",
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "#1D4ED8"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(29,78,216,0.12)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "#cbd5e1"; e.currentTarget.style.boxShadow = "none"; }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                  >
                    {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Error */}
              {authError && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50 border border-red-200">
                  <X size={14} className="text-red-600 flex-shrink-0" />
                  <p className="text-red-600 text-sm font-semibold">{authError}</p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={authLoading}
                className="mt-2 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white text-sm transition-all disabled:opacity-60 disabled:cursor-not-allowed hover:bg-[#4c1d95] cursor-pointer"
                style={{ background: "#5b21b6", boxShadow: "0 6px 20px rgba(91,33,182,0.25)" }}
              >
                {authLoading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Signing in…
                  </>
                ) : (
                  <><LogIn size={15} /> Sign In</>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
