export default function ProductsCTA() {
  return (
    <div className="w-full bg-slate-50  border-t border-slate-200  mt-10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-20 flex flex-col items-center text-center">
        <span className="material-symbols-outlined text-6xl text-primary mb-6">
          engineering
        </span>
        <h2 className="text-slate-900  text-4xl font-black leading-tight mb-4">
          Need a Custom Engineering Solution?
        </h2>
        <p className="text-slate-500  text-xl max-w-3xl mb-10 leading-relaxed">
          Our specialized engineering team can design, manufacture, and install
          custom systems tailored precisely to your facility&apos;s footprint
          and material flow requirements.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <button className="flex items-center justify-center rounded-lg h-14 px-10 bg-primary hover:bg-blue-600 text-white text-lg font-bold transition-all shadow-xl shadow-primary/30">
            Book Technical Consultation
          </button>
          <button className="flex items-center justify-center rounded-lg h-14 px-10 bg-white  border border-slate-300  text-slate-700  hover:bg-slate-50  text-lg font-bold transition-all">
            Full Systems Catalog
          </button>
        </div>
      </div>
    </div>
  );
}
