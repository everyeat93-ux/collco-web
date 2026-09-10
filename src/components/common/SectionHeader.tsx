import React from "react";
import { Badge } from "./Badge";

interface SectionHeaderProps {
  badgeText: string;
  badgeVariant?: "success" | "info" | "purple" | "indigo" | "neutral" | "emerald";
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  badgeText,
  badgeVariant = "info",
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
      } mb-12 sm:mb-16 ${className}`}
    >
      <Badge variant={badgeVariant} dot size="md" className="mb-4 shadow-sm">
        {badgeText}
      </Badge>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#8b949e] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
