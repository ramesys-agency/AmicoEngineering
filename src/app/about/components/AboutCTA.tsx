"use client";

import { useState } from "react";
import { X, Clock } from "lucide-react";
import Link from "next/link";

export default function AboutCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-background-light dark:bg-slate-800 p-10 rounded-lg">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Ready to engineer your next project?
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Contact our expert team today for a consultation or quote.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              href="/contact"
              className="cursor-pointer w-full sm:w-auto flex items-center justify-center rounded bg-primary hover:bg-primary-dark transition-colors text-white font-bold h-12 px-8 whitespace-nowrap"
            >
              Get in Touch
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer w-full sm:w-auto flex items-center justify-center rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-transparent hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-slate-900 dark:text-white font-bold h-12 px-8 whitespace-nowrap"
            >
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      {/* Coming Soon Dialog */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all border border-slate-200 dark:border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 sm:p-8 text-center">
              <div className="flex justify-end mb-2">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                <Clock size={32} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Coming Soon
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                We&apos;re currently updating our brochure with the latest
                engineering innovations and project case studies. Please check
                back soon!
              </p>

              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold h-12 rounded-lg transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
