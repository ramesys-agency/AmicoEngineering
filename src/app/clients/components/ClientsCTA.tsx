export default function ClientsCTA() {
  return (
    <section className="relative bg-slate-900 py-20 px-4 md:px-10 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      <div className="relative z-10 max-w-[960px] mx-auto text-center flex flex-col items-center gap-6">
        <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
          Ready to Optimize Your Operations?
        </h2>
        <p className="text-slate-300 text-lg max-w-2xl">
          Our team of expert engineers is ready to tackle your most complex
          challenges. Let&apos;s discuss your next project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
          <button className="flex min-w-[200px] cursor-pointer items-center justify-center rounded h-12 px-8 bg-primary hover:bg-blue-600 text-white font-bold transition-all shadow-lg hover:shadow-primary/50">
            Get a Quote
          </button>
          <button className="flex min-w-[200px] cursor-pointer items-center justify-center rounded h-12 px-8 bg-transparent border border-slate-600 hover:bg-slate-800 text-white font-bold transition-all">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}
