import { useTranslation } from 'react-i18next';

function FirstLine() {
	const [t] = useTranslation('global');

	return (
		<div
			className={
				'sticky flex flex-col items-start justify-start font-monserrat'
			}
		>
			{Array(16)
				.fill()
				.map((_, i) => (
					<p
						key={i}
						className={
							'mb-9 text-2xl font-semibold italic leading-8 text-black opacity-60 hover:opacity-100'
						}
					>
						{t(`about-us.fifth-section.part-${i}`)} {<br />}
					</p>
				))}
		</div>
	);
}

export default FirstLine;
