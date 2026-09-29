"use client";

import React from "react";
import { Globe } from "lucide-react";
import BocardoLogo from "./BocardoLogo";
import { useApp } from "@/context/AppContext";

export const Footer: React.FC = () => {
  const { setSelectedCategory, setIsPartnerModalOpen, setPartnerModalType } = useApp();

  const cities = [
    "Bengaluru",
    "Mumbai",
    "Delhi NCR",
    "Hyderabad",
    "Chennai",
    "Pune",
    "Kolkata",
    "Ahmedabad",
    "Chandigarh",
    "Jaipur",
    "Lucknow",
    "Kochi",
  ];

  return (
    <footer className="bg-black text-neutral-300 pt-20 pb-16 border-t border-neutral-900 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top App Download & Logo Banner */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-16 border-b border-neutral-900">
          <div className="space-y-3">
            <BocardoLogo size={42} showText={true} textColor="text-white" />
            <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
              From aromatic dum biryanis and gourmet smash burgers to artisan sourdough and late-night street rolls, delivering India&apos;s finest kitchens straight to your door in minutes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              Coming soon on:
            </span>
            <div className="flex items-center gap-3">
              {/* Apple App Store */}
              <div className="px-4 py-2.5 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2.5 transition-all shadow-sm">
                <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.84.94-2.91-1 .04-2.19.67-2.88 1.48-.59.68-1.12 1.77-.98 2.82 1.11.08 2.25-.59 2.92-1.39z" />
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-normal leading-none">Download</span>
                  <span className="leading-tight">iOS App</span>
                </div>
                <span className="ml-1 text-[9px] font-bold text-[#0bdcfc] bg-[#0bdcfc]/10 px-1.5 py-0.5 rounded-full border border-[#0bdcfc]/20">SOON</span>
              </div>

              {/* Google Play */}
              <div className="px-4 py-2.5 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2.5 transition-all shadow-sm">
                <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186c-.366-.341-.61-.83-.61-1.38V3.194c0-.55.244-1.039.61-1.38zM15.207 13.414l2.451 2.451-11.45 6.467 8.999-8.918zm0-2.828L6.208 1.668l11.45 6.467-2.451 2.451zm1.414 1.414l3.18-3.18c.677.387 1.199 1.054 1.199 1.766s-.522 1.379-1.199 1.766l-3.18-3.18z" />
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-normal leading-none">Download</span>
                  <span className="leading-tight">Android App</span>
                </div>
                <span className="ml-1 text-[9px] font-bold text-[#0bdcfc] bg-[#0bdcfc]/10 px-1.5 py-0.5 rounded-full border border-[#0bdcfc]/20">SOON</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Columns Directory */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 py-16 border-b border-neutral-900 text-sm">
          
          {/* Col 1: Products */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-white uppercase tracking-wider text-xs">
              Food & Services
            </h4>
            <ul className="space-y-2.5 text-neutral-400">
              <li>
                <a href="#" className="hover:text-[#0bdcfc] transition-colors">
                  Bocardo Pass (₹0 Delivery)
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setPartnerModalType("corporate");
                    setIsPartnerModalOpen(true);
                  }}
                  className="hover:text-[#0bdcfc] transition-colors text-left cursor-pointer"
                >
                  Bocardo for Work (Team Meals)
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-[#0bdcfc] transition-colors">
                  Bocardo Students Club
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0bdcfc] transition-colors">
                  Food & Dining Vouchers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0bdcfc] transition-colors">
                  RouteEngine™ Road Logistics API
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Browse */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-white uppercase tracking-wider text-xs">
              Top Cuisines
            </h4>
            <ul className="space-y-2.5 text-neutral-400">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("biryani");
                    const el = document.getElementById("restaurants-section");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-[#0bdcfc] transition-colors text-left cursor-pointer"
                >
                  Dum Biryani & Kebabs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("burgers");
                    const el = document.getElementById("restaurants-section");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-[#0bdcfc] transition-colors text-left cursor-pointer"
                >
                  Gourmet Smashed Burgers
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("pizza");
                    const el = document.getElementById("restaurants-section");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-[#0bdcfc] transition-colors text-left cursor-pointer"
                >
                  Neapolitan Wood-fired Pizza
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("sushi");
                    const el = document.getElementById("restaurants-section");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-[#0bdcfc] transition-colors text-left cursor-pointer"
                >
                  Sushi & Asian Bowls
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("dessert");
                    const el = document.getElementById("restaurants-section");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-[#0bdcfc] transition-colors text-left cursor-pointer"
                >
                  Artisan Bakeries & Mithai
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Work with us */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-white uppercase tracking-wider text-xs">
              Work With Us
            </h4>
            <ul className="space-y-2.5 text-neutral-400">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setPartnerModalType("restaurant");
                    setIsPartnerModalOpen(true);
                  }}
                  className="hover:text-[#0bdcfc] transition-colors text-left cursor-pointer"
                >
                  Partner Your Restaurant
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setPartnerModalType("rider");
                    setIsPartnerModalOpen(true);
                  }}
                  className="hover:text-[#0bdcfc] transition-colors text-left cursor-pointer"
                >
                  Become a Delivery Partner
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-[#0bdcfc] transition-colors">
                  Engineering & Tech Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0bdcfc] transition-colors">
                  Kitchen Tablet Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Company */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-white uppercase tracking-wider text-xs">
              Company & Legal
            </h4>
            <ul className="space-y-2.5 text-neutral-400">
              <li>
                <a href="#" className="hover:text-[#0bdcfc] transition-colors">
                  About Bocardo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0bdcfc] transition-colors">
                  FSSAI Food Safety Standards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0bdcfc] transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0bdcfc] transition-colors">
                  Privacy Policy & Cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0bdcfc] transition-colors">
                  24/7 Customer Support
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Popular Cities in India */}
        <div className="py-8 border-b border-neutral-900">
          <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
            Popular Cities Delivered in India
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-neutral-400">
            {cities.map((city, idx) => (
              <React.Fragment key={city}>
                <span className="hover:text-[#0bdcfc] transition-colors cursor-pointer">
                  {city}
                </span>
                {idx < cities.length - 1 && (
                  <span className="text-neutral-700">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-neutral-500">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-neutral-400" />
            <span className="text-neutral-300 font-semibold flex items-center gap-1.5">
              <span>🇮🇳</span>
              <span>India (English)</span>
            </span>
          </div>

          <div className="text-center sm:text-right text-neutral-500">
            © {new Date().getFullYear()} Bocardo Technologies India Pvt. Ltd. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
