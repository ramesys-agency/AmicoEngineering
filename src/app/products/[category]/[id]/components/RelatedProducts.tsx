import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";

export default function RelatedProducts({
  relatedProducts,
}: {
  relatedProducts: any[];
}) {
  return (
    <div className="mt-20 mb-12 border-t border-slate-200 dark:border-slate-800 pt-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Related Products
        </h2>
        <Link
          className="text-primary font-medium text-sm hover:underline"
          href="/products"
        >
          View All Products
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((rp) => (
          <ProductCard key={rp.id} product={rp} />
        ))}
      </div>
    </div>
  );
}
