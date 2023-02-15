import FirstLine from './FirstLine';
import SecondLine from './SecondLine';

function FifthSection() {
	return (
		<div className="relative py-20 px-8 bg-[rgba(0, 128, 255, 0)] ">
			<section className="w-full max-w-940 mr-auto ml-auto">
				<h2 className="text-cobalto font-semibold text-center text-3xl">
					Our Story Through the Time
				</h2>
				<div className="grid items-start auto-cols-fr gap-y-10 grid-x-10 grid-cols-2 grid-rows-auto1">
					<div className="grid auto-cols-fr grid-rows-auto2 gap-x-10">
						<FirstLine />
						<SecondLine />
					</div>
				</div>
			</section>
		</div>
	);
}

export default FifthSection;
