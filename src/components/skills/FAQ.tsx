"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "What skills are included in the program?", a: "The program covers AI tools, digital marketing, data analytics, business intelligence, supply chain management, virtual reality for business, and more. All curricula are designed in collaboration with CIT (Canadian Institute of Technology) and aligned with current industry demands. You'll also get IELTS coaching and live project experience." },
  { q: "How long is the program?",                 a: "The full program runs for 6 months: Months 1–3 cover CIT international university training + IELTS coaching, Months 4–5 involve intensive skill development and live projects, and Month 6 is dedicated to internship and placement support. The program is designed for online delivery, so you can participate from anywhere in Kerala." },
  { q: "Will I receive certificates?",             a: "Yes! You will receive 3 certificates upon successful completion: (1) University Certificate from CIT, (2) Course Completion Certificate from World Passport / SkillDad, and (3) Internship Certificate from your host company. All certificates are digitally verifiable." },
  { q: "Is internship included?",                  a: "Yes, the program includes an internship facilitated by World Passport with our partner companies. The internship is aligned with your program specialisation and provides real work experience. This is coordinated and assisted — work timelines and placements depend on partner availability." },
  { q: "Who can join this program?",               a: "The program is open to final year students, fresh graduates, working professionals looking to upskill, career switchers wanting international credentials, students planning to pursue higher studies abroad, and anyone interested in building a global career. If you want international-grade skills, this program is for you." },
  { q: "How does placement assistance work?",      a: "Placement assistance includes one-on-one career counselling, professional resume and LinkedIn profile building, mock interview training, access to job opportunities through our partner network, and ongoing guidance through the job search process. We actively support and guide you, though job outcomes depend on individual performance and market conditions." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-14" data-aos="fade-up">
          <div>
            <span className="badge badge-red mb-5">FAQ</span>
            <h2
              className="font-display font-black text-brand-dark leading-[1.1]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              Frequently Asked{" "}
              <span className="text-gradient">Questions</span>
            </h2>
          </div>
          <div className="lg:pt-10">
            <p className="text-gray-500 text-lg leading-relaxed">
              Everything you need to know before you enrol.
            </p>
          </div>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 60}
                className="rounded-xl bg-white border overflow-hidden transition-all duration-300"
                style={{
                  borderColor: isOpen ? "#E63946" : "#F3F4F6",
                  boxShadow: isOpen ? "0 8px 30px rgba(230,57,70,0.06)" : "0 2px 12px rgba(17,24,39,0.03)",
                }}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-display font-bold text-base leading-snug transition-colors ${
                      isOpen ? "text-brand-red" : "text-brand-dark hover:text-brand-red"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300"
                    style={{ background: isOpen ? "#E63946" : "#F3F4F6" }}
                  >
                    {isOpen
                      ? <Minus size={14} className="text-white" />
                      : <Plus  size={14} className="text-gray-500" />
                    }
                  </div>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? "400px" : "0px" }}
                >
                  <div className="px-6 pb-6">
                    <div className="h-px mb-4 bg-gray-100" />
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-4">Still have questions?</p>
          <a href="#contact" className="btn-primary inline-flex">Talk to a Counsellor</a>
        </div>
      </div>
    </section>
  );
}
