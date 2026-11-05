import { Plus } from "lucide-react";
import { FAQS } from "@/data/content";

export default function Faq() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 text-center">
          Questions? Answers.
        </h2>

        <div className="mt-16 divide-y divide-slate-200 border-y border-slate-200">
          {FAQS.map((faq) => (
            <details key={faq.q} className="group py-7">
              <summary className="flex items-center justify-between gap-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="text-lg sm:text-xl font-bold text-slate-950">{faq.q}</span>
                <Plus className="w-6 h-6 text-slate-400 shrink-0 transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <p className="mt-4 text-base sm:text-lg text-slate-500 leading-relaxed pr-10">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
