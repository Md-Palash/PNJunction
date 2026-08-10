import { ToolPageNavbar } from "@/components/tool/ToolPageNavbar";
import { ToolHeader } from "@/components/tool/ToolHeader";
import { InteractiveToolArea } from "@/components/tool/InteractiveToolArea";
import { HowToUse } from "@/components/tool/HowToUse";
import { Features } from "@/components/tool/Features";
import { ToolFAQ } from "@/components/tool/ToolFAQ";
import { RelatedArticles } from "@/components/tool/RelatedArticles";
import { RelatedTools } from "@/components/tool/RelatedTools";
import { ToolNewsletter } from "@/components/tool/ToolNewsletter";
import { Footer } from "@/components/Footer";

// Reusable template for every tool on PNJunction (QR Generator shown as the
// example). Swap ToolHeader's copy/icon and InteractiveToolArea's fields
// per tool — or later drive both from a route param + config map — without
// touching this composition or any section below it.

export default function ToolPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <ToolPageNavbar />
      <ToolHeader />
      <InteractiveToolArea />
      <HowToUse />
      <Features />
      <ToolFAQ />
      <RelatedArticles />
      <RelatedTools />
      <ToolNewsletter />
      <Footer />
    </main>
  );
}
