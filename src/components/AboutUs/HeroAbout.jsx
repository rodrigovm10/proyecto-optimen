function HeroAbout({ title, description }) {
	return (
		<>
			<div className="bg-heroAbout bg-no-repeat flex h-500 justify-center items-center bg-fixed mb-16 font-monserrat bg-cover">
				<div className="w-3/4 max-w-7xl text-center">
					<div className="w-4/5 mr-auto mb-9 ml-auto">
						<h1 className=" mt-2.5 mb-8 opacity-80 text-6xl leading-10 font-semibold text-white">
							{title}
						</h1>
						<p className="mb-2 text-xl leading-9 font-semibold text-white opacity-60">
							{description}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default HeroAbout;
