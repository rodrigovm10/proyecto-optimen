import FirstCard from './FirstCard';
import Border from '../Border';

function FirstSection() {
	return (
		<div className="ml-8 mr-8 font-monserrat">
			<section className="pt-14 pb-10 px-8 mt-[-5rem]">
				<div className="w-full max-w-940 mr-auto ml-auto mb-5">
					<div className="grid mt-12 gap-x-20 gap-y-24 grid-cols-3">
						<FirstCard
							src="./src/assets/Imagenes-Optimen/mission.png"
							alt="mission"
							title="Mission"
							description="Support and facilitate Air Lines around the world to maintain reliable
				and sustainable operations through Technology, Innovation and living our
				Values."
						></FirstCard>
						<FirstCard
							src="./src/assets/Imagenes-Optimen/vision.png"
							alt="vision"
							title="Vision"
							description="To be the First option in Software, Technology and Innovation services for the global Airlines in the area of Aeronautical operational control."
						></FirstCard>
						<FirstCard
							src="./src/assets/Imagenes-Optimen/values.png"
							alt="values"
							title="Values"
							description={
								<p>
									Trustworthy
									<br /> Respect
									<br /> Integrity
									<br /> Teamwork
									<br /> Innovation
								</p>
							}
						></FirstCard>
					</div>
				</div>
				<Border />
			</section>
		</div>
	);
}

export default FirstSection;
