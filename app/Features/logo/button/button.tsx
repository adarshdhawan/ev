import { forwardRef } from "react";
import type { Ref } from "react";
import { ArrowRight, Download } from "lucide-react";

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

type DownloadButtonProps = {
  ringRef: Ref<SVGCircleElement>;
};

export const DownloadButton = forwardRef<HTMLButtonElement, DownloadButtonProps>(function DownloadButton(
  { ringRef },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      className="download-button group relative inline-flex items-center gap-3 rounded-full border border-slate-200 bg-[#f1f1f1] px-7 py-3 text-base font-semibold text-emerald-700 transition hover:border-emerald-500 hover:bg-emerald-600 hover:text-white"
    >
      <span className="relative flex h-7 w-7 items-center justify-center">
        <svg className="absolute inset-0 h-7 w-7 -rotate-90" viewBox="0 0 80 80">
          <circle
            cx="40"
            cy="40"
            r="32"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="60 200"
            strokeDashoffset="0"
            className="download-ring-glow text-emerald-200/70"
          />
          <circle
            ref={ringRef}
            cx="40"
            cy="40"
            r="32"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="220"
            strokeDashoffset="220"
            className="text-emerald-200/80 group-hover:text-white"
          />
        </svg>
        <Download className="h-5 w-5" />
      </span>
      Download the app
    </button>
  );
});
