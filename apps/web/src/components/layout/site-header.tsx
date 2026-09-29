import { CartButton } from "./cart-button";
import { CategoryNav } from "./category-nav";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { SearchBox } from "./search-box";
import { UserMenu } from "./user-menu";
import type { Category } from "@/features/catalog";

type User = { name: string } | null;

export function SiteHeader({ categories, cartCount, user }: { categories: Category[]; cartCount: number; user: User }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 lg:flex-nowrap lg:gap-6">
          <MobileMenu categories={categories} loggedIn={Boolean(user)} />
          <Logo />
          <SearchBox className="order-last basis-full lg:order-none lg:flex-1 lg:basis-auto" />
          <div className="ml-auto flex shrink-0 items-center gap-1">
            <CartButton count={cartCount} />
            <UserMenu user={user} />
          </div>
        </div>
      </div>
      <CategoryNav categories={categories} />
    </header>
  );
}