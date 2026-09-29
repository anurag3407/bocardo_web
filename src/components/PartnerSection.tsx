"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Utensils, Bike } from "lucide-react";
import { useApp } from "@/context/AppContext";

export const PartnerSection: React.FC = () => {
  const { setIsPartnerModalOpen, setPartnerModalType } = useApp();

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-white border-b border-slate-100 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2">
          <div className="text-xs uppercase font-extrabold tracking-wider text-[#0891b2]">
            Join the Bocardo Network
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-950">
            Partner your restaurant or ride with us
          </h2>
          <p className="text-xs sm:text-base text-slate-500 font-medium">
            Join thousands of kitchens and riders powering fast food delivery across India
          </p>
        </div>

        {/* 2 Cards (Restaurants & Riders only) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 max-w-5xl mx-auto">
          
          {/* Card 1: Restaurant Partner */}
          <div className="bg-slate-50/70 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 hover:border-[#0bdcfc] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-slate-900">
                <Image
                  src="/partners/restaurant-partner-horizontal.jpg"
                  alt="Partner your restaurant or cloud kitchen with Bocardo food delivery"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 bg-white/95 backdrop-blur-xs px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-xs font-bold text-slate-950 flex items-center gap-2 shadow-sm">
                  <Utensils className="w-4 h-4 text-[#0891b2]" />
                  <span>Restaurants & Kitchens</span>
                </div>
              </div>

              <div className="p-5 sm:p-8 space-y-2 sm:space-y-3">
                <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                  Partner with Bocardo
                </h3>
                <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal">
                  Expand your restaurant&apos;s reach, grow your cloud kitchen orders, and let our zero-emission fleet deliver your hot dishes with precision road tracking.
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-8 pt-0">
              <button
                type="button"
                onClick={() => {
                  setPartnerModalType("restaurant");
                  setIsPartnerModalOpen(true);
                }}
                className="w-full py-4 rounded-2xl bg-slate-950 hover:bg-[#0bdcfc] text-white hover:text-slate-950 font-black text-xs sm:text-sm transition-all flex items-center justify-center gap-2 group-hover:shadow-md cursor-pointer"
              >
                <span>Partner Your Kitchen</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Rider */}
          <div className="bg-slate-50/70 rounded-3xl overflow-hidden border border-slate-200/80 hover:border-[#0bdcfc] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                <Image
                  src="/partners/delivery-rider.jpg"
                  alt="Join Bocardo as an EV delivery fleet partner and rider in India"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-950 flex items-center gap-2 shadow-sm">
                  <Bike className="w-4 h-4 text-[#0891b2]" />
                  <span>Delivery Fleet</span>
                </div>
              </div>

              <div className="p-8 space-y-3">
                <h3 className="text-2xl font-black text-slate-950">
                  Ride with Bocardo
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Flexible hours that fit your lifestyle. Competitive earnings, keep 100% of customer tips, and receive subsidized electric vehicle gear.
                </p>
              </div>
            </div>

            <div className="p-8 pt-0">
              <button
                type="button"
                onClick={() => {
                  setPartnerModalType("rider");
                  setIsPartnerModalOpen(true);
                }}
                className="w-full py-4 rounded-2xl bg-slate-950 hover:bg-[#0bdcfc] text-white hover:text-slate-950 font-black text-xs sm:text-sm transition-all flex items-center justify-center gap-2 group-hover:shadow-md cursor-pointer"
              >
                <span>Apply as a Delivery Partner</span>
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
