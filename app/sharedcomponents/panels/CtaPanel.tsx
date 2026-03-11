"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CtaPanel() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-item",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out" },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white px-6 py-12 sm:px-10 lg:px-14">
      <div className="mx-auto w-full max-w-6xl text-center">
        <button
          type="button"
          className="cta-item inline-flex items-center gap-2 rounded-full bg-[#0ea65a] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(14,166,90,0.25)]"
        >
          Explore all EV FAQs <span aria-hidden="true">→</span>
        </button>

        <div className="cta-item mt-10 rounded-[36px] bg-[linear-gradient(135deg,#18a362,#2b7a56)] px-8 py-12 text-left text-white shadow-[0_18px_40px_rgba(15,23,42,0.2)] sm:px-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h3 className="text-[34px] font-semibold leading-[1.1] sm:text-[38px]">
                Plan your next EV
                <br />
                trip with confidence
              </h3>
              <p className="mt-4 text-[15px] leading-[1.6] text-white/85">
                No guessing. No last-minute surprises. Just a properly planned journey.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 lg:justify-end">
              <button
                type="button"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0ea65a]"
              >
                Plan your trip <span aria-hidden="true">→</span>
              </button>
              <button
                type="button"
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white"
              >
                Download the app <span aria-hidden="true">↓</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
