import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeManifestoSection() {
  return (
    <section
      aria-label="콜코 매니페스토"
      className="py-8 sm:py-12 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="bg-[#FFE600] rounded-2xl px-6 py-7 sm:px-10 sm:py-9 text-[#0B0B0C] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-2xl sm:text-3xl font-black tracking-tight">Make it.</p>
          <p className="text-xs sm:text-sm text-black/75 mt-1 break-keep-all">
            군더더기를 덜어내고, 실제로 쓰이는 도구를 직접 만듭니다.
          </p>
        </div>

        <Link
          href="/about"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0B0B0C] hover:underline underline-offset-4 shrink-0 py-1.5"
        >
          <span>콜코 소개와 제작 철학 보기</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
