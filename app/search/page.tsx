import { SearchNavbar } from "@/components/search/SearchNavbar";
import { SearchExperience } from "@/components/search/SearchExperience";
import { Footer } from "@/components/Footer";

export default function SearchPage() {
  return (
    <>
      <SearchNavbar />

      <main className="min-h-screen bg-background pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="max-w-container mx-auto container-px">
          <p className="text-center text-xs font-semibold text-ink-faint uppercase tracking-wide mb-4">
            Search PNJunction
          </p>
        </div>

        <SearchExperience />
      </main>

      <Footer />
    </>
  );
}
