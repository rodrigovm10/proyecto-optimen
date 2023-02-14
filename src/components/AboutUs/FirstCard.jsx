function FirstCard({ src, alt, title, description }) {
	return (
		<div className="flex flex-col justify-start items-center text-center">
			<img className="w-20 h-20 mb-4 object-cover" src={src} alt={alt} />
			<h3 className="text-azulito font-semibold text-2xl my-3">{title}</h3>
			<p className="opacity-60 mb-5 ">{description}</p>
		</div>
	);
}

export default FirstCard;
