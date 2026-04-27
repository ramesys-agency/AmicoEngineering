import Link from "next/link";
import { Category } from "@/data/categories";
import Image from "next/image";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={category.href}
      className="group flex flex-col bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary transition-all duration-500 shadow-sm hover:shadow-xl rounded-xl overflow-hidden"
    >
      <div className="h-48 bg-white relative overflow-hidden">
        <Image
          src={category.image || "/placeholder-product.png"}
          alt={category.name}
          width={500}
          height={500}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-500"></div>
        <div className="absolute top-4 left-4 size-10 rounded bg-white/90 backdrop-blur-md flex items-center justify-center text-primary shadow-sm">
          <span className="material-symbols-outlined text-2xl">
            {category.icon}
          </span>
        </div>
      </div>
      <div className="p-6 grow flex flex-col">
        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
          {category.name}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 mb-4 grow">
          {category.description}
        </p>
        <div className="flex items-center text-primary text-xs font-black uppercase tracking-widest">
          View Details
          <span className="material-symbols-outlined text-sm ml-1 group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </div>
      </div>
    </Link>
  );
}
