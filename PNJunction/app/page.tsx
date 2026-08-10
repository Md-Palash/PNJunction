import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedCategories } from "@/components/FeaturedCategories";
import { LatestArticles } from "@/components/LatestArticles";
import { PopularTools } from "@/components/PopularTools";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturedCategories />
      <LatestArticles />
      <PopularTools />
      <Newsletter />
      <Footer />
    </main>
  );
}
