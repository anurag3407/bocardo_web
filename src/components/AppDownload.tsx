import Image from "next/image";
import { Check, MapPin, Search, Star, Clock } from "lucide-react";
import StoreButtons from "./StoreButtons";

const POINTS = [
  "Hundreds of restaurants, cafés and bakeries",
  "Live rider tracking on the map",
  "Secure payments with UPI, cards and wallets",
];

function PhoneMockup() {
  return (
    <div className="relative w-[280px] sm:w-[300px] h-[580px] sm:h-[610px] rounded-[52px] bg-slate-950 p-[10px] shadow-[0_40px_80px_-20px_rgba(8,145,178,0.45)]">
      <div className="relative w-full h-full rounded-[42px] overflow-hidden bg-white flex flex-col">
        <div className="absolute left-1/2 -translate-x-1/2 top-2.5 w-24 h-6 bg-slate-950 rounded-full z-10" />

        <div className="bg-[#00C2E8] text-white px-5 pt-12 pb-6">
          <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-white/80">
            <MapPin className="w-3.5 h-3.5" />
            Delivering to
          </div>
          <div className="text-base font-black mt-0.5">Indiranagar, Bengaluru</div>
          <div className="mt-5 bg-white rounded-2xl px-4 py-3 flex items-center gap-2.5 text-slate-400 text-sm">
            <Search className="w-4 h-4" />
            Search for biryani, pizza…
          </div>
        </div>

        <div className="px-5 pt-6 flex-1">
          <div className="text-sm font-black text-slate-950">What&apos;s on your mind?</div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              ["Biryani", "/hero/indian_feast_flank.png"],
              ["Pizza", "/categories/pizza_clean.png"],
              ["Burgers", "/hero/burger_flank.png"],
            ].map(([name, src]) => (
              <div key={name} className="flex flex-col items-center">
                <span className="relative w-14 h-14 rounded-full bg-slate-50">
                  <Image src={src} alt="" fill sizes="56px" className="object-contain p-1" />
                </span>
                <span className="mt-1.5 text-[11px] font-bold text-slate-700">{name}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
            <div className="relative h-28 bg-slate-100">
              <Image src="/restaurants/royal-spice.jpg" alt="" fill sizes="280px" className="object-cover" />
            </div>
            <div className="p-3.5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-slate-950">Royal Spice</span>
                <span className="inline-flex items-center gap-0.5 text-[11px] font-bold text-white bg-emerald-600 rounded-md px-1.5 py-0.5">
                  4.6 <Star className="w-2.5 h-2.5 fill-white" />
                </span>
              </div>
              <div className="mt-1 flex items-center gap-1 text-[11px] text-slate-500">
                <Clock className="w-3 h-3" /> 25 mins · Biryani, Mughlai
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AppDownload() {
  return (
    <section id="download" className="py-24 sm:py-32 bg-[#f0fbfd] scroll-mt-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-950 leading-[1.05]">
            Get the Bocardo app
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-slate-500 leading-relaxed max-w-lg">
            Everything happens in the app: browse, order, pay and track. It&apos;s free on iOS and Android.
          </p>

          <ul className="mt-10 space-y-5">
            {POINTS.map((point) => (
              <li key={point} className="flex items-center gap-4 text-lg text-slate-700">
                <span className="w-8 h-8 rounded-full bg-[#00C2E8] flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <StoreButtons className="mt-12" />
        </div>

        <div className="flex justify-center">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
