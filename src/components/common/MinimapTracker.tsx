"use client";

import React, { useState, useEffect } from "react";

export function MinimapTracker() {
  const [activeSection, setActiveSection] = useState<string>("overview");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "projects", "craft", "store", "about", "contact"];
      const scrollY = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "projects", label: "Projects" },
    { id: "craft", label: "Craft Lab" },
    { id: "store", label: "Store" },
    { id: "about", label: "Doctrine" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-xl border border-[#E8E5DC] shadow-rauno">
      {/* Rauno Micro Tick Indicators */}
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
              ? "bg-[#0B0B0C] text-white font-bold shadow-xs scale-105"
              : "text-[#737067] hover:text-[#0B0B0C] hover:bg-[#F8F7F4]"
          }`}
        >
          {sec.label}
        </a>
      ))}
    </div>
  );
}
