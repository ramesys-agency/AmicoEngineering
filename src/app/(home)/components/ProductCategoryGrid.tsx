import Link from "next/link";
import { categories } from "@/data/inventory";
import CategoryCard from "@/components/ui/CategoryCard";

export default function ProductCategoryGrid() {
  return (
    <section className="py-24 bg-background-light dark:bg-slate-900 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6 text-center md:text-left">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
              Precision Engineered Solutions
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl">
              Industry-leading quality across all our manufacturing and engineering categories.
            </p>
          </div>
          <Link
            href="/products"
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-6 py-3 rounded-full text-slate-900 dark:text-white font-bold hover:border-primary hover:text-primary transition-all flex items-center gap-2 group shadow-sm"
          >
            Explore Full Range
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.slice(0, 4).map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
