"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, BatteryCharging, CreditCard, ScanLine } from "lucide-react";

export default function Panelsix() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(
        ".panel-six-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        },
      );

      if (carRef.current && buttonRef.current && trackRef.current) {
        gsap.to(carRef.current, {
          x: () => {
            const track = trackRef.current;
            const car = carRef.current;
            if (!track || !car) return 0;
            const trackWidth = track.getBoundingClientRect().width;
            const carWidth = car.getBoundingClientRect().width;
            const padding = 48;
            return Math.max(trackWidth - carWidth - padding, 0);
          },
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
            onUpdate: (self) => {
              if (self.progress > 0.92) {
                buttonRef.current?.classList.add("panel-six-glow");
              } else {
                buttonRef.current?.classList.remove("panel-six-glow");
              }
            },
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <button
          ref={buttonRef}
          type="button"
          className="panel-six-item inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-2 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(16,185,129,0.25)] transition"
        >
          View upcoming plans
          <ArrowRight className="h-4 w-4" />
        </button>

        <h2 className="panel-six-item mt-10 text-3xl font-semibold text-emerald-600 sm:text-4xl">
          Planning is just the beginning
        </h2>
        <p className="panel-six-item mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
          EV journeys usually break at the planning stage, so we started by building a trip planner.
          Today, EVJoints helps you plan your trips and find charging stations along the way. Next, we're
          working towards making charging itself simpler and more seamless.
        </p>

        <div className="panel-six-item mt-12 w-full">
          <div
            ref={trackRef}
            className="relative mx-auto flex w-full max-w-4xl items-center justify-between gap-6"
          >
            <div className="flex w-full max-w-xs items-center gap-4 rounded-full border border-emerald-200 bg-white px-5 py-3 shadow-[0_12px_30px_rgba(16,185,129,0.15)]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white">
                <BatteryCharging className="h-5 w-5" />
              </span>
              <div className="text-left">
                <p className="text-sm font-semibold text-slate-800">Live charging</p>
                <span className="mt-1 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Live
                </span>
              </div>
            </div>

            <div className="hidden h-px flex-1 bg-emerald-100 md:block" />

            <div className="flex w-full max-w-xs items-center gap-4 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <ScanLine className="h-5 w-5" />
              </span>
              <div className="text-left">
                <p className="text-sm font-semibold text-slate-800">Scan & start charging</p>
                <span className="mt-1 inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
                  Coming soon
                </span>
              </div>
            </div>

            <div className="hidden h-px flex-1 bg-emerald-100 md:block" />

            <div className="flex w-full max-w-xs items-center gap-4 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <CreditCard className="h-5 w-5" />
              </span>
              <div className="text-left">
                <p className="text-sm font-semibold text-slate-800">Pay and checkout</p>
                <span className="mt-1 inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
                  Coming soon
                </span>
              </div>
            </div>

            <div className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 md:block">
              <div
                ref={carRef}
                className="flex h-10 w-14 items-center justify-center rounded-[18px] bg-[linear-gradient(135deg,#e9f8f0,#bfe8d2)] text-emerald-700 shadow-[0_10px_20px_rgba(16,185,129,0.25)]"
              >
                <svg viewBox="0 0 64 32" className="h-6 w-10">
                  <defs>
                    <linearGradient id="carBody" x1="0" x2="1">
                      <stop offset="0%" stopColor="#0f9b5f" />
                      <stop offset="100%" stopColor="#17b37a" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M10 20c2-6 6-10 13-10h14c6 0 10 4 12 10l3 1v5H8v-5l2-1z"
                    fill="url(#carBody)"
                  />
                  <rect x="24" y="11" width="10" height="6" rx="2" fill="#e6f7ef" />
                  <rect x="36" y="11" width="8" height="6" rx="2" fill="#e6f7ef" />
                  <circle cx="18" cy="26" r="4" fill="#0b3f2a" />
                  <circle cx="46" cy="26" r="4" fill="#0b3f2a" />
                  <circle cx="18" cy="26" r="2" fill="#e6f7ef" />
                  <circle cx="46" cy="26" r="2" fill="#e6f7ef" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
