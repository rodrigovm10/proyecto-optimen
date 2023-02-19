import FirstLine from './FirstLine';
import SecondLine from './SecondLine';

function FifthSection() {
	return (
		<div className={'bg-[rgb(0, 128, 255, 0)] relative py-20 px-8'}>
			<h2
				className={
					'mb-9 text-center text-4xl font-semibold leading-10 text-cobalto'
				}
			>
				Our Story Through the Time
			</h2>
			<section className={'mr-auto ml-auto w-full max-w-940'}>
				<div className={'flex items-start justify-center gap-y-10 gap-x-10'}>
					<SecondLine />
				</div>
			</section>
		</div>
	);
}

export default FifthSection;
