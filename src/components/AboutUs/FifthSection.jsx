import FirstLine from './FirstLine';
import SecondLine from './SecondLine';

function FifthSection() {
	return (
		<div className={'bg-[rgba(0, 128, 255, 0)] relative py-20 px-8 '}>
			<section className={'mr-auto ml-auto w-full max-w-940'}>
				<h2 className={'text-center text-3xl font-semibold text-cobalto'}>
					Our Story Through the Time
				</h2>
				<div
					className={
						'grid-x-10 grid auto-cols-fr auto-rows-auto grid-cols-2 items-start gap-y-10'
					}
				>
					<div className={'grid auto-cols-fr grid-rows-auto2 gap-x-10'}>
						<FirstLine />
						<SecondLine />
					</div>
				</div>
			</section>
		</div>
	);
}

export default FifthSection;
