"use client";

import React, { useState } from "react";
import { TECH_ITEMS } from "@/data/techStack";
import { TechItem } from "@/types";
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
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = selectedCategory === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                isActive
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20"
                  : "bg-[#161b22] text-[#8b949e] hover:text-white hover:bg-[#21262d] border border-[#30363d]"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Badges Grid */}
      <div className="flex flex-wrap gap-2.5">
        {filteredItems.map((item, idx) => (
          <div
            key={idx}
            className={`group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium border transition-all duration-200 cursor-default ${
              item.highlight
                ? "bg-[#161b22] border-blue-500/30 text-zinc-100 hover:border-blue-400/60 shadow-sm"
                : "bg-[#0d1117] border-[#30363d] text-[#8b949e] hover:text-zinc-200 hover:border-[#484f58]"
            }`}
          >
            {item.highlight && (
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:scale-125 transition-transform" />
            )}
            <span>{item.name}</span>
            <span className="text-[10px] text-zinc-500 font-mono">[{item.category.split(" ")[0]}]</span>
          </div>
        ))}
      </div>
    </div>
  );
}
