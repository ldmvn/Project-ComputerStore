import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui";
import type { Category } from "@/features/catalog";

function categoryHref(slug: string) {
  return `/products?category=${slug}`;
}

export function CategoryNav({ categories }: { categories: Category[] }) {
  return (
    <nav aria-label="Danh mục sản phẩm" className="hidden border-t border-border lg:block">
      <div className="mx-auto flex max-w-7xl items-center gap-1 px-4 sm:px-6 lg:px-8">
        {categories.map((category) => (
          <div key={category.id} className="group relative">
            <Link href={categoryHref(category.slug)} className="inline-flex min-h-11 items-center gap-1 rounded-md px-3 text-sm font-medium text-foreground hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-[-2px]">
              {category.name}{category.children?.length ? <ChevronDown aria-hidden="true" size={15} /> : null}
            </Link>
            {category.children?.length ? (
              <div className="invisible absolute left-0 top-full z-50 w-56 translate-y-1 rounded-lg border border-border bg-surface p-2 opacity-0 shadow-md transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                {category.children.map((child) => <Link key={child.id} href={categoryHref(child.slug)} className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-primary-soft hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">{child.name}</Link>)}
              </div>
            ) : null}
          </div>
        ))}
        <Link href="/build-pc" className="ml-auto inline-flex min-h-11 items-center gap-2 rounded-md px-3 text-sm font-medium text-primary hover:bg-primary-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
          Build PC <Badge variant="primary">Mới</Badge>
        </Link>
      </div>
    </nav>
  );
}