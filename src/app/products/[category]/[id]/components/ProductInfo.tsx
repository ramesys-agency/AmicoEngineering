import PrimaryButton from "@/components/ui/PrimaryButton";

export default function ProductInfo({ product }: { product: any }) {
  return (
    <div className="lg:col-span-5 flex flex-col gap-6">
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
          {product.name}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6">
          <span className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded font-mono text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            SKU: {product.sku}
          </span>
          <span className="flex items-center gap-1 text-green-600 dark:text-green-400 font-medium">
            <span className="material-symbols-outlined text-[18px]">
              check_circle
            </span>
            In Stock
          </span>
          <div className="flex items-center">
            <span
              className="material-symbols-outlined text-[18px] text-yellow-400 select-none"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span
              className="material-symbols-outlined text-[18px] text-yellow-400 select-none"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span
              className="material-symbols-outlined text-[18px] text-yellow-400 select-none"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span
              className="material-symbols-outlined text-[18px] text-yellow-400 select-none"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span
              className="material-symbols-outlined text-[18px] text-yellow-400 select-none"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star_half
            </span>
            <span className="ml-1 text-xs">(12 Reviews)</span>
          </div>
        </div>
        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
          {product.description}
        </p>
      </div>

      <div className="p-6 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-baseline border-b border-slate-100 dark:border-slate-700 pb-4">
            <span className="text-sm font-medium text-slate-500">
              Unit Price
            </span>
            <span className="text-2xl font-bold text-slate-900 dark:text-white">
              Request Quote
            </span>
          </div>
          <div className="flex gap-3 mt-2">
            <PrimaryButton className="flex-1" icon="mail">
              Send Inquiry
            </PrimaryButton>
            <button
              aria-label="Download Datasheet"
              className="bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 text-slate-700 dark:text-white border border-slate-300 dark:border-slate-600 font-medium py-3 px-4 rounded transition-colors flex items-center justify-center"
            >
              <span className="material-symbols-outlined">download</span>
            </button>
          </div>
          <p className="text-xs text-center text-slate-400 mt-2">
            Typical response time: &lt; 24 hours
          </p>
        </div>
      </div>

      {/* Key Features List */}
      <div className="mt-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
          Key Features
        </h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span
              className="material-symbols-outlined text-primary text-[20px] mt-0.5"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              check_circle
            </span>
            <span className="text-slate-600 dark:text-slate-300 text-sm">
              High efficiency design for reduced energy consumption.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span
              className="material-symbols-outlined text-primary text-[20px] mt-0.5"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              check_circle
            </span>
            <span className="text-slate-600 dark:text-slate-300 text-sm">
              Corrosion-resistant durable housing.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span
              className="material-symbols-outlined text-primary text-[20px] mt-0.5"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              check_circle
            </span>
            <span className="text-slate-600 dark:text-slate-300 text-sm">
              Integrated thermal overload protection system.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span
              className="material-symbols-outlined text-primary text-[20px] mt-0.5"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              check_circle
            </span>
            <span className="text-slate-600 dark:text-slate-300 text-sm">
              ISO 9001 certified manufacturing process.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
