import Image from "next/image";
import Link from "next/link";
import { Smartphone } from "lucide-react";
import StoreButtons from "./StoreButtons";
import { SMART_APP_LINK } from "@/lib/appLinks";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#00C2E8] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.18),transparent_65%)] pointer-events-none" />

      {/* Header */}
      <header className="relative z-30 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 sm:h-24">
          <Link href="/" className="flex items-center gap-3" aria-label="Bocardo home">
            <span className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center p-1 overflow-hidden">
              <Image src="/logo-circle.png" alt="" width={44} height={44} className="object-contain" preload />
            </span>
            <span className="flex items-center gap-1.5">
              <span className="font-black text-2xl tracking-tight">bocardo</span>
              <span className="w-2 h-2 rounded-full bg-[#facc15]" />
            </span>
          </Link>

          <a
            href="#download"
            className="hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950 text-white font-bold text-sm hover:bg-slate-800 transition-colors"
          >
            <Smartphone className="w-4 h-4" />
            Get the app
          </a>
          <a
            href={SMART_APP_LINK}
            className="sm:hidden inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-950 text-white font-bold text-sm"
          >
            <Smartphone className="w-4 h-4" />
            Get app
          </a>
        </div>
      </header>

      {/* Flanking food visuals */}
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/3 w-64 xl:w-80 pointer-events-none z-10">
        <Image
          src="/hero/salad_bowl_flank.png"
          alt=""
          width={360}
          height={480}
          className="object-contain drop-shadow-[0_24px_45px_rgba(0,0,0,0.28)]"
          preload
        />
      </div>
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/3 w-64 xl:w-80 pointer-events-none z-10">
        <Image
          src="/hero/pizza_board_flank.png"
          alt=""
          width={360}
          height={480}
          className="object-contain drop-shadow-[0_24px_45px_rgba(0,0,0,0.28)]"
          preload
        />
      </div>

      {/* Main content */}
      <div className="relative z-20 max-w-4xl mx-auto px-5 sm:px-8 text-center pt-16 pb-28 sm:pt-24 sm:pb-36 lg:pt-28 lg:pb-44">
        <p className="inline-block mb-8 px-4 py-1.5 rounded-full bg-white/15 text-sm font-semibold tracking-wide">
          Fast delivery across India
        </p>

        <h1 className="text-[2.6rem] leading-[1.08] sm:text-6xl lg:text-7xl font-black tracking-tight">
          Hungry?
          <br />
          Your next meal is
          <br className="hidden sm:block" />{" "}
          <span className="relative inline-block">
            one tap away.
            <svg
              aria-hidden="true"
              className="absolute -bottom-3 left-0 w-full overflow-visible"
              height="14"
              viewBox="0 0 240 14"
              fill="none"
              preserveAspectRatio="none"
            >
              <path d="M3 10C55 3 175 2 237 9" stroke="#facc15" strokeWidth="5" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        <p className="mt-10 text-lg sm:text-xl text-white/90 max-w-xl mx-auto leading-relaxed">
          Order from the best restaurants near you on the Bocardo app. Live tracking, 20–30 minute delivery.
        </p>

        <StoreButtons variant="light" className="mt-12 justify-center" />
      </div>
    </section>
  );
}
