import Footer from "@/components/layout/Footer";

import ContactHeader from "./components/ContactHeader";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";

export default function Contact() {
  return (
    <>
      <main className="flex-grow">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-10 lg:py-16">
          <ContactHeader />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
