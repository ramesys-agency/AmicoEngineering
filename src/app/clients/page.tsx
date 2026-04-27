import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import IndustrySectors from "./components/IndustrySectors";
import ClientLogos from "./components/ClientLogos";
import Testimonials from "./components/Testimonials";
import ClientsCTA from "./components/ClientsCTA";

export default function ClientsPage() {
  return (
    <>
      <main className="flex-1 w-full">
        <PageHero
          title="Engineering Solutions for Critical Industries"
          description="Delivering precision and innovation across mining, manufacturing, and logistics sectors worldwide."
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCNCXh82QaKl8HnUMvAe-5wAtVTYFqHcvoBPqDdw2YAUvmlUylB31cziC8MWHmVMnFozHtS9rEHOLR1q8IWS6P8kWuOM4MIGOAihtEe97w6VFTx_igoY7Noi8Sixg-kdcH4Td_aosow6MtGmYljCOuT5DspIvwvlI6rk3z4XdvlkPGMONo-fRAdEdRjg9dA2rzFUKAza5vCMGoPqHlW3pYa3iUfzqqVLSBPUWVHwalPhR87B_Dg0h_7H2pXfglYkxtlbaFXcppU-TSD"
          primaryButton={{ text: "View Our Projects", href: "/solutions" }}
          secondaryButton={{ text: "Learn More", href: "/about" }}
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Clients" }]}
        />
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-10 py-8 flex flex-col items-center">
          <div className="w-full flex flex-col gap-16">
            <ClientLogos />
            <IndustrySectors />
            <Testimonials />
          </div>
        </div>
        <ClientsCTA />
      </main>
      <Footer />
    </>
  );
}
