"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Utensils, Bike, Building2 } from "lucide-react";
import { useApp } from "@/context/AppContext";

export const PartnerModal: React.FC = () => {
  const {
    isPartnerModalOpen,
    setIsPartnerModalOpen,
    partnerModalType,
    showToast,
  } = useApp();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isPartnerModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast("🎉 Partnership request submitted! An onboarding specialist will contact you in 24 hours.");
  };

  const titles = {
    restaurant: {
      title: "Partner with Bocardo as a Restaurant",
      subtitle: "Join our culinary platform and increase your deliveries by up to 40%.",
      icon: <Utensils className="w-5 h-5 text-[#0891b2]" />,
      inputLabel: "Restaurant / Brand Name",
    },
    rider: {
      title: "Become a Bocardo Rider",
      subtitle: "Flexible hours, competitive weekly payouts, and eco e-bike equipment provided.",
      icon: <Bike className="w-5 h-5 text-[#0891b2]" />,
      inputLabel: "Vehicle Type (e-Bike, Scooter, Bicycle)",
    },
    corporate: {
      title: "Bocardo Corporate Solutions",
      subtitle: "Streamline employee lunches, client meetings, and team catering.",
      icon: <Building2 className="w-5 h-5 text-[#0891b2]" />,
      inputLabel: "Company Name & Team Size",
    },
  }[partnerModalType];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={() => {
            setIsPartnerModalOpen(false);
            setSubmitted(false);
          }}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black text-slate-900">Application Received</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
              Thank you for expressing interest in Bocardo. Our regional partnership director will reach out within 24 business hours to finalize your onboarding.
            </p>
            <button
              type="button"
              onClick={() => {
                setIsPartnerModalOpen(false);
                setSubmitted(false);
              }}
              className="px-6 py-2.5 rounded-xl bg-[#0bdcfc] text-slate-950 font-bold text-xs"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0bdcfc]/20 flex items-center justify-center">
                {titles.icon}
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 leading-tight">
                  {titles.title}
                </h3>
                <p className="text-xs text-slate-500">{titles.subtitle}</p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 outline-none focus:border-[#0bdcfc]"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                  {titles.inputLabel}
                </label>
                <input
                  required
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Details"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 outline-none focus:border-[#0bdcfc]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                    Work Email
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 outline-none focus:border-[#0bdcfc]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+44 7000 000000"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 outline-none focus:border-[#0bdcfc]"
                  />
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#0bdcfc] hover:bg-[#00caeb] text-slate-950 font-black text-xs shadow-md transition-all active:scale-95"
              >
                Submit Application
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};

export default PartnerModal;
