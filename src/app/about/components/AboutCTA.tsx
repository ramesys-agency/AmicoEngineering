export default function AboutCTA() {
  return (
    <section className="py-20 bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-background-light dark:bg-slate-800 p-10 rounded-lg">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Ready to engineer your next project?
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Contact our expert team today for a consultation or quote.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="cursor-pointer w-full sm:w-auto flex items-center justify-center rounded bg-primary hover:bg-primary-dark transition-colors text-white font-bold h-12 px-8 whitespace-nowrap">
              Get in Touch
            </button>
            <button className="cursor-pointer w-full sm:w-auto flex items-center justify-center rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-transparent hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-slate-900 dark:text-white font-bold h-12 px-8 whitespace-nowrap">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
