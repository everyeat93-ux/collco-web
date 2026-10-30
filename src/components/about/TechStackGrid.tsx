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
    <div className="space-y-6">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-1.5">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = selectedCategory === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                isActive
                  ? "bg-[#0B0B0C] text-white shadow-swiss-xs"
                  : "bg-[#FAF9F5] text-[#737067] hover:text-[#0B0B0C] border border-[#E8E5DC] hover:border-[#0B0B0C]"
              }`}
            >
              <Icon className="w-3 h-3" />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Badges Grid */}
      <div className="flex flex-wrap gap-2">
        {filteredItems.map((item, idx) => (
          <div
            key={idx}
            className={`group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-default border ${
              item.highlight
                ? "bg-white border-[#0B0B0C] text-[#0B0B0C] shadow-swiss-xs"
                : "bg-[#FAF9F5] border-[#E8E5DC] text-[#484B52] hover:border-[#0B0B0C] hover:bg-white"
            }`}
          >
            {item.highlight && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#0B0B0C]" />
            )}
            <span className="font-bold">{item.name}</span>
            <span className="text-[10px] text-[#737067] font-mono">
              [{item.category.split(" ")[0]}]
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
