"use client";

import React, { useState } from "react";
import { X, MapPin, Home, Briefcase, Plus, Check } from "lucide-react";
import { useApp } from "@/context/AppContext";

export const AddressModal: React.FC = () => {
  const {
    isAddressModalOpen,
    setIsAddressModalOpen,
    selectedAddress,
    setSelectedAddress,
    savedAddresses,
    showToast,
  } = useApp();

  const [customAddress, setCustomAddress] = useState("");

  if (!isAddressModalOpen) return null;

  const handleSelect = (addr: any) => {
    setSelectedAddress(addr);
    setIsAddressModalOpen(false);
    showToast(`Delivery location updated to ${addr.label}`);
  };

  const handleAddNew = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customAddress.trim()) return;
    const newAddr = {
      id: "custom-" + Date.now(),
      label: "Custom Address",
      address: customAddress,
      postcode: "W1 " + Math.floor(100 + Math.random() * 900),
      icon: "other" as const,
    };
    setSelectedAddress(newAddr);
    setIsAddressModalOpen(false);
    showToast(`📍 Set delivery address to ${customAddress}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 p-6">
        
        {/* Close */}
        <button
          type="button"
          onClick={() => setIsAddressModalOpen(false)}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center"
        >
          <X className="w-4 h-4" />
        </button>

        <h3 className="text-xl font-black text-slate-950 mb-1">Select Delivery Address</h3>
        <p className="text-xs text-slate-500 mb-5">
          Choose where you want your Bocardo order delivered
        </p>

        {/* Saved Addresses list */}
        <div className="space-y-2.5 mb-5">
          {savedAddresses.map((addr) => {
            const isSelected = selectedAddress.id === addr.id;
            return (
              <button
                key={addr.id}
                type="button"
                onClick={() => handleSelect(addr)}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-start justify-between gap-3 ${
                  isSelected
                    ? "border-[#0bdcfc] bg-[#0bdcfc]/10 shadow-xs"
                    : "border-slate-200 hover:border-slate-300 bg-white"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 flex-shrink-0 mt-0.5">
                    {addr.icon === "home" ? (
                      <Home className="w-4 h-4" />
                    ) : addr.icon === "work" ? (
                      <Briefcase className="w-4 h-4" />
                    ) : (
                      <MapPin className="w-4 h-4" />
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <span>{addr.label}</span>
                      <span className="text-[10px] text-slate-400 font-normal">
                        ({addr.postcode})
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 line-clamp-1">{addr.address}</div>
                  </div>
                </div>

                {isSelected && (
                  <div className="w-5 h-5 rounded-full bg-[#0bdcfc] text-slate-950 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Enter new address form */}
        <form onSubmit={handleAddNew} className="space-y-3 pt-3 border-t border-slate-100">
          <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">
            Or type a new street or postcode
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={customAddress}
              onChange={(e) => setCustomAddress(e.target.value)}
              placeholder="e.g. 10 Downing St, London"
              className="flex-1 px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 outline-none focus:border-[#0bdcfc]"
            />
            <button
              type="submit"
              className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors"
            >
              Set
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default AddressModal;
