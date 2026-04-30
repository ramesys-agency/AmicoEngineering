import Link from "next/link";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function HomeHero() {
  return (
    <section className="relative bg-slate-900 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero_bulk_handling.png')",
        }}
      ></div>
      <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30"></div>
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-10 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary/20 border border-primary/30 text-primary-200 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
            <span className="material-symbols-outlined text-sm">verified</span>
            Innovating Manufacturing Since 1999
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 text-white shadow-sm">
            Engineering with <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-300">
              Quality & Trust
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl font-light leading-relaxed">
            Precision-engineered solutions designed for durability and
            performance. At Amico Engineering, we build long-term partnerships
            through uncompromising quality and technical excellence.
          </p>
          <div className="flex flex-wrap gap-4">
            <PrimaryButton href="/products" size="lg">
              View Products
            </PrimaryButton>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded text-base font-bold backdrop-blur-sm transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
