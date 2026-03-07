import Link from "next/link";
import { categories } from "@/data/categories";
import CategoryCard from "@/components/ui/CategoryCard";

export default function ProductCategoryGrid() {
  return (
    <section className="py-20 bg-background-light dark:bg-slate-900">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Our Product Range
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Comprehensive solutions for every stage of production.
            </p>
          </div>
          <Link
            href="/products"
            className="text-primary font-bold hover:text-primary-dark flex items-center gap-1 group"
          >
            View All Categories
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_right_alt
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
