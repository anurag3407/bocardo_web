import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    app: "Bocardo Food Delivery",
    timestamp: new Date().toISOString(),
  });
}
