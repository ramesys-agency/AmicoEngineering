"use client";

import { useState } from "react";
import Footer from "@/components/layout/Footer";
import GalleryHeader from "./components/GalleryHeader";
import GalleryFilterBar from "./components/GalleryFilterBar";
import GalleryGrid from "./components/GalleryGrid";
import GalleryPagination from "./components/GalleryPagination";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  return (
    <>
      <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 sm:px-10 py-10 md:py-16">
        <GalleryHeader />
        <GalleryFilterBar
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        <GalleryGrid activeFilter={activeFilter} />
        <GalleryPagination />
      </main>
      <Footer />
    </>
  );
}
