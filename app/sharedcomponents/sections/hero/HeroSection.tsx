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
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.1,
        }
      );

      if (wordRef.current) {
        const words = ["efficiency", "performance", "confidence"];
        let index = 0;

        wordRef.current.textContent = words[index];
        gsap.set(wordRef.current, { opacity: 1, y: 0 });

        const wordTimeline = gsap.timeline({
          repeat: -1,
          repeatDelay: 1.4,
        });

        wordTimeline
          .to(wordRef.current, {
            opacity: 0,
            y: -8,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
              index = (index + 1) % words.length;
              if (wordRef.current) {
                wordRef.current.textContent = words[index];
              }
            },
          })
          .to(wordRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          });
      }
    }, copyRef);

    const button = downloadBtnRef.current;
    const ring = downloadRingRef.current;

    let ringTl: gsap.core.Timeline | null = null;

    if (button && ring) {
      ringTl = gsap.timeline({ paused: true, repeat: -1 });

      ringTl
        .set(ring, { strokeDashoffset: 220 })
        .to(ring, {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: "power2.inOut",
        })
        .to(ring, {
          strokeDashoffset: -220,
          duration: 1.2,
          ease: "power2.inOut",
        });

      const handleEnter = () => ringTl?.play();
      const handleLeave = () => {
        ringTl?.pause(0);
        gsap.set(ring, { strokeDashoffset: 220 });
      };

      button.addEventListener("mouseenter", handleEnter);
      button.addEventListener("mouseleave", handleLeave);

      return () => {
        button.removeEventListener("mouseenter", handleEnter);
        button.removeEventListener("mouseleave", handleLeave);
        ctx.revert();
      };
    }

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={copyRef}
      className={`${inter.className} 
      mx-auto
      mt-16
      max-w-xl
      space-y-6
      px-4
      text-center
      sm:mt-12
      sm:px-6
      lg:mx-0
      lg:mt-0
      lg:max-w-2xl
      lg:text-left`}
    >
      <HeroHeader ref={wordRef} />

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
      px-4
      pt-8
      pb-12
      sm:px-8
      lg:px-16
      "
    >
      {/* Background Blur */}
      <div className="pointer-events-none absolute inset-0 -z-10">

        <div className="absolute -left-16 top-0 h-40 w-40 rounded-full bg-emerald-200/20 blur-3xl sm:h-56 sm:w-56 lg:h-64 lg:w-64" />

        <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-sky-200/20 blur-[100px] sm:h-64 sm:w-64 lg:h-72 lg:w-72" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.06),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.06),transparent_40%)]" />

      </div>

      {/* Layout */}
      <div
        className="
        mx-auto
        grid
        w-full
        max-w-7xl
        grid-cols-1
        items-center
        gap-12
        lg:grid-cols-2
        "
      >
        <HeroCopy />
        <HeroVisual />
      </div>
    </section>
  );
} 
