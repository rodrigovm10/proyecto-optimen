function SecondSection() {
	return (
		<section className="font-monserrat">
			<h2 className="mt-10 mb-10 text-cobalto font-semibold text-4xl leading-40 text-center">
				Awards and Certifications
			</h2>
			<div className="opacity-80 py-6 px-8 overflow-hidden ">
				<div className=" w-full max-w-4xl mr-auto ml-auto ">
					<div className="flex justify-around items-center">
						<img
							className="w-32 mr-4 ml-4"
							src="./src/assets/Imagenes-Optimen/esr.png"
							alt="esr"
						/>
						<img
							className="w-14 mr-4 ml-4"
							src="./src/assets/Imagenes-Optimen/marca-gto-logo.png"
							alt="gto-logo"
						/>
						<img
							className="w-28 mr-4 ml-4"
							src="./src/assets/Imagenes-Optimen/boeing_logo.png"
							alt="boeing_logo"
						/>
						<img
							className="w-24 mr-4 ml-4"
							src="./src/assets/Imagenes-Optimen/iso.jpg"
							alt="ISO"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SecondSection;
