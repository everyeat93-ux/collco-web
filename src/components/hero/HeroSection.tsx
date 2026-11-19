"use client";

import React, { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Copy,
  Check,
  ShoppingBag,
  Activity,
  Layers,
} from "lucide-react";

const FEATURED_PROBLEMS = [
  {
    target: "유산의 아픔을 겪은 엄마 · 아빠",
    product: "두둥 (작은 별의 이야기)",
    problem: "첫 심장 박동과 아빠가 쓴 노래, ‘별의 정원’으로 자책 대신 위로를 전하는 15분 무료 웹 게임",
    status: "무료 웹 공개 (KO·EN·JA)",
  },
  {
    target: "배드민턴 동호인",
    product: "ditta (딛다)",
    problem: "혼자서도 실전처럼 반응하는 코트 6방향 랜덤 풋워크 훈련",
    status: "Google Play 출시",
  },
  {
    target: "전통시장 방문객 · 여행자",
    product: "장날가자",
    problem: "내 위치 주변에서 오늘 열리는 전국 5일장 일정과 길찾기 확인",
    status: "Google Play 출시",
  },
  {
    target: "파충류 · 양서류 집사",
    product: "랩티로그 (ReptiLog)",
    problem: "원터치 피딩·탈피 기록과 동물병원 진료용 사육 문진표 정리",
    status: "Google Play 출시",
  },
];

export function HeroSection() {
  const [copied, setCopied] = useState(false);
  const email = "collcokorea@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="overview" className="relative pt-20 pb-6 sm:pt-32 sm:pb-16 md:pt-40 md:pb-24 px-3 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Rauno-style Framed Canvas Container with Corner Crosshairs (+) */}
      <div className="relative bg-white border border-[#E8E5DC] rounded-[1.5rem] sm:rounded-[2.5rem] p-4 sm:p-12 lg:p-16 overflow-hidden shadow-rauno-card">
        {/* Rauno Corner Plus Accents */}
        <span className="absolute top-3 left-3 sm:top-4 sm:left-4 font-mono text-[10px] sm:text-xs text-[#C5C0B4] select-none">+</span>
        <span className="absolute top-3 right-3 sm:top-4 sm:right-4 font-mono text-[10px] sm:text-xs text-[#C5C0B4] select-none">+</span>
        <span className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 font-mono text-[10px] sm:text-xs text-[#C5C0B4] select-none">+</span>
        <span className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 font-mono text-[10px] sm:text-xs text-[#C5C0B4] select-none">+</span>

        {/* Top Status & Meta Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-5 sm:mb-10 pb-3.5 sm:pb-6 border-b border-[#F2EFE8]">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[#F8F7F4] border border-[#E8E5DC] text-[10px] sm:text-[11px] font-mono text-[#484B52] w-fit">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FFE600] border border-black/40 shrink-0" />
            <span className="font-semibold text-[#0B0B0C] whitespace-nowrap">COLLCO STUDIO</span>
            <span className="text-[#AFA99E]">/</span>
            <span className="whitespace-nowrap">1인 프로덕트 스튜디오</span>
          </div>

          <div className="text-[10px] sm:text-[11px] font-mono text-[#737067] flex items-center gap-1.5 sm:gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="whitespace-nowrap">2026.11 기준 · 11개 프로덕트 운영</span>
          </div>
        </div>

        {/* Problem-first Opening */}
        <div className="relative mb-6 sm:mb-10">
          <div
            className="hidden sm:block absolute -top-4 right-0 w-36 h-36 lg:w-44 lg:h-44 rounded-full bg-[#FFE600]/80 blur-2xl pointer-events-none -z-0"
            aria-hidden="true"
          />

          <h1 className="relative z-10 text-[22px] sm:text-4xl lg:text-5xl font-black text-[#0B0B0C] tracking-tight leading-[1.28] sm:leading-[1.18] break-keep-all">
            <span>일상의 작은 불편을</span>
            <br />
            <span className="text-[#737067]">발견하고 해결하는</span>
            <br />
            <span>1인 프로덕트 스튜디오,</span>
            <br />
            <span className="text-[#737067]">콜코(COLLCO)입니다.</span>
          </h1>

          <p className="mt-3.5 sm:mt-6 text-xs sm:text-base text-[#484B52] leading-[1.75] max-w-2xl font-normal break-keep-all">
            큰 플랫폼이 지나치는 구체적인 일상의 문제와 마음의 이야기를 찾아, 그 순간을 겪는 사람에게 꼭 필요한 앱과 웹을 만듭니다.
            유산의 아픔을 위로하는 인터랙티브 웹 게임부터 배드민턴 스텝 훈련, 오늘 열리는 5일장 찾기, 파충류 사육일지까지 직접 기획·개발·운영합니다.
          </p>
        </div>

        {/* Representative Problem-Solving Cards (Who & What Problem We Solve First) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 py-4 sm:py-6 border-y border-[#F2EFE8] my-5 sm:my-8">
          {FEATURED_PROBLEMS.map((item) => (
            <a
              key={item.product}
              href="#projects"
              className="group rounded-2xl bg-[#FAF9F5] hover:bg-white border border-[#E8E5DC] hover:border-[#0B0B0C] p-3.5 sm:p-4 transition-all flex flex-col justify-between gap-2"
            >
              <div>
                <div className="text-[10px] font-mono font-bold text-[#737067] mb-1">
                  FOR · {item.target}
                </div>
                <div className="text-sm sm:text-base font-black text-[#0B0B0C] tracking-tight mb-1">
                  {item.product}
                </div>
                <p className="text-xs text-[#484B52] leading-[1.6] break-keep-all">
                  {item.problem}
                </p>
              </div>
              <div className="text-[10px] font-mono text-[#AFA99E] pt-1 border-t border-[#E8E5DC]/70">
                {item.status}
              </div>
            </a>
          ))}
        </div>

        {/* Direct Trigger Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-1 sm:pt-2">
          {/* Action buttons */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-2.5">
            <a
              href="#projects"
              className="col-span-2 sm:col-span-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2.5 rounded-full bg-[#0B0B0C] hover:bg-[#252528] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-rauno-xs active:scale-95"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>전체 프로덕트 보기 (11)</span>
              <ArrowDown className="w-3.5 h-3.5 text-zinc-400" />
            </a>

            <a
              href="#craft"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-full bg-[#F8F7F4] hover:bg-white text-[#0B0B0C] border border-[#E8E5DC] hover:border-[#0B0B0C] text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider transition-all active:scale-95"
            >
              <Activity className="w-3 h-3 text-[#0B0B0C]" />
              <span>Craft Lab</span>
              <ArrowUpRight className="w-3 h-3 text-[#737067]" />
            </a>

            <a
              href="#store"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-full bg-[#F8F7F4] hover:bg-white text-[#0B0B0C] border border-[#E8E5DC] hover:border-[#0B0B0C] text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider transition-all active:scale-95"
            >
              <ShoppingBag className="w-3 h-3 text-[#0B0B0C]" />
              <span>Collector&apos;s Shelf</span>
              <ArrowUpRight className="w-3 h-3 text-[#737067]" />
            </a>
          </div>

          {/* Email Copy Pill */}
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#F8F7F4] hover:bg-white border border-[#E8E5DC] text-xs font-mono text-[#0B0B0C] transition-all w-full sm:w-auto"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-bold">Copied: {email}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#737067]" />
                <span className="truncate">{email}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
