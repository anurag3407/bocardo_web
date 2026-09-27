"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CATEGORIES } from "@/data/mockData";
import { useApp } from "@/context/AppContext";

export const CategoryCarousel: React.FC = () => {
  const { selectedCategory, setSelectedCategory } = useApp();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const offset = direction === "left" ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Spacious Header with Title and Scroll arrows (Swiggy / Zomato style) */}
        <div className="flex items-end justify-between mb-8 sm:mb-12">
          <div className="space-y-1.5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-950">
              What&apos;s on your mind?
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-medium">
              Explore your cravings from top curated local restaurants
            </p>
          </div>

          <div className="flex items-center gap-3">
            {selectedCategory && (
              <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                className="text-xs sm:text-sm font-bold text-[#0891b2] hover:underline mr-2"
              >
                Clear filter
              </button>
            )}

            <button
              type="button"
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#0bdcfc] hover:text-slate-950 text-slate-700 flex items-center justify-center transition-all shadow-xs active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#0bdcfc] hover:text-slate-950 text-slate-700 flex items-center justify-center transition-all shadow-xs active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Spacious Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-6 sm:gap-8 lg:gap-10 overflow-x-auto no-scrollbar scroll-smooth pb-4 pt-1"
        >
          {/* All Food button */}
          <button
            type="button"
            onClick={() => setSelectedCategory(null)}
            className={`flex-shrink-0 flex flex-col items-center group transition-all text-center ${
              selectedCategory === null ? "scale-105" : "opacity-80 hover:opacity-100"
            }`}
          >
            <div
              className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center p-4 transition-all ${
                selectedCategory === null
                  ? "bg-[#0bdcfc] ring-4 ring-[#0bdcfc]/25 shadow-lg"
                  : "bg-slate-100 group-hover:bg-slate-200"
              }`}
            >
              <span className="text-xs sm:text-sm font-black text-slate-950 tracking-tight leading-tight">
                All Food
              </span>
            </div>
            <span className="mt-3 text-xs sm:text-sm font-bold text-slate-800">
              Explore All
            </span>
          </button>

          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.slug;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(isSelected ? null : cat.slug)}
                className={`flex-shrink-0 flex flex-col items-center group transition-all text-center ${
                  isSelected ? "scale-105" : "hover:scale-103"
                }`}
              >
                <div
                  className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-3 flex items-center justify-center transition-all ${
                    isSelected
                      ? "bg-white ring-4 ring-[#0bdcfc] shadow-xl"
                      : "bg-slate-50 group-hover:bg-[#0bdcfc]/10 border border-slate-100 group-hover:border-[#0bdcfc]/30"
                  }`}
                >
                  <div className="relative w-18 h-18 sm:w-20 sm:h-20 transition-transform group-hover:scale-110">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="100px"
                      className="object-contain"
                    />
                  </div>
                </div>

                <span
                  className={`mt-3 text-xs sm:text-sm font-bold truncate max-w-[100px] sm:max-w-[120px] transition-colors ${
                    isSelected ? "text-[#0891b2] font-black" : "text-slate-800 group-hover:text-slate-950"
                  }`}
                >
                  {cat.name}
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  {cat.itemCount} options
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
