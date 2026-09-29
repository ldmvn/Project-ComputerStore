import Link from "next/link";
import { Button, Input } from "@/components/ui";
import { categories } from "@/lib/mock/categories";
import { Logo } from "./logo";

const supportLinks = ["Chính sách bảo hành", "Đổi trả", "Vận chuyển", "Thanh toán"];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4"><Logo /><p className="max-w-xs text-sm text-muted-foreground">Cửa hàng máy tính và linh kiện cho cấu hình tiếp theo của bạn.</p><div className="space-y-1 text-sm"><p>Hotline: 1900 0000</p><p>support@computerstore.example</p><p>Địa chỉ: (cập nhật sau)</p></div></div>
        <div><h2 className="mb-4 font-semibold">Hỗ trợ khách hàng</h2><ul className="space-y-2 text-sm text-muted-foreground">{supportLinks.map((link) => <li key={link}><Link href="#" className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">{link}</Link></li>)}</ul>{/* TODO: Thay href="#" bằng các trang hỗ trợ khi được xây dựng. */}</div>
        <div><h2 className="mb-4 font-semibold">Danh mục</h2><ul className="space-y-2 text-sm text-muted-foreground">{categories.map((category) => <li key={category.id}><Link href={`/products?category=${category.slug}`} className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">{category.name}</Link></li>)}</ul></div>
        <div><h2 className="mb-4 font-semibold">Nhận tin khuyến mãi</h2><p className="mb-4 text-sm text-muted-foreground">Đăng ký để nhận thông tin sản phẩm và ưu đãi mới.</p><form action="#" method="get" className="space-y-2"><Input type="email" name="email" placeholder="Email của bạn" aria-label="Email nhận khuyến mãi" /><Button type="submit" fullWidth>Đăng ký</Button></form>{/* TODO: Kết nối form với dịch vụ nhận tin. */}</div>
      </div>
      <div className="border-t border-border"><p className="mx-auto max-w-7xl px-4 py-4 text-sm text-muted-foreground sm:px-6 lg:px-8">© {new Date().getFullYear()} ComputerStore. Đồ án môn học.</p></div>
    </footer>
  );
}