"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Search,
  Clock,
  ShieldCheck,
  Bike,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Percent,
} from "lucide-react";
import { useApp } from "@/context/AppContext";

export const HeroSection: React.FC = () => {
  const { setSelectedAddress, showToast, setIsAddressModalOpen, setSearchQuery } = useApp();
  const [postcode, setPostcode] = useState("");
  const [isLocating, setIsLocating] = useState(false);

  const handlePostcodeSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postcode.trim()) {
      showToast("Please enter a postcode or street address");
      return;
    }
    setSelectedAddress({
      id: "search-" + Date.now(),
      label: "Custom Location",
      address: postcode.toUpperCase() + ", Central Delivery Zone",
      postcode: postcode.toUpperCase(),
      icon: "other",
    });
    showToast(`📍 Set delivery address to ${postcode.toUpperCase()}`);
  };

  const handleUseCurrentLocation = () => {
    setIsLocating(true);
    setTimeout(() => {
      setIsLocating(false);
      setSelectedAddress({
        id: "geo-" + Date.now(),
        label: "Current GPS Location",
        address: "Piccadilly Circus, London",
        postcode: "W1J 9HP",
        icon: "home",
      });
      showToast("📍 Located at Piccadilly Circus, London W1J 9HP");
    }, 600);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#0bdcfc]/5 to-slate-50/70 border-b border-slate-100 py-12 md:py-16 lg:py-20">
      {/* Background subtle geometric accents with theme cyan */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#0bdcfc]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 rounded-full bg-[#9efd21]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, Location Search, Trust Signals */}
          <div className="lg:col-span-7 space-y-6">
            {/* App Launch Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0bdcfc] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0bdcfc]" />
              </span>
              <span>Bocardo App Launching Soon</span>
              <span className="text-slate-400">•</span>
              <span className="text-[#0bdcfc] font-bold">Get 50% Off First 3 Orders</span>
            </div>

            {/* Main Headline (Deliveroo styled subtle impact) */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08]">
                Restaurants, grocery & bakeries.{" "}
                <span className="relative whitespace-nowrap">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-[#0891b2] to-[#00bcd4]">
                    Delivered.
                  </span>
                  <span className="absolute bottom-1.5 left-0 w-full h-3 bg-[#0bdcfc]/30 -z-10 rounded-sm" />
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
                From hot artisan sourdough pizzas and dry-aged smashed burgers to fresh morning viennoiseries.
                Brought directly to your doorstep in as little as 20 minutes.
              </p>
            </div>

            {/* Deliveroo-Style Postcode Search Box */}
            <div className="bg-white rounded-2xl p-2.5 sm:p-3 shadow-md border border-slate-200/80 max-w-xl">
              <form onSubmit={handlePostcodeSearch} className="flex flex-col sm:flex-row items-stretch gap-2">
                <div className="relative flex-1 flex items-center">
                  <div className="absolute left-3.5 text-slate-400 pointer-events-none">
                    <MapPin className="w-5 h-5 text-[#0891b2]" />
                  </div>
                  <input
                    type="text"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    placeholder="Enter your postcode (e.g. W1U 3BL or SW1)"
                    className="w-full pl-11 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 bg-transparent outline-none font-medium"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleUseCurrentLocation}
                    disabled={isLocating}
                    className="p-3 text-xs font-semibold text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center gap-1.5 whitespace-nowrap"
                    title="Use my current GPS location"
                  >
                    <Bike className={`w-4 h-4 ${isLocating ? "animate-spin text-[#0891b2]" : "text-slate-600"}`} />
                    <span className="hidden sm:inline">{isLocating ? "Locating..." : "Locate Me"}</span>
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-3 text-sm font-bold bg-[#0bdcfc] hover:bg-[#00caeb] active:scale-95 text-slate-950 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <span>Search Food</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>

            {/* Quick Suggestions / Popular Postcodes */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-500">
              <span className="font-semibold text-slate-400">Popular areas:</span>
              {["Soho W1", "Marylebone NW1", "Covent Garden WC2", "Chelsea SW3", "City EC2"].map((area) => (
                <button
                  key={area}
                  type="button"
                  onClick={() => {
                    setPostcode(area);
                    setSelectedAddress({
                      id: "area-" + area,
                      label: area,
                      address: area + ", London",
                      postcode: area,
                      icon: "other",
                    });
                    showToast(`Selected area: ${area}`);
                  }}
                  className="px-2.5 py-1 rounded-md bg-white border border-slate-200 hover:border-[#0bdcfc] hover:text-[#0891b2] font-medium transition-colors"
                >
                  {area}
                </button>
              ))}
            </div>

            {/* Subtle Deliveroo/Swiggy Feature Micro-Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/60 max-w-xl">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#0bdcfc]/15 text-[#0891b2] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">24 mins</div>
                  <div className="text-[11px] text-slate-500">Avg Delivery</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#9efd21]/20 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Percent className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Bocardo Pass</div>
                  <div className="text-[11px] text-slate-500">£0 Delivery Fee</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">5-Star Hygiene</div>
                  <div className="text-[11px] text-slate-500">Verified Kitchens</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Subtle Dish Showcase with Clean Transparent Food Assets */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Soft decorative halo matching Bocardo cyan and lime */}
            <div className="relative w-full max-w-[440px] aspect-square rounded-full bg-gradient-to-tr from-[#0bdcfc]/20 via-[#0bdcfc]/5 to-[#9efd21]/15 p-6 flex items-center justify-center">
              
              {/* Inner ring */}
              <div className="w-full h-full rounded-full border border-dashed border-[#0bdcfc]/30 flex items-center justify-center relative">
                
                {/* Main Hero Dish: Smashed Burger cutout */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 transition-transform duration-500 hover:scale-105 select-none drop-shadow-xl">
                  <Image
                    src="/food/burger.png"
                    alt="Bocardo Artisan Double Smashed Burger"
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Secondary Offset Dish: Napoli Pizza cutout */}
                <div className="absolute -bottom-4 -left-6 w-36 h-36 sm:w-44 sm:h-44 transition-transform duration-500 hover:scale-105 drop-shadow-lg">
                  <Image
                    src="/food/pizza.png"
                    alt="Napoli Sourdough Pizza"
                    fill
                    sizes="(max-width: 768px) 100vw, 200px"
                    className="object-contain"
                  />
                </div>

                {/* Subtle Order Status Card (Deliveroo / Swiggy subtle style) */}
                <div className="absolute top-2 right-0 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-slate-100 max-w-[210px] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0891b2] bg-[#0bdcfc]/15 px-2 py-0.5 rounded-full">
                      Live Order #BC-49
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <div className="text-xs font-bold text-slate-900">
                    On the way to Marylebone
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span>Est. arrival</span>
                    <strong className="text-slate-900 font-bold">14 mins</strong>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#0bdcfc] h-full rounded-full w-3/4" />
                  </div>
                </div>

                {/* Quality Seal Pill */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md rounded-xl px-3 py-2 shadow-md border border-slate-100 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#ffcc02] text-slate-950 font-black text-xs flex items-center justify-center">
                    ★
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-slate-900">4.9 / 5.0</div>
                    <div className="text-[10px] text-slate-400">12,000+ reviews</div>
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

export default HeroSection;
