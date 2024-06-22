"use server";

import { useDispatch } from "react-redux";
import { setPrompt } from "./reducer/promptSlice";

export default async function prompt(formData: FormData) {
	// const userPrompt = formData.get("search") as String;
	const dispatch = useDispatch();

	dispatch(setPrompt("State"));

	// await console.log(userPrompt);
}
