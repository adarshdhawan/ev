"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

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

type DropDownProps = {
  group: MenuGroup;
};

function DropDown({ group }: DropDownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-sm text-[#3b3b3b] transition hover:text-[#1e1e1e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
      >
        {group.label}
        <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute right-0 top-9 z-30 min-w-[240px] rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
          {group.options.map((option) => (
            <button
              key={option}
              type="button"
              className="w-full rounded-lg px-3 py-2 text-left text-sm text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-900"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
  const [mobileMatchOpen, setMobileMatchOpen] = useState(false);

  return (
    <header className="relative z-40">
      <div className="hidden h-10 items-center justify-center bg-[#165233] px-4 md:flex">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-evenly">
          {topNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/90 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="text-[52px] leading-[0.8] text-emerald-500">•</div>
          <div>
            <p className="text-5xl font-medium leading-none tracking-tight text-emerald-500">evjoints</p>
            <p className="text-xs font-medium tracking-wide text-slate-700">Unified EV Trip Planner</p>
          </div>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-1 rounded-full border border-slate-200 bg-[#f2f2f2] px-5 py-2.5 shadow-sm">
            {subNavItems.slice(0, 4).map((item) => (
              <a key={item.label} href={item.href} className="rounded-full px-3 py-1 text-lg text-[#474747] transition hover:bg-white">
                {item.label}
              </a>
            ))}
            <DropDown group={menuGroups[0]} />
            <a href={subNavItems[4].href} className="rounded-full px-3 py-1 text-lg text-[#474747] transition hover:bg-white">
              {subNavItems[4].label}
            </a>
          </nav>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-3 text-xl font-medium text-white transition hover:bg-emerald-600"
          >
            Plan your trip
            <ArrowRight className="h-6 w-6" />
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
