import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import QuoteForm from "./components/QuoteForm";

export const metadata = {
  title: "Request a Quote | Amico Engineering",
  description: "Request a custom quote for high-precision engineering solutions. Experience the Amico Engineering commitment to quality, trust, and technical excellence.",
};

export default function RequestQuotePage() {
  return (
    <>
      <main className="flex-1 w-full flex flex-col overflow-x-hidden bg-slate-50 dark:bg-slate-900/20 pb-20">
        <PageHero
          preTitle="Get Started"
          title="Custom Engineering Quote"
          description="Tell us about your project requirements. Our expert engineers will analyze your specifications and provide a detailed technical and commercial proposal."
          imageSrc="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2070"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Request Quote" },
          ]}
        />

        <section className="w-full max-w-[1280px] px-4 sm:px-10 mt-10 relative z-10 mx-auto">
          <QuoteForm />
        </section>

        <section className="w-full max-w-4xl px-4 sm:px-10 mt-20 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="size-14 bg-white dark:bg-slate-800 rounded-2xl shadow-md flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform text-primary border border-slate-100 dark:border-slate-700">
                <span className="material-symbols-outlined text-3xl">description</span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">1. Submit Specs</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Provide detailed requirements via the form above.</p>
            </div>
            <div className="text-center group">
              <div className="size-14 bg-white dark:bg-slate-800 rounded-2xl shadow-md flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform text-primary border border-slate-100 dark:border-slate-700">
                <span className="material-symbols-outlined text-3xl">engineering</span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">2. Review</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Our engineers review for technical feasibility and design.</p>
            </div>
            <div className="text-center group">
              <div className="size-14 bg-white dark:bg-slate-800 rounded-2xl shadow-md flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform text-primary border border-slate-100 dark:border-slate-700">
                <span className="material-symbols-outlined text-3xl">task_alt</span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">3. Proposal</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Receive a comprehensive commercial and technical quote.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
