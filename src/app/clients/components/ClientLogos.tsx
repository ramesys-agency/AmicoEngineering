export default function ClientLogos() {
  const clients = [
    { name: "Mangilall Rungta", sector: "FAD Orissa", premium: true },
    {
      name: "Eloquent Steel & Power Ltd",
      sector: "Steel & Power",
      premium: true,
    },
    { name: "Amul Dairy", sector: "West Bengal Group", premium: true },
    { name: "Shakambhari Ispat & Power Ltd", sector: "Steel & Power" },
    { name: "Rohit Ferro Tech Ltd", sector: "SKP Group" },
    { name: "SCME Projects Pvt Ltd", sector: "Oman" },
    { name: "Impex Metal & Power Ltd", sector: "Steel & Power" },
    {
      name: "SPS Steel Rolling Mills Pvt Ltd",
      sector: "Manufacturing",
      premium: true,
    },
    { name: "Shyam Steel", sector: "Sova Ispat", premium: true },
    { name: "NRV Steel & Power Ltd", sector: "Steel & Power" },
    { name: "Shreenivas Ferro Alloys", sector: "Ferro Alloys" },
    { name: "KAVY Steel", sector: "Iran" },
    { name: "Karlsons Company Ltd", sector: "Zambia" },
    { name: "BRAVO Sponge Iron & Power Ltd", sector: "Steel & Power" },
    { name: "Eastland Switch Gear Co. Ltd", sector: "Electrical" },
    { name: "BDG Steel & Power Pvt Ltd", sector: "Steel & Power" },
    { name: "Bhaskar Sharchi Ferro Alloys Ltd", sector: "Ferro Alloys" },
    { name: "SWM Steel & Power Ltd", sector: "Steel & Power" },
    { name: "Cosmic Ferro Alloys Ltd", sector: "Ferro Alloys" },
    { name: "Shakti Minerals", sector: "Orissa" },
    { name: "Indian Railway", sector: "Import Substitute", premium: true },
    { name: "Bartia Bright & Steel Ltd", sector: "Steel" },
    { name: "Asansol Ferro Alloys", sector: "Ferro Alloys" },
    { name: "Sharp Ferro Alloys Ltd", sector: "Durgapur" },
    { name: "Prithvi Ferro Alloys Pvt. Ltd", sector: "Manufacturing" },
  ];

  return (
    <section className="w-full py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-slate-900  text-4xl font-extrabold leading-tight tracking-tight mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-slate-600  text-lg">
          We are proud to partner with some of the world&apos;s most prestigious
          organizations, delivering engineering excellence across diverse
          industrial sectors.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {clients.map((client, index) => (
          <div
            key={index}
            className={`group relative p-6 rounded-2xl border transition-all duration-500 overflow-hidden ${
              client.premium
                ? "bg-linear-to-br from-white to-primary/5   border-primary/30 shadow-lg shadow-primary/5 scale-[1.02] z-10"
                : "bg-white  border-slate-200  hover:border-primary/50"
            } hover:shadow-xl hover:shadow-primary/10 hover:scale-[1.05]`}
          >
            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-25 transition-opacity">
              <span
                className={`material-symbols-outlined text-4xl ${client.premium ? "text-primary" : "text-slate-400"}`}
              >
                {client.premium ? "stars" : "corporate_fare"}
              </span>
            </div>

            <div className="relative z-10 pt-2">
              <h3
                className={`font-bold text-lg transition-colors duration-300 ${
                  client.premium
                    ? "text-primary "
                    : "text-slate-900  group-hover:text-primary"
                }`}
              >
                {client.name}
              </h3>
              <div className="mt-2 flex items-center gap-2">
                <span
                  className={`h-px w-4 ${client.premium ? "bg-primary" : "bg-primary/40"}`}
                ></span>
                <span
                  className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                    client.premium
                      ? "text-slate-600 "
                      : "text-slate-400 group-hover:text-slate-500 "
                  }`}
                >
                  {client.sector}
                </span>
              </div>
            </div>

            {/* Background decorative elements */}
            <div
              className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-3xl transition-all duration-500 ${
                client.premium
                  ? "bg-primary/20"
                  : "bg-primary/5 group-hover:bg-primary/10"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}
