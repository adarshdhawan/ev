"use client";

import { Car, MapPin, Zap, Activity, Network, Building2 } from "lucide-react";

const stats = [
  { label: "EV Owners Use\nEVJoints", value: "4,000+", icon: Car },
  { label: "Trips Planned", value: "10,000+", icon: MapPin },
  { label: "Charging Stations\nListed", value: "7,000+", icon: Zap },
  { label: "With Live Status", value: "900+", icon: Activity },
  { label: "Charging\nNetworks", value: "40+", icon: Network },
  { label: "Cities Covered", value: "2,500+", icon: Building2 },
];

export default function TrustSection() {
  return (
    <section className="">
      <div className="mx-auto w-full max-w-6xl">

        {/* Title */}
        <h2 className="text-center text-3xl font-semibold tracking-wide text-emerald-600 text-[40px]">
          Trusted by EV travellers across India
        </h2>

        {/* Stats Box */}
        <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[28px] bg-gradient-to-r from-[#10a85a] via-[#0b7b43] to-[#0a5a33] shadow-[0_18px_40px_rgba(16,129,80,0.3)] mt-4">
          
          <div className="grid grid-cols-2 gap-y-4 gap-x-4 px-4 py-4 text-white sm:grid-cols-3 lg:grid-cols-6">
            
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.value}
                  className={`flex flex-col items-center gap-2 px-2 text-center ${
                    index === 0 ? "" : "lg:border-l lg:border-white/20"
                  }`}
                >
                  
                  {/* Icon */}
                  <div className="rounded-full border border-white/25 bg-white/10 p-3">
                    <Icon className="h-5 w-5 text-white/90" />
                  </div>

                  {/* Value */}
                  <p className="text-xl font-semibold tracking-wide sm:text-2xl">
                    {stat.value}
                  </p>

                  {/* Label */}
                  <p className="whitespace-pre-line text-xs sm:text-sm text-white/80 leading-snug">
                    {stat.label}
                  </p>

                </div>
              );
            })}
          
          </div>

        </div>
      </div>
    </section>
  );
}
