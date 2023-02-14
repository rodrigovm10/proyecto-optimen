function SecondCard({ src, alt, title, description }) {
	return (
		<did>
			<img className="w-[50px]" src={src} alt={alt} />
			<h3 className="mb-3 text-azulito text-semibold leading-8 text-xl">
				{title}
			</h3>
			<p className="opacity-60">{description}</p>
		</did>
	);
}

export default SecondCard;
