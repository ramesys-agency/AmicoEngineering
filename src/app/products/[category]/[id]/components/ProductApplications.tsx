import Link from "next/link";

export default function ProductApplications() {
  return (
    <div className="lg:col-span-4 flex flex-col gap-8">
      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
          Applications
        </h2>
        <div className="grid gap-3">
          <div className="group flex items-center gap-4 p-3 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-primary transition-all cursor-pointer">
            <div className="size-12 rounded bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">oil_barrel</span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary">
                Offshore Operations
              </h4>
              <p className="text-xs text-slate-500">Subsea actuation</p>
            </div>
          </div>
          <div className="group flex items-center gap-4 p-3 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-primary transition-all cursor-pointer">
            <div className="size-12 rounded bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">construction</span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary">
                Heavy Construction
              </h4>
              <p className="text-xs text-slate-500">Excavator systems</p>
            </div>
          </div>
          <div className="group flex items-center gap-4 p-3 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-primary transition-all cursor-pointer">
            <div className="size-12 rounded bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">factory</span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary">
                Manufacturing
              </h4>
              <p className="text-xs text-slate-500">High-tonnage stamping</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary/5 rounded p-6 border border-primary/10">
        <h3 className="text-sm font-bold text-primary mb-2">
          Need a custom configuration?
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
          Our engineering team can modify mounting flanges and porting to fit
          your specific machinery.
        </p>
        <Link
          className="text-sm font-bold text-primary hover:underline flex items-center gap-1"
          href="/contact"
        >
          Contact Engineering{" "}
          <span className="material-symbols-outlined text-[16px]">
            arrow_forward
          </span>
        </Link>
      </div>
    </div>
  );
}
