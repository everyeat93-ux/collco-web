"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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
  TrendingUp,
  Calculator,
  Heart,
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
      case "TrendingUp":
        return <TrendingUp className="w-4 h-4 text-[#0B0B0C]" />;
      case "Calculator":
        return <Calculator className="w-4 h-4 text-[#0B0B0C]" />;
      case "Heart":
        return <Heart className="w-4 h-4 text-[#0B0B0C]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#0B0B0C]" />;
    }
  };

  const indexNumber = String(index + 1).padStart(2, "0");
  const hasDetailPage = Boolean(product.detailSlug);
  const isTesting = product.releaseState === "testing";
  const oneLiner = product.shortDescription || product.tagline;

  return (
    <article className="group relative flex flex-col justify-between bg-white border border-[#E8E5DC] hover:border-[#0B0B0C] rounded-[1.5rem] p-5 sm:p-6 transition-all duration-200 shadow-rauno-xs hover:shadow-rauno-sm">
      <div>
        {/* Header row: Icon, Index & Status */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2.5">
            {product.appIcon ? (
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-[#E8E5DC] bg-white shrink-0 shadow-xs">
                <Image
                  src={product.appIcon}
                  alt={`${product.name} 아이콘`}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] border border-[#E8E5DC] flex items-center justify-center shrink-0">
                {renderIcon()}
              </div>
            )}
            <span className="text-xs font-mono font-bold text-[#737067]">{indexNumber}</span>
          </div>

          <Badge variant={product.statusBadgeVariant} dot size="sm">
            {product.status}
          </Badge>
        </div>

        {/* Title & One-line Description */}
        <div className="mb-4">
          {hasDetailPage ? (
            <Link
              href={`/projects/${product.detailSlug}`}
              className="text-lg font-black text-[#0B0B0C] hover:underline underline-offset-4 tracking-tight"
            >
              {product.name}
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => onSelect(product)}
              className="text-left text-lg font-black text-[#0B0B0C] hover:underline underline-offset-4 tracking-tight cursor-pointer"
            >
              {product.name}
            </button>
          )}

          {product.subName && (
            <div className="text-xs text-[#737067] mt-0.5">{product.subName}</div>
          )}

          <p className="mt-2.5 text-sm text-[#484B52] leading-relaxed break-keep-all">
            {oneLiner}
          </p>
        </div>
      </div>

      {/* Explicit Action Buttons (No nested links) */}
      <div className="pt-4 border-t border-[#F2EFE8] flex flex-wrap items-center gap-2">
        {hasDetailPage ? (
          <Link
            href={`/projects/${product.detailSlug}`}
            className="inline-flex items-center gap-1 px-3.5 py-2 min-h-[38px] rounded-full bg-[#0B0B0C] hover:bg-[#252528] text-white text-xs font-bold transition-all"
          >
            <span>상세 보기</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => onSelect(product)}
            className="inline-flex items-center gap-1 px-3.5 py-2 min-h-[38px] rounded-full bg-[#FAF9F5] hover:bg-[#0B0B0C] text-[#0B0B0C] hover:text-white border border-[#E8E5DC] hover:border-[#0B0B0C] text-xs font-bold transition-all cursor-pointer"
          >
            {isTesting ? (
              <>
                <Clock className="w-3.5 h-3.5" />
                <span>{product.actionLabel || "개발 현황 보기"}</span>
              </>
            ) : (
              <span>상세 보기</span>
            )}
          </button>
        )}

        {product.demoUrl && (
          <a
            href={product.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-2 min-h-[38px] rounded-full bg-white hover:bg-[#F8F7F4] text-[#0B0B0C] border border-[#E8E5DC] hover:border-[#0B0B0C] text-xs font-medium transition-all"
          >
            <Globe className="w-3 h-3 text-[#484B52]" />
            <span>웹에서 열기</span>
          </a>
        )}

        {product.storeUrl && (
          <a
            href={product.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-2 min-h-[38px] rounded-full bg-white hover:bg-[#F8F7F4] text-[#0B0B0C] border border-[#E8E5DC] hover:border-[#0B0B0C] text-xs font-medium transition-all"
          >
            <span>Google Play</span>
            <ExternalLink className="w-3 h-3 text-[#484B52]" />
          </a>
        )}
      </div>
    </article>
  );
}
