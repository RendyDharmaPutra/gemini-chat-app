"use client";

import Content from "@/components/content";
import Prompt from "@/components/prompt";
import { result } from "@/utils/type";
import { useState } from "react";

export default function Home(): React.ReactElement {
	const [chatResult, setChatResult] = useState<result>({
		status: "null",
		response: ["Silahkan masukkan pertanyaan anda pada prompt di atas"],
	});

	return (
		<main className="flex-grow flex flex-col bg-stone-200">
			<Prompt setChatResult={setChatResult} />
			<Content chatResult={chatResult} />
		</main>
	);
}
