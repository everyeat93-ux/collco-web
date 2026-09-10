import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { HeroSection } from "@/components/hero/HeroSection";
import { ProductsSection } from "@/components/products/ProductsSection";
import { StoreSection } from "@/components/store/StoreSection";
import { AboutSection } from "@/components/about/AboutSection";
import { ContactSection } from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0d1117] text-[#f0f6fc]">
      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Core Digital Products (5 items with modal detail view) */}
        <ProductsSection />

        {/* Section 3: Collection & Curated Goods Store */}
        <StoreSection />

        {/* Section 4: About Solo Builder & Tech Stack */}
        <AboutSection />

        {/* Section 5: Contact Form & Inquiry */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
