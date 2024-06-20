import Link from "next/link";

export default function Footer(): React.ReactElement {
	return (
		<div className="p-4 flex justify-center w-full bg-white">
			<p className="text-sm font-semibold">
				©2024 • Simple Gemini Chat App <span className="font-normal">by</span>{" "}
				<Link href={`/`} className="font-bold text-blue-500">
					Archilst
				</Link>
			</p>
		</div>
	);
}
