import BocardoLogo from "./BocardoLogo";
import StoreButtons from "./StoreButtons";
import { CITIES } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-24 pb-32 sm:pb-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 pb-16 border-b border-slate-800">
          <div className="max-w-md">
            <BocardoLogo size={44} textColor="text-white" />
            <p className="mt-6 text-base leading-relaxed">
              Food from India&apos;s favourite restaurants, delivered fast. Download the app to start ordering.
            </p>
          </div>
          <StoreButtons variant="light" />
        </div>

        <div className="py-14 border-b border-slate-800">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">Delivering in</h3>
          <p className="mt-5 text-base leading-loose">{CITIES.join("  ·  ")}</p>
        </div>

        <p className="pt-10 text-sm text-slate-500">
          © {new Date().getFullYear()} Bocardo Technologies India Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
