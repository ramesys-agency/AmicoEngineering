import PrimaryButton from "@/components/ui/PrimaryButton";

export default function ProductInfo({ product }: { product: any }) {
  return (
    <div className="lg:col-span-5 flex flex-col gap-6">
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900  tracking-tight mb-2">
          {product.name}
        </h1>
        <p className="text-slate-600  text-lg leading-relaxed mb-6">
          {product.description}
        </p>
      </div>

      <div className="p-6 bg-white  rounded border border-slate-200  shadow-sm">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-baseline border-b border-slate-100  pb-4">
            <span className="text-sm font-medium text-slate-500">
              Unit Price
            </span>
            <span className="text-2xl font-bold text-slate-900 ">
              Request Quote
            </span>
          </div>
          <div className="flex gap-3 mt-2">
            <PrimaryButton
              className="flex-1"
              icon="chat"
              href={`https://wa.me/919432581894?text=${encodeURIComponent(
                `Hello Amico Engineering, I'm interested in the ${product.name}. Please provide more information.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Inquiry
            </PrimaryButton>
            {/* <button
              aria-label="Download Datasheet"
              className="bg-white  hover:bg-slate-50  text-slate-700  border border-slate-300  font-medium py-3 px-4 rounded transition-colors flex items-center justify-center"
            >
              <span className="material-symbols-outlined">download</span>
            </button> */}
          </div>
          <p className="text-xs text-center text-slate-400 mt-2">
            Typical response time: &lt; 24 hours
          </p>
        </div>
      </div>

      {/* Key Features List */}
      <div className="mt-4">
        <h3 className="text-sm font-bold text-slate-900  uppercase tracking-wider mb-4">
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
            <span className="text-slate-600  text-sm">
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
            <span className="text-slate-600  text-sm">
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
            <span className="text-slate-600  text-sm">
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
            <span className="text-slate-600  text-sm">
              ISO 9001 certified manufacturing process.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
