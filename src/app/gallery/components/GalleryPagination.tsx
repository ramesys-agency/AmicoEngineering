export default function GalleryPagination() {
  return (
    <div className="mt-16 flex justify-center">
      <button className="flex items-center gap-2 px-8 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-slate-700 dark:text-slate-200 text-sm font-semibold hover:border-primary hover:text-primary transition-all">
        <span>Load More Projects</span>
        <span className="material-symbols-outlined text-lg">expand_more</span>
      </button>
    </div>
  );
}
