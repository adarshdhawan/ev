"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Navbar";
import HeroVisual from "./Animation";
import Detail from "./Detail";
import Status from "./Status";
import Nextpanel from "./Nextpanel";
import Panel from "./Panel";
import HeroHeader from "../Features/logo/header/header";
import HeroFooters from "../Features/logo/footers/footers";
import { DownloadButton, PlanTripButton } from "../Features/logo/button/button";
import Panelseocnd from "./Panelseocnd";
import Panelthird from "./Panelthird";
import Panelfourth from "./Panelfourth";
import Panelfifth from "./Panelfifth";
import Panelsix from "./Panelsix";

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
    <div ref={copyRef} className="max-w-2xl space-y-6 pl-14">
      <HeroHeader ref={wordRef} />

      <div className="hero-copy-item flex flex-wrap items-center gap-3">
        <PlanTripButton />
        <DownloadButton ref={downloadBtnRef} ringRef={downloadRingRef} />
      </div>

      <HeroFooters />
    </div>
  );
}

export default function Homepage() {
  const scrollCarRef = useRef<HTMLDivElement>(null);
  const scrollPathRef = useRef<SVGPathElement>(null);
  const scrollSvgRef = useRef<SVGSVGElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const car = scrollCarRef.current;
    const path = scrollPathRef.current;
    const svg = scrollSvgRef.current;
    const container = scrollContainerRef.current;
    if (!car || !path || !svg || !container) return;

    const updatePosition = (progress: number) => {
      const length = path.getTotalLength();
      const point = path.getPointAtLength(length * progress);
      const svgRect = svg.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const scaleX = svgRect.width / 40;
      const scaleY = svgRect.height / 800;
      const carRect = car.getBoundingClientRect();
      const x = svgRect.left - containerRect.left + point.x * scaleX - carRect.width / 2;
      const y = svgRect.top - containerRect.top + point.y * scaleY - carRect.height / 2;
      gsap.set(car, { x, y });
    };

    updatePosition(0);

    const tween = ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => updatePosition(self.progress),
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <main className="min-h-[100svh] w-full overflow-x-hidden bg-white pb-10">
      <div
        ref={scrollContainerRef}
        className="pointer-events-none fixed right-36 top-0 z-20 hidden h-full w-20 items-start justify-center md:flex"
      >
        <svg
          ref={scrollSvgRef}
          className="absolute left-1/2 top-0 h-full w-12 -translate-x-1/2"
          viewBox="0 0 40 800"
          preserveAspectRatio="none"
        >
          <path
            ref={scrollPathRef}
            d="M20 0 C-8 140,48 220,20 360 S48 560,20 700 S-8 760,20 800"
            fill="none"
            stroke="rgba(16, 185, 129, 0.45)"
            strokeWidth="1.5"
          />
        </svg>
        <div
          ref={scrollCarRef}
          className="absolute left-0 top-0 flex h-10 w-12 items-center justify-center drop-shadow-[0_0_10px_rgba(16,185,129,0.45)]"
        >
          <svg viewBox="0 0 64 40" className="h-7 w-12">
            <defs>
              <linearGradient id="scrollCarBody" x1="0" x2="1">
                <stop offset="0%" stopColor="#0b3f2a" />
                <stop offset="50%" stopColor="#0f9b5f" />
                <stop offset="100%" stopColor="#1fc38b" />
              </linearGradient>
              <radialGradient id="scrollCarGlass" cx="50%" cy="45%" r="60%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#dff5ec" />
              </radialGradient>
            </defs>
            <path
              d="M10 26c2-8 10-12 22-12h8c12 0 20 4 22 12l2 6H8l2-6z"
              fill="url(#scrollCarBody)"
            />
            <rect x="22" y="18" width="20" height="10" rx="4" fill="url(#scrollCarGlass)" />
            <rect x="16" y="20" width="8" height="6" rx="3" fill="#e6f7ef" />
            <rect x="42" y="20" width="8" height="6" rx="3" fill="#e6f7ef" />
            <circle cx="14" cy="30" r="3.5" fill="#0b3f2a" />
            <circle cx="50" cy="30" r="3.5" fill="#0b3f2a" />
            <circle cx="14" cy="30" r="1.5" fill="#e6f7ef" />
            <circle cx="50" cy="30" r="1.5" fill="#e6f7ef" />
          </svg>
        </div>
      </div>
      <Navbar />
      <section className="relative min-h-[100svh] px-10 pb-10 pt-0 sm:px-12 lg:px-16">
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
      <Detail />
      <section className="px-6 pb-16 sm:px-10 lg:px-14">
        <div className="mx-auto w-full max-w-7xl">
         
        </div>
      </section>
    
      <Nextpanel />
      <Panelseocnd/>
      <Panelthird/>
      <Panelfourth/>
      <Panelfifth/>
      <Panelsix/>
    </main>
  );
}
