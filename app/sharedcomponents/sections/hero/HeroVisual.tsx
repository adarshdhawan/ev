"use client";

import { useEffect, useRef } from "react";
import { CarFront, MapPin, Zap } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import phoneImg1 from "@/app/assets/0a4f7115570656534fa11fd9c9bb3d98c9748560.png";
import phoneImg2 from "@/app/assets/flipphone.png";

export default function HeroVisual() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const ringOneRef = useRef<HTMLDivElement>(null);
  const ringTwoRef = useRef<HTMLDivElement>(null);
  const ringThreeRef = useRef<HTMLDivElement>(null);

  const phoneOneRef = useRef<HTMLDivElement>(null);
  const phoneTwoRef = useRef<HTMLDivElement>(null);

  const carIconRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Ring entry animation
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

      // Ring rotations
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

      // Counter rotate icon to keep orientation
      gsap.to(carIconRef.current, {
        rotate: -360,
        duration: 30,
        ease: "none",
        repeat: -1,
      });

      // Phones entry animation
      gsap.fromTo(
        [phoneOneRef.current, phoneTwoRef.current],
        { opacity: 0, y: 50, rotateY: 20 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
          delay: 0.5,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    gsap.to(phoneOneRef.current, {
      zIndex: 30,
      scale: 1.02,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(phoneTwoRef.current, {
      opacity: 0.8,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(phoneOneRef.current, {
      zIndex: 10,
      scale: 1,
      duration: 0.4,
      ease: "power2.inOut",
    });

    gsap.to(phoneTwoRef.current, {
      opacity: 1,
      duration: 0.4,
      ease: "power2.inOut",
    });
  };

  return (
    <div
      ref={sectionRef}
      className="relative mx-auto h-[340px] w-full max-w-[620px] translate-x-0 sm:-translate-x-8 lg:-translate-x-12 -translate-y-4 sm:-translate-y-8 lg:-translate-y-12 sm:h-[460px] md:h-[520px] lg:h-[600px]"
      style={{ perspective: "1500px" }}
    >
      {/* Background Rings */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Outer Ring */}
        <div
          ref={ringOneRef}
          className="absolute left-1/2 top-[38%] h-[280px] w-[280px] sm:h-[340px] sm:w-[340px] md:h-[420px] md:w-[420px] lg:h-[480px] lg:w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/70"
        >
          <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300 bg-white p-1 text-emerald-600 shadow">
            <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
          </span>
        </div>

        {/* Middle Ring */}
        <div
          ref={ringTwoRef}
          className="absolute left-1/2 top-[38%] h-[220px] w-[220px] sm:h-[280px] sm:w-[280px] md:h-[340px] md:w-[340px] lg:h-[400px] lg:w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-emerald-500/70"
        >
          <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300 bg-white p-1 text-emerald-600 shadow">
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
          </span>
        </div>

        {/* Inner Ring (now solid) */}
        <div
          ref={ringThreeRef}
          className="absolute left-1/2 top-[38%] h-[160px] w-[160px] sm:h-[220px] sm:w-[220px] md:h-[260px] md:w-[260px] lg:h-[320px] lg:w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/70"
        >
          <span
            ref={carIconRef}
            className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300 bg-white p-1 text-emerald-600 shadow"
          >
            <CarFront className="h-3 w-3 sm:h-4 sm:w-4" />
          </span>
        </div>

      </div>
      <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-full flex items-center justify-center pointer-events-auto">
        {/* Phones */}

        {/* Phone 1 */}
        <div
          ref={phoneOneRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="absolute z-10 w-[180px] sm:w-[210px] md:w-[250px] cursor-pointer"
          style={{
            transform: "translateX(-15%) translateY(-10%) rotate(-5deg)",
            filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.15))",
          }}
        >
          <Image
            src={phoneImg1}
            alt="Trip Summary"
            className="w-full h-auto rounded-[2.2rem]"
            priority
          />
        </div>

        {/* Phone 2 */}
        <div
          ref={phoneTwoRef}
          className="absolute z-20 w-[180px] sm:w-[210px] md:w-[250px] pointer-events-none"
          style={{
            transform: "translateX(25%) translateY(10%) rotate(5deg)",
            filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.2))",
          }}
        >
          <Image
            src={phoneImg2}
            alt="Navigation Map"
            className="w-full h-auto rounded-[2.2rem]"
            priority
          />
        </div>
      </div>

    </div>
  );
}
