import Link from "next/link";

export default function ContactForm() {
  return (
    <div className="lg:col-span-5">
      <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg sticky top-24">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Send a Message
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Please fill out the form below. Our engineering team typically
            responds within 24 hours.
          </p>
        </div>
        <form className="flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-5">
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                Full Name
              </span>
              <input
                className="form-input w-full rounded border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 px-4 py-2.5 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-slate-400 text-sm"
                placeholder="e.g. John Doe"
                type="text"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                Company Name
              </span>
              <input
                className="form-input w-full rounded border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 px-4 py-2.5 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-slate-400 text-sm"
                placeholder="e.g. Acme Industries Ltd."
                type="text"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                Email Address
              </span>
              <input
                className="form-input w-full rounded border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 px-4 py-2.5 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-slate-400 text-sm"
                placeholder="name@company.com"
                type="email"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                Subject
              </span>
              <select className="form-select w-full rounded border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 px-4 py-2.5 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary text-sm">
                <option>General Inquiry</option>
                <option>Project Quote Request</option>
                <option>Supplier Partnership</option>
                <option>Careers</option>
              </select>
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                Project Details / Inquiry
              </span>
              <textarea
                className="form-textarea w-full rounded border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 px-4 py-2.5 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-slate-400 text-sm resize-none"
                placeholder="Please describe your requirements..."
                rows={4}
              ></textarea>
            </label>
          </div>
          <div className="pt-2">
            <button
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded shadow-sm hover:shadow transition-all duration-200"
              type="button"
            >
              <span>Send Message</span>
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
            <p className="text-center text-xs text-slate-400 mt-4">
              By submitting this form, you agree to our{" "}
              <Link
                className="underline hover:text-slate-600 dark:hover:text-slate-200"
                href="#"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
