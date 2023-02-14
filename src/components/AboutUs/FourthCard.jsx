function FourthCard({ src, alt, description }) {
	return (
		<div className="w-3/12 mr-4 h-full whitespace-normal">
			<div className="pb-6 rounded-2xl bg-azulitoClaro shadow-sombra">
				<img
					className="mb-5 rounded-tr-2xl rounded-l-2xl rounded-bl-none bg-opacity h-52"
					src={src}
					alt={alt}
				/>
				<div className="flex px-6 flex-col items-start">
					<p className="mb-5 flex-ceroAuto">{description}</p>
				</div>
			</div>
		</div>
	);
}

export default FourthCard;
