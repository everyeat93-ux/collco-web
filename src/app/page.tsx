import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { HeroSection } from "@/components/hero/HeroSection";
import { ProductsSection } from "@/components/products/ProductsSection";
import { CraftSection } from "@/components/craft/CraftSection";
import { StoreSection } from "@/components/store/StoreSection";
import { AboutSection } from "@/components/about/AboutSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { MinimapTracker } from "@/components/common/MinimapTracker";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0B0B0C] selection:bg-[#FFE600] selection:text-black">
      {/* Sticky Minimal Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Frame 1: Hero Opening (Rauno Typography & Statement) */}
        <HeroSection />

        {/* Frame 2: Projects Index (7 Shipped Works with Rauno Line Connectors) */}
        <ProductsSection />

        {/* Frame 3: Craft Lab (Interactive Physics & Algorithms Playground) */}
        <CraftSection />

        {/* Frame 4: Physical Curation Store */}
        <StoreSection />

        {/* Frame 5: Doctrine & Tech Architecture */}
        <AboutSection />

        {/* Frame 6: Contact & Rauno Four-Corner Frame + Manifesto */}
        <ContactSection />
      </main>

      {/* Floating Bottom Minimap Tracker (Rauno Signature Scrubber) */}
      <MinimapTracker />

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
