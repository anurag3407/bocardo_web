"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, MapPin, Utensils, ShieldCheck, Zap, Bike, Sparkles } from "lucide-react";
import { useApp } from "@/context/AppContext";

export const SeoContentSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { setSelectedCategory } = useApp();

  const handleCuisineClick = (slug: string) => {
    setSelectedCategory(slug);
    const el = document.getElementById("restaurants-section");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const popularSearches = [
    { label: "Biryani Delivery Near Me", slug: "biryani" },
    { label: "Wood-Fired Pizza Online", slug: "pizza" },
    { label: "Gourmet Burgers Bengaluru", slug: "burgers" },
    { label: "Fresh Sushi Delivery Mumbai", slug: "sushi" },
    { label: "Artisan Bakeries Delhi NCR", slug: "dessert" },
    { label: "Late Night Food Delivery", slug: "biryani" },
    { label: "Healthy Keto Bowls", slug: "salad" },
    { label: "Specialty Cold Brew Coffee", slug: "coffee" },
    { label: "Handmade Italian Pasta", slug: "pasta" },
    { label: "Authentic Mexican Tacos", slug: "tacos" },
    { label: "Zero Delivery Fee Food App", slug: "biryani" },
    { label: "Top Rated Kitchens Near Me", slug: "burgers" },
  ];

  const cityHubs = [
    {
      city: "Bengaluru",
      areas: "Indiranagar • Koramangala • HSR Layout • Whitefield • JP Nagar • Bellandur • MG Road",
    },
    {
      city: "Mumbai",
      areas: "Bandra West • Andheri West • Powai • Juhu • Lower Parel • BKC • Colaba",
    },
    {
      city: "Delhi NCR",
      areas: "Gurugram Cyber Hub • DLF Phase 1-5 • Noida Sector 18 • Connaught Place • South Extension",
    },
    {
      city: "Hyderabad",
      areas: "HITEC City • Jubilee Hills • Banjara Hills • Gachibowli • Madhapur • Kondapur",
    },
    {
      city: "Pune",
      areas: "Koregaon Park • Baner • Viman Nagar • Hinjawadi • Kalyani Nagar • Aundh",
    },
    {
      city: "Chennai",
      areas: "Nungambakkam • OMR • Adyar • Anna Nagar • T. Nagar • Alwarpet",
    },
  ];

  return (
    <section className="py-16 bg-white border-t border-slate-100 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges / USPs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-slate-100">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#00C2E8]/10 text-[#0891b2] flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-slate-900">20-30 Min Delivery</h3>
              <p className="text-xs text-slate-500 leading-snug mt-0.5">
                RouteEngine™ zero-detour single order dispatch.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-slate-900">FSSAI Certified</h3>
              <p className="text-xs text-slate-500 leading-snug mt-0.5">
                100% kitchen hygiene verified & tamper-proof seals.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
              <Bike className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-slate-900">100% Electric EV Fleet</h3>
              <p className="text-xs text-slate-500 leading-snug mt-0.5">
                Zero carbon emission deliveries across city streets.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-slate-900">₹0 Delivery with Pass</h3>
              <p className="text-xs text-slate-500 leading-snug mt-0.5">
                Unlimited free delivery on all orders over ₹199.
              </p>
            </div>
          </div>
        </div>

        {/* Popular Searches & Quick Links (High Intent Keywords) */}
        <div className="py-10 border-b border-slate-100">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-1.5">
            <Utensils className="w-3.5 h-3.5 text-[#0891b2]" />
            <span>Popular Food Searches & Trending Cuisines in India</span>
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {popularSearches.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleCuisineClick(item.slug)}
                className="text-xs font-medium px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-[#00C2E8]/10 hover:text-[#0891b2] text-slate-700 border border-slate-200/80 transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Hyperlocal City Hubs */}
        <div className="py-10 border-b border-slate-100">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-5 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#0891b2]" />
            <span>Hyperlocal Delivery Hubs & Serving Neighbourhoods</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityHubs.map((hub) => (
              <div key={hub.city} className="space-y-1">
                <span className="font-bold text-sm text-slate-900 block">
                  Food Delivery in {hub.city}
                </span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {hub.areas}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Editorial Content: Topical Depth & E-E-A-T */}
        <div className="pt-8">
          <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 leading-relaxed">
            <h2 className="text-base sm:text-lg font-black text-slate-900 mb-2">
              Why Bocardo is India&apos;s Preferred Online Food & Grocery Delivery Platform
            </h2>
            <p>
              Looking to order food online from top-rated restaurants near you? Bocardo connects foodies and families across Bengaluru, Mumbai, Delhi NCR, Hyderabad, Pune, and Chennai with the finest culinary establishments in town. Whether you are craving royal Hyderabadi Dum Biryani, wood-fired sourdough pizzas, smash burgers, fresh Atlantic salmon sushi, or delicate French pastries from artisanal bakeries, Bocardo ensures your cravings are satisfied in under 30 minutes.
            </p>

            {isExpanded && (
              <div className="mt-4 space-y-4 animate-in fade-in duration-300">
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                  Precision Logistics with Bocardo RouteEngine™
                </h3>
                <p>
                  Unlike legacy delivery platforms that bundle and batch multiple customer orders together causing cold food and extended wait times, Bocardo operates on our proprietary <strong>RouteEngine™ dispatch architecture</strong>. Every order is mapped to dedicated riders equipped with custom triple-layer thermal containers, ensuring meals arrive piping hot at an optimal serving temperature above 65°C.
                </p>

                <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                  Curated Quality & FSSAI Food Hygiene Guarantee
                </h3>
                <p>
                  Every restaurant, cloud kitchen, and grocery partner on Bocardo undergoes rigorous in-person hygiene audits and holds verified FSSAI certifications. Our contactless, tamper-evident safety packaging protects every box, bowl, and beverage from kitchen pass to doorstep.
                </p>

                <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                  Save Big with Bocardo Pass
                </h3>
                <p>
                  Upgrade your daily dining experience with <strong>Bocardo Pass</strong>. Enjoy unlimited ₹0 delivery fees on orders above ₹199, zero surge charges during peak rainfall or festival hours, and secret menu access across top partner restaurants in your neighbourhood.
                </p>
              </div>
            )}

            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#0891b2] hover:text-[#0e7490] transition-colors cursor-pointer"
            >
              <span>{isExpanded ? "Show less" : "Read more about Bocardo food delivery"}</span>
              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SeoContentSection;
