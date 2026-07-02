"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard, Globe, GraduationCap, FileText, Handshake,
  MessageSquare, Star, ArrowLeft, ArrowRight, Mail, Phone,
  LogOut, RefreshCw, ChevronDown, ChevronLeft, Image, Video, Trash2, Pencil, Plus, X
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

  // Programs management states
  const [programs, setPrograms] = useState<any[]>([]);
  const [programsLoading, setProgramsLoading] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [editingProgram, setEditingProgram] = useState<any | null>(null);

  const [progTitle, setProgTitle] = useState("");
  const [progCategory, setProgCategory] = useState("DATA ANALYTICS");
  const [progDesc, setProgDesc] = useState("");
  const [progUniversity, setProgUniversity] = useState("");
  const [progUnivInitial, setProgUnivInitial] = useState("");
  const [progRating, setProgRating] = useState(4.8);
  const [progDuration, setProgDuration] = useState("12h");
  const [progImage, setProgImage] = useState("");
  const [progStudents, setProgStudents] = useState("100+");
  const [progLearningPoints, setProgLearningPoints] = useState("");

  // Testimonials management states
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [testimonialsLoading, setTestimonialsLoading] = useState(false);
  const [testFormOpen, setTestFormOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<any | null>(null);
  const [testName, setTestName] = useState("");
  const [testDesignation, setTestDesignation] = useState("");
  const [testText, setTestText] = useState("");
  const [testMediaType, setTestMediaType] = useState<"photo" | "video">("photo");
  const [testMediaUrl, setTestMediaUrl] = useState("");

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

  const fetchPrograms = async () => {
    setProgramsLoading(true);
    try {
      const res = await fetch("/api/programs");
      if (res.status === 401) {
        router.push("/");
        return;
      }
      if (res.ok) {
        const data = await res.json();
        setPrograms(data.programs || []);
      }
    } catch (err) {
      console.error("Failed to fetch programs:", err);
    } finally {
      setProgramsLoading(false);
    }
  };

  const openProgramForm = (program: any | null = null) => {
    if (program) {
      setEditingProgram(program);
      setProgTitle(program.title);
      setProgCategory(program.category);
      setProgDesc(program.description);
      setProgUniversity(program.university);
      setProgUnivInitial(program.universityInitial);
      setProgRating(program.rating);
      setProgDuration(program.duration);
      setProgImage(program.image);
      setProgStudents(program.students);
      setProgLearningPoints(program.learningPoints?.join("\n") || "");
    } else {
      setEditingProgram(null);
      setProgTitle("");
      setProgCategory("DATA ANALYTICS");
      setProgDesc("");
      setProgUniversity("");
      setProgUnivInitial("");
      setProgRating(4.8);
      setProgDuration("12h");
      setProgImage("https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80");
      setProgStudents("100+");
      setProgLearningPoints("");
    }
    setFormOpen(true);
  };

  const handleSaveProgram = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      title: progTitle,
      category: progCategory,
      description: progDesc,
      university: progUniversity,
      universityInitial: progUnivInitial,
      rating: Number(progRating),
      duration: progDuration,
      image: progImage,
      students: progStudents,
      learningPoints: progLearningPoints.split("\n").map(pt => pt.trim()).filter(Boolean),
    };

    try {
      const url = editingProgram ? `/api/programs/${editingProgram._id}` : "/api/programs";
      const method = editingProgram ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setFormOpen(false);
        fetchPrograms();
      } else {
        const data = await res.json();
        alert(data.error || "Failed to save program.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong saving program.");
    }
  };

  const handleDeleteProgram = async (id: string) => {
    if (!confirm("Are you sure you want to delete this program?")) return;

    try {
      const res = await fetch(`/api/programs/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        fetchPrograms();
      } else {
        const data = await res.json();
        alert(data.error || "Failed to delete program.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong deleting program.");
    }
  };

  // Testimonials CRUD
  const fetchTestimonials = async () => {
    setTestimonialsLoading(true);
    try {
      const res = await fetch("/api/testimonials");
      if (res.ok) {
        const data = await res.json();
        setTestimonials(data.testimonials || []);
      }
    } catch (err) {
      console.error("Failed to fetch testimonials:", err);
    } finally {
      setTestimonialsLoading(false);
    }
  };

  const openTestimonialForm = (t: any | null = null) => {
    if (t) {
      setEditingTestimonial(t);
      setTestName(t.name);
      setTestDesignation(t.designation || "");
      setTestText(t.text);
      setTestMediaType(t.mediaType || "photo");
      setTestMediaUrl(t.mediaUrl || "");
    } else {
      setEditingTestimonial(null);
      setTestName("");
      setTestDesignation("");
      setTestText("");
      setTestMediaType("photo");
      setTestMediaUrl("");
    }
    setTestFormOpen(true);
  };

  const handleSaveTestimonial = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { name: testName, designation: testDesignation, text: testText, mediaType: testMediaType, mediaUrl: testMediaUrl };
    try {
      const url = editingTestimonial ? `/api/testimonials/${editingTestimonial._id}` : "/api/testimonials";
      const method = editingTestimonial ? "PUT" : "POST";
      const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (res.ok) {
        setTestFormOpen(false);
        fetchTestimonials();
      } else {
        const data = await res.json();
        alert(data.error || "Failed to save testimonial.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong saving testimonial.");
    }
  };

  const handleDeleteTestimonial = async (id: string) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) return;
    try {
      const res = await fetch(`/api/testimonials/${id}`, { method: "DELETE" });
      if (res.ok) {
        fetchTestimonials();
      } else {
        const data = await res.json();
        alert(data.error || "Failed to delete testimonial.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong deleting testimonial.");
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/");
  };

  useEffect(() => {
    fetchLeads();
    fetchPrograms();
    fetchTestimonials();
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
                    className="admin-cta-btn inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-blue-50 transition-all shadow-sm"
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

          {activeTab === "Programs" && (
            <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden">
              {/* Header */}
              <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center text-pink-600 border border-pink-100">
                    <GraduationCap size={16} />
                  </div>
                  <h3 className="font-display font-bold text-slate-800 text-base">Course Programs List</h3>
                  {!programsLoading && (
                    <span className="ml-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-pink-50 text-pink-600 border border-pink-100">
                      {programs.length}
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={fetchPrograms}
                    disabled={programsLoading}
                    className="p-2 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-all flex items-center justify-center cursor-pointer"
                  >
                    <RefreshCw size={14} className={programsLoading ? "animate-spin" : ""} />
                  </button>
                  <button
                    onClick={() => openProgramForm(null)}
                    className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all cursor-pointer shadow-sm"
                  >
                    Add Program
                  </button>
                </div>
              </div>

              {/* Table list */}
              {programsLoading && programs.length === 0 && (
                <div className="flex items-center justify-center py-20 gap-3">
                  <svg className="animate-spin h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  <span className="text-slate-400 text-sm font-semibold">Loading programs…</span>
                </div>
              )}

              {!programsLoading && programs.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 gap-3">
                  <GraduationCap size={40} className="text-slate-200" />
                  <p className="text-slate-400 text-sm font-medium">No programs found.</p>
                </div>
              )}

              {programs.length > 0 && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-slate-50/30 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                        <th className="px-6 py-3">Title</th>
                        <th className="px-6 py-3">Category</th>
                        <th className="px-6 py-3">University</th>
                        <th className="px-6 py-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {programs.map((prog) => (
                        <tr key={prog._id || prog.title} className="hover:bg-slate-50/50 transition-all">
                          <td className="px-6 py-4.5 font-bold text-slate-800">
                            {prog.title}
                          </td>
                          <td className="px-6 py-4.5">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-100 uppercase">
                              {prog.category}
                            </span>
                          </td>
                          <td className="px-6 py-4.5 text-slate-500">
                            {prog.university}
                          </td>
                          <td className="px-6 py-4.5 text-right space-x-2">
                            <button
                              onClick={() => openProgramForm(prog)}
                              className="text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteProgram(prog._id)}
                              className="text-xs font-bold text-red-600 hover:text-red-800 hover:underline cursor-pointer"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* ── Testimonials Tab ── */}
          {activeTab === "Testimonials" && (
            <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden">
              {/* Header */}
              <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-yellow-50 flex items-center justify-center text-yellow-600 border border-yellow-100">
                    <Star size={16} />
                  </div>
                  <h3 className="font-display font-bold text-slate-800 text-base">Testimonials</h3>
                  {!testimonialsLoading && (
                    <span className="ml-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-yellow-50 text-yellow-700 border border-yellow-100">
                      {testimonials.length}
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={fetchTestimonials}
                    disabled={testimonialsLoading}
                    className="p-2 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-all flex items-center justify-center cursor-pointer"
                  >
                    <RefreshCw size={14} className={testimonialsLoading ? "animate-spin" : ""} />
                  </button>
                  <button
                    onClick={() => openTestimonialForm(null)}
                    className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all cursor-pointer shadow-sm"
                  >
                    <Plus size={14} /> Add Testimonial
                  </button>
                </div>
              </div>

              {/* Loading */}
              {testimonialsLoading && testimonials.length === 0 && (
                <div className="flex items-center justify-center py-20 gap-3">
                  <svg className="animate-spin h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  <span className="text-slate-400 text-sm font-semibold">Loading testimonials…</span>
                </div>
              )}

              {/* Empty */}
              {!testimonialsLoading && testimonials.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 gap-3">
                  <Star size={40} className="text-slate-200" />
                  <p className="text-slate-400 text-sm font-medium">No testimonials yet. Add your first one!</p>
                </div>
              )}

              {/* Testimonials Grid */}
              {testimonials.length > 0 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                  {testimonials.map((t) => (
                    <div key={t._id} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 flex flex-col">
                      {/* Media preview */}
                      <div className="relative w-full bg-slate-100" style={{ aspectRatio: "16/9" }}>
                        {t.mediaType === "video" ? (
                          <video src={t.mediaUrl} className="w-full h-full object-cover" controls preload="metadata" />
                        ) : (
                          <img src={t.mediaUrl} alt={t.name} className="w-full h-full object-cover" />
                        )}
                        <span className="absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-white/90 border border-slate-200 text-slate-600">
                          {t.mediaType === "video" ? <Video size={9} /> : <Image size={9} />} {t.mediaType}
                        </span>
                      </div>
                      {/* Info */}
                      <div className="p-4 flex flex-col gap-2 flex-1">
                        <p className="text-slate-700 text-xs leading-relaxed line-clamp-3">{t.text}</p>
                        <div className="mt-auto pt-3 border-t border-slate-200 flex items-center justify-between">
                          <div>
                            <p className="text-slate-800 text-xs font-bold">{t.name}</p>
                            {t.designation && <p className="text-slate-400 text-[10px]">{t.designation}</p>}
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => openTestimonialForm(t)}
                              className="p-1.5 rounded-lg text-blue-600 hover:bg-blue-50 transition-all cursor-pointer"
                              title="Edit"
                            >
                              <Pencil size={13} />
                            </button>
                            <button
                              onClick={() => handleDeleteTestimonial(t._id)}
                              className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 transition-all cursor-pointer"
                              title="Delete"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab !== "Dashboard" && activeTab !== "Contact Us" && activeTab !== "Programs" && activeTab !== "Testimonials" && (
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

      {/* ── Add/Edit Program Modal ── */}
      {formOpen && (
        <div
          className="fixed inset-0 z-[210] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) setFormOpen(false); }}
        >
          <div
            className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-5 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-display font-black text-slate-800 text-lg">
                {editingProgram ? "Edit Program" : "Add Program"}
              </h3>
              <button
                onClick={() => setFormOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center cursor-pointer transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Modal Scrollable Form Body */}
            <form onSubmit={handleSaveProgram} className="flex-1 overflow-y-auto p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Title */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Program Title</label>
                  <input
                    type="text"
                    required
                    value={progTitle}
                    onChange={(e) => setProgTitle(e.target.value)}
                    placeholder="e.g. Business Intelligence & Data Analytics"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Category</label>
                  <select
                    value={progCategory}
                    onChange={(e) => setProgCategory(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all bg-white"
                  >
                    <option value="DATA ANALYTICS">DATA ANALYTICS</option>
                    <option value="ARTIFICIAL INTELLIGENCE & MEDIA TECHNOLOGY">ARTIFICIAL INTELLIGENCE & MEDIA TECHNOLOGY</option>
                    <option value="DEVOPS">DEVOPS</option>
                    <option value="HOSPITAL ADMINISTRATION">HOSPITAL ADMINISTRATION</option>
                    <option value="DIGITAL MARKETING & E-COMMERCE">DIGITAL MARKETING & E-COMMERCE</option>
                  </select>
                </div>

                {/* University */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">University Name</label>
                  <input
                    type="text"
                    required
                    value={progUniversity}
                    onChange={(e) => setProgUniversity(e.target.value)}
                    placeholder="e.g. Canadian Institute of Technology (CIT)"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>

                {/* University Initial */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">University Initial</label>
                  <input
                    type="text"
                    required
                    maxLength={1}
                    value={progUnivInitial}
                    onChange={(e) => setProgUnivInitial(e.target.value.toUpperCase())}
                    placeholder="e.g. C"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>

                {/* Duration */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Duration</label>
                  <input
                    type="text"
                    required
                    value={progDuration}
                    onChange={(e) => setProgDuration(e.target.value)}
                    placeholder="e.g. 12h"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Rating</label>
                  <input
                    type="number"
                    step="0.1"
                    min="1"
                    max="5"
                    required
                    value={progRating}
                    onChange={(e) => setProgRating(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>

                {/* Students count */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Students Enrolled</label>
                  <input
                    type="text"
                    required
                    value={progStudents}
                    onChange={(e) => setProgStudents(e.target.value)}
                    placeholder="e.g. 1,240+"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>

                {/* Image URL */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Image URL</label>
                  <input
                    type="text"
                    required
                    value={progImage}
                    onChange={(e) => setProgImage(e.target.value)}
                    placeholder="e.g. https://images.unsplash.com/photo-..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>

                {/* Description */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Description</label>
                  <textarea
                    required
                    rows={4}
                    value={progDesc}
                    onChange={(e) => setProgDesc(e.target.value)}
                    placeholder="Enter course overview..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all resize-none animate-none"
                  />
                </div>

                {/* Learning Points */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Learning Points (One per line)</label>
                  <textarea
                    rows={4}
                    value={progLearningPoints}
                    onChange={(e) => setProgLearningPoints(e.target.value)}
                    placeholder="Master global industry frameworks&#10;Deploy AI solutions&#10;Lead engineering teams"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all resize-none animate-none"
                  />
                </div>
              </div>

              {/* Form Actions Footer */}
              <div className="pt-4 border-t border-slate-100 flex justify-end gap-3 bg-white">
                <button
                  type="button"
                  onClick={() => setFormOpen(false)}
                  className="px-5 py-2.5 border border-slate-200 rounded-xl font-bold text-xs text-slate-500 hover:bg-slate-50 transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs shadow-sm shadow-blue-600/10 transition-all cursor-pointer"
                >
                  {editingProgram ? "Update Program" : "Create Program"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── Add/Edit Testimonial Modal ── */}
      {testFormOpen && (
        <div
          className="fixed inset-0 z-[210] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) setTestFormOpen(false); }}
        >
          <div
            className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <h2 className="font-display font-black text-slate-800 text-base">
                {editingTestimonial ? "Edit Testimonial" : "Add Testimonial"}
              </h2>
              <button
                onClick={() => setTestFormOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:bg-slate-100 transition-all cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal form */}
            <form onSubmit={handleSaveTestimonial} className="flex-1 overflow-y-auto p-6">
              <div className="flex flex-col gap-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={testName}
                    onChange={(e) => setTestName(e.target.value)}
                    placeholder="e.g. Arjun Sharma"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>

                {/* Designation */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Designation <span className="text-slate-400 font-normal">(optional)</span></label>
                  <input
                    type="text"
                    value={testDesignation}
                    onChange={(e) => setTestDesignation(e.target.value)}
                    placeholder="e.g. Software Engineer, CIT Batch 2024"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>

                {/* Testimonial Text */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Testimonial Text *</label>
                  <textarea
                    required
                    rows={4}
                    value={testText}
                    onChange={(e) => setTestText(e.target.value)}
                    placeholder="Write the testimonial here..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                  />
                </div>

                {/* Media Type */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Media Type *</label>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setTestMediaType("photo")}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        testMediaType === "photo"
                          ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                          : "border-slate-200 text-slate-500 hover:bg-slate-50"
                      }`}
                    >
                      <Image size={13} /> Photo
                    </button>
                    <button
                      type="button"
                      onClick={() => setTestMediaType("video")}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        testMediaType === "video"
                          ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                          : "border-slate-200 text-slate-500 hover:bg-slate-50"
                      }`}
                    >
                      <Video size={13} /> Video
                    </button>
                  </div>
                </div>

                {/* Media URL */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    {testMediaType === "photo" ? "Photo URL *" : "Video URL *"}
                  </label>
                  <input
                    type="url"
                    required
                    value={testMediaUrl}
                    onChange={(e) => setTestMediaUrl(e.target.value)}
                    placeholder={testMediaType === "photo" ? "https://example.com/photo.jpg" : "https://example.com/video.mp4"}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                  <p className="text-[10px] text-slate-400 mt-1 font-medium">
                    {testMediaType === "photo" ? "Paste a direct image link (JPG, PNG, WebP)" : "Paste a direct MP4 video link or hosted video URL"}
                  </p>
                </div>

                {/* Preview */}
                {testMediaUrl && (
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Preview</label>
                    <div className="w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-50" style={{ aspectRatio: "16/9" }}>
                      {testMediaType === "video" ? (
                        <video src={testMediaUrl} className="w-full h-full object-cover" controls preload="metadata" />
                      ) : (
                        <img src={testMediaUrl} alt="preview" className="w-full h-full object-cover" />
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Form Actions */}
              <div className="pt-5 border-t border-slate-100 mt-5 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setTestFormOpen(false)}
                  className="px-5 py-2.5 border border-slate-200 rounded-xl font-bold text-xs text-slate-500 hover:bg-slate-50 transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs shadow-sm shadow-blue-600/10 transition-all cursor-pointer"
                >
                  {editingTestimonial ? "Update Testimonial" : "Add Testimonial"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
