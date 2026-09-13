import React from "react";
import { Badge } from "./Badge";

interface SectionHeaderProps {
  badgeText: string;
  badgeVariant?: "success" | "info" | "purple" | "indigo" | "neutral" | "emerald" | "amber";
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  badgeText,
  badgeVariant = "neutral",
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col ${
        isCenter ? "items-center text-center" : "items-start text-left"
      } mb-14 sm:mb-18 ${className}`}
    >
      <Badge variant={badgeVariant} dot size="md" className="mb-4">
        {badgeText}
      </Badge>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight sm:tracking-tighter text-[#0B0B0C] leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#484B52] max-w-2xl leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
