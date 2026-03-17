"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Inter } from "next/font/google";

import HeroHeader from "../../../Features/logo/header/header";
import HeroFooters from "../../../Features/logo/footers/footers";
import { DownloadButton, PlanTripButton } from "../../../Features/logo/button/button";
import HeroVisual from "./HeroVisual";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function HeroCopy() {
  const copyRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);
  const downloadBtnRef = useRef<HTMLButtonElement>(null);
  const downloadRingRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-copy-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.9,
          ease: "power3.out",
        }
      );

      if (wordRef.current) {
        const words = ["efficiency", "performance", "confidence"];
        let index = 0;

        wordRef.current.textContent = words[index];

        const tl = gsap.timeline({
          repeat: -1,
          repeatDelay: 1.3,
        });

        tl.to(wordRef.current, {
          opacity: 0,
          y: -10,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            index = (index + 1) % words.length;
            if (wordRef.current) wordRef.current.textContent = words[index];
          },
        }).to(wordRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    }, copyRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={copyRef}
      className={`${inter.className}
      mx-auto
      w-full
      max-w-xl
      space-y-8
      text-center
      lg:text-left`}
    >
      {/* Header */}
      <div className="hero-copy-item">
        <HeroHeader ref={wordRef} />
      </div>

      {/* Hero Visual (Mobile Only) */}
      <div className="hero-copy-item flex justify-center lg:hidden">
        <HeroVisual />
      </div>

      {/* Buttons */}
      <div
        className="
        hero-copy-item
        flex
        flex-col
        items-center
        gap-4
        sm:flex-row
        sm:justify-center
        lg:justify-start
        "
      >
        <PlanTripButton />
        <DownloadButton ref={downloadBtnRef} ringRef={downloadRingRef} />
      </div>

      <HeroFooters />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      className="
      relative
      min-h-screen
      lg:min-h-0
      overflow-hidden
      px-6
      pt-16
      pb-6
      sm:px-10
      lg:px-16
      lg:pb-0
      "
    >
      {/* Background Blur */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-emerald-200/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-sky-200/20 blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.06),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.06),transparent_40%)]" />
      </div>

      {/* Layout */}
      <div
        className="
        mx-auto
        grid
        max-w-7xl
        grid-cols-1
        items-center
        gap-12
        lg:grid-cols-2
        "
      >
        {/* Text */}
        <HeroCopy />

        {/* Hero Visual Desktop */}
        <div className="hidden lg:flex justify-center ml-15 mt-10">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
