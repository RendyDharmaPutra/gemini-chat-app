export default function Home() {
	return (
		<main className="flex-grow bg-stone-200">
			<form action="" className="p-3 flex flex-row gap-2 bg-white">
				<input className="p-2 h-[3rem] flex-grow rounded-xl outline-none border border-stone-200 focus:border-2 focus:border-primary bg-stone-200 hover:bg-white focus:bg-white transition-all" />
				<button className="py-2 px-4 rounded-xl bg-primary">Send</button>
			</form>
		</main>
	);
}
