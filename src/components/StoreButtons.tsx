import { ANDROID_APP_URL, IOS_APP_URL } from "@/lib/appLinks";

type Variant = "dark" | "light";

const base =
  "inline-flex items-center gap-3 rounded-2xl px-5 py-3 min-w-[180px] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-4";

const variants: Record<Variant, string> = {
  dark: "bg-slate-950 text-white hover:bg-slate-800 focus-visible:ring-slate-950/20",
  light: "bg-white text-slate-950 shadow-lg shadow-black/10 hover:bg-slate-50 focus-visible:ring-white/40",
};

function AppleIcon() {
  return (
    <svg aria-hidden="true" className="w-7 h-7 fill-current shrink-0" viewBox="0 0 24 24">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.84.94-2.91-1 .04-2.19.67-2.88 1.48-.59.68-1.12 1.77-.98 2.82 1.11.08 2.25-.59 2.92-1.39z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg aria-hidden="true" className="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24">
      <path d="M3.609 1.814L13.792 12 3.61 22.186c-.366-.341-.61-.83-.61-1.38V3.194c0-.55.244-1.039.61-1.38zM15.207 13.414l2.451 2.451-11.45 6.467 8.999-8.918zm0-2.828L6.208 1.668l11.45 6.467-2.451 2.451zm1.414 1.414l3.18-3.18c.677.387 1.199 1.054 1.199 1.766s-.522 1.379-1.199 1.766l-3.18-3.18z" />
    </svg>
  );
}

export default function StoreButtons({
  variant = "dark",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const cls = `${base} ${variants[variant]}`;
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      <a href={IOS_APP_URL} target="_blank" rel="noopener noreferrer" className={cls}>
        <AppleIcon />
        <span className="text-left leading-tight">
          <span className="block text-[11px] opacity-70">Download on the</span>
          <span className="block text-lg font-semibold -mt-0.5">App Store</span>
        </span>
      </a>
      <a href={ANDROID_APP_URL} target="_blank" rel="noopener noreferrer" className={cls}>
        <PlayIcon />
        <span className="text-left leading-tight">
          <span className="block text-[11px] opacity-70">Get it on</span>
          <span className="block text-lg font-semibold -mt-0.5">Google Play</span>
        </span>
      </a>
    </div>
  );
}
