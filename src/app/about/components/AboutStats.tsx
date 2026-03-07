export default function AboutStats() {
  return (
    <section className="py-16 bg-primary dark:bg-primary-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
          <div className="p-4">
            <span className="block text-4xl md:text-5xl font-black mb-2">
              500+
            </span>
            <span className="text-sm md:text-base font-medium opacity-90">
              Dedicated Employees
            </span>
          </div>
          <div className="p-4">
            <span className="block text-4xl md:text-5xl font-black mb-2">
              120
            </span>
            <span className="text-sm md:text-base font-medium opacity-90">
              Certified Engineers
            </span>
          </div>
          <div className="p-4">
            <span className="block text-4xl md:text-5xl font-black mb-2">
              2.5k
            </span>
            <span className="text-sm md:text-base font-medium opacity-90">
              Projects Completed
            </span>
          </div>
          <div className="p-4">
            <span className="block text-4xl md:text-5xl font-black mb-2">
              20+
            </span>
            <span className="text-sm md:text-base font-medium opacity-90">
              Countries Served
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
