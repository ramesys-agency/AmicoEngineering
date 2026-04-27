import Link from "next/link";
import { Product } from "@/data/products";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <div className="aspect-16/10 relative bg-white overflow-hidden">
        <Image
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={product.image}
          width={1000}
          height={1000}
        />
        {product.tag && (
          <div
            className={`absolute top-4 left-4 text-white text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg ${product.tagColor || "bg-primary"}`}
          >
            {product.tag}
          </div>
        )}
        <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-900 dark:text-white text-[10px] font-bold px-3 py-1.5 rounded-lg border border-white/20 uppercase tracking-wider">
          {product.sku}
        </div>
      </div>
      <div className="p-8 flex flex-col grow">
        <div className="mb-4">
          <span className="text-[11px] font-bold text-primary uppercase tracking-widest mb-1 block">
            {product.series}
          </span>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors leading-tight">
            {product.name}
          </h3>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-auto flex flex-col gap-4">
          <div className="flex items-center gap-6 text-xs font-semibold text-slate-600 dark:text-slate-400 pb-4 border-b border-slate-100 dark:border-slate-800">
            {product.specs.map((spec, index) => (
              <div key={index} className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-primary/60">
                  {spec.icon}
                </span>{" "}
                {spec.label}
              </div>
            ))}
          </div>
          <PrimaryButton
            href={`/products/${product.categoryId}/${product.id}`}
            className="w-full"
          >
            View Technical Specifications
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
