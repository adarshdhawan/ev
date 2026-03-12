import { forwardRef } from "react";

const HeroHeader = forwardRef<HTMLSpanElement>(function HeroHeader(_, ref) {
  return (
    <div className="-mt-20 flex flex-col items-center text-center lg:items-start lg:text-left gap-4">

      <h1 className="font-[Inter,system-ui,-apple-system,sans-serif] hero-copy-item text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-5xl">
        
        {/* Line 1 */}
        <span className="block text-emerald-600">
          Plan your EV trip.
        </span>

        {/* Line 2 */}
        <span className="block whitespace-nowrap">
          <span className="text-slate-800">Travel with </span>
          <span ref={ref} className="text-emerald-600">
            efficiency
          </span>
        </span>

      </h1>

      <p className="font-[Inter,system-ui,-apple-system,sans-serif] hero-copy-item max-w-md text-base leading-relaxed text-slate-700 sm:max-w-lg sm:text-lg lg:text-xl">
        <span className="font-semibold text-emerald-600">EVJoints</span> helps you plan your route
        and charging stops, and shows your battery levels at every stop, accounting for elevation
        changes.
      </p>

    </div>
  );
});

export default HeroHeader;