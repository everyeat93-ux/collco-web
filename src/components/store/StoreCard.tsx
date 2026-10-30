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
      className="group flex flex-col justify-between bg-white border border-[#E8E5DC] hover:border-[#0B0B0C] rounded-[1.75rem] overflow-hidden shadow-swiss-xs hover:shadow-swiss-lg transition-all duration-300 hover:-translate-y-1"
    >
      {/* Visual Image Header */}
      <div className="relative h-60 w-full overflow-hidden bg-[#FAF9F5] border-b border-[#E8E5DC]">
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
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
          <Badge variant={item.badgeVariant} dot size="sm" className="bg-white/95 backdrop-blur-md shadow-swiss-xs text-[#0B0B0C]">
            {item.badge}
          </Badge>
          <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-white/95 text-[#0B0B0C] shadow-swiss-xs backdrop-blur-md uppercase tracking-wider">
            {item.category}
          </span>
        </div>

        {/* Price Tag pill */}
        <div className="absolute bottom-3.5 right-3.5">
          <span className="px-3.5 py-1 rounded-full bg-[#0B0B0C] text-white font-black text-xs tracking-tight shadow-swiss-xs font-mono">
            {item.price}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="text-[10px] font-mono font-bold text-[#737067] uppercase tracking-wider mb-1">
            {item.tag}
          </div>
          <h3 className="text-base font-black text-[#0B0B0C] leading-snug group-hover:text-[#484B52] transition-colors line-clamp-2">
            {item.title}
          </h3>
          <p className="text-xs text-[#484B52] mt-2 line-clamp-2 leading-relaxed font-normal">
            {item.description}
          </p>
        </div>

        {/* Condition & Authenticity Guarantee */}
        <div className="bg-[#FAF9F5] border border-[#E8E5DC] p-3 rounded-xl space-y-1 text-xs text-[#484B52] font-mono">
          <div className="flex items-center gap-1.5 truncate">
            <span className="text-[#737067] font-semibold text-[11px]">상태 :</span>
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
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#0B0B0C] hover:bg-[#252528] text-white text-xs font-mono font-bold shadow-swiss-xs transition-all active:scale-95"
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
