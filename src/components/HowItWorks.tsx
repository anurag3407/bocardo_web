"use client";

import React from "react";
import { Utensils, Compass, Bike, ShieldCheck, Zap } from "lucide-react";
import { HOW_IT_WORKS } from "@/data/mockData";

export const HowItWorks: React.FC = () => {
  const icons: Record<string, React.ReactNode> = {
    Utensils: <Utensils className="w-6 h-6 text-[#0891b2]" />,
    Compass: <Compass className="w-6 h-6 text-[#0891b2]" />,
    Bike: <Bike className="w-6 h-6 text-[#0891b2]" />,
  };

  return (
    <section className="py-16 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="text-xs uppercase font-extrabold tracking-wider text-[#0891b2]">
            Lightning-Fast Delivery
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
            How Bocardo delivers to your door
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Designed from the ground up for food quality, kitchen precision, and driver fairness.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {HOW_IT_WORKS.map((step, idx) => (
            <div
              key={step.step}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-[#0bdcfc] card-subtle relative flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#0bdcfc]/15 flex items-center justify-center">
                    {icons[step.icon]}
                  </div>
                  <span className="text-2xl font-black text-slate-200 select-none">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-950">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#0891b2]">
                <Zap className="w-3.5 h-3.5 text-[#0bdcfc]" />
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
