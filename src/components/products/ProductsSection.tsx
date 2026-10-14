"use client";

import React, { useState } from "react";
import { PRODUCTS } from "@/data/products";
import { Product } from "@/types";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";
import { SectionHeader } from "@/components/common/SectionHeader";

export function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filter, setFilter] = useState<"all" | "mobile" | "web">("all");

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
    <section id="products" className="py-28 md:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background warm ambient light */}
      <div className="absolute top-1/2 left-0 w-[480px] h-[480px] bg-[#F5EAD4]/35 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <SectionHeader
        badgeText="01 / WORKS & SOLUTIONS"
        badgeVariant="neutral"
        title={
          <span>
            일상의 틈새를 파고드는{" "}
            <span className="text-[#0B0B0C]">
              7가지 독자적 솔루션 & 프로젝트
            </span>
          </span>
        }
        subtitle="실사용 가치와 진정성에 집중했습니다. Google Play 정식 출시 앱부터 모바일 캐주얼 게임, 35년 장인 브랜드 아틀리에 웹까지 직접 기획하고 빌드한 포트폴리오를 확인해 보세요."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        <button
          onClick={() => setFilter("all")}
          className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-chic-xs ${
            filter === "all"
              ? "bg-[#0B0B0C] text-white shadow-chic-sm"
              : "bg-white text-[#666A73] hover:text-[#0B0B0C] hover:bg-[#ECEAE2]"
          }`}
        >
          전체 보기 ({PRODUCTS.length})
        </button>
        <button
          onClick={() => setFilter("mobile")}
          className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-chic-xs ${
            filter === "mobile"
              ? "bg-[#0B0B0C] text-white shadow-chic-sm"
              : "bg-white text-[#666A73] hover:text-[#0B0B0C] hover:bg-[#ECEAE2]"
          }`}
        >
          모바일 앱 & 게임 ({mobileCount})
        </button>
        <button
          onClick={() => setFilter("web")}
          className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-chic-xs ${
            filter === "web"
              ? "bg-[#0B0B0C] text-white shadow-chic-sm"
              : "bg-white text-[#666A73] hover:text-[#0B0B0C] hover:bg-[#ECEAE2]"
          }`}
        >
          웹 서비스 & 브랜드 ({webCount})
        </button>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            onSelect={(p) => setSelectedProduct(p)}
          />
        ))}
      </div>

      {/* Interactive Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
