"use client";

import { forwardRef, useEffect, useRef } from "react";
import { ArrowRight, Download } from "lucide-react";
import gsap from "gsap";

export function PlanTripButton() {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-3 rounded-full bg-emerald-600 px-7 py-3 text-base font-semibold text-white transition hover:bg-emerald-700"
    >
      Plan your trip
      <ArrowRight className="h-5 w-5" />
    </button>
  );
}

export const DownloadButton = forwardRef<HTMLButtonElement>(function DownloadButton(
  _,
  ref
) {
  const borderRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    if (!borderRef.current) return;

    gsap.to(borderRef.current, {
      strokeDashoffset: -400,
      duration: 3,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <div className="relative inline-block">
      {/* Animated Border */}
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none"
        viewBox="0 0 300 70"
        preserveAspectRatio="none"
      >
        <rect
          ref={borderRef}
          x="2"
          y="2"
          width="296"
          height="66"
          rx="35"
          ry="35"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray="80 320"
          strokeDashoffset="0"
          className="text-emerald-400"
        />
      </svg>

      {/* Button */}
      <button
        ref={ref}
        type="button"
        className="relative inline-flex items-center gap-3 rounded-full border border-slate-200 bg-[#f1f1f1] px-7 py-3 text-base font-semibold text-emerald-700 transition hover:border-emerald-500 hover:bg-emerald-600 hover:text-white"
      >
        <Download className="h-5 w-5" />
        Download the app
      </button>
    </div>
  );
});