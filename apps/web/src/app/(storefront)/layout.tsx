import { SiteFooter, SiteHeader, TopBar } from "@/components/layout";
import { categories } from "@/lib/mock/categories";
import { mockUser } from "@/lib/mock/session";

export default function StorefrontLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-foreground focus:ring-2 focus:ring-primary">Bỏ qua đến nội dung chính</a>
      <TopBar />
      <SiteHeader categories={categories} cartCount={3} user={mockUser} />
      <main id="main" className="flex-1">{children}</main>
      {/* TODO: Gắn ChatWidget sau này. */}
      <SiteFooter />
    </div>
  );
}