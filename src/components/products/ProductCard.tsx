"use client";

import React from "react";
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
        return <Activity className="w-5 h-5 text-[#0B0B0C]" />;
      case "MapPin":
        return <MapPin className="w-5 h-5 text-[#0B0B0C]" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-5 h-5 text-[#0B0B0C]" />;
      case "BarChart3":
        return <BarChart3 className="w-5 h-5 text-[#0B0B0C]" />;
      case "HelpCircle":
        return <HelpCircle className="w-5 h-5 text-[#0B0B0C]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#0B0B0C]" />;
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
    <div
      onClick={() => onSelect(product)}
      className="group relative flex flex-col justify-between bg-white rounded-[2.2rem] p-8 sm:p-9 cursor-pointer transition-all duration-300 hover:-translate-y-2 shadow-chic-sm hover:shadow-chic-lg overflow-hidden"
    >
      <div>
        {/* Header row: Index & Status */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#ECEAE2] flex items-center justify-center group-hover:scale-105 transition-transform">
              {renderIcon()}
            </div>
            <div className="text-[11px] font-mono font-bold text-[#847E72] tracking-widest uppercase">
              0{index + 1}
            </div>
          </div>
          <Badge variant={product.statusBadgeVariant} dot size="sm">
            {product.status}
          </Badge>
        </div>

        {/* Live URL indicator badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#ECEAE2] text-[11px] text-[#484B52] font-mono mb-4">
          <Globe className="w-3.5 h-3.5 text-[#666A73] shrink-0" />
          <span className="truncate font-medium">{getDomainLabel()}</span>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-1.5">
          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#847E72]">
            {product.category}
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#0B0B0C] tracking-tight flex items-baseline gap-2 group-hover:text-[#666A73] transition-colors">
            <span>{product.name}</span>
            {product.subName && (
              <span className="text-sm font-medium text-[#666A73]">({product.subName})</span>
            )}
          </h3>
          <p className="text-sm text-[#4B5563] line-clamp-2 mt-2 leading-relaxed font-normal">
            {product.summary}
          </p>
        </div>

        {/* Key Metrics snapshot (Borderless clean container) */}
        <div className="grid grid-cols-3 gap-2 my-6 py-4 px-4 rounded-2xl bg-[#ECEAE2]">
          {product.metrics.map((metric, idx) => (
            <div key={idx} className="text-left">
              <div className="text-[10px] text-[#666A73] font-semibold truncate">{metric.label}</div>
              <div className="text-xs font-black text-[#0B0B0C] truncate mt-0.5 font-mono">{metric.value}</div>
            </div>
          ))}
        </div>

        {/* Tags (Borderless) */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] px-3.5 py-1 rounded-full bg-[#ECEAE2] text-[#484B52] font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Trigger with Direct Launch Button (Borderless) */}
      <div className="pt-5 flex items-center justify-between text-xs font-bold">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(product);
          }}
          className="flex items-center gap-1.5 text-[#0B0B0C] hover:text-[#666A73] transition-colors font-bold"
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
            className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full bg-[#0B0B0C] hover:bg-[#1E1E22] text-white font-bold text-xs shadow-chic-xs transition-all hover:scale-105 active:scale-95"
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
            className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full bg-[#0B0B0C] hover:bg-[#1E1E22] text-white font-bold text-xs shadow-chic-xs transition-all hover:scale-105 active:scale-95"
          >
            <span>서비스 접속</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-[#ECEAE2] text-[#666A73] text-[11px] font-semibold">
            <span>비공개 테스트</span>
          </span>
        )}
      </div>
    </div>
  );
}
