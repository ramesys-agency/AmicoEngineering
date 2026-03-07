import Link from "next/link";
import { Category } from "@/data/categories";
import Image from "next/image";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={category.href}
      className="group flex flex-col bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md rounded overflow-hidden"
    >
      <div className="h-56 bg-slate-200 relative overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          width={500}
          height={500}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <span className="material-symbols-outlined mb-2 text-3xl">
            {category.icon}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
          {category.name}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">
          {category.description}
        </p>
      </div>
    </Link>
  );
}
