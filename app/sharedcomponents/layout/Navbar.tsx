"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
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

  useEffect(() => {
    const onScroll = () => {
      setSubNavSticky(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="relative z-40">
      <TopNavBar items={topNavItems} />

      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-2 md:px-8 lg:px-10">
        <div className="flex shrink-0 items-center gap-2 pr-6">
          <Logo />
        </div>

        <div className="hidden flex-1 items-center justify-center md:flex px-6">
          <SubNav items={subNavItems} menuGroups={menuGroups} sticky={subNavSticky} />
        </div>

        <div className="hidden shrink-0 items-center pl-6 md:flex">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-2.5 text-[15px] font-medium text-white transition hover:bg-emerald-600"
          >
            Plan your trip
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <a href="#" className="text-sm font-semibold text-[#165233]">
            CPO Corner
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="rounded-full border border-emerald-300/60 bg-emerald-50 p-2 text-emerald-700"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mx-4 mt-2 space-y-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-md md:hidden">
          {[...topNavItems.slice(1), ...subNavItems].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block rounded-lg px-2 py-1.5 text-sm text-slate-700 transition hover:bg-emerald-50"
            >
              {item.label}
            </a>
          ))}

          <button
            type="button"
            onClick={() => setMobileToolsOpen((prev) => !prev)}
            className="flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-left text-sm text-slate-700"
          >
            Tools <ChevronDown className={`h-4 w-4 ${mobileToolsOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileToolsOpen &&
            menuGroups[0].options.map((option) => (
              <p key={option} className="rounded-md px-4 py-1 text-xs text-slate-600">
                {option}
              </p>
            ))}

          <button
            type="button"
            onClick={() => setMobileMatchOpen((prev) => !prev)}
            className="flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-left text-sm text-slate-700"
          >
            EV Match <ChevronDown className={`h-4 w-4 ${mobileMatchOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileMatchOpen &&
            menuGroups[1].options.map((option) => (
              <p key={option} className="rounded-md px-4 py-1 text-xs text-slate-600">
                {option}
              </p>
            ))}
            
          <button
            type="button"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white"
          >
            Plan your trip
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </header>
  );
}
