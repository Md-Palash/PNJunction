import { ToolsNavbar } from "@/components/tools/ToolsNavbar";
import { ToolsHero } from "@/components/tools/ToolsHero";
import { FeaturedTools } from "@/components/tools/FeaturedTools";
import { BrowseByCategory } from "@/components/tools/BrowseByCategory";
import { PopularTools } from "@/components/tools/PopularTools";
import { NewestTools } from "@/components/tools/NewestTools";
import { SuggestedCollections } from "@/components/tools/SuggestedCollections";
import { FAQ } from "@/components/tools/FAQ";
import { ToolsNewsletter } from "@/components/tools/ToolsNewsletter";
import { Footer } from "@/components/Footer";

export default function ToolsHubPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <ToolsNavbar />
      <ToolsHero />
      <FeaturedTools />
      <BrowseByCategory />
      <PopularTools />
      <NewestTools />
      <SuggestedCollections />
      <FAQ />
      <ToolsNewsletter />
      <Footer />
    </main>
  );
}
