"use client";

import React from "react";
import Image from "next/image";
import { Plus, Minus, Check, Flame, Sparkles } from "lucide-react";
import { POPULAR_DISHES, FoodItem } from "@/data/mockData";
import { useApp } from "@/context/AppContext";

export const PopularDishes: React.FC = () => {
  const { cart, addToCart, updateQuantity } = useApp();

  return (
    <section className="py-14 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase font-extrabold tracking-wider text-[#0891b2] mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#0bdcfc]" />
              <span>Chef Curated Specials</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
              Most ordered dishes this week
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
              Handpicked customer favourites with guaranteed under 30-minute delivery
            </p>
          </div>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {POPULAR_DISHES.map((dish) => {
            const cartEntry = cart.find((item) => item.food.id === dish.id);
            const qty = cartEntry ? cartEntry.quantity : 0;

            return (
              <div
                key={dish.id}
                className="bg-slate-50/70 hover:bg-white rounded-2xl p-4 border border-slate-200/80 hover:border-[#0bdcfc]/60 card-subtle transition-all flex flex-col justify-between group"
              >
                <div className="flex gap-4 items-start">
                  
                  {/* Left Column: Info */}
                  <div className="flex-1 space-y-1.5">
                    {/* Dietary & Bestseller tag */}
                    <div className="flex items-center gap-2">
                      {/* Veg / Non-veg SVG indicator */}
                      <span
                        className={`w-3.5 h-3.5 rounded-xs border flex items-center justify-center ${
                          dish.isVeg
                            ? "border-emerald-600 bg-white"
                            : "border-red-600 bg-white"
                        }`}
                        title={dish.isVeg ? "Vegetarian" : "Non-Vegetarian"}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            dish.isVeg ? "bg-emerald-600" : "bg-red-600"
                          }`}
                        />
                      </span>

                      {dish.isBestseller && (
                        <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded-md">
                          Bestseller
                        </span>
                      )}

                      {dish.isSpicy && (
                        <span className="flex items-center gap-0.5 text-[10px] font-bold text-red-600 bg-red-50 px-1.5 py-0.5 rounded-md">
                          <Flame className="w-2.5 h-2.5" />
                          Spicy
                        </span>
                      )}
                    </div>

                    {/* Dish Name */}
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-[#0891b2] transition-colors">
                      {dish.name}
                    </h3>

                    {/* Restaurant Origin */}
                    <div className="text-[11px] font-semibold text-slate-400">
                      by {dish.restaurantName}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  {/* Right Column: Transparent Cutout Dish Image & Quantity Stepper */}
                  <div className="relative flex flex-col items-center flex-shrink-0">
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-2xl p-2 border border-slate-100 shadow-xs flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                        <Image
                          src={dish.image}
                          alt={dish.name}
                          fill
                          sizes="130px"
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Deliveroo / Swiggy Style Stepper Button overlapping image bottom */}
                    <div className="absolute -bottom-3">
                      {qty === 0 ? (
                        <button
                          type="button"
                          onClick={() => addToCart(dish)}
                          className="px-4 py-1.5 rounded-full bg-white hover:bg-[#0bdcfc] text-slate-900 font-extrabold text-xs shadow-md border border-slate-200 hover:border-[#0bdcfc] transition-all flex items-center gap-1 active:scale-95"
                        >
                          <Plus className="w-3.5 h-3.5 text-[#0891b2]" />
                          <span>ADD</span>
                        </button>
                      ) : (
                        <div className="flex items-center bg-[#0bdcfc] text-slate-950 rounded-full shadow-md font-bold text-xs border border-[#0bdcfc] overflow-hidden">
                          <button
                            type="button"
                            onClick={() => updateQuantity(dish.id, qty - 1)}
                            className="px-2.5 py-1.5 hover:bg-black/10 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 font-black text-xs">{qty}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(dish.id, qty + 1)}
                            className="px-2.5 py-1.5 hover:bg-black/10 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                </div>

                {/* Price and Calories Bar */}
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                  <div className="flex items-baseline gap-2">
                    <span className="text-base font-black text-slate-950">
                      £{dish.price.toFixed(2)}
                    </span>
                    {dish.originalPrice && (
                      <span className="text-xs text-slate-400 line-through">
                        £{dish.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  {dish.calories && (
                    <span className="text-[11px] font-semibold text-slate-400">
                      {dish.calories}
                    </span>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PopularDishes;
