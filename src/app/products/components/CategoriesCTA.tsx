import Link from "next/link";

export default function CategoriesCTA() {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 mt-10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-16 flex flex-col items-center text-center">
        <span className="material-symbols-outlined text-5xl text-primary mb-4">
          support_agent
        </span>
        <h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight mb-3">
          Need Technical Consultation?
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mb-8">
          Our team of certified engineers is ready to help you optimize your
          production line with the right equipment.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            className="flex items-center justify-center rounded h-12 px-8 bg-primary hover:bg-blue-600 text-white text-base font-bold transition-colors shadow-lg shadow-primary/20"
            href="/contact"
          >
            Contact Us
          </Link>
          <button className="flex items-center justify-center rounded h-12 px-8 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 text-base font-bold transition-colors">
            Download Catalog
          </button>
        </div>
      </div>
    </div>
  );
}
