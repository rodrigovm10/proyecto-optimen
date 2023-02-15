function FourthCard({ src, alt, title, description }) {
	return (
		<div className="translate-x-0 transition-card w-[30%] h-full whitespace-normal">
			<div className="pb-6 rounded-2xl bg-azulitoClaro">
				<img
					className="mb-[18px] rounded-tl-2xl rounded-tr-2xl"
					src={src}
					alt={alt}
				/>
				<div className="flex pr-6 pl-6 flex-col items-start">
					<h3 className="mb-3 text-azulito text-2xl font-semibold text-center">
						{title}
					</h3>
					<p className="mb-5 opacity-60">{description}</p>
				</div>
			</div>
		</div>
	);
}

export default FourthCard;
