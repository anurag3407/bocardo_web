"use client";

import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

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

          {/* Right Column: Authentic iPhone Lock Screen Mockup */}
          <div className="lg:col-span-6 flex justify-center items-center py-6 sm:py-8">
            <div className="iphone-wrapper">
              <div className="outside-border">
                <div className="silencer" />
                <div className="volume-up" />
                <div className="volume-down" />
                <div className="button-on" />
                <div className="inside-border">
                  {/* Camera */}
                  <div className="camera">
                    <div className="camera-dot">
                      <div className="camera-dot-2" />
                      <div className="camera-dot-3" />
                    </div>
                    <div className="camera-speaker" />
                  </div>

                  {/* Lock */}
                  <div className="lock">
                    <div className="lock-locked" />
                  </div>

                  {/* Time */}
                  <div className="time">19:53</div>

                  {/* Battery and Signal */}
                  <div className="t-r-info">
                    <div className="dots">...</div>
                    <div className="battery">
                      <div className="bar" />
                      <div className="dot" />
                    </div>
                  </div>

                  {/* Date */}
                  <div className="date">Tuesday, 9 August</div>

                  {/* Bocardo App Coming Soon Live Activity / Notification Widget */}
                  <div className="absolute top-[125px] left-3 right-3 bg-neutral-950/85 backdrop-blur-xl border border-white/15 rounded-2xl p-3 shadow-2xl z-20 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center p-0.5 shadow-sm">
                          <Image
                            src="/logo-circle.png"
                            alt="Bocardo"
                            width={16}
                            height={16}
                            className="object-contain"
                          />
                        </div>
                        <span className="text-[9px] font-black tracking-wider text-neutral-200 uppercase">
                          BOCARDO
                        </span>
                      </div>
                      <span className="text-[8px] font-semibold text-[#00C2E8] bg-[#00C2E8]/10 px-1.5 py-0.5 rounded-full border border-[#00C2E8]/20">
                        COMING SOON
                      </span>
                    </div>

                    <div className="text-xs font-black text-white leading-tight mb-1">
                      The App Is Arriving
                    </div>
                    <p className="text-[8.5px] text-neutral-300 leading-tight mb-2.5">
                      20-min food delivery, live GPS tracking & exclusive launch treats.
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[8.5px]">
                      <span className="text-[#00C2E8] font-bold flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" /> 50% Off Launch
                      </span>
                      <span className="text-neutral-400 font-medium">iOS & Android</span>
                    </div>
                  </div>

                  {/* Torch */}
                  <div className="torch-outter">
                    <div className="light" />
                    <div className="top" />
                    <div className="switch-top" />
                    <div className="switch-section" />
                    <div className="switch">
                      <div className="dot" />
                    </div>
                  </div>

                  {/* Camera */}
                  <div className="camera-outter">
                    <div className="box" />
                    <div className="eye" />
                    <div className="circle" />
                    <div className="dot" />
                  </div>

                  {/* Bottom Line */}
                  <div className="bottom-line" />
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
