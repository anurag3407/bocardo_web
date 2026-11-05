import Image from "next/image";
import { CATEGORIES } from "@/data/content";
import { SMART_APP_LINK } from "@/lib/appLinks";

export default function Categories() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950">
            What&apos;s on your mind?
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            Biryani at midnight or coffee at 8am, every craving is in the app.
          </p>
        </div>

        <ul className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-14 sm:gap-x-10 sm:gap-y-16">
          {CATEGORIES.map((cat) => (
            <li key={cat.name}>
              <a href={SMART_APP_LINK} className="group flex flex-col items-center text-center">
                <span className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-slate-50 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <span className="relative w-24 h-24 sm:w-28 sm:h-28">
                    <Image
                      src={cat.image}
                      alt={`${cat.name} delivery on Bocardo`}
                      fill
                      sizes="112px"
                      className="object-contain drop-shadow-md"
                    />
                  </span>
                </span>
                <span className="mt-5 text-lg font-bold text-slate-800 group-hover:text-slate-950">
                  {cat.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
