import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    app: "Bocardo Food Delivery",
    version: "1.0.1",
    auto_deploy: "cloudflare-git-verified",
    timestamp: new Date().toISOString(),
  });
}
