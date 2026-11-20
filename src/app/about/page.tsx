import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { AboutSection } from "@/components/about/AboutSection";
import { getProductCounts } from "@/data/products";
import { SITE_URL, SOCIAL_LINKS } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "콜코 소개 · 제작 철학",
  description:
    "콜코(COLLCO)가 프로덕트를 만드는 방식과 세 가지 제작 철학, 사용하는 기술 스택, 그리고 콜코 매니페스토를 소개합니다.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "콜코 소개 · 제작 철학 | 콜코 (COLLCO)",
    description: "작게 만들고 바로 써보며, 직접 겪은 불편을 처음부터 끝까지 책임지는 콜코의 제작 철학입니다.",
    url: `${SITE_URL}/about`,
    images: [
      {
        url: "/logo-collco-og.png",
        alt: "콜코 COLLCO",
      },
    ],
  },
};

export default function AboutPage() {
  const counts = getProductCounts();

  return (
    <div id="top" className="flex flex-col min-h-screen bg-white text-[#0B0B0C]">
      <Navbar />
      <main className="flex-1 w-full pt-20 sm:pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#484B52] hover:text-[#0B0B0C] transition-colors py-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>콜코 홈으로 돌아가기</span>
          </Link>
        </div>

        {/* 제작 철학 & 기술 스택 */}
        <AboutSection />

        {/* 전체 노란 매니페스토 */}
        <section
          aria-label="콜코 매니페스토 전문"
          className="py-6 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
        >
          <div className="bg-[#FFE600] rounded-2xl sm:rounded-3xl p-7 sm:p-14 text-[#0B0B0C] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
            <div>
              <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-black/60 mb-2.5">
                COLLCO MANIFESTO
              </div>
              <p className="text-xl sm:text-2xl lg:text-3xl font-black leading-snug tracking-tight">
                Make it fast.
                <br />
                Make it beautiful.
                <br />
                Make it consistent.
                <br />
                Make it timeless.
                <br />
                Make it soulful.
                <br />
                Make it.
              </p>
            </div>

            <div className="max-w-sm space-y-4 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-black/15 md:pl-8">
              <p className="text-xs sm:text-sm text-black/85 leading-[1.8] break-keep-all">
                &ldquo;군더더기를 덜어내고 본질에 집중합니다. 일상의 작은 불편과 이야기를 담은 {counts.total}개의 앱·웹, 그리고 좋아하는 마음으로 골라 담은 컬렉션.&rdquo;
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-mono font-bold text-black/80">
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4"
                >
                  ↗ Instagram
                </a>
                <a
                  href={SOCIAL_LINKS.threads}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4"
                >
                  ↗ Threads
                </a>
                <a
                  href={SOCIAL_LINKS.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4"
                >
                  ↗ Naver Blog
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
