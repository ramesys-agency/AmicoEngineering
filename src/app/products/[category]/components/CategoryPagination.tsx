export default function CategoryPagination() {
  return (
    <div className="mt-16 flex justify-center">
      <nav className="flex items-center gap-3">
        <button className="w-11 h-11 rounded-lg border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800 transition-colors flex items-center justify-center group disabled:opacity-50">
          <span className="material-symbols-outlined text-xl group-hover:text-primary transition-colors">
            chevron_left
          </span>
        </button>
        <button className="w-11 h-11 rounded-lg bg-primary text-white text-sm font-bold flex items-center justify-center shadow-lg shadow-primary/20">
          1
        </button>
        <button className="w-11 h-11 rounded-lg border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-bold flex items-center justify-center transition-all">
          2
        </button>
        <button className="w-11 h-11 rounded-lg border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-bold flex items-center justify-center transition-all">
          3
        </button>
        <span className="text-slate-400 font-bold px-2">...</span>
        <button className="w-11 h-11 rounded-lg border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-bold flex items-center justify-center transition-all">
          6
        </button>
        <button className="w-11 h-11 rounded-lg border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800 transition-colors flex items-center justify-center group">
          <span className="material-symbols-outlined text-xl group-hover:text-primary transition-colors">
            chevron_right
          </span>
        </button>
      </nav>
    </div>
  );
}
