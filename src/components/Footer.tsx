"use client";

import React from "react";
import { Globe } from "lucide-react";
import BocardoLogo from "./BocardoLogo";
import { useApp } from "@/context/AppContext";

export const Footer: React.FC = () => {
  const { setSelectedCategory, setIsPartnerModalOpen, setPartnerModalType } = useApp();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-16 border-t border-slate-900 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top App Download & Logo Banner */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-16 border-b border-slate-800">
          <div className="space-y-3">
            <BocardoLogo size={42} showText={true} textColor="text-white" />
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              From artisan sourdough to late night smash burgers, delivering London&apos;s finest kitchens straight to your door in minutes.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs sm:text-sm font-semibold text-slate-400 hidden sm:inline">
              Coming soon on:
            </span>
            <div className="flex items-center gap-3">
              <div className="px-4 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-white text-xs sm:text-sm font-bold flex items-center gap-2">
                <span>iOS App</span>
              </div>
              <div className="px-4 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-white text-xs sm:text-sm font-bold flex items-center gap-2">
                <span>Android App</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Columns Directory */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 py-16 border-b border-slate-800 text-sm">
          
          {/* Col 1: Products */}
          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              Food & Services
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <a href="#" className="hover:text-[#0bdcfc] transition-colors">
                  Bocardo Pass (£0 Delivery)
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setPartnerModalType("corporate");
                    setIsPartnerModalOpen(true);
                  }}
                  className="hover:text-[#0bdcfc] transition-colors text-left"
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
                  Food Gift Vouchers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0bdcfc] transition-colors">
                  RouteEngine™ Road API
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Browse */}
          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              Top Cuisines
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("burgers");
                    const el = document.getElementById("restaurants-section");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-[#0bdcfc] transition-colors text-left"
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
                  className="hover:text-[#0bdcfc] transition-colors text-left"
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
                  className="hover:text-[#0bdcfc] transition-colors text-left"
                >
                  Sushi & Fresh Poke
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("biryani");
                    const el = document.getElementById("restaurants-section");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-[#0bdcfc] transition-colors text-left"
                >
                  Dum Biryani & Curries
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
                  className="hover:text-[#0bdcfc] transition-colors text-left"
                >
                  Artisan Bakeries & Desserts
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Work with us */}
          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              Work With Us
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setPartnerModalType("restaurant");
                    setIsPartnerModalOpen(true);
                  }}
                  className="hover:text-[#0bdcfc] transition-colors text-left"
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
                  className="hover:text-[#0bdcfc] transition-colors text-left"
                >
                  Become an e-Bike Rider
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-[#0bdcfc] transition-colors">
                  Engineering Careers
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
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              Company & Legal
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <a href="#" className="hover:text-[#0bdcfc] transition-colors">
                  About Bocardo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0bdcfc] transition-colors">
                  Hygiene & Safety Standards
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
                  Customer Support
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-slate-400" />
            <span className="text-slate-300 font-semibold">United Kingdom (English)</span>
          </div>

          <div className="text-center sm:text-right">
            © {new Date().getFullYear()} Bocardo Delivery Ltd. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
