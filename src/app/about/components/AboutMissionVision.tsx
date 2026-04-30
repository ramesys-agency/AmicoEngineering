export default function AboutMissionVision() {
  return (
    <section className="py-16 bg-background-light ">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="group bg-white  p-8 rounded-lg shadow-sm border border-slate-200  hover:border-primary/50 transition-all duration-300">
            <div className="size-12 rounded bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl">flag</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900  mb-4">
              Our Mission
            </h3>
            <p className="text-slate-600  leading-relaxed">
              To deliver superior, sustainable engineering solutions that
              empower industries worldwide. We are dedicated to optimizing
              productivity through innovation, rigorous quality control, and a
              client-centric approach that prioritizes safety and efficiency
              above all else.
            </p>
          </div>
          {/* Vision */}
          <div className="group bg-white  p-8 rounded-lg shadow-sm border border-slate-200  hover:border-primary/50 transition-all duration-300">
            <div className="size-12 rounded bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl">
                visibility
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900  mb-4">
              Our Vision
            </h3>
            <p className="text-slate-600  leading-relaxed">
              To become the undisputed global benchmark for quality and
              technological advancement in the industrial manufacturing sector.
              We envision a future where our engineering designs lead the path
              toward smarter, greener, and more resilient industrial
              infrastructures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
