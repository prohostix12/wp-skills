"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: "#060418" }}>
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(rgba(150,120,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(150,120,255,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <span className="badge badge-teal mb-4">Get in Touch</span>
          <h2 className="font-display font-black text-white mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Start Your Journey — <span className="text-gradient">Talk to Us Today</span>
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            Book your free career counselling call or send us a message. Our team responds within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Form */}
          <div className="rounded-2xl p-8 transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.3)"
            }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/30">
                  <CheckCircle size={32} className="text-green-400" />
                </div>
                <h3 className="font-display font-bold text-white text-xl">Message Sent!</h3>
                <p className="max-w-xs text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Thank you! Our team will get back to you within 24 hours to schedule your free counselling call.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
                  className="text-purple-400 text-sm font-semibold hover:underline mt-2 cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display font-bold text-white text-xl mb-6">
                  Book Free Counselling
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-white/70 mb-1.5" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 outline-none transition-all input-dark"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-white/70 mb-1.5" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 outline-none transition-all input-dark"
                    />
                  </div>
                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-white/70 mb-1.5" htmlFor="phone">
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 outline-none transition-all input-dark"
                    />
                  </div>
                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-white/70 mb-1.5" htmlFor="message">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your career goals or ask any question..."
                      className="w-full px-4 py-3 outline-none transition-all resize-none input-dark"
                    />
                  </div>
                  <button type="submit" className="btn-primary justify-center mt-2">
                    <Send size={16} /> Send Message
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Right — Info + Map */}
          <div className="flex flex-col gap-6">
            {[
              { icon: <Phone size={20} />, label: "Phone / WhatsApp", value: "+91 9205031277", href: "tel:+919205031277", color: "#60a5fa" },
              { icon: <Mail size={20} />, label: "Email", value: "bm@worldpassport.in", href: "mailto:bm@worldpassport.in", color: "#a78bfa" },
              { icon: <MapPin size={20} />, label: "Office Address", value: "Ernakulam, Near St. Georges Syro-Malabar Church, Edapally, Kerala", href: "#", color: "#34d399" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 tilt-on-hover"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  backdropFilter: "blur(12px)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${c.color}40`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 25px ${c.color}15`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${c.color}15`, color: c.color, border: `1px solid ${c.color}25` }}>
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{c.label}</p>
                  <p className="font-semibold text-sm leading-snug text-white">{c.value}</p>
                </div>
              </a>
            ))}

            {/* Google Map Embed */}
            <div className="rounded-2xl overflow-hidden shadow-lg"
              style={{ height: "280px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.5!2d76.3!3d10.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5f6ef5d5!2sEdapally%2C%20Ernakulam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) opacity(0.85)" }}
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
