import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import Footer from "@/components/layout/Footer";
import CategoryBreadcrumb from "./components/CategoryBreadcrumb";
import CategoryHeader from "./components/CategoryHeader";
import CategoryGrid from "./components/CategoryGrid";
import CategoryPagination from "./components/CategoryPagination";
import CategoryCTA from "./components/CategoryCTA";

export async function generateStaticParams() {
  return categories.map((c) => ({
    category: c.id,
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const categoryData = categories.find((c) => c.id === category);

  if (!categoryData) {
    notFound();
  }

  const categoryProducts = products.filter((p) => p.categoryId === category);

  return (
    <>
      <main className="flex-1 flex flex-col items-center w-full">
        <CategoryBreadcrumb categoryName={categoryData.name} />

        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-10 py-10">
          <CategoryHeader
            categoryName={categoryData.name}
            productCount={categoryProducts.length}
          />
          <CategoryGrid products={categoryProducts} />
          <CategoryPagination />
        </div>

        <CategoryCTA />
      </main>
      <Footer />
    </>
  );
}
