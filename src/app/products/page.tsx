import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import CategoriesGrid from "./components/CategoriesGrid";
import CategoriesCTA from "./components/CategoriesCTA";

export default function ProductsOverview() {
  return (
    <>
      <main className="flex-1 flex flex-col items-center w-full">
        <PageHero
          preTitle="World Class Manufacturing"
          title="Precision Engineering Solutions"
          description="Explore our comprehensive range of industrial automation and fabrication systems designed for maximum efficiency and reliability."
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAFNpGtAVaOGxLwgQih3kGqQwmo_xmjbtqGXxKVXawmYdcOEscuyf1P3qoMDI_QzCsJWIAM4L7t5jDAldairTwZlnN4AuYme5nFanZ8U9Fw2e4yUCM9ms3Id0TotqRPzc2HlJInnsHZKhTDUqHdlo7KzGuggG-MDlRyKCnh7DcjYZLxw7K1Ya8Cm8ATzGBinwxSV8BecBhtpK5TP5Q4nbbineU9SrePNyG3J-K342Nm7-Az4KTbz7kV0iGOOi_9rwEIHUGTlOp_0sq0"
          primaryButton={{ text: "View All Categories", href: "#categories" }}
          secondaryButton={{ text: "Contact Sales", href: "/contact" }}
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        />
        <CategoriesGrid />
        <CategoriesCTA />
      </main>
      <Footer />
    </>
  );
}
