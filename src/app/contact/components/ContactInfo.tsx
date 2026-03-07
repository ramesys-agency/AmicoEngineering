import Link from "next/link";

export default function ContactInfo() {
  return (
    <div className="lg:col-span-7 flex flex-col gap-8">
      {/* Addresses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Registered Office */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-4">
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">domain</span>
          </div>
          <div>
            <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-2">
              Registered Office
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              123 Corporate Blvd, Industrial Park
              <br />
              Suite 400, Innovation City, 54321
            </p>
          </div>
        </div>
        {/* Works / Factory */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-4">
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">factory</span>
          </div>
          <div>
            <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-2">
              Works / Factory
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Unit 9, Manufacturing Zone B<br />
              Heavy Industry Sector, 98765
            </p>
          </div>
        </div>
      </div>

      {/* Direct Contact List */}
      <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-slate-700">
          <h3 className="text-slate-900 dark:text-white text-lg font-bold">
            Direct Contact
          </h3>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-slate-700">
          <div className="flex items-start gap-4 p-6 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
            <div className="text-primary mt-1">
              <span className="material-symbols-outlined">call</span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Sales &amp; Inquiries
              </p>
              <p className="text-slate-900 dark:text-white font-medium text-lg">
                +1 (555) 123-4567
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
            <div className="text-primary mt-1">
              <span className="material-symbols-outlined">support_agent</span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Support &amp; Logistics
              </p>
              <p className="text-slate-900 dark:text-white font-medium text-lg">
                +1 (555) 987-6543
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
            <div className="text-primary mt-1">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Email Us
              </p>
              <a
                className="text-slate-900 dark:text-white font-medium text-lg hover:text-primary underline decoration-slate-300 underline-offset-4"
                href="mailto:info@amicaengineering.com"
              >
                info@amicaengineering.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm bg-slate-100 h-[400px] relative group">
        {/* Background Image acting as Map Placeholder */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://placeholder.pics/svg/300")',
          }}
        >
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
        </div>
        {/* Map Controls Overlay */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 p-2 rounded shadow-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            <span className="material-symbols-outlined block">add</span>
          </button>
          <button className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 p-2 rounded shadow-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            <span className="material-symbols-outlined block">remove</span>
          </button>
        </div>
        {/* Map Label */}
        <div className="absolute bottom-4 left-4 bg-white dark:bg-slate-800 p-3 rounded shadow-lg flex items-center gap-3 max-w-xs">
          <div className="size-10 bg-primary/10 rounded flex items-center justify-center text-primary shrink-0">
            <span className="material-symbols-outlined">location_on</span>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900 dark:text-white">
              Manufacturing Hub
            </p>
            <p className="text-[10px] text-slate-500 truncate">
              Zone B, Logistics Sector
            </p>
          </div>
          <Link className="ml-auto text-primary hover:text-blue-700" href="#">
            <span className="material-symbols-outlined text-lg">
              directions
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
