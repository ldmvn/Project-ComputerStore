export default function Page() {
	const apiUrl = process.env.NEXT_PUBLIC_API_URL || "chưa cấu hình";

	return (
		<div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center gap-4 px-6 py-16">
			<h1 className="text-4xl font-semibold">Project ComputerStore</h1>
			<p className="text-lg">Máy tính và linh kiện cho cấu hình tiếp theo của bạn.</p>
			<p className="text-sm text-gray-600">
				API: <code className="rounded bg-gray-100 px-2 py-1">{apiUrl}</code>
			</p>
			{/* TODO: xóa khi làm trang chủ */}
			<div className="h-[150vh]" />
		</div>
	);
}