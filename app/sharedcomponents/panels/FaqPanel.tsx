"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Plus } from "lucide-react";

const questions = [
  "How accurate is the trip planning?",
  "Can I plan long highway trips with EVJoints?",
  "Does it work across different charging networks?",
  "Does it show live charger availability?",
];

export default function FaqPanel() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-item",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: "power3.out" },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white px-6 py-12 sm:px-10 lg:px-14">
      <div className="mx-auto w-full max-w-6xl text-center">
        <button
          type="button"
          className="faq-item inline-flex items-center gap-2 rounded-full bg-[#0ea65a] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(14,166,90,0.25)]"
        >
          Explore EVGuide <span aria-hidden="true">→</span>
        </button>

        <h2 className="faq-item mt-10 text-[38px] font-semibold text-[#11a85a] sm:text-[42px]">
          Questions EV owners often ask
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {questions.map((question) => (
            <div
              key={question}
              className="faq-item flex min-h-[76px] items-center justify-between rounded-[20px] bg-white px-6 py-4 text-left shadow-[0_12px_24px_rgba(15,23,42,0.08)]"
            >
              <span className="text-[15px] font-semibold text-slate-700">{question}</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf7f0] text-[#0ea65a]">
                <Plus className="h-5 w-5" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
