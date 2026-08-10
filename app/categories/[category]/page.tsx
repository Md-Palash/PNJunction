import { CategoryNavbar } from "@/components/category/CategoryNavbar";
import { CategoryHero } from "@/components/category/CategoryHero";
import { FeaturedArticle } from "@/components/category/FeaturedArticle";
import { CategoryBrowser } from "@/components/category/CategoryBrowser";
import { TrendingTopics } from "@/components/category/TrendingTopics";
import { PopularTags } from "@/components/category/PopularTags";
import { CategoryNewsletter } from "@/components/category/CategoryNewsletter";
import { Footer } from "@/components/Footer";

// Reusable template for every category on PNJunction (Windows shown as the
// example). Swap CategoryHero's copy and the `data.ts` mock array per
// category — or, later, feed both from a CMS/route param — without
// touching this composition.

export default function CategoryPage() {
  return (
    <>
      <CategoryNavbar active="Windows" />

      <main className="min-h-screen bg-background">
        <CategoryHero />
        <FeaturedArticle />

        <div className="max-w-container mx-auto container-px py-10 md:py-14">
          <CategoryBrowser />
        </div>

        <TrendingTopics />
        <PopularTags />
        <CategoryNewsletter />
      </main>

      <Footer />
    </>
  );
}
