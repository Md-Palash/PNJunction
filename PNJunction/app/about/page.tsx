import { AboutNavbar } from "@/components/about/AboutNavbar";
import { AboutHero } from "@/components/about/AboutHero";
import { Mission } from "@/components/about/Mission";
import { WhatWeCover } from "@/components/about/WhatWeCover";
import { WhyTrust } from "@/components/about/WhyTrust";
import { OurValues } from "@/components/about/OurValues";
import { Roadmap } from "@/components/about/Roadmap";
import { AboutFAQ } from "@/components/about/AboutFAQ";
import { AboutNewsletter } from "@/components/about/AboutNewsletter";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <AboutNavbar />
      <AboutHero />
      <Mission />
      <WhatWeCover />
      <WhyTrust />
      <OurValues />
      <Roadmap />
      <AboutFAQ />
      <AboutNewsletter />
      <Footer />
    </main>
  );
}
