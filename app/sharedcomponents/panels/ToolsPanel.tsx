"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Calculator, MapPin, Sparkles, Timer } from "lucide-react";

const tools = [
  {
    title: "Charging Station\nLocator",
    description:
      "Find nearby charging stations with real-time availability, connector types, and pricing info — all in one place.",
    cta: "Find stations",
    icon: MapPin,
  },
  {
    title: "Charging Time\nEstimator",
    description:
      "Calculate how long it takes to charge your EV based on your battery level, charger type, and vehicle model.",
    cta: "Estimate time",
    icon: Timer,
  },
  {
    title: "EV vs Fuel Cost\nCalculator",
    description:
      "Compare running costs between EV and petrol vehicles to see how much you save on every trip.",
    cta: "Compare costs",
    icon: Calculator,
  },
];

export default function ToolsPanel() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".tools-item",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: "power3.out" },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white px-6 py-12 sm:px-10 lg:px-14">
      <div className="mx-auto w-full max-w-6xl text-center">
        <h2 className="tools-item text-[38px] font-semibold text-[#11a85a] sm:text-[42px]">
          Helpful tools for everyday EV decisions
        </h2>
        <p className="tools-item mt-3 text-[16px] leading-[1.6] text-slate-600">
          Simple tools to help you choose the right EV, estimate charging time, and compare costs.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map(({ title, description, cta, icon: Icon }) => (
            <div
              key={title}
              className="tools-item rounded-[26px] bg-[#d9f2e6] p-6 text-left shadow-[0_14px_26px_rgba(15,23,42,0.08)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef8f2] text-[#0ea65a]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="whitespace-pre-line text-[18px] font-semibold text-slate-900">
                {title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.6] text-slate-600">{description}</p>
              <button
                type="button"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0ea65a] px-5 py-2 text-[13px] font-semibold text-white"
              >
                {cta} <span aria-hidden="true">→</span>
              </button>
            </div>
          ))}

          <div className="tools-item flex h-full flex-col justify-between rounded-[26px] bg-[#d9f2e6] p-6 text-left shadow-[0_14px_26px_rgba(15,23,42,0.08)]">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef8f2] text-[#0ea65a]">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-[18px] font-semibold text-slate-700">EV Match</h3>
              <p className="mt-3 text-[14px] leading-[1.6] text-slate-500">
                Get personalized EV recommendations based on your budget, driving habits, and lifestyle
                needs.
              </p>
            </div>
            <span className="mt-6 inline-flex w-fit items-center rounded-full bg-white px-4 py-2 text-[12px] font-semibold text-[#0ea65a]">
              Coming soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
