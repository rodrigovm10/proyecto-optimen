import Border from '../Border';
import SecondCard from '../AboutUs/SecondCard';
function SecondSection() {
	return (
		<div className="ml-8 mr-8 font-monserrat">
			<section className="py-10 px-8">
				<h2 className="text-cobalto font-semibold text-center text-3xl mb-5">
					Our Services
				</h2>
				<div className="grid grid-rows-auto2 gap-y-12 gap-x-14 grid-cols-3 mb-5">
					<SecondCard
						src="./src/assets/Imagenes-Optimen/consultant.png"
						alt="Consultancy"
						title="Consultancy"
						description="Consultancy Services"
					></SecondCard>
					<SecondCard
						src="./src/assets/Imagenes-Optimen/check-list.png"
						alt="Auditing"
						title="Auditing"
						description="Auditing and process improvement"
					></SecondCard>
					<SecondCard
						src="./src/assets/Imagenes-Optimen/rules.png"
						alt="Businnes Rules"
						title="Businnes Rules Development"
						description="Development of business rules for resource management"
					></SecondCard>
					<SecondCard
						src="./src/assets/Imagenes-Optimen/outsourcing.png"
						alt="Implementationg Outsourcing"
						title="Implementationg Outsourcing"
						description="Implement Aircraft and Crew Tracking Systems and Optimizers"
					></SecondCard>
					<SecondCard
						src="./src/assets/Imagenes-Optimen/innovation (1).png"
						alt="Innovation"
						title="Innovation"
						description="Innovation and Development of new systems"
					></SecondCard>
					<SecondCard
						src="./src/assets/Imagenes-Optimen/interface.png"
						alt="Interfaces Development"
						title="Interfaces Development"
						description="Development of Integrations / Interfaces for computer systems"
					></SecondCard>
				</div>
				<Border />
			</section>
		</div>
	);
}

export default SecondSection;
