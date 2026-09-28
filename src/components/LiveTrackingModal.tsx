"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Bike,
  MapPin,
  Phone,
  MessageSquare,
  Compass,
  ArrowRight,
} from "lucide-react";
import { useApp } from "@/context/AppContext";
import BocardoLogo from "./BocardoLogo";

export const LiveTrackingModal: React.FC = () => {
  const {
    isTrackingModalOpen,
    setIsTrackingModalOpen,
    selectedAddress,
  } = useApp();

  const [currentStep, setCurrentStep] = useState<number>(2); // 0: Placed, 1: Kitchen, 2: Rider on road, 3: Arriving
  const [etaMinutes, setEtaMinutes] = useState<number>(14);

  useEffect(() => {
    if (!isTrackingModalOpen) return;
    const interval = setInterval(() => {
      setEtaMinutes((prev) => (prev > 1 ? prev - 1 : 1));
    }, 25000);
    return () => clearInterval(interval);
  }, [isTrackingModalOpen]);

  if (!isTrackingModalOpen) return null;

  const steps = [
    { label: "Order Confirmed", time: "12:30 PM", desc: "Payment received & sent to kitchen" },
    { label: "Kitchen Preparing", time: "12:34 PM", desc: "Chef freshly preparing your meal" },
    { label: "Rider on the Road", time: "12:44 PM", desc: "Marco is navigating via Bocardo RouteEngine™" },
    { label: "Arriving at Doorstep", time: "Est. 12:54 PM", desc: "Contactless delivery handoff" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-xs transition-all">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col my-auto">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <BocardoLogo size={32} showText={false} />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-extrabold tracking-tight">Order #BC-8392</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="text-xs text-slate-400">
                Delivering to: <strong className="text-white">{selectedAddress.address}</strong>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsTrackingModalOpen(false)}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Live Status Banner */}
        <div className="bg-[#0bdcfc] text-slate-950 px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Bike className="w-5 h-5 text-slate-950" />
            <div>
              <div className="text-xs font-black uppercase tracking-wider">
                {steps[currentStep].label}
              </div>
              <div className="text-[11px] font-semibold text-slate-800">
                {steps[currentStep].desc}
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-[10px] uppercase font-bold text-slate-800">Estimated Arrival</div>
            <div className="text-base font-black tracking-tight">{etaMinutes} mins</div>
          </div>
        </div>

        {/* Road Map Simulation Section (matching Bocardo 'B' Route branding) */}
        <div className="relative h-64 bg-slate-950 overflow-hidden border-b border-slate-100 flex items-center justify-center">
          {/* Subtle grid map lines */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#0bdcfc_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Road vector track */}
          <svg className="w-full h-full absolute inset-0" viewBox="0 0 600 240" fill="none">
            {/* Street paths */}
            <path
              d="M 50 120 Q 150 40, 260 120 T 450 110 T 550 140"
              stroke="#1e293b"
              strokeWidth="28"
              strokeLinecap="round"
            />
            {/* Center dashed road line */}
            <path
              d="M 50 120 Q 150 40, 260 120 T 450 110 T 550 140"
              stroke="#334155"
              strokeWidth="2"
              strokeDasharray="6 6"
              strokeLinecap="round"
            />
            {/* Traveled route (Bocardo cyan & lime glow) */}
            <path
              d="M 50 120 Q 150 40, 260 120 T 360 115"
              stroke="#0bdcfc"
              strokeWidth="6"
              strokeLinecap="round"
              className="drop-shadow-[0_0_8px_#0bdcfc]"
            />
          </svg>

          {/* Start: Restaurant Node */}
          <div className="absolute left-8 top-24 flex flex-col items-center z-10">
            <div className="w-9 h-9 rounded-full bg-slate-900 border-2 border-[#9efd21] text-white flex items-center justify-center shadow-lg text-xs font-bold">
              🍳
            </div>
            <span className="mt-1 text-[10px] font-bold text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded-md">
              Kitchen
            </span>
          </div>

          {/* Current Moving: Rider Node */}
          <div className="absolute left-1/2 top-20 -translate-x-6 flex flex-col items-center z-20 transition-all">
            <div className="relative">
              <span className="absolute -inset-1 rounded-full bg-[#0bdcfc] opacity-60 animate-ping" />
              <div className="relative w-11 h-11 rounded-full bg-[#0bdcfc] text-slate-950 flex items-center justify-center shadow-xl border-2 border-white">
                <Bike className="w-5 h-5 text-slate-950" />
              </div>
            </div>
            <span className="mt-1 text-[10px] font-black text-slate-950 bg-[#0bdcfc] px-2 py-0.5 rounded-md shadow-xs">
              Marco (e-Bike)
            </span>
          </div>

          {/* Destination: Customer Node */}
          <div className="absolute right-8 bottom-12 flex flex-col items-center z-10">
            <div className="w-9 h-9 rounded-full bg-[#9efd21] text-slate-950 flex items-center justify-center shadow-lg border-2 border-white font-black text-xs">
              <MapPin className="w-4 h-4 fill-slate-950" />
            </div>
            <span className="mt-1 text-[10px] font-bold text-white bg-slate-900/80 px-2 py-0.5 rounded-md">
              Your Door
            </span>
          </div>

          {/* Overlay RouteEngine Badge */}
          <div className="absolute top-3 left-4 bg-slate-900/90 backdrop-blur-xs text-[10px] font-semibold text-slate-300 px-2.5 py-1 rounded-full border border-slate-700 flex items-center gap-1.5">
            <Compass className="w-3 h-3 text-[#0bdcfc]" />
            <span>Bocardo RouteEngine™ Live GPS</span>
          </div>
        </div>

        {/* Stepper Progress */}
        <div className="p-5 bg-slate-50 border-b border-slate-100">
          <div className="grid grid-cols-4 gap-2">
            {steps.map((st, i) => {
              const isPast = i <= currentStep;
              const isCurr = i === currentStep;
              return (
                <div key={st.label} className="text-center space-y-1.5">
                  <div className="flex items-center">
                    <div
                      className={`w-full h-1.5 rounded-full ${
                        isPast ? "bg-[#0bdcfc]" : "bg-slate-200"
                      }`}
                    />
                  </div>
                  <div
                    className={`text-[11px] font-bold leading-tight ${
                      isCurr ? "text-[#0891b2]" : isPast ? "text-slate-800" : "text-slate-400"
                    }`}
                  >
                    {st.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Rider Profile Card & Action */}
        <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-black text-base text-slate-800 border border-slate-300">
              MV
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-black text-slate-900">Marco V.</span>
                <span className="text-xs font-bold text-amber-600 bg-amber-50 px-1.5 py-0.2 rounded-xs">
                  ★ 4.98
                </span>
              </div>
              <div className="text-xs text-slate-500">
                Eco e-Bike Rider • 1,840 deliveries • Verified
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => alert("Simulated: Calling rider Marco on encrypted proxy...")}
              className="p-2.5 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 transition-colors flex items-center gap-1.5 text-xs font-bold"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call</span>
            </button>

            <button
              type="button"
              onClick={() => alert("Simulated: Opening in-app rider chat...")}
              className="p-2.5 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 transition-colors flex items-center gap-1.5 text-xs font-bold"
            >
              <MessageSquare className="w-4 h-4 text-[#0891b2]" />
              <span>Message</span>
            </button>

            {/* Step Simulator for testing */}
            <button
              type="button"
              onClick={() => {
                setCurrentStep((prev) => (prev < 3 ? prev + 1 : 0));
              }}
              className="px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors flex items-center gap-1.5"
              title="Simulate Next Delivery Status"
            >
              <span>Next Status</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#0bdcfc]" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LiveTrackingModal;
