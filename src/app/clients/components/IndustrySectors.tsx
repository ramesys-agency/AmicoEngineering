import Link from "next/link";

export default function IndustrySectors() {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div>
          <h2 className="text-slate-900  text-3xl font-bold leading-tight tracking-[-0.015em]">
            Industry Sectors Served
          </h2>
          <p className="text-slate-500  mt-2 text-lg">
            Specialized expertise tailored to your operational needs.
          </p>
        </div>
        <Link
          className="text-primary font-bold hover:underline flex items-center gap-1 group"
          href="/products"
        >
          View all sectors
          <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
            arrow_forward
          </span>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Mining Card */}
        <div className="group flex flex-col gap-4 rounded-lg border border-slate-200  bg-white  p-6 hover:shadow-xl hover:shadow-slate-200/50  hover:-translate-y-1 transition-all duration-300">
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <span className="material-symbols-outlined text-2xl">
              construction
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-slate-900  text-xl font-bold">
              Mining &amp; Resources
            </h3>
            <p className="text-slate-500  text-sm leading-relaxed">
              Optimizing extraction processes and enhancing site safety
              protocols through advanced structural engineering.
            </p>
          </div>
          <div className="mt-auto pt-4">
            <span className="text-sm font-semibold text-primary flex items-center gap-1">
              Learn more{" "}
              <span className="material-symbols-outlined text-sm">
                chevron_right
              </span>
            </span>
          </div>
        </div>
        {/* Manufacturing Card */}
        <div className="group flex flex-col gap-4 rounded-lg border border-slate-200  bg-white  p-6 hover:shadow-xl hover:shadow-slate-200/50  hover:-translate-y-1 transition-all duration-300">
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <span className="material-symbols-outlined text-2xl">factory</span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-slate-900  text-xl font-bold">
              Manufacturing
            </h3>
            <p className="text-slate-500  text-sm leading-relaxed">
              Streamlining production lines for maximum efficiency and output
              with custom automation solutions.
            </p>
          </div>
          <div className="mt-auto pt-4">
            <span className="text-sm font-semibold text-primary flex items-center gap-1">
              Learn more{" "}
              <span className="material-symbols-outlined text-sm">
                chevron_right
              </span>
            </span>
          </div>
        </div>
        {/* Logistics Card */}
        <div className="group flex flex-col gap-4 rounded-lg border border-slate-200  bg-white  p-6 hover:shadow-xl hover:shadow-slate-200/50  hover:-translate-y-1 transition-all duration-300">
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <span className="material-symbols-outlined text-2xl">
              local_shipping
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-slate-900  text-xl font-bold">
              Logistics &amp; Warehousing
            </h3>
            <p className="text-slate-500  text-sm leading-relaxed">
              Automated warehousing systems and supply chain optimization for
              global distribution networks.
            </p>
          </div>
          <div className="mt-auto pt-4">
            <span className="text-sm font-semibold text-primary flex items-center gap-1">
              Learn more{" "}
              <span className="material-symbols-outlined text-sm">
                chevron_right
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
