"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles, Layers, ShoppingBag, Terminal, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/common/Badge";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] sm:w-[700px] sm:h-[450px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/20 to-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Studio Identity Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161b22]/90 border border-[#30363d] shadow-sm shadow-blue-500/10 text-xs font-medium text-zinc-300">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-semibold text-white">COLLCO Studio</span>
            <span className="text-zinc-500">|</span>
            <span className="text-zinc-400">Solo Digital Builder & Curated Goods Hub</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12] max-w-4xl"
        >
          Everyday Problems,
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
            Solved with Digital Products
          </span>
          <br />
          <span className="text-zinc-300 font-bold">& Collections.</span>
        </motion.h1>

        {/* Subtitle / Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-[#8b949e] max-w-2xl leading-relaxed"
        >
          일상의 니치한 불편함을 포착해 날카로운 소프트웨어로 해결하고,
          <br className="hidden sm:inline" />
          엄선된 정품 피규어 & TCG 컬렉션을 제안하는 1인 프로덕트 스튜디오입니다.
        </motion.p>

        {/* Action Buttons Group */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4"
        >
          <a
            href="#products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Layers className="w-4 h-4" />
            <span>프로덕트 둘러보기</span>
            <ArrowDown className="w-4 h-4 opacity-70" />
          </a>

          <a
            href="#store"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#161b22] border border-[#30363d] hover:border-indigo-500/50 text-zinc-200 font-semibold text-sm hover:bg-[#21262d] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
          >
            <ShoppingBag className="w-4 h-4 text-indigo-400" />
            <span>스토어 바로가기</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-400" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 text-zinc-300 font-medium text-sm hover:bg-white/[0.08] transition-all"
          >
            <span>협업 문의</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Fast Value Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 pt-10 border-t border-[#30363d]/50 w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-left"
        >
          <div className="p-3.5 rounded-xl bg-[#161b22]/70 border border-[#30363d]/60 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">5+</div>
            <div className="text-xs text-[#8b949e] mt-1 font-medium">Digital Products</div>
            <div className="text-[11px] text-zinc-500 mt-0.5">자체 개발 5개 서비스 운영</div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#161b22]/70 border border-[#30363d]/60 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-400 tracking-tight">Live</div>
            <div className="text-xs text-[#8b949e] mt-1 font-medium">Google Play 배포</div>
            <div className="text-[11px] text-zinc-500 mt-0.5">ditta 정식 서비스 등록</div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#161b22]/70 border border-[#30363d]/60 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold text-indigo-400 tracking-tight">100%</div>
            <div className="text-xs text-[#8b949e] mt-1 font-medium">Solo End-to-End</div>
            <div className="text-[11px] text-zinc-500 mt-0.5">기획·개발·디자인 내재화</div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#161b22]/70 border border-[#30363d]/60 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400 tracking-tight">Curated</div>
            <div className="text-xs text-[#8b949e] mt-1 font-medium">Goods & TCG Store</div>
            <div className="text-[11px] text-zinc-500 mt-0.5">정품 피규어 & 컬렉션 샵</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
