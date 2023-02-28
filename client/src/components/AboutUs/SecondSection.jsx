import Border from '../Border';
import SecondCard from '../AboutUs/SecondCard';
import Consultant from '../../assets/Imagenes-Optimen/About Us/consultant.png';
import Auditing from '../../assets/Imagenes-Optimen/About Us/check-list.png';
import Business from '../../assets/Imagenes-Optimen/About Us/rules.png';
import Outsoursing from '../../assets/Imagenes-Optimen/About Us/outsourcing.png';
import Innovation from '../../assets/Imagenes-Optimen/About Us/innovation (1).png';
import Interface from '../../assets/Imagenes-Optimen/About Us/interface.png';

function SecondSection() {
	return (
		<div className={'ml-8 mr-8 font-monserrat'}>
			<section className={'py-10 px-8'}>
				<h2 className={'mb-5 text-center text-3xl font-semibold text-cobalto'}>
					Our Services
				</h2>
				<div
					className={'mb-5 grid grid-cols-3 grid-rows-auto2 gap-y-12 gap-x-14'}
				>
					<SecondCard
						src={Consultant}
						alt={'Consultancy'}
						title={'Consultancy'}
						description={'Consultancy Services'}
					></SecondCard>
					<SecondCard
						src={Auditing}
						alt={'Auditing'}
						title={'Auditing'}
						description={'Auditing and process improvement'}
					></SecondCard>
					<SecondCard
						src={Business}
						alt={'Business Rules'}
						title={'Business Rules Development'}
						description={
							'Development of business rules for resource management'
						}
					></SecondCard>
					<SecondCard
						src={Outsoursing}
						alt={'Implementationg Outsourcing'}
						title={'Implementationg Outsourcing'}
						description={
							'Implement Aircraft and Crew Tracking Systems and Optimizers'
						}
					></SecondCard>
					<SecondCard
						src={Innovation}
						alt={'Innovation'}
						title={'Innovation'}
						description={'Innovation and Development of new systems'}
					></SecondCard>
					<SecondCard
						src={Interface}
						alt={'Interfaces Development'}
						title={'Interfaces Development'}
						description={
							'Development of Integrations / Interfaces for computer systems'
						}
					></SecondCard>
				</div>
				<Border />
			</section>
		</div>
	);
}

export default SecondSection;
