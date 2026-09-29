import type { Category } from "@/features/catalog";

// TODO: Sau này thay bằng dữ liệu từ API; kiểu sẽ chuyển sang packages/contracts.
export const categories: Category[] = [
  {
    id: "laptop",
    slug: "laptop",
    name: "Laptop",
    children: [
      { id: "laptop-van-phong", slug: "laptop-van-phong", name: "Laptop văn phòng" },
      { id: "laptop-gaming", slug: "laptop-gaming", name: "Laptop gaming" },
      { id: "laptop-do-hoa", slug: "laptop-do-hoa", name: "Laptop đồ họa" },
    ],
  },
  {
    id: "pc",
    slug: "pc",
    name: "PC",
    children: [
      { id: "pc-van-phong", slug: "pc-van-phong", name: "PC văn phòng" },
      { id: "pc-gaming", slug: "pc-gaming", name: "PC gaming" },
      { id: "pc-workstation", slug: "pc-workstation", name: "PC workstation" },
    ],
  },
  {
    id: "linh-kien",
    slug: "linh-kien",
    name: "Linh kiện",
    children: [
      { id: "cpu", slug: "cpu", name: "CPU" },
      { id: "mainboard", slug: "mainboard", name: "Mainboard" },
      { id: "ram", slug: "ram", name: "RAM" },
      { id: "card-do-hoa", slug: "card-do-hoa", name: "Card đồ họa" },
      { id: "ssd", slug: "ssd", name: "SSD" },
      { id: "nguon", slug: "nguon", name: "Nguồn" },
      { id: "vo-case", slug: "vo-case", name: "Vỏ case" },
    ],
  },
  {
    id: "phu-kien",
    slug: "phu-kien",
    name: "Phụ kiện",
    children: [
      { id: "chuot", slug: "chuot", name: "Chuột" },
      { id: "ban-phim", slug: "ban-phim", name: "Bàn phím" },
      { id: "tai-nghe", slug: "tai-nghe", name: "Tai nghe" },
      { id: "man-hinh", slug: "man-hinh", name: "Màn hình" },
    ],
  },
];