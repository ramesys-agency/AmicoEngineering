"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setStatus("success");
      setFormData({
        name: "",
        company: "",
        email: "",
        subject: "General Inquiry",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      const msg =
        error instanceof Error ? error.message : "Something went wrong";
      setErrorMessage(msg);
      setStatus("error");
      setShowErrorModal(true);
    }
  };

  return (
    <div className="lg:col-span-5 relative">
      {/* Error Modal Overlay */}
      {showErrorModal && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white  rounded-xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-200  animate-in zoom-in-95 duration-300">
            <div className="p-6">
              <div className="size-14 rounded-full bg-red-100  flex items-center justify-center text-red-600  mx-auto mb-4">
                <span className="material-symbols-outlined text-3xl">
                  error_outline
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900  text-center mb-3">
                Message Not Sent
              </h3>
              <p className="text-slate-600  text-center text-sm leading-relaxed mb-6">
                {errorMessage}
              </p>
              <button
                onClick={() => {
                  setShowErrorModal(false);
                  setStatus("idle");
                }}
                className="cursor-pointer w-full py-3 bg-primary text-white font-bold rounded-lg transition-colors shadow-lg"
              >
                Close
              </button>
            </div>
            <div className="bg-slate-50  px-6 py-4 border-t border-slate-100  flex justify-center gap-6">
              <a
                href="https://wa.me/919432581894"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-primary hover:text-blue-700 flex items-center gap-1 transition-colors"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                WhatsApp
              </a>
              <a
                href="mailto:amicoengg@gmail.com"
                className="text-xs font-bold text-primary hover:text-blue-700 flex items-center gap-1 transition-colors"
              >
                <span className="material-symbols-outlined text-sm">mail</span>
                Email Directly
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white  p-6 md:p-8 rounded-lg border border-slate-200  shadow-lg sticky top-24">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900  mb-2">
            Send a Message
          </h2>
          <p className="text-slate-500  text-sm">
            Please fill out the form below. Our engineering team typically
            responds within 24 hours.
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-green-50  border border-green-200  p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-green-100  rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-green-600  text-3xl">
                check_circle
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900  mb-2">
              Message Sent!
            </h3>
            <p className="text-slate-600  mb-6">
              Thank you for contacting us. We&apos;ll get back to you shortly.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="text-primary font-semibold hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 gap-5">
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-semibold text-slate-900 ">
                  Full Name
                </span>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input w-full rounded border border-slate-300  bg-slate-50  px-4 py-2.5 text-slate-900  focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-slate-400 text-sm"
                  placeholder="e.g. John Doe"
                  type="text"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-semibold text-slate-900 ">
                  Company Name
                </span>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input w-full rounded border border-slate-300  bg-slate-50  px-4 py-2.5 text-slate-900  focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-slate-400 text-sm"
                  placeholder="e.g. Acme Industries Ltd."
                  type="text"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-semibold text-slate-900 ">
                  Email Address
                </span>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input w-full rounded border border-slate-300  bg-slate-50  px-4 py-2.5 text-slate-900  focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-slate-400 text-sm"
                  placeholder="name@company.com"
                  type="email"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-semibold text-slate-900 ">
                  Subject
                </span>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-select w-full rounded border border-slate-300  bg-slate-50  px-4 py-2.5 text-slate-900  focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Project Quote Request">
                    Project Quote Request
                  </option>
                  <option value="Supplier Partnership">
                    Supplier Partnership
                  </option>
                  <option value="Careers">Careers</option>
                </select>
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-semibold text-slate-900 ">
                  Project Details / Inquiry
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea w-full rounded border border-slate-300  bg-slate-50  px-4 py-2.5 text-slate-900  focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-slate-400 text-sm resize-none"
                  placeholder="Please describe your requirements..."
                  rows={4}
                ></textarea>
              </label>
            </div>

            <div className="pt-2">
              <button
                disabled={status === "loading"}
                className={`w-full cursor-pointer flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded shadow-sm hover:shadow transition-all duration-200 ${
                  status === "loading" ? "opacity-70 cursor-not-allowed" : ""
                }`}
                type="submit"
              >
                <span>
                  {status === "loading" ? "Sending..." : "Send Message"}
                </span>
                {status !== "loading" && (
                  <span className="material-symbols-outlined text-sm">
                    send
                  </span>
                )}
              </button>
              <p className="text-center text-xs text-slate-400 mt-4">
                By submitting this form, you agree to our{" "}
                <Link
                  className="underline hover:text-slate-600 "
                  href="#"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
