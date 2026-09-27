"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Star,
  Clock,
  MapPin,
  Percent,
  ChevronDown,
  Heart,
  Search,
} from "lucide-react";
import { RESTAURANTS } from "@/data/mockData";
import { useApp } from "@/context/AppContext";

export const RestaurantGrid: React.FC = () => {
  const {
    setActiveRestaurant,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
  } = useApp();

  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"recommended" | "rating" | "fastest" | "distance">("recommended");
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredRestaurants = useMemo(() => {
    return RESTAURANTS.filter((r) => {
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = r.name.toLowerCase().includes(q);
        const matchesCuisine = r.cuisines.some((c) => c.toLowerCase().includes(q));
        const matchesMenu = r.menu.some((cat) =>
          cat.items.some((item) => item.name.toLowerCase().includes(q))
        );
        if (!matchesName && !matchesCuisine && !matchesMenu) return false;
      }

      // Category filter
      if (selectedCategory) {
        const catMap: Record<string, string[]> = {
          burgers: ["Gourmet Burgers", "American"],
          pizza: ["Neapolitan Pizza", "Italian"],
          sushi: ["Japanese", "Sushi & Sashimi"],
          biryani: ["Indian", "Dum Biryani"],
          pasta: ["Italian", "Fresh Pasta"],
          tacos: ["Mexican", "Street Tacos"],
          salad: ["Gourmet Bowls", "Healthy"],
          noodles: ["Ramen & Wok", "Japanese"],
          dessert: ["Bakery", "Desserts"],
          coffee: ["Specialty Coffee", "Bakery"],
        };

        const targetCuisines = catMap[selectedCategory] || [];
        const matchesCat = r.cuisines.some((c) =>
          targetCuisines.some((tc) => c.toLowerCase().includes(tc.toLowerCase()))
        );
        if (!matchesCat) return false;
      }

      // Pill filter
      if (activeFilter === "pass" && !r.isBocardoPass) return false;
      if (activeFilter === "fast" && !r.deliveryTime.includes("15") && !r.deliveryTime.includes("20")) return false;
      if (activeFilter === "rated" && r.rating < 4.85) return false;
      if (activeFilter === "offers" && !r.promoTag) return false;
      if (activeFilter === "veg" && !r.dietary.some((d) => d.toLowerCase().includes("veg"))) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "fastest") return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
      if (sortBy === "distance") return parseFloat(a.distance) - parseFloat(b.distance);
      return 0; // recommended
    });
  }, [searchQuery, selectedCategory, activeFilter, sortBy]);

  return (
    <section id="restaurants-section" className="py-20 lg:py-24 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Spacious Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="text-xs uppercase font-extrabold tracking-wider text-[#0891b2]">
              Top Food Delivery
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
              {selectedCategory
                ? `Restaurants serving ${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`
                : "Top rated restaurants near you"}
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-medium">
              Delivering piping hot from the finest local kitchens to your doorstep
            </p>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <span className="text-xs sm:text-sm text-slate-500 font-semibold">Sort by:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort restaurants by"
                className="appearance-none bg-white text-xs sm:text-sm font-bold text-slate-900 border border-slate-200 rounded-2xl pl-4 pr-10 py-2.5 shadow-2xs hover:border-[#0bdcfc] outline-none cursor-pointer"
              >
                <option value="recommended">Recommended</option>
                <option value="rating">Highest Rated (★ 4.8+)</option>
                <option value="fastest">Fastest Delivery</option>
                <option value="distance">Nearest First</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Spacious Filter Pills (Swiggy / Zomato style) */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-6 pt-1">
          {[
            { id: "all", label: "All Restaurants" },
            { id: "pass", label: "⚡ Bocardo Pass (£0 Del)" },
            { id: "fast", label: "Under 25 mins" },
            { id: "rated", label: "Top Rated (★ 4.9)" },
            { id: "offers", label: "Offers & Perks" },
            { id: "veg", label: "Pure Veg" },
          ].map((pill) => {
            const isActive = activeFilter === pill.id;
            return (
              <button
                key={pill.id}
                type="button"
                onClick={() => setActiveFilter(pill.id)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border ${
                  isActive
                    ? "bg-slate-950 text-white border-slate-950 shadow-md"
                    : "bg-white text-slate-700 border-slate-200 hover:border-[#0bdcfc] hover:bg-slate-50 shadow-2xs"
                }`}
              >
                {pill.label}
              </button>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredRestaurants.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center border border-slate-200 max-w-lg mx-auto my-12 space-y-4 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No restaurants found</h3>
            <p className="text-sm text-slate-500">
              We couldn&apos;t find any kitchens matching your current filters. Try resetting the filters or searching another dish.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveFilter("all");
                setSelectedCategory(null);
              }}
              className="px-6 py-2.5 text-xs sm:text-sm font-bold bg-[#0bdcfc] text-slate-950 rounded-xl"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          /* Spacious 3-Column Grid (Zomato & Swiggy aesthetic) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredRestaurants.map((restaurant) => {
              const isFav = !!favorites[restaurant.id];
              return (
                <div
                  key={restaurant.id}
                  onClick={() => setActiveRestaurant(restaurant)}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-[#0bdcfc]/60 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
                >
                  {/* Image Container with generous height */}
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={restaurant.image}
                      alt={restaurant.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    {/* Favorite Button */}
                    <button
                      type="button"
                      onClick={(e) => toggleFavorite(e, restaurant.id)}
                      className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center text-slate-700 hover:text-red-500 transition-colors shadow-md"
                      aria-label="Add to favorites"
                    >
                      <Heart
                        className={`w-4 h-4 ${isFav ? "fill-red-500 text-red-500" : ""}`}
                      />
                    </button>

                    {/* Promo Offer Tag */}
                    {restaurant.promoTag && (
                      <div className="absolute bottom-4 left-4 bg-[#0bdcfc] text-slate-950 px-3 py-1.5 rounded-xl text-xs font-black tracking-tight shadow-md flex items-center gap-1.5">
                        <Percent className="w-3.5 h-3.5 text-slate-950 stroke-[3]" />
                        <span>{restaurant.promoTag}</span>
                      </div>
                    )}

                    {/* Delivery Time Badge */}
                    <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-xs text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md">
                      <Clock className="w-3.5 h-3.5 text-[#0bdcfc]" />
                      <span>{restaurant.deliveryTime}</span>
                    </div>
                  </div>

                  {/* Body Content with generous breathing room */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      {/* Name & Rating */}
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-extrabold text-slate-950 text-lg sm:text-xl group-hover:text-[#0891b2] transition-colors line-clamp-1">
                          {restaurant.name}
                        </h3>
                        <div className="flex items-center gap-1 bg-emerald-600 text-white px-2.5 py-1 rounded-lg text-xs font-black flex-shrink-0 shadow-2xs">
                          <span>{restaurant.rating}</span>
                          <Star className="w-3 h-3 fill-white text-white" />
                        </div>
                      </div>

                      {/* Cuisines & Distance */}
                      <p className="text-xs sm:text-sm text-slate-500 line-clamp-1 font-medium">
                        {restaurant.cuisines.join(" • ")}
                      </p>

                      <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-500 font-medium pt-1">
                        <span className="flex items-center gap-1 text-slate-600">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {restaurant.distance}
                        </span>
                        <span>•</span>
                        <span>
                          {restaurant.deliveryFee === 0 ? (
                            <strong className="text-emerald-600 font-bold">Free Delivery</strong>
                          ) : (
                            `£${restaurant.deliveryFee.toFixed(2)} delivery`
                          )}
                        </span>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                      {restaurant.isBocardoPass ? (
                        <span className="inline-flex items-center gap-1 text-[#0891b2] font-bold bg-[#0bdcfc]/10 px-2.5 py-1 rounded-lg">
                          ⚡ Bocardo Pass
                        </span>
                      ) : (
                        <span>Min £{restaurant.minOrder.toFixed(0)}</span>
                      )}

                      <span className="font-bold text-slate-600 group-hover:text-slate-950 transition-colors">
                        View menu →
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};

export default RestaurantGrid;
