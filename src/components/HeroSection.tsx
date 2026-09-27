"use client";

import React from "react";
import Image from "next/image";
import {
  MapPin,
  Search,
  ArrowRight,
  ChevronDown,
  ShoppingBag,
  ArrowUpRight,
} from "lucide-react";
import { useApp } from "@/context/AppContext";

export const HeroSection: React.FC = () => {
  const {
    selectedAddress,
    setIsAddressModalOpen,
    searchQuery,
    setSearchQuery,
    setSelectedCategory,
    setIsPartnerModalOpen,
    setPartnerModalType,
    setIsAuthModalOpen,
    setAuthMode,
    user,
    cartCount,
    setIsCartOpen,
  } = useApp();

  const handleLocationClick = () => {
    setIsAddressModalOpen(true);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const el = document.getElementById("restaurants-section");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToRestaurants = () => {
    const el = document.getElementById("restaurants-section");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToApp = () => {
    const el = document.getElementById("app-launch-section");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-[#00C2E8] text-white pt-6 pb-20 lg:pt-8 lg:pb-28 select-none">
      
      {/* Subtle depth ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(255,255,255,0.10),transparent_70%)] pointer-events-none" />

      {/* Top Navigation Row (Integrated directly inside Hero like Swiggy) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 mb-12 sm:mb-16">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Bocardo Brand Logo & Wordmark in White */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md flex items-center justify-center p-1 overflow-hidden transition-transform group-hover:scale-105">
                <Image
                  src="/logo-circle.png"
                  alt="Bocardo Logo"
                  width={44}
                  height={44}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-2xl sm:text-3xl text-white tracking-tight drop-shadow-xs">
                  bocardo
                </span>
                <span className="w-2 h-2 rounded-full bg-[#9efd21] shadow-xs" />
              </div>
            </a>
          </div>

          {/* Right: Actions matching Swiggy */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              type="button"
              onClick={() => {
                setPartnerModalType("corporate");
                setIsPartnerModalOpen(true);
              }}
              className="hidden md:inline-block text-xs lg:text-sm font-bold text-white/95 hover:text-white transition-colors"
            >
              Bocardo Corporate
            </button>

            <button
              type="button"
              onClick={() => {
                setPartnerModalType("restaurant");
                setIsPartnerModalOpen(true);
              }}
              className="hidden sm:inline-block text-xs lg:text-sm font-bold text-white/95 hover:text-white transition-colors"
            >
              Partner with us
            </button>

            {/* "Get the App ↗" outlined rounded pill button */}
            <button
              type="button"
              onClick={scrollToApp}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full border-2 border-white/90 text-white font-extrabold text-xs lg:text-sm hover:bg-white/15 transition-all active:scale-95 shadow-xs"
            >
              <span>Get the App</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* "Sign in" solid dark pill button */}
            {user ? (
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-950 text-white text-xs font-bold shadow-md">
                <div className="w-5 h-5 rounded-full bg-[#0bdcfc] text-slate-950 flex items-center justify-center font-black text-[11px]">
                  {user.name.charAt(0)}
                </div>
                <span className="hidden sm:inline">{user.name}</span>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setAuthMode("login");
                  setIsAuthModalOpen(true);
                }}
                className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-slate-950 hover:bg-slate-900 text-white font-black text-xs sm:text-sm shadow-md transition-all active:scale-95"
              >
                Sign in
              </button>
            )}

            {/* Basket icon button */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full bg-white text-slate-950 shadow-md hover:bg-slate-50 transition-transform active:scale-95"
              aria-label="View basket"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-slate-950 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Flanking Top-Left Visual: Wood-fired Artisan Pizza on edge (Moved to top) */}
      <div className="hidden lg:block absolute left-0 top-24 lg:top-28 xl:top-32 -translate-x-16 xl:-translate-x-12 w-64 lg:w-76 xl:w-84 pointer-events-none select-none z-10 transition-transform duration-500">
        <Image
          src="/hero/pizza_slice_flank.png"
          alt="Fresh artisan wood-fired pizza"
          width={360}
          height={380}
          className="object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.28)]"
          priority
        />
      </div>

      {/* Flanking Bottom-Left Visual: Gourmet Smash Burger */}
      <div className="hidden lg:block absolute left-0 bottom-4 lg:bottom-8 xl:bottom-10 -translate-x-8 xl:-translate-x-6 w-40 lg:w-48 xl:w-56 pointer-events-none select-none z-10 transition-transform duration-500">
        <Image
          src="/hero/burger_flank.png"
          alt="Gourmet double smash cheeseburger"
          width={320}
          height={300}
          className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)]"
          priority
        />
      </div>

      {/* Flanking Top-Right Visual: Authentic Indian Royal Feast (Biryani handi, naan, butter chicken, raita) */}
      <div className="hidden lg:block absolute -right-4 lg:right-0 top-22 lg:top-26 xl:top-28 translate-x-8 lg:translate-x-12 xl:translate-x-16 w-80 lg:w-[420px] xl:w-[480px] pointer-events-none select-none z-10 transition-transform duration-500">
        <Image
          src="/hero/indian_feast_flank.png"
          alt="Authentic Royal Indian Feast with Hyderabadi Dum Biryani and Garlic Naan"
          width={540}
          height={420}
          className="object-contain drop-shadow-[0_28px_45px_rgba(0,0,0,0.30)]"
          priority
        />
      </div>

      {/* Flanking Bottom-Right Visual: Steaming Asian Ramen Bowl with Chopsticks */}
      <div className="hidden lg:block absolute right-0 bottom-4 lg:bottom-8 xl:bottom-10 translate-x-6 xl:translate-x-8 w-40 lg:w-48 xl:w-56 pointer-events-none select-none z-10 transition-transform duration-500">
        <Image
          src="/hero/ramen_bowl_flank.png"
          alt="Artisanal ramen noodle bowl with prawns and soft-boiled eggs"
          width={300}
          height={300}
          className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)]"
          priority
        />
      </div>

      {/* Main Center Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-20 text-center">
        
        {/* Creative "Coming Soon" Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-black tracking-wider uppercase mb-6 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#9efd21] shadow-xs" />
          <span>COMING SOON • PRE-REGISTER FOR 50% OFF FIRST 3 DELIVERIES</span>
        </div>

        {/* Main Swiggy-Style Creative Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] max-w-4xl mx-auto drop-shadow-sm mb-10">
          Order food. Discover best restaurants.{" "}
          <span className="text-slate-950 bg-white/95 px-3.5 py-0.5 rounded-2xl inline-block shadow-sm">
            Bocardo it!
          </span>
        </h1>

        {/* Dual-Segment Search Bar Pill (Exact Swiggy reference) */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl sm:rounded-full p-2 sm:p-2.5 shadow-2xl border border-white/60 mb-14 sm:mb-16">
          <form
            onSubmit={handleSearchSubmit}
            className="flex flex-col sm:flex-row items-stretch sm:items-center text-slate-800"
          >
            {/* Left Segment: Delivery Location dropdown trigger */}
            <button
              type="button"
              onClick={handleLocationClick}
              className="flex items-center gap-2.5 px-4 py-2.5 text-left hover:bg-slate-50 rounded-xl sm:rounded-l-full sm:rounded-r-none transition-colors sm:max-w-[280px] w-full"
            >
              <div className="w-7 h-7 rounded-lg bg-[#0bdcfc]/15 text-[#0891b2] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  Deliver to
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 truncate flex items-center gap-1">
                  <span>{selectedAddress.address || "Enter delivery location"}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                </div>
              </div>
            </button>

            {/* Subtle Divider */}
            <div className="hidden sm:block w-px h-8 bg-slate-200 mx-2 flex-shrink-0" />

            {/* Right Segment: Search for restaurant, dish or cuisine */}
            <div className="flex-1 flex items-center px-4 py-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for restaurant, dish or cuisine..."
                className="w-full text-xs sm:text-sm text-slate-900 placeholder-slate-400 outline-none font-medium bg-transparent"
              />
              <button
                type="submit"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#0bdcfc] text-slate-700 hover:text-slate-950 flex items-center justify-center transition-colors flex-shrink-0 ml-2"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

        {/* 3 Handmade Minimalistic Cards (Pure Food Delivery: Restaurants, Gourmet & Bakeries, Bocardo Pass) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
          
          {/* Card 1: FOOD DELIVERY */}
          <div
            onClick={scrollToRestaurants}
            className="group relative bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer overflow-hidden flex flex-col justify-between min-h-[220px] border border-white/60"
          >
            <div>
              <h3 className="text-xl font-black text-slate-950 tracking-tight leading-none mb-1">
                FOOD DELIVERY
              </h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                FROM RESTAURANTS
              </p>
              <div className="inline-block bg-[#ff9800]/10 border border-[#ff9800]/20 text-[#e65100] text-[11px] font-black uppercase px-2.5 py-1 rounded-md">
                UPTO 50% OFF
              </div>
            </div>

            {/* Bottom Row: Arrow button and Cutout Dish */}
            <div className="flex items-end justify-between mt-4">
              <div className="w-10 h-10 rounded-full bg-[#0bdcfc] group-hover:bg-[#00caeb] text-slate-950 flex items-center justify-center shadow-md transition-transform group-hover:scale-110">
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </div>

              {/* Cutout Food Dish: Double Smash Burger */}
              <div className="relative w-28 h-28 -mr-2 -mb-2 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/food/burger.png"
                  alt="Food Delivery"
                  fill
                  sizes="120px"
                  className="object-contain drop-shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Card 2: GOURMET & CAFES */}
          <div
            onClick={() => {
              setSelectedCategory("dessert");
              scrollToRestaurants();
            }}
            className="group relative bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer overflow-hidden flex flex-col justify-between min-h-[220px] border border-white/60"
          >
            <div>
              <h3 className="text-xl font-black text-slate-950 tracking-tight leading-none mb-1">
                GOURMET & CAFES
              </h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                BAKERIES & DESSERTS
              </p>
              <div className="inline-block bg-[#ff9800]/10 border border-[#ff9800]/20 text-[#e65100] text-[11px] font-black uppercase px-2.5 py-1 rounded-md">
                FRESH & HOT
              </div>
            </div>

            {/* Bottom Row: Arrow button and Cutout Bakery / Dessert */}
            <div className="flex items-end justify-between mt-4">
              <div className="w-10 h-10 rounded-full bg-[#0bdcfc] group-hover:bg-[#00caeb] text-slate-950 flex items-center justify-center shadow-md transition-transform group-hover:scale-110">
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </div>

              {/* Cutout Dessert / Lava Tart */}
              <div className="relative w-28 h-28 -mr-2 -mb-2 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/food/dessert.png"
                  alt="Gourmet & Cafes"
                  fill
                  sizes="120px"
                  className="object-contain drop-shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Card 3: BOCARDO PASS */}
          <div
            onClick={scrollToApp}
            className="group relative bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer overflow-hidden flex flex-col justify-between min-h-[220px] border border-white/60"
          >
            <div>
              <h3 className="text-xl font-black text-slate-950 tracking-tight leading-none mb-1">
                BOCARDO PASS
              </h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                UNLIMITED £0 DELIVERY
              </p>
              <div className="inline-block bg-[#ff9800]/10 border border-[#ff9800]/20 text-[#e65100] text-[11px] font-black uppercase px-2.5 py-1 rounded-md">
                VIP LAUNCH PERK
              </div>
            </div>

            {/* Bottom Row: Arrow button and Cutout Biryani / Bowl */}
            <div className="flex items-end justify-between mt-4">
              <div className="w-10 h-10 rounded-full bg-[#0bdcfc] group-hover:bg-[#00caeb] text-slate-950 flex items-center justify-center shadow-md transition-transform group-hover:scale-110">
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </div>

              {/* Cutout Food Bowl */}
              <div className="relative w-28 h-28 -mr-2 -mb-2 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/food/biryani.png"
                  alt="Bocardo Pass"
                  fill
                  sizes="120px"
                  className="object-contain drop-shadow-md"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;
