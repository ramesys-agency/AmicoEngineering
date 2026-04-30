import Footer from "@/components/layout/Footer";
import GalleryGrid from "./components/GalleryGrid";

export default function GalleryPage() {
  return (
    <>
      <main className="grow w-full max-w-[1280px] mx-auto px-4 sm:px-10 py-10 md:py-16">
        <div className="mb-12">
          <h1 className="text-3xl font-extrabold text-slate-900  leading-tight tracking-tight">
            Product Gallery
          </h1>
          <p className="text-slate-500  mt-3 text-md max-w-3xl">
            Explore our comprehensive collection of precision engineering
            products, industrial machinery, and custom fabrication solutions.
          </p>
        </div>
        <GalleryGrid />
      </main>
      <Footer />
    </>
  );
}
