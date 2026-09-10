"use client";

import React, { useState } from "react";
import { PRODUCTS } from "@/data/products";
import { Product } from "@/types";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";
import { SectionHeader } from "@/components/common/SectionHeader";

export function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <SectionHeader
        badgeText="Core Digital Products"
        badgeVariant="info"
        title={
          <span>
            일상의 틈새를 채우는{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              5가지 디지털 솔루션
            </span>
          </span>
        }
        subtitle="실제 배포 및 라이브 서비스 중인 모바일 앱, 웹 서비스, 데이터 분석 유틸리티입니다. 카드를 클릭해 [문제 정의 → 기술적 해결책 → 실제 성과]를 확인해 보세요."
      />

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {PRODUCTS.map((product, index) => (
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
