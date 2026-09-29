import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bocardo.in";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/health", "/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/health", "/api/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/restaurants/", "/food/", "/hero/", "/categories/", "/partners/", "/*.png", "/*.jpg", "/*.svg"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
