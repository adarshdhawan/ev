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
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Stats Box */}
        <div className="mt-12 overflow-hidden rounded-[28px] bg-gradient-to-r from-[#10a85a] via-[#0b7b43] to-[#0a5a33] shadow-[0_18px_40px_rgba(16,129,80,0.3)]">

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 text-white">

            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.value}
                  className={`flex flex-col items-center justify-center px-4 py-6 text-center
                  ${index !== 0 ? "lg:border-l lg:border-white/20" : ""}`}
                >

                  {/* Icon */}
                  <div className="mb-2 rounded-full border border-white/25 bg-white/10 p-3 sm:p-4">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>

                  {/* Value */}
                  <p className="text-lg font-semibold sm:text-xl lg:text-2xl">
                    {stat.value}
                  </p>

                  {/* Label */}
                  <p className="mt-1 whitespace-pre-line text-xs leading-snug text-white/80 sm:text-sm">
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