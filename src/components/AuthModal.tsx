"use client";

import React, { useState } from "react";
import { X, Lock, Mail, User as UserIcon, Phone, CheckCircle2 } from "lucide-react";
import { useApp } from "@/context/AppContext";
import BocardoLogo from "./BocardoLogo";

export const AuthModal: React.FC = () => {
  const {
    isAuthModalOpen,
    setIsAuthModalOpen,
    authMode,
    setAuthMode,
    setUser,
    showToast,
  } = useApp();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({
      name: name || email.split("@")[0] || "Foodie Explorer",
      email: email || "user@bocardo.co.uk",
      phone: phone || "+44 7123 456789",
    });
    setIsAuthModalOpen(false);
    showToast(`Welcome back, ${name || "Foodie"}! Signed in to Bocardo.`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsAuthModalOpen(false)}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center mb-6 space-y-2">
          <div className="flex justify-center mb-2">
            <BocardoLogo size={36} showText={false} />
          </div>
          <h3 className="text-2xl font-black text-slate-950 tracking-tight">
            {authMode === "login" ? "Welcome back" : "Create an account"}
          </h3>
          <p className="text-xs text-slate-500">
            {authMode === "login"
              ? "Sign in to access your saved addresses & order history"
              : "Register to unlock exclusive Bocardo deals & fast checkout"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          {authMode === "signup" && (
            <div>
              <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                Your Name
              </label>
              <div className="relative">
                <UserIcon className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Maya Chen"
                  className="w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 outline-none focus:border-[#0bdcfc]"
                />
              </div>
            </div>
          )}

          <div>
            <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 outline-none focus:border-[#0bdcfc]"
              />
            </div>
          </div>

          <div>
            <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+44 7123 456789"
                className="w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 outline-none focus:border-[#0bdcfc]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[#0bdcfc] hover:bg-[#00caeb] text-slate-950 font-black text-xs shadow-md transition-all active:scale-95 mt-2"
          >
            {authMode === "login" ? "Continue to Bocardo" : "Sign Up & Get 50% Off"}
          </button>
        </form>

        <div className="mt-5 text-center text-xs text-slate-500">
          {authMode === "login" ? (
            <span>
              Don&apos;t have an account?{" "}
              <button
                type="button"
                onClick={() => setAuthMode("signup")}
                className="font-bold text-[#0891b2] hover:underline"
              >
                Sign up
              </button>
            </span>
          ) : (
            <span>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setAuthMode("login")}
                className="font-bold text-[#0891b2] hover:underline"
              >
                Log in
              </button>
            </span>
          )}
        </div>

      </div>
    </div>
  );
};

export default AuthModal;
