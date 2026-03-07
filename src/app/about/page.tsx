import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import AboutIntroduction from "./components/AboutIntroduction";
import AboutMissionVision from "./components/AboutMissionVision";
import AboutTimeline from "./components/AboutTimeline";
import AboutCapabilities from "./components/AboutCapabilities";
import AboutStats from "./components/AboutStats";
import AboutCTA from "./components/AboutCTA";

export default function About() {
  return (
    <>
      <main className="flex-1 w-full flex-col overflow-x-hidden">
        <PageHero
          title="Pioneering Industrial Solutions"
          description="Decades of precision engineering, structural fabrication, and innovative manufacturing."
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAArprkWw9SAy7ppf9NdDDnK5QjzkDToFaTWQThx4qoDMPAcfRv79YBLPD4LDLzqdV5IjGqnONHNkVpX-nuBVq9hxnFZZyXRzxS65ZK1sYirwqgvk5rjLVY83rObY1KlGwsH4dZY2MmT6c56Arqhqqeu-Z6_tw8SYGd1uxEkQVjmwH8_oM_6xl1Ktlux8M_zzjYr7CV4E_jQ4eA7GuiqHrhWfw7HLp1k66UUqfyy2lDniK_7-ycNB-MRvXqIF8NAhl91JEvEGg4PBzA"
          primaryButton={{ text: "Our Journey", href: "/about#journey" }}
          secondaryButton={{ text: "Contact Us", href: "/contact" }}
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        />
        <AboutIntroduction />
        <AboutMissionVision />
        <AboutTimeline />
        <AboutCapabilities />
        <AboutStats />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
