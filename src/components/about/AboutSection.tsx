"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Target, Layers, Sparkles, Terminal, CheckCircle2 } from "lucide-react";
import { BUILDING_PILLARS } from "@/data/techStack";
import { TechStackGrid } from "./TechStackGrid";
import { SectionHeader } from "@/components/common/SectionHeader";

export function AboutSection() {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case "Zap":
        return <Zap className="w-5 h-5 text-amber-400" />;
      case "Target":
        return <Target className="w-5 h-5 text-blue-400" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-indigo-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <SectionHeader
        badgeText="Solo Builder Philosophy"
        badgeVariant="purple"
        title={
          <span>
            빠른 실행과 집요한 문제 해결,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              COLLCO의 빌딩 철학
            </span>
          </span>
        }
        subtitle="기획과 디자인, 엔지니어링과 이커머스 운영까지 전 과정을 한 호흡으로 연결하여 불필요한 마찰을 줄이고 가치를 만듭니다."
      />

      {/* 3 Core Building Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
        {BUILDING_PILLARS.map((pillar, index) => (
          <motion.div
            key={pillar.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#161b22] border border-[#30363d] hover:border-blue-500/40 shadow-lg shadow-black/30 transition-all duration-300"
          >
            <div>
              {/* Header with Number & Icon */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-2xl font-black text-[#8b949e]/40">
                  {pillar.number}
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#0d1117] border border-[#30363d] flex items-center justify-center shadow-inner">
                  {getPillarIcon(pillar.icon)}
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-1 mb-3">
                <div className="text-[11px] font-mono text-blue-400 tracking-wider uppercase">
                  {pillar.enTitle}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {pillar.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#8b949e] leading-relaxed">
                {pillar.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-6 mt-6 border-t border-[#30363d]/50">
              {pillar.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[11px] px-2.5 py-0.5 rounded-md bg-[#0d1117] text-zinc-300 border border-[#30363d]/60 font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tech Stack & Toolkit Showcase Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl p-6 sm:p-10 bg-[#161b22]/70 border border-[#30363d] shadow-xl"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#30363d]/60">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
              <Terminal className="w-3.5 h-3.5" />
              <span>Full-Stack & Operations Stack</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              검증된 생산성을 보장하는 기술 및 운영 툴킷
            </h3>
          </div>
          <div className="text-xs text-[#8b949e] max-w-sm">
            현대적인 웹/모바일 프레임워크와 데이터 분석, 이커머스 솔루션을 유기적으로 활용합니다.
          </div>
        </div>

        <TechStackGrid />
      </motion.div>
    </section>
  );
}
