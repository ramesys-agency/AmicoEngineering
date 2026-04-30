import Link from "next/link";

export default function ContactBreadcrumb() {
  return (
    <div className="bg-white  border-b border-slate-200 ">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-4">
        <div className="flex items-center gap-2 text-sm">
          <Link
            className="text-slate-500 hover:text-primary transition-colors"
            href="/"
          >
            Home
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-900  font-medium">
            Contact Us
          </span>
        </div>
      </div>
    </div>
  );
}
