import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Clock, Info } from "lucide-react";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { InquiryFormCard } from "@/components/contact/ContactSection";
import { PRODUCTS } from "@/data/products";
import { SITE_URL, STUDIO_OFFER } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: `${STUDIO_OFFER.productName} 제작 안내`,
  description: `${STUDIO_OFFER.targetAudience}. 황금모피 사례와 기본 제작 범위·일정·문의 방법을 확인하세요.`,
  alternates: {
    canonical: `${SITE_URL}/studio`,
  },
  openGraph: {
    title: `${STUDIO_OFFER.productName} 제작 안내 | 콜코 (COLLCO)`,
    description: `${STUDIO_OFFER.summary} 기본 제작 범위와 상담 문의 방법을 안내합니다.`,
    url: `${SITE_URL}/studio`,
    type: "website",
    images: [
      {
        url: "/previews/goldfur.png",
        alt: "황금모피 브랜드 웹사이트 제작 사례",
      },
    ],
  },
};

export default function StudioPage() {
  const caseStudy = PRODUCTS.find((p) => p.id === STUDIO_OFFER.caseStudyProductId);

  return (
    <div id="top" className="flex flex-col min-h-screen bg-white text-[#0B0B0C]">
      <Navbar />

      <main className="flex-1 w-full pt-24 sm:pt-32 pb-16 sm:pb-24 px-3 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8 sm:space-y-12">
        {/* Back link */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#484B52] hover:text-[#0B0B0C] transition-colors py-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>콜코 홈으로 돌아가기</span>
          </Link>
        </div>

        {/* Studio Hero */}
        <header className="relative bg-white border border-[#E8E5DC] rounded-[1.5rem] sm:rounded-[2.25rem] p-5 sm:p-12 overflow-hidden shadow-rauno-card">
          <div
            className="hidden sm:block absolute -top-6 right-0 w-44 h-44 rounded-full bg-[#FFE600]/75 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF9F5] border border-[#E8E5DC] text-[11px] font-mono font-bold text-[#484B52]">
              <span className="w-2 h-2 rounded-full bg-[#FFE600] border border-black/40" />
              <span>COLLCO STUDIO · WEBSITE BUILD</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0B0B0C] tracking-tight leading-[1.22] break-keep-all">
              {STUDIO_OFFER.productName}
            </h1>

            <p className="text-sm sm:text-base text-[#484B52] leading-[1.75] break-keep-all">
              {STUDIO_OFFER.targetAudience}을 위해 제작합니다. {STUDIO_OFFER.summary}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#studio-inquiry"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-full bg-[#0B0B0C] hover:bg-[#252528] text-white text-sm font-bold transition-all shadow-rauno-xs"
              >
                <span>제작 문의하기</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#studio-scope"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-full bg-white hover:bg-[#F8F7F4] text-[#0B0B0C] border border-[#0B0B0C]/25 hover:border-[#0B0B0C] text-sm font-bold transition-all"
              >
                <span>제작 범위 먼저 보기</span>
              </a>
            </div>
          </div>
        </header>

        {/* Step 1: 황금모피 사례 */}
        <section aria-labelledby="studio-case-title" className="bg-[#FAF9F5] border border-[#E8E5DC] rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-8 lg:p-10">
          <div className="text-[11px] font-mono font-bold text-[#737067] uppercase tracking-wider mb-2">
            STEP 01 · 제작 사례
          </div>
          <h2
            id="studio-case-title"
            className="text-xl sm:text-3xl font-black text-[#0B0B0C] tracking-tight mb-4"
          >
            황금모피 브랜드 웹사이트 사례
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#E8E5DC] bg-white shadow-rauno-xs">
                <Image
                  src={caseStudy?.previewImage || "/previews/goldfur.png"}
                  alt="황금모피 공식 브랜드 웹사이트 실제 화면"
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-3.5">
              <p className="text-sm text-[#484B52] leading-[1.75] break-keep-all">
                35년 장인 부부의 제작 이야기와 대표 제품 룩북, 공방 사전 예약 방문 안내를 한 페이지에 담아
                처음 방문한 고객도 브랜드의 신뢰와 작업 과정을 쉽게 이해할 수 있도록 구성했습니다.
              </p>
              <p className="text-xs text-[#737067] bg-white border border-[#E8E5DC] rounded-xl px-3.5 py-2.5 leading-relaxed">
                콜코의 브랜드 웹사이트 제작·운영 경험을 보여드리는 사례입니다.
              </p>
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <Link
                  href="/projects/goldfur"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[42px] rounded-full bg-[#0B0B0C] hover:bg-[#252528] text-white text-xs font-bold transition-all"
                >
                  <span>제작 사례 자세히 보기</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                {caseStudy?.demoUrl && (
                  <a
                    href={caseStudy.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[42px] rounded-full bg-white hover:bg-[#F8F7F4] text-[#0B0B0C] border border-[#E8E5DC] hover:border-[#0B0B0C] text-xs font-bold transition-all"
                  >
                    <span>황금모피 사이트 보기</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Step 2: 제작 범위와 안내 (Single Source of Truth from STUDIO_OFFER) */}
        <section id="studio-scope" aria-labelledby="studio-scope-title" className="space-y-5">
          <div>
            <div className="text-[11px] font-mono font-bold text-[#737067] uppercase tracking-wider mb-2">
              STEP 02 · 제작 범위와 진행 안내
            </div>
            <h2
              id="studio-scope-title"
              className="text-xl sm:text-3xl font-black text-[#0B0B0C] tracking-tight"
            >
              내 요청이 기본 상품에 맞는지 먼저 확인해 보세요
            </h2>
          </div>

          {/* Offer Summary Banner (Price Private — Consultation-based) */}
          <div className="bg-white border-2 border-[#0B0B0C] rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-8 shadow-rauno-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono font-bold text-[#737067] uppercase">
                기본 제작 상품
              </div>
              <div className="text-xl sm:text-2xl font-black text-[#0B0B0C] mt-1">
                {STUDIO_OFFER.productName}
              </div>
              <p className="text-xs sm:text-sm text-[#484B52] mt-1.5 break-keep-all">
                {STUDIO_OFFER.priceNote}
              </p>
            </div>

            <div className="sm:text-right shrink-0">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FAF9F5] border border-[#E8E5DC] text-sm sm:text-base font-black text-[#0B0B0C]">
                {STUDIO_OFFER.price}
              </div>
            </div>
          </div>

          {/* Scope / Deliverables / Timeline / Separate Discussion */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            <div className="bg-white border border-[#E8E5DC] rounded-2xl p-5 sm:p-7 space-y-3 shadow-rauno-xs">
              <h3 className="text-base font-black text-[#0B0B0C]">기본 포함 범위</h3>
              <ul className="space-y-2">
                {STUDIO_OFFER.includedScope.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-[#484B52]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-[#E8E5DC] rounded-2xl p-5 sm:p-7 space-y-3 shadow-rauno-xs">
              <h3 className="text-base font-black text-[#0B0B0C]">납품 항목</h3>
              <ul className="space-y-2">
                {STUDIO_OFFER.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-[#484B52]">
                    <CheckCircle2 className="w-4 h-4 text-[#0B0B0C] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#FAF9F5] border border-[#E8E5DC] rounded-2xl p-5 sm:p-7 space-y-2.5">
              <div className="flex items-center gap-2 text-base font-black text-[#0B0B0C]">
                <Clock className="w-4 h-4" />
                <h3>제작 일정 안내</h3>
              </div>
              <p className="text-xs sm:text-sm font-bold text-[#0B0B0C] leading-relaxed break-keep-all">
                {STUDIO_OFFER.timeline.proposed}
              </p>
              <p className="text-xs text-[#737067] leading-relaxed break-keep-all">
                {STUDIO_OFFER.timeline.note}
              </p>
            </div>

            <div className="bg-[#FAF9F5] border border-[#E8E5DC] rounded-2xl p-5 sm:p-7 space-y-2.5">
              <div className="flex items-center gap-2 text-base font-black text-[#0B0B0C]">
                <Info className="w-4 h-4" />
                <h3>별도 협의 항목</h3>
              </div>
              <ul className="space-y-1.5">
                {STUDIO_OFFER.separateDiscussion.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-[#484B52]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#737067] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Step 3: Inquiry */}
        <section id="studio-inquiry" aria-label="웹사이트 제작 문의">
          <div className="text-[11px] font-mono font-bold text-[#737067] uppercase tracking-wider mb-3">
            STEP 03 · 문의하기
          </div>
          <InquiryFormCard
            defaultSubjectPrefix="[COLLCO 웹사이트 제작 문의]"
            locationTag="studio_page"
            heading="웹사이트 제작 상담 문의하기"
            description="운영 중인 브랜드나 공방 링크와 원하시는 방향을 알려주시면, 기본 범위 적합 여부와 착수 가능 일정을 회신드립니다."
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
