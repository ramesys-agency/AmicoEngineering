"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Clients", href: "/clients" },
    { name: "Gallery", href: "/gallery" },
  ];
  return (
    <>
      {/* Top Utility Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="size-8 text-primary">
                <svg
                  fill="currentColor"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"></path>
                </svg>
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Amico Engineering
              </h1>
            </div>
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontSize: "20px" }}
                >
                  phone
                </span>
                <span>+1 (555) 019-2834</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontSize: "20px" }}
                >
                  mail
                </span>
                <span>sales@amicaengineering.com</span>
              </div>
              <Link
                className="flex items-center gap-2 hover:text-primary transition-colors"
                href="https://wa.me/15550192834"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                <span>WhatsApp Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Main Navigation Bar */}
      <nav className="bg-primary sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1 w-full">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname?.startsWith(link.href));

                return (
                  <Link
                    key={link.name}
                    className={`text-white px-4 py-2 rounded text-sm font-bold uppercase tracking-wide transition-colors ${
                      isActive ? "bg-white/20" : "hover:bg-white/10"
                    }`}
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            {/* Action Button */}
            <div className="hidden md:block ml-auto">
              <Link
                className="bg-white text-primary hover:bg-slate-100 px-4 py-2 rounded text-sm font-bold uppercase tracking-wide shadow-sm flex items-center gap-2 transition-colors"
                href="#"
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "18px" }}
                >
                  request_quote
                </span>
                Request Quote
              </Link>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button className="text-white hover:bg-primary-dark p-2 rounded">
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
