import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bocardo - Food, Groceries & Bakeries Delivered",
    short_name: "Bocardo",
    description:
      "Order food online from the best restaurants, bakeries & supermarkets near you. Fast delivery in Bengaluru, Mumbai, Delhi NCR with live GPS tracking.",
    start_url: "/",
    display: "standalone",
    background_color: "#00C2E8",
    theme_color: "#00C2E8",
    orientation: "portrait",
    categories: ["food", "shopping", "lifestyle"],
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo-circle.png",
        sizes: "244x244",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
