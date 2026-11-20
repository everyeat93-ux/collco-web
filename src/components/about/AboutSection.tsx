"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { BUILDING_PILLARS } from "@/data/techStack";
import { TechStackGrid } from "./TechStackGrid";

export function AboutSection() {
  const [techOpen, setTechOpen] = useState(false);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-8 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      {/* Section Header */}
      <div className="mb-10 sm:mb-12 max-w-2xl">
        <p className="text-xs font-mono text-[#737067] mb-2">DOCTRINE</p>
        <h1
          id="about-heading"
          className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0B0B0C] tracking-tight leading-tight"
        >
          콜코는 이렇게 만듭니다
        </h1>
        <p className="mt-2.5 text-sm sm:text-base text-[#484B52] leading-[1.8] break-keep-all">
          기획부터 디자인, 개발, 출시 이후 운영까지 한 사람이 직접 챙깁니다. 불필요한 단계를 줄이고 실제로 쓰이는 도구를 만듭니다.
        </p>
      </div>

      {/* 3 Editorial Columns with Clean Hairlines (No heavy floating boxes) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-10 sm:mb-12">
        {BUILDING_PILLARS.map((pillar) => (
          <div key={pillar.number} className="border-t border-[#0B0B0C]/15 pt-5 space-y-3">
            <div className="font-mono text-xs text-[#9E9A8F]">{pillar.number}</div>
            <h3 className="text-lg sm:text-xl font-black text-[#0B0B0C] tracking-tight">
              {pillar.title}
            </h3>
            <p className="text-sm text-[#484B52] leading-[1.8] break-keep-all">
              {pillar.description}
            </p>
            {pillar.example && (
              <p className="pt-2 text-xs text-[#737067] leading-relaxed break-keep-all">
                — {pillar.example}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Collapsible Tech Stack Disclosure (Keyboard Accessible) */}
      <div className="border-t border-b border-[#E8E5DC]">
        <button
          type="button"
          onClick={() => setTechOpen((prev) => !prev)}
          aria-expanded={techOpen}
          aria-controls="collco-tech-stack-panel"
          className="w-full py-4 sm:py-5 flex items-center justify-between gap-4 text-left hover:opacity-75 transition-opacity cursor-pointer"
        >
          <span className="text-sm sm:text-base font-bold text-[#0B0B0C]">
            사용하는 기술 스택 {techOpen ? "접기" : "펼쳐보기"}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-[#484B52] transition-transform duration-200 ${techOpen ? "rotate-180" : ""}`}
          />
        </button>

        {techOpen && (
          <div id="collco-tech-stack-panel" className="pb-6 pt-2">
            <TechStackGrid />
          </div>
        )}
      </div>
    </section>
  );
}
