"use client";

import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import AppFeaturesPanel from "./panels/AppFeaturesPanel";
import ChargingNetworksPanel from "./panels/ChargingNetworksPanel";
import ToolsPanel from "./panels/ToolsPanel";
import GuidesPanel from "./panels/GuidesPanel";
import FaqPanel from "./panels/FaqPanel";
import CtaPanel from "./panels/CtaPanel";
import FooterPanel from "./panels/FooterPanel";
import CallToActionSection from "./sections/cta/CallToActionSection";
import FeaturesSection from "./sections/features/FeaturesSection";
import HeroSection from "./sections/hero/HeroSection";
import HeroVisual from "./sections/hero/HeroVisual";
import PlanSection from "./sections/planning/PlanSection";
import PricingSection from "./sections/pricing/PricingSection";
import ProblemSection from "./sections/problem/ProblemSection";
import RoadmapSection from "./sections/roadmap/RoadmapSection";
import Navbar from "./layout/Navbar";
import TrustSection from "./sections/trust/TrustSection";
import ChargingLogos from "./panels/ChargingLogo";

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
    <main className="min-h-[100svh] w-full overflow-x-hidden bg-white">
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
      <Navbar/>
      <HeroSection/>
      {/* <HeroVisual/> */}
      <TrustSection/>
      <ProblemSection/>
      <PlanSection/>
      <FeaturesSection/>
      <CallToActionSection/> {/*increase the panel size and font size  */}
      <PricingSection/>
      <RoadmapSection/> 
      <AppFeaturesPanel />
      <ToolsPanel /> 
      <ChargingNetworksPanel /> 
      <GuidesPanel />
      <FaqPanel />
      <CtaPanel />  {/*make changes and increase box size button size*/}
      {/* <ChargingLogos/> */}
      <FooterPanel />
    </main>
  );
}
  
