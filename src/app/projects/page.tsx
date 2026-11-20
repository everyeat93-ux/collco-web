import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { ProductsSection } from "@/components/products/ProductsSection";
import { getProductCounts } from "@/data/products";
import { SITE_URL } from "@/data/siteConfig";

const counts = getProductCounts();

export const metadata: Metadata = {
  title: `전체 프로젝트 (${counts.total})`,
  description: `콜코가 직접 기획·개발·운영하는 ${counts.total}개의 앱과 웹 프로젝트 목록입니다. 장날가자, 딛다, 황금모피, 두둥, 랩티로그 등을 둘러보세요.`,
  alternates: {
    canonical: `${SITE_URL}/projects`,
  },
  openGraph: {
    title: `전체 프로젝트 (${counts.total}) | 콜코 (COLLCO)`,
    description: `콜코가 만든 ${counts.total}개의 앱과 웹 프로젝트를 한눈에 살펴보세요.`,
    url: `${SITE_URL}/projects`,
    images: [
      {
        url: "/logo-collco-og.png",
        alt: "콜코 COLLCO 전체 프로젝트",
      },
    ],
  },
};

export default function ProjectsPage() {
  return (
    <div id="top" className="flex flex-col min-h-screen bg-white text-[#0B0B0C]">
      <Navbar />
      <main className="flex-1 w-full pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#484B52] hover:text-[#0B0B0C] transition-colors py-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>콜코 홈으로 돌아가기</span>
          </Link>
        </div>
        <ProductsSection />
      </main>
      <Footer />
    </div>
  );
}
