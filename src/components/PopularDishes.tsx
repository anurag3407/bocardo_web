"use client";

import React from "react";
import Image from "next/image";
import { Plus, Minus, Flame, Sparkles } from "lucide-react";
import { POPULAR_DISHES } from "@/data/mockData";
import { useApp } from "@/context/AppContext";

export const PopularDishes: React.FC = () => {
  const { cart, addToCart, updateQuantity } = useApp();

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Spacious Section Header */}
        <div className="mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-extrabold tracking-wider text-[#0891b2]">
            <Sparkles className="w-4 h-4 text-[#0bdcfc]" />
            <span>Chef Curated Specials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
            Most ordered dishes this week
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            Handpicked customer favourites delivered fresh in under 30 minutes
          </p>
        </div>

        {/* Spacious Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POPULAR_DISHES.map((dish) => {
            const cartEntry = cart.find((item) => item.food.id === dish.id);
            const qty = cartEntry ? cartEntry.quantity : 0;

            return (
              <div
                key={dish.id}
                className="bg-slate-50/60 hover:bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-[#0bdcfc]/60 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="flex gap-5 items-start">
                  
                  {/* Left Column: Info with comfortable spacing */}
                  <div className="flex-1 space-y-2">
                    {/* Dietary & Bestseller tag */}
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-4 h-4 rounded-xs border flex items-center justify-center ${
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
                        <span className="flex items-center gap-1 text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-md">
                          <Flame className="w-3 h-3" />
                          Spicy
                        </span>
                      )}
                    </div>

                    {/* Dish Name */}
                    <h3 className="font-extrabold text-slate-950 text-base sm:text-lg leading-snug group-hover:text-[#0891b2] transition-colors">
                      {dish.name}
                    </h3>

                    {/* Restaurant Origin */}
                    <div className="text-xs font-semibold text-slate-400">
                      by {dish.restaurantName}
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed pt-1">
                      {dish.description}
                    </p>
                  </div>

                  {/* Right Column: Dish Cutout & Stepper */}
                  <div className="relative flex flex-col items-center flex-shrink-0">
                    <div className="relative w-32 h-32 bg-white rounded-2xl p-2.5 border border-slate-100 shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-108">
                        <Image
                          src={dish.image}
                          alt={dish.name}
                          fill
                          sizes="140px"
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Stepper Button */}
                    <div className="absolute -bottom-3">
                      {qty === 0 ? (
                        <button
                          type="button"
                          onClick={() => addToCart(dish)}
                          className="px-5 py-2 rounded-full bg-white hover:bg-[#0bdcfc] text-slate-950 font-black text-xs shadow-md border border-slate-200 hover:border-[#0bdcfc] transition-all flex items-center gap-1 active:scale-95"
                        >
                          <Plus className="w-3.5 h-3.5 text-[#0891b2]" />
                          <span>ADD</span>
                        </button>
                      ) : (
                        <div className="flex items-center bg-[#0bdcfc] text-slate-950 rounded-full shadow-md font-bold text-xs border border-[#0bdcfc] overflow-hidden">
                          <button
                            type="button"
                            onClick={() => updateQuantity(dish.id, qty - 1)}
                            className="px-3 py-1.5 hover:bg-black/10 transition-colors"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2.5 font-black text-xs">{qty}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(dish.id, qty + 1)}
                            className="px-3 py-1.5 hover:bg-black/10 transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                </div>

                {/* Price and Calories Bar */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-black text-slate-950">
                      ₹{dish.price}
                    </span>
                    {dish.originalPrice && (
                      <span className="text-xs text-slate-400 line-through">
                        ₹{dish.originalPrice}
                      </span>
                    )}
                  </div>

                  {dish.calories && (
                    <span className="text-xs font-semibold text-slate-400">
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
