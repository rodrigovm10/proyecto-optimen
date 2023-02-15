import Border from '../Border';
import ThirdCard from './ThirdCard';

function ThirdSection() {
	return (
		<div className="ml-8 mr-8 font-monserrat">
			<section className="py-10 px-8">
				<h2 className="text-cobalto font-semibold text-center text-3xl mb-5">
					Airline Experience
				</h2>
				<div className="h-auto mt-12 text-center mb-5">
					<div className="overflow-hidden whitespace-nowrap h-full z-10 flex justify-around">
						<ThirdCard
							src="./src/assets/Imagenes-Optimen/airplane_1.jpg"
							alt="airplane1"
							description="Associated with long experience in the Airline Industry with high trust and tight relation with commercial airlines and industry key players."
						/>
						<ThirdCard
							src="./src/assets/Imagenes-Optimen/airplane_2.jpg"
							alt="airplane2"
							description="Broad experience developing software in real Airline Operational Control Systems and implementation of Optimization Software."
						/>
						<div className="w-3/12 mr-4 h-full whitespace-normal">
							<div className="rounded-2xl bg-azulitoClaro shadow-sombra pb-[72px]">
								<img
									className="mb-5 rounded-tr-2xl rounded-l-2xl rounded-bl-none bg-opacity h-52"
									src="./src/assets/Imagenes-Optimen/airplane_3.jpg"
									alt="airplane3"
								/>
								<div className="flex px-6 flex-col items-start">
									<p className="mb-5 flex-ceroAuto">
										Strong Project Management following the industry best
										practices.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Border />
			</section>
		</div>
	);
}

export default ThirdSection;
