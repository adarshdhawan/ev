"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ChevronRight } from "lucide-react";

const guides = [
  {
    title: "EV Buying Guide",
    description: "Everything you need to know before buying your first electric vehicle",
    time: "8–12 min read",
    image: "/0a4f7115570656534fa11fd9c9bb3d98c9748560.png",
  },
  {
    title: "Understanding EV Range",
    description: "How range works, what affects it, and how to maximize your EV's efficiency",
    time: "5–8 min read",
    image: "/74af0e572ecb2f5d32e530521e5365ec9ebdbce3.png",
  },
  {
    title: "Planning Your First Long Trip",
    description: "A complete guide to planning and executing your first long-distance EV journey",
    time: "10–15 min read",
    image: "/cbd3608256e414b8a2b91ad5b36365196fe2bf2a.png",
  },
];

export default function GuidesPanel() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".guides-item",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out" },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white px-6 py-12 sm:px-10 lg:px-14">
      <div className="mx-auto w-full max-w-6xl text-center">
        <h2 className="guides-item text-[38px] font-semibold text-[#11a85a] sm:text-[42px]">
          EVs, explained for real life
        </h2>
        <p className="guides-item mt-3 text-[16px] leading-[1.6] text-slate-600">
          From buying and owning an EV to planning long trips, charging, range, connectors, and everything
          in between.
        </p>

        <div className="relative mt-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <article
                key={guide.title}
                className="guides-item overflow-hidden rounded-[26px] border border-slate-100 bg-white text-left shadow-[0_14px_26px_rgba(15,23,42,0.08)]"
              >
                <div className="relative h-44 w-full">
                  <Image src={guide.image} alt={guide.title} fill className="object-cover" />
                </div>
                <div className="px-6 pb-6 pt-5">
                  <h3 className="text-[18px] font-semibold text-slate-900">{guide.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-slate-600">
                    {guide.description}
                  </p>
                  <p className="mt-3 text-[12px] text-slate-400">{guide.time}</p>
                  <button
                    type="button"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0ea65a] px-5 py-2 text-[13px] font-semibold text-white"
                  >
                    Read <span aria-hidden="true">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
          <button
            type="button"
            aria-label="Next"
            className="guides-item absolute -right-4 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white p-3 shadow-[0_10px_24px_rgba(15,23,42,0.18)] lg:flex"
          >
            <ChevronRight className="h-5 w-5 text-slate-500" />
          </button>
        </div>
      </div>
    </section>
  );
}
