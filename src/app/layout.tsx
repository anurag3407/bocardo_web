import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bocardo.in";

export const viewport: Viewport = {
  themeColor: "#00C2E8",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Bocardo | Order Food Online & Restaurant Delivery in India",
    template: "%s | Bocardo Food Delivery",
  },
  description:
    "Order food online from the best restaurants and artisan bakeries near you. Lightning-fast 20-30 min delivery across Bengaluru, Mumbai, Delhi NCR, Hyderabad & more. Real-time GPS tracking & ₹0 delivery fee on Bocardo Pass.",
  applicationName: "Bocardo",
  authors: [
    {
      name: "Bocardo Technologies India Pvt. Ltd.",
      url: baseUrl,
    },
  ],
  generator: "Next.js",
  keywords: [
    "online food delivery",
    "order food online",
    "food delivery near me",
    "food delivery India",
    "biryani delivery",
    "pizza delivery near me",
    "gourmet burger delivery",
    "sushi delivery online",
    "bakery delivery",
    "fast food delivery in minutes",
    "late night food delivery",
    "Bocardo",
    "Bocardo app",
    "Bocardo food delivery",
    "Bengaluru food delivery",
    "Mumbai food delivery",
    "Delhi NCR food delivery",
    "Hyderabad food delivery",
    "zero delivery fee app",
    "Bocardo Pass",
    "RouteEngine GPS tracking",
  ],
  creator: "Bocardo Technologies India Pvt. Ltd.",
  publisher: "Bocardo Technologies India Pvt. Ltd.",
  category: "Food & Drink",
  classification: "Online Food Delivery Platform",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "en-US": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["en_US"],
    url: baseUrl,
    siteName: "Bocardo",
    title: "Bocardo | Order Food Online & Restaurant Delivery in India",
    description:
      "Discover the best local restaurants and artisan bakeries delivered piping hot in under 30 minutes with live GPS route tracking.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bocardo - Lightning-Fast Food Delivery in India",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bocardo | Order Food Online & Restaurant Delivery in India",
    description:
      "Piping hot biryanis, wood-fired pizzas, gourmet burgers & daily bakery treats delivered in minutes. Live route tracking with RouteEngine™.",
    site: "@bocardo_in",
    creator: "@bocardo_in",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/logo-circle.png", sizes: "244x244", type: "image/png" },
    ],
    apple: [
      { url: "/logo-circle.png", sizes: "244x244", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
