import React from "react";
import Image from "next/image";

interface BocardoLogoProps {
  size?: number;
  showText?: boolean;
  textColor?: string;
  className?: string;
  badgeText?: string;
}

export const BocardoLogo: React.FC<BocardoLogoProps> = ({
  size = 40,
  showText = true,
  textColor = "text-slate-900",
  className = "",
  badgeText,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div
        className="relative rounded-full shadow-xs ring-1 ring-black/5 flex-shrink-0 overflow-hidden bg-[#0bdcfc] flex items-center justify-center transition-transform hover:scale-105"
        style={{ width: size, height: size }}
      >
        <Image
          src="/logo-circle.png"
          alt="Bocardo Logo"
          width={size}
          height={size}
          className="object-contain w-full h-full"
          priority
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-black tracking-tight text-xl leading-none ${textColor}`}
              style={{ letterSpacing: "-0.03em" }}
            >
              bocardo
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0bdcfc]" />
            {badgeText && (
              <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-[#0bdcfc]/15 text-[#0891b2]">
                {badgeText}
              </span>
            )}
          </div>
          <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400">
            Food & Grocery
          </span>
        </div>
      )}
    </div>
  );
};

export default BocardoLogo;
