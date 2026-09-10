"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  MapPin,
  ShieldAlert,
  BarChart3,
  HelpCircle,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Globe,
} from "lucide-react";
import { Product } from "@/types";
import { Badge } from "@/components/common/Badge";

interface ProductCardProps {
  product: Product;
  index: number;
  onSelect: (product: Product) => void;
}

export function ProductCard({ product, index, onSelect }: ProductCardProps) {
  const renderIcon = () => {
    switch (product.icon) {
      case "Activity":
        return <Activity className="w-5 h-5 text-emerald-400" />;
      case "MapPin":
        return <MapPin className="w-5 h-5 text-amber-400" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-5 h-5 text-purple-400" />;
      case "BarChart3":
        return <BarChart3 className="w-5 h-5 text-cyan-400" />;
      case "HelpCircle":
        return <HelpCircle className="w-5 h-5 text-pink-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  const getDomainLabel = () => {
    if (product.storeUrl) return "Google Play Store";
    if (product.demoUrl) {
      try {
        const url = new URL(product.demoUrl);
        return url.hostname;
      } catch {
        return product.demoUrl;
      }
    }
    return "런칭 준비 중 (Closed Beta)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      onClick={() => onSelect(product)}
      className="group relative flex flex-col justify-between bg-[#161b22] border border-[#30363d] hover:border-blue-500/50 rounded-2xl p-6 cursor-pointer transition-all duration-300 shadow-lg shadow-black/40 hover:shadow-blue-500/10 overflow-hidden"
    >
      {/* Top subtle gradient glow on hover */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.gradient} opacity-40 group-hover:opacity-100 transition-opacity`}
      />

      <div>
        {/* Header row: Icon & Status */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#0d1117] border border-[#30363d] flex items-center justify-center group-hover:scale-105 transition-transform">
            {renderIcon()}
          </div>
          <Badge variant={product.statusBadgeVariant} dot size="sm">
            {product.status}
          </Badge>
        </div>

        {/* Live URL indicator badge */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0d1117] border border-[#30363d] text-[11px] text-zinc-300 font-mono mb-3">
          <Globe className="w-3 h-3 text-blue-400 shrink-0" />
          <span className="truncate">{getDomainLabel()}</span>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-1">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#8b949e]">
            {product.category}
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight flex items-baseline gap-2 group-hover:text-blue-300 transition-colors">
            <span>{product.name}</span>
            {product.subName && (
              <span className="text-sm font-normal text-zinc-400">({product.subName})</span>
            )}
          </h3>
          <p className="text-sm text-zinc-300 line-clamp-2 mt-2 leading-relaxed">
            {product.summary}
          </p>
        </div>

        {/* Key Metrics snapshot */}
        <div className="grid grid-cols-3 gap-2 my-5 py-3 px-3 rounded-xl bg-[#0d1117]/80 border border-[#30363d]/50">
          {product.metrics.map((metric, idx) => (
            <div key={idx} className="text-left">
              <div className="text-[10px] text-zinc-400 truncate">{metric.label}</div>
              <div className="text-xs font-bold text-white truncate mt-0.5">{metric.value}</div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] px-2 py-0.5 rounded-md bg-[#21262d] text-zinc-300 border border-[#30363d]/40"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Trigger with Direct Launch Button */}
      <div className="pt-4 border-t border-[#30363d]/60 flex items-center justify-between text-xs font-semibold">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(product);
          }}
          className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors"
        >
          <span>문제·해결책 분석</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        {product.storeUrl ? (
          <a
            href={product.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-sm shadow-emerald-500/20 transition-all hover:scale-105"
          >
            <span>스토어 열기</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        ) : product.demoUrl ? (
          <a
            href={product.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-sm shadow-blue-500/20 transition-all hover:scale-105"
          >
            <span>서비스 접속</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-400 border border-amber-500/30 text-[11px] font-medium">
            <span>비공개 테스트</span>
          </span>
        )}
      </div>
    </motion.div>
  );
}
