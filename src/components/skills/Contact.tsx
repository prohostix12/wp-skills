"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message.");
      }
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* ── Background Image ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 1,
          zIndex: 0,
        }}
      />

      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{ backgroundImage: "linear-gradient(rgba(29,78,216,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(29,78,216,0.3) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-blue-700 bg-blue-100 border border-blue-200 uppercase tracking-wider mb-4">
            Get in Touch
          </span>
          <h2 className="font-display font-black text-black mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Start Your Journey — <span className="text-red-600">Talk to Us Today</span>
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto leading-relaxed text-black/60">
            Book your free career counselling call or send us a message. Our team responds within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Form */}
          <div className="rounded-2xl p-8 bg-white border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center border border-green-200">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="font-display font-bold text-black text-xl">Message Sent!</h3>
                <p className="max-w-xs text-sm leading-relaxed text-slate-500">
                  Thank you! Our team will get back to you within 24 hours to schedule your free counselling call.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
                  className="text-blue-700 text-sm font-semibold hover:underline mt-2 cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display font-bold text-black text-xl mb-6">
                  Book Free Counselling
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="enter your name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-black placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="enter your email"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-black placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                    />
                  </div>
                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="phone">
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="enter your phone number"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-black placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                    />
                  </div>
                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="message">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="enter your message"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-black placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all resize-none"
                    />
                  </div>
                  {error && (
                    <p className="text-red-600 text-sm text-center py-2 px-4 rounded-xl bg-red-50 border border-red-200">{error}</p>
                  )}
                  <button type="submit" disabled={loading} className="btn-primary justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed">
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending…
                      </span>
                    ) : (
                      <><Send size={16} /> Send Message</>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Right — Info + Map */}
          <div className="flex flex-col gap-6">
            {[
              { icon: <Phone size={20} />, label: "Phone / WhatsApp", value: "+91 9292173857", href: "tel:+919292173857", color: "#1D4ED8" },
              { icon: <Mail size={20} />, label: "Email", value: "salesheadworldpassportskills@gmail.com", href: "mailto:salesheadworldpassportskills@gmail.com", color: "#D9383A" },
              { icon: <MapPin size={20} />, label: "Office Address", value: "St.george forane Church Building ,Palarivattam,Edappally ,Kochi,Eranakulam,Kerala 682024", href: "#", color: "#1D4ED8" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 bg-white border border-slate-200 shadow-sm hover:scale-[1.01]"
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${c.color}`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 10px 25px rgba(0,0,0,0.05)`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${c.color}15`, color: c.color, border: `1px solid ${c.color}25` }}>
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-0.5 text-slate-500">{c.label}</p>
                  <p className="font-semibold text-sm leading-snug text-black">{c.value}</p>
                </div>
              </a>
            ))}

            {/* Google Map Embed */}
            <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-slate-200"
              style={{ height: "280px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.5!2d76.3!3d10.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5f6ef5d5!2sEdapally%2C%20Ernakulam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, opacity: 0.95 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="World Passport Office Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
