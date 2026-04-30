"use client";

import { useState } from "react";
import { categories } from "@/data/inventory";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    category: "",
    specifications: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.category) {
      setErrorMessage("Please fill in all mandatory fields: Name, Phone Number, and Category.");
      setShowErrorModal(true);
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send quote request");
      }

      setStatus("success");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        category: "",
        specifications: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
      setStatus("error");
      setShowErrorModal(true);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white  rounded-xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-200  animate-in zoom-in-95 duration-300">
            <div className="p-6">
              <div className="size-14 rounded-full bg-red-100  flex items-center justify-center text-red-600  mx-auto mb-4">
                <span className="material-symbols-outlined text-3xl">error_outline</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900  text-center mb-3">Request Failed</h3>
              <p className="text-slate-600  text-center text-sm mb-6">{errorMessage}</p>
              <button
                onClick={() => {
                  setShowErrorModal(false);
                  if (status === "error") setStatus("idle");
                }}
                className="w-full py-3 bg-primary text-white font-bold rounded-lg transition-colors shadow-lg hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white  rounded-2xl shadow-2xl overflow-hidden border border-slate-200 ">
        <div className="bg-primary px-8 py-10 text-white relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-2">Request a Quote</h2>
                <p className="text-blue-100 opacity-90 max-w-lg">
                    Fill out the form below with your project requirements, and our engineering team will provide a comprehensive technical proposal and quote.
                </p>
            </div>
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 size-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 size-48 bg-blue-400/20 rounded-full blur-2xl"></div>
        </div>

        <div className="p-8 md:p-10">
          {status === "success" ? (
            <div className="py-12 text-center animate-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-100  rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 ">
                <span className="material-symbols-outlined text-5xl">check_circle</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900  mb-3">Quote Request Submitted!</h3>
              <p className="text-slate-600  mb-8 max-w-md mx-auto">
                Thank you for your interest in Amico Engineering. Our team has received your specifications and will get back to you with a formal proposal within 1-2 business days.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="px-8 py-3 bg-slate-100  text-slate-700  font-bold rounded-lg hover:bg-slate-200  transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Personal/Company Info */}
                <div className="space-y-6">
                  <h4 className="text-sm font-bold text-primary uppercase tracking-wider">Contact Information</h4>
                  <div className="space-y-4">
                    <label className="block">
                      <span className="text-sm font-semibold text-slate-700  block mb-1.5">Full Name *</span>
                      <input
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-300  bg-slate-50  px-4 py-3 text-slate-900  focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                        placeholder="John Doe"
                      />
                    </label>
                    <label className="block">
                      <span className="text-sm font-semibold text-slate-700  block mb-1.5">Company Name</span>
                      <input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-300  bg-slate-50  px-4 py-3 text-slate-900  focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                        placeholder="Acme Engineering Ltd. (Optional)"
                      />
                    </label>
                    <div className="grid grid-cols-1 gap-4">
                      <label className="block">
                        <span className="text-sm font-semibold text-slate-700  block mb-1.5">Email Address</span>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-slate-300  bg-slate-50  px-4 py-3 text-slate-900  focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                          placeholder="john@company.com (Optional)"
                        />
                      </label>
                      <label className="block">
                        <span className="text-sm font-semibold text-slate-700  block mb-1.5">Phone Number *</span>
                        <input
                          required
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-slate-300  bg-slate-50  px-4 py-3 text-slate-900  focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                          placeholder="+91 98765 43210"
                        />
                      </label>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <h4 className="text-sm font-bold text-primary uppercase tracking-wider">Project Requirements</h4>
                  <div className="space-y-4">
                    <label className="block">
                      <span className="text-sm font-semibold text-slate-700  block mb-1.5">Select Category *</span>
                      <select
                        required
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-300  bg-slate-50  px-4 py-3 text-slate-900  focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                      >
                        <option value="" disabled>Choose a product category</option>
                        {categories.map((cat) => (
                          <option key={cat.id} value={cat.name}>{cat.name}</option>
                        ))}
                        <option value="Custom Engineering">Custom Engineering / Others</option>
                      </select>
                    </label>
                    <label className="block">
                      <span className="text-sm font-semibold text-slate-700  block mb-1.5">Detailed Specifications</span>
                      <textarea
                        name="specifications"
                        value={formData.specifications}
                        onChange={handleChange}
                        rows={5}
                        className="w-full rounded-lg border border-slate-300  bg-slate-50  px-4 py-3 text-slate-900  focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none"
                        placeholder="Please include dimensions, capacity, material type, etc. (Optional)"
                      ></textarea>
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100  flex flex-col sm:flex-row items-center justify-between gap-6">
                <p className="text-xs text-slate-500  max-w-sm">
                  By submitting this request, you agree to our privacy policy and terms of service. We will use your information solely to provide the requested quote.
                </p>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full sm:w-auto px-10 py-4 bg-primary text-white font-bold rounded-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-3 ${status === "loading" ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {status === "loading" ? (
                    <>
                      <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Quote Request</span>
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
