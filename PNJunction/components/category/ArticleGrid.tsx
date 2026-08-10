"use client";

import { Reveal } from "../Reveal";
import { ArticleCard } from "./ArticleCard";
import { CategoryArticle } from "./data";

export function ArticleGrid({ articles }: { articles: CategoryArticle[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {articles.map((article, i) => (
        <Reveal key={article.id} delay={(i % 3) * 0.06}>
          <ArticleCard article={article} />
        </Reveal>
      ))}
    </div>
  );
}
