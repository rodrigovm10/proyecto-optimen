import { Link } from 'react-router-dom';
function Nav({ title, link1, link2, link3, link4, link5, to1, to2 }) {
	return (
		<div className="text-white flex flex-col justify-start items-start text-sm leading-4 ">
			<p className="opacity-80 font-bold tracking-wider uppercase">{title}</p>
			<Link to={to1} className="opacity-60 mt-3 mb-1">
				{link1}
			</Link>
			<Link to={to2} className="opacity-60 mt-3 mb-1">
				{link2}
			</Link>
			<Link className="opacity-60 mt-3 mb-1">{link3}</Link>
			<Link className="opacity-60 mt-3 mb-1">{link4}</Link>
			<Link className="opacity-60 mt-3 mb-1">{link5}</Link>
		</div>
	);
}

export default Nav;
