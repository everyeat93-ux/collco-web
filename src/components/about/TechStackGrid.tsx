"use client";

import React, { useState } from "react";
import { TECH_ITEMS } from "@/data/techStack";
import { Sparkles, Layers, Smartphone, Database, ShoppingBag } from "lucide-react";

export function TechStackGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    { name: "All", icon: Layers },
    { name: "Frontend & Core", icon: Sparkles },
    { name: "Mobile & Apps", icon: Smartphone },
    { name: "Backend & Data", icon: Database },
    { name: "Ops & E-commerce", icon: ShoppingBag },
  ];

  const filteredItems =
    selectedCategory === "All"
      ? TECH_ITEMS
      : TECH_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-7">
      {/* Category Filter Pills (Borderless, Chic Masculine Tone) */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = selectedCategory === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                isActive
                  ? "bg-[#0B0B0C] text-white shadow-chic-xs"
                  : "bg-[#ECEAE2] text-[#484B52] hover:text-[#0B0B0C] hover:bg-[#DFDCD2]"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Badges Grid (Borderless, High Contrast Hover) */}
      <div className="flex flex-wrap gap-2.5">
        {filteredItems.map((item, idx) => (
          <div
            key={idx}
            className={`group inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-default ${
              item.highlight
                ? "bg-[#ECEAE2] text-[#0B0B0C] hover:bg-[#0B0B0C] hover:text-white shadow-chic-xs"
                : "bg-[#ECEAE2] text-[#484B52] hover:bg-[#0B0B0C] hover:text-white"
            }`}
          >
            {item.highlight && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#0B0B0C] group-hover:bg-white transition-colors" />
            )}
            <span>{item.name}</span>
            <span className="text-[10px] text-[#847E72] group-hover:text-zinc-400 font-mono">[{item.category.split(" ")[0]}]</span>
          </div>
        ))}
      </div>
    </div>
  );
}
