"use client";

import { useMemo, useState } from "react";
import { SearchBar } from "./SearchBar";
import { QuickFilters } from "./QuickFilters";
import { PopularSearches } from "./PopularSearches";
import { RecentSearches } from "./RecentSearches";
import { SearchResults } from "./SearchResults";
import { SearchEmptyState } from "./SearchEmptyState";
import {
  searchIndex,
  matchesQuery,
  matchesFilter,
  QuickFilter,
} from "./data";

export function SearchExperience() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<QuickFilter>("All");

  const isBrowsing = query.trim().length === 0;

  const results = useMemo(
    () =>
      searchIndex.filter(
        (r) => matchesQuery(r, query) && matchesFilter(r, filter)
      ),
    [query, filter]
  );

  return (
    <div className="space-y-14">
      <SearchBar query={query} onQueryChange={setQuery} />

      <QuickFilters active={filter} onChange={setFilter} />

      {isBrowsing ? (
        <>
          <PopularSearches onSelect={setQuery} />
          <RecentSearches onSelect={setQuery} />
        </>
      ) : results.length > 0 ? (
        <SearchResults results={results} query={query} />
      ) : (
        <SearchEmptyState query={query} onClear={() => setQuery("")} />
      )}
    </div>
  );
}
