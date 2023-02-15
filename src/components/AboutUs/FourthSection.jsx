import Border from '../Border';
import FourthCard from './FourthCard';

function FourthSection() {
	return (
		<div className="ml-8 mr-8 font-monserrat">
			<section className="py-10 px-8">
				<h2 className="text-cobalto font-semibold text-center text-3xl mb-5">
					Innovation Hub
				</h2>
				<p className="max-w-[530px] mr-auto ml-auto opacity-60 text-center text-opacidad">
					Througt our capabilities, the services we provide , and our
					commitment, we implement proyects resulting in sastifiedclients and
					succes stories
				</p>
				<div className="h-auto mt-12 text-center">
					<div className="overflow-hidden whitespace-nowrap h-full z-10 flex justify-evenly">
						<div
							className="translate-x-0 transition-card w-[30%] h-full whitespace-normal"
							aria-label="1 of 5"
							role="group"
						>
							<div className="pb-6 rounded-2xl bg-azulitoClaro">
								<img
									className="mb-[18px] rounded-tl-2xl rounded-tr-2xl w-[350px]"
									src="./src/assets/Imagenes-Optimen/HANNOVER_MESSE.jpg"
									alt="HANNOVER_MESSE"
								/>
								<div className="flex pr-6 pl-6 flex-col items-start text-center">
									<h3 className="mb-3 text-azulito text-2xl font-semibold text-center">
										Hannover Messe
									</h3>
									<p className="mb-5 opacity-60">
										Optimen family present at "Industrial Transformation Mexico,
										Hannover Messe". HANNOVER MESSE is the most important
										international platform and hot spot for industrial
										transformation - with excellent innovations or unusual
										products.
									</p>
								</div>
							</div>
						</div>
						<div
							className="translate-x-0 transition-card w-[30%] h-full whitespace-normal"
							aria-label="2 of 5"
							role="group"
						>
							<div className="pb-12 rounded-2xl bg-azulitoClaro">
								<img
									className="mb-[18px] rounded-tl-2xl rounded-tr-2xl h-[227px]"
									src="./src/assets/Imagenes-Optimen/xprize_ana_avatar.png"
									alt="xprize"
								/>
								<div className="flex pr-6 pl-6 flex-col items-start text-center">
									<h3 className="mb-3 text-azulito text-2xl font-semibold text-center">
										Ana Avatar XPrize
									</h3>
									<p className="mb-5 opacity-60">
										Optimen teamed up with Inbiodroid are working together on
										ANA Avatar XPRIZE challenge that aims to create an Avatar
										system that can transport human presence to a remote
										location in real time.
									</p>
								</div>
							</div>
						</div>
						<div
							className="translate-x-0 transition-card w-[30%] h-full whitespace-normal"
							aria-label="3 of 5"
							role="group"
						>
							<div className="pb-4 rounded-2xl bg-azulitoClaro">
								<img
									className="mb-[18px] rounded-tl-2xl rounded-tr-2xl h-[227px] w-[450px]"
									src="./src/assets/Imagenes-Optimen/aws_mentefactura.png"
									alt="xprize"
								/>
								<div className="flex pr-6 pl-6 flex-col items-start text-center">
									<h3 className="mb-3 text-azulito text-2xl font-semibold text-center">
										AWS Mentefactura GTO Challenge
									</h3>
									<p className="mb-5 opacity-60">
										Hackathon organized by the alliance between AWS, Optimen,
										Educafin, IdeaGTO, SEG and GAP with the purpose that
										students, Guanajuato talent, will execute innovative
										projects aimed at improving airport services.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="static mt-6 bg-white m-auto pt-3 h-[40px]">
						<div className=""></div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default FourthSection;
