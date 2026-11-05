import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Features from "@/components/Features";
import AppDownload from "@/components/AppDownload";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import MobileAppBar from "@/components/MobileAppBar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        <Hero />
        <Categories />
        <Features />
        <AppDownload />
        <Faq />
      </main>
      <Footer />
      <MobileAppBar />
    </div>
  );
}
