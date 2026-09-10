"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  Cpu,
  Layers,
  ArrowRight,
} from "lucide-react";
import { Product } from "@/types";
import { Badge } from "@/components/common/Badge";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "problem" | "solution" | "impact">("overview");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (product) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#161b22] border border-[#30363d] rounded-2xl shadow-2xl shadow-black/80 overflow-hidden z-10"
        >
          {/* Header Banner */}
          <div className="relative px-6 py-6 border-b border-[#30363d] bg-gradient-to-b from-[#21262d]/90 to-[#161b22]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Badge variant={product.statusBadgeVariant} dot size="sm">
                    {product.status}
                  </Badge>
                  <span className="text-xs text-zinc-400 font-medium">{product.category}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-baseline gap-2">
                  <span>{product.name}</span>
                  {product.subName && (
                    <span className="text-lg text-zinc-400 font-normal">({product.subName})</span>
                  )}
                </h3>
                <p className="text-sm text-[#8b949e] mt-1">{product.tagline}</p>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-[#30363d]/60 border border-transparent hover:border-[#30363d] transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-3 gap-3 mt-5 pt-4 border-t border-[#30363d]/50">
              {product.metrics.map((metric, idx) => (
                <div key={idx} className="bg-[#0d1117]/60 rounded-lg p-2.5 border border-[#30363d]/40">
                  <div className="text-[11px] text-zinc-400">{metric.label}</div>
                  <div className="text-sm font-semibold text-zinc-100 mt-0.5">{metric.value}</div>
                </div>
              ))}
            </div>

            {/* Tab navigation */}
            <div className="flex items-center gap-2 mt-5 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === "overview"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                전체 구조 (All-in-One)
              </button>
              <button
                onClick={() => setActiveTab("problem")}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === "problem"
                    ? "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                1. 문제 정의 (Problem)
              </button>
              <button
                onClick={() => setActiveTab("solution")}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === "solution"
                    ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                2. 해결책 (Solution)
              </button>
              <button
                onClick={() => setActiveTab("impact")}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === "impact"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                3. 결과 & 성과 (Impact)
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="px-6 py-6 overflow-y-auto space-y-6 text-sm text-zinc-300">
            {/* Section 1: Problem Definition */}
            {(activeTab === "overview" || activeTab === "problem") && (
              <div className="p-4 rounded-xl bg-rose-950/15 border border-rose-900/30 space-y-3">
                <div className="flex items-center gap-2 text-rose-400 font-semibold">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Problem : {product.problem.title}</span>
                </div>
                <p className="text-zinc-300 leading-relaxed text-xs sm:text-sm">
                  {product.problem.description}
                </p>
                <div className="space-y-1.5 pt-1">
                  {product.problem.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400/80 mt-1.5 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 2: Solution & Features */}
            {(activeTab === "overview" || activeTab === "solution") && (
              <div className="p-4 rounded-xl bg-blue-950/15 border border-blue-900/30 space-y-3">
                <div className="flex items-center gap-2 text-blue-400 font-semibold">
                  <Lightbulb className="w-4 h-4" />
                  <span>Solution : {product.solution.title}</span>
                </div>
                <p className="text-zinc-300 leading-relaxed text-xs sm:text-sm">
                  {product.solution.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {product.solution.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-[#0d1117]/60 border border-blue-500/20 flex items-start gap-2 text-xs text-zinc-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 3: Impact & Outcome */}
            {(activeTab === "overview" || activeTab === "impact") && (
              <div className="p-4 rounded-xl bg-emerald-950/15 border border-emerald-900/30 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <TrendingUp className="w-4 h-4" />
                  <span>Impact : {product.impact.title}</span>
                </div>
                <p className="text-zinc-300 leading-relaxed text-xs sm:text-sm">
                  {product.impact.description}
                </p>
                <div className="space-y-1.5 pt-1">
                  {product.impact.highlights.map((high, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span>{high}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Employed */}
            <div className="pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 mb-2">
                <Cpu className="w-3.5 h-3.5" />
                <span>기술 스택 & 아키텍처</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {product.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs rounded-md bg-[#0d1117] border border-[#30363d] text-zinc-300 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 border-t border-[#30363d] bg-[#0d1117] flex items-center justify-between gap-3">
            <div className="text-xs text-[#6e7681]">
              COLLCO Verified Solo Production
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium rounded-lg text-zinc-400 hover:text-white hover:bg-[#21262d] border border-[#30363d] transition-colors"
              >
                닫기
              </button>

              {product.storeUrl && (
                <a
                  href={product.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-md shadow-emerald-500/20"
                >
                  <span>Google Play 스토어</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {product.demoUrl && !product.storeUrl && (
                <a
                  href={product.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-md shadow-blue-500/20"
                >
                  <span>서비스 바로가기</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {!product.storeUrl && !product.demoUrl && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  <span>비공개 테스트 중 (런칭 준비 중)</span>
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
