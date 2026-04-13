import { type HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  status?: "success" | "error" | "warning" | "info" | "default";
  size?: "sm" | "md";
}

export function Badge({
  className,
  status = "default",
  size = "sm",
  children,
  ...props
}: BadgeProps) {
  const statuses = {
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
    warning: "bg-yellow-100 text-yellow-800",
    info: "bg-blue-100 text-blue-800",
    default: "bg-gray-100 text-gray-800",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium",
        statuses[status],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
