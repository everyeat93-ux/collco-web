"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PRODUCTS } from "@/data/products";
import { Product } from "@/types";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";
import { Badge } from "@/components/common/Badge";
import {
  LayoutGrid,
  List,
  ExternalLink,
  Globe,
  ArrowRight,
  Clock,
  Layers,
  Sparkles,
} from "lucide-react";

export function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filter, setFilter] = useState<"all" | "mobile" | "web">("all");
  const [viewMode, setViewMode] = useState<"index" | "grid">("index");

  const filteredProducts = PRODUCTS.filter((product) => {
    if (filter === "mobile") return product.category.includes("Mobile");
    if (filter === "web")
      return product.category.includes("Web") || product.category.includes("Brand");
    return true;
  });

  const mobileCount = PRODUCTS.filter((p) => p.category.includes("Mobile")).length;
  const webCount = PRODUCTS.filter(
    (p) => p.category.includes("Web") || p.category.includes("Brand")
  ).length;

  return (
    <section id="projects" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Rauno-style Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E5DC] text-[11px] font-mono text-[#737067] uppercase tracking-wider mb-4">
          <Layers className="w-3.5 h-3.5 text-[#0B0B0C]" />
          <span>01 / SHIPPED WORKS & PROJECTS (7)</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0B0C] tracking-tight leading-tight">
              일상의 틈새를 해결하는,
              <br />
              <span className="text-[#737067]">7개의 독자적 소프트웨어 솔루션</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#484B52] max-w-2xl leading-relaxed font-normal">
              구글 플레이스토어 정식 출시 게임부터 로컬 라이프 GPS 툴, 35년 전통의 비스포크 아틀리에 웹까지 직접 기획하고 코딩한 1인 빌더의 릴리즈 인덱스입니다.
            </p>
          </div>

          <div className="text-xs font-mono text-[#737067] px-3.5 py-1.5 rounded-full bg-white border border-[#E8E5DC] shrink-0">
            [PROD 2026] · 100% LIVE
          </div>
        </div>
      </div>

      {/* Rauno Toolbar: Category Filter & View Mode Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#E8E5DC]">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setFilter("all")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
              filter === "all"
                ? "bg-[#0B0B0C] text-white shadow-rauno-xs"
                : "bg-white text-[#737067] hover:text-[#0B0B0C] border border-[#E8E5DC]"
            }`}
          >
            All Works ({PRODUCTS.length})
          </button>
          <button
            onClick={() => setFilter("mobile")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
              filter === "mobile"
                ? "bg-[#0B0B0C] text-white shadow-rauno-xs"
                : "bg-white text-[#737067] hover:text-[#0B0B0C] border border-[#E8E5DC]"
            }`}
          >
            Mobile Apps & Games ({mobileCount})
          </button>
          <button
            onClick={() => setFilter("web")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
              filter === "web"
                ? "bg-[#0B0B0C] text-white shadow-rauno-xs"
                : "bg-white text-[#737067] hover:text-[#0B0B0C] border border-[#E8E5DC]"
            }`}
          >
            Web Services & Brand ({webCount})
          </button>
        </div>

        {/* View Toggle */}
        <div className="inline-flex items-center gap-1 p-1 rounded-full bg-white border border-[#E8E5DC] self-start sm:self-auto shadow-rauno-xs">
          <button
            onClick={() => setViewMode("index")}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono transition-all ${
              viewMode === "index"
                ? "bg-[#0B0B0C] text-white font-bold"
                : "text-[#737067] hover:text-[#0B0B0C]"
            }`}
          >
            <List className="w-3.5 h-3.5" />
            <span>Rauno Index</span>
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono transition-all ${
              viewMode === "grid"
                ? "bg-[#0B0B0C] text-white font-bold"
                : "text-[#737067] hover:text-[#0B0B0C]"
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Cards</span>
          </button>
        </div>
      </div>

      {/* Mode 1: Rauno Freiberg's Iconic Project Index List */}
      {viewMode === "index" && (
        <div className="space-y-2">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group relative p-4 sm:p-5 rounded-2xl bg-white hover:bg-[#F8F7F4] border border-[#E8E5DC] hover:border-[#0B0B0C] transition-all duration-200 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-rauno-xs"
            >
              {/* Left Column: Number, Icon & Title */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#737067] font-bold shrink-0">
                  0{index + 1}
                </span>

                {product.appIcon && (
                  <div className="relative w-7 h-7 rounded-lg overflow-hidden border border-[#E8E5DC] group-hover:border-[#0B0B0C] shrink-0 bg-white shadow-xs">
                    <Image
                      src={product.appIcon}
                      alt={product.name}
                      fill
                      sizes="28px"
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="flex items-baseline gap-2">
                  <h3 className="text-base sm:text-lg font-black text-[#0B0B0C] group-hover:text-[#484B52] transition-colors">
                    {product.name}
                  </h3>
                  {product.subName && (
                    <span className="text-xs text-[#737067] font-normal">
                      ({product.subName})
                    </span>
                  )}
                </div>
              </div>

              {/* Rauno's Signature Dashed Line Connector */}
              <div className="hidden md:block rauno-line-connector" />

              {/* Right Column: Platform, Status & Action */}
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs shrink-0">
                <span className="text-[11px] text-[#737067] hidden lg:inline">
                  {product.category.split("/")[0].trim()}
                </span>

                <Badge variant={product.statusBadgeVariant} dot size="sm">
                  {product.status}
                </Badge>

                <span className="text-xs text-[#AFA99E]">2026</span>

                <div className="flex items-center gap-1.5">
                  {product.demoUrl && (
                    <a
                      href={product.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 rounded-lg bg-[#F8F7F4] hover:bg-[#0B0B0C] text-[#0B0B0C] hover:text-white border border-[#E8E5DC] transition-all"
                      title="공식 웹사이트 바로가기"
                    >
                      <Globe className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {product.storeUrl && (
                    <a
                      href={product.storeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 rounded-lg bg-[#F8F7F4] hover:bg-[#0B0B0C] text-[#0B0B0C] hover:text-white border border-[#E8E5DC] transition-all"
                      title="Google Play 스토어"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {!product.storeUrl && !product.demoUrl && (
                    <span className="p-1.5 rounded-lg bg-[#F8F7F4] text-[#737067] border border-[#E8E5DC]" title="Reviewing">
                      <Clock className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Mode 2: Card Grid */}
      {viewMode === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onSelect={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>
      )}

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
