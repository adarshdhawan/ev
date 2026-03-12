"use client";

import { useEffect, useRef } from "react";
import { CarFront, MapPin, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroVisual() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const ringOneRef = useRef<HTMLDivElement>(null);
  const ringTwoRef = useRef<HTMLDivElement>(null);
  const ringThreeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        [ringOneRef.current, ringTwoRef.current, ringThreeRef.current],
        { opacity: 0, scale: 0.75 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0.1,
          delay: 0.2,
        }
      );

      gsap.to(ringOneRef.current, {
        rotate: 360,
        duration: 18,
        ease: "none",
        repeat: -1,
      });

      gsap.to(ringTwoRef.current, {
        rotate: -360,
        duration: 24,
        ease: "none",
        repeat: -1,
      });

      gsap.to(ringThreeRef.current, {
        rotate: 360,
        duration: 30,
        ease: "none",
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative mx-auto w-full max-w-[620px] h-[360px] sm:h-[420px] md:h-[480px] lg:h-[560px]"
      style={{ perspective: "1200px" }}
    >
      {/* Outer Ring */}
      <div
        ref={ringOneRef}
        className="absolute left-1/2 top-[34%] sm:top-[36%] md:top-[38%]
        h-[300px] w-[300px] sm:h-[360px] sm:w-[360px] md:h-[420px] md:w-[420px] lg:h-[460px] lg:w-[460px]
        -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/35"
      >
        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300 bg-white p-1 text-emerald-600 shadow">
          <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
        </span>
      </div>

      {/* Middle Ring */}
      <div
        ref={ringTwoRef}
        className="absolute left-1/2 top-[34%] sm:top-[36%] md:top-[38%]
        h-[220px] w-[220px] sm:h-[280px] sm:w-[280px] md:h-[330px] md:w-[330px] lg:h-[360px] lg:w-[360px]
        -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-emerald-500/35"
      >
        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300 bg-white p-1 text-emerald-600 shadow">
          <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
        </span>
      </div>

      {/* Inner Ring */}
      <div
        ref={ringThreeRef}
        className="absolute left-1/2 top-[34%] sm:top-[36%] md:top-[38%]
        h-[150px] w-[150px] sm:h-[190px] sm:w-[190px] md:h-[230px] md:w-[230px] lg:h-[260px] lg:w-[260px]
        -translate-x-1/2 -translate-y-1/2 rounded-full border border-dotted border-emerald-500/35"
      >
        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300 bg-white p-1 text-emerald-600 shadow">
          <CarFront className="h-3 w-3 sm:h-4 sm:w-4" />
        </span>
      </div>
    </div>
  );
}