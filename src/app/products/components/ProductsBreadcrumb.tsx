import Link from "next/link";

export default function ProductsBreadcrumb() {
  return (
    <div className="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-3">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Link className="hover:text-primary transition-colors" href="/">
            Home
          </Link>
          <span className="material-symbols-outlined text-xs">
            chevron_right
          </span>
          <span className="text-slate-900 dark:text-slate-200 font-medium">
            Products Directory
          </span>
        </div>
      </div>
    </div>
  );
}
