import { Clock, MapPinned, BadgePercent } from "lucide-react";

const FEATURES = [
  {
    icon: Clock,
    title: "20–30 minute delivery",
    text: "Orders go straight from the kitchen to your door, with no detours for other drops.",
  },
  {
    icon: MapPinned,
    title: "Live order tracking",
    text: "Follow your rider on the map in real time, from pickup to your doorstep.",
  },
  {
    icon: BadgePercent,
    title: "₹0 delivery with Pass",
    text: "Bocardo Pass members get free delivery on every order over ₹199.",
  },
];

export default function Features() {
  return (
    <section className="py-24 sm:py-32 bg-slate-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 max-w-3xl">
          Why people order with Bocardo
        </h2>

        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-white rounded-3xl p-10 lg:p-12">
              <span className="w-16 h-16 rounded-2xl bg-[#00C2E8]/10 flex items-center justify-center">
                <Icon className="w-8 h-8 text-[#0891b2]" />
              </span>
              <h3 className="mt-10 text-2xl font-black text-slate-950">{title}</h3>
              <p className="mt-4 text-base text-slate-500 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
