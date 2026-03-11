"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { CarFront, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { phoneImageSrc } from "../../../Features/logo/img/img";

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
        },
      );

      gsap.to(ringOneRef.current, {
        rotate: 360,
        duration: 28,
        ease: "none",
        repeat: -1,
      });
      gsap.to(ringTwoRef.current, {
        rotate: 360,
        duration: 34,
        ease: "none",
        repeat: -1,
      });
      gsap.to(ringThreeRef.current, {
        rotate: 360,
        duration: 40,
        ease: "none",
        repeat: -1,
      });

    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative mx-auto h-[420px] w-full max-w-[540px] px-2 sm:h-[500px] sm:px-4 lg:h-[600px]"
      style={{ perspective: "1200px" }}
    >
      <div className="pointer-events-auto absolute left-1/2 top-1/2 z-20 h-[320px] w-[210px] -translate-x-1/2 -translate-y-[76%] -rotate-12 transform-gpu sm:h-[380px] sm:w-[240px] sm:-translate-y-[78%] lg:h-[480px] lg:w-[300px]">
        <div className="group relative h-full w-full overflow-hidden rounded-[26px] shadow-[0_30px_60px_rgba(15,23,42,0.28)]">
          <Image
            src={phoneImageSrc}
            alt="EVJoints trip planner on phone"
            width={900}
            height={1200}
            className="h-full w-full object-contain transition-transform duration-500 ease-out translate-y-8 group-hover:translate-y-0 group-hover:scale-[1.02]"
            priority
          />
        </div>
      </div>
      <div
        ref={ringOneRef}
        className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/35"
      >
        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300 bg-white p-2 text-emerald-600 shadow">
          <Zap className="h-4 w-4" />
        </span>
      </div>
      <div
        ref={ringTwoRef}
        className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-emerald-500/35"
      >
        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300 bg-white p-2 text-emerald-600 shadow">
          <Zap className="h-4 w-4" />
        </span>
      </div>
      <div
        ref={ringThreeRef}
        className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dotted border-emerald-500/35"
      >
        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300 bg-white p-2 text-emerald-600 shadow">
          <CarFront className="h-4 w-4" />
        </span>
      </div>

    </div>
  );
}
