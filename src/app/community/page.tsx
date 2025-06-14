import MasonryGrid from "@/components/community/masonry-grid";
import React from "react";

export default async function page() {
  return (
    <main className="relative min-h-screen w-full pt-16 pb-28 px-4">
      <h1>Community</h1>

      <MasonryGrid />
    </main>
  );
}
