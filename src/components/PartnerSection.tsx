"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Utensils, Bike, Building2 } from "lucide-react";
import { useApp } from "@/context/AppContext";

export const PartnerSection: React.FC = () => {
  const { setIsPartnerModalOpen, setPartnerModalType } = useApp();

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="text-xs uppercase font-extrabold tracking-wider text-[#0891b2]">
            Join the Bocardo Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Grow your business or ride with us
          </h2>
          <p className="text-sm text-slate-500 font-medium">
            Join thousands of restaurants, riders, and corporate partners across the country
          </p>
        </div>

        {/* 3 Columns Cards (Deliveroo style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Restaurant Partner */}
          <div className="bg-slate-50/70 rounded-3xl overflow-hidden border border-slate-200/80 hover:border-[#0bdcfc] card-subtle flex flex-col justify-between group">
            <div>
              <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                <Image
                  src="/restaurants/pizza-palace.jpg"
                  alt="Restaurant Partner"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold text-slate-900 flex items-center gap-1.5 shadow-xs">
                  <Utensils className="w-3.5 h-3.5 text-[#0891b2]" />
                  <span>Restaurants</span>
                </div>
              </div>

              <div className="p-6 space-y-2">
                <h3 className="text-xl font-extrabold text-slate-950">
                  Partner with us
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Expand your reach, boost weekday covers, and let our zero-emission fleet deliver your culinary creations with pinpoint road tracking.
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                type="button"
                onClick={() => {
                  setPartnerModalType("restaurant");
                  setIsPartnerModalOpen(true);
                }}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-[#0bdcfc] text-white hover:text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-2 group-hover:shadow-sm"
              >
                <span>Partner with Bocardo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Rider */}
          <div className="bg-slate-50/70 rounded-3xl overflow-hidden border border-slate-200/80 hover:border-[#0bdcfc] card-subtle flex flex-col justify-between group">
            <div>
              <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                <Image
                  src="/restaurants/burger-craft.jpg"
                  alt="Ride with Bocardo"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold text-slate-900 flex items-center gap-1.5 shadow-xs">
                  <Bike className="w-3.5 h-3.5 text-[#0891b2]" />
                  <span>Riders</span>
                </div>
              </div>

              <div className="p-6 space-y-2">
                <h3 className="text-xl font-extrabold text-slate-950">
                  Ride with Bocardo
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Flexible hours that fit your schedule. Competitive pay, keep 100% of customer tips, and receive subsidized electric bike gear.
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                type="button"
                onClick={() => {
                  setPartnerModalType("rider");
                  setIsPartnerModalOpen(true);
                }}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-[#0bdcfc] text-white hover:text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-2 group-hover:shadow-sm"
              >
                <span>Apply as a Rider</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 3: Bocardo for Work */}
          <div className="bg-slate-50/70 rounded-3xl overflow-hidden border border-slate-200/80 hover:border-[#0bdcfc] card-subtle flex flex-col justify-between group">
            <div>
              <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                <Image
                  src="/restaurants/tokyo-sushi.jpg"
                  alt="Bocardo for Work"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold text-slate-900 flex items-center gap-1.5 shadow-xs">
                  <Building2 className="w-3.5 h-3.5 text-[#0891b2]" />
                  <span>Corporate</span>
                </div>
              </div>

              <div className="p-6 space-y-2">
                <h3 className="text-xl font-extrabold text-slate-950">
                  Bocardo for Work
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Feed your team with corporate allowances, late-night overtime meals, and executive boardroom catering from premier kitchens.
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                type="button"
                onClick={() => {
                  setPartnerModalType("corporate");
                  setIsPartnerModalOpen(true);
                }}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-[#0bdcfc] text-white hover:text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-2 group-hover:shadow-sm"
              >
                <span>Bocardo for Business</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PartnerSection;
