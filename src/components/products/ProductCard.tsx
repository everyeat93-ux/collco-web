"use client";

import React from "react";
import Image from "next/image";
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
  Crown,
  Gamepad2,
  Clock,
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
        return <Activity className="w-4 h-4 text-[#0B0B0C]" />;
      case "MapPin":
        return <MapPin className="w-4 h-4 text-[#0B0B0C]" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-4 h-4 text-[#0B0B0C]" />;
      case "BarChart3":
        return <BarChart3 className="w-4 h-4 text-[#0B0B0C]" />;
      case "HelpCircle":
        return <HelpCircle className="w-4 h-4 text-[#0B0B0C]" />;
      case "Crown":
        return <Crown className="w-4 h-4 text-[#0B0B0C]" />;
      case "Gamepad2":
        return <Gamepad2 className="w-4 h-4 text-[#0B0B0C]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#0B0B0C]" />;
    }
  };

  const getDomainLabel = () => {
    if (product.demoUrl) {
      try {
        const url = new URL(product.demoUrl);
        return url.hostname;
      } catch {
        return product.demoUrl;
      }
    }
    if (product.domainLabel) return product.domainLabel;
    if (product.storeUrl) return "Google Play Store";
    return "라이브 서비스";
  };

  return (
    <div
      onClick={() => onSelect(product)}
      className="group relative flex flex-col justify-between bg-white border border-[#E8E5DC] hover:border-[#0B0B0C] rounded-[1.75rem] p-7 sm:p-8 cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-swiss-xs hover:shadow-swiss-lg"
    >
      <div>
        {/* Header row: Index & Status */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-3">
            {product.appIcon ? (
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-[#E8E5DC] group-hover:border-[#0B0B0C] group-hover:scale-105 shadow-sm transition-all bg-white shrink-0">
                <Image
                  src={product.appIcon}
                  alt={`${product.name} App Icon`}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] border border-[#E8E5DC] flex items-center justify-center group-hover:border-[#0B0B0C] transition-colors shrink-0">
                {renderIcon()}
              </div>
            )}
            <div className="text-[11px] font-mono font-bold text-[#737067] tracking-widest">
              0{index + 1}
            </div>
          </div>
          <Badge variant={product.statusBadgeVariant} dot size="sm">
            {product.status}
          </Badge>
        </div>

        {/* Live URL / Status Indicator Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9F5] border border-[#E8E5DC] text-[11px] text-[#484B52] font-mono mb-4">
          <Globe className="w-3 h-3 text-[#737067] shrink-0" />
          <span className="truncate font-medium">{getDomainLabel()}</span>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-1.5">
          <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#737067]">
            {product.category}
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#0B0B0C] tracking-tight flex items-baseline gap-2 group-hover:text-[#484B52] transition-colors">
            <span>{product.name}</span>
            {product.subName && (
              <span className="text-sm font-medium text-[#737067]">({product.subName})</span>
            )}
          </h3>
          <p className="text-xs sm:text-sm text-[#484B52] line-clamp-2 mt-2 leading-relaxed font-normal">
            {product.summary}
          </p>
        </div>

        {/* Key Metrics snapshot */}
        <div className="grid grid-cols-3 gap-2 my-5 py-3 px-3.5 rounded-xl bg-[#FAF9F5] border border-[#E8E5DC]">
          {product.metrics.map((metric, idx) => (
            <div key={idx} className="text-left">
              <div className="text-[10px] text-[#737067] font-semibold truncate font-mono">{metric.label}</div>
              <div className="text-xs font-black text-[#0B0B0C] truncate mt-0.5 font-mono">{metric.value}</div>
            </div>
          ))}
        </div>

        {/* Tech / Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-[#FAF9F5] border border-[#E8E5DC] text-[#484B52]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Trigger */}
      <div className="pt-4 border-t border-[#F2EFE8] flex items-center justify-between text-xs font-mono font-bold">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(product);
          }}
          className="flex items-center gap-1 text-[#0B0B0C] hover:text-[#737067] transition-colors"
        >
          <span>상세 분석</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-1.5">
          {product.demoUrl && (
            <a
              href={product.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-white hover:bg-[#F8F7F4] text-[#0B0B0C] border border-[#E8E5DC] font-mono text-[11px] transition-all hover:scale-105 active:scale-95 shadow-xs"
              title="공식 웹사이트 바로가기"
            >
              <span>웹사이트</span>
              <ExternalLink className="w-2.5 h-2.5 text-[#737067]" />
            </a>
          )}

          {product.storeUrl && (
            <a
              href={product.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#0B0B0C] hover:bg-[#252528] text-white font-mono text-[11px] shadow-swiss-xs transition-all hover:scale-105 active:scale-95"
              title="Google Play 스토어"
            >
              <span>스토어</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          )}

          {!product.storeUrl && !product.demoUrl && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FAF9F5] border border-[#E8E5DC] text-[#484B52] text-[11px] font-mono">
              <Clock className="w-3 h-3 text-[#737067]" />
              <span>{product.actionLabel || product.status}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
