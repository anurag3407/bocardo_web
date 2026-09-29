"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  MapPin,
  ChevronDown,
  Search,
  Flame,
  Star,
  Clock,
  Bike,
  Home,
  Compass,
  ShoppingBag,
  User,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useApp } from "@/context/AppContext";

export const AppLaunchBanner: React.FC = () => {
  const { showToast } = useApp();
  const [contactInput, setContactInput] = useState("");
  const [joinedWaitlist, setJoinedWaitlist] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactInput.trim()) return;
    setJoinedWaitlist(true);
    showToast("🎉 You're on the Bocardo VIP waitlist! We'll notify you the moment the app goes live.");
  };

  return (
    <section
      id="app-launch-section"
      className="py-14 sm:py-20 lg:py-28 bg-black text-white relative overflow-hidden select-none border-t border-neutral-900"
    >
      {/* Subtle deep ambient glow behind the iPhone */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#00C2E8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Launching Soon Content */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            
            {/* Live Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-bold tracking-wider uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0bdcfc] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0bdcfc]" />
              </span>
              <span className="text-white">COMING SOON TO INDIA</span>
            </div>

            {/* Apple-Keynote Style Clean Typography */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.08] sm:leading-[1.06]">
                The full Bocardo experience in your pocket.
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-neutral-400 font-normal max-w-xl leading-relaxed">
                Superfast 20-minute order dispatch, live GPS road tracking with Bocardo RouteEngine™,
                and India&apos;s finest kitchens and cloud brands—engineered exclusively for iOS and Android.
              </p>
            </div>

            {/* Early Access Waitlist Form */}
            <div className="max-w-md pt-1">
              {joinedWaitlist ? (
                <div className="p-4 rounded-2xl bg-neutral-900 border border-emerald-500/30 flex items-center gap-3 text-emerald-400 text-sm font-semibold">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>VIP Access Confirmed! You&apos;ll get ₹150 OFF and free delivery on launch.</span>
                </div>
              ) : (
                <form onSubmit={handleWaitlistSubmit} className="space-y-2">
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <input
                      type="text"
                      placeholder="Enter mobile number or email"
                      value={contactInput}
                      onChange={(e) => setContactInput(e.target.value)}
                      className="flex-1 bg-neutral-900 border border-neutral-800 rounded-2xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#0bdcfc] transition-colors"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-2xl bg-[#0bdcfc] hover:bg-[#00caeb] text-neutral-950 font-black text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#0bdcfc]/20 hover:scale-[1.02]"
                    >
                      <span>Get VIP Access</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-xs text-neutral-500">
                    Join 25,000+ foodies across Bengaluru, Mumbai & Delhi on the waitlist.
                  </p>
                </form>
              )}
            </div>

            {/* App Store & Google Play Pre-Order Badges */}
            <div className="pt-2">
              <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-4">
                Available Soon On
              </div>
              <div className="flex flex-wrap items-center gap-3.5">
                {/* Apple App Store Button */}
                <div
                  onClick={() => showToast("🍏 Apple App Store pre-order opening soon!")}
                  className="flex items-center gap-3 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 px-5 py-3 rounded-2xl transition-all shadow-md group cursor-pointer"
                >
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
                <div
                  onClick={() => showToast("🤖 Google Play Store pre-registration opening soon!")}
                  className="flex items-center gap-3 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 px-5 py-3 rounded-2xl transition-all shadow-md group cursor-pointer"
                >
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

          {/* Right Column: Aesthetic iPhone Mockup with Real Bocardo App UI */}
          <div className="lg:col-span-6 flex justify-center items-center py-6 sm:py-8">
            <div className="relative mx-auto">
              
              {/* iPhone 16 Pro Style Hardware Chassis */}
              <div className="relative w-[285px] sm:w-[304px] h-[580px] sm:h-[618px] rounded-[48px] sm:rounded-[52px] bg-[#121418] p-[8px] sm:p-[10px] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.95),0_0_40px_rgba(11,220,252,0.18)] border border-neutral-700/60 ring-1 ring-white/10 select-none">
                
                {/* Physical Hardware Buttons (Titanium Edges) */}
                {/* Action Button */}
                <div className="absolute -left-[3px] top-[95px] w-[3px] h-[22px] bg-neutral-600 rounded-l-sm" />
                {/* Volume Up */}
                <div className="absolute -left-[3px] top-[130px] w-[3px] h-[42px] bg-neutral-600 rounded-l-sm" />
                {/* Volume Down */}
                <div className="absolute -left-[3px] top-[182px] w-[3px] h-[42px] bg-neutral-600 rounded-l-sm" />
                {/* Power Button */}
                <div className="absolute -right-[3px] top-[145px] w-[3px] h-[55px] bg-neutral-600 rounded-r-sm" />

                {/* OLED Display Screen */}
                <div className="relative w-full h-full rounded-[44px] overflow-hidden bg-neutral-950 border border-neutral-800/80 flex flex-col justify-between text-white shadow-inner">
                  
                  {/* Ambient Screen Glows */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#0bdcfc]/15 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute top-1/2 -left-12 w-40 h-40 bg-[#0891b2]/10 rounded-full blur-3xl pointer-events-none" />

                  {/* 1. iOS Status Bar & Dynamic Island */}
                  <div className="relative pt-3 px-5 flex items-center justify-between z-30 select-none">
                    {/* Time */}
                    <span className="text-[12px] font-bold tracking-tight text-white/90 font-mono">9:41</span>
                    
                    {/* Dynamic Island */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-2.5 w-[96px] h-[25px] bg-black rounded-full flex items-center justify-between px-2.5 border border-white/10 shadow-lg">
                      <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-[#0bdcfc]/80" />
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[7.5px] font-black text-white/80 tracking-wider">LIVE</span>
                      </div>
                    </div>

                    {/* Status Icons */}
                    <div className="flex items-center gap-1.5 text-white/90">
                      <svg className="w-3.5 h-3 fill-current" viewBox="0 0 17 12">
                        <rect x="1" y="8" width="2" height="4" rx="0.5" />
                        <rect x="5" y="6" width="2" height="6" rx="0.5" />
                        <rect x="9" y="3" width="2" height="9" rx="0.5" />
                        <rect x="13" y="0.5" width="2" height="11.5" rx="0.5" />
                      </svg>
                      <div className="w-5 h-2.5 border border-white/80 rounded-[3px] p-[1px] flex items-center">
                        <div className="w-full h-full bg-white rounded-[1.5px]" />
                      </div>
                    </div>
                  </div>

                  {/* 2. Aesthetic Bocardo App UI Body */}
                  <div className="flex-1 overflow-y-auto no-scrollbar px-3 pt-2 pb-2 space-y-2.5 z-20">
                    
                    {/* App Header (Location + Avatar) */}
                    <div className="flex items-center justify-between pt-0.5">
                      <div>
                        <div className="flex items-center gap-1 text-[8.5px] uppercase font-black tracking-wider text-[#0bdcfc]">
                          <MapPin className="w-2.5 h-2.5" />
                          <span>DELIVERING TO</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs font-black text-white leading-tight">
                          <span>Indiranagar, BLR</span>
                          <ChevronDown className="w-3 h-3 text-neutral-400" />
                        </div>
                      </div>

                      <div className="w-7 h-7 rounded-full bg-neutral-900 border border-neutral-700/80 flex items-center justify-center p-1 shadow-inner relative">
                        <Image
                          src="/logo-circle.png"
                          alt="Bocardo iOS and Android Delivery App Icon"
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#0bdcfc] ring-2 ring-neutral-950" />
                      </div>
                    </div>

                    {/* App Search Bar */}
                    <div className="bg-neutral-900/90 border border-neutral-800 rounded-xl px-2.5 py-1.5 flex items-center gap-2 text-[10px] text-neutral-400 shadow-sm">
                      <Search className="w-3 h-3 text-neutral-500" />
                      <span className="truncate">Search &quot;Dum Biryani&quot;, &quot;Burgers&quot;...</span>
                    </div>

                    {/* Aesthetic Coming Soon Hero Card */}
                    <div className="relative rounded-2xl overflow-hidden p-3 bg-gradient-to-br from-neutral-900 via-neutral-900 to-[#0bdcfc]/20 border border-[#0bdcfc]/35 shadow-lg group">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[8px] font-black tracking-widest text-[#0bdcfc] uppercase bg-[#0bdcfc]/10 px-2 py-0.5 rounded-full border border-[#0bdcfc]/20">
                            COMING SOON
                          </span>
                          <span className="text-[8px] font-bold text-amber-300 flex items-center gap-0.5">
                            <Sparkles className="w-2.5 h-2.5" /> VIP PASS
                          </span>
                        </div>
                        <span className="text-[8px] font-bold text-white/60">v1.0 iOS</span>
                      </div>

                      <h4 className="text-[12px] font-black text-white leading-snug">
                        Bocardo App is Landing in India
                      </h4>
                      <p className="text-[8.5px] text-neutral-300 leading-tight mt-0.5 mb-2">
                        Superfast 20-min food delivery, live GPS tracking & exclusive launch treats.
                      </p>

                      <div className="flex items-center justify-between pt-1.5 border-t border-white/10">
                        <div className="flex items-center gap-1 text-[8px] text-[#0bdcfc] font-bold">
                          <span>Flat ₹150 OFF</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => showToast("🔔 You'll be notified when Bocardo iOS App goes live!")}
                          className="px-2.5 py-1 rounded-lg bg-[#0bdcfc] hover:bg-[#00caeb] text-neutral-950 font-black text-[8.5px] flex items-center gap-1 shadow-md cursor-pointer transition-all"
                        >
                          <span>Notify Me</span>
                        </button>
                      </div>
                    </div>

                    {/* Category Discovery Pills */}
                    <div>
                      <div className="flex items-center justify-between text-[9px] mb-1">
                        <span className="font-extrabold text-neutral-300 uppercase tracking-wider text-[8.5px]">Top Cuisines</span>
                        <span className="text-[#0bdcfc] text-[8px] font-bold">Explore</span>
                      </div>
                      <div className="grid grid-cols-4 gap-1.5">
                        {[
                          { name: "Biryani", emoji: "🍲", tag: "Royal Dum" },
                          { name: "Burgers", emoji: "🍔", tag: "Smashed" },
                          { name: "Pizza", emoji: "🍕", tag: "Wood-fired" },
                          { name: "Chai", emoji: "☕", tag: "Specialty" },
                        ].map((cat) => (
                          <div
                            key={cat.name}
                            className="bg-neutral-900/80 border border-neutral-800/80 rounded-xl p-1.5 flex flex-col items-center text-center shadow-xs"
                          >
                            <span className="text-base">{cat.emoji}</span>
                            <span className="text-[8.5px] font-black text-white mt-0.5">{cat.name}</span>
                            <span className="text-[7px] text-neutral-500 font-medium leading-none">{cat.tag}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Featured Authentic Dish Card */}
                    <div className="bg-neutral-900/70 border border-neutral-800/80 rounded-2xl overflow-hidden shadow-md">
                      <div className="relative h-20 w-full overflow-hidden bg-neutral-800">
                        <Image
                          src="/hero/indian_feast_flank.png"
                          alt="Royal Dum Biryani Feast on Bocardo mobile app"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-1.5 left-1.5 bg-black/80 backdrop-blur-xs px-2 py-0.5 rounded-full text-[7.5px] font-bold text-white flex items-center gap-1 border border-white/10">
                          <Flame className="w-2.5 h-2.5 text-amber-400" />
                          <span>Trending #1</span>
                        </div>
                        <div className="absolute bottom-1.5 right-1.5 bg-[#0bdcfc] text-neutral-950 font-black px-1.5 py-0.5 rounded-md text-[8px]">
                          ₹0 Delivery
                        </div>
                      </div>
                      <div className="p-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10.5px] font-black text-white leading-tight">The Royal Dum Biryani</span>
                          <span className="text-[8px] font-black text-emerald-400 flex items-center gap-0.5 bg-emerald-950/60 px-1 py-0.5 rounded border border-emerald-800/40">
                            <Star className="w-2 h-2 fill-emerald-400 text-emerald-400" /> 4.9
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[7.5px] text-neutral-400 mt-0.5">
                          <span>Hyderabadi • Mughlai</span>
                          <span className="flex items-center gap-0.5 text-neutral-300 font-medium">
                            <Clock className="w-2 h-2 text-[#0bdcfc]" /> 20-25 mins
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* RouteEngine™ Live GPS Tracker Pill */}
                    <div className="bg-neutral-900/90 border border-neutral-800 rounded-xl p-2 flex items-center gap-2.5 shadow-sm">
                      <div className="w-6 h-6 rounded-lg bg-[#0bdcfc]/15 border border-[#0bdcfc]/30 flex items-center justify-center shrink-0">
                        <Bike className="w-3 h-3 text-[#0bdcfc]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between text-[8px]">
                          <span className="font-extrabold text-white truncate">RouteEngine™ Live GPS</span>
                          <span className="text-[#0bdcfc] font-black">12 mins</span>
                        </div>
                        <div className="text-[7px] text-neutral-400 truncate">Rider on electric bike dispatched</div>
                        <div className="w-full h-1 bg-neutral-800 rounded-full mt-1 overflow-hidden">
                          <div className="w-3/4 h-full bg-[#0bdcfc] rounded-full" />
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* 3. iOS Bottom Navigation Bar */}
                  <div className="border-t border-neutral-900 bg-neutral-950/95 backdrop-blur-md pt-2 pb-1 px-4 z-30 select-none">
                    <div className="flex items-center justify-around text-neutral-500">
                      <div className="flex flex-col items-center gap-0.5 text-[#0bdcfc]">
                        <Home className="w-3.5 h-3.5" />
                        <span className="text-[7px] font-black">Home</span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5 hover:text-white transition-colors">
                        <Compass className="w-3.5 h-3.5" />
                        <span className="text-[7px] font-medium">Explore</span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5 hover:text-white transition-colors relative">
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span className="text-[7px] font-medium">Orders</span>
                        <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#0bdcfc]" />
                      </div>
                      <div className="flex flex-col items-center gap-0.5 hover:text-white transition-colors">
                        <User className="w-3.5 h-3.5" />
                        <span className="text-[7px] font-medium">Profile</span>
                      </div>
                    </div>

                    {/* iOS Home Indicator Bar */}
                    <div className="w-24 h-1 bg-white/30 rounded-full mx-auto mt-2 mb-0.5" />
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
