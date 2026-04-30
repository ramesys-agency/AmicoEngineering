import Link from "next/link";
import Image from "next/image";

export interface Breadcrumb {
  label: string;
  href?: string;
}

export interface PageHeroProps {
  preTitle?: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  breadcrumbs?: Breadcrumb[];
}

export default function PageHero({
  preTitle,
  title,
  description,
  imageSrc,
  imageAlt,
  primaryButton,
  secondaryButton,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-[1280px] px-4 sm:px-10 py-8">
        <div className="@container">
          <div className="relative flex min-h-[400px] flex-col gap-6 overflow-hidden rounded-lg bg-slate-900 items-center justify-center p-8 text-center shadow-lg group">
            {/* Hero Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                alt={imageAlt || title}
                className="w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
                src={imageSrc}
                width={1280}
                height={480}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
            </div>

            <div className="relative z-10 flex flex-col gap-4 max-w-3xl">
              {preTitle && (
                <span className="text-primary font-bold uppercase tracking-widest text-xs mb-[-10px]">
                  {preTitle}
                </span>
              )}
              <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
                {title}
              </h1>
              <p className="text-slate-200 text-lg font-normal leading-relaxed max-w-2xl mx-auto">
                {description}
              </p>
            </div>

            {(primaryButton || secondaryButton) && (
              <div className="relative z-10 flex gap-4 mt-4 flex-wrap justify-center">
                {primaryButton && (
                  <Link
                    className="flex items-center justify-center rounded h-12 px-8 bg-primary hover:bg-blue-600 text-white text-base font-bold transition-colors shadow-lg shadow-primary/30"
                    href={primaryButton.href}
                  >
                    {primaryButton.text}
                  </Link>
                )}
                {secondaryButton && (
                  <Link
                    className="flex items-center justify-center rounded h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 text-base font-bold transition-colors"
                    href={secondaryButton.href}
                  >
                    {secondaryButton.text}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="w-full max-w-[1280px] px-4 sm:px-10 py-2">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            {breadcrumbs.map((crumb, index) => (
              <div key={crumb.label} className="flex items-center gap-2">
                {crumb.href ? (
                  <Link
                    className="hover:text-primary transition-colors"
                    href={crumb.href}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-slate-900  font-medium">
                    {crumb.label}
                  </span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <span className="material-symbols-outlined text-xs">
                    chevron_right
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
