export function TrustedClients() {
  return (
    <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <h3 className="text-center text-sm font-bold text-slate-500 uppercase tracking-widest mb-10">
          Trusted by Industry Leaders
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-70 grayscale">
          <div className="flex items-center justify-center h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded shadow-sm">
            <span className="font-black text-slate-700 dark:text-slate-300 text-lg italic">
              BuildCo
            </span>
          </div>
          <div className="flex items-center justify-center h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded shadow-sm">
            <span className="font-bold text-slate-700 dark:text-slate-300 text-lg">
              LOGISTIX
            </span>
          </div>
          <div className="flex items-center justify-center h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded shadow-sm">
            <span className="font-black text-slate-700 dark:text-slate-300 text-lg tracking-tight">
              POWER<span className="text-primary">GRID</span>
            </span>
          </div>
          <div className="flex items-center justify-center h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded shadow-sm">
            <div className="flex gap-1 items-center font-bold text-slate-700 dark:text-slate-300 text-lg">
              <span className="size-4 bg-slate-700 dark:bg-slate-300 rounded-full"></span>{" "}
              AGRI-TECH
            </div>
          </div>
          <div className="flex items-center justify-center h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded shadow-sm">
            <span className="font-serif font-bold text-slate-700 dark:text-slate-300 text-lg">
              Structura
            </span>
          </div>
          <div className="flex items-center justify-center h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded shadow-sm">
            <span className="font-mono font-bold text-slate-700 dark:text-slate-300 text-lg">
              MCHNE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section className="py-12 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-slate-400">
          <span className="text-xs font-bold uppercase tracking-wider">
            Certifications:
          </span>
          <div className="flex gap-6">
            <div className="flex items-center gap-2 border border-slate-300 dark:border-slate-600 px-3 py-1 rounded">
              <span className="material-symbols-outlined text-slate-500">
                verified
              </span>
              <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                ISO 9001:2015
              </span>
            </div>
            <div className="flex items-center gap-2 border border-slate-300 dark:border-slate-600 px-3 py-1 rounded">
              <span className="material-symbols-outlined text-slate-500">
                verified
              </span>
              <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                CE Certified
              </span>
            </div>
            <div className="flex items-center gap-2 border border-slate-300 dark:border-slate-600 px-3 py-1 rounded">
              <span className="material-symbols-outlined text-slate-500">
                verified
              </span>
              <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                RoHS Compliant
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
