function FourthCard({ src, alt, title, description }) {
	return (
		<div
			className={
				'transition-card h-full w-[30%] translate-x-0 whitespace-normal font-monserrat'
			}
		>
			<div className={'rounded-2xl bg-azulitoClaro pb-6'}>
				<img
					className={'mb-[18px] rounded-tl-2xl rounded-tr-2xl'}
					src={src}
					alt={alt}
				/>
				<div className={'flex flex-col items-start pr-6 pl-6'}>
					<h3
						className={'mb-3 text-center text-2xl font-semibold text-azulito'}
					>
						{title}
					</h3>
					<p className={'mb-5 opacity-60'}>{description}</p>
				</div>
			</div>
		</div>
	);
}

export default FourthCard;
