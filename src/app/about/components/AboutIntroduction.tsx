import Image from "next/image";

export default function AboutIntroduction() {
  return (
    <section className="py-16 bg-white dark:bg-background-dark">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider">
              Since 1999
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
              Building the infrastructure of tomorrow with integrity and
              precision.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Founded in 1999, Amico Engineering has established itself as a 
              beacon of quality and trust in the industrial manufacturing landscape. 
              Our state-of-the-art facility near Kolkata specializes in delivering 
              high-precision engineering and processing systems. Over the decades, 
              we have evolved into a premier engineering partner, renowned for 
              our technical integrity and custom design capabilities.
            </p>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-tl-3xl -z-10"></div>
            <Image
              alt="Female engineer inspecting industrial machinery with tablet"
              className="rounded shadow-xl w-full object-cover h-[400px]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA32_eKpD5Qq0SZ76TW9x02y2BMxq4QPSud-csw8DzfoGnEsWrIemw845UADUcq2_iEId8bOg477WmF3afhNfHRrCNXq-zARx7euGPZ6Qq3yXExN61jR3vyY1C8MQkHLwaRfSUJEPhcuGQBwt28UX4S0k_Ph4I6ylrX1ClCHXFHAyTYQNunbu7LusD7KWjmCM39C1DPyUptCge7B6aoDaQkW9UemBMbAh3cBSbmJF7SdWfaoHTVvNB8ShWQZaF9QjhtEWwCOM01dMKv"
              width={1000}
              height={1000}
            />
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-6 rounded shadow-lg border-l-4 border-primary max-w-[200px]">
              <p className="text-4xl font-black text-primary mb-1">26+</p>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Years of Engineering Excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
