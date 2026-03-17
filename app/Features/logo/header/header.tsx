import { forwardRef } from "react";

const HeroHeader = forwardRef<HTMLSpanElement>(function HeroHeader(_, ref) {
  return (
    <div className="mt-0 flex flex-col items-center gap-4 text-center lg:-mt-57 lg:ml-11 lg:items-start lg:text-left">

      <h1 className="font-[Inter,system-ui,-apple-system,sans-serif] hero-copy-item text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-5xl">

        {/* Line 1 */}
        <span className="block whitespace-nowrap text-[#0DA861]">
          <span className="sm:hidden">Plan your EV trip. Travel</span>
          <span className="hidden sm:inline">Plan your EV trip.</span>
        </span>

        {/* Line 2 */}
        <span className="block whitespace-nowrap">
          <span className="hidden text-slate-800 sm:inline">Travel with </span>
          <span className="text-slate-800 sm:hidden">with</span><span
            ref={ref}
            className="inline-block min-w-[10ch] text-center text-emerald-600 lg:text-left"
          >
            efficiency
          </span>
        </span>
      </h1>

      <p className="font-[Manrope,system-ui,sans-serif] hero-copy-item text-sm max-w-md text-base leading-relaxed text-slate-700 sm:max-w-lg sm:text-lg lg:text-xl">
        <span className="font-semibold text-emerald-600">EVJoints</span> helps you plan your route
        and charging stops, and shows your battery levels at every stop, accounting for elevation
        changes.
      </p>

    </div>
  );
});

export default HeroHeader;
