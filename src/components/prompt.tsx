"use client";

import chat from "@/utils/gemini";
import prompt from "@/utils/promptAction";
import { result } from "@/utils/type";
import { EnhancedGenerateContentResponse } from "@google/generative-ai";
import { Dispatch, SetStateAction, useState } from "react";

export default function Prompt({
	setChatResult,
}: {
	setChatResult: Dispatch<SetStateAction<result>>;
}): React.ReactElement {
	const [input, setInput] = useState<string>("");

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	const submit = async (e: React.MouseEvent) => {
		e.preventDefault();
		setChatResult({
			status: "success",
			response: ["**Generating...**"],
		});

		if (input.length != 0) {
			try {
				const result = await chat.sendMessageStream(input);

				// let buffer: result = {
				// 	status: "success",
				// 	response: [],
				// };
				const buffer: string[] = [];

				// setChatResult(result.stream);
				for await (let response of result.stream) {
					buffer.push(response.text());
				}

				console.log(buffer);

				setChatResult({
					status: "success",
					response: buffer,
				});
			} catch (e) {
				console.log(e);

				// const error: result = {
				// 	status: "error",
				// 	response: [String(e)],
				// };
				setChatResult({
					status: "error",
					response: [String(e)],
				});
			}
		}
	};

	return (
		<form
			// action={prompt}
			className="p-4 lg:p-5 xl:p-6 flex flex-row gap-2 bg-white"
		>
			<input
				type="text"
				name="search"
				id="search"
				onChange={handleInput}
				placeholder="Masukkan Prompt anda..."
				className="p-3 max-w-[24rem] h-[3rem] flex-grow rounded-xl outline-none border border-slate-200 focus:border-2 focus:border-primary bg-slate-200 hover:bg-white focus:bg-white transition-all"
			/>
			<button
				type="submit"
				className="py-2 px-4 rounded-xl bg-primary"
				onClick={submit}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					id="send"
				>
					<path fill="none" d="M0 0h24v24H0V0z"></path>
					<path
						fill="#ffffff"
						d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"
					></path>
				</svg>
			</button>
		</form>
	);
}
