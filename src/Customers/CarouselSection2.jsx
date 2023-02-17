import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Border from '../components/Border';

function CarouselSection2({
	title,
	description,
	src1,
	alt1,
	src2,
	alt2,
	src3,
	alt3,
	src4,
	alt4,
	src5,
	alt5,
	src6,
	alt6,
	src7,
	alt7,
	src8,
	alt8,
	src9,
	alt9,
	src10,
	alt10,
}) {
	return (
		<div className={'mr-8 ml-8 font-monserrat'}>
			<section
				className={
					'mt-[-50px] flex flex-row items-center justify-center py-20 px-8'
				}
			>
				<div className={'mr-auto ml-auto w-full max-w-940'}>
					<div
						className={
							'grid auto-cols-fr auto-rows-auto grid-cols-2 items-center justify-center gap-y-10 gap-x-10'
						}
					>
						<div className={'flex flex-col items-start justify-start'}>
							<h3 className={'mb-3 text-3xl font-semibold text-cobalto'}>
								{title}
							</h3>
							<p className={'leading-7 opacity-60'}>{description}</p>
						</div>
						<Carousel
							autoPlay
							infiniteLoop
							width="80%"
							showArrows={false}
							showThumbs={false}
							showStatus={false}
						>
							<div>
								<img src={src1} alt={alt1} />
							</div>
							<div>
								<img src={src2} alt={alt2} />
							</div>
							<div>
								<img src={src3} alt={alt3} />
							</div>
							<div>
								<img src={src4} alt={alt4} />
							</div>
							<div>
								<img src={src5} alt={alt5} />
							</div>
							<div>
								<img src={src6} alt={alt6} />
							</div>
							<div>
								<img src={src7} alt={alt7} />
							</div>
							<div>
								<img src={src8} alt={alt8} />
							</div>
							<div>
								<img src={src9} alt={alt9} />
							</div>
							<div>
								<img src={src10} alt={alt10} />
							</div>
						</Carousel>
					</div>
					<Border />
				</div>
			</section>
		</div>
	);
}

export default CarouselSection2;
