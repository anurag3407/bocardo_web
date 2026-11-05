import { NextResponse, type NextRequest } from "next/server";
import { ANDROID_APP_URL, IOS_APP_URL } from "@/lib/appLinks";

// Smart "get the app" link: phones go straight to their store, everyone else to the download section.
export function GET(request: NextRequest) {
  const ua = request.headers.get("user-agent") ?? "";

  if (/android/i.test(ua)) {
    return NextResponse.redirect(ANDROID_APP_URL, 302);
  }
  if (/iphone|ipad|ipod/i.test(ua) || (/macintosh/i.test(ua) && /mobile/i.test(ua))) {
    return NextResponse.redirect(IOS_APP_URL, 302);
  }
  return NextResponse.redirect(new URL("/#download", request.url), 302);
}
