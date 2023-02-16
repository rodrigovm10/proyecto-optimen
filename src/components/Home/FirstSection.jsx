import Border from '../Border';
// import ;

function FirstSection() {
	return (
		<div className={'ml-8 mr-8 font-monserrat'}>
			<section className={'mr-auto ml-auto w-full max-w-1440'}>
				<div className={'mt-16 mb-16'}>
					<div
						className={'0 mb-8 grid grid-cols-2 items-center gap-x-20 gap-y-8'}
					>
						<div className={'mb-8'}>
							<h2
								className={
									'mt-3 mb-5 text-4xl font-semibold leading-40 text-cobalto'
								}
							>
								A World Class Global Enterpise
							</h2>
							<p className={'mb-3 text-base leading-6 text-slate-400'}>
								Mexican Company with the following experience since 2006:
								Resource Optimization Consultancy and Configuration Support
								Services IT Software Solutions Development
							</p>
						</div>
						<img
							className={'max-w-full'}
							// src="./src/assets/Imagenes-Optimen/desktop_img (1).webp"
							alt={'A world class global enterpise'}
						/>
					</div>
					<Border />
					<div
						className={
							'mb-8 mt-12 grid grid-cols-2 items-center gap-x-20 gap-y-8'
						}
					>
						<img
							className="max-w-full"
							// src="./src/assets/Imagenes-Optimen/desktop_img (1).webp"
							alt={'A world class global enterpise'}
						/>
						<div className={'relative left-20 mb-8'}>
							<h2
								className={
									'mt-3 mb-5 text-4xl font-semibold leading-40 text-cobalto'
								}
							>
								Our Purpose
							</h2>
							<p className={'mb-3 text-base leading-6 text-slate-400 '}>
								Streamline the world mobility
							</p>
						</div>
					</div>
				</div>
				<Border />
				<div className={'text-center'}>
					<h2 className={'mb-5 mt-7 pb-10 text-4xl font-semibold text-cobalto'}>
						Capabilities
					</h2>
					<div className={'grid grid-cols-2 gap-4'}>
						<p
							className={'font-bold text-azulito opacity-30 hover:opacity-100'}
						>
							Airline Operations Expertise
						</p>
						<p className={'font-bold opacity-30 hover:opacity-100'}>
							Analytics / Analysis Development
						</p>
						<p className={'font-bold opacity-30 hover:opacity-100'}>
							Software Architecture
						</p>
						<p
							className={'font-bold text-azulito opacity-30 hover:opacity-100'}
						>
							Consulting & Businnes Development
						</p>
						<p
							className={'font-bold text-azulito opacity-30 hover:opacity-100'}
						>
							New Products and R&D
						</p>
						<p className={'font-bold opacity-30 hover:opacity-100'}>
							High Technologý Exterpise
						</p>
						<p className={'font-bold opacity-30 hover:opacity-100'}>
							Customer Trust
						</p>
						<p
							className={'font-bold text-azulito opacity-30 hover:opacity-100'}
						>
							Systems Implementation & Support
						</p>
						<p
							className={'font-bold text-azulito opacity-30 hover:opacity-100'}
						>
							Software Development
						</p>
						<p className={'font-bold opacity-30 hover:opacity-100'}>
							Resource Optimization
						</p>
						<p className={'mb-8 font-bold opacity-30 hover:opacity-100'}>
							Resource Managment
						</p>
						<p
							className={
								'mb-8 font-bold text-azulito opacity-30 hover:opacity-100'
							}
						>
							Operations Modeling
						</p>
					</div>
					<Border />
				</div>
			</section>
		</div>
	);
}

export default FirstSection;
