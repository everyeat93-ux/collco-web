"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Activity,
  BookOpen,
} from "lucide-react";
import { Product } from "@/types";
import { Badge } from "@/components/common/Badge";
import { trackEvent } from "@/lib/analytics";

interface ProjectDetailViewProps {
  product: Product;
}

export function ProjectDetailView({ product }: ProjectDetailViewProps) {
  const primaryHref = product.demoUrl || product.storeUrl;
  const primaryDestType = product.demoUrl ? "web" : "google_play";
  const primaryLabel =
    product.primaryCtaLabel || (product.demoUrl ? "웹에서 열기" : "Google Play에서 설치");

  const hasSecondaryExternal = Boolean(product.demoUrl && product.storeUrl);
  const hasSecondaryInternal = Boolean(product.secondaryCtaHref);
  const isPortraitScreenshots = Boolean(product.screenshots && product.screenshots.length > 0);

  return (
    <article className="pt-24 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* 1. Back to Projects (Clear spacing & contrast below fixed header) */}
      <div className="mb-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B0B0C] hover:text-[#484B52] transition-colors py-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>전체 프로젝트로 돌아가기</span>
        </Link>
      </div>

      {/* Optional Content Notice (for sensitive stories such as 두둥) */}
      {product.contentNotice && (
        <div className="mb-6 p-4 rounded-2xl bg-[#FAF7EE] border border-[#ECD9B8] text-xs sm:text-sm text-[#5C4314] leading-relaxed break-keep-all">
          <strong className="block font-bold mb-1">작품 안내</strong>
          {product.contentNotice}
        </div>
      )}

      {/* 2. First Fold: Name, One-sentence Utility, Primary/Secondary CTA + Real App/Web Screen */}
      <header className="bg-[#FAF9F5] border border-[#E8E5DC] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 mb-10 sm:mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: Title, Utility, Actions */}
          <div className={isPortraitScreenshots ? "lg:col-span-7 space-y-4" : "lg:col-span-6 space-y-4"}>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant={product.statusBadgeVariant} dot size="sm">
                {product.status}
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0B0B0C] tracking-tight leading-tight">
              {product.name}
              {product.subName && (
                <span className="block sm:inline sm:ml-2.5 text-base sm:text-xl font-medium text-[#737067]">
                  {product.subName}
                </span>
              )}
            </h1>

            <p className="text-base sm:text-lg text-[#484B52] leading-[1.7] break-keep-all">
              {product.tagline}
            </p>

            {/* Primary & Confirmed Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              {primaryHref && (
                <a
                  href={primaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent("project_detail_outbound_click", {
                      projectId: product.id,
                      destinationType: primaryDestType,
                      location: "detail_hero_primary",
                    })
                  }
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-full bg-[#0B0B0C] hover:bg-[#252528] text-white text-sm font-bold transition-colors"
                >
                  <span>{primaryLabel}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}

              {hasSecondaryExternal && product.storeUrl && (
                <a
                  href={product.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent("project_detail_outbound_click", {
                      projectId: product.id,
                      destinationType: "google_play",
                      location: "detail_hero_secondary",
                    })
                  }
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-full bg-white hover:bg-[#F8F7F4] text-[#0B0B0C] border border-[#0B0B0C]/20 hover:border-[#0B0B0C] text-sm font-bold transition-colors"
                >
                  <span>{product.secondaryCtaLabel || "Google Play에서 설치"}</span>
                  <ExternalLink className="w-4 h-4 text-[#484B52]" />
                </a>
              )}

              {hasSecondaryInternal && product.secondaryCtaHref && (
                <Link
                  href={product.secondaryCtaHref}
                  onClick={() => {
                    if (product.secondaryCtaHref === "/studio") {
                      trackEvent("studio_page_navigate", {
                        projectId: product.id,
                        destinationType: "studio",
                        location: "detail_hero_secondary",
                      });
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-full bg-white hover:bg-[#F8F7F4] text-[#0B0B0C] border border-[#0B0B0C]/20 hover:border-[#0B0B0C] text-sm font-bold transition-colors"
                >
                  <span>{product.secondaryCtaLabel || "웹 제작 안내"}</span>
                  <ArrowRight className="w-4 h-4 text-[#484B52]" />
                </Link>
              )}
            </div>

            {product.caseStudyNote && (
              <p className="text-xs text-[#737067] leading-relaxed pt-1 break-keep-all">
                {product.caseStudyNote}
              </p>
            )}
          </div>

          {/* Right: Real App/Web Screen (Portrait ratio preserved for mobile apps; 16:10 for web) */}
          <div className={isPortraitScreenshots ? "lg:col-span-5 flex justify-center" : "lg:col-span-6"}>
            {isPortraitScreenshots && product.previewImage ? (
              <div className="w-full max-w-[260px] sm:max-w-[280px] rounded-[1.75rem] overflow-hidden border border-[#E8E5DC] bg-white shadow-rauno-sm">
                <Image
                  src={product.previewImage}
                  alt={product.previewImageAlt || `${product.name} 실제 앱 화면`}
                  width={1080}
                  height={2340}
                  priority
                  sizes="(min-width: 640px) 280px, 260px"
                  className="w-full h-auto block"
                />
              </div>
            ) : product.previewImage ? (
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#E8E5DC] bg-white shadow-rauno-xs">
                <Image
                  src={product.previewImage}
                  alt={product.previewImageAlt || `${product.name} 실제 화면`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover object-top"
                />
              </div>
            ) : product.appIcon ? (
              <div className="flex justify-center">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden border border-[#E8E5DC] bg-white shadow-rauno-xs">
                  <Image
                    src={product.appIcon}
                    alt={`${product.name} 앱 아이콘`}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </header>

      {/* 3. Multi-Screen App Gallery (e.g. Jangnal-gaja 3 real screens — zero cropping, 1-col mobile / 3-col desktop) */}
      {product.screenshots && product.screenshots.length > 0 && (
        <section aria-labelledby="screenshots-heading" className="mb-12 sm:mb-16">
          <div className="mb-6">
            <h2
              id="screenshots-heading"
              className="text-xl sm:text-2xl font-black text-[#0B0B0C] tracking-tight"
            >
              실제 앱 화면
            </h2>
            <p className="text-xs sm:text-sm text-[#737067] mt-1">
              {product.screenshots.map((shot) => shot.caption).join(", ")} 화면을 실제 앱 그대로 담았습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-5">
            {product.screenshots.map((shot) => (
              <figure key={shot.src} className="flex flex-col items-center gap-3">
                <div className="w-full max-w-[280px] sm:max-w-none rounded-[1.5rem] overflow-hidden border border-[#E8E5DC] bg-white shadow-rauno-xs">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={1080}
                    height={2340}
                    sizes="(min-width: 640px) 30vw, 280px"
                    className="w-full h-auto block"
                  />
                </div>
                <figcaption className="text-sm font-bold text-[#0B0B0C] text-center">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* 4. Target User & Problem / Solution */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 py-8 sm:py-10 border-t border-[#E8E5DC]">
        <div className="space-y-3">
          <p className="text-xs font-mono text-[#737067]">대상 사용자와 문제</p>
          {product.targetUser && (
            <p className="text-xs font-bold text-[#0B0B0C] bg-[#FAF9F5] border border-[#E8E5DC] rounded-xl px-3.5 py-2 leading-relaxed">
              대상 · {product.targetUser}
            </p>
          )}
          <h2 className="text-lg sm:text-xl font-black text-[#0B0B0C] leading-snug break-keep-all">
            {product.problem.title}
          </h2>
          <p className="text-sm text-[#484B52] leading-[1.8] break-keep-all">
            {product.problem.description}
          </p>
          <ul className="space-y-1.5 pt-2">
            {product.problem.points.map((pt) => (
              <li key={pt} className="flex items-start gap-2 text-xs sm:text-sm text-[#484B52] leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#737067] mt-2 shrink-0" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-mono text-[#737067]">해결 방식과 핵심 기능</p>
          <h2 className="text-lg sm:text-xl font-black text-[#0B0B0C] leading-snug break-keep-all">
            {product.solution.title}
          </h2>
          <p className="text-sm text-[#484B52] leading-[1.8] break-keep-all">
            {product.solution.description}
          </p>
          <ul className="space-y-2 pt-2">
            {product.solution.features.map((feat) => (
              <li key={feat} className="flex items-start gap-2 text-xs sm:text-sm text-[#0B0B0C] leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Background & Design Decisions */}
      <section className="py-8 sm:py-10 border-t border-[#E8E5DC] space-y-4">
        <p className="text-xs font-mono text-[#737067]">제작 배경과 주요 설계 결정</p>
        <h2 className="text-lg sm:text-xl font-black text-[#0B0B0C]">
          {product.impact.title}
        </h2>
        <p className="text-sm text-[#484B52] leading-[1.8] break-keep-all max-w-3xl">
          {product.impact.description}
        </p>

        {product.backgroundNotes && product.backgroundNotes.length > 0 && (
          <ol className="space-y-2.5 pt-2">
            {product.backgroundNotes.map((note, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 bg-[#FAF9F5] border border-[#E8E5DC] rounded-xl p-4 text-xs sm:text-sm text-[#484B52] leading-[1.75] break-keep-all"
              >
                <span className="font-mono font-bold text-[#0B0B0C] shrink-0">
                  0{idx + 1}
                </span>
                <span>{note}</span>
              </li>
            ))}
          </ol>
        )}
      </section>

      {/* 6. Related Craft Lab Demo or Confirmed Blog Link */}
      {(product.craftLabAnchor || product.blogUrl) && (
        <section className="py-6 px-5 sm:px-6 rounded-2xl bg-[#FAF9F5] border border-[#E8E5DC] mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs font-mono text-[#737067]">관련 체험</p>
            <div className="text-sm sm:text-base font-bold text-[#0B0B0C]">
              {product.craftLabLabel || "관련 체험 데모와 이야기를 확인해 보세요."}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            {product.craftLabAnchor && (
              <Link
                href={product.craftLabAnchor}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[42px] rounded-full bg-[#0B0B0C] hover:bg-[#252528] text-white text-xs font-bold transition-colors"
              >
                <Activity className="w-3.5 h-3.5" />
                <span>Craft Lab 데모 체험</span>
              </Link>
            )}
            {product.blogUrl && (
              <a
                href={product.blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[42px] rounded-full bg-white hover:bg-[#F8F7F4] text-[#0B0B0C] border border-[#E8E5DC] hover:border-[#0B0B0C] text-xs font-bold transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{product.blogLabel || "네이버 블로그 글 보기"}</span>
              </a>
            )}
          </div>
        </section>
      )}

      {/* 7. Bottom Return Link */}
      <div className="pt-8 border-t border-[#E8E5DC] flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] rounded-full bg-[#FAF9F5] hover:bg-[#0B0B0C] text-[#0B0B0C] hover:text-white border border-[#E8E5DC] hover:border-[#0B0B0C] text-xs sm:text-sm font-bold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>전체 프로젝트로 돌아가기</span>
        </Link>

        <Link
          href="/studio"
          onClick={() =>
            trackEvent("studio_page_navigate", {
              projectId: product.id,
              destinationType: "studio",
              location: "detail_bottom_nav",
            })
          }
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#484B52] hover:text-[#0B0B0C] transition-colors"
        >
          <span>웹 제작 안내 보기</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
