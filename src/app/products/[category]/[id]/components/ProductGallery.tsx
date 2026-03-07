import Image from "next/image";

export default function ProductGallery({ product }: { product: any }) {
  return (
    <div className="lg:col-span-7 flex flex-col gap-4">
      <div className="bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 p-8 flex items-center justify-center aspect-[4/3] relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 z-0"></div>
        <Image
          alt={product.name}
          className="relative z-10 w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal opacity-90 transition-transform duration-500 group-hover:scale-105"
          src={product.image}
          width={800}
          height={600}
        />
        {product.tag && (
          <div className="absolute top-4 left-4 z-20 bg-primary text-white text-xs font-bold px-2 py-1 rounded uppercase">
            {product.tag}
          </div>
        )}
      </div>
      {/* Thumbnail Placeholders */}
      <div className="grid grid-cols-4 gap-4">
        <button className="aspect-square rounded border-2 border-primary bg-white dark:bg-slate-800 p-2 overflow-hidden">
          <Image
            alt="Thumbnail"
            className="w-full h-full object-cover"
            src={product.image}
            width={200}
            height={200}
          />
        </button>
        <button className="aspect-square rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 hover:border-primary transition-colors overflow-hidden">
          <Image
            alt="Thumbnail 2"
            className="w-full h-full object-cover opacity-50 grayscale"
            src={product.image}
            width={200}
            height={200}
          />
        </button>
        <button className="aspect-square rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 hover:border-primary transition-colors overflow-hidden flex items-center justify-center">
          <span className="material-symbols-outlined text-4xl text-slate-400">
            3d_rotation
          </span>
        </button>
        <button className="aspect-square rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 hover:border-primary transition-colors overflow-hidden flex items-center justify-center">
          <span className="material-symbols-outlined text-4xl text-slate-400">
            play_circle
          </span>
        </button>
      </div>
    </div>
  );
}
