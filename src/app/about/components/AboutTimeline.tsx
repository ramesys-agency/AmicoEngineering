export default function AboutTimeline() {
  return (
    <section className="py-20 bg-white dark:bg-background-dark relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Our Journey
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            From a humble workshop to an industry titan, trace our path of
            growth and innovation.
          </p>
        </div>
        <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-4 md:ml-1/2 md:-translate-x-[1px]">
          {/* Item 1 */}
          <div className="mb-12 flex flex-col md:flex-row items-start relative pl-12 md:pl-0">
            <div className="absolute left-[-9px] md:left-1/2 md:-ml-[9px] w-[20px] h-[20px] rounded-full bg-primary border-4 border-white dark:border-background-dark z-20"></div>
            <div className="md:w-1/2 md:pl-12 md:ml-auto">
              <div className="bg-background-light dark:bg-slate-800 p-6 rounded border border-slate-100 dark:border-slate-700 shadow-sm relative md:before:absolute md:before:top-6 md:before:-left-3 md:before:w-0 md:before:h-0 md:before:border-y-8 md:before:border-y-transparent md:before:border-r-8 md:before:border-r-background-light dark:md:before:border-r-slate-800">
                <span className="text-primary font-bold text-xl block mb-2">
                  1999
                </span>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Foundation
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Amico Engineering was founded with a vision to deliver 
                  precision-engineered industrial systems and high-quality 
                  processing equipment from its facility in Howrah, West Bengal.
                </p>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="mb-12 flex flex-col md:flex-row items-start relative pl-12 md:pl-0">
            <div className="absolute left-[-9px] md:left-1/2 md:-ml-[9px] w-[20px] h-[20px] rounded-full bg-white dark:bg-background-dark border-4 border-slate-300 dark:border-slate-600 z-20"></div>
            <div className="md:w-1/2 md:pr-12 md:mr-auto md:text-right">
              <div className="bg-background-light dark:bg-slate-800 p-6 rounded border border-slate-100 dark:border-slate-700 shadow-sm relative md:text-right text-left md:after:absolute md:after:top-6 md:after:-right-3 md:after:w-0 md:after:h-0 md:after:border-y-8 md:after:border-y-transparent md:after:border-l-8 md:after:border-l-background-light dark:md:after:border-l-slate-800">
                <span className="text-primary font-bold text-xl block mb-2">
                  2000s
                </span>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Growth &amp; Recognition
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Continuous development enabled AMICO ENGINEERING to be
                  acknowledged as a contributor to the formulation of engineering
                  standards for Belt Conveyor, Screw Conveyor, and Conveyor Systems.
                </p>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="mb-12 flex flex-col md:flex-row items-start relative pl-12 md:pl-0">
            <div className="absolute left-[-9px] md:left-1/2 md:-ml-[9px] w-[20px] h-[20px] rounded-full bg-white dark:bg-background-dark border-4 border-slate-300 dark:border-slate-600 z-20"></div>
            <div className="md:w-1/2 md:pl-12 md:ml-auto">
              <div className="bg-background-light dark:bg-slate-800 p-6 rounded border border-slate-100 dark:border-slate-700 shadow-sm relative md:before:absolute md:before:top-6 md:before:-left-3 md:before:w-0 md:before:h-0 md:before:border-y-8 md:before:border-y-transparent md:before:border-r-8 md:before:border-r-background-light dark:md:before:border-r-slate-800">
                <span className="text-primary font-bold text-xl block mb-2">
                  Quality Standards
                </span>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  ISO &amp; MSME Certification
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Achieved ISO-9001-QMS/092020/130042 certification and MSME
                  registration (WB07A0011576), marking commitment to quality and
                  operational excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col md:flex-row items-start relative pl-12 md:pl-0">
            <div className="absolute left-[-9px] md:left-1/2 md:-ml-[9px] w-[20px] h-[20px] rounded-full bg-primary border-4 border-white dark:border-background-dark z-20"></div>
            <div className="md:w-1/2 md:pr-12 md:mr-auto">
              <div className="bg-background-light dark:bg-slate-800 p-6 rounded border border-slate-100 dark:border-slate-700 shadow-sm relative md:text-right text-left md:after:absolute md:after:top-6 md:after:-right-3 md:after:w-0 md:after:h-0 md:after:border-y-8 md:after:border-y-transparent md:after:border-l-8 md:after:border-l-background-light dark:md:after:border-l-slate-800">
                <span className="text-primary font-bold text-xl block mb-2">
                  Today
                </span>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Industry Leader
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Renowned for quality and design capability with well-equipped
                  workshops, serving prestigious clients across India and export
                  markets including Oman, Iran, and Zambia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
