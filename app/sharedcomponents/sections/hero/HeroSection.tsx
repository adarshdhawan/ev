"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import HeroHeader from "../../../Features/logo/header/header";
import HeroFooters from "../../../Features/logo/footers/footers";
import { DownloadButton, PlanTripButton } from "../../../Features/logo/button/button";
import HeroVisual from "./HeroVisual";

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
        },
      );

      if (wordRef.current) {
        const words = ["efficiency", "performance", "confidence"];
        let index = 0;
        wordRef.current.textContent = words[index];
        gsap.set(wordRef.current, { opacity: 1, y: 0 });

        const wordTl = gsap.timeline({ repeat: -1, repeatDelay: 1.4 });
        wordTl
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
    let onEnter: (() => void) | null = null;
    let onLeave: (() => void) | null = null;

    if (button && ring) {
      ringTl = gsap.timeline({ paused: true, repeat: -1 });
      ringTl
        .set(ring, { strokeDashoffset: 220 })
        .to(ring, { strokeDashoffset: 0, duration: 1.2, ease: "power2.inOut" })
        .to(ring, { strokeDashoffset: -220, duration: 1.2, ease: "power2.inOut" });

      onEnter = () => ringTl?.play();
      onLeave = () => {
        ringTl?.pause(0);
        gsap.set(ring, { strokeDashoffset: 220 });
      };

      button.addEventListener("mouseenter", onEnter);
      button.addEventListener("mouseleave", onLeave);
    }

    return () => {
      if (button && onEnter && onLeave) {
        button.removeEventListener("mouseenter", onEnter);
        button.removeEventListener("mouseleave", onLeave);
      }
      ctx.revert();
    };
  }, []);

  return (
    <div ref={copyRef} className="max-w-2xl space-y-6 px-2 sm:px-0 sm:pl-4 lg:pl-10">
      <HeroHeader ref={wordRef} />

      <div className="hero-copy-item flex flex-wrap items-center gap-3">
        <PlanTripButton />
        <DownloadButton ref={downloadBtnRef} ringRef={downloadRingRef} />
      </div>

      <HeroFooters />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] px-6 pb-10 pt-6 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-6 h-64 w-64 rounded-full bg-emerald-200/18 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-sky-200/18 blur-[110px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.06),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.06),transparent_40%)]" />
      </div>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <HeroCopy />
        <HeroVisual />
      </div>
    </section>
  );
}
