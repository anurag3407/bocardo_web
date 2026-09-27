"use client";

import React, { useState } from "react";
import {
  MapPin,
  Search,
  ShoppingBag,
  User,
  ChevronDown,
  Compass,
  Menu,
  X,
  Bike,
  Sparkles,
} from "lucide-react";
import { useApp } from "@/context/AppContext";
import BocardoLogo from "./BocardoLogo";

export const Navbar: React.FC = () => {
  const {
    cartCount,
    subtotal,
    setIsCartOpen,
    deliveryType,
    setDeliveryType,
    selectedAddress,
    setIsAddressModalOpen,
    setIsAuthModalOpen,
    setAuthMode,
    user,
    setIsTrackingModalOpen,
    searchQuery,
    setSearchQuery,
    setIsPartnerModalOpen,
    setPartnerModalType,
  } = useApp();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      {/* Top subtle announcement bar */}
      <div className="bg-[#0bdcfc] text-slate-900 text-xs font-semibold py-1.5 px-4 text-center flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-slate-900" />
        <span>
          Bocardo iOS & Android Apps Launching Soon! Pre-register now for 50% OFF your first 3 orders with code{" "}
          <strong className="underline underline-offset-2 tracking-wide font-black">BOCARDO50</strong>
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo & Delivery Mode */}
          <div className="flex items-center gap-6">
            <a href="#" className="flex-shrink-0">
              <BocardoLogo size={42} showText={true} />
            </a>

            {/* Delivery / Collection Toggle (Deliveroo / Swiggy style) */}
            <div className="hidden md:flex items-center bg-slate-100/90 p-1 rounded-full text-xs font-semibold">
              <button
                type="button"
                onClick={() => setDeliveryType("delivery")}
                className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                  deliveryType === "delivery"
                    ? "bg-[#0bdcfc] text-slate-900 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Bike className="w-3.5 h-3.5" />
                Delivery
              </button>
              <button
                type="button"
                onClick={() => setDeliveryType("collection")}
                className={`px-3.5 py-1.5 rounded-full transition-all ${
                  deliveryType === "collection"
                    ? "bg-[#0bdcfc] text-slate-900 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Collection
              </button>
            </div>

            {/* Address Selector */}
            <button
              type="button"
              onClick={() => setIsAddressModalOpen(true)}
              className="hidden lg:flex items-center gap-2 text-left px-3 py-1.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all max-w-[240px]"
            >
              <div className="w-8 h-8 rounded-lg bg-[#0bdcfc]/15 text-[#0891b2] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <div className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">
                  Deliver to
                </div>
                <div className="text-xs font-semibold text-slate-800 truncate flex items-center gap-1">
                  {selectedAddress.address}
                  <ChevronDown className="w-3 h-3 text-slate-400 flex-shrink-0" />
                </div>
              </div>
            </button>
          </div>

          {/* Search bar */}
          <div className="hidden sm:flex flex-1 max-w-md mx-2">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Dishes, restaurants, groceries..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 hover:bg-slate-100/70 focus:bg-white text-sm text-slate-900 placeholder-slate-400 rounded-full border border-slate-200 focus:border-[#0bdcfc] focus:ring-2 focus:ring-[#0bdcfc]/20 outline-none transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 text-xs font-bold"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Right Action buttons */}
          <div className="flex items-center gap-3">
            {/* Live Order Simulation Button */}
            <button
              type="button"
              onClick={() => setIsTrackingModalOpen(true)}
              className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-[#0bdcfc]/15 hover:text-[#0891b2] border border-slate-200 hover:border-[#0bdcfc]/40 transition-all"
            >
              <Compass className="w-3.5 h-3.5 text-[#0891b2]" />
              <span>Track Live Order</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </button>

            {/* Auth / Account */}
            {user ? (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-xs font-semibold text-slate-800">
                <div className="w-6 h-6 rounded-full bg-[#0bdcfc] text-slate-900 flex items-center justify-center font-bold text-xs">
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
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-slate-800 hover:bg-slate-100 transition-all"
              >
                <User className="w-4 h-4 text-slate-600" />
                <span className="hidden sm:inline">Sign In</span>
              </button>
            )}

            {/* Cart Button with Deliveroo / Swiggy Pill Badge */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-bold bg-[#0bdcfc] hover:bg-[#00caeb] text-slate-950 shadow-xs hover:shadow-md transition-all active:scale-95"
            >
              <ShoppingBag className="w-4 h-4 text-slate-950" />
              <span>Basket</span>
              {cartCount > 0 && (
                <div className="flex items-center gap-1.5 pl-1.5 border-l border-slate-950/20">
                  <span className="px-1.5 py-0.2 bg-slate-950 text-white rounded-full text-[11px] font-black min-w-4 text-center">
                    {cartCount}
                  </span>
                  <span className="hidden sm:inline text-xs font-black">
                    £{subtotal.toFixed(2)}
                  </span>
                </div>
              )}
            </button>

            {/* Mobile menu hamburger */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search input bar */}
        <div className="sm:hidden pb-3">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes or restaurants..."
              className="w-full pl-10 pr-4 py-2 bg-slate-100 text-sm text-slate-900 rounded-full border-none outline-none"
            />
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 py-3 space-y-2 bg-white">
            <div className="flex items-center justify-between px-2 pb-2">
              <button
                type="button"
                onClick={() => {
                  setIsAddressModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 text-xs font-semibold text-slate-700"
              >
                <MapPin className="w-4 h-4 text-[#0891b2]" />
                <span className="truncate max-w-[200px]">{selectedAddress.address}</span>
              </button>
              <div className="flex bg-slate-100 rounded-full p-0.5 text-[11px]">
                <button
                  type="button"
                  onClick={() => setDeliveryType("delivery")}
                  className={`px-2.5 py-1 rounded-full ${
                    deliveryType === "delivery" ? "bg-[#0bdcfc] text-slate-900 font-bold" : "text-slate-600"
                  }`}
                >
                  Delivery
                </button>
                <button
                  type="button"
                  onClick={() => setDeliveryType("collection")}
                  className={`px-2.5 py-1 rounded-full ${
                    deliveryType === "collection" ? "bg-[#0bdcfc] text-slate-900 font-bold" : "text-slate-600"
                  }`}
                >
                  Collection
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsTrackingModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
            >
              <span className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#0891b2]" />
                Track Live Order Demo
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </button>

            <button
              type="button"
              onClick={() => {
                setPartnerModalType("restaurant");
                setIsPartnerModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Partner with Bocardo (Restaurants)
            </button>
            <button
              type="button"
              onClick={() => {
                setPartnerModalType("rider");
                setIsPartnerModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Ride with Bocardo
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
