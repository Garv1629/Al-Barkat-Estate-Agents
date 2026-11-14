import React from "react";
import { Clock, MapPin, ShieldCheck, Star } from "lucide-react";
import { BUSINESS } from "../data/businessData";
import { StaggerGrid, StaggerItem } from "./MotionPrimitives";

export const StatsBand: React.FC = () => {
  const stats = [
    {
      icon: Star,
      title: `${BUSINESS.rating.score} Verified Rating`,
      subtitle: `${BUSINESS.rating.count} Client Reviews`,
      detail: "Trusted real estate agent in Andheri West",
    },
    {
      icon: ShieldCheck,
      title: "For Sale & Rent",
      subtitle: "22+ For Sale Mentions",
      detail: "Studio apartments, flats & houses",
    },
    {
      icon: Clock,
      title: "Quick Response",
      subtitle: BUSINESS.leadAgent,
      detail: `${BUSINESS.hours} · Landlord advocacy`,
    },
    {
      icon: MapPin,
      title: "Andheri West Office",
      subtitle: "Apna Bazar Rd, 400053",
      detail: `${BUSINESS.plusCode} · Azad Nagar`,
    },
  ];

  return (
    <section className="bg-[#E09290] border-y border-[#111111]/15 py-14 px-6 lg:px-12 text-[#111111] relative overflow-hidden">
      <div className="absolute inset-0 bg-grain-rose opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <StaggerItem
                key={stat.title}
                className={`flex flex-col justify-between space-y-3 border-[#111111]/15 ${
                  idx > 0 ? "border-t pt-6 sm:border-t-0 sm:pt-0" : ""
                } ${idx % 2 === 1 ? "sm:border-l sm:pl-6" : ""} ${
                  idx > 0 ? "lg:border-l lg:pl-8" : ""
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#111111]">
                    <Icon className="w-4 h-4 text-[#111111]" />
                    <span className="text-[11px] uppercase tracking-[0.22em] font-bold text-[#111111] font-mono tabular-nums">
                      {stat.title}
                    </span>
                  </div>
                  <p className="text-lg font-serif font-medium text-[#111111] leading-tight">
                    {stat.subtitle}
                  </p>
                </div>
                <p className="text-xs text-[#111111]/85 leading-relaxed font-sans">
                  {stat.detail}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </div>
    </section>
  );
};
