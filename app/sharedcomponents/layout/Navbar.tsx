"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import gsap from "gsap";
import Logo from "../../Features/logo/logo/logo";
import TopNavBar from "../../Features/logo/nav/navbar";
import SubNav from "../../Features/logo/subnav/subnav";

type NavItem = {
  label: string;
  href?: string;
};

type MenuGroup = {
  label: string;
  options: string[];
};

const topNavItems: NavItem[] = [
  { label: "CPO Corner", href: "#" },
  { label: "Trip Planner APIs", href: "#" },
  { label: "Charging Network", href: "#" },
  { label: "About us", href: "#" },
  { label: "Contact", href: "#" },
];

const subNavItems: NavItem[] = [
  { label: "App Features", href: "#" },
  { label: "Trip Planner", href: "#" },
  { label: "EVGuide", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Pricing", href: "#" },
];

const menuGroups: MenuGroup[] = [
  {
    label: "Tools",
    options: [
      "Charging Station Finder",
      "Charging Time Estimator",
      "EV vs Fuel Cost Calculator",
    ],
  },
  {
    label: "EV Match",
    options: ["2-Wheeler", "4-Wheeler Passenger EV", "For Business"],
  },

];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
  const [mobileMatchOpen, setMobileMatchOpen] = useState(false);
  const [subNavSticky, setSubNavSticky] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const [barHeight, setBarHeight] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setSubNavSticky(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!barRef.current) return;
    setBarHeight(barRef.current.offsetHeight);
  }, []);

  useEffect(() => {
    if (!barRef.current) return;
    gsap.to(barRef.current, {
      y: subNavSticky ? 0 : 8,
      scale: subNavSticky ? 1 : 0.99,
      boxShadow: subNavSticky
        ? "0 16px 40px rgba(15, 23, 42, 0.12)"
        : "0 0 0 rgba(0,0,0,0)",
      backgroundColor: subNavSticky ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,1)",
      duration: 0.35,
      ease: "power3.out",
    });
  }, [subNavSticky]);

  return (
    <header className="relative z-40 font-sans">
      <TopNavBar items={topNavItems} />

      <div style={{ height: subNavSticky ? barHeight : 0 }} aria-hidden />

      <div
        ref={barRef}
        className={`mx-auto flex w-full max-w-7xl items-center justify-between gap-4 rounded-full bg-white px-6 py-3 ${
          subNavSticky
            ? "fixed left-1/2 top-4 z-50 -translate-x-1/2 backdrop-blur-md"
            : "relative"
        }`}
      >
        {/* Logo */}
        <div className="flex shrink-0 items-center">
          <Logo />
        </div>

        {/* Center Navigation */}
        <div className="hidden flex-1 items-center justify-center md:flex">
          <SubNav items={subNavItems} menuGroups={menuGroups} />
        </div>

        {/* Right Button */}
        <div className="hidden shrink-0 items-center md:flex">
          <button
            type="button"
            className="
              group
              inline-flex items-center gap-2
              rounded-full
              bg-[#10B265]
              px-7 py-2.5
              text-[17px] font-semibold
              text-white
              shadow-sm
              transition-all duration-200 ease-out
              hover:bg-[#059669] hover:shadow-lg
              focus:outline-none focus:ring-2 focus:ring-[#10B981]/40
              active:scale-[0.97]
            "
          >
            <span>Plan your trip</span>

            <ArrowRight
              className="
                h-5 w-5
                transition-transform duration-200
                group-hover:translate-x-1
              "
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-4 md:hidden">
          <a
            href="#"
            className="text-[17px] font-semibold tracking-normal text-[#165233] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:scale-[1.05]"
          >
            CPO Corner
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="rounded-full border border-emerald-300/60 bg-emerald-50 p-2 text-emerald-700"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="mx-4 mt-3 space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-md md:hidden">
          {[...topNavItems.slice(1), ...subNavItems].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-[16px] tracking-normal text-slate-700 transition-all duration-300 ease-out hover:bg-emerald-50 hover:-translate-y-[2px] hover:scale-[1.05]"
            >
              {item.label}
            </a>
          ))}

          {/* Tools Dropdown */}
          <button
            type="button"
            onClick={() => setMobileToolsOpen((prev) => !prev)}
            className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-[16px] text-slate-700 transition-all duration-300 hover:-translate-y-[2px]"
          >
            Tools
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${mobileToolsOpen ? "rotate-180" : ""
                }`}
            />
          </button>

          {mobileToolsOpen &&
            menuGroups[0].options.map((option) => (
              <p
                key={option}
                className="rounded-md px-5 py-1 text-[14px] text-slate-600"
              >
                {option}
              </p>
            ))}

          {/* EV Match Dropdown */}
          <button
            type="button"
            onClick={() => setMobileMatchOpen((prev) => !prev)}
            className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-[16px] text-slate-700 transition-all duration-300 hover:-translate-y-[2px]"
          >
            EV Match
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${mobileMatchOpen ? "rotate-180" : ""
                }`}
            />
          </button>

          {mobileMatchOpen &&
            menuGroups[1].options.map((option) => (
              <p
                key={option}
                className="rounded-md px-5 py-1 text-[14px] text-slate-600"
              >
                {option}
              </p>
            ))}

          {/* Mobile Button */}
          <button
            type="button"
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-2.5 text-[16px] font-semibold tracking-normal text-white transition-all duration-300 ease-out hover:bg-emerald-600 hover:-translate-y-[3px] hover:scale-[1.05]"
          >
            Plan your trip
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </header>
  );
}
