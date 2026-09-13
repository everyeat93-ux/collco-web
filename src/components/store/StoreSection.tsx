"use client";

import React from "react";
import Image from "next/image";
import { ShoppingBag, ArrowUpRight, ShieldCheck, Box, Sparkles, Truck } from "lucide-react";
import { STORE_ITEMS } from "@/data/storeItems";
import { StoreCard } from "./StoreCard";
import { SectionHeader } from "@/components/common/SectionHeader";

export function StoreSection() {
  return (
    <section id="store" className="py-28 md:py-36 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Background ambient warm glow */}
      <div className="absolute top-1/3 right-0 w-[480px] h-[480px] bg-[#EFECE6]/60 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <SectionHeader
        badgeText="02 / CURATED STORE"
        badgeVariant="neutral"
        title={
          <span>
            엄선된 정품 컬렉션 쇼케이스{" "}
            <span className="text-[#0B0B0C]">
              COLLCO Store
            </span>
          </span>
        }
        subtitle="1인 프로덕트 스튜디오의 시선으로 직접 바잉하고 검수한 100% 일본 정품 피규어, TCG 트레이딩 카드, 시크릿 럭키박스 쇼케이스입니다."
      />

      {/* Curated Store Hero Banner (Borderless Bold Architecture with Store Mascot) */}
      <div
        className="mb-14 relative rounded-[2.4rem] p-8 sm:p-12 lg:p-14 bg-white shadow-chic-lg overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#ECEAE2] text-[#0B0B0C] text-xs font-mono font-bold uppercase tracking-wider">
              <div className="relative w-4 h-4 rounded-full overflow-hidden shrink-0">
                <Image src="/logo-store-dino.png" alt="Store Mascot" fill sizes="16px" className="object-contain" />
              </div>
              <span>COLLCO CURATED STORE</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-[#0B0B0C] tracking-tight leading-snug">
              엄선된 정품 애니메이션 피규어 & 프리미엄 컬렉션 카드
            </h3>
            <p className="text-sm sm:text-base text-[#484B52] leading-relaxed font-normal">
              가품 걱정 없는 100% 라이선스 정품 보증, 수집가의 시선으로 검수한 꼼꼼한 컨디션 체크, 
              그리고 파손 없는 안전한 3중 에어캡 완충 포장으로 보내드립니다.
            </p>

            {/* Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#0B0B0C] font-bold">
                <ShieldCheck className="w-4 h-4 text-[#0B0B0C] shrink-0" />
                <span>100% 정품 직수입 검수</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#0B0B0C] font-bold">
                <Box className="w-4 h-4 text-[#0B0B0C] shrink-0" />
                <span>수집가 맞춤 안심 포장</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#0B0B0C] font-bold">
                <Truck className="w-4 h-4 text-[#0B0B0C] shrink-0" />
                <span>우체국/CJ 안전 특송</span>
              </div>
            </div>
          </div>

          {/* Official Online Store Showcase Card */}
          <div className="shrink-0 w-full lg:w-72 flex flex-col items-center p-6 rounded-[2rem] bg-[#F5F4EE] shadow-chic-xs text-center group">
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 mb-3 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo-store-dino.png"
                alt="COLLCO Online Store Mascot"
                fill
                sizes="144px"
                className="object-contain drop-shadow-sm"
              />
            </div>
            <div className="text-xs font-mono font-bold text-[#0B0B0C] uppercase tracking-wider mb-1">
              COLLCO OFFICIAL STORE
            </div>
            <p className="text-[11px] text-[#666A73] mb-4">
              정품 피규어 & TCG 컬렉션 카드
            </p>
            <a
              href="https://smartstore.naver.com/collco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-full bg-[#0B0B0C] hover:bg-[#1E1E22] text-white font-bold text-xs uppercase tracking-wider shadow-chic hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-zinc-300" />
              <span>공식 스토어 바로가기</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Curated Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {STORE_ITEMS.map((item, index) => (
          <StoreCard key={item.id} item={item} index={index} />
        ))}
      </div>

      {/* Bottom Store Link reminder */}
      <div className="mt-14 text-center">
        <p className="text-xs text-[#9DA3AF]">
          * 네이버 스마트스토어 연동을 통해 네이버페이 간편결제 및 포인트 적립 혜택을 이용하실 수 있습니다.
        </p>
      </div>
    </section>
  );
}
