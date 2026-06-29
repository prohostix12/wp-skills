"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard, Globe, GraduationCap, FileText, Handshake,
  MessageSquare, Star, ArrowLeft, ArrowRight, Mail, Phone,
  LogOut, RefreshCw, ChevronDown, ChevronLeft
} from "lucide-react";

interface Lead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("Dashboard");

  const fetchLeads = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/leads");
      if (res.status === 401) {
        router.push("/");
        return;
      }
      if (!res.ok) throw new Error("Failed to fetch leads.");
      const data = await res.json();
      setLeads(data.leads);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/");
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-IN", {
      day: "2-digit", month: "short", year: "numeric",
      hour: "2-digit", minute: "2-digit",
    });

  const sidebarLinks = [
    { label: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { label: "Study Abroad", icon: <Globe size={18} /> },
    { label: "Programs", icon: <GraduationCap size={18} /> },
    { label: "Services", icon: <FileText size={18} /> },
    { label: "Partners", icon: <Handshake size={18} /> },
    { label: "Contact Us", icon: <Mail size={18} /> },
    { label: "Comments", icon: <MessageSquare size={18} /> },
    { label: "Testimonials", icon: <Star size={18} /> },
  ];

  // Helper to render icon based on active tab
  const getTabIcon = (tab: string) => {
    switch (tab) {
      case "Study Abroad": return <Globe size={40} />;
      case "Programs": return <GraduationCap size={40} />;
      case "Services": return <FileText size={40} />;
      case "Partners": return <Handshake size={40} />;
      case "Comments": return <MessageSquare size={40} />;
      case "Testimonials": return <Star size={40} />;
      default: return <Globe size={40} />;
    }
  };

  return (
    <div className="min-h-screen flex bg-[#f8fafc] text-slate-800">
      {/* ── Sidebar ── */}
      <aside className="w-64 bg-[#0b0f19] text-slate-400 flex flex-col flex-shrink-0 border-r border-slate-900 z-20">
        {/* Sidebar Header */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-900">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-600/20">
              <Globe size={18} />
            </div>
            <span className="text-white font-bold text-sm tracking-wide">WP Admin</span>
          </div>
          <button className="text-slate-500 hover:text-slate-300 transition-colors">
            <ChevronLeft size={16} />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          {sidebarLinks.map((link) => {
            const isActive = activeTab === link.label;
            return (
              <button
                key={link.label}
                onClick={() => setActiveTab(link.label)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-600/25"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.icon}
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-900">
          <Link
            href="/"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-400 hover:bg-white/5 hover:text-white transition-all"
          >
            <ArrowLeft size={16} />
            Back to Website
          </Link>
        </div>
      </aside>

      {/* ── Main Workspace ── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* ── Top Bar ── */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 z-10">
          <h1 className="font-display font-black text-slate-800 text-lg">{activeTab}</h1>

          <div className="flex items-center gap-4">
            {/* User Profile Info */}
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <span className="text-xs font-bold text-slate-800 block">admin@worldpassport.in</span>
                <span className="text-[10px] text-slate-400 font-semibold block">Administrator</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                A
              </div>
            </div>

            <div className="w-px h-5 bg-slate-200" />

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              title="Logout"
              className="p-2 rounded-xl text-red-500 hover:bg-red-50 hover:text-red-600 transition-all flex items-center justify-center cursor-pointer"
            >
              <LogOut size={18} />
            </button>
          </div>
        </header>

        {/* ── Scrollable Content Area ── */}
        <main className="flex-1 overflow-y-auto p-8 space-y-8">
          {activeTab === "Dashboard" && (
            <>
              {/* Welcome Banner */}
              <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white overflow-hidden shadow-xl shadow-indigo-600/10">
                <div className="absolute -right-10 -top-10 w-44 h-44 rounded-full bg-white/10 blur-xl pointer-events-none" />
                <div className="absolute right-10 -bottom-10 w-32 h-32 rounded-full bg-indigo-500/20 blur-xl pointer-events-none" />

                <div className="relative z-10">
                  <h2 className="font-display font-black text-2xl sm:text-3xl mb-1.5 leading-tight">
                    Welcome to Admin Panel
                  </h2>
                  <p className="text-white/80 text-sm mb-6 max-w-xl font-medium">
                    Manage your World Passport website content and data
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-blue-50 transition-all shadow-sm"
                  >
                    View Website <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Stat Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { label: "Countries", value: "5", icon: <Globe size={20} />, bg: "bg-blue-50", color: "text-blue-600", tabTarget: "Study Abroad" },
                  { label: "Programs", value: "4", icon: <GraduationCap size={20} />, bg: "bg-pink-50", color: "text-pink-600", tabTarget: "Programs" },
                  { label: "Services", value: "4", icon: <FileText size={20} />, bg: "bg-emerald-50", color: "text-emerald-600", tabTarget: "Services" },
                  { label: "Partners", value: "2", icon: <Handshake size={20} />, bg: "bg-orange-50", color: "text-orange-600", tabTarget: "Partners" },
                  { label: "Messages", value: loading ? "—" : leads.length.toString(), icon: <MessageSquare size={20} />, bg: "bg-violet-50", color: "text-violet-600", tabTarget: "Contact Us" },
                  { label: "Testimonials", value: "3", icon: <Star size={20} />, bg: "bg-amber-50", color: "text-amber-600", tabTarget: "Testimonials" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    onClick={() => setActiveTab(stat.tabTarget)}
                    className="bg-white border border-slate-100 rounded-2xl p-6 flex items-center justify-between shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
                  >
                    <div>
                      <div className={`w-11 h-11 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center shadow-sm`}>
                        {stat.icon}
                      </div>
                      <p className="font-display font-black text-3xl text-slate-800 mt-4 leading-tight">
                        {stat.value}
                      </p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                        {stat.label}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-slate-600 group-hover:border-slate-300 transition-all duration-300">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === "Contact Us" && (
            <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden">
              {/* Table Header */}
              <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 border border-indigo-100">
                    <Mail size={16} />
                  </div>
                  <h3 className="font-display font-bold text-slate-800 text-base">Contact Form Submissions</h3>
                  {!loading && (
                    <span className="ml-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-600 border border-indigo-100">
                      {leads.length}
                    </span>
                  )}
                </div>
                <button
                  onClick={fetchLeads}
                  disabled={loading}
                  className="p-2 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-all flex items-center justify-center cursor-pointer"
                >
                  <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
                </button>
              </div>

              {/* Content Loading */}
              {loading && (
                <div className="flex items-center justify-center py-20 gap-3">
                  <svg className="animate-spin h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  <span className="text-slate-400 text-sm font-semibold">Loading leads…</span>
                </div>
              )}

              {/* Error state */}
              {!loading && error && (
                <div className="flex items-center justify-center py-16 text-red-500 gap-2 text-sm font-medium">
                  <span>{error}</span>
                </div>
              )}

              {/* Empty state */}
              {!loading && !error && leads.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 gap-3">
                  <Mail size={40} className="text-slate-200" />
                  <p className="text-slate-400 text-sm font-medium">No details submitted yet. Submissions will appear here.</p>
                </div>
              )}

              {/* Leads list table */}
              {!loading && !error && leads.length > 0 && (
                <div className="divide-y divide-slate-100">
                  {/* Desktop table header */}
                  <div className="hidden md:grid grid-cols-[2fr_2fr_1.5fr_1fr] gap-4 px-6 py-3 bg-slate-50/30 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                    <span>Name</span>
                    <span>Email</span>
                    <span>Phone</span>
                    <span>Date</span>
                  </div>

                  {leads.map((lead) => (
                    <div key={lead._id}>
                      {/* Desktop row */}
                      <div
                        className="hidden md:grid grid-cols-[2fr_2fr_1.5fr_1fr] gap-4 px-6 py-4.5 items-center hover:bg-slate-50/50 transition-all cursor-pointer group"
                        onClick={() => setExpandedId(expandedId === lead._id ? null : lead._id)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0 text-indigo-600 text-xs font-bold shadow-sm">
                            {lead.name.charAt(0).toUpperCase()}
                          </div>
                          <span className="text-slate-800 text-sm font-bold truncate group-hover:text-indigo-600 transition-colors">
                            {lead.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-500 text-sm truncate">
                          <Mail size={12} className="text-indigo-500 flex-shrink-0" />
                          <a href={`mailto:${lead.email}`} className="hover:text-indigo-600 transition-colors truncate" onClick={(e) => e.stopPropagation()}>
                            {lead.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                          <Phone size={12} className="text-blue-500 flex-shrink-0" />
                          <a href={`tel:${lead.phone}`} className="hover:text-blue-600 transition-colors" onClick={(e) => e.stopPropagation()}>
                            {lead.phone}
                          </a>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400 text-xs font-medium">{formatDate(lead.createdAt)}</span>
                          <ChevronDown size={14} className={`text-slate-300 group-hover:text-slate-500 transition-transform duration-200 ${expandedId === lead._id ? "rotate-180" : ""}`} />
                        </div>
                      </div>

                      {/* Mobile card layout */}
                      <div
                        className="md:hidden px-5 py-4.5 hover:bg-slate-50/50 transition-all cursor-pointer"
                        onClick={() => setExpandedId(expandedId === lead._id ? null : lead._id)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 text-xs font-bold">
                              {lead.name.charAt(0).toUpperCase()}
                            </div>
                            <span className="text-slate-800 text-sm font-bold">{lead.name}</span>
                          </div>
                          <ChevronDown size={14} className={`text-slate-300 transition-transform ${expandedId === lead._id ? "rotate-180" : ""}`} />
                        </div>
                        <div className="text-slate-500 text-xs font-medium">{lead.email} · {lead.phone}</div>
                        <div className="text-slate-400 text-[10px] font-semibold mt-1">{formatDate(lead.createdAt)}</div>
                      </div>

                      {/* Expanded details */}
                      {expandedId === lead._id && lead.message && (
                        <div className="px-6 py-4 border-t border-indigo-100/50 bg-indigo-50/10">
                          <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider mb-1.5">Message</p>
                          <p className="text-slate-600 text-sm leading-relaxed font-medium bg-slate-50 border border-slate-100 p-4 rounded-xl">
                            {lead.message}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab !== "Dashboard" && activeTab !== "Contact Us" && (
            <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm p-16 text-center">
              <div className="w-16 h-16 rounded-full bg-slate-50 text-slate-300 flex items-center justify-center mx-auto mb-4">
                {getTabIcon(activeTab)}
              </div>
              <h3 className="font-display font-bold text-slate-800 text-base mb-1">{activeTab} Panel</h3>
              <p className="text-slate-400 text-sm font-medium">
                No items found. This section is currently under construction.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
