"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { trackEvent } from "@/lib/analytics";

export function StudioCaseSection() {
  const goldfur = PRODUCTS.find((p) => p.id === "goldfur");

  return (
    <section
      id="studio-case"
      aria-labelledby="studio-case-heading"
      className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[#E8E5DC]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-12 items-center">
        {/* Left: Real Goldfur Screenshot */}
        <div className="lg:col-span-6">
          <Link
            href="/projects/goldfur"
            className="block relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#E8E5DC] bg-[#FAF9F5] group"
          >
            <Image
              src={goldfur?.previewImage || "/previews/goldfur.png"}
              alt="황금모피 브랜드 웹사이트 실제 화면"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
            />
          </Link>
        </div>

        {/* Right: Title, Description, 2 Buttons */}
        <div className="lg:col-span-6 space-y-4">
          <p className="text-xs font-mono text-[#737067]">웹사이트 제작 사례</p>

          <h2
            id="studio-case-heading"
            className="text-2xl sm:text-4xl font-black text-[#0B0B0C] tracking-tight leading-[1.24] break-keep-all"
          >
            35년 장인의 작업을
            <br />
            <span className="text-[#737067]">웹사이트에 담았습니다.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#484B52] leading-[1.8] break-keep-all">
            황금모피의 제작 이야기와 대표 제품을 한곳에 담고, 방문 상담으로 이어지도록 구성했습니다.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              href="/projects/goldfur"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[46px] rounded-full bg-[#0B0B0C] hover:bg-[#252528] text-white text-sm font-bold transition-colors"
            >
              <span>제작 사례 보기</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/studio"
              onClick={() =>
                trackEvent("studio_page_navigate", {
                  destinationType: "studio",
                  location: "home_studio_case_card",
                })
              }
              className="inline-flex items-center justify-center gap-1.5 px-5 py-3 min-h-[46px] rounded-full bg-white hover:bg-[#F8F7F4] text-[#0B0B0C] border border-[#0B0B0C]/20 hover:border-[#0B0B0C] text-sm font-bold transition-colors"
            >
              <span>웹 제작 안내</span>
              <ArrowUpRight className="w-4 h-4 text-[#484B52]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
