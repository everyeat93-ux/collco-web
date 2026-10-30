"use client";

import React from "react";
import { Zap, Target, Layers, Sparkles, Terminal } from "lucide-react";
import { BUILDING_PILLARS } from "@/data/techStack";
import { TechStackGrid } from "./TechStackGrid";

export function AboutSection() {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case "Zap":
        return <Zap className="w-4 h-4 text-[#0B0B0C]" />;
      case "Target":
        return <Target className="w-4 h-4 text-[#0B0B0C]" />;
      case "Layers":
        return <Layers className="w-4 h-4 text-[#0B0B0C]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#0B0B0C]" />;
    }
  };

  return (
    <section id="about" className="py-8 sm:py-16 md:py-24 px-3 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="mb-5 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white border border-[#E8E5DC] text-[10px] sm:text-[11px] font-mono text-[#737067] uppercase tracking-wider mb-2.5 sm:mb-4">
          <Terminal className="w-3 h-3 text-[#0B0B0C]" />
          <span>04 / ENGINEERING & OPERATING DOCTRINE</span>
        </div>

        <div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0B0B0C] tracking-tight leading-tight">
            빠른 실행과 집요한 문제 해결,
            <br />
            <span className="text-[#737067]">COLLCO의 빌딩 철학</span>
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-base text-[#484B52] max-w-2xl leading-[1.75] font-normal break-keep-all">
            기획과 UI/UX 디자인, 풀스택 엔지니어링과 이커머스 운영까지 전 과정을 한 호흡으로 완주하여 불필요한 의사결정 마찰을 줄이고 확실한 프로덕트 가치를 만듭니다.
          </p>
        </div>
      </div>

      {/* 3 Core Building Pillars (Swiss Minimalist Bento Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-5 mb-6 sm:mb-12">
        {BUILDING_PILLARS.map((pillar) => (
          <div
            key={pillar.number}
            className="flex flex-col justify-between p-4 sm:p-9 rounded-xl sm:rounded-[1.75rem] bg-white border border-[#E8E5DC] hover:border-[#0B0B0C] shadow-swiss-xs hover:shadow-swiss-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div>
              {/* Header with Number & Icon */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <span className="font-mono text-2xl sm:text-3xl font-black text-[#737067]">
                  {pillar.number}
                </span>
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#FAF9F5] border border-[#E8E5DC] flex items-center justify-center">
                  {getPillarIcon(pillar.icon)}
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-1.5 mb-3">
                <div className="text-[10px] font-mono text-[#737067] tracking-widest uppercase font-bold">
                  {pillar.enTitle}
                </div>
                <h3 className="text-lg font-black text-[#0B0B0C] tracking-tight">
                  {pillar.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#484B52] leading-[1.75] font-normal break-keep-all">
                {pillar.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-6 mt-6 border-t border-[#F2EFE8]">
              {pillar.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-[#FAF9F5] border border-[#E8E5DC] text-[#484B52]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack & Toolkit Showcase Card */}
      <div className="rounded-[2rem] p-8 sm:p-12 bg-white border border-[#E8E5DC] shadow-swiss-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E8E5DC]">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#737067] uppercase tracking-wider mb-1">
              <Terminal className="w-3.5 h-3.5 text-[#0B0B0C]" />
              <span>Full-Stack & Operations Stack</span>
            </div>
            <h3 className="text-2xl font-black text-[#0B0B0C] tracking-tight">
              실전에 검증된 기술 스택 & 인프라
            </h3>
            <p className="text-xs sm:text-sm text-[#484B52] mt-1">
              0에서 1을 만드는 과정에서 프로덕션 안정성과 개발 속도를 극대화하는 엔지니어링 툴킷
            </p>
          </div>

          <div className="text-xs font-mono text-[#737067] px-3.5 py-1.5 rounded-full bg-[#FAF9F5] border border-[#E8E5DC] self-start md:self-auto">
            MODERN PRODUCT ENGINEERING
          </div>
        </div>

        {/* Tech Stack Grid Component */}
        <TechStackGrid />
      </div>
    </section>
  );
}
