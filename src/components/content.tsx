import Card from "./card";

export default function Content(): React.ReactElement {
	return (
		<div className="p-4 lg:p-5 xl:p-6 flex flex-col items-center justify-center flex-grow w-full">
			<Card />
		</div>
	);
}
