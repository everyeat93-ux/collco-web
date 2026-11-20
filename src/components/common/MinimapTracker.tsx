"use client";

import React, { useState, useEffect } from "react";

const HOME_SECTION_IDS = ["overview", "projects", "studio-case"] as const;

export function MinimapTracker() {
  const [activeSection, setActiveSection] = useState<string>("overview");
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 180;
      let current = "overview";

      for (const id of HOME_SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && scrollY >= el.offsetTop) {
          current = id;
        }
      }

      setActiveSection(current);

      // 히어로 최상단과 문의 입력 구간/푸터에서는 하단 바를 숨겨 화면 행동을 가리지 않게 함
      const contactEl = document.getElementById("contact");
      const inHeroTop = window.scrollY < 260;
      const nearContactOrBottom =
        contactEl ? window.scrollY + window.innerHeight > contactEl.offsetTop + 120 : false;

      setVisible(!inHeroTop && !nearContactOrBottom);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { id: "projects", label: "프로젝트" },
    { id: "studio-case", label: "제작 사례" },
    { id: "craft", label: "Craft Lab" },
    { id: "about", label: "제작 철학" },
    { id: "store", label: "스토어" },
    { id: "contact", label: "문의" },
  ];

  return (
    <div
      aria-label="페이지 구간 이동"
      className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-40 hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/92 backdrop-blur-xl border border-[#E8E5DC] shadow-rauno transition-all duration-200 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* Micro Tick Indicators */}
      <div className="flex items-end gap-1 px-1 mr-1" aria-hidden="true">
        <span className="w-[1.5px] h-2 bg-[#D8D4C8] rounded-full" />
        <span className="w-[1.5px] h-3.5 bg-[#D8D4C8] rounded-full" />
        <span className="w-[1.5px] h-2.5 bg-[#0B0B0C] rounded-full" />
        <span className="w-[1.5px] h-4 bg-[#FFE600] rounded-full" />
      </div>

      {sections.map((sec) => (
        <a
          key={sec.id}
          href={`#${sec.id}`}
          className={`px-3 py-1 rounded-full text-[11px] font-mono transition-all duration-150 ${
            activeSection === sec.id
              ? "bg-[#0B0B0C] text-white font-bold shadow-xs"
              : "text-[#484B52] hover:text-[#0B0B0C] hover:bg-[#F8F7F4]"
          }`}
        >
          {sec.label}
        </a>
      ))}
    </div>
  );
}
