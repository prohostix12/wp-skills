"use client";

import { useState, useEffect } from "react";
import { CheckCircle, X } from "lucide-react";

export default function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-slide-up">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-8 text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center border border-green-200">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h3 className="font-display font-bold text-black text-xl">Message Sent!</h3>
              <p className="max-w-xs text-sm leading-relaxed text-slate-500">
                Thank you! Our team will get back to you within 24 hours to schedule your free counselling call.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 px-6 py-2.5 bg-blue-600 text-white font-bold rounded-xl text-sm hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <h3 className="font-display font-bold text-black text-xl mb-2">
                Book Free Counselling
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                Enter your details below and our experts will guide you.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="popup-name">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="popup-name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-black"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="popup-email">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="popup-email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="enter your email"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="popup-phone">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="popup-phone"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="enter your phone number"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-black"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="popup-message">
                    Your Message
                  </label>
                  <textarea
                    id="popup-message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="enter your message"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-black resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-red-600 text-white font-bold text-sm shadow-md hover:bg-red-700 hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                      Sending...
                    </span>
                  ) : (
                    "Submit Details"
                  )}
                </button>

                {error && (
                  <p className="text-red-500 text-xs font-semibold text-center mt-2 bg-red-50 py-2 rounded-lg border border-red-100">
                    {error}
                  </p>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
