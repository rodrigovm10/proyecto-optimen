import LazyLoad from 'react-lazyload';
function New({ title, date, description, src, alt }) {
	return (
		<div className="relative h-full overflow-hidden whitespace-nowrap">
			<div className="inline-block h-full w-full whitespace-normal text-left">
				<div className="flex items-center justify-between py-3 pr-3 pl-16 ">
					<div className="mr-10 mb-14 flex max-w-[460px] flex-col items-start">
						<div>
							<div className="mb-3 text-[24px] font-semibold leading-9 text-azulito">
								{title}
							</div>
							<div className="text-sm text-[#aaa]">{date}</div>
							<div>{description}</div>
						</div>
					</div>
					<LazyLoad>
						<img
							className="h-[300px] w-[300px] object-cover"
							src={src}
							alt={alt}
						/>
					</LazyLoad>
				</div>
			</div>
		</div>
	);
}

export default New;
