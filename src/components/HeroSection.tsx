"use client";

import React from "react";
import Image from "next/image";
import {
  MapPin,
  Search,
  ArrowRight,
  ChevronDown,
  ShoppingBag,
  Smartphone,
  User,
} from "lucide-react";
import { useApp } from "@/context/AppContext";

export const HeroSection: React.FC = () => {
  const {
    selectedAddress,
    setIsAddressModalOpen,
    searchQuery,
    setSearchQuery,
    setSelectedCategory,
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
    <section className="relative overflow-hidden bg-[#00C2E8] text-white pt-5 pb-20 lg:pt-6 lg:pb-28 select-none">
      
      {/* Subtle depth ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(255,255,255,0.10),transparent_70%)] pointer-events-none" />

      {/* Top Navigation Row matching exact reference mockup */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 mb-10 sm:mb-12">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Bocardo Brand Logo & Wordmark with Yellow Dot */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center p-1 overflow-hidden transition-transform group-hover:scale-105">
                <Image
                  src="/logo-circle.png"
                  alt="Bocardo Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-2xl text-white tracking-tight drop-shadow-xs">
                  bocardo
                </span>
                <span className="w-2 h-2 rounded-full bg-[#facc15] shadow-xs" />
              </div>
            </a>
          </div>

          {/* Center: Navigation Links from Mockup (Home, Restaurants, Deals, Track Order) */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#"
              className="relative text-sm font-bold text-white transition-opacity"
            >
              <span>Home</span>
              <span className="absolute -bottom-1.5 left-0 w-full h-[2.5px] bg-[#facc15] rounded-full" />
            </a>
            <button
              type="button"
              onClick={scrollToRestaurants}
              className="text-sm font-semibold text-white/90 hover:text-white transition-colors cursor-pointer"
            >
              Restaurants
            </button>
            <button
              type="button"
              onClick={scrollToRestaurants}
              className="text-sm font-semibold text-white/90 hover:text-white transition-colors cursor-pointer"
            >
              Deals
            </button>
            <button
              type="button"
              onClick={scrollToApp}
              className="text-sm font-semibold text-white/90 hover:text-white transition-colors cursor-pointer"
            >
              Track Order
            </button>
          </nav>

          {/* Right: Location pill, Get the App button, Profile / Basket */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Location Pill */}
            <button
              type="button"
              onClick={handleLocationClick}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/40 bg-white/10 hover:bg-white/20 backdrop-blur-xs text-white text-xs font-semibold transition-all cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-white/90" />
              <span className="max-w-[150px] truncate">
                {selectedAddress.address || "Flat 402, 12th Main Road, Indiranagar"}
              </span>
              <ChevronDown className="w-3 h-3 text-white/80" />
            </button>

            {/* "Get the App 📱" solid dark pill button */}
            <button
              type="button"
              onClick={scrollToApp}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-950 text-white font-black text-xs hover:bg-slate-900 transition-all active:scale-95 shadow-md cursor-pointer"
            >
              <span className="hidden xs:inline">Get the App</span>
              <span className="xs:hidden">App</span>
              <Smartphone className="w-3.5 h-3.5" />
            </button>

            {/* Profile / User Avatar Button */}
            <button
              type="button"
              onClick={() => {
                setAuthMode("login");
                setIsAuthModalOpen(true);
              }}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-slate-900 shadow-md flex items-center justify-center hover:bg-slate-50 transition-transform active:scale-95 cursor-pointer"
              aria-label="User profile"
            >
              {user ? (
                <div className="w-6 h-6 rounded-full bg-[#00C2E8] text-white flex items-center justify-center font-bold text-xs">
                  {user.name.charAt(0)}
                </div>
              ) : (
                <User className="w-4 h-4 text-slate-800" />
              )}
            </button>

            {/* Cart Basket button */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-full bg-white text-slate-950 shadow-md hover:bg-slate-50 transition-transform active:scale-95 cursor-pointer"
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

      {/* Flanking Left Visual: Salad bowl with grilled chicken (exact from reference) */}
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 xl:-translate-x-6 w-56 lg:w-68 xl:w-80 pointer-events-none select-none z-10 transition-transform duration-500">
        <Image
          src="/hero/salad_bowl_flank.png"
          alt="Fresh Mediterranean grilled chicken salad bowl"
          width={360}
          height={480}
          className="object-contain drop-shadow-[0_24px_45px_rgba(0,0,0,0.28)]"
          priority
        />
      </div>

      {/* Flanking Right Visual: Wood-fired Pizza on rustic wooden board (exact from reference) */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 xl:translate-x-6 w-56 lg:w-68 xl:w-80 pointer-events-none select-none z-10 transition-transform duration-500">
        <Image
          src="/hero/pizza_board_flank.png"
          alt="Fresh artisan pizza on rustic wooden board"
          width={360}
          height={480}
          className="object-contain drop-shadow-[0_24px_45px_rgba(0,0,0,0.28)]"
          priority
        />
      </div>

      {/* Main Center Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-20 text-center">
        
        {/* Main Reference Headline with Playful Yellow Brush Underline */}
        <h1 className="text-3xl sm:text-5xl lg:text-[58px] font-black text-white tracking-tight leading-[1.12] sm:leading-[1.08] max-w-3xl mx-auto drop-shadow-xs mb-3">
          Order food.
          <br />
          Discover best
          <br />
          restaurants.{" "}
          <span className="relative inline-block">
            Bocardo it!
            {/* Playful Yellow Brush Underline SVG */}
            <svg
              className="absolute -bottom-2 left-0 w-full overflow-visible"
              height="14"
              viewBox="0 0 240 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 10C55 3 175 2 237 9"
                stroke="#facc15"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* Subtitle matching reference */}
        <p className="text-xs sm:text-sm text-white/95 font-medium mb-6 sm:mb-7 tracking-wide">
          Fresh food &bull; Great taste &bull; Fast 20-30 min delivery across India
        </p>

        {/* Mobile-Only Address Selector Pill */}
        <div className="flex sm:hidden justify-center mb-3">
          <button
            type="button"
            onClick={handleLocationClick}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-xs text-white text-xs font-semibold shadow-xs transition-all active:scale-95 max-w-[90vw]"
          >
            <MapPin className="w-3.5 h-3.5 text-white/90 flex-shrink-0" />
            <span className="text-[10px] uppercase font-extrabold text-white/75 flex-shrink-0">Deliver to:</span>
            <span className="truncate max-w-[150px] font-bold text-white">
              {selectedAddress.address || "Indiranagar, BLR"}
            </span>
            <ChevronDown className="w-3 h-3 text-white/80 flex-shrink-0" />
          </button>
        </div>

        {/* Search Bar Pill */}
        <div className="max-w-2xl mx-auto bg-white rounded-full p-1.5 sm:p-2 shadow-2xl border border-white/60 mb-8 sm:mb-12">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center text-slate-800"
          >
            {/* Left Segment: Delivery Location (Visible on sm and up) */}
            <button
              type="button"
              onClick={handleLocationClick}
              className="hidden sm:flex items-center gap-2 pl-3 sm:pl-4 pr-3 py-1.5 text-left hover:bg-slate-50 rounded-full transition-colors flex-shrink-0 cursor-pointer"
            >
              <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0">
                <MapPin className="w-3.5 h-3.5 text-slate-700" />
              </div>
              <div>
                <div className="text-[9px] uppercase font-extrabold text-slate-400 tracking-wider leading-none mb-0.5">
                  Deliver to
                </div>
                <div className="text-xs font-bold text-slate-900 flex items-center gap-1 max-w-[130px] sm:max-w-[160px] truncate leading-none">
                  <span className="truncate">{selectedAddress.address || "Indiranagar, BLR..."}</span>
                  <ChevronDown className="w-3 h-3 text-slate-400 flex-shrink-0" />
                </div>
              </div>
            </button>

            {/* Subtle Divider (sm and up) */}
            <div className="hidden sm:block w-px h-7 bg-slate-200 mx-1 flex-shrink-0" />

            {/* Right Segment: Search Input & Arrow Action */}
            <div className="flex-1 flex items-center pl-3 sm:pl-3 pr-1">
              <Search className="w-4 h-4 text-slate-400 flex-shrink-0 mr-2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search restaurant, dish or cuisine..."
                className="w-full text-xs sm:text-sm text-slate-900 placeholder-slate-400 outline-none font-medium bg-transparent"
              />
              <button
                type="submit"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#00C2E8] hover:bg-[#00add1] text-white flex items-center justify-center transition-transform active:scale-95 flex-shrink-0 shadow-sm ml-2 cursor-pointer"
                aria-label="Search"
              >
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </form>
        </div>

        {/* 3 Food Feature Cards (Food Delivery, Gourmet & Cafes, Bocardo Pass) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6 max-w-4xl mx-auto text-left">
          
          {/* Card 1: Food Delivery */}
          <div
            onClick={scrollToRestaurants}
            className="group relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 active:scale-[0.99] cursor-pointer overflow-hidden flex flex-col justify-between min-h-[145px] sm:min-h-[175px] border border-white/60"
          >
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-none mb-1">
                Food Delivery
              </h3>
              <p className="text-xs font-semibold text-slate-400 mb-2">
                From top restaurants
              </p>
              <div className="inline-block bg-[#00C2E8]/10 text-[#009bbd] text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full tracking-wide">
                UPTO 50% OFF
              </div>
            </div>

            <div className="flex items-end justify-between mt-2 sm:mt-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#00C2E8] group-hover:bg-[#00add1] text-white flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 -mr-2 -mb-2 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/hero/mockup_burger.png"
                  alt="Order Food Online - Burgers, Pizzas and Quick Bites on Bocardo"
                  fill
                  sizes="120px"
                  className="object-contain drop-shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Card 2: Gourmet & Cafes */}
          <div
            onClick={() => {
              setSelectedCategory("dessert");
              scrollToRestaurants();
            }}
            className="group relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 active:scale-[0.99] cursor-pointer overflow-hidden flex flex-col justify-between min-h-[145px] sm:min-h-[175px] border border-white/60"
          >
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-none mb-1">
                Gourmet & Cafes
              </h3>
              <p className="text-xs font-semibold text-slate-400 mb-2">
                Bakeries & desserts
              </p>
              <div className="inline-block bg-[#00C2E8]/10 text-[#009bbd] text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full tracking-wide">
                FRESH & HOT
              </div>
            </div>

            <div className="flex items-end justify-between mt-2 sm:mt-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#00C2E8] group-hover:bg-[#00add1] text-white flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 -mr-2 -mb-2 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/hero/mockup_coffee.png"
                  alt="Artisanal Bakery, Fresh Bread and Specialty Coffee Delivered"
                  fill
                  sizes="120px"
                  className="object-contain drop-shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Card 3: Bocardo Pass */}
          <div
            onClick={scrollToApp}
            className="group relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 active:scale-[0.99] cursor-pointer overflow-hidden flex flex-col justify-between min-h-[145px] sm:min-h-[175px] border border-white/60"
          >
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-none mb-1">
                Bocardo Pass
              </h3>
              <p className="text-xs font-semibold text-slate-400 mb-2">
                Unlimited ₹0 delivery
              </p>
              <div className="inline-block bg-[#00C2E8]/10 text-[#009bbd] text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full tracking-wide">
                VIP LAUNCH PERK
              </div>
            </div>

            <div className="flex items-end justify-between mt-2 sm:mt-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#00C2E8] group-hover:bg-[#00add1] text-white flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 -mr-2 -mb-2 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/hero/mockup_pasta.png"
                  alt="Bocardo Pass Free ₹0 Delivery Subscription Program"
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
