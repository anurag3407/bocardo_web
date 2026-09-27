"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryCarousel from "@/components/CategoryCarousel";
import PopularDishes from "@/components/PopularDishes";
import AppLaunchBanner from "@/components/AppLaunchBanner";
import RestaurantGrid from "@/components/RestaurantGrid";
import HowItWorks from "@/components/HowItWorks";
import PartnerSection from "@/components/PartnerSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import RestaurantMenuModal from "@/components/RestaurantMenuModal";
import LiveTrackingModal from "@/components/LiveTrackingModal";
import PartnerModal from "@/components/PartnerModal";
import AuthModal from "@/components/AuthModal";
import AddressModal from "@/components/AddressModal";
import Toast from "@/components/Toast";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Deliveroo-style Hero */}
        <HeroSection />

        {/* Swiggy-style What's on your mind category carousel */}
        <CategoryCarousel />

        {/* Curated Restaurant Grid & Filter System */}
        <RestaurantGrid />

        {/* Chef Specials & Most Ordered Transparent Cutout Dishes */}
        <PopularDishes />

        {/* Official iOS & Android App Launching Soon Showcase */}
        <AppLaunchBanner />

        {/* How It Works & RouteEngine USP */}
        <HowItWorks />

        {/* Ecosystem Onboarding: Restaurants, Riders, Corporate */}
        <PartnerSection />

        {/* Frequently Asked Questions Accordion */}
        <FaqSection />
      </main>

      {/* Modern Deliveroo-Grade Footer */}
      <Footer />

      {/* Interactive Global Modals & Drawers */}
      <CartDrawer />
      <RestaurantMenuModal />
      <LiveTrackingModal />
      <PartnerModal />
      <AuthModal />
      <AddressModal />
      <Toast />
    </div>
  );
}
