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
          className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity"
        />

        {/* Modal Container (Borderless, Clean Architectural Form) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ type: "spring", damping: 28, stiffness: 320 }}
          className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-white rounded-[2.2rem] shadow-chic-xl overflow-hidden z-10"
        >
          {/* Header Banner */}
          <div className="relative px-8 py-7 bg-[#ECEAE2]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                  <Badge variant={product.statusBadgeVariant} dot size="sm">
                    {product.status}
                  </Badge>
                  <span className="text-[11px] font-mono text-[#847E72] font-bold uppercase tracking-wider">{product.category}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0B0B0C] tracking-tight flex items-baseline gap-2">
                  <span>{product.name}</span>
                  {product.subName && (
                    <span className="text-lg text-[#666A73] font-normal">({product.subName})</span>
                  )}
                </h3>
                <p className="text-sm text-[#484B52] mt-1.5">{product.tagline}</p>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2.5 rounded-2xl text-[#666A73] hover:text-[#0B0B0C] hover:bg-white transition-all shadow-chic-xs"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Metrics Ribbon (Borderless) */}
            <div className="grid grid-cols-3 gap-3 mt-6 pt-5">
              {product.metrics.map((metric, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-3.5 shadow-chic-xs">
                  <div className="text-[10px] font-mono text-[#847E72] font-semibold">{metric.label}</div>
                  <div className="text-base font-black text-[#0B0B0C] mt-0.5 font-mono">{metric.value}</div>
                </div>
              ))}
            </div>

            {/* Tab navigation */}
            <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                  activeTab === "overview"
                    ? "bg-[#0B0B0C] text-white shadow-chic-xs"
                    : "text-[#666A73] hover:text-[#0B0B0C] hover:bg-white"
                }`}
              >
                전체 구조
              </button>
              <button
                onClick={() => setActiveTab("problem")}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                  activeTab === "problem"
                    ? "bg-[#0B0B0C] text-white shadow-chic-xs"
                    : "text-[#666A73] hover:text-[#0B0B0C] hover:bg-white"
                }`}
              >
                1. 문제 정의
              </button>
              <button
                onClick={() => setActiveTab("solution")}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                  activeTab === "solution"
                    ? "bg-[#0B0B0C] text-white shadow-chic-xs"
                    : "text-[#666A73] hover:text-[#0B0B0C] hover:bg-white"
                }`}
              >
                2. 해결책
              </button>
              <button
                onClick={() => setActiveTab("impact")}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                  activeTab === "impact"
                    ? "bg-[#0B0B0C] text-white shadow-chic-xs"
                    : "text-[#666A73] hover:text-[#0B0B0C] hover:bg-white"
                }`}
              >
                3. 결과 & 성과
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="px-8 py-7 overflow-y-auto space-y-6 text-sm text-[#383B42]">
            {/* Section 1: Problem Definition */}
            {(activeTab === "overview" || activeTab === "problem") && (
              <div className="p-6 rounded-2xl bg-[#ECEAE2] space-y-3">
                <div className="flex items-center gap-2 text-[#0B0B0C] font-bold">
                  <AlertTriangle className="w-4 h-4 text-[#847E72]" />
                  <span>Problem : {product.problem.title}</span>
                </div>
                <p className="text-[#383B42] leading-relaxed text-xs sm:text-sm">
                  {product.problem.description}
                </p>
                <div className="space-y-1.5 pt-1">
                  {product.problem.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#666A73]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#847E72] mt-1.5 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 2: Solution & Features */}
            {(activeTab === "overview" || activeTab === "solution") && (
              <div className="p-6 rounded-2xl bg-[#ECEAE2] space-y-3">
                <div className="flex items-center gap-2 text-[#0B0B0C] font-bold">
                  <Lightbulb className="w-4 h-4 text-[#0B0B0C]" />
                  <span>Solution : {product.solution.title}</span>
                </div>
                <p className="text-[#383B42] leading-relaxed text-xs sm:text-sm">
                  {product.solution.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {product.solution.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white flex items-start gap-2 text-xs text-[#0B0B0C] shadow-chic-xs font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0B0B0C] mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 3: Impact & Outcome */}
            {(activeTab === "overview" || activeTab === "impact") && (
              <div className="p-6 rounded-2xl bg-[#ECEAE2] space-y-3">
                <div className="flex items-center gap-2 text-[#0B0B0C] font-bold">
                  <TrendingUp className="w-4 h-4 text-[#0B0B0C]" />
                  <span>Impact : {product.impact.title}</span>
                </div>
                <p className="text-[#383B42] leading-relaxed text-xs sm:text-sm">
                  {product.impact.description}
                </p>
                <div className="space-y-1.5 pt-1">
                  {product.impact.highlights.map((high, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#666A73]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0B0B0C] mt-1.5 shrink-0" />
                      <span>{high}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Employed */}
            <div className="pt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0B0B0C] mb-2.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>기술 스택 & 아키텍처</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {product.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-xl bg-[#ECEAE2] text-[#383B42] font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-8 py-5 bg-[#ECEAE2] flex items-center justify-between gap-3">
            <div className="text-[11px] font-mono font-bold text-[#847E72] uppercase tracking-wider">
              COLLCO Verified Production
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-bold rounded-xl text-[#666A73] hover:text-[#0B0B0C] hover:bg-white transition-colors"
              >
                닫기
              </button>

              {product.storeUrl && (
                <a
                  href={product.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold rounded-xl bg-[#0B0B0C] hover:bg-[#1E1E22] text-white transition-all shadow-chic-xs"
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
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold rounded-xl bg-[#0B0B0C] hover:bg-[#1E1E22] text-white transition-all shadow-chic-xs"
                >
                  <span>서비스 바로가기</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {!product.storeUrl && !product.demoUrl && (
                <span className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-white text-[#847E72]">
                  <span>비공개 테스트 중</span>
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
