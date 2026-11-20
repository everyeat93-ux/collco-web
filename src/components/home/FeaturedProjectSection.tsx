"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { PRODUCTS, getFeaturedProduct, getProductCounts } from "@/data/products";
import { FEATURED_PROJECT_ID, FEATURED_PROJECT_IDS } from "@/data/siteConfig";
import { Product } from "@/types";
import { ProductModal } from "@/components/products/ProductModal";
import { trackEvent } from "@/lib/analytics";

export function FeaturedProjectSection() {
  const counts = getProductCounts();

  // Build slide list starting with FEATURED_PROJECT_ID, followed by FEATURED_PROJECT_IDS
  const orderedIds = Array.from(
    new Set([FEATURED_PROJECT_ID, ...FEATURED_PROJECT_IDS])
  );
  const slides: Product[] = orderedIds
    .map((id) => getFeaturedProduct(id))
    .filter((p): p is Product => Boolean(p));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  const featured = slides[currentIndex] || slides[0];
  const canSlide = slides.length > 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const ditta = PRODUCTS.find((p) => p.id === "ditta");
  const reptilog = PRODUCTS.find((p) => p.id === "reptilog");
  const secondaryProjects = [ditta, reptilog].filter(Boolean);

  return (
    <section
      id="projects"
      aria-labelledby="featured-projects-heading"
      className="py-6 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-5 sm:space-y-6"
    >
      <h2 id="featured-projects-heading" className="sr-only">
        대표 프로젝트
      </h2>

      {/* 1. Main Featured Project Carousel Card (App Icon + < > Controls + Real Portrait Screen) */}
      {featured && (
        <div className="bg-[#FAF9F5] border border-[#E8E5DC] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: Label + Controls, App Icon + Title, One Sentence, Single CTA */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-mono text-[#737067]">
                  대표 프로젝트
                  {canSlide && (
                    <span className="ml-2 text-[#9E9A8F]">
                      {String(currentIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                    </span>
                  )}
                </p>

                {canSlide && (
                  <div className="inline-flex items-center gap-1.5" role="group" aria-label="대표 프로젝트 넘기기">
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="이전 대표 프로젝트"
                      className="w-10 h-10 rounded-full bg-white hover:bg-[#0B0B0C] text-[#0B0B0C] hover:text-white border border-[#E8E5DC] hover:border-[#0B0B0C] flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="다음 대표 프로젝트"
                      className="w-10 h-10 rounded-full bg-white hover:bg-[#0B0B0C] text-[#0B0B0C] hover:text-white border border-[#E8E5DC] hover:border-[#0B0B0C] flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* App Icon + Name */}
              <div className="flex items-center gap-3.5">
                {featured.appIcon && (
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border border-[#E8E5DC] bg-white shrink-0 shadow-xs">
                    <Image
                      src={featured.appIcon}
                      alt={`${featured.name} 앱 아이콘`}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                )}
                <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0B0B0C] tracking-tight leading-tight">
                  {featured.id === "ditta" ? "딛다" : featured.name}
                </h3>
              </div>

              <p className="text-base sm:text-lg text-[#484B52] leading-[1.7] break-keep-all">
                {featured.featuredDescription || featured.shortDescription || featured.tagline}
              </p>

              <div className="pt-1">
                {featured.detailSlug ? (
                  <Link
                    href={`/projects/${featured.detailSlug}`}
                    onClick={() =>
                      trackEvent("featured_project_click", {
                        projectId: featured.id,
                        destinationType: "detail",
                        location: "home_featured_card",
                      })
                    }
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-full bg-[#0B0B0C] hover:bg-[#252528] text-white text-sm font-bold transition-colors"
                  >
                    <span>{featured.featuredCtaLabel || `${featured.name} 보기`}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      trackEvent("featured_project_click", {
                        projectId: featured.id,
                        destinationType: "detail",
                        location: "home_featured_card_modal",
                      });
                      setModalProduct(featured);
                    }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-full bg-[#0B0B0C] hover:bg-[#252528] text-white text-sm font-bold transition-colors cursor-pointer"
                  >
                    <span>{featured.featuredCtaLabel || `${featured.name} 보기`}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Right: Real Portrait App Screenshot (Full aspect ratio preserved, no cropping) */}
            <div className="lg:col-span-6 flex justify-center">
              {featured.previewImage ? (
                featured.detailSlug ? (
                  <Link
                    href={`/projects/${featured.detailSlug}`}
                    onClick={() =>
                      trackEvent("featured_project_click", {
                        projectId: featured.id,
                        destinationType: "detail",
                        location: "home_featured_screenshot",
                      })
                    }
                    className="block w-full max-w-[260px] sm:max-w-[280px] rounded-[1.75rem] overflow-hidden border border-[#E8E5DC] bg-white shadow-rauno-sm hover:border-[#0B0B0C] transition-colors"
                  >
                    <Image
                      src={featured.previewImage}
                      alt={featured.previewImageAlt || `${featured.name} 실제 앱 화면`}
                      width={1080}
                      height={2340}
                      priority
                      sizes="(min-width: 640px) 280px, 260px"
                      className="w-full h-auto block"
                    />
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => setModalProduct(featured)}
                    aria-label={`${featured.name} 상세 보기`}
                    className="block w-full max-w-[260px] sm:max-w-[280px] rounded-[1.75rem] overflow-hidden border border-[#E8E5DC] bg-white shadow-rauno-sm hover:border-[#0B0B0C] transition-colors cursor-pointer"
                  >
                    <Image
                      src={featured.previewImage}
                      alt={featured.previewImageAlt || `${featured.name} 실제 앱 화면`}
                      width={1080}
                      height={2340}
                      sizes="(min-width: 640px) 280px, 260px"
                      className="w-full h-auto block"
                    />
                  </button>
                )
              ) : null}
            </div>
          </div>
        </div>
      )}

      {/* 2. Secondary Featured Cards: 딛다 & 랩티로그 (with App Icons) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {secondaryProjects.map((project) => {
          if (!project) return null;
          const hasDetail = Boolean(project.detailSlug);
          const externalHref = project.storeUrl || project.demoUrl;
          const displayName = project.id === "ditta" ? "딛다 (ditta)" : project.name;
          const utilityLine = project.shortDescription || project.tagline;

          return (
            <div
              key={project.id}
              className="bg-white border border-[#E8E5DC] hover:border-[#0B0B0C] rounded-2xl p-5 sm:p-6 transition-colors flex flex-col justify-between gap-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center gap-3">
                  {project.appIcon && (
                    <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-[#E8E5DC] bg-[#FAF9F5] shrink-0">
                      <Image
                        src={project.appIcon}
                        alt={`${project.name} 앱 아이콘`}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <h3 className="text-lg sm:text-xl font-black text-[#0B0B0C] tracking-tight">
                    {displayName}
                  </h3>
                </div>
                <p className="text-sm text-[#484B52] leading-relaxed break-keep-all">
                  {utilityLine}
                </p>
              </div>

              <div>
                {hasDetail ? (
                  <Link
                    href={`/projects/${project.detailSlug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B0B0C] hover:underline underline-offset-4 py-1"
                  >
                    <span>자세히 보기</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : externalHref ? (
                  <a
                    href={externalHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B0B0C] hover:underline underline-offset-4 py-1"
                  >
                    <span>Google Play에서 보기</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Link to All Projects (/projects) */}
      <div className="pt-2 flex justify-start sm:justify-end">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] rounded-full bg-white hover:bg-[#FAF9F5] text-[#0B0B0C] border border-[#E8E5DC] hover:border-[#0B0B0C] text-sm font-bold transition-colors"
        >
          <span>전체 프로젝트 {counts.total}개 보기</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Modal for featured projects without dedicated detail route (e.g. cashbook) */}
      <ProductModal
        key={modalProduct?.id ?? "none"}
        product={modalProduct}
        onClose={() => setModalProduct(null)}
      />
    </section>
  );
}
