import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import Footer from "@/components/layout/Footer";
import ProductBreadcrumb from "./components/ProductBreadcrumb";
import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";
import ProductSpecs from "./components/ProductSpecs";
import ProductApplications from "./components/ProductApplications";
import RelatedProducts from "./components/RelatedProducts";

export async function generateStaticParams() {
  return products.map((product) => ({
    category: product.categoryId,
    id: product.id,
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const category = categories.find((c) => c.id === product.categoryId);

  // Get some related products (just picking a few others for now)
  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.categoryId === product.categoryId)
    .slice(0, 4);

  return (
    <>
      <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 sm:px-10 py-8">
        <ProductBreadcrumb
          productName={product.name}
          categoryId={product.categoryId}
          categoryName={category?.name || "Category"}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>

        {/* Lower Section: Specs & Apps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16">
          <ProductSpecs product={product} />
          <ProductApplications />
        </div>

        <RelatedProducts relatedProducts={relatedProducts} />
      </main>
      <Footer />
    </>
  );
}
