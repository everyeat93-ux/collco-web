"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/siteConfig";

export function StoreTeaserSection() {
  return (
    <section
      id="store"
      aria-labelledby="store-teaser-heading"
      className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[#E8E5DC]"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Single Real Collection Photo */}
        <div className="md:col-span-5">
          <Link
            href="/store"
            className="block relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-[#E8E5DC] bg-[#FAF9F5] group"
          >
            <Image
              src="/collection/figure-cabinet.jpg"
              alt="콜코 스튜디오 피규어 진열장 실제 사진"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
            />
          </Link>
        </div>

        {/* Short Collector Intro + Direct Links */}
        <div className="md:col-span-7 space-y-4">
          <p className="text-xs font-mono text-[#737067]">05 · 컬렉션 스토어</p>

          <h2
            id="store-teaser-heading"
            className="text-2xl sm:text-3xl font-black text-[#0B0B0C] tracking-tight leading-snug"
          >
            좋아해서 모으고, 좋아해서 나눕니다.
          </h2>

          <p className="text-sm sm:text-base text-[#484B52] leading-[1.8] break-keep-all">
            일이 끝나면 피규어 진열장과 카드 바인더 앞에서 시간 가는 줄 모르는 수집가이기도 해요.
            좋아하는 카드와 피규어를 하나씩 골라 같은 취미를 가진 분들과 나누는 작은 선반을 함께 운영합니다.
          </p>

          <div className="pt-1 flex flex-wrap items-center gap-4">
            <Link
              href="/store"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B0B0C] hover:text-[#484B52] underline underline-offset-4 py-2"
            >
              <span>컬렉션 선반 더 보기</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={SOCIAL_LINKS.smartStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 min-h-[44px] rounded-full bg-[#0B0B0C] hover:bg-[#252528] text-white text-xs sm:text-sm font-bold transition-colors"
            >
              <span>스마트스토어에서 보기</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
