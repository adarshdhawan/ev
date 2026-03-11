"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { BatteryCharging, MapPin, Route, SlidersHorizontal } from "lucide-react";

const cards = [
  {
    title: "Plans charging stops along your route before you start",
    body: "Get a complete route plan with all necessary charging stops identified before you begin your journey.",
    icon: Route,
  },
  {
    title: "Predicts battery level at arrival and departure for each stop",
    body: "Know exactly how much charge you'll have when you arrive and leave each charging station along your route.",
    icon: BatteryCharging,
  },
  {
    title: "Factors in real-world conditions like distance and elevation",
    body: "Calculations account for hills, mountains, and terrain changes that affect your vehicle's range and efficiency.",
    icon: MapPin,
  },
  {
    title: "Lets you customise buffers, networks, and preferences",
    body: "Adjust safety buffers, choose preferred charging networks, and set your personal travel preferences.",
    icon: SlidersHorizontal,
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".panel-third-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        },
      );
    }, sectionRef);

    const cards = cardRefs.current;
    const enterHandlers: Array<() => void> = [];
    const leaveHandlers: Array<() => void> = [];

    cards.forEach((card) => {
      if (!card) return;
      const onEnter = () => {
        gsap.to(card, {
          backgroundColor: "#0b3f2a",
          color: "#f8fafc",
          boxShadow: "0 20px 40px rgba(6, 95, 70, 0.45)",
          duration: 0.35,
          ease: "power2.out",
        });
        gsap.to(card.querySelector(".panel-third-icon"), {
          backgroundColor: "rgba(255,255,255,0.18)",
          color: "#ecfdf5",
          duration: 0.35,
          ease: "power2.out",
        });
      };

      const onLeave = () => {
        gsap.to(card, {
          backgroundColor: "#ccefe0",
          color: "#0f172a",
          boxShadow: "0 10px 24px rgba(15, 23, 42, 0.08)",
          duration: 0.35,
          ease: "power2.out",
        });
        gsap.to(card.querySelector(".panel-third-icon"), {
          backgroundColor: "#e8f7ef",
          color: "#0f9b5f",
          duration: 0.35,
          ease: "power2.out",
        });
      };

      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);
      enterHandlers.push(onEnter);
      leaveHandlers.push(onLeave);
    });

    return () => {
      cards.forEach((card, index) => {
        if (!card) return;
        card.removeEventListener("mouseenter", enterHandlers[index]);
        card.removeEventListener("mouseleave", leaveHandlers[index]);
      });
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="mb-10 text-center text-2xl font-semibold text-emerald-600 sm:text-3xl">
          What EVJoints plans for you
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ title, body, icon: Icon }, index) => (
            <div
              key={title}
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
              className="panel-third-card rounded-2xl bg-[#ccefe0] p-6 text-slate-900 shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition-colors"
            >
              <div className="panel-third-icon mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f7ef] text-emerald-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-3 text-base font-semibold leading-snug">{title}</h3>
              <p className="text-sm leading-6 text-slate-700">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
