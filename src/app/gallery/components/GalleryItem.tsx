import Image from "next/image";

type GalleryItemProps = {
  title: string;
  subtitle: string;
  imageAlt: string;
  imageSrc: string;
};

export default function GalleryItem({
  title,
  subtitle,
  imageAlt,
  imageSrc,
}: GalleryItemProps) {
  return (
    <div className="group flex flex-col gap-3">
      <div className="relative overflow-hidden rounded border border-slate-200  bg-white  transition-colors group-hover:border-primary">
        <div className="aspect-[4/3] w-full bg-slate-100 ">
          <Image
            alt={imageAlt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={imageSrc}
            width={800}
            height={600}
          />
        </div>
      </div>
      <div>
        <h3 className="text-slate-900  text-base font-semibold leading-tight">
          {title}
        </h3>
        <p className="text-slate-500  text-xs font-medium uppercase tracking-wider mt-1">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
