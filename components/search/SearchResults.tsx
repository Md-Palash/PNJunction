"use client";

import { Reveal } from "../Reveal";
import { ResultCard } from "./ResultCard";
import { SearchResult } from "./data";

export function SearchResults({
  results,
  query,
}: {
  results: SearchResult[];
  query: string;
}) {
  return (
    <section className="max-w-3xl mx-auto container-px" aria-label="Search results">
      <p className="text-sm text-ink-faint mb-5">
        {results.length} {results.length === 1 ? "result" : "results"}
        {query && (
          <>
            {" "}
            for <span className="text-navy font-medium">&ldquo;{query}&rdquo;</span>
          </>
        )}
      </p>

      <div className="space-y-4">
        {results.map((result, i) => (
          <Reveal key={result.id} delay={i * 0.05}>
            <ResultCard result={result} query={query} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
