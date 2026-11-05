/**
 * Single source of truth for where the website sends people.
 *
 * Set the real store listing URLs via env vars (Cloudflare dashboard / wrangler vars):
 *   NEXT_PUBLIC_IOS_APP_URL      e.g. https://apps.apple.com/in/app/bocardo/id1234567890
 *   NEXT_PUBLIC_ANDROID_APP_URL  e.g. https://play.google.com/store/apps/details?id=in.bocardo.app
 *
 * Until then they fall back to a store search for "bocardo".
 */
export const IOS_APP_URL =
  process.env.NEXT_PUBLIC_IOS_APP_URL || "https://apps.apple.com/in/search?term=bocardo";

export const ANDROID_APP_URL =
  process.env.NEXT_PUBLIC_ANDROID_APP_URL ||
  "https://play.google.com/store/search?q=bocardo&c=apps";

/** Smart link: sends iOS → App Store, Android → Play Store, desktop → download section. */
export const SMART_APP_LINK = "/download";
