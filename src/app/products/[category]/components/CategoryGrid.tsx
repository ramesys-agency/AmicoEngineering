import Image from "next/image";
import { Product } from "@/data/products";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function CategoryGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="py-20 text-center text-slate-500 ">
        No products found in this category.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="group flex flex-col bg-white  rounded-xl border border-slate-200  overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="aspect-16/10 relative bg-slate-100 overflow-hidden">
            <Image
              alt={product.name}
              className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
              src={product.image || "/placeholder-product.png"}
              width={800}
              height={500}
            />
            {product.tag && (
              <div
                className={`absolute top-4 left-4 text-white text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg ${
                  product.tagColor || "bg-primary"
                }`}
              >
                {product.tag}
              </div>
            )}
          </div>
          <div className="p-8 flex flex-col grow">
            <div className="mb-4">
              <span className="text-[11px] font-bold text-primary uppercase tracking-widest mb-1 block">
                {product.series}
              </span>
              <h3 className="text-2xl font-bold text-slate-900  group-hover:text-primary transition-colors leading-tight">
                {product.name}
              </h3>
            </div>
            <p className="text-slate-500  text-sm mb-6 line-clamp-2">
              {product.description}
            </p>
            <div className="mt-auto flex flex-col gap-4">
              <div className="flex items-center gap-6 text-xs font-semibold text-slate-600  pb-4 border-b border-slate-100 ">
                {product.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-1.5">
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
      ))}
    </div>
  );
}
