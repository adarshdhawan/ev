"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";


type NavItem = {
  label: string;
  href?: string;
};

type MenuGroup = {
  label: string;
  options: string[];
};

type DropDownProps = {
  group: MenuGroup;
  nestedGroup?: MenuGroup;
};

type SubNavProps = {
  items: NavItem[];
  menuGroups: MenuGroup[];
  className?: string;
};

function DropDown({ group, nestedGroup }: DropDownProps) {
  const [open, setOpen] = useState(false);
  const [nestedOpen, setNestedOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="group relative inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-normal tracking-[0.07em] text-[#3f3f3f] transition hover:text-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 font-sans"
      >
        <span className="pointer-events-none absolute inset-0 rounded-full bg-white opacity-0 shadow-[0_10px_20px_rgba(16,185,129,0.15)] transition-opacity duration-300 group-hover:opacity-100" />
        <span className="relative z-10">{group.label}</span>

        <ChevronDown
          className={`relative z-10 h-4 w-4 transition ${open ? "rotate-180" : ""}`}
        />

        <span className="pointer-events-none absolute -bottom-1 left-1/2 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="pointer-events-none absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-8" />
      </button>

      {open && (
        <div className="absolute right-0 top-10 z-30 min-w-[240px] rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
          {group.options.map((option) => (
            <button
              key={option}
              type="button"
              className="w-full whitespace-nowrap rounded-lg px-3 py-2 text-left text-sm text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-900"
            >
              {option}
            </button>
          ))}
          {nestedGroup && (
            <div
              className="relative"
              onMouseEnter={() => setNestedOpen(true)}
              onMouseLeave={() => setNestedOpen(false)}
            >
              <button
                type="button"
                className="flex w-full items-center justify-between whitespace-nowrap rounded-lg px-3 py-2 text-left text-sm text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-900"
              >
                <span>EV Match</span>
                <span className="text-slate-400">›</span>
              </button>

              {nestedOpen && (
                <div className="absolute left-full top-0 ml-2 min-w-[210px] rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                  {nestedGroup.options.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className="w-full whitespace-nowrap rounded-lg px-3 py-2 text-left text-sm text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-900"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}




export default function SubNav({
  items,
  menuGroups,
  className,
}: SubNavProps) {
  const baseStyles =
    "flex flex-nowrap items-center gap-2 px-2 py-2 min-h-[48px] font-sans";

  const linkStyles =
    "group relative whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-normal tracking-[0.07em] text-[#3f3f3f] transition-colors hover:text-emerald-600";

  return (
    <nav className={`${baseStyles} ${className ?? ""}`}>
      {items.slice(0, 4).map((item) => (
        <a key={item.label} href={item.href} className={linkStyles}>
          <span className="pointer-events-none absolute inset-0 rounded-full bg-white opacity-0 shadow-[0_10px_20px_rgba(16,185,129,0.15)] transition-opacity duration-300 group-hover:opacity-100" />
          <span className="relative z-10">{item.label}</span>

          <span className="pointer-events-none absolute -bottom-1 left-1/2 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="pointer-events-none absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-8" />
        </a>
      ))}

      {menuGroups[0] && (
        <DropDown group={menuGroups[0]} nestedGroup={menuGroups[1]} />
      )}

      {items[4] && (
        <a href={items[4].href} className={linkStyles}>
          <span className="pointer-events-none absolute inset-0 rounded-full bg-white opacity-0 shadow-[0_10px_20px_rgba(16,185,129,0.15)] transition-opacity duration-300 group-hover:opacity-100" />
          <span className="relative z-10">{items[4].label}</span>

          <span className="pointer-events-none absolute -bottom-1 left-1/2 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="pointer-events-none absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-8" />
        </a>
      )}
    </nav>
  );
}
