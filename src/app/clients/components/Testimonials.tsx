import Image from "next/image";

export default function Testimonials() {
  return (
    <section>
      <h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-8 text-center md:text-left">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Testimonial 1 */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-lg border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
          <div className="flex gap-2 mb-4 text-primary">
            <span className="material-symbols-outlined text-2xl">
              format_quote
            </span>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-lg italic mb-6">
            &quot;Their engineering precision saved us 20% in operational costs
            within the first year of implementation. A truly transformative
            partnership.&quot;
          </p>
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-full bg-slate-200 overflow-hidden">
              <Image
                alt="John Doe"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhECCk5qwoDebN6t4WHMcgcSxw47givRRrnT4LiEiGfFWVrkmGmyIVG0dw4tGau1LXc2et5Yp3mupe3WehSInL96-Oe37xE10gdzDaHR6KkANlFvbg87jRwtKBx4LSJdcGv6cfcyAjh6QEguZiziQilA74fK1-qKUVLenZ2MBHlUJ3TNR7RStAh2B0GAyme01SRGRekrW0-vEAoKPnstRPdFh2g4XkFc4AYehyzU3g-Dc_m2oC_jY3RP-7m3Dfm_a25FxedpkdplH7"
                width={100}
                height={100}
              />
            </div>
            <div>
              <h4 className="text-slate-900 dark:text-white font-bold">
                John Doe
              </h4>
              <p className="text-slate-500 text-sm">COO, Apex Mining</p>
            </div>
          </div>
        </div>
        {/* Testimonial 2 */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-lg border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
          <div className="flex gap-2 mb-4 text-primary">
            <span className="material-symbols-outlined text-2xl">
              format_quote
            </span>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-lg italic mb-6">
            &quot;The team at Apex Engineering delivered our manufacturing plant
            upgrade ahead of schedule with zero safety incidents. Exceptional
            work.&quot;
          </p>
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-full bg-slate-200 overflow-hidden">
              <Image
                alt="Sarah Jenkins"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7ZZcNK5uyCq05I0X69jFQC15xWJMfUFPAJLkrgRj23uRJPiD8KofEekme_oUKwGcSaldRRZiSpqaHWFqSdNtfjqyeHhfFqRZzaZTfAv_wWSkH68d7HJlRsrhvAGY1pIdQgvHUms4kc9CRyi8tAJCOaOALXesLFi8AA9j_T2pWTK6c2oMkW5RE3Az38t-M-59ORb-iZzq79DOsbShLvkrIk9HSaA8l9VxhK7XIx8tq5PcmNWRuBNEYYzQKwgvqclt7fKAOuuCWfKrL"
                width={100}
                height={100}
              />
            </div>
            <div>
              <h4 className="text-slate-900 dark:text-white font-bold">
                Sarah Jenkins
              </h4>
              <p className="text-slate-500 text-sm">
                Director of Operations, FabriTech
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
