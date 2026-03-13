"use client";

import { forwardRef } from "react";
import { ArrowRight, Download } from "lucide-react";

export function PlanTripButton() {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#10b981] px-8 py-4 text-lg font-bold text-white transition-all hover:bg-[#059669] hover:shadow-lg active:scale-95"
    >
      Plan your trip
      <ArrowRight className="h-6 w-6" />
    </button>
  );
}

interface DownloadButtonProps {
  ringRef?: React.RefObject<SVGCircleElement | null>;
}

export const DownloadButton = forwardRef<HTMLButtonElement, DownloadButtonProps>(
  function DownloadButton({ ringRef }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-[#f8fafc] px-8 py-4 text-lg font-bold text-[#10b981] border border-transparent transition-all hover:bg-white hover:border-[#10b981]/20 hover:shadow-md active:scale-95"
      >
        <div className="relative flex items-center justify-center">
             <Download className="h-6 w-6" />
             {/* Subtle ring effect if needed later */}
             {ringRef && (
                <svg className="absolute -inset-1 h-8 w-8 -rotate-90 pointer-events-none">
                    <circle
                        ref={ringRef}
                        cx="16"
                        cy="16"
                        r="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="88"
                        strokeDashoffset="88"
                        className="opacity-20"
                    />
                </svg>
             )}
        </div>
        Download the app
      </button>
    );
  }
);