export default function Card(): React.ReactElement {
	return (
		<div className="p-8 flex justify-center items-center w-full md:w-[30rem] lg:w-[32rem] h-[20rem] rounded-xl bg-white">
			<div className="flex flex-col justify-center items-center text-center ">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 16 16"
					className="w-12 h-12 mb-6"
				>
					<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
				</svg>
				<h1 className="font-semibold lg:text-xl">Belum ada pertanyaan</h1>
				<p className="text-sm lg:text-md">
					Silahkan masukkan pertanyaan anda pada prompt di atas
				</p>
			</div>
		</div>
	);
}
