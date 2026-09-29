"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui";
import type { Category } from "@/features/catalog";

function categoryHref(slug: string) {
  return `/products?category=${slug}`;
}

export function MobileMenu({ categories, loggedIn }: { categories: Category[]; loggedIn: boolean }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) closeRef.current?.focus();
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  function closeMenu() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <>
      <Button ref={triggerRef} variant="ghost" size="sm" className="lg:hidden" aria-label="Mở menu điều hướng" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(true)}>
        <Menu aria-hidden="true" size={22} />
      </Button>
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button type="button" aria-label="Đóng menu" className="absolute inset-0 h-full w-full cursor-default bg-foreground/40" onClick={closeMenu} />
          <aside id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Menu điều hướng" className="relative h-full w-[min(21rem,85vw)] overflow-y-auto bg-surface p-5 shadow-md">
            <div className="mb-6 flex items-center justify-between"><span className="text-lg font-semibold">Menu</span><Button ref={closeRef} variant="ghost" size="sm" aria-label="Đóng menu" onClick={closeMenu}><X aria-hidden="true" size={22} /></Button></div>
            <nav className="space-y-2" aria-label="Danh mục trên điện thoại">
              {categories.map((category) => (
                <details key={category.id} className="group rounded-md border-b border-border pb-2">
                  <summary className="cursor-pointer list-none rounded-md px-2 py-3 font-medium hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">{category.name}</summary>
                  <div className="space-y-1 pl-3 pt-1">{category.children?.map((child) => <Link key={child.id} href={categoryHref(child.slug)} onClick={closeMenu} className="block rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-primary-soft hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">{child.name}</Link>)}</div>
                </details>
              ))}
              <Link href="/build-pc" onClick={closeMenu} className="block rounded-md px-2 py-3 font-medium text-primary hover:bg-primary-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Build PC</Link>
              {loggedIn ? <Link href="/account/orders" onClick={closeMenu} className="block rounded-md px-2 py-3 font-medium hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Đơn hàng của tôi</Link> : <><Link href="/login" onClick={closeMenu} className="block rounded-md px-2 py-3 font-medium hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Đăng nhập</Link><Link href="/register" onClick={closeMenu} className="block rounded-md px-2 py-3 font-medium hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Đăng ký</Link></>}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}