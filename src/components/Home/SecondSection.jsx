function SecondSection() {
	return (
		<section className="font-monserrat">
			<h2 className="mt-10 mb-10 text-center text-4xl font-semibold leading-40 text-cobalto">
				Awards and Certifications
			</h2>
			<div className="overflow-hidden py-6 px-8 opacity-80 ">
				<div className=" mr-auto ml-auto w-full max-w-4xl ">
					<div className="flex items-center justify-around">
						<img
							className="mr-4 ml-4 w-32"
							src="./src/assets/Imagenes-Optimen/Home/esr.png"
							alt="esr"
						/>
						<img
							className="mr-4 ml-4 w-14"
							src="./src/assets/Imagenes-Optimen/Home/marca-gto-logo.png"
							alt="gto-logo"
						/>
						<img
							className="mr-4 ml-4 w-28"
							src="./src/assets/Imagenes-Optimen/Home/boeing_logo.png"
							alt="boeing_logo"
						/>
						<img
							className="mr-4 ml-4 w-24"
							src="./src/assets/Imagenes-Optimen/Home/iso.jpg"
							alt="ISO"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SecondSection;
