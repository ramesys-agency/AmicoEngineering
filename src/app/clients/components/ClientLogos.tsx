export default function ClientLogos() {
  const clients = [
    "Mangilall Rungta [FAD Orissa]",
    "Eloquent Steel & Power Ltd",
    "Amul Dairy [West Bengal Group]",
    "Shakambhari Ispat & Power Ltd",
    "Rohit Ferro Tech Ltd [SKP Group]",
    "SCME Projects Pvt Ltd Oman",
    "Impex Metal & Power Ltd",
    "SPS Steel Rolling Mills Pvt Ltd",
    "Shyam Steel [Sova Ispat]",
    "NRV Steel & Power Ltd",
    "Shreenivas Ferro Alloys",
    "KAVY Steel Iran",
    "Karlsons Company Ltd [Zambia]",
    "BRAVO Sponge Iron & Power Ltd",
    "Eastland Switch Gear Co. Ltd",
    "BDG Steel & Power Pvt Ltd",
    "Bhaskar Sharchi Ferro Alloys Ltd",
    "SWM Steel & Power Ltd",
    "Cosmic Ferro Alloys Ltd",
    "Shakti Minerals [Orissa]",
    "Indian Railway [Import Substitute Item]",
    "Bartia Bright & Steel Ltd",
    "Asansol Ferro Alloys",
    "Sharp Ferro Alloys Ltd [Durgapur]",
    "Prithvi Ferro Alloys Pvt. Ltd",
  ];

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-800/50 rounded-xl p-8 md:p-12 border border-slate-200 dark:border-slate-800">
      <div className="text-center mb-10">
        <h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">
          Trusted by Industry Leaders
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2">
          Partnering with leading companies across steel, power, and mining sectors.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-700 p-4 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-primary/50 transition-all duration-300 flex items-center justify-center text-center"
          >
            <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">
              {client}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
