import React from "react";
import { FAQS, RESTAURANTS } from "@/data/mockData";

export default function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bocardo.in";

  // 1. WebSite Schema with Sitelinks SearchBox
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "url": baseUrl,
    "name": "Bocardo",
    "alternateName": [
      "Bocardo Food Delivery",
      "Bocardo India",
      "Bocardo Food Delivery & Bakeries",
    ],
    "description":
      "Online food and bakery delivery platform in India with live GPS RouteEngine™ tracking.",
    "publisher": {
      "@id": `${baseUrl}/#organization`,
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    "inLanguage": "en-IN",
  };

  // 2. Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": "Bocardo Technologies India Pvt. Ltd.",
    "alternateName": "Bocardo",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/logo.png`,
      "width": 244,
      "height": 244,
      "caption": "Bocardo Food Delivery Logo",
    },
    "image": `${baseUrl}/og-image.png`,
    "description":
      "Bocardo delivers fresh food, artisan baked goods, and chef-crafted meals from top local kitchens and restaurants in minutes.",
    "foundingLocation": {
      "@type": "Place",
      "name": "Bengaluru, Karnataka, India",
    },
    "areaServed": [
      { "@type": "City", "name": "Bengaluru" },
      { "@type": "City", "name": "Mumbai" },
      { "@type": "City", "name": "Delhi NCR" },
      { "@type": "City", "name": "Hyderabad" },
      { "@type": "City", "name": "Pune" },
      { "@type": "City", "name": "Chennai" },
      { "@type": "City", "name": "Kolkata" },
      { "@type": "City", "name": "Ahmedabad" },
      { "@type": "City", "name": "Jaipur" },
      { "@type": "City", "name": "Chandigarh" },
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-800-BOCARDO",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"],
        "hoursAvailable": "Mo-Su 00:00-24:00",
      },
    ],
    "sameAs": [
      "https://twitter.com/bocardo_in",
      "https://instagram.com/bocardo.in",
      "https://linkedin.com/company/bocardo",
    ],
  };

  // 3. Delivery Service Schema
  const deliveryServiceSchema = {
    "@context": "https://schema.org",
    "@type": "DeliveryService",
    "@id": `${baseUrl}/#service`,
    "name": "Bocardo Express Food Delivery",
    "serviceType": "On-demand Food Delivery",
    "provider": {
      "@id": `${baseUrl}/#organization`,
    },
    "areaServed": "India",
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      "opens": "07:00",
      "closes": "03:00",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Bocardo Food Catalog",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Hyderabadi Dum Biryani & Kebabs",
        },
        {
          "@type": "OfferCatalog",
          "name": "Wood-fired Artisan Pizzas",
        },
        {
          "@type": "OfferCatalog",
          "name": "Gourmet Smash Burgers",
        },
        {
          "@type": "OfferCatalog",
          "name": "Fresh Sushi & Ramen Bowls",
        },
        {
          "@type": "OfferCatalog",
          "name": "Artisanal Bakeries & French Pastries",
        },
      ],
    },
  };

  // 4. FAQPage Schema (Rich Snippets in Google SERP)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  // 5. ItemList Schema for All Restaurants (Rich star rating and card snippets)
  const restaurantListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "All Restaurants on Bocardo",
    "description":
      "Explore curated restaurants and artisan kitchens delivering in your city.",
    "itemListElement": RESTAURANTS.map((restaurant, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Restaurant",
        "name": restaurant.name,
        "image": `${baseUrl}${restaurant.image}`,
        "description": restaurant.tagline,
        "servesCuisine": restaurant.cuisines,
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": restaurant.address,
          "addressCountry": "IN",
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": restaurant.rating.toString(),
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": restaurant.reviewCount.toString(),
        },
      },
    })),
  };

  // 6. SoftwareApplication Schema for Bocardo Mobile Apps
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Bocardo: Food Delivery & Restaurants",
    "operatingSystem": "iOS, Android",
    "applicationCategory": "FoodAndDrinkApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "14800",
    },
  };

  // 7. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Food Delivery",
        "item": `${baseUrl}/#restaurants-section`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "All Restaurants",
        "item": `${baseUrl}/#restaurants-section`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(deliveryServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
