"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { PlanTripButton } from "../../../Features/logo/button/button";

export default function CallToActionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".panel-fourth-item",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <p className="panel-fourth-item text-sm font-medium text-slate-600 sm:text-base">
          Your Trip Becomes Predictable Instead Of Uncertain.
        </p>
        <div className="panel-fourth-item mt-5">
          <PlanTripButton />
        </div>
        <h2 className="panel-fourth-item mt-14 text-3xl font-semibold text-emerald-600 sm:text-4xl">
          Built for every kind of EV traveller
        </h2>
        <p className="panel-fourth-item mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
          Whether you take the occasional weekend drive or frequent highway trips, EVJoints is designed to
          grow with you. Simple subscription plans are coming soon.
        </p>
      </div>
    </section>
  );
}
