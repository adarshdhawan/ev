"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const logos = ["TATA POWER EZ CHARGE", "EVDock", "ZEON Charging", "goego"];

export default function ChargingNetworksPanel() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".charging-item",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out" },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white px-6 py-12 sm:px-10 lg:px-14">
      <div className="mx-auto w-full max-w-6xl text-center">
        <h2 className="charging-item text-[38px] font-semibold text-[#11a85a] sm:text-[42px]">
          Works across India&apos;s charging networks
        </h2>
        <p className="charging-item mt-3 text-[16px] leading-[1.6] text-slate-600">
          EVJoints brings together multiple charging networks so your trip planning is not limited to
          just one app.
        </p>

        <div className="charging-item mt-6 flex items-center justify-center">
          <div className="inline-flex rounded-full bg-[#eff3f1] p-1 text-sm font-semibold text-slate-500">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-[#0ea65a] px-5 py-2 text-white shadow-[0_6px_14px_rgba(14,166,90,0.2)]"
            >
              Integrated partners
              <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-semibold uppercase">
                Live
              </span>
            </button>
            <button
              type="button"
              className="rounded-full px-5 py-2 text-slate-600 transition-colors"
            >
              Other supported networks
            </button>
          </div>
        </div>

        <div className="charging-item mt-10 flex flex-wrap items-center justify-center gap-12 text-[18px] font-semibold text-slate-400">
          {logos.map((logo) => (
            <span key={logo} className="uppercase tracking-wide">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
