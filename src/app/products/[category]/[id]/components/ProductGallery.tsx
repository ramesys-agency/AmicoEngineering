import Image from "next/image";

export default function ProductGallery({ product }: { product: any }) {
  return (
    <div className="lg:col-span-7 flex flex-col gap-4">
      <div className="bg-white  rounded border border-slate-200  p-8 flex items-center justify-center aspect-4/3 relative overflow-hidden group">
        <div className="absolute inset-0 bg-linear-to-br from-slate-100 to-slate-200   z-0"></div>
        <Image
          alt={product.name}
          className="relative z-10 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          src={product.image || "/placeholder-product.png"}
          width={800}
          height={600}
        />
        {product.tag && (
          <div className="absolute top-4 left-4 z-20 bg-primary text-white text-xs font-bold px-2 py-1 rounded uppercase">
            {product.tag}
          </div>
        )}
      </div>
    </div>
  );
}
