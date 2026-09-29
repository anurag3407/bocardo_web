"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, UtensilsCrossed, X } from "lucide-react";
import { CATEGORIES } from "@/data/mockData";
import { useApp } from "@/context/AppContext";

export const CategoryCarousel: React.FC = () => {
  const { selectedCategory, setSelectedCategory } = useApp();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const offset = direction === "left" ? -280 : 280;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="py-8 sm:py-10 md:py-12 bg-white border-b border-slate-100 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact, Clean Header with Title, Clear Filter, and Navigation Arrows */}
        <div className="flex items-end justify-between gap-4 mb-6 sm:mb-8">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-950 leading-tight">
              What&apos;s on your mind?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Explore your cravings from top curated local restaurants
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
            {selectedCategory && (
              <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all active:scale-95 shadow-2xs"
              >
                <span>Clear</span>
                <X className="w-3 h-3" />
              </button>
            )}

            <button
              type="button"
              onClick={() => scroll("left")}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center transition-all shadow-2xs active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center transition-all shadow-2xs active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Compact & Sleek Category Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex items-start gap-4 sm:gap-6 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth pb-3 pt-1 px-1 touch-pan-x"
        >
          {/* Minimalist "All Cravings" Platter */}
          <button
            type="button"
            onClick={() => setSelectedCategory(null)}
            className="flex-shrink-0 flex flex-col items-center group cursor-pointer text-center select-none"
          >
            <div
              className={`relative w-20 h-20 sm:w-24 sm:h-24 md:w-26 md:h-26 rounded-full flex items-center justify-center transition-all duration-300 ${
                selectedCategory === null
                  ? "bg-slate-950 text-white shadow-md ring-2 ring-slate-950/20 scale-105"
                  : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80 shadow-2xs group-hover:scale-105"
              }`}
            >
              <div className="flex flex-col items-center justify-center gap-1 transition-transform duration-300 group-hover:scale-110">
                <UtensilsCrossed className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-[9px] sm:text-[10px] font-black tracking-widest uppercase">
                  ALL
                </span>
              </div>
            </div>
            <span
              className={`mt-2 text-xs sm:text-sm font-bold tracking-tight transition-colors ${
                selectedCategory === null
                  ? "text-slate-950 font-black"
                  : "text-slate-700 group-hover:text-slate-950"
              }`}
            >
              All Cravings
            </span>
          </button>

          {/* Compact Category Dishes */}
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.slug;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(isSelected ? null : cat.slug)}
                className="flex-shrink-0 flex flex-col items-center group cursor-pointer text-center select-none"
              >
                {/* Circular Platter */}
                <div
                  className={`relative w-20 h-20 sm:w-24 sm:h-24 md:w-26 md:h-26 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isSelected
                      ? "bg-white ring-2 ring-slate-950 shadow-md scale-105"
                      : "bg-slate-50/90 group-hover:bg-slate-100 border border-slate-200/60 shadow-2xs group-hover:shadow-sm group-hover:scale-105"
                  }`}
                >
                  <div className="relative w-15 h-15 sm:w-18 sm:h-18 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-110 drop-shadow-sm">
                    <Image
                      src={cat.image}
                      alt={`Order ${cat.name} online`}
                      fill
                      sizes="(max-width: 640px) 70px, 96px"
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Dish Title */}
                <span
                  className={`mt-2 text-xs sm:text-sm font-bold tracking-tight transition-colors ${
                    isSelected
                      ? "text-slate-950 font-black"
                      : "text-slate-800 group-hover:text-slate-950"
                  }`}
                >
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryCarousel;
