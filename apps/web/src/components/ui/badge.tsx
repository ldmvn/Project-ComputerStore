import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const badgeVariants = {
  neutral: "bg-slate-100 text-slate-700",
  primary: "bg-primary-soft text-primary",
  success: "bg-success-soft text-success",
  warning: "bg-warning-soft text-warning",
  danger: "bg-danger-soft text-danger",
  info: "bg-info-soft text-info",
} as const;

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof badgeVariants;
}

export function Badge({ className, variant = "neutral", ...props }: BadgeProps) {
  return <span className={cn("inline-flex min-h-6 items-center rounded-full px-2.5 py-1 text-xs font-medium", badgeVariants[variant], className)} {...props} />;
}