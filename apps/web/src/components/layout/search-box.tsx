import { Search } from "lucide-react";
import { Button, Input } from "@/components/ui";

export function SearchBox({ className }: { className?: string }) {
  return (
    <form role="search" action="/products" method="get" className={className}>
      <div className="relative">
        <Input name="q" type="search" placeholder="Tìm laptop, PC, linh kiện..." aria-label="Tìm kiếm sản phẩm" className="pr-12" />
        <Button type="submit" size="sm" aria-label="Tìm kiếm" className="absolute right-1 top-1 min-h-8 px-2">
          <Search aria-hidden="true" size={18} />
        </Button>
      </div>
    </form>
  );
}