import FirstCard from './FirstCard';
import Border from '../Border';
import Mission from '../../assets/Imagenes-Optimen/About Us/mission.png';
import Vision from '../../assets/Imagenes-Optimen/About Us/vision.png';
import Values from '../../assets/Imagenes-Optimen/About Us/values.png';
function FirstSection() {
	return (
		<div className={'ml-8 mr-8 font-monserrat'}>
			<section className={'mt-[-5rem] px-8 pt-14 pb-10'}>
				<div className={'mr-auto ml-auto mb-5 w-full max-w-940'}>
					<div className={'mt-12 grid grid-cols-3 gap-x-20 gap-y-24'}>
						<FirstCard
							src={Mission}
							alt={'mission'}
							title={'Mission'}
							description={
								'Support and facilitate Air Lines around the world to maintain reliable and sustainable operaions through Technology, Innovation and living our Values.'
							}
						></FirstCard>
						<FirstCard
							src={Vision}
							alt={'vision'}
							title={'Vision'}
							description={
								'To be the First option in Software, Technology and Innovation services for the global Airlines in the area of Aeronautical operational control.'
							}
						></FirstCard>
						<FirstCard
							src={Values}
							alt={'values'}
							title={'Values'}
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
