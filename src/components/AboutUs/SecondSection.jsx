import Border from '../Border';
import SecondCard from '../AboutUs/SecondCard';
function SecondSection() {
	return (
		<div className="ml-8 mr-8 font-monserrat">
			<section className="py-10 px-8">
				<h2 className="mb-5 text-center text-3xl font-semibold text-cobalto">
					Our Services
				</h2>
				<div className="mb-5 grid grid-cols-3 grid-rows-auto2 gap-y-12 gap-x-14">
					<SecondCard
						src="./src/assets/Imagenes-Optimen/About Us/consultant.png"
						alt="Consultancy"
						title="Consultancy"
						description="Consultancy Services"
					></SecondCard>
					<SecondCard
						src="./src/assets/Imagenes-Optimen/About Us/check-list.png"
						alt="Auditing"
						title="Auditing"
						description="Auditing and process improvement"
					></SecondCard>
					<SecondCard
						src="./src/assets/Imagenes-Optimen/About Us/rules.png"
						alt="Businnes Rules"
						title="Businnes Rules Development"
						description="Development of business rules for resource management"
					></SecondCard>
					<SecondCard
						src="./src/assets/Imagenes-Optimen/About Us/outsourcing.png"
						alt="Implementationg Outsourcing"
						title="Implementationg Outsourcing"
						description="Implement Aircraft and Crew Tracking Systems and Optimizers"
					></SecondCard>
					<SecondCard
						src="./src/assets/Imagenes-Optimen/About Us/innovation (1).png"
						alt="Innovation"
						title="Innovation"
						description="Innovation and Development of new systems"
					></SecondCard>
					<SecondCard
						src="./src/assets/Imagenes-Optimen/About Us/interface.png"
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
