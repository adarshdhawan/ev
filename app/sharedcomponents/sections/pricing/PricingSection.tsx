"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Users } from "lucide-react";

const plans = [
  {
    title: "Casual Wanderer",
    description: "For the occasional explorer",
    price: "$999/ month",
    users: "4.2k+ users",
    popular: true,
  },
  {
    title: "Weekend Cruiser",
    description: "Perfect for monthly getaways",
    price: "$999/ month",
    users: "3.1k+ users",
  },
  {
    title: "Highway Hopper",
    description: "For frequent highway travellers",
    price: "$999/ month",
    users: "2.8k+ users",
  },
  {
    title: "Road Warrior",
    description: "For heavy users and long distance drivers",
    price: "$999/ month",
    users: "1.5k+ users",
  },
];

export default function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".panel-fifth-card",
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan) => (
          <article
            key={plan.title}
            className="panel-fifth-card overflow-hidden rounded-[30px] bg-[#cdeee1] shadow-[0_18px_30px_rgba(15,23,42,0.08)]"
          >
            <div className="relative h-40 bg-[linear-gradient(135deg,#e7e2d8,#e4e9e2_45%,#d2e3d8)]">
              {plan.popular && (
                <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-emerald-600 shadow">
                  Popular
                </span>
              )}
            </div>
            <div className="space-y-3 px-6 pb-6 pt-4">
              <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-emerald-600 shadow">
                {plan.price}
              </span>
              <h3 className="text-lg font-semibold text-slate-900">{plan.title}</h3>
              <p className="text-sm text-slate-600">{plan.description}</p>
              <div className="flex items-center gap-2 text-xs text-emerald-600">
                <Users className="h-4 w-4" />
                Purchased by <span className="font-semibold">{plan.users}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
