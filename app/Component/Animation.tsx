"use client";

import { useEffect, useRef } from "react";
import { MapPin, Navigation, LocateFixed } from "lucide-react";
import gsap from "gsap";

export default function HeroVisual() {
  const densePins = [
    { left: "18%", top: "24%" },
    { left: "28%", top: "33%" },
    { left: "40%", top: "27%" },
    { left: "52%", top: "38%" },
    { left: "64%", top: "28%" },
    { left: "70%", top: "44%" },
    { left: "22%", top: "50%" },
    { left: "34%", top: "58%" },
    { left: "46%", top: "52%" },
    { left: "58%", top: "62%" },
    { left: "68%", top: "56%" },
    { left: "30%", top: "70%" },
    { left: "42%", top: "76%" },
    { left: "55%", top: "72%" },
    { left: "67%", top: "78%" },
  ];
  const sectionRef = useRef<HTMLDivElement>(null);
  const ringOneRef = useRef<HTMLDivElement>(null);
  const ringTwoRef = useRef<HTMLDivElement>(null);
  const ringThreeRef = useRef<HTMLDivElement>(null);
  const phoneLeftRef = useRef<HTMLDivElement>(null);
  const phoneRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [phoneLeftRef.current, phoneRightRef.current],
        { opacity: 0, y: 64, rotate: -8 },
        {
          opacity: 1,
          y: 0,
          rotate: 0,
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.12,
        },
      );

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
        duration: 20,
        ease: "none",
        repeat: -1,
      });
      gsap.to(ringTwoRef.current, {
        rotate: -360,
        duration: 28,
        ease: "none",
        repeat: -1,
      });
      gsap.to(ringThreeRef.current, {
        rotate: 360,
        duration: 36,
        ease: "none",
        repeat: -1,
      });

      const onScroll = () => {
        const scrollY = window.scrollY || 0;
        const drift = Math.min(scrollY * 0.08, 28);
        gsap.to(phoneLeftRef.current, {
          y: drift * 0.6,
          rotate: -11 + drift * 0.06,
          duration: 0.35,
          ease: "power1.out",
        });
        gsap.to(phoneRightRef.current, {
          y: -drift * 0.35,
          rotate: 12 - drift * 0.05,
          duration: 0.35,
          ease: "power1.out",
        });
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative mx-auto h-[390px] w-full max-w-[500px] sm:h-[460px] lg:h-[560px]">
      <div className="absolute -right-16 -top-24 h-72 w-[1px] rotate-[30deg] bg-emerald-300/60" />
      <div
        ref={ringOneRef}
        className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/35"
      />
      <div
        ref={ringTwoRef}
        className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/35"
      />
      <div
        ref={ringThreeRef}
        className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/35"
      />

      <div
        ref={phoneLeftRef}
        className="absolute left-[26%] top-[22%] z-10 h-[260px] w-[130px] -rotate-[11deg] rounded-[2.2rem] border border-slate-200/70 bg-gradient-to-b from-slate-100 to-slate-300 p-1 shadow-2xl shadow-slate-600/30 sm:h-[300px] sm:w-[150px]"
      >
        <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] bg-slate-950 p-3">
          <div className="absolute -left-[3px] top-16 h-10 w-[2px] rounded-r bg-slate-400/70" />
          <div className="absolute -left-[3px] top-28 h-10 w-[2px] rounded-r bg-slate-400/70" />
          <div className="absolute -right-[3px] top-24 h-14 w-[2px] rounded-l bg-slate-400/70" />
          <div className="absolute left-1/2 top-2 h-4 w-16 -translate-x-1/2 rounded-full bg-black/90 ring-1 ring-slate-700" />
          <div className="mt-7 h-[72%] rounded-xl border border-emerald-100/20 bg-[radial-gradient(circle_at_20%_25%,rgba(111,208,255,0.52),rgba(200,240,255,0.26))] p-2">
            <div className="relative h-full w-full overflow-hidden rounded-lg bg-[linear-gradient(145deg,#eef8ff_0%,#d6eef9_100%)]">
              <div className="absolute left-2 right-2 top-1.5 flex items-center justify-between text-[7px] font-semibold text-slate-700">
                <span>9:41</span>
                <span>5G 100%</span>
              </div>
              <div className="absolute inset-x-0 top-6 h-[1px] bg-sky-500/20" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.15),transparent_20%),radial-gradient(circle_at_70%_40%,rgba(16,185,129,0.12),transparent_25%),radial-gradient(circle_at_40%_80%,rgba(14,165,233,0.14),transparent_22%)]" />
              <div className="absolute left-3 top-10 h-1.5 w-14 rounded bg-sky-500/25" />
              <div className="absolute left-3 top-[52px] h-1.5 w-10 rounded bg-sky-500/30" />
              <div className="absolute right-4 top-14 rounded-full bg-rose-500/95 p-1">
                <MapPin className="h-3 w-3 text-white" />
              </div>
              <div className="absolute left-6 bottom-12 rounded-full bg-emerald-600 p-1">
                <MapPin className="h-3 w-3 text-white" />
              </div>
              <div className="absolute right-6 top-[44%] rounded-full bg-sky-600 p-1">
                <MapPin className="h-3 w-3 text-white" />
              </div>
              <div className="absolute inset-x-3 bottom-2 flex items-center justify-between rounded-full bg-white/85 px-3 py-1 text-[7px] text-slate-700">
                <span>Route</span>
                <span>Stops</span>
                <span>Profile</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-2 left-1/2 h-1 w-14 -translate-x-1/2 rounded-full bg-white/70" />
        </div>
      </div>

      <div
        ref={phoneRightRef}
        className="absolute right-[16%] top-[26%] h-[280px] w-[145px] rotate-[12deg] rounded-[2.2rem] border border-slate-200/70 bg-gradient-to-b from-slate-100 to-slate-300 p-1 shadow-2xl shadow-slate-600/30 sm:h-[328px] sm:w-[165px]"
      >
        <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] bg-slate-950 p-3">
          <div className="absolute -left-[3px] top-14 h-8 w-[2px] rounded-r bg-slate-400/70" />
          <div className="absolute -left-[3px] top-24 h-11 w-[2px] rounded-r bg-slate-400/70" />
          <div className="absolute -left-[3px] top-38 h-11 w-[2px] rounded-r bg-slate-400/70" />
          <div className="absolute -right-[3px] top-24 h-14 w-[2px] rounded-l bg-slate-400/70" />
          <div className="absolute left-1/2 top-2 h-4 w-16 -translate-x-1/2 rounded-full bg-black/90 ring-1 ring-slate-700" />
          <div className="relative mt-8 h-[68%] overflow-hidden rounded-2xl border border-emerald-100/20 bg-[linear-gradient(145deg,#eef8ff_0%,#d6eef9_100%)] p-3">
            <div className="absolute left-2 right-2 top-1.5 flex items-center justify-between text-[8px] font-semibold text-slate-700">
              <span>9:41</span>
              <span>5G 92%</span>
            </div>
            <div className="absolute inset-0 top-5 bg-[linear-gradient(130deg,rgba(0,119,255,0.14)_0%,transparent_45%,rgba(0,160,140,0.1)_100%)]" />
            <div className="absolute inset-0 top-7 bg-[radial-gradient(circle_at_20%_25%,rgba(59,130,246,0.12),transparent_22%),radial-gradient(circle_at_72%_46%,rgba(16,185,129,0.12),transparent_28%),radial-gradient(circle_at_42%_74%,rgba(14,165,233,0.12),transparent_24%)]" />
            <div className="absolute left-6 top-10 h-2 w-14 rounded bg-sky-500/20" />
            <div className="absolute left-6 top-14 h-2 w-10 rounded bg-sky-500/25" />
            <div className="absolute bottom-14 left-6 h-2 w-14 rounded bg-emerald-500/25" />
            {densePins.map((pin, index) => (
              <MapPin
                key={`${pin.left}-${pin.top}-${index}`}
                className="absolute h-3.5 w-3.5 text-sky-600/90"
                style={{ left: pin.left, top: pin.top }}
              />
            ))}
            <div className="absolute bottom-12 right-6 rounded-full border border-rose-300 bg-rose-500/95 p-1.5">
              <MapPin className="h-4 w-4 text-white" />
            </div>
            <div className="absolute bottom-5 left-8 rounded-full bg-emerald-600 p-1">
              <MapPin className="h-3 w-3 text-white" />
            </div>
            <div className="absolute inset-x-3 bottom-2 flex items-center justify-between rounded-full bg-white/85 px-3 py-1 text-[8px] text-slate-700">
              <span>Home</span>
              <span>Trips</span>
              <span>Maps</span>
            </div>
          </div>
          <div className="absolute bottom-2 left-1/2 h-1 w-14 -translate-x-1/2 rounded-full bg-white/70" />
        </div>
      </div>

      <span className="absolute right-[4%] top-[46%] rounded-full border border-emerald-300 bg-white p-3 text-emerald-600 shadow">
        <Navigation className="h-4 w-4" />
      </span>
      <span className="absolute bottom-[7%] left-[35%] rounded-full border border-emerald-300 bg-white p-3 text-emerald-600 shadow">
        <LocateFixed className="h-4 w-4" />
      </span>
      <span className="absolute bottom-[11%] right-[5%] rounded-full border border-emerald-300 bg-white p-3 text-emerald-600 shadow">
        <Navigation className="h-4 w-4" />
      </span>
    </div>
  );
}
