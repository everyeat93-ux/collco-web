import type { Metadata } from "next";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { HeroSection } from "@/components/hero/HeroSection";
import { FeaturedProjectSection } from "@/components/home/FeaturedProjectSection";
import { StudioCaseSection } from "@/components/home/StudioCaseSection";
import { HomeManifestoSection } from "@/components/home/HomeManifestoSection";
import { SITE_URL } from "@/data/siteConfig";

export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL,
  },
};

export default function Home() {
  return (
    <div id="top" className="flex flex-col min-h-screen bg-white text-[#0B0B0C] selection:bg-[#FFE600] selection:text-black">
      <Navbar />

      <main className="flex-1 w-full">
        {/* 1. 짧은 히어로 */}
        <HeroSection />

        {/* 2. 대표 프로젝트 3개 (장날가자 + 딛다 · 랩티로그) */}
        <FeaturedProjectSection />

        {/* 3. 황금모피 제작 사례 */}
        <StudioCaseSection />

        {/* 4. 짧은 노란 매니페스토 */}
        <HomeManifestoSection />
      </main>

      <Footer />
    </div>
  );
}
