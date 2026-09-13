"use client";

import React from "react";
import { ShoppingBag, ArrowUpRight, ShieldCheck } from "lucide-react";
import { StoreItem } from "@/types";
import { Badge } from "@/components/common/Badge";

interface StoreCardProps {
  item: StoreItem;
  index?: number;
}

export function StoreCard({ item }: StoreCardProps) {
  return (
    <div
      className="group flex flex-col justify-between bg-white rounded-[2.2rem] overflow-hidden shadow-chic-sm hover:shadow-chic-lg transition-all duration-300 hover:-translate-y-2"
    >
      {/* Visual Image Header */}
      <div className="relative h-64 w-full overflow-hidden bg-[#ECEAE2]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <Badge variant={item.badgeVariant} dot size="sm" className="bg-white/95 backdrop-blur-md shadow-chic-xs font-bold text-[#0B0B0C]">
            {item.badge}
          </Badge>
          <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-white/95 text-[#0B0B0C] shadow-chic-xs backdrop-blur-md uppercase tracking-wider">
            {item.category}
          </span>
        </div>

        {/* Price Tag pill */}
        <div className="absolute bottom-4 right-4">
          <span className="px-4 py-1.5 rounded-full bg-[#0B0B0C] text-white font-black text-sm tracking-tight shadow-chic-sm font-mono">
            {item.price}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-8 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="text-[11px] font-mono font-bold text-[#847E72] uppercase tracking-wider mb-1.5">
            {item.tag}
          </div>
          <h3 className="text-base sm:text-lg font-bold text-[#0B0B0C] leading-snug group-hover:text-[#666A73] transition-colors line-clamp-2">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#484B52] mt-2 line-clamp-2 leading-relaxed font-normal">
            {item.description}
          </p>
        </div>

        {/* Condition & Authenticity Guarantee (Borderless Tone Block) */}
        <div className="bg-[#ECEAE2] p-3.5 rounded-2xl space-y-1.5 text-xs text-[#484B52]">
          <div className="flex items-center gap-1.5 truncate">
            <span className="text-[#847E72] font-semibold text-[11px]">상태 :</span>
            <span className="text-[#0B0B0C] font-bold">{item.condition}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#0B0B0C] truncate font-bold">
            <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-[#0B0B0C]" />
            <span className="text-[11px]">{item.authenticity}</span>
          </div>
        </div>

        {/* Buy Button */}
        <div className="pt-2">
          <a
            href={item.smartStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#0B0B0C] hover:bg-[#1E1E22] text-white text-xs font-bold shadow-chic-xs transition-all duration-200 active:scale-98"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-zinc-300" />
            <span>스마트스토어에서 보기</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>
      </div>
    </div>
  );
}
