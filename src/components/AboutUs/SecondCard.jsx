function SecondCard({ src, alt, title, description }) {
	return (
		<div>
			<img className={'w-[50px]'} src={src} alt={alt} />
			<h3 className={'text-semibold mb-3 text-xl leading-8 text-azulito'}>
				{title}
			</h3>
			<p className={'opacity-60'}>{description}</p>
		</div>
	);
}

export default SecondCard;
