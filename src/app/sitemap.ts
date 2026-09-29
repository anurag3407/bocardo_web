import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bocardo.in";
  const now = new Date();

  const categories = [
    "biryani",
    "pizza",
    "burgers",
    "sushi",
    "dessert",
    "pasta",
    "tacos",
    "salad",
    "noodles",
    "coffee",
  ];

  const categoryEntries = categories.map((cat) => ({
    url: `${baseUrl}/?category=${cat}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.85,
  }));

  const citySlugs = [
    "bengaluru",
    "mumbai",
    "delhi-ncr",
    "hyderabad",
    "pune",
    "chennai",
    "kolkata",
    "ahmedabad",
    "jaipur",
    "chandigarh",
    "lucknow",
    "kochi",
  ];

  const cityEntries = citySlugs.map((city) => ({
    url: `${baseUrl}/?city=${city}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...categoryEntries,
    ...cityEntries,
  ];
}
