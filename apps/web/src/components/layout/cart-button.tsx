import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

export function CartButton({ count }: { count: number }) {
  const label = `Giỏ hàng, ${count} sản phẩm`;

  return (
    <Link href="/cart" aria-label={label} className="relative inline-flex min-h-10 min-w-10 items-center justify-center rounded-md text-foreground hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
      <ShoppingCart aria-hidden="true" size={21} />
      {count > 0 && <span className={cn("absolute -right-1 -top-1 min-w-5 rounded-full bg-danger px-1 text-center text-xs font-semibold leading-5 text-primary-foreground", count > 99 && "px-1.5")}>{count > 99 ? "99+" : count}</span>}
    </Link>
  );
}