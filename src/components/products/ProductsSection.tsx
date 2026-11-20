"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, getProductCounts } from "@/data/products";
import { CATALOG_UPDATED_LABEL } from "@/data/siteConfig";
import { Product } from "@/types";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";
import { Badge } from "@/components/common/Badge";
import { LayoutGrid, List, ArrowRight } from "lucide-react";

export function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filter, setFilter] = useState<"all" | "mobile" | "web">("all");
  const [viewMode, setViewMode] = useState<"index" | "grid">("index");

  const counts = getProductCounts();

  const filteredProducts = PRODUCTS.filter((product) => {
    if (filter === "mobile") return product.category.includes("Mobile");
    if (filter === "web")
      return product.category.includes("Web") || product.category.includes("Brand");
    return true;
  });

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-8 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative"
    >
      {/* Section Header */}
      <div className="mb-8 sm:mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
        <div>
          <h1
            id="projects-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0B0B0C] tracking-tight leading-tight"
          >
            콜코가 만든 앱과 웹
          </h1>
          <p className="mt-2.5 text-sm sm:text-base text-[#484B52] max-w-2xl leading-[1.75] break-keep-all">
            직접 기획하고 운영하는 {counts.total}개의 프로젝트입니다. 항목을 눌러 상세 설명과 이용 링크를 확인해 보세요.
          </p>
        </div>

        <p className="text-xs font-mono text-[#484B52] bg-[#FAF9F5] border border-[#E8E5DC] px-3.5 py-2 rounded-full shrink-0 w-fit">
          {CATALOG_UPDATED_LABEL} · 전체 {counts.total} · 공개 {counts.live} · 테스트 {counts.testing}
        </p>
      </div>

      {/* Toolbar: Category Filter & View Mode Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 sm:mb-6">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`px-3.5 py-2 min-h-[40px] rounded-full text-xs font-medium whitespace-nowrap transition-colors shrink-0 cursor-pointer ${
              filter === "all"
                ? "bg-[#0B0B0C] text-white font-bold"
                : "bg-[#F8F7F4] text-[#484B52] hover:text-[#0B0B0C]"
            }`}
          >
            전체 ({counts.total})
          </button>
          <button
            type="button"
            onClick={() => setFilter("mobile")}
            className={`px-3.5 py-2 min-h-[40px] rounded-full text-xs font-medium whitespace-nowrap transition-colors shrink-0 cursor-pointer ${
              filter === "mobile"
                ? "bg-[#0B0B0C] text-white font-bold"
                : "bg-[#F8F7F4] text-[#484B52] hover:text-[#0B0B0C]"
            }`}
          >
            모바일 앱 ({counts.mobile})
          </button>
          <button
            type="button"
            onClick={() => setFilter("web")}
            className={`px-3.5 py-2 min-h-[40px] rounded-full text-xs font-medium whitespace-nowrap transition-colors shrink-0 cursor-pointer ${
              filter === "web"
                ? "bg-[#0B0B0C] text-white font-bold"
                : "bg-[#F8F7F4] text-[#484B52] hover:text-[#0B0B0C]"
            }`}
          >
            웹 서비스 ({counts.web})
          </button>
        </div>

        <div
          role="group"
          aria-label="보기 방식 선택"
          className="inline-flex items-center gap-1 p-1 rounded-full bg-[#F8F7F4] border border-[#E8E5DC] self-start sm:self-auto shrink-0"
        >
          <button
            type="button"
            onClick={() => setViewMode("index")}
            aria-pressed={viewMode === "index"}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-colors cursor-pointer ${
              viewMode === "index"
                ? "bg-white text-[#0B0B0C] font-bold shadow-xs"
                : "text-[#737067] hover:text-[#0B0B0C]"
            }`}
          >
            <List className="w-3.5 h-3.5" />
            <span>목록</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode("grid")}
            aria-pressed={viewMode === "grid"}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-colors cursor-pointer ${
              viewMode === "grid"
                ? "bg-white text-[#0B0B0C] font-bold shadow-xs"
                : "text-[#737067] hover:text-[#0B0B0C]"
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>카드</span>
          </button>
        </div>
      </div>

      {/* Mode 1: Scannable Editorial Index List (Name + 1-line utility + Status + Primary Entry) */}
      {viewMode === "index" && (
        <div className="border-y border-[#E8E5DC] divide-y divide-[#E8E5DC]">
          {filteredProducts.map((product, index) => {
            const indexNumber = String(index + 1).padStart(2, "0");
            const oneLiner = product.shortDescription || product.tagline;
            const hasDetailPage = Boolean(product.detailSlug);
            const isTesting = product.releaseState === "testing";

            return (
              <div
                key={product.id}
                className="group py-4 sm:py-5 px-1 sm:px-3 hover:bg-[#FAF9F5]/80 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  {/* Left: Number + Icon + Name & 1-line Utility */}
                  <div className="flex items-start sm:items-center gap-3.5 min-w-0 flex-1">
                    <span className="font-mono text-xs text-[#9E9A8F] shrink-0 mt-1 sm:mt-0 w-5">
                      {indexNumber}
                    </span>

                    {product.appIcon && (
                      <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-[#E8E5DC] shrink-0 bg-white">
                        <Image
                          src={product.appIcon}
                          alt={`${product.name} 아이콘`}
                          fill
                          sizes="36px"
                          className="object-cover"
                        />
                      </div>
                    )}

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                        {hasDetailPage ? (
                          <Link
                            href={`/projects/${product.detailSlug}`}
                            className="text-base sm:text-[17px] font-bold text-[#0B0B0C] hover:underline underline-offset-4"
                          >
                            {product.name}
                          </Link>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setSelectedProduct(product)}
                            className="text-left text-base sm:text-[17px] font-bold text-[#0B0B0C] hover:underline underline-offset-4 cursor-pointer"
                          >
                            {product.name}
                          </button>
                        )}
                        {product.subName && (
                          <span className="text-xs text-[#737067] font-normal">
                            {product.subName}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-[#484B52] mt-0.5 leading-snug break-keep-all">
                        {oneLiner}
                      </p>
                    </div>
                  </div>

                  {/* Subtle Dashed Connector on Wide Desktop */}
                  <div className="hidden lg:block rauno-line-connector max-w-[100px]" aria-hidden="true" />

                  {/* Right: Status (when testing or clear badge) + Single Primary Entry */}
                  <div className="flex flex-wrap items-center gap-2.5 shrink-0 pl-8 sm:pl-0">
                    <Badge variant={product.statusBadgeVariant} dot size="sm">
                      {product.status}
                    </Badge>

                    {hasDetailPage ? (
                      <Link
                        href={`/projects/${product.detailSlug}`}
                        className="inline-flex items-center gap-1 px-3.5 py-2 min-h-[38px] rounded-full bg-[#0B0B0C] hover:bg-[#252528] text-white text-xs font-bold transition-colors"
                      >
                        <span>상세 보기</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setSelectedProduct(product)}
                        className="inline-flex items-center gap-1 px-3.5 py-2 min-h-[38px] rounded-full bg-[#F8F7F4] hover:bg-[#0B0B0C] text-[#0B0B0C] hover:text-white border border-[#E8E5DC] hover:border-[#0B0B0C] text-xs font-bold transition-colors cursor-pointer"
                      >
                        <span>{isTesting ? product.actionLabel || "개발 현황 보기" : "상세 보기"}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
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

      <ProductModal
        key={selectedProduct?.id ?? "none"}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
