"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, UserRound } from "lucide-react";
import { Button, buttonStyles } from "@/components/ui";

type User = { name: string } | null;

export function UserMenu({ user }: { user: User }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  if (!user) {
    return (
      <div className="flex items-center gap-1">
        <Link href="/login" aria-label="Đăng nhập" className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-md text-foreground hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:min-w-0 sm:px-3 sm:text-sm sm:font-medium">
          <UserRound aria-hidden="true" size={20} /><span className="hidden sm:inline">Đăng nhập</span>
        </Link>
        <Link href="/register" className={buttonStyles({ variant: "outline", size: "sm" }) + " hidden sm:inline-flex"}>Đăng ký</Link>
      </div>
    );
  }

  return (
    <div ref={menuRef} className="relative">
      <Button variant="ghost" size="sm" onClick={() => setOpen((current) => !current)} aria-expanded={open} aria-haspopup="menu" aria-label="Mở menu tài khoản">
        <UserRound aria-hidden="true" size={18} /><span className="max-w-28 truncate">{user.name}</span><ChevronDown aria-hidden="true" size={16} />
      </Button>
      {open && (
        <div role="menu" className="absolute right-0 top-full z-50 mt-2 w-52 rounded-lg border border-border bg-surface p-1.5 shadow-md">
          <Link role="menuitem" href="/account" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Tài khoản</Link>
          <Link role="menuitem" href="/account/orders" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Đơn hàng của tôi</Link>
          {/* TODO: Kết nối thao tác đăng xuất khi có xác thực thật. */}
          <button type="button" role="menuitem" onClick={() => setOpen(false)} className="block w-full rounded-md px-3 py-2 text-left text-sm text-danger hover:bg-danger-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Đăng xuất</button>
        </div>
      )}
    </div>
  );
}