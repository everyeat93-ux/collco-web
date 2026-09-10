"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, ArrowUpRight, ShieldCheck, Box, Sparkles, Truck } from "lucide-react";
import { STORE_ITEMS } from "@/data/storeItems";
import { StoreCard } from "./StoreCard";
import { SectionHeader } from "@/components/common/SectionHeader";

export function StoreSection() {
  return (
    <section id="store" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <SectionHeader
        badgeText="Curated E-Commerce"
        badgeVariant="indigo"
        title={
          <span>
            엄선된 컬렉션 & 굿즈 스토어{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              COLLCO Store
            </span>
          </span>
        }
        subtitle="1인 프로덕트 스튜디오의 감각으로 직접 바잉하고 정밀 검수한 프리미엄 일본 정품 피규어, TCG 트레이딩 카드, 시크릿 럭키박스 쇼케이스입니다."
      />

      {/* Curated Store Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 relative rounded-3xl p-6 sm:p-10 border border-[#30363d] bg-gradient-to-r from-[#161b22] via-[#21262d] to-[#161b22] shadow-2xl overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COLLCO Curated Store</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
              엄선된 정품 애니메이션 피규어 & 프리미엄 컬렉션 카드
            </h3>
            <p className="text-sm text-[#8b949e] leading-relaxed">
              가품 걱정 없는 100% 라이선스 정품 보증, 수집가의 시선으로 검수한 꼼꼼한 컨디션 체크, 
              그리고 파손 없는 안전한 3중 에어캡 완충 포장으로 보내드립니다.
            </p>

            {/* Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% 정품 직수입 검수</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <Box className="w-4 h-4 text-blue-400 shrink-0" />
                <span>수집가 맞춤 안심 포장</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <Truck className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>우체국/CJ 안전 특송</span>
              </div>
            </div>
          </div>

          {/* External SmartStore Action */}
          <div className="shrink-0 w-full lg:w-auto">
            <a
              href="https://smartstore.naver.com/collco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full lg:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>COLLCO 공식 스토어에서 구매하기</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Curated Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {STORE_ITEMS.map((item, index) => (
          <StoreCard key={item.id} item={item} index={index} />
        ))}
      </div>

      {/* Bottom Store Link reminder */}
      <div className="mt-12 text-center">
        <p className="text-xs text-[#8b949e]">
          * 네이버 스마트스토어 연동을 통해 네이버페이 간편결제 및 포인트 적립 혜택을 이용하실 수 있습니다.
        </p>
      </div>
    </section>
  );
}
