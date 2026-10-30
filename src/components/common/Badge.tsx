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
    success: "bg-white border border-[#E8E5DC] text-[#0B0B0C]",
    emerald: "bg-white border border-[#E8E5DC] text-[#0B0B0C]",
    info: "bg-white border border-[#E8E5DC] text-[#0B0B0C]",
    warning: "bg-[#FAF7EE] border border-[#ECD9B8] text-[#8A5B10]",
    amber: "bg-[#FAF7EE] border border-[#ECD9B8] text-[#8A5B10]",
    purple: "bg-white border border-[#E8E5DC] text-[#0B0B0C]",
    indigo: "bg-white border border-[#E8E5DC] text-[#0B0B0C]",
    rose: "bg-white border border-[#E8E5DC] text-[#0B0B0C]",
    neutral: "bg-[#FAF9F5] border border-[#E8E5DC] text-[#484B52]",
  };

  const dotColors = {
    success: "bg-emerald-500",
    emerald: "bg-emerald-500",
    info: "bg-sky-500",
    warning: "bg-amber-500",
    amber: "bg-amber-500",
    purple: "bg-purple-500",
    indigo: "bg-indigo-500",
    rose: "bg-rose-500",
    neutral: "bg-[#737067]",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 font-mono font-medium tracking-tight",
    md: "text-xs px-3 py-1 font-mono font-medium tracking-tight",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full shadow-swiss-xs transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotColors[variant]}`} />
      )}
      <span>{children}</span>
    </span>
  );
}
