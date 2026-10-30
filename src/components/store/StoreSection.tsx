"use client";

import React from "react";
import Image from "next/image";
import { ShoppingBag, ArrowUpRight, ShieldCheck, Box, Truck } from "lucide-react";
import { STORE_ITEMS } from "@/data/storeItems";
import { StoreCard } from "./StoreCard";

export function StoreSection() {
  return (
    <section id="store" className="py-8 sm:py-16 md:py-24 px-3 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="mb-5 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white border border-[#E8E5DC] text-[10px] sm:text-[11px] font-mono text-[#737067] uppercase tracking-wider mb-2.5 sm:mb-4">
          <ShoppingBag className="w-3 h-3 text-[#0B0B0C]" />
          <span>03 / CURATED COMMERCE & HARDWARE</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 sm:gap-6">
          <div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0B0B0C] tracking-tight leading-tight">
              엄선된 정품 컬렉션 쇼케이스,
              <br />
              <span className="text-[#737067]">COLLCO Curated Store</span>
            </h2>
            <p className="mt-2 sm:mt-3 text-xs sm:text-base text-[#484B52] max-w-2xl leading-[1.75] font-normal break-keep-all">
              1인 프로덕트 스튜디오의 시선으로 직접 바잉하고 정밀 검수한 100% 일본 라이선스 정품 피규어, TCG 트레이딩 카드, 시크릿 럭키박스 쇼케이스입니다.
            </p>
          </div>

          <a
            href="https://smartstore.naver.com/collco"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#0B0B0C] hover:bg-[#252528] text-white text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider shadow-swiss-xs shrink-0 transition-all self-start sm:self-auto"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-zinc-300" />
            <span>네이버 스마트스토어 방문</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        </div>
      </div>

      {/* Curated Store Hero Banner (Swiss Minimalist Bento Card) */}
      <div className="mb-6 sm:mb-12 rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-10 lg:p-12 bg-white border border-[#E8E5DC] shadow-swiss-sm">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
          <div className="max-w-2xl space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#FAF9F5] border border-[#E8E5DC] text-[#0B0B0C] text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider">
              <div className="relative w-3.5 h-3.5 rounded-full overflow-hidden shrink-0">
                <Image src="/logo-store-dino.png" alt="Store Mascot" fill sizes="14px" className="object-contain" />
              </div>
              <span>100% AUTHENTIC GUARANTEE</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-[#0B0B0C] tracking-tight leading-snug">
              가품 걱정 없는 정품 애니메이션 피규어 & 프리미엄 TCG 컬렉션
            </h3>
            <p className="text-xs sm:text-sm text-[#484B52] leading-[1.75] font-normal break-keep-all">
              수집가의 엄격한 시선으로 검수한 꼼꼼한 미개봉/컨디션 체크, 그리고 파손 없는 안전한 3중 에어캡 완충 포장으로 보내드립니다.
            </p>

            {/* Value Props */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-[#0B0B0C] font-mono font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0B0B0C] shrink-0" />
                <span>100% 정품 직수입</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#0B0B0C] font-mono font-bold">
                <Box className="w-3.5 h-3.5 text-[#0B0B0C] shrink-0" />
                <span>수집가 맞춤 안심 포장</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-1.5 text-xs text-[#0B0B0C] font-mono font-bold">
                <Truck className="w-3.5 h-3.5 text-[#0B0B0C] shrink-0" />
                <span>우체국/CJ 안전 특송</span>
              </div>
            </div>
          </div>

          {/* Store Mascot Quick Card */}
          <div className="shrink-0 w-full lg:w-64 flex flex-row lg:flex-col items-center justify-between lg:justify-center p-3.5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#FAF9F5] border border-[#E8E5DC] text-left lg:text-center gap-3">
            <div className="flex items-center lg:flex-col gap-3">
              <div className="relative w-14 h-14 sm:w-24 sm:h-24 shrink-0">
                <Image
                  src="/logo-store-dino.png"
                  alt="COLLCO Online Store Mascot"
                  fill
                  sizes="96px"
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-[#0B0B0C] uppercase tracking-wider mb-0.5 sm:mb-1">
                  COLLCO STORE
                </div>
                <p className="text-[10px] sm:text-[11px] font-mono text-[#737067]">
                  네이버 스마트스토어
                </p>
              </div>
            </div>
            <a
              href="https://smartstore.naver.com/collco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 py-2 px-3 sm:py-2.5 sm:px-4 rounded-full bg-[#0B0B0C] hover:bg-[#252528] text-white font-mono font-bold text-xs shadow-swiss-xs transition-all shrink-0"
            >
              <span>스토어 열기</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Curated Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {STORE_ITEMS.map((item, idx) => (
          <StoreCard key={item.id} item={item} index={idx} />
        ))}
      </div>
    </section>
  );
}
