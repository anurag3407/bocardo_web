"use client";

import React from "react";
import { Utensils, Compass, Bike, Zap } from "lucide-react";
import { HOW_IT_WORKS } from "@/data/mockData";

export const HowItWorks: React.FC = () => {
  const icons: Record<string, React.ReactNode> = {
    Utensils: <Utensils className="w-7 h-7 text-[#0891b2]" />,
    Compass: <Compass className="w-7 h-7 text-[#0891b2]" />,
    Bike: <Bike className="w-7 h-7 text-[#0891b2]" />,
  };

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2">
          <div className="text-xs uppercase font-extrabold tracking-wider text-[#0891b2]">
            Lightning-Fast Food Delivery
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-950">
            How Bocardo delivers to your door
          </h2>
          <p className="text-xs sm:text-base text-slate-500 font-medium">
            Designed for culinary quality, kitchen precision, and zero-detour routing
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {HOW_IT_WORKS.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200/80 hover:border-[#0bdcfc] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#0bdcfc]/15 flex items-center justify-center">
                    {icons[step.icon]}
                  </div>
                  <span className="text-3xl font-black text-slate-200 select-none">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-950">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#0891b2]">
                <Zap className="w-4 h-4 text-[#0bdcfc]" />
                <span>Zero batching delay</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
