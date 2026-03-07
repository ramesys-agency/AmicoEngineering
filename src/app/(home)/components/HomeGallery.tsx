import Link from "next/link";
import Image from "next/image";

const FEATURED_PROJECTS = [
  {
    title: "Automated Assembly Line",
    subtitle: "Assembly - Sector 4",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBon6wbeup3oWidzBarM6a423ar_TmglYxLrc4nWVmUXpGX30Sj65LTEgA9ZeRGH30NvdhbTbeBpdOk-xRBa7JbZW9bugwN-f5xMj8w64qtwzvxcsavhBGTRlTwmDecdOWGUIZ_awiguHmGvgF7h3chpaSiUic4x1hMxgsnFKTee4csjxcoj6BVmJNjBHpfG14E34prhhQaDr4zK8t8f8jKVlIp_5OW0q4QVtD1FpINpH9Z0eLuDSDnfj7RoB7StbgacUQ4WQGYTdO4",
  },
  {
    title: "CNC Machining Center",
    subtitle: "Machinery - Unit 12",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBt3E4Htnf44SkQovlKd23k_r_vYd9ld2NO_4rI3fi8R4wfRJ_08f-WwNGMWN6g61ZkH6yrsUuRxHK7cBHzjplnBCvn-I_3POZjRWdTwX1GU_SD0m-NCPBS62iPwqblsmB7nmEoPqRyFjbrxejpvLwrx46utHUIAq3fvjdpQIXUG58zMEf191lsvcp8QBDH1ppVXzzfeDKhjdoJKVtAkV-lpFEC-aDEzG87FtDCkpIhpCIyss3gWtNofiTT5hmxbshUS67871HGWuP1",
  },
  {
    title: "Logistics Hub",
    subtitle: "Logistics - Distribution North",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAY_YmAEm_pLgHCaMBR8lkfvKFOrMxiPAjNLeFO5YnDlnfZ8A6WLhN_JywnjWoEZjGpisIr1nQCogkBET6mFqVEFTm3-HvY_t_uU4D4e2Huol7X5iHLW8-jvyr2v79QA1e24Rdru2HJeUGcuUOkWDfs_fqG4QdBoEiupFczyXHEbtlxBa3skacjlcZDRjJ9B5UEVKrp9gTjjmUmf2UG7x_qoVWKS4tfyNe_rqYA5kJisxpNFbqRCOzzNe7U7F7NnV7IfQxx7eYt2D2m",
  },
];

export default function HomeGallery() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Featured Projects
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Showcasing our latest engineering excellence and industrial
              innovations.
            </p>
          </div>
          <Link
            href="/gallery"
            className="text-primary font-bold hover:text-primary-dark flex items-center gap-1 group"
          >
            View Full Gallery
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_right_alt
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project, index) => (
            <div key={index} className="group flex flex-col gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all group-hover:shadow-xl group-hover:border-primary/30">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">
                  {project.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
