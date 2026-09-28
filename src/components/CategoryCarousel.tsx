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
      const offset = direction === "left" ? -460 : 460;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-100 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Spacious, Grand Header with Title, Clear Filter, and Smooth Navigation Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-[1.08]">
              What&apos;s on your mind?
            </h2>
            <p className="text-base sm:text-lg text-slate-500 font-normal">
              Explore your cravings from top curated local restaurants
            </p>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            {selectedCategory && (
              <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all active:scale-95 shadow-xs"
              >
                <span>Clear filter</span>
                <X className="w-3.5 h-3.5" />
              </button>
            )}

            <button
              type="button"
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center transition-all shadow-xs active:scale-95 hover:scale-105"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center transition-all shadow-xs active:scale-95 hover:scale-105"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Spacious, Big & Minimal Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex items-start gap-8 sm:gap-10 lg:gap-12 overflow-x-auto no-scrollbar scroll-smooth pb-6 pt-2 px-1"
        >
          {/* Minimalist "All Cravings" Platter */}
          <button
            type="button"
            onClick={() => setSelectedCategory(null)}
            className="flex-shrink-0 flex flex-col items-center group cursor-pointer text-center select-none"
          >
            <div
              className={`relative w-36 h-36 sm:w-40 sm:h-40 rounded-full flex items-center justify-center transition-all duration-300 ${
                selectedCategory === null
                  ? "bg-slate-950 text-white shadow-xl ring-4 ring-slate-950/10 scale-105"
                  : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80 shadow-xs group-hover:scale-105"
              }`}
            >
              <div className="flex flex-col items-center justify-center gap-1.5 transition-transform duration-300 group-hover:scale-110">
                <UtensilsCrossed className="w-8 h-8 sm:w-9 sm:h-9" />
                <span className="text-[10px] sm:text-[11px] font-black tracking-widest uppercase">
                  ALL
                </span>
              </div>
            </div>
            <span
              className={`mt-4 text-sm sm:text-base font-bold tracking-tight transition-colors ${
                selectedCategory === null
                  ? "text-slate-950 font-black"
                  : "text-slate-700 group-hover:text-slate-950"
              }`}
            >
              All Cravings
            </span>
          </button>

          {/* Big, Crisp, Minimalist Category Dishes */}
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.slug;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(isSelected ? null : cat.slug)}
                className="flex-shrink-0 flex flex-col items-center group cursor-pointer text-center select-none"
              >
                {/* Large Circular Platter */}
                <div
                  className={`relative w-36 h-36 sm:w-40 sm:h-40 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isSelected
                      ? "bg-white ring-4 ring-slate-950 shadow-xl scale-105"
                      : "bg-slate-50/90 group-hover:bg-slate-100 border border-slate-100/90 shadow-xs group-hover:shadow-md group-hover:scale-105"
                  }`}
                >
                  <div className="relative w-30 h-30 sm:w-34 sm:h-34 transition-transform duration-300 group-hover:scale-110 drop-shadow-md">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="160px"
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Minimalist Dish Title */}
                <span
                  className={`mt-4 text-sm sm:text-base font-bold tracking-tight transition-colors ${
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
