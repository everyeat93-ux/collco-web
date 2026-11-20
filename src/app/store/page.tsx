import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { StoreSection } from "@/components/store/StoreSection";
import { SITE_URL } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "컬렉션 스토어 (Collector's Shelf)",
  description:
    "좋아해서 모으고, 좋아해서 나눕니다. 콜코 스튜디오가 애정하는 피규어와 TCG 카드 컬렉션 선반과 네이버 스마트스토어를 소개합니다.",
  alternates: {
    canonical: `${SITE_URL}/store`,
  },
  openGraph: {
    title: "컬렉션 스토어 | 콜코 (COLLCO)",
    description:
      "좋아해서 모으고, 좋아해서 나눕니다. 콜코의 작은 수집가 선반과 스마트스토어를 둘러보세요.",
    url: `${SITE_URL}/store`,
    images: [
      {
        url: "/collection/figure-cabinet.jpg",
        alt: "콜코 스튜디오 피규어 진열장 컬렉션",
      },
    ],
  },
};

export default function StorePage() {
  return (
    <div id="top" className="flex flex-col min-h-screen bg-white text-[#0B0B0C]">
      <Navbar />
      <main className="flex-1 w-full pt-20 sm:pt-24">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#484B52] hover:text-[#0B0B0C] transition-colors py-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>콜코 홈으로 돌아가기</span>
          </Link>
        </div>
        <StoreSection />
      </main>
      <Footer />
    </div>
  );
}
