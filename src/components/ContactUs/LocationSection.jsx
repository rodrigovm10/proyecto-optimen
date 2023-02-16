import { Link } from 'react-router-dom';

function LocationSection() {
	return (
		<div>
			<div className="mb-[30px]">
				<h2 className="mb-2 text-xs font-medium uppercase leading-5 tracking-widest">
					OUR OFFICE
				</h2>
				<p className="text-sm text-[#aaa]">
					Av. León 119 {<br />} León, Guanajuato {<br />} Mexico {<br />}
				</p>
			</div>
			<div className="mb-[30px]">
				<h2 className="mb-2 text-xs font-medium uppercase leading-5 tracking-widest">
					Contact
				</h2>
				<Link className="mb-[5px] opacity-60">info@optimen.com.mx</Link>
				<p className="text-sm text-[#aaa]">+52 (477) 7173339</p>
			</div>
		</div>
	);
}

export default LocationSection;
