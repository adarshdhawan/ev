"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { PlanTripButton } from "../Features/logo/button/button";

export default function Panelseocnd() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".panel-second-item",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="panel-second-item space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-emerald-600 sm:text-4xl">
            Finding Chargers Is Not
            <br />
            Enough. You Need A
            <br />
            Plan.
          </h2>
          <p className="max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            Most Apps Help You Find Charging Stations. EVJoints Helps You Plan Your Journey. It Tells You
            Where To Stop, When To Stop, And What Your Battery Will Look Like When You Get There.
          </p>
          <p className="text-sm font-semibold text-slate-700 sm:text-base">
            That Confidence Is What Makes EV Trips Effortless.
          </p>
          <PlanTripButton />
        </div>

        <div className="panel-second-item">
          <div className="relative mx-auto h-[320px] w-full max-w-[420px] overflow-hidden rounded-[26px] bg-[linear-gradient(135deg,#cfe6db,#bfe0d1_45%,#a7d6c2)] shadow-[0_22px_40px_rgba(15,23,42,0.12)] sm:h-[360px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.7),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.25),transparent_40%)]" />
            <div className="absolute inset-x-6 bottom-6 text-lg font-semibold text-white">
              Explore while you top up.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
