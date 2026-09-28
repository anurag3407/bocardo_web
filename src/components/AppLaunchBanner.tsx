"use client";

import React from "react";
import Image from "next/image";
import {
  Sparkles,
  MapPin,
  Search,
  ShoppingBag,
  Bell,
  Star,
  Clock,
  Compass,
} from "lucide-react";

export const AppLaunchBanner: React.FC = () => {
  return (
    <section
      id="app-launch-section"
      className="py-24 lg:py-32 bg-black text-white relative overflow-hidden select-none border-t border-neutral-900"
    >
      {/* Subtle deep ambient glow behind the iPhone */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#00C2E8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Minimalist Launching Soon Content */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            
            {/* Minimalist Live Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-bold tracking-wider uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C2E8] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C2E8]" />
              </span>
              <span className="text-white">LAUNCHING SOON</span>
            </div>

            {/* Apple-Keynote Style Clean Typography */}
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.06]">
                The full Bocardo experience in your pocket.
              </h2>
              <p className="text-base sm:text-lg text-neutral-400 font-normal max-w-xl leading-relaxed">
                Superfast order dispatch, live GPS road tracking with Bocardo RouteEngine™,
                and London&apos;s best food delivery—designed exclusively for iOS and Android.
              </p>
            </div>

            {/* App Store & Google Play Pre-Order Badges */}
            <div className="pt-2">
              <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-4">
                Available Soon On
              </div>
              <div className="flex flex-wrap items-center gap-3.5">
                {/* Apple App Store Button */}
                <div className="flex items-center gap-3 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 px-5 py-3 rounded-2xl transition-all shadow-md group cursor-pointer">
                  <svg
                    className="w-7 h-7 fill-white group-hover:scale-105 transition-transform"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.84.94-2.91-1 .04-2.19.67-2.88 1.48-.59.68-1.12 1.77-.98 2.82 1.11.08 2.25-.59 2.92-1.39z" />
                  </svg>
                  <div>
                    <div className="text-[10px] text-neutral-400 leading-none uppercase tracking-wider">
                      Coming Soon to
                    </div>
                    <div className="text-sm font-bold text-white leading-tight">
                      Apple App Store
                    </div>
                  </div>
                </div>

                {/* Google Play Button */}
                <div className="flex items-center gap-3 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 px-5 py-3 rounded-2xl transition-all shadow-md group cursor-pointer">
                  <svg
                    className="w-6 h-6 fill-current text-white group-hover:scale-105 transition-transform"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3.609 1.814L13.792 12 3.61 22.186c-.366-.341-.61-.83-.61-1.38V3.194c0-.55.244-1.039.61-1.38zM15.207 13.414l2.451 2.451-11.45 6.467 8.999-8.918zm0-2.828L6.208 1.668l11.45 6.467-2.451 2.451zm1.414 1.414l3.18-3.18c.677.387 1.199 1.054 1.199 1.766s-.522 1.379-1.199 1.766l-3.18-3.18z" />
                  </svg>
                  <div>
                    <div className="text-[10px] text-neutral-400 leading-none uppercase tracking-wider">
                      Coming Soon to
                    </div>
                    <div className="text-sm font-bold text-white leading-tight">
                      Google Play
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Realistic Modern iPhone 16 Pro Mockup with App Coming Soon Screen */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] sm:max-w-[340px]">
              
              {/* Outer Titanium Chassis Frame */}
              <div className="relative rounded-[54px] p-2.5 sm:p-3 bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-950 ring-1 ring-white/20 shadow-[0_25px_80px_rgba(0,0,0,0.9),0_0_50px_rgba(0,194,232,0.12)]">
                
                {/* Physical Hardware Buttons */}
                {/* Action button */}
                <div className="absolute -left-[3px] top-24 w-[3px] h-7 bg-neutral-700 rounded-l-xs" />
                {/* Volume up */}
                <div className="absolute -left-[3px] top-36 w-[3px] h-11 bg-neutral-700 rounded-l-xs" />
                {/* Volume down */}
                <div className="absolute -left-[3px] top-52 w-[3px] h-11 bg-neutral-700 rounded-l-xs" />
                {/* Power button */}
                <div className="absolute -right-[3px] top-36 w-[3px] h-14 bg-neutral-700 rounded-r-xs" />

                {/* Inner Screen Container */}
                <div className="relative bg-[#0d1117] rounded-[44px] overflow-hidden border border-neutral-800 text-white flex flex-col h-[580px] shadow-inner">
                  
                  {/* Subtle Glass Sheen Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none z-30" />

                  {/* Dynamic Island with Camera & Sensor */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-26 h-6 bg-black rounded-full z-40 flex items-center justify-between px-2.5 ring-1 ring-white/10 shadow-md">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#121620] border border-neutral-800 flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-[#1e293b]" />
                    </div>
                    <div className="w-2 h-2 rounded-full bg-[#0bdcfc]/20" />
                  </div>

                  {/* iOS Status Bar */}
                  <div className="pt-3.5 px-6 pb-2 flex justify-between items-center text-[11px] text-white/90 font-semibold select-none z-30">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                      {/* Cellular Bars */}
                      <div className="flex items-end gap-0.5 h-2.5">
                        <span className="w-0.5 h-1 bg-white rounded-2xs" />
                        <span className="w-0.5 h-1.5 bg-white rounded-2xs" />
                        <span className="w-0.5 h-2 bg-white rounded-2xs" />
                        <span className="w-0.5 h-2.5 bg-white rounded-2xs" />
                      </div>
                      <span className="text-[10px] font-bold">5G</span>
                      {/* Battery */}
                      <div className="w-4.5 h-2.5 border border-white/80 rounded-xs p-0.5 flex items-center">
                        <div className="w-2.5 h-full bg-[#00C2E8] rounded-3xs" />
                      </div>
                    </div>
                  </div>

                  {/* In-App Header */}
                  <div className="pt-2 px-4 pb-3 flex items-center justify-between border-b border-neutral-800/80 bg-neutral-900/60 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center p-0.5 shadow-xs">
                        <Image
                          src="/logo-circle.png"
                          alt="Bocardo"
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <div className="text-[8px] uppercase font-bold text-neutral-400 tracking-wider">
                          Deliver to
                        </div>
                        <div className="text-[11px] font-bold text-white flex items-center gap-1">
                          <span>Marylebone W1U</span>
                          <span className="text-[#00C2E8] text-[9px]">▾</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white">
                      <ShoppingBag className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* App Screen Content: Coming Soon Experience */}
                  <div className="p-3.5 space-y-3 flex-1 overflow-hidden flex flex-col justify-between">
                    
                    {/* Hero App Launching Soon Card */}
                    <div className="relative rounded-2xl p-4 bg-gradient-to-br from-[#00C2E8] to-[#0077b6] text-white shadow-lg overflow-hidden">
                      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" />
                      
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/25 backdrop-blur-xs text-[10px] font-black uppercase tracking-wider text-white mb-2">
                        <Sparkles className="w-3 h-3 text-[#facc15]" />
                        <span>APP COMING SOON</span>
                      </div>
                      
                      <div className="text-base font-black tracking-tight leading-tight mb-1">
                        Bocardo iOS & Android
                      </div>
                      <div className="text-[11px] text-white/90 leading-snug">
                        20-min food delivery, live GPS tracking & exclusive member perks.
                      </div>

                      <div className="mt-3 flex items-center gap-2">
                        <div className="px-3 py-1.5 rounded-xl bg-white text-slate-950 font-black text-[10px] shadow-sm flex items-center gap-1">
                          <Bell className="w-3 h-3 text-[#00C2E8]" />
                          <span>Pre-register</span>
                        </div>
                        <span className="text-[10px] text-white/80 font-bold">50% off on launch</span>
                      </div>
                    </div>

                    {/* Featured Dish / Restaurant Preview */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-3 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-white">Top Restaurants Ready</span>
                        <span className="text-[10px] text-[#00C2E8] font-bold">Explore</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-neutral-800">
                          <Image
                            src="/restaurants/pizza-palace.jpg"
                            alt="Pizza Palace"
                            fill
                            sizes="60px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-white truncate">Pizza Palace London</div>
                          <div className="text-[10px] text-neutral-400">Artisan Wood-Fired • Italian</div>
                          <div className="flex items-center gap-2 text-[10px] text-neutral-400 mt-1">
                            <span className="text-[#facc15] font-bold flex items-center gap-0.5">
                              <Star className="w-2.5 h-2.5 fill-[#facc15]" /> 4.9
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-0.5">
                              <Clock className="w-2.5 h-2.5" /> 15-25 min
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Live Tracking Mini Preview */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-2.5 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-xl bg-[#00C2E8]/15 text-[#00C2E8] flex items-center justify-center">
                          <Compass className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-white">Live RouteEngine™ GPS</div>
                          <div className="text-[9px] text-neutral-400">Millimeter-precise road map</div>
                        </div>
                      </div>
                      <span className="text-[9px] font-black uppercase text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-md">
                        Ready
                      </span>
                    </div>

                  </div>

                  {/* iOS App Bottom Navigation Tab Bar */}
                  <div className="bg-neutral-900/90 border-t border-neutral-800/80 py-2.5 px-6 flex justify-between items-center text-[9px] text-neutral-400 backdrop-blur-md">
                    <span className="text-[#00C2E8] font-bold">Discover</span>
                    <span>Search</span>
                    <span>Orders</span>
                    <span>Account</span>
                  </div>

                  {/* iOS Home Indicator Bar */}
                  <div className="pb-2 pt-1 flex justify-center bg-neutral-900">
                    <div className="w-28 h-1 bg-white/40 rounded-full" />
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppLaunchBanner;
