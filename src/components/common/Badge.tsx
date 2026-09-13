import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "success" | "info" | "warning" | "purple" | "emerald" | "amber" | "indigo" | "rose" | "neutral";
  size?: "sm" | "md";
  dot?: boolean;
  className?: string;
}

export function Badge({
  children,
  variant = "neutral",
  size = "sm",
  dot = false,
  className = "",
}: BadgeProps) {
  const variantStyles = {
    success: "bg-[#0B0B0C] text-white",
    emerald: "bg-[#0B0B0C] text-white",
    info: "bg-[#ECEAE2] text-[#0B0B0C]",
    warning: "bg-[#E5E2D8] text-[#22211E]",
    amber: "bg-[#E5E2D8] text-[#22211E]",
    purple: "bg-[#ECEAE2] text-[#0B0B0C]",
    indigo: "bg-[#ECEAE2] text-[#0B0B0C]",
    rose: "bg-[#ECEAE2] text-[#0B0B0C]",
    neutral: "bg-[#ECEAE2] text-[#0B0B0C]",
  };

  const dotColors = {
    success: "bg-emerald-400",
    emerald: "bg-emerald-400",
    info: "bg-[#0B0B0C]",
    warning: "bg-[#847E72]",
    amber: "bg-[#847E72]",
    purple: "bg-[#0B0B0C]",
    indigo: "bg-[#0B0B0C]",
    rose: "bg-[#0B0B0C]",
    neutral: "bg-[#0B0B0C]",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-1 font-bold tracking-tight",
    md: "text-xs px-3.5 py-1.5 font-bold tracking-tight",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full shadow-chic-xs transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotColors[variant]}`} />
      )}
      <span>{children}</span>
    </span>
  );
}
