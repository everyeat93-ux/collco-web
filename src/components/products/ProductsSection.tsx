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
              5가지 독자적 솔루션
            </span>
          </span>
        }
        subtitle="불필요한 가식을 덜고 실사용 가치에 집중했습니다. 모바일 앱부터 웹 서비스, 데이터 분석 도구까지 직접 기획하고 배포한 포트폴리오를 확인해 보세요."
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
