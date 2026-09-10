"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";
import { StoreItem } from "@/types";
import { Badge } from "@/components/common/Badge";

interface StoreCardProps {
  item: StoreItem;
  index: number;
}

export function StoreCard({ item, index }: StoreCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col justify-between bg-[#161b22] border border-[#30363d] hover:border-indigo-500/50 rounded-2xl overflow-hidden shadow-lg shadow-black/40 hover:shadow-indigo-500/10 transition-all duration-300"
    >
      {/* Visual Image Header */}
      <div className="relative h-52 w-full overflow-hidden bg-[#0d1117]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
          loading="lazy"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] via-[#161b22]/30 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <Badge variant={item.badgeVariant} dot size="sm" className="backdrop-blur-md">
            {item.badge}
          </Badge>
          <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-black/60 text-zinc-300 border border-white/10 backdrop-blur-md">
            {item.category}
          </span>
        </div>

        {/* Price Tag pill */}
        <div className="absolute bottom-3 right-3">
          <span className="px-3 py-1 rounded-lg bg-[#0d1117]/90 border border-[#30363d] text-white font-bold text-sm tracking-tight shadow-md">
            {item.price}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider mb-1">
            {item.tag}
          </div>
          <h3 className="text-base font-bold text-white leading-snug group-hover:text-indigo-300 transition-colors line-clamp-2">
            {item.title}
          </h3>
          <p className="text-xs text-[#8b949e] mt-2 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Condition & Authenticity Guarantee */}
        <div className="space-y-1.5 pt-2 border-t border-[#30363d]/50 text-xs text-zinc-400">
          <div className="flex items-center gap-1.5 truncate">
            <span className="text-zinc-500 font-medium">상태:</span>
            <span className="text-zinc-300">{item.condition}</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400/90 truncate">
            <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
            <span className="text-[11px]">{item.authenticity}</span>
          </div>
        </div>

        {/* Buy Button */}
        <div className="pt-2">
          <a
            href={item.smartStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#21262d] hover:bg-gradient-to-r hover:from-indigo-600 hover:to-blue-600 border border-[#30363d] hover:border-transparent text-zinc-200 hover:text-white text-xs font-semibold shadow-sm transition-all duration-200 group-hover:shadow-indigo-500/20"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>스마트스토어에서 보기</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
