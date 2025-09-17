import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VirtualTours from "@/components/sections/VirtualTours";
import InteractiveMap from "@/components/sections/InteractiveMap";
import CulturalCalendar from "@/components/sections/CulturalCalendar";
import TravelPackages from "@/components/sections/TravelPackages";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <VirtualTours />
        <InteractiveMap />
        <CulturalCalendar />
        <TravelPackages />
      </main>
      <Footer />
    </div>
  );
};

export default Index;