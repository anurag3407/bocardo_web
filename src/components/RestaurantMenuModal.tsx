"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  X,
  Star,
  Clock,
  MapPin,
  ShieldCheck,
  Plus,
  Minus,
  Check,
  Flame,
  Percent,
} from "lucide-react";
import { useApp } from "@/context/AppContext";
import { FoodItem } from "@/data/mockData";

export const RestaurantMenuModal: React.FC = () => {
  const {
    activeRestaurant,
    setActiveRestaurant,
    cart,
    addToCart,
    updateQuantity,
    setIsCartOpen,
  } = useApp();

  const [activeTab, setActiveTab] = useState<number>(0);

  if (!activeRestaurant) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-xs">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col my-auto max-h-[92vh]">
        
        {/* Banner with Restaurant Header */}
        <div className="relative h-48 sm:h-56 w-full flex-shrink-0 bg-slate-900">
          <Image
            src={activeRestaurant.image}
            alt={activeRestaurant.name}
            fill
            sizes="800px"
            className="object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-black/30" />

          {/* Close button */}
          <button
            type="button"
            onClick={() => setActiveRestaurant(null)}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all z-10"
            aria-label="Close restaurant modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Info Details */}
          <div className="absolute bottom-4 left-5 right-5 text-white space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider bg-[#0bdcfc] text-slate-950 px-2.5 py-0.5 rounded-md">
                Open Now
              </span>
              {activeRestaurant.isBocardoPass && (
                <span className="text-xs font-bold bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded-md text-emerald-300">
                  ⚡ Bocardo Pass
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              {activeRestaurant.name}
            </h2>

            <p className="text-xs sm:text-sm text-slate-200 line-clamp-1">
              {activeRestaurant.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 pt-1">
              <span className="flex items-center gap-1 text-[#ffcc02] font-black">
                <Star className="w-3.5 h-3.5 fill-[#ffcc02]" />
                {activeRestaurant.rating} ({activeRestaurant.reviewCount})
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#0bdcfc]" />
                {activeRestaurant.deliveryTime}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {activeRestaurant.address}
              </span>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 px-5 py-3 border-b border-slate-200 bg-slate-50/80 overflow-x-auto no-scrollbar flex-shrink-0">
          {activeRestaurant.menu.map((cat, idx) => (
            <button
              key={cat.categoryName}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === idx
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-white text-slate-600 hover:text-slate-950 border border-slate-200"
              }`}
            >
              {cat.categoryName} ({cat.items.length})
            </button>
          ))}
        </div>

        {/* Menu Items List */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1">
          {activeRestaurant.menu[activeTab]?.items.map((item: FoodItem) => {
            const cartEntry = cart.find((c) => c.food.id === item.id);
            const qty = cartEntry ? cartEntry.quantity : 0;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-4 border border-slate-200 hover:border-[#0bdcfc]/60 card-subtle flex gap-4 items-center justify-between"
              >
                <div className="flex-1 space-y-1 pr-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-3.5 h-3.5 rounded-xs border flex items-center justify-center ${
                        item.isVeg
                          ? "border-emerald-600 bg-white"
                          : "border-red-600 bg-white"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          item.isVeg ? "bg-emerald-600" : "bg-red-600"
                        }`}
                      />
                    </span>

                    {item.isBestseller && (
                      <span className="text-[10px] font-black uppercase text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded-md">
                        Bestseller
                      </span>
                    )}

                    {item.isSpicy && (
                      <span className="text-[10px] font-bold text-red-600 flex items-center gap-0.5">
                        <Flame className="w-3 h-3" />
                        Spicy
                      </span>
                    )}
                  </div>

                  <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">
                    {item.name}
                  </h4>

                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex items-baseline gap-2 pt-1">
                    <span className="text-sm font-black text-slate-950">
                      £{item.price.toFixed(2)}
                    </span>
                    {item.originalPrice && (
                      <span className="text-xs text-slate-400 line-through">
                        £{item.originalPrice.toFixed(2)}
                      </span>
                    )}
                    {item.calories && (
                      <span className="text-[11px] text-slate-400">
                        • {item.calories}
                      </span>
                    )}
                  </div>
                </div>

                {/* Right: Dish Cutout & Stepper */}
                <div className="relative flex flex-col items-center flex-shrink-0">
                  <div className="relative w-24 h-24 rounded-xl bg-slate-50 p-2 border border-slate-100 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="96px"
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="absolute -bottom-2.5">
                    {qty === 0 ? (
                      <button
                        type="button"
                        onClick={() => addToCart(item)}
                        className="px-3.5 py-1 rounded-full bg-white hover:bg-[#0bdcfc] text-slate-950 font-extrabold text-xs shadow-md border border-slate-200 hover:border-[#0bdcfc] transition-all flex items-center gap-1 active:scale-95"
                      >
                        <Plus className="w-3 h-3 text-[#0891b2]" />
                        <span>ADD</span>
                      </button>
                    ) : (
                      <div className="flex items-center bg-[#0bdcfc] text-slate-950 rounded-full shadow-md font-bold text-xs border border-[#0bdcfc] overflow-hidden">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, qty - 1)}
                          className="px-2 py-1 hover:bg-black/10 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 font-black text-xs">{qty}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, qty + 1)}
                          className="px-2 py-1 hover:bg-black/10 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Modal Bottom Basket Preview */}
        {cart.length > 0 && (
          <div className="p-4 bg-slate-900 border-t border-slate-800 text-white flex items-center justify-between flex-shrink-0">
            <div>
              <div className="text-xs text-slate-400">Basket subtotal</div>
              <div className="text-base font-black">
                {cart.reduce((a, b) => a + b.quantity, 0)} items • £
                {cart
                  .reduce((a, b) => a + b.food.price * b.quantity, 0)
                  .toFixed(2)}
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setActiveRestaurant(null);
                setIsCartOpen(true);
              }}
              className="px-5 py-2.5 rounded-xl bg-[#0bdcfc] hover:bg-[#00caeb] text-slate-950 font-extrabold text-xs shadow-lg transition-all"
            >
              View Basket & Checkout →
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default RestaurantMenuModal;
