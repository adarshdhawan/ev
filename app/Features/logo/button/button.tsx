"use client";

import { forwardRef } from "react";
import { ArrowRight, Download } from "lucide-react";

export function PlanTripButton() {
  return (
    <button
      type="button"
      className="ml-0 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#10b981] px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#059669] hover:shadow-lg active:scale-95 lg:ml-10"
    >
      Plan your trip
      <ArrowRight className="h-5 w-5" />
    </button>
  );
}

interface DownloadButtonProps {
  ringRef?: React.RefObject<SVGRectElement | null>;
}

export const DownloadButton = forwardRef<
  HTMLButtonElement,
  DownloadButtonProps
>(function DownloadButton({ ringRef }, ref) {
  return (
    <button
      ref={ref}
      type="button"
      className="group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#f8fafc] px-8 py-4 text-base font-semibold text-[#10b981] border border-transparent transition-all duration-300 hover:bg-[#10b981] hover:text-white hover:shadow-lg active:scale-95 overflow-hidden"
    >
      {/* animated border */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 240 70"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="borderComet" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#10b981" stopOpacity="1" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.6" />
            <stop offset="90%" stopColor="#10b981" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect
          x="2"
          y="2"
          width="236"
          height="66"
          rx="34"
          ry="34"
          fill="none"
          stroke="url(#borderComet)"
          strokeWidth="2"
          strokeDasharray="120 360"
          className="border-comet"
          style={{
            filter: "drop-shadow(0 0 8px #10b981)",
          }}
        />
      </svg>

      {/* content */}
      <span className="relative flex items-center gap-2">
        <Download className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:text-white" />
        Download the app
      </span>
    </button>
  );
});
