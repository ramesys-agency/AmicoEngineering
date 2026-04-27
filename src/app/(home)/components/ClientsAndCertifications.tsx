export function TrustedClients() {
  const prominentClients = [
    { name: "Amul Dairy", sector: "FMCG", premium: true },
    { name: "Indian Railway", sector: "Infrastructure", premium: true },
    { name: "Shyam Steel", sector: "Steel", premium: true },
    { name: "Eloquent Steel", sector: "Power", premium: true },
    { name: "SPS Steel", sector: "Manufacturing", premium: true },
    { name: "Mangilall Rungta", sector: "Mining", premium: true },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Trusted by Industry Leaders
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">
              Powering global enterprises with precision engineering solutions.
            </p>
          </div>
          <a
            href="/clients"
            className="group flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors"
          >
            View All Clients
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {prominentClients.map((client, index) => (
            <div
              key={index}
              className={`group relative flex flex-col items-center justify-center p-6 transition-all duration-300 rounded-xl ${
                client.premium 
                  ? "bg-white dark:bg-slate-800 border-primary/30 shadow-md scale-[1.05] z-10" 
                  : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-sm"
              } hover:shadow-lg hover:border-primary/50 hover:scale-[1.1]`}
            >
              <span className={`font-bold text-center text-sm transition-colors ${
                client.premium ? "text-primary" : "text-slate-900 dark:text-white group-hover:text-primary"
              }`}>
                {client.name}
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mt-1">
                {client.sector}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section className="py-12 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 text-slate-400">
          <span className="text-xs font-bold uppercase tracking-wider">
            Certifications:
          </span>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
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
