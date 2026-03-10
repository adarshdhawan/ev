"use client";

import { ArrowRight } from "lucide-react";

export default function Nextpanel() {
  return (
    <section className="px-6 pb-16 pt-2 sm:px-10 lg:px-14">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="relative overflow-hidden rounded-[22px] bg-[radial-gradient(circle_at_20%_20%,rgba(180,220,200,0.6),rgba(80,120,110,0.9))] p-4 shadow-[0_24px_50px_rgba(15,23,42,0.18)]">
          <div className="relative h-[280px] w-full rounded-[18px] bg-[linear-gradient(145deg,#cfe3d6,#86a59a)] sm:h-[320px]">
            <div className="absolute inset-0 rounded-[18px] border border-white/40" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_40%)]" />
          </div>
          <p className="absolute bottom-6 left-6 text-lg font-semibold text-white">
            Planning shouldn&apos;t
            <br />
            be a strategy session.
          </p>
        </div>

        <div className="space-y-5 lg:justify-self-end lg:mr-8 lg:text-right">
          <h3 className="text-3xl font-semibold leading-[1.2] text-emerald-600 sm:text-4xl">
            Driving An EV Is Easy.
            <br />
            Planning The Trip Is The
            <br />
            Hard Part.
          </h3>
          <p className="max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg lg:ml-auto">
            On long trips, range changes and charger availability is uncertain. Most apps only show
            locations, not how much battery you&apos;ll have when you get there. You end up adjusting
            plans on the go and hoping things work out.
          </p>
          <p className="text-base font-semibold text-slate-700 sm:text-lg">
            That uncertainty is what makes EV trips stressful.
          </p>
          <div className="lg:flex lg:justify-end">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(16,185,129,0.25)] transition hover:bg-emerald-700"
            >
              Plan your trip
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
