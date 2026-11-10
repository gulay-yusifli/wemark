"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="container error-state">
      <h1>Content could not be loaded</h1>
      <p>The data service is not responding. Please try again.</p>
      <button className="btn" onClick={reset}>Try again</button>
    </main>
  );
}
