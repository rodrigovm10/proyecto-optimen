import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Hannover from '../../assets/Imagenes-Optimen/About Us/HANNOVER_MESSE.jpg';
import Xprice from '../../assets/Imagenes-Optimen/About Us/xprize_ana_avatar.png';
import AWS from '../../assets/Imagenes-Optimen/About Us/aws_mentefactura.png';
import InnovationHUB from '../../assets/Imagenes-Optimen/About Us/Inn_Hub.png';
import Educate from '../../assets/Imagenes-Optimen/About Us/Educate_Opti.png';
import Border from '../Border';
function FourthSection() {
	return (
		<div className={'ml-8 mr-8 font-monserrat'}>
			<section className={'py-10 px-8'}>
				<h2 className={'mb-5 text-center text-3xl font-semibold text-cobalto'}>
					Innovation Hub
				</h2>
				<p
					className={
						'mr-auto ml-auto max-w-[530px] text-center text-opacidad opacity-60'
					}
				>
					Througt our capabilities, the services we provide , and our
					commitment, we implement proyects resulting in sastifiedclients and
					succes stories
				</p>

				<div className={'mt-12 h-auto text-center'}>
					<Carousel>
						<div
							className={
								'z-10 flex h-full justify-evenly overflow-hidden whitespace-nowrap'
							}
						>
							<div
								className={
									'transition-card h-full w-[30%] translate-x-0 whitespace-normal'
								}
							>
								<div className={'rounded-2xl bg-azulitoClaro pb-6'}>
									<img
										className={
											'mb-[18px] w-[350px] rounded-tl-2xl rounded-tr-2xl'
										}
										src={Hannover}
										alt={'HANNOVER_MESSE'}
									/>
									<div
										className={
											'flex flex-col items-start pr-6 pl-6 text-center'
										}
									>
										<h3
											className={
												'mb-3 text-center text-2xl font-semibold text-azulito'
											}
										>
											Hannover Messe
										</h3>
										<p className={'mb-5 opacity-60'}>
											Optimen family present at 'Industrial Transformation
											Mexico, Hannover Messe'. HANNOVER MESSE is the most
											important international platform and hot spot for
											industrial transformation - with excellent innovations or
											unusual products.
										</p>
									</div>
								</div>
							</div>
							<div
								className={
									'transition-card h-full w-[30%] translate-x-0 whitespace-normal'
								}
							>
								<div className={'rounded-2xl bg-azulitoClaro pb-12'}>
									<img
										className={
											'mb-[18px] h-[227px] rounded-tl-2xl rounded-tr-2xl'
										}
										src={Xprice}
										alt={'xprize'}
									/>
									<div
										className={
											'flex flex-col items-start pr-6 pl-6 text-center'
										}
									>
										<h3
											className={
												'mb-3 text-center text-2xl font-semibold text-azulito'
											}
										>
											Ana Avatar XPrize
										</h3>
										<p className={'mb-5 opacity-60'}>
											Optimen teamed up with Inbiodroid are working together on
											ANA Avatar XPRIZE challenge that aims to create an Avatar
											system that can transport human presence to a remote
											location in real time.
										</p>
									</div>
								</div>
							</div>
							<div
								className={
									'transition-card h-full w-[30%] translate-x-0 whitespace-normal'
								}
							>
								<div className={'rounded-2xl bg-azulitoClaro pb-4'}>
									<img
										className={
											'mb-[18px] h-[227px] w-[450px] rounded-tl-2xl rounded-tr-2xl'
										}
										src={AWS}
										alt={'xprize'}
									/>
									<div
										className={
											'flex flex-col items-start pr-6 pl-6 text-center'
										}
									>
										<h3
											className={
												'mb-3 text-center text-2xl font-semibold text-azulito'
											}
										>
											AWS Mentefactura GTO Challenge
										</h3>
										<p className={'mb-5 opacity-60'}>
											Hackathon organized by the alliance between AWS, Optimen,
											Educafin, IdeaGTO, SEG and GAP with the purpose that
											students, Guanajuato talent, will execute innovative
											projects aimed at improving airport services.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div
							className={
								'z-10 flex h-full justify-evenly overflow-hidden whitespace-nowrap'
							}
						>
							<div
								className={
									'transition-card h-full w-[30%] translate-x-0 whitespace-normal'
								}
							>
								<div className={'rounded-2xl bg-azulitoClaro pb-[170px]'}>
									<img
										className={
											'mb-[18px] h-[227px] rounded-tl-2xl rounded-tr-2xl'
										}
										src={Educate}
										alt={'Educate Optimen'}
									/>
									<div
										className={
											'flex flex-col items-start pr-6 pl-6 text-center'
										}
									>
										<h3
											className={
												'mb-3 text-center text-2xl font-semibold text-azulito'
											}
										>
											Educate Optimen
										</h3>
										<p className={'mb-5 opacity-60'}>Educate Optimen</p>
									</div>
								</div>
							</div>
							<div
								className={
									'transition-card h-full w-[30%] translate-x-0 whitespace-normal'
								}
							>
								<div className={'rounded-2xl bg-azulitoClaro pb-[120px]'}>
									<img
										className={
											'mb-[18px] h-[227px] rounded-tl-2xl rounded-tr-2xl'
										}
										src={InnovationHUB}
										alt={'InnovationHUB'}
									/>
									<div
										className={
											'flex flex-col items-start pr-6 pl-6 text-center'
										}
									>
										<h3
											className={
												'mb-3 text-center text-2xl font-semibold text-azulito'
											}
										>
											Innovation Hub
										</h3>
										<p className={'mb-5 opacity-60'}>
											Optimen inaugurated its innovation center, a space focus
											on competencies development for the aeronautical sector.
										</p>
									</div>
								</div>
							</div>
						</div>
					</Carousel>
					<Border />
				</div>
			</section>
		</div>
	);
}

export default FourthSection;
