import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white ">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="inline-block px-3 py-1 bg-white  text-slate-600  text-xs font-bold uppercase tracking-wider mb-4 rounded">
              Our Advantage
            </div>
            <h2 className="text-4xl font-black text-slate-900  mb-6 leading-tight">
              Built on a Foundation of <br />
              Quality & Trust
            </h2>
            <p className="text-slate-600  text-lg mb-8">
              At Amico Engineering, we believe that quality is the ultimate
              expression of trust. We don&apos;t just supply parts; we provide
              precision-engineered solutions that you can rely on for years to come.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="size-10 bg-primary/10 rounded flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">
                    verified_user
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 ">
                    ISO 9001 Certified Quality
                  </h4>
                  <p className="text-slate-500  text-sm mt-1">
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
                  <h4 className="text-lg font-bold text-slate-900 ">
                    24/7 Technical Support
                  </h4>
                  <p className="text-slate-500  text-sm mt-1">
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
                  <h4 className="text-lg font-bold text-slate-900 ">
                    Global Logistics Network
                  </h4>
                  <p className="text-slate-500  text-sm mt-1">
                    Efficient shipping and installation services to over 50
                    countries.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 relative hidden sm:block">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-white  -z-10 rounded"></div>
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
