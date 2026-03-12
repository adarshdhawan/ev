"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const logos = ["TATA POWER EZ CHARGE", "EVDock", "ZEON Charging", "goego"];

export default function ChargingLogos() {
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".charging-logo", {
        opacity: 0,
        y: 15,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, logosRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={logosRef}
      className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-[16px] sm:text-[18px] font-semibold text-green-500"
    >
      {logos.map((logo) => (
        <span
          key={logo}
          className="charging-logo uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:text-green-600"
        >
          {logo}
        </span>
      ))}
    </div>
  );
}