import Content from "@/components/content";
import Prompt from "@/components/prompt";

export default function Home(): React.ReactElement {
	return (
		<main className="flex-grow flex flex-col bg-stone-200">
			<Prompt />
			<Content />
		</main>
	);
}
