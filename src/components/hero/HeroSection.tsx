"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function HeroSection() {
  return (
    <section
      id="overview"
      className="relative pt-24 pb-6 sm:pt-32 sm:pb-10 md:pt-36 md:pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="relative">
        {/* Subtle Warm Yellow Brand Glow */}
        <div
          className="hidden sm:block absolute -top-8 right-6 w-52 h-52 rounded-full bg-[#FFE600]/45 blur-3xl pointer-events-none -z-0"
          aria-hidden="true"
        />

        <h1 className="relative z-10 text-[28px] sm:text-5xl lg:text-[54px] font-black text-[#0B0B0C] tracking-tight leading-[1.24] sm:leading-[1.16] break-keep-all max-w-4xl">
          <span>일상의 작은 불편을 발견하고,</span>
          <br />
          <span className="text-[#737067]">직접 만들어 해결합니다.</span>
        </h1>

        <p className="relative z-10 mt-4 sm:mt-5 text-sm sm:text-lg text-[#484B52] leading-[1.75] max-w-xl font-normal break-keep-all">
          콜코는 앱과 웹을 기획·개발·운영하는 1인 프로덕트 스튜디오입니다.
        </p>

        {/* Primary Action Buttons */}
        <div className="relative z-10 mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-full bg-[#0B0B0C] hover:bg-[#252528] text-white text-sm font-bold transition-colors"
          >
            <span>프로젝트 보기</span>
            <ArrowDown className="w-4 h-4 text-zinc-400" />
          </a>

          <Link
            href="/studio"
            onClick={() =>
              trackEvent("studio_page_navigate", {
                destinationType: "studio",
                location: "hero_cta",
              })
            }
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-full bg-white hover:bg-[#F8F7F4] text-[#0B0B0C] border border-[#0B0B0C]/20 hover:border-[#0B0B0C] text-sm font-bold transition-colors"
          >
            <span>웹 제작 안내</span>
            <ArrowUpRight className="w-4 h-4 text-[#484B52]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
