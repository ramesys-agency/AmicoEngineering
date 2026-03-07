import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative bg-slate-900 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDuDD1ZKfKMjHR2INGLxvU41Rvz9qSHWdtFVIbkNOz2H6O5MKJ8J2WJ8KGPw2Bc2Opi82ChVfwFGVksjAC5OtwtlJ1jiGBa-KOVfrTTdnkKuATFl4kGQzK2twvVOAH2gyW7n2jggXBU712F_XUl4vM9IeiNO9QyzJ974Wt5PpylYLRzEV53ALYc1NJ-gG2CtEfJkt55uTUkYqaRlp37WwPwztJEU9ivnJj0NoKOHHtjt-3BcRErF2nyztoP_q2hxiepLLcubIqb_Uj2')",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30"></div>
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-10 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary/20 border border-primary/30 text-primary-200 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
            <span className="material-symbols-outlined text-sm">verified</span>
            Innovating Manufacturing Since 1999
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 text-white shadow-sm">
            Precision Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              Global Solutions
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl font-light leading-relaxed">
            We deliver top-tier industrial automation and custom fabrication
            services to manufacturers worldwide. Experience reliability
            engineered to perfection.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded text-base font-bold shadow-lg shadow-blue-900/20 transition-all flex items-center gap-2"
            >
              View Products
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link
              href="/services"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded text-base font-bold backdrop-blur-sm transition-all"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
