export default function Prompt(): React.ReactElement {
	return (
		<form action="" className="p-4 lg:p-5 xl:p-6 flex flex-row gap-2 bg-white">
			<input
				type="text"
				name="prompt"
				placeholder="Masukkan Prompt anda..."
				className="p-3 max-w-[24rem] h-[3rem] flex-grow rounded-xl outline-none border border-slate-200 focus:border-2 focus:border-primary bg-slate-200 hover:bg-white focus:bg-white transition-all"
			/>
			<button type="submit" className="py-2 px-4 rounded-xl bg-primary">
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
