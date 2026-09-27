"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { CheckCircle2 } from "lucide-react";

export const Toast: React.FC = () => {
  const { toast } = useApp();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-bounce-subtle pointer-events-none">
      <div className="bg-slate-900/95 text-white backdrop-blur-md px-5 py-3 rounded-full shadow-2xl border border-slate-700/80 flex items-center gap-3 text-xs sm:text-sm font-bold">
        <CheckCircle2 className="w-4 h-4 text-[#0bdcfc] flex-shrink-0" />
        <span>{toast}</span>
      </div>
    </div>
  );
};

export default Toast;
