import { Fragment } from "react";

/**
 * Splits `text` around the first case-insensitive match of `query` and
 * wraps the match in a highlighted <mark>. Pure UI helper — no search
 * logic lives here, just presentation for whatever a real search service
 * returns later.
 */
export function highlightMatch(text: string, query: string) {
  const q = query.trim();
  if (!q) return <>{text}</>;

  const index = text.toLowerCase().indexOf(q.toLowerCase());
  if (index === -1) return <>{text}</>;

  const before = text.slice(0, index);
  const match = text.slice(index, index + q.length);
  const after = text.slice(index + q.length);

  return (
    <Fragment>
      {before}
      <mark className="bg-accent-soft text-accent font-semibold rounded-sm px-0.5">
        {match}
      </mark>
      {after}
    </Fragment>
  );
}
