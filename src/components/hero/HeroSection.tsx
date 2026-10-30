"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Copy,
  Check,
  ShoppingBag,
  Sparkles,
  Terminal,
  Activity,
  Layers,
} from "lucide-react";

export function HeroSection() {
  const [copied, setCopied] = useState(false);
  const email = "collcokorea@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="overview" className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Rauno-style Framed Canvas Container with Corner Crosshairs (+) */}
      <div className="relative bg-white border border-[#E8E5DC] rounded-[2.5rem] p-8 sm:p-14 lg:p-16 overflow-hidden shadow-rauno-card">
        {/* Rauno Corner Plus Accents */}
        <span className="absolute top-4 left-4 font-mono text-xs text-[#C5C0B4] select-none">+</span>
        <span className="absolute top-4 right-4 font-mono text-xs text-[#C5C0B4] select-none">+</span>
        <span className="absolute bottom-4 left-4 font-mono text-xs text-[#C5C0B4] select-none">+</span>
        <span className="absolute bottom-4 right-4 font-mono text-xs text-[#C5C0B4] select-none">+</span>

        {/* Top Status & Meta Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-[#F2EFE8]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F7F4] border border-[#E8E5DC] text-[11px] font-mono text-[#484B52]">
            <span className="w-2 h-2 rounded-full bg-[#FFE600] border border-black/40" />
            <span className="font-semibold text-[#0B0B0C]">COLLCO STUDIO</span>
            <span className="text-[#AFA99E]">/</span>
            <span>SOLO PRODUCT BUILDER</span>
          </div>

          <div className="text-[11px] font-mono text-[#737067] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>SEOUL · 7 PRODUCTS SHIPPED & LIVE</span>
          </div>
        </div>

        {/* Rauno's Iconic Typography Opening */}
        <div className="relative mb-12">
          {/* Decorative geometric circle shape inspired by rauno.me */}
          <div
            className="hidden sm:block absolute -top-4 right-0 w-36 h-36 lg:w-44 lg:h-44 rounded-full bg-[#FFE600]/80 blur-2xl pointer-events-none -z-0"
            aria-hidden="true"
          />

          <h1 className="relative z-10 text-3xl sm:text-5xl lg:text-6xl font-black text-[#0B0B0C] tracking-tight leading-[1.12]">
            <span>COLLCO</span>
            <br />
            <span className="text-[#737067]">is a product studio</span>
            <br />
            <span>& solo builder</span>
            <br />
            <span className="text-[#737067]">crafting 7 digital solutions</span>
            <br />
            <span>and physical commerce.</span>
          </h1>

          <p className="mt-8 text-sm sm:text-base text-[#484B52] leading-relaxed max-w-2xl font-normal">
            거대 플랫폼이 주목하지 않는 일상의 뾰족한 불편함을 기획하고, 모바일 네이티브 물리 엔진부터 브라우저 데이터 시각화, 그리고 일본 정품 수집품 공급망까지 엔드투엔드로 직접 책임집니다.
          </p>
        </div>

        {/* Live Metrics Row (Rauno Minimalist Line) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-[#F2EFE8] my-10 font-mono">
          <div>
            <div className="text-3xl sm:text-4xl font-black text-[#0B0B0C]">7+</div>
            <div className="text-[11px] font-bold text-[#737067] uppercase mt-1">Shipped Solutions</div>
            <div className="text-[11px] text-[#AFA99E]">앱 · 웹 · 게임 · 브랜드</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-[#0B0B0C]">4</div>
            <div className="text-[11px] font-bold text-[#737067] uppercase mt-1">Google Play</div>
            <div className="text-[11px] text-[#AFA99E]">정식 출시/배포</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-[#0B0B0C]">177</div>
            <div className="text-[11px] font-bold text-[#737067] uppercase mt-1">Countries</div>
            <div className="text-[11px] text-[#AFA99E]">랩티로그 글로벌 출시</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-[#0B0B0C]">100%</div>
            <div className="text-[11px] font-bold text-[#737067] uppercase mt-1">Solo Ownership</div>
            <div className="text-[11px] text-[#AFA99E]">기획·디자인·엔지니어링</div>
          </div>
        </div>

        {/* Rauno Direct Trigger Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0B0B0C] hover:bg-[#252528] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>View Projects (7)</span>
              <ArrowDown className="w-3.5 h-3.5 text-zinc-400" />
            </a>

            <a
              href="#craft"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#F8F7F4] hover:bg-white text-[#0B0B0C] border border-[#E8E5DC] hover:border-[#0B0B0C] text-xs font-mono font-bold uppercase tracking-wider transition-all"
            >
              <Activity className="w-3.5 h-3.5 text-[#0B0B0C]" />
              <span>Craft Lab</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#737067]" />
            </a>

            <a
              href="#store"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#F8F7F4] hover:bg-white text-[#0B0B0C] border border-[#E8E5DC] hover:border-[#0B0B0C] text-xs font-mono font-bold uppercase tracking-wider transition-all"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#0B0B0C]" />
              <span>Curated Store</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#737067]" />
            </a>
          </div>

          {/* Email Copy Pill */}
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8F7F4] hover:bg-white border border-[#E8E5DC] text-xs font-mono text-[#0B0B0C] transition-all"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-bold">Copied: {email}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#737067]" />
                <span>{email}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
