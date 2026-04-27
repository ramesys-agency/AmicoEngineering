import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/inventory";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function CategoriesGrid() {
  return (
    <div id="categories" className="w-full max-w-[1280px] px-4 sm:px-10 py-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <h2 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight tracking-tight">
            Our Product Range
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Explore our comprehensive bulk material handling solutions.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            id={category.id}
            className="group flex flex-col bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300 h-full"
          >
            <div className="relative w-full aspect-video overflow-hidden bg-slate-100">
              <Image
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={category.image}
                width={800}
                height={450}
              />
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-300"></div>
              <div className="absolute top-4 left-4 size-10 rounded bg-white/90 backdrop-blur flex items-center justify-center text-primary shadow-sm">
                <span className="material-symbols-outlined">
                  {category.icon}
                </span>
              </div>
            </div>
            <div className="p-6 grow flex flex-col">
              <h3 className="text-slate-900 dark:text-white text-xl font-extrabold mb-3 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                {category.description}
              </p>

              <div className="space-y-2 mb-6 grow">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  Key Products
                </p>
                <ul className="grid grid-cols-1 gap-2">
                  {category.products.slice(0, 6).map((product) => (
                    <li
                      key={product.id}
                      className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"
                    >
                      <span className="size-1.5 rounded-full bg-primary/40"></span>
                      {product.name}
                    </li>
                  ))}
                  {category.products.length > 6 && (
                    <li className="text-xs text-slate-400 italic">
                      + {category.products.length - 6} more products
                    </li>
                  )}
                </ul>
              </div>

              <PrimaryButton href={category.href} className="w-full">
                Inquire Now
              </PrimaryButton>
            </div>
          </div>
        ))}

        {/* Call to Action Card (Last item in grid) */}
        <div className="flex flex-col bg-primary/5 dark:bg-slate-800/50 rounded-lg border-2 border-dashed border-primary/30 items-center justify-center p-8 text-center h-full">
          <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
            <span className="material-symbols-outlined text-3xl">
              add_circle
            </span>
          </div>
          <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-2">
            Custom Solution?
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
            Don&apos;t see what you need? Our engineering team builds custom
            solutions for unique requirements.
          </p>
          <Link
            className="flex items-center justify-center rounded h-10 px-6 bg-white border border-slate-200 text-slate-700 hover:text-primary hover:border-primary font-bold text-sm transition-colors shadow-sm"
            href="/contact"
          >
            Contact Engineering
          </Link>
        </div>
      </div>
    </div>
  );
}
