"use client";

import React from "react";
import { Zap, Target, Layers, Sparkles, Terminal } from "lucide-react";
import { BUILDING_PILLARS } from "@/data/techStack";
import { TechStackGrid } from "./TechStackGrid";
import { SectionHeader } from "@/components/common/SectionHeader";

export function AboutSection() {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case "Zap":
        return <Zap className="w-5 h-5 text-[#111113]" />;
      case "Target":
        return <Target className="w-5 h-5 text-[#111113]" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-[#111113]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#111113]" />;
    }
  };

  return (
    <section id="about" className="py-28 md:py-36 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Background ambient warm light */}
      <div className="absolute top-1/2 left-1/3 w-[480px] h-[480px] bg-[#EFECE6]/50 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <SectionHeader
        badgeText="03 / THE PHILOSOPHY"
        badgeVariant="neutral"
        title={
          <span>
            빠른 실행과 집요한 문제 해결,{" "}
            <span className="text-[#0B0B0C]">
              COLLCO의 빌딩 철학
            </span>
          </span>
        }
        subtitle="기획과 디자인, 엔지니어링과 이커머스 운영까지 전 과정을 한 호흡으로 완주하여 불필요한 마찰을 줄이고 확실한 가치를 만듭니다."
      />

      {/* 3 Core Building Pillars (Borderless Architectural Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
        {BUILDING_PILLARS.map((pillar) => (
          <div
            key={pillar.number}
            className="flex flex-col justify-between p-9 sm:p-10 rounded-[2.2rem] bg-white shadow-chic-sm hover:shadow-chic-lg transition-all duration-300 hover:-translate-y-1.5"
          >
            <div>
              {/* Header with Number & Icon */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-5xl font-black text-[#A8A398]">
                  {pillar.number}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-[#ECEAE2] flex items-center justify-center">
                  {getPillarIcon(pillar.icon)}
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-2 mb-4">
                <div className="text-[10px] font-mono text-[#847E72] tracking-widest uppercase font-bold">
                  {pillar.enTitle}
                </div>
                <h3 className="text-xl font-black text-[#0B0B0C] tracking-tight">
                  {pillar.title}
                </h3>
              </div>

              <p className="text-sm text-[#484B52] leading-relaxed font-normal">
                {pillar.description}
              </p>
            </div>

            {/* Tags (Borderless) */}
            <div className="flex flex-wrap gap-1.5 pt-8 mt-6">
              {pillar.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[11px] px-3.5 py-1 rounded-full bg-[#ECEAE2] text-[#484B52] font-bold"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack & Toolkit Showcase Card (Borderless) */}
      <div
        className="rounded-[2.4rem] p-9 sm:p-14 bg-white shadow-chic-lg"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-9">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#847E72] uppercase tracking-wider mb-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#0B0B0C]" />
              <span>Full-Stack & Operations Stack</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0B0B0C] tracking-tight">
              검증된 생산성을 보장하는 기술 및 운영 툴킷
            </h3>
          </div>
          <div className="text-xs sm:text-sm text-[#666A73] max-w-sm leading-relaxed font-normal">
            현대적인 웹/모바일 프레임워크와 데이터 분석, 이커머스 솔루션을 유기적으로 활용합니다.
          </div>
        </div>

        <TechStackGrid />
      </div>
    </section>
  );
}
