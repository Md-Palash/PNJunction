import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TopicsSection from "@/components/TopicsSection";
import LatestSection from "@/components/LatestSection";
import ToolsSection from "@/components/ToolsSection";
import StartHere from "@/components/StartHere";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TopicsSection />
        <LatestSection />
        <ToolsSection />
        <StartHere />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
