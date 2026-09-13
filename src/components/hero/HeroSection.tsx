"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Sparkles, Layers, ShoppingBag, Compass } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#F5F4EE]">
      {/* Ambient warm light gradients - soft & subtle */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[760px] h-[440px] bg-gradient-to-b from-[#ECEAE2]/80 via-[#F5F4EE]/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center">
        {/* Top Studio Monogram / Tag (Borderless) */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md shadow-chic-xs text-xs font-mono font-bold text-[#0B0B0C]">
            <div className="relative w-4 h-4 rounded-full overflow-hidden shrink-0">
              <Image src="/logo-collco.png" alt="COLLCO" fill sizes="16px" className="object-cover" />
            </div>
            <span>COLLCO STUDIO</span>
            <span className="text-[#AFA99E]">/</span>
            <span className="text-[#666A73] font-normal">DIGITAL EXPERIENCES & CURATION</span>
          </div>
        </div>

        {/* Cinematic Hero Billboard Card (Borderless, Bold Depth) */}
        <div className="relative w-full rounded-[2.2rem] sm:rounded-[3rem] overflow-hidden shadow-chic-xl bg-[#09090B] min-h-[520px] sm:min-h-[580px] md:min-h-[640px] flex items-end">
          {/* Background Cinematic Image */}
          <div className="absolute inset-0">
            <Image
              src="/hero-architecture.jpg"
              alt="COLLCO Minimal Architecture"
              fill
              priority
              className="object-cover object-center transform scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Multi-layered cinematic gradient overlays for high legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-transparent" />
          </div>

          {/* Foreground Hero Copy */}
          <div className="relative z-10 p-8 sm:p-14 md:p-20 max-w-3xl text-left">
            <div className="inline-flex items-center gap-2 text-zinc-300 text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
              <span>Experiences. / Solo Product Studio</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter leading-[1.05]">
              함께하는 일상에,
              <br />
              <span className="text-zinc-200">
                새로운 가치를 더하다.
              </span>
            </h1>

            <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed max-w-xl font-normal">
              불필요한 군더더기를 덜어내고 본질에 집중합니다.
              일상의 틈새를 파고드는 5개의 독자적 디지털 솔루션과 수집가의 안목으로 엄선한 100% 라이선스 정품 컬렉션.
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#0B0B0C] font-black text-xs uppercase tracking-wider shadow-chic hover:bg-zinc-100 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Layers className="w-4 h-4 text-[#0B0B0C]" />
                <span>WORKS & SOLUTIONS</span>
                <ArrowDown className="w-4 h-4 text-zinc-400" />
              </a>

              <a
                href="#store"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <ShoppingBag className="w-4 h-4 text-zinc-200" />
                <span>CURATED STORE</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </a>

              <a
                href="#about"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-4 rounded-full text-zinc-300 hover:text-white text-xs font-mono font-bold uppercase tracking-wider transition-all"
              >
                <Compass className="w-4 h-4" />
                <span>THE PHILOSOPHY</span>
              </a>
            </div>
          </div>
        </div>

        {/* Editorial Floating Stats Row (Reference: Experiences 2m+ / 11+ / 58% / 19k+) */}
        <div className="mt-16 pt-6 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 w-full">
          <div className="space-y-1 text-left">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B0B0C] tracking-tight font-mono">
              5<span className="text-[#847E72] font-normal">+</span>
            </div>
            <div className="text-xs font-mono font-bold text-[#0B0B0C] uppercase tracking-widest pt-1">
              DIGITAL SOLUTIONS
            </div>
            <div className="text-xs text-[#666A73] leading-relaxed">
              라이브 서비스 중인 웹 & 모바일
            </div>
          </div>

          <div className="space-y-1 text-left">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B0B0C] tracking-tight font-mono">
              Live
            </div>
            <div className="text-xs font-mono font-bold text-[#0B0B0C] uppercase tracking-widest pt-1">
              GOOGLE PLAY
            </div>
            <div className="text-xs text-[#666A73] leading-relaxed">
              ditta 정식 스토어 배포 운용
            </div>
          </div>

          <div className="space-y-1 text-left">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B0B0C] tracking-tight font-mono">
              100<span className="text-[#847E72] font-normal">%</span>
            </div>
            <div className="text-xs font-mono font-bold text-[#0B0B0C] uppercase tracking-widest pt-1">
              SOLO OWNERSHIP
            </div>
            <div className="text-xs text-[#666A73] leading-relaxed">
              기획·디자인·엔지니어링 일원화
            </div>
          </div>

          <div className="space-y-1 text-left">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B0B0C] tracking-tight font-mono">
              Curated
            </div>
            <div className="text-xs font-mono font-bold text-[#0B0B0C] uppercase tracking-widest pt-1">
              OFFICIAL GOODS
            </div>
            <div className="text-xs text-[#666A73] leading-relaxed">
              100% 라이선스 정품 보증 쇼룸
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
