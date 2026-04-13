import { type HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "secondary" | "ghost" | "link" | "outline" | "danger";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  isRounded?: boolean;
  isShadow?: boolean;
  isTransparent?: boolean;
}

export function Card({
  className,
  variant = "primary",
  size = "md",
  padding = "md",
  children,
  isLoading,
  isDisabled,
  isFullWidth,
  isRounded,
  isShadow,
  isTransparent,
  ...props
}: CardProps) {
  const paddings = {
    none: "p-0",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={cn(
        "rounded-xl border border-gray-200 bg-white shadow-sm",
        paddings[padding],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
