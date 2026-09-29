import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const spinnerSizes = {
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
} as const;

export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {
  size?: keyof typeof spinnerSizes;
}

export function Spinner({ className, size = "md", ...props }: SpinnerProps) {
  return <Loader2 aria-hidden="true" className={cn("animate-spin", spinnerSizes[size], className)} {...props} />;
}