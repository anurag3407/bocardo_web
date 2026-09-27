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
      const offset = direction === "left" ? -280 : 280;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and Scroll arrows (Swiggy style) */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
              What&apos;s on your mind?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Explore your cravings from top curated kitchens
            </p>
          </div>

          <div className="flex items-center gap-2">
            {selectedCategory && (
              <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                className="text-xs font-bold text-[#0891b2] hover:underline mr-2"
              >
                Clear filter
              </button>
            )}

            <button
              type="button"
              onClick={() => scroll("left")}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#0bdcfc] hover:text-slate-950 text-slate-700 flex items-center justify-center transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#0bdcfc] hover:text-slate-950 text-slate-700 flex items-center justify-center transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-2 pt-1"
        >
          {/* All button */}
          <button
            type="button"
            onClick={() => setSelectedCategory(null)}
            className={`flex-shrink-0 flex flex-col items-center group transition-all text-center ${
              selectedCategory === null ? "scale-105" : "opacity-80 hover:opacity-100"
            }`}
          >
            <div
              className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center p-3 transition-all ${
                selectedCategory === null
                  ? "bg-[#0bdcfc] ring-3 ring-[#0bdcfc]/30 shadow-md"
                  : "bg-slate-100 group-hover:bg-slate-200"
              }`}
            >
              <span className="text-xs sm:text-sm font-black text-slate-900 tracking-tight">
                All Food
              </span>
            </div>
            <span className="mt-2 text-xs font-bold text-slate-800">
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
                  isSelected ? "scale-105" : "hover:scale-102"
                }`}
              >
                <div
                  className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-2 flex items-center justify-center transition-all ${
                    isSelected
                      ? "bg-white ring-3 ring-[#0bdcfc] shadow-lg"
                      : "bg-slate-50 group-hover:bg-[#0bdcfc]/10 border border-slate-100"
                  }`}
                >
                  <div className="relative w-14 h-14 sm:w-18 sm:h-18 transition-transform group-hover:scale-110">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="80px"
                      className="object-contain"
                    />
                  </div>
                </div>

                <span
                  className={`mt-2 text-xs font-bold truncate max-w-[85px] sm:max-w-[100px] transition-colors ${
                    isSelected ? "text-[#0891b2] font-black" : "text-slate-800 group-hover:text-slate-950"
                  }`}
                >
                  {cat.name}
                </span>
                <span className="text-[10px] text-slate-400 font-medium">
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
