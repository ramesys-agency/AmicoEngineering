export default function ClientLogos() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-800/50 rounded-xl p-8 md:p-12 border border-slate-200 dark:border-slate-800">
      <div className="text-center mb-10">
        <h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">
          Trusted by Industry Leaders
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2">
          Partnering with global innovators to build the future.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center opacity-80">
        {/* Logo 1 */}
        <div className="w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 flex items-center justify-center text-slate-400 hover:text-blue-600">
          <span className="material-symbols-outlined text-5xl">public</span>
          <span className="sr-only">Global Corp</span>
        </div>
        {/* Logo 2 */}
        <div className="w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 flex items-center justify-center text-slate-400 hover:text-green-600">
          <span className="material-symbols-outlined text-5xl">
            energy_savings_leaf
          </span>
          <span className="sr-only">Eco Energy</span>
        </div>
        {/* Logo 3 */}
        <div className="w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 flex items-center justify-center text-slate-400 hover:text-orange-600">
          <span className="material-symbols-outlined text-5xl">oil_barrel</span>
          <span className="sr-only">PetroCore</span>
        </div>
        {/* Logo 4 */}
        <div className="w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 flex items-center justify-center text-slate-400 hover:text-purple-600">
          <span className="material-symbols-outlined text-5xl">
            precision_manufacturing
          </span>
          <span className="sr-only">FabriTech</span>
        </div>
        {/* Logo 5 */}
        <div className="w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 flex items-center justify-center text-slate-400 hover:text-red-600">
          <span className="material-symbols-outlined text-5xl">
            local_shipping
          </span>
          <span className="sr-only">TransLogistics</span>
        </div>
        {/* Logo 6 */}
        <div className="w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 flex items-center justify-center text-slate-400 hover:text-indigo-600">
          <span className="material-symbols-outlined text-5xl">science</span>
          <span className="sr-only">ChemLabs</span>
        </div>
        {/* Logo 7 */}
        <div className="w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 flex items-center justify-center text-slate-400 hover:text-yellow-600">
          <span className="material-symbols-outlined text-5xl">warning</span>
          <span className="sr-only">BuildSafe</span>
        </div>
        {/* Logo 8 */}
        <div className="w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 flex items-center justify-center text-slate-400 hover:text-cyan-600">
          <span className="material-symbols-outlined text-5xl">anchor</span>
          <span className="sr-only">MarineWorks</span>
        </div>
      </div>
    </section>
  );
}
