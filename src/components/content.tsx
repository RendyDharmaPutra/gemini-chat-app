"use client";

import { result } from "@/utils/type";
import Card from "./card";
import ReactMarkdown from "react-markdown";

export default function Content({
	chatResult,
}: {
	chatResult: result;
}): React.ReactElement {
	console.log(chatResult);

	return (
		<div className="p-4 lg:p-5 xl:p-6 flex flex-col items-center justify-center flex-grow w-full">
			{chatResult.status == "success" ? (
				<div className="p-6 w-full min-h-[24rem] rounded-xl bg-white">
					<ReactMarkdown>{chatResult.response.join("")}</ReactMarkdown>
				</div>
			) : (
				<Card chatResult={chatResult} />
			)}
		</div>
	);
}
