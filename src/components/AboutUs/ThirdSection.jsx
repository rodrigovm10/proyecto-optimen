import Border from '../Border';
import ThirdCard from './ThirdCard';
import Airplane1 from '../../assets/Imagenes-Optimen/About Us/airplane_1.jpg';
import Airplane2 from '../../assets/Imagenes-Optimen/About Us/airplane_2.jpg';
import Airplane3 from '../../assets/Imagenes-Optimen/About Us/airplane_3.jpg';

function ThirdSection() {
	return (
		<div className={'ml-8 mr-8 font-monserrat'}>
			<section className={'py-10 px-8'}>
				<h2 className={'mb-5 text-center text-3xl font-semibold text-cobalto'}>
					Airline Experience
				</h2>
				<div className={'mt-12 mb-5 h-auto text-center'}>
					<div
						className={
							'z-10 flex h-full justify-around overflow-hidden whitespace-nowrap'
						}
					>
						<ThirdCard
							src={Airplane1}
							alt={'airplane1'}
							description={
								'Associated with long experience in the Airline Industry with high trust and tight relation with commercial airlines and industry key players.'
							}
						/>
						<ThirdCard
							src={Airplane2}
							alt={'airplane2'}
							description={
								'Broad experience developing software in real Airline Operational Control Systems and implementation of Optimization Software.'
							}
						/>
						<div className={'mr-4 h-full w-3/12 whitespace-normal'}>
							<div
								className={
									'rounded-2xl bg-azulitoClaro pb-[72px] shadow-sombra'
								}
							>
								<img
									className={
										'mb-5 h-52 w-full rounded-l-2xl rounded-tr-2xl rounded-bl-none bg-opacity'
									}
									src={Airplane3}
									alt={'airplane3'}
								/>
								<div className={'flex flex-col items-start px-6'}>
									<p className={'mb-5 flex-ceroAuto'}>
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
