"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Globe,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  Cpu,
  Clock,
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
    setActiveTab("overview");
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (product) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ type: "spring", damping: 28, stiffness: 320 }}
          className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-white border border-[#E8E5DC] rounded-[2rem] shadow-swiss-lg overflow-hidden z-10"
        >
          {/* Header Banner */}
          <div className="relative px-8 py-7 bg-[#FAF9F5] border-b border-[#E8E5DC]">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4 sm:gap-5">
                {product.appIcon && (
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border border-[#E8E5DC] shrink-0 bg-white shadow-sm mt-1">
                    <Image
                      src={product.appIcon}
                      alt={`${product.name} App Icon`}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                    <Badge variant={product.statusBadgeVariant} dot size="sm">
                      {product.status}
                    </Badge>
                    <span className="text-[11px] font-mono text-[#737067] font-bold uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0B0B0C] tracking-tight flex items-baseline gap-2">
                    <span>{product.name}</span>
                    {product.subName && (
                      <span className="text-base text-[#737067] font-normal">({product.subName})</span>
                    )}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#484B52] mt-1.5">{product.tagline}</p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-[#737067] hover:text-[#0B0B0C] hover:bg-white border border-transparent hover:border-[#E8E5DC] transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-3 gap-3 mt-6 pt-4 border-t border-[#E8E5DC]">
              {product.metrics.map((metric, idx) => (
                <div key={idx} className="bg-white border border-[#E8E5DC] rounded-xl p-3 shadow-swiss-xs">
                  <div className="text-[10px] font-mono text-[#737067] font-semibold">{metric.label}</div>
                  <div className="text-sm sm:text-base font-black text-[#0B0B0C] mt-0.5 font-mono">{metric.value}</div>
                </div>
              ))}
            </div>

            {/* Tab navigation */}
            <div className="flex items-center gap-1.5 mt-5 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all ${
                  activeTab === "overview"
                    ? "bg-[#0B0B0C] text-white font-bold"
                    : "text-[#737067] hover:text-[#0B0B0C] hover:bg-white"
                }`}
              >
                전체 구조
              </button>
              <button
                onClick={() => setActiveTab("problem")}
                className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all ${
                  activeTab === "problem"
                    ? "bg-[#0B0B0C] text-white font-bold"
                    : "text-[#737067] hover:text-[#0B0B0C] hover:bg-white"
                }`}
              >
                1. 문제 정의
              </button>
              <button
                onClick={() => setActiveTab("solution")}
                className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all ${
                  activeTab === "solution"
                    ? "bg-[#0B0B0C] text-white font-bold"
                    : "text-[#737067] hover:text-[#0B0B0C] hover:bg-white"
                }`}
              >
                2. 해결책
              </button>
              <button
                onClick={() => setActiveTab("impact")}
                className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all ${
                  activeTab === "impact"
                    ? "bg-[#0B0B0C] text-white font-bold"
                    : "text-[#737067] hover:text-[#0B0B0C] hover:bg-white"
                }`}
              >
                3. 결과 & 성과
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="px-8 py-7 overflow-y-auto space-y-6 text-sm text-[#484B52]">
            {/* Section 1: Problem Definition */}
            {(activeTab === "overview" || activeTab === "problem") && (
              <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-[#E8E5DC] space-y-3">
                <div className="flex items-center gap-2 text-[#0B0B0C] font-bold">
                  <AlertTriangle className="w-4 h-4 text-[#737067]" />
                  <span>Problem : {product.problem.title}</span>
                </div>
                <p className="text-[#484B52] leading-relaxed text-xs sm:text-sm">
                  {product.problem.description}
                </p>
                <div className="space-y-1.5 pt-1">
                  {product.problem.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#737067]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#737067] mt-1.5 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 2: Solution Engine */}
            {(activeTab === "overview" || activeTab === "solution") && (
              <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-[#E8E5DC] space-y-3">
                <div className="flex items-center gap-2 text-[#0B0B0C] font-bold">
                  <Lightbulb className="w-4 h-4 text-[#0B0B0C]" />
                  <span>Solution : {product.solution.title}</span>
                </div>
                <p className="text-[#484B52] leading-relaxed text-xs sm:text-sm">
                  {product.solution.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {product.solution.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#0B0B0C] bg-white border border-[#E8E5DC] p-3 rounded-xl shadow-swiss-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 3: Impact & Outcome */}
            {(activeTab === "overview" || activeTab === "impact") && (
              <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-[#E8E5DC] space-y-3">
                <div className="flex items-center gap-2 text-[#0B0B0C] font-bold">
                  <TrendingUp className="w-4 h-4 text-[#0B0B0C]" />
                  <span>Impact : {product.impact.title}</span>
                </div>
                <p className="text-[#484B52] leading-relaxed text-xs sm:text-sm">
                  {product.impact.description}
                </p>
                <div className="space-y-1.5 pt-1">
                  {product.impact.highlights.map((high, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#484B52]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0B0B0C] mt-1.5 shrink-0" />
                      <span>{high}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Employed */}
            <div className="pt-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0B0B0C] mb-2.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>TECH STACK & ARCHITECTURE</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {product.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs rounded-lg bg-[#FAF9F5] border border-[#E8E5DC] text-[#484B52] font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-8 py-4 bg-[#FAF9F5] border-t border-[#E8E5DC] flex items-center justify-between gap-3">
            <div className="text-[11px] font-mono text-[#737067] uppercase tracking-wider">
              COLLCO VERIFIED PRODUCTION
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-mono rounded-xl text-[#737067] hover:text-[#0B0B0C] hover:bg-white transition-colors"
              >
                닫기
              </button>

              {product.demoUrl && (
                <a
                  href={product.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-bold rounded-xl bg-white hover:bg-[#F8F7F4] text-[#0B0B0C] border border-[#E8E5DC] transition-all shadow-swiss-xs"
                >
                  <Globe className="w-3.5 h-3.5 text-[#737067]" />
                  <span>{product.category.includes("Brand") ? "공식 사이트" : "공식 웹사이트"}</span>
                  <ExternalLink className="w-3 h-3 text-[#737067]" />
                </a>
              )}

              {product.storeUrl && (
                <a
                  href={product.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4.5 py-2 text-xs font-mono font-bold rounded-xl bg-[#0B0B0C] hover:bg-[#252528] text-white transition-all shadow-swiss-xs"
                >
                  <span>Google Play 스토어</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {!product.storeUrl && !product.demoUrl && (
                <span className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono rounded-xl bg-white border border-[#E8E5DC] text-[#484B52] shadow-swiss-xs">
                  <Clock className="w-3.5 h-3.5 text-[#737067]" />
                  <span>
                    {product.actionLabel ||
                      (product.status.includes("검토") || product.status.includes("심사")
                        ? "스토어 게시 검토 중"
                        : product.status)}
                  </span>
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
