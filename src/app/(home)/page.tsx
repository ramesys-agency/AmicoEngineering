import Footer from "@/components/layout/Footer";
import HomeHero from "./components/HomeHero";
import CompanyIntroduction from "./components/CompanyIntroduction";
import ProductCategoryGrid from "./components/ProductCategoryGrid";
import WhyChooseUs from "./components/WhyChooseUs";
import {
  TrustedClients,
  Certifications,
} from "./components/ClientsAndCertifications";
import HomeGallery from "./components/HomeGallery";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <HomeHero />
        <CompanyIntroduction />
        <ProductCategoryGrid />
        <WhyChooseUs />
        <TrustedClients />
        <HomeGallery />
        <Certifications />
      </main>
      <Footer />
    </>
  );
}
