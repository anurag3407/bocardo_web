"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  CheckCircle2,
  BellRing,
  QrCode,
  ShieldCheck,
  Bike,
  Compass,
} from "lucide-react";
import { useApp } from "@/context/AppContext";
import BocardoLogo from "./BocardoLogo";

export const AppLaunchBanner: React.FC = () => {
  const { showToast } = useApp();
  const [contactInput, setContactInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactInput.trim() || (!contactInput.includes("@") && contactInput.length < 9)) {
      showToast("Please enter a valid email address or phone number");
      return;
    }
    setIsSubmitted(true);
    showToast("🎉 You're on the Bocardo VIP Launch List! 50% off code reserved.");
  };

  return (
    <section id="app-launch-section" className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden select-none">
      {/* Subtle brand glow matching Bocardo cyan */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#0bdcfc]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#9efd21]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Copy & Interactive Waitlist with generous spacing */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0bdcfc]/20 border border-[#0bdcfc]/40 text-[#0bdcfc] text-xs font-bold tracking-wide">
              <Sparkles className="w-4 h-4" />
              <span>OFFICIAL APPS LAUNCHING SOON</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                The full Bocardo experience in your pocket.
              </h2>
              <p className="text-base sm:text-lg text-slate-300 font-normal max-w-xl leading-relaxed">
                Superfast order dispatch, live GPS road tracking with Bocardo RouteEngine™,
                and seamless food delivery across iOS and Android.
              </p>
            </div>

            {/* Launch Perks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-4">
                <CheckCircle2 className="w-5 h-5 text-[#0bdcfc] flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div className="font-bold text-sm text-white">50% Off First 3 Orders</div>
                  <div className="text-xs text-slate-400">Exclusive VIP launch perk automatically credited.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-4">
                <Compass className="w-5 h-5 text-[#9efd21] flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div className="font-bold text-sm text-white">Live Route Tracking</div>
                  <div className="text-xs text-slate-400">Millimeter-precise rider path right to your door.</div>
                </div>
              </div>
            </div>

            {/* Waitlist Form with spacious padding */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/15 max-w-xl shadow-xl">
              {isSubmitted ? (
                <div className="flex items-center gap-4 py-3 text-emerald-400">
                  <CheckCircle2 className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <div className="text-base font-bold text-white">
                      You are in! VIP Launch Pass Reserved.
                    </div>
                    <div className="text-xs sm:text-sm text-slate-300 mt-1">
                      We will notify you the moment Bocardo goes live on the App Store & Google Play.
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between text-xs sm:text-sm text-slate-300">
                    <span className="font-semibold">Join the Early Access Priority List:</span>
                    <span className="text-[#0bdcfc] font-black">12,480+ foodies joined</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <input
                      type="text"
                      value={contactInput}
                      onChange={(e) => setContactInput(e.target.value)}
                      placeholder="Enter your email or phone number"
                      className="flex-1 px-5 py-3.5 rounded-2xl bg-white text-slate-900 placeholder-slate-400 text-sm font-medium outline-none border border-transparent focus:border-[#0bdcfc] focus:ring-2 focus:ring-[#0bdcfc]/30"
                    />
                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-2xl bg-[#0bdcfc] hover:bg-[#00caeb] text-slate-950 font-black text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 whitespace-nowrap"
                    >
                      <BellRing className="w-4 h-4 text-slate-950" />
                      <span>Notify Me</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                    <ShieldCheck className="w-4 h-4 text-slate-400" />
                    <span>Zero spam. Pre-orders open this month across London & UK.</span>
                  </div>
                </form>
              )}
            </div>

            {/* Store Pre-Order Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-3 bg-black/60 hover:bg-black border border-white/20 px-5 py-3 rounded-2xl transition-all select-none">
                <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.84.94-2.91-1 .04-2.19.67-2.88 1.48-.59.68-1.12 1.77-.98 2.82 1.11.08 2.25-.59 2.92-1.39z" />
                </svg>
                <div>
                  <div className="text-[10px] text-slate-400 leading-none uppercase tracking-wider">
                    Pre-order on
                  </div>
                  <div className="text-sm font-bold text-white leading-tight">
                    Apple App Store
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-black/60 hover:bg-black border border-white/20 px-5 py-3 rounded-2xl transition-all select-none">
                <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186c-.366-.341-.61-.83-.61-1.38V3.194c0-.55.244-1.039.61-1.38zM15.207 13.414l2.451 2.451-11.45 6.467 8.999-8.918zm0-2.828L6.208 1.668l11.45 6.467-2.451 2.451zm1.414 1.414l3.18-3.18c.677.387 1.199 1.054 1.199 1.766s-.522 1.379-1.199 1.766l-3.18-3.18z" />
                </svg>
                <div>
                  <div className="text-[10px] text-slate-400 leading-none uppercase tracking-wider">
                    Pre-register on
                  </div>
                  <div className="text-sm font-bold text-white leading-tight">
                    Google Play
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic Phone Mockup with comfortable margins */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              
              {/* Phone Frame */}
              <div className="relative mx-auto rounded-[46px] p-4 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 shadow-2xl border-4 border-slate-700">
                {/* Notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-950 rounded-full z-30 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800 ml-auto mr-2" />
                </div>

                {/* Inner Screen */}
                <div className="bg-slate-950 rounded-[36px] overflow-hidden border border-slate-800 text-slate-100 flex flex-col h-[520px]">
                  
                  {/* Status Bar */}
                  <div className="pt-3 px-6 pb-2 flex justify-between items-center text-[10px] text-slate-400 font-semibold select-none">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                      <span>5G</span>
                      <div className="w-4 h-2 border border-slate-400 rounded-xs p-0.2">
                        <div className="w-2.5 h-full bg-[#0bdcfc] rounded-xs" />
                      </div>
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BocardoLogo size={24} showText={false} />
                      <div>
                        <div className="text-[9px] uppercase font-bold text-slate-400">Deliver to</div>
                        <div className="text-[11px] font-bold text-white flex items-center gap-1">
                          Marylebone W1U <span className="text-[#0bdcfc] text-[9px]">▾</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-[#0bdcfc] text-slate-950 text-[10px] font-black flex items-center justify-center">
                      2
                    </div>
                  </div>

                  {/* Simulated App Content */}
                  <div className="p-3.5 space-y-3 overflow-hidden flex-1">
                    
                    {/* Live Tracking Map Card */}
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#9efd21] animate-ping" />
                          <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                            Rider on route
                          </span>
                        </div>
                        <span className="text-[11px] font-black text-[#0bdcfc]">12 mins</span>
                      </div>

                      {/* Road graphic */}
                      <div className="relative h-14 bg-slate-950 rounded-xl overflow-hidden flex items-center px-3 border border-slate-800/80">
                        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 h-1.5 bg-slate-800 rounded-full">
                          <div className="h-full bg-gradient-to-r from-[#9efd21] to-[#0bdcfc] w-3/5 rounded-full" />
                        </div>
                        <div className="relative z-10 w-6 h-6 rounded-full bg-slate-800 text-[10px] font-bold flex items-center justify-center border border-slate-700">
                          🍳
                        </div>
                        <div className="relative z-10 mx-auto w-7 h-7 rounded-full bg-[#0bdcfc] text-slate-950 flex items-center justify-center shadow-lg shadow-[#0bdcfc]/30">
                          <Bike className="w-4 h-4 text-slate-950" />
                        </div>
                        <div className="relative z-10 w-6 h-6 rounded-full bg-[#9efd21] text-slate-950 text-[10px] font-black flex items-center justify-center">
                          📍
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-slate-400">
                        <span>Marco • Bocardo e-Bike</span>
                        <span className="text-white font-semibold">2 items • £24.30</span>
                      </div>
                    </div>

                    {/* App Featured Kitchen Card */}
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                      <div className="relative h-20 w-full">
                        <Image
                          src="/restaurants/burger-craft.jpg"
                          alt="Burger Craft Co"
                          fill
                          sizes="300px"
                          className="object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-slate-900/90 backdrop-blur-xs text-[10px] font-bold px-2 py-0.5 rounded-md text-white">
                          20-30 min
                        </div>
                      </div>
                      <div className="p-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-white">The Burger Craft Co.</span>
                          <span className="text-[10px] font-bold text-[#ffcc02]">★ 4.8</span>
                        </div>
                        <div className="text-[10px] text-slate-400">Smashed Beef • Truffle Fries</div>
                      </div>
                    </div>

                    {/* Quick categories row */}
                    <div className="flex items-center gap-2 pt-1">
                      <div className="flex-1 bg-slate-900 p-2 rounded-xl text-center border border-slate-800">
                        <div className="text-xs font-bold text-white">Burgers</div>
                        <div className="text-[9px] text-[#0bdcfc]">£0 delivery</div>
                      </div>
                      <div className="flex-1 bg-slate-900 p-2 rounded-xl text-center border border-slate-800">
                        <div className="text-xs font-bold text-white">Pizza</div>
                        <div className="text-[9px] text-[#0bdcfc]">20% off</div>
                      </div>
                      <div className="flex-1 bg-slate-900 p-2 rounded-xl text-center border border-slate-800">
                        <div className="text-xs font-bold text-white">Sushi</div>
                        <div className="text-[9px] text-[#0bdcfc]">Top rated</div>
                      </div>
                    </div>

                  </div>

                  {/* App Bottom Bar */}
                  <div className="bg-slate-900 border-t border-slate-800 py-2.5 px-6 flex justify-between items-center text-[10px] text-slate-400">
                    <span className="text-[#0bdcfc] font-bold">Explore</span>
                    <span>Search</span>
                    <span>Orders</span>
                    <span>Account</span>
                  </div>

                </div>
              </div>

              {/* Floating QR Tag */}
              <div className="hidden sm:flex absolute -bottom-6 -left-8 bg-white text-slate-900 rounded-2xl p-4 shadow-xl border border-slate-200 items-center gap-3">
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white">
                  <QrCode className="w-7 h-7 text-[#0bdcfc]" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-extrabold text-slate-950">Scan to Bookmark</div>
                  <div className="text-[11px] text-slate-500">Camera instant pre-order</div>
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
