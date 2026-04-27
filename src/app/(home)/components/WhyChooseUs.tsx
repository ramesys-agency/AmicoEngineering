import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white dark:bg-background-dark">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="inline-block px-3 py-1 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-4 rounded">
              Our Advantage
            </div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
              Engineered for <br />
              Reliability &amp; Performance
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg mb-8">
              Choosing Amico Engineering means partnering with a team dedicated
              to operational excellence. We dont just supply parts; we provide
              integrated solutions that drive efficiency.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="size-10 bg-primary/10 rounded flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">
                    verified_user
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    ISO 9001 Certified Quality
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                    Rigorous quality control processes ensure zero-defect
                    manufacturing.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="size-10 bg-primary/10 rounded flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">
                    support_agent
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    24/7 Technical Support
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                    Our engineering team is always available to minimize your
                    downtime.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="size-10 bg-primary/10 rounded flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">
                    public
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Global Logistics Network
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                    Efficient shipping and installation services to over 50
                    countries.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-white dark:bg-slate-800 -z-10 rounded"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 -z-10 rounded"></div>
            <Image
              className="rounded shadow-xl w-full object-cover h-[500px]"
              alt="Engineer inspecting industrial blueprint in factory"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpG-ImBtcZmVWOPs3DchPb5gQYC0Gtb_4d6zQcG2Pu-TPmBF2w045gVfLI8qt5reoCQhutsfF4rA_z_yISfbrY31OLEUC36BQ8vC9GKjgto5R-QPUAlG71gc7VQx6M5l44YqE51hZQKp8K2d3j0TyFX17PjgMTcyyWVP-h7I33b6O1gPeayCu-JKb5jxL6R6DpxFd_yuyXiT5JVgTYNNDEHiSlgqfYPh73e5xrn4ZWa4I1_Z3oJIQiTbgsxVWjvJKs84mJQ-C8aKvR"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
