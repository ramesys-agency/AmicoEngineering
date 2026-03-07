import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b0f19] text-white pt-16 pb-8 border-t-4 border-primary mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="size-6 text-primary">
                <svg
                  fill="currentColor"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"></path>
                </svg>
              </div>
              <h2 className="text-xl font-bold">Amico Engineering</h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Providing innovative engineering solutions and precision machinery
              to the global market since 1999.
            </p>
            <div className="flex gap-4">
              <Link
                className="size-8 rounded bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white"
                href="#"
              >
                <span className="text-xs font-bold">in</span>
              </Link>
              <Link
                className="size-8 rounded bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white"
                href="#"
              >
                <span className="text-xs font-bold">tw</span>
              </Link>
              <Link
                className="size-8 rounded bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white"
                href="#"
              >
                <span className="text-xs font-bold">fb</span>
              </Link>
            </div>
          </div>
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-slate-300">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/about"
                >
                  About Company
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/products"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/contact"
                >
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-slate-300">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                  location_on
                </span>
                <span>
                  1234 Manufacturing Blvd,
                  <br />
                  Industrial District, NY 10012
                  <br />
                  United States
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">
                  phone
                </span>
                <span>+1 (555) 019-2834</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">
                  mail
                </span>
                <span>contact@amicaengineering.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">
                  fax
                </span>
                <span>+1 (555) 019-2835</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 Amico Engineering Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
