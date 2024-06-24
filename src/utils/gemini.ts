import {
	ChatSession,
	GenerativeModel,
	GoogleGenerativeAI,
	HarmBlockThreshold,
	HarmCategory,
} from "@google/generative-ai";

// Call the gemini-pro-vision model, and get a stream of results
const genAI: GoogleGenerativeAI = new GoogleGenerativeAI(
	process.env.NEXT_PUBLIC_API_KEY!,
);

const model: GenerativeModel = genAI.getGenerativeModel({
	model: "gemini-pro",
	safetySettings: [
		{
			category: HarmCategory.HARM_CATEGORY_HARASSMENT,
			threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
		},
	],
});

const chat: ChatSession = model.startChat({
	history: [],
	// Check here
	generationConfig: {
		maxOutputTokens: 1000,
	},
});

export default chat;
