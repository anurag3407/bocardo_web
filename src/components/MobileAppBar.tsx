import Image from "next/image";
import { SMART_APP_LINK } from "@/lib/appLinks";

/** Sticky "open in app" bar shown only on phones, like Zomato/Swiggy mobile web. */
export default function MobileAppBar() {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t border-slate-200 px-5 py-3.5 flex items-center gap-3 shadow-[0_-8px_24px_rgba(0,0,0,0.06)]">
      <span className="w-10 h-10 rounded-xl bg-[#00C2E8] flex items-center justify-center p-1 shrink-0">
        <Image src="/logo-circle.png" alt="" width={32} height={32} className="object-contain" />
      </span>
      <span className="flex-1 min-w-0 leading-tight">
        <span className="block text-sm font-black text-slate-950">Bocardo</span>
        <span className="block text-xs text-slate-500 truncate">Order food in the app</span>
      </span>
      <a
        href={SMART_APP_LINK}
        className="px-5 py-2.5 rounded-full bg-[#00C2E8] text-white text-sm font-bold"
      >
        Open app
      </a>
    </div>
  );
}
