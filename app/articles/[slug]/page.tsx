import { ArticleNavbar } from "@/components/article/ArticleNavbar";
import { ReadingProgressBar } from "@/components/article/ReadingProgressBar";
import { ArticleHeader } from "@/components/article/ArticleHeader";
import { TableOfContents } from "@/components/article/TableOfContents";
import { ArticleContent } from "@/components/article/ArticleContent";
import { ShareSection } from "@/components/article/ShareSection";
import { AuthorCard } from "@/components/article/AuthorCard";
import { RelatedArticles } from "@/components/article/RelatedArticles";
import { ArticleNavigation } from "@/components/article/ArticleNavigation";
import { ArticleNewsletter } from "@/components/article/ArticleNewsletter";
import { Footer } from "@/components/Footer";

// This is the reusable template for every article on PNJunction.
// Content below is realistic placeholder copy for a single example article;
// in production this data would come from a CMS or MDX file per slug.

export default function ArticlePage() {
  return (
    <>
      <ReadingProgressBar />
      <ArticleNavbar />

      <main className="min-h-screen bg-background">
        <ArticleHeader />

        <div className="max-w-[1040px] mx-auto container-px mt-14 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          <TableOfContents />

          <article className="min-w-0 w-full max-w-[760px] mx-auto lg:mx-0">
            <ArticleContent />
            <div className="mt-10">
              <ShareSection />
            </div>
          </article>
        </div>

        <div className="max-w-[820px] mx-auto container-px mt-14 space-y-16">
          <AuthorCard />
          <RelatedArticles />
          <ArticleNavigation />
          <ArticleNewsletter />
        </div>

        <div className="mt-24">
          <Footer />
        </div>
      </main>
    </>
  );
}
