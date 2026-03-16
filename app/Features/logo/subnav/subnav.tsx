"use client";

import { useState, useEffect } from "react";
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
};

type SubNavProps = {
  items: NavItem[];
  menuGroups: MenuGroup[];
  sticky: boolean;
  className?: string;
};

function DropDown({ group }: DropDownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="group relative inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-light tracking-[0.07em] text-[#3f3f3f] transition hover:text-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
      >
        {group.label}

        <ChevronDown
          className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`}
        />

        <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-emerald-400 transition-all duration-300 group-hover:w-full" />
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const baseStyles =
    "flex flex-nowrap items-center gap-2 rounded-full border border-slate-200 px-7 py-3 min-h-[64px] transition-all duration-500 ease-out";

  const scrolledStyles =
    "fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md shadow-[0_14px_30px_rgba(15,23,42,0.12)]";

  const defaultStyles = "relative ml-10 bg-white";

  const linkStyles =
    "group relative whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-light tracking-[0.07em] text-[#3f3f3f] transition-colors hover:text-emerald-600";

  return (
    <nav
      className={`${baseStyles} ${
        scrolled ? scrolledStyles : defaultStyles
      } ${className ?? ""}`}
    >
      {items.slice(0, 4).map((item) => (
        <a key={item.label} href={item.href} className={linkStyles}>
          {item.label}

          <span
            className="
              absolute -bottom-1 left-1/2 h-[2px] w-0
              -translate-x-1/2 rounded-full bg-emerald-400
              transition-all duration-300 group-hover:w-full
            "
          />
        </a>
      ))}

      {menuGroups[0] && <DropDown group={menuGroups[0]} />}

      {items[4] && (
        <a href={items[4].href} className={linkStyles}>
          {items[4].label}

          <span
            className="
              absolute -bottom-1 left-1/2 h-[2px] w-0
              -translate-x-1/2 rounded-full bg-emerald-400
              transition-all duration-300 group-hover:w-full
            "
          />
        </a>
      )}
    </nav>
  );
}