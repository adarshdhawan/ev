import { forwardRef } from "react";

const HeroHeader = forwardRef<HTMLSpanElement>(function HeroHeader(_, ref) {
  return (
    <>
      <h1 className="hero-copy-item text-4xl font-semibold leading-[1.05] lg:text-5xl lg:text-6xl">
        <span className="text-emerald-600">Plan your EV trip.</span>
        <br />
        <span className="text-slate-800">Travel with</span>
        <br />
        <span ref={ref} className="text-emerald-600">
          efficiency
        </span>
      </h1>
      <p className="hero-copy-item max-w-lg text-base leading-relaxed text-slate-700 sm:text-lg">
        <span className="font-semibold text-emerald-600">EVJoints</span> helps you plan your route
        and charging stops, and shows your battery levels at every stop, accounting for elevation
        changes.
      </p>
    </>
  );
});

export default HeroHeader;
