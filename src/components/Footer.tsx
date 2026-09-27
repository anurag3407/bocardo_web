"use client";

import React from "react";
import {
  Globe,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import BocardoLogo from "./BocardoLogo";
import { useApp } from "@/context/AppContext";

export const Footer: React.FC = () => {
  const { setSelectedCategory, setIsPartnerModalOpen, setPartnerModalType } = useApp();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top App Download & Logo Banner */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-slate-800">
          <div>
            <BocardoLogo size={38} showText={true} textColor="text-white" />
            <p className="text-xs text-slate-400 mt-2 max-w-md">
              From artisan sourdough to late night smash burgers, bringing London&apos;s best kitchens to your door in minutes.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-400 hidden sm:inline">
              Coming soon to:
            </span>
            <div className="flex items-center gap-2">
              <div className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs font-bold flex items-center gap-2">
                <span>iOS App</span>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs font-bold flex items-center gap-2">
                <span>Android App</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Columns Directory (Deliveroo reference style) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-slate-800 text-xs">
          
          {/* Col 1: Products */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Products & Services
            </h4>
            <ul className="space-y-2 text-slate-400">
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
                  Bocardo for Work (Corporate)
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-[#0bdcfc] transition-colors">
                  Bocardo Students Club
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0bdcfc] transition-colors">
                  Gift Cards & Vouchers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0bdcfc] transition-colors">
                  RouteEngine™ Real-Time API
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Browse */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Browse Top Cuisines
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("burgers");
                    const el = document.getElementById("restaurants-section");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-[#0bdcfc] transition-colors"
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
                  className="hover:text-[#0bdcfc] transition-colors"
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
                  className="hover:text-[#0bdcfc] transition-colors"
                >
                  Sushi & Fresh Poke Bowls
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
                  className="hover:text-[#0bdcfc] transition-colors"
                >
                  Dum Biryani & Royal Curries
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("salad");
                    const el = document.getElementById("restaurants-section");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-[#0bdcfc] transition-colors"
                >
                  Organic Macro & Salad Bowls
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Work with us */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Work With Us
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setPartnerModalType("rider");
                    setIsPartnerModalOpen(true);
                  }}
                  className="hover:text-[#0bdcfc] transition-colors text-left"
                >
                  Become a Bocardo Rider
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setPartnerModalType("restaurant");
                    setIsPartnerModalOpen(true);
                  }}
                  className="hover:text-[#0bdcfc] transition-colors text-left"
                >
                  Add Your Restaurant
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-[#0bdcfc] transition-colors">
                  Grocery & Convenience Merchants
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0bdcfc] transition-colors">
                  Engineering Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0bdcfc] transition-colors">
                  Developer Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Company */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Company & Legal
            </h4>
            <ul className="space-y-2 text-slate-400">
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
                  Customer Support & Helpdesk
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
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
