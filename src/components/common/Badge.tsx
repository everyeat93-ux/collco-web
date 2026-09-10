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
    success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    info: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    warning: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    indigo: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
    rose: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    neutral: "bg-white/[0.04] text-zinc-300 border-white/10",
  };

  const dotColors = {
    success: "bg-emerald-400",
    emerald: "bg-emerald-400",
    info: "bg-blue-400",
    warning: "bg-amber-400",
    amber: "bg-amber-400",
    purple: "bg-purple-400",
    indigo: "bg-indigo-400",
    rose: "bg-rose-400",
    neutral: "bg-zinc-400",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 font-medium tracking-wide",
    md: "text-xs px-3 py-1 font-medium",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColors[variant]}`}
          />
          <span
            className={`relative inline-flex rounded-full h-1.5 w-1.5 ${dotColors[variant]}`}
          />
        </span>
      )}
      {children}
    </span>
  );
}
