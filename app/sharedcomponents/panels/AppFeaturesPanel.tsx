"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AppFeaturesPanel() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".app-features-item",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out" },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white px-6 pb-10 pt-14 sm:px-10 lg:px-14">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <p className="app-features-item text-[18px] font-semibold text-slate-700 sm:text-[20px]">
          One App For Planning, Driving, Charging, And Managing Your EV Journeys.
        </p>
        <button
          type="button"
          className="app-features-item mt-6 inline-flex items-center gap-2 rounded-full bg-[#0ea65a] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(14,166,90,0.25)]"
        >
          Explore app features
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}
