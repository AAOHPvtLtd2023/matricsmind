import React from "react";
import { cn } from "../../lib/utils"; // Optional: if you use a utility like clsx/twMerge

export function Badge({ children, className = "", variant = "default" }) {
  const baseStyle =
    "inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium";

  const variants = {
    default: "bg-gray-200 text-gray-800",
    outline: "bg-white border border-gray-300 text-gray-700",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-800",
  };

  return (
    <span className={cn(baseStyle, variants[variant] || "", className)}>
      {children}
    </span>
  );
}
