"use client";

import { ArrowRight, Download } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "./Navbar";
import HeroVisual from "./Animation";

function HeroCopy() {
  const copyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-copy-item",
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.1,
        },
      );
    }, copyRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={copyRef} className="max-w-2xl space-y-8">
      <h1 className="hero-copy-item text-3xl font-semibold leading-[1.15] sm:text-4xl lg:text-5xl">
        <span className="text-emerald-600">Plan your EV trip.</span>
        <br />
        <span className="text-slate-800">Travel with</span>
        <br />
        <span className="text-emerald-600">assurance</span>
      </h1>
      <p className="hero-copy-item max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg">
        <span className="font-semibold text-emerald-600">EVJoints</span> helps you plan your route
        and charging stops, and shows your battery levels at every stop, accounting for elevation
        changes.
      </p>

      <div className="hero-copy-item flex flex-wrap items-center gap-3">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-emerald-700"
        >
          Plan your trip
          <ArrowRight className="h-5 w-5" />
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-[#f1f1f1] px-6 py-3 text-lg font-semibold text-emerald-700 transition hover:bg-[#eaeaea]"
        >
          <Download className="h-5 w-5" />
          Download the app
        </button>
      </div>

      <div className="hero-copy-item flex flex-wrap items-center gap-4 pt-1">
        <div className="flex -space-x-2">
          <span className="h-11 w-11 rounded-full border-2 border-white bg-emerald-200" />
          <span className="h-11 w-11 rounded-full border-2 border-white bg-emerald-300" />
          <span className="h-11 w-11 rounded-full border-2 border-white bg-emerald-400" />
          <span className="h-11 w-11 rounded-full border-2 border-white bg-emerald-500" />
        </div>
        <p className="text-2xl font-semibold text-amber-500">★ ★ ★ ★ ★</p>
        <p className="text-2xl text-slate-700">
          <span className="font-bold">4.8 / 5</span> on Google Reviews
        </p>
      </div>
      <p className="hero-copy-item text-xl text-slate-600">
        Trusted by <span className="font-bold text-slate-800">4,000+ EV drivers</span> across India
      </p>
    </div>
  );
}

export default function Homepage() {
  return (
    <main className="min-h-screen bg-[#f3f4f3] pb-10">
      <Navbar />
      <section className="px-4 pb-10 pt-8 sm:px-8 lg:px-12">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <HeroCopy />
          <HeroVisual />
        </div>
      </section>
    </main>
  );
}
