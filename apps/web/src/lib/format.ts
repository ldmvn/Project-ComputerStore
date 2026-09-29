const vietnameseDateFormatter = new Intl.DateTimeFormat("vi-VN");

export function formatVND(amount: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
}

export function formatDate(date: Date | string): string {
  return vietnameseDateFormatter.format(typeof date === "string" ? new Date(date) : date);
}