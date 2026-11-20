import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { CraftSection } from "@/components/craft/CraftSection";
import { SITE_URL } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Craft Lab — 앱 핵심 기능 체험",
  description:
    "콜코가 만든 앱의 핵심 기능을 브라우저에서 바로 써보세요. 하늘이 vs 라우니 랠리 타이밍, 딛다 6방향 풋워크 훈련, FM 역할별 가중치 계산 데모를 제공합니다.",
  alternates: {
    canonical: `${SITE_URL}/craft`,
  },
  openGraph: {
    title: "Craft Lab | 콜코 (COLLCO)",
    description: "콜코가 만든 앱의 핵심 기능을 설치 없이 브라우저에서 바로 체험해 보세요.",
    url: `${SITE_URL}/craft`,
    images: [
      {
        url: "/logo-collco-og.png",
        alt: "콜코 Craft Lab",
      },
    ],
  },
};

export default function CraftPage() {
  return (
    <div id="top" className="flex flex-col min-h-screen bg-white text-[#0B0B0C]">
      <Navbar />
      <main className="flex-1 w-full pt-20 sm:pt-24 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#484B52] hover:text-[#0B0B0C] transition-colors py-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>콜코 홈으로 돌아가기</span>
          </Link>
        </div>
        <CraftSection />
      </main>
      <Footer />
    </div>
  );
}
